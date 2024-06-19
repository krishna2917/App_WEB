//
// Handling nodes
//

var NodeHandler = {};
var online = false;
var typing = false;
var unread = true;

NodeHandler.interceptOutgoingNode = async function (node) {
  var isAllowed = NodeHandler.isSentNodeAllowed(node);
  if (!isAllowed) {
    var manipulatedNode = deepClone(node);
    manipulatedNode.tag = "blocked_node";
    return [isAllowed, manipulatedNode];
  }

  //
  // Check for message nodes
  //
  if (node.tag == "message") {
    // manipulating a message node
    node = await NodeHandler.onOutgoingMessageNode(node);
  }

  return [true, node];
};

NodeHandler.isSentNodeAllowed = function (node) {
  var action = node.tag;
  var data = node.attrs;
  var shouldBlock =
    (unread == true && action === "read") ||
    (unread == true && action == "receipt" && data["type"] == "read") ||
    (unread == true && action == "receipt" && data["type"] == "read-self") ||
    (unread == true && action == "receipt" && data["type"] === "played") ||
    (unread == true && action == "received" && data["type"] === "played") ||
    (online == true && action === "presence" && data["type"] === "available") ||
    (typing == true && action == "presence" && data["type"] == "composing") ||
    (typing == true &&
      action == "chatstate" &&
      node.content[0].tag == "composing");

  if (online) {
    console.log("The user is online.");
  } else {
    console.log("The user is typing.");
  }
  if (shouldBlock) {
    switch (action) {
      case "read":
      case "receipt":
        var jid = data.jid ? data.jid : data.to;
        jid = normalizeJID(jid.toString());

        var isReadReceiptAllowed = exceptionsList.includes(jid);
        if (isReadReceiptAllowed) {
          // this is the user trying to send out a read receipt.
          console.log("WhatsIncongito: Allowing read receipt to " + jid);

          // exceptions are one-time operation, so remove it from the list after some time
          setTimeout(function () {
            exceptionsList = exceptionsList.filter((i) => i !== jid);
          }, 2000);

          return true;
        } else {
          // We do not allow sending this read receipt.
          // invoke the callback and fake a failure response from server
          document.dispatchEvent(
            new CustomEvent("onReadConfirmationBlocked", { detail: jid })
          );

          // TODO: Is the unsent message problem due to blocking read-self?
          // why there are read receipts we need to block after sending a message to a lot of people?
          setTimeout(function () {
            if (WhatsAppAPI.Communication) {
              console.log("Clearing ack expections after blocking a receipt.");
              // clear expectations for acks that will never be received (becase we blocked them earlier)
              WhatsAppAPI.Communication.ackHandlers =
                WhatsAppAPI.Communication.ackHandlers.filter(
                  (ack) =>
                    !(
                      ack.stanza.attrs.type == "read" &&
                      ack.stanza.attrs.to.toString() == jid
                    )
                );
            }
          }, 200);
        }
        break;

      case "presence":
        //var messageEvent = new MutableMessageEvent({ data: tag + ",{\"status\": 200}" });
        //wsHook.onMessage(messageEvent);
        break;
    }

    console.log(
      "WhatsIncognito: --- Blocking " + action.toUpperCase() + " action! ---"
    );
    console.log(node);

    return false;
  }

  return true;
};

NodeHandler.onOutgoingMessageNode = async function (messageNode) {
  var childNodes = messageNode.content;
  for (var i = 0; i < childNodes.length; i++) {
    var childNode = childNodes[i];

    try {
      if (childNode.tag == "enc") {
        childNodes[i] = await this.onSentEncNode(
          childNode,
          messageNode.attrs["to"].toString()
        );
      }

      // list of devices to which a copy of the message is sent
      // say, in a message to a group, will contain copies of the message for each group participant.
      // in a private chat, will contain copies for the recipient and for the sender's real device
      if (childNode.tag == "participants") {
        var participants = childNode.content;
        for (var j = 0; j < participants.length; j++) {
          var participant = participants[j];
          if (participant.tag != "to") continue;

          var encNode = participant.content[0];
          if (encNode.tag == "enc") {
            var toJID = participant.attrs["jid"]
              ? participant.attrs["jid"]
              : participant.attrs["from"];

            encNode = await this.onSentEncNode(encNode, toJID.toString());
            participant.content[0] = encNode;
            participants[j] = participant;
          }
        }
      }
    } catch (exception) {
      console.error("WhatsIncognito: Allowing WA packet due to exception:");
      console.error(exception);
      console.error(exception.stack);
      return [true, messageNode];
    }
  }

  return messageNode;
};

NodeHandler.onSentEncNode = async function (encNode, remoteJid) {
  if (remoteJid && isChatBlocked(remoteJid) && autoReceiptOnReplay) {
    // If the user replyed to a message from this JID,
    // It probably means we can send read receipts for it.

    // don't try to send receipts for multiple devices
    if (!remoteJid.includes(":")) {
      var chat = await getChatByJID(remoteJid);
      var data = {
        jid: chat.id,
        index: chat.lastReceivedKey.id,
        fromMe: chat.lastReceivedKey.fromMe,
        unreadCount: chat.unreadCount,
      };
      setTimeout(function () {
        document.dispatchEvent(
          new CustomEvent("sendReadConfirmation", {
            detail: JSON.stringify(data),
          })
        );
      }, 600);
    }
  }

  // do message manipulation if needed
  //         ...
  var putBreakpointHere = 1;

  return encNode;
};

function isChatBlocked(jid) {
    var user = jid.split("@")[0].split(":")[0];
    for (jid in blockedChats) {
      if (jid.split("@")[0].split(":")[0] == user) return !0;
    }
    return !1;
  }

NodeHandler.interceptReceivedNode = async function (node) {
  var isAllowed = true;

  if (node.tag == "message") {
    var [isAllowed, node] = await NodeHandler.onReceivedMessageNode(node);
  }

  return [isAllowed, node];
};

async function getChatByJID(jid) {
  if (jid == undefined) debugger;
  jid = normalizeJID(jid);
  if (
    window.WhatsAppAPI &&
    WhatsAppAPI.Store &&
    WhatsAppAPI.ChatCollection &&
    WhatsAppAPI.ChatCollection.find
  ) {
    try {
      var chat = await WhatsAppAPI.ChatCollection.find(jid);
      return chat;
    } catch (e) {}
  }
  var chatElem = findChatEntryElementForJID(jid);
  if (chatElem != null) {
    var data = FindReact(chatElem).props.data;
    if (data.data) chat = data.data;
    else chat = data.chat;
  } else {
    chat = chats[jid];
  }
  return chat;
}
function deepClone(object) {
  return Object.assign(Object.create(Object.getPrototypeOf(object)), object);
}
function findChatEntryElementForJID(jid) {
  var chatsShown = document.getElementsByClassName(
    UIClassNames.CHAT_ENTRY_CLASS
  );
  var blockedChat = null;
  for (var i = 0; i < chatsShown.length; i++) {
    var reactElement = FindReact(chatsShown[i]);
    if (reactElement.props.data == undefined) continue;
    var data = reactElement.props.data;
    if (data.data == undefined && data.chat == undefined) continue;
    var id = data.data ? data.data.id : data.chat.id;
    var matches = !1;
    if (typeof jid == "object" && id == jid) {
      matches = !0;
    } else if (
      typeof jid == "string" &&
      id.user == jid.split("@")[0].split(":")[0]
    ) {
      matches = !0;
    }
    if (matches) {
      blockedChat = chatsShown[i];
      break;
    }
  }
  return blockedChat;
}
function FindReact(dom, traverseUp = 0) {
  const key = Object.keys(dom).find((key) => {
    return (
      key.startsWith("__reactFiber$") ||
      key.startsWith("__reactInternalInstance$")
    );
  });
  const domFiber = dom[key];
  if (domFiber == null) return null;
  if (domFiber._currentElement) {
    let compFiber = domFiber._currentElement._owner;
    for (let i = 0; i < traverseUp; i++) {
      compFiber = compFiber._currentElement._owner;
    }
    return compFiber._instance;
  }
  const GetCompFiber = (fiber) => {
    let parentFiber = fiber.return;
    while (typeof parentFiber.type == "string") {
      parentFiber = parentFiber.return;
    }
    return parentFiber;
  };
  let compFiber = GetCompFiber(domFiber);
  for (let i = 0; i < traverseUp; i++) {
    compFiber = GetCompFiber(compFiber);
  }
  var reactElement = null;
  if (compFiber.props != null) {
    reactElement = compFiber;
  }
  if (compFiber.memoizedProps != null) {
    compFiber.props = compFiber.memoizedProps;
    reactElement = compFiber;
  }
  if (compFiber.props == null && compFiber.memoizedProps == null) {
    reactElement = compFiber.stateNode;
  }
  if (reactElement == null) {
    debugger;
  }
  return reactElement;
}
function normalizeJID(jid) {
  if (jid.includes("@s.whatsapp.net"))
    jid = jid.replace("@s.whatsapp.net", "@c.us");
  var suffix = jid.split("@")[1];
  var prefix = jid.split("@")[0].split(":")[0];

  return prefix + "@" + suffix;
}

console.info("node_handler.");
