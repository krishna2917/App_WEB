console.info("AtivaAposAcharJquery in.js");

var AtivaAposAcharJquery = {
  init: function () {
    try {
      (async function () {
        async function Qd() {
          console.info("Qd");
          const { chat: g, wa: u, presence: f } = window.WUPE;

          f().removeAllListeners();

          f().on("change:isOnline", async (k, l) => {
            if (k.__x_isUser)
              try {
                const h = k.id;
                let title;
                try {
                  B = document.querySelector(
                    `[title="${g.get(h).formattedTitle}"]:not([ld="true"])`
                  );
                  title = B.getAttribute("title");
                } catch (P) {
                  title = await g.getNameStatus(k.id);
                }

                const p = await g
                  .getProfilePic(k.id, { preview: false })
                  .catch((P) => console.log(P));
                e = await g.getNameStatus(k.id);

                var pic = p && p.eurl ? p.eurl : "null";
                var type_name = l ? "online" : "Offline";
                if (pic == "null") {
                  let jsonObject = {
                    number: k.id.user,
                    name: title,
                    type: type_name,
                    logo: "",
                  };
                  let jsonString = JSON.stringify(jsonObject);
                  console.info(jsonString);
                } else {
                  var img = new Image();
                  img.crossOrigin = "anonymous";
                  img.onload = function () {
                    var canvas = document.createElement("canvas");
                    var ctx = canvas.getContext("2d");
                    canvas.width = 1000;
                    canvas.height = 1000;
                    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                    var resizedBase64 = canvas.toDataURL("image/jpeg", 0.5);

                    let jsonObject = {
                      number: k.id.user,
                      name: title,
                      type: type_name,
                      logo: resizedBase64,
                    };
                    let jsonString = JSON.stringify(jsonObject);
                    console.info(jsonString);
                  };
                  img.src = pic;
                }
              } catch (h) {
                console.log(h);
              }
          });

          WUPE.wa.allChats().forEach(function (f) {
            f.__x_isUser && WUPE.chat.chat().get(f.id).presence.subscribe();
          }),
            WUPE.wa.allContacts().forEach(async function (f) {
              if (
                0 == f.isBroadcast &&
                f.name &&
                void 0 != f.id &&
                "WhatsApp" != WUPE.wa.getContact(f.id).pushname
              )
                if ((found = WUPE.chat.chat().get(f.id._serialized)))
                  WUPE.chat.chat().get(f.id).presence.subscribe();
                else {
                  WUPE.chat.chat().add(
                    {
                      id: new WUPE.chat.createUser(f.id._serialized, {
                        intentionallyUsePrivateConstructor: !0,
                      }),
                    },
                    { merge: true, add: true }
                  );
                  try {
                    WUPE.chat
                      .chat()
                      .find(f.id._serialized)
                      .then(function (k) {
                        k.presence.subscribe();
                      });
                  } catch (k) {
                    console.log(k);
                  }
                }
            });
        }

        WUPE = await WUPE;
        var bc;
        window._gaq = window._gaq || [];
        window._gaq.push(["_setAccount", "UA-149134854-1"]);
        window._gaq.push(["_trackPageview"]);

        setInterval(Qd(), 10);
      })();
    } catch (aa) {
      console.log(aa);
    }
    console.info("injetei in.js");
    window.clearInterval(AtivaAposAcharJquery.interval);
  },
};

AtivaAposAcharJquery.interval = window.setInterval(
  AtivaAposAcharJquery.init,
  200
);
