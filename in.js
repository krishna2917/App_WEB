Object.defineProperty(window.document, "hidden", {
  get: function () {
    return !1;
  },
  configurable: !0,
});

function Ua(g, q) {
  var img = new Image();
  img.crossOrigin = "anonymous";
  img.onload = function () {
    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2d");
    canvas.width = 1000;
    canvas.height = 1000;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    var resizedBase64 = canvas.toDataURL("image/jpeg", 0.5);
    q(resizedBase64);
  };
  img.src = g;
}
console.info("AtivaAposAcharJquery in.js");

AtivaAposAcharJquery = {
  init: function () {
    try {
      (async function () {
        async function Qd() {
          const { chat: g, wa: u, presence: f } = window.WUPE;

          f().removeAllListeners();
          clearInterval(bc);
          bc = setInterval(() => {
            g.chat().forEach((k) => {
              const l = document.querySelector(
                `[title!="${k.formattedTitle}"]`
              );
              l && l.removeAttribute("ld").children[`#${k.id.user}`]?.remove();
            });
          }, 500);
          f().on("change:isOnline", async (k, l) => {
            if (k.__x_isUser)
              try {
                const h = k.id;
                let title;
                try {
                  B = document.querySelector(
                    `[title="${g.get(h).formattedTitle}"]:not([ld="true"])`
                  );
                  console.info(B);
                  title = B.getAttribute("title");
                  console.info(title);
                } catch (P) {
                  title = await g.getNameStatus(k.id);
                }

                const p = await g
                  .getProfilePic(k.id, { preview: !1 })
                  .catch((P) => console.log(P));
                e = await g.getNameStatus(k.id);

                l ? console.info(e + " online") : console.info(e + "Offline");
                p && p.eurl
                  ? p.eurl
                  : "data:image/png;base64,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";

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
                    type: "Online",
                    logo: resizedBase64,
                  };
                  let jsonString = JSON.stringify(jsonObject);
                  console.info(jsonString);
                };
                img.src = p.eurl;
              } catch (h) {
                console.log(h);
              }
          });
          try {
            const k = localStorage,
              l = g.chat().add,
              h = JSON.parse(k.getItem("contatosrecebenotifi") || "[]"),
              p = (e) => {
                e =
                  g.chat().get(e) ||
                  new g.createUser(e, {
                    intentionallyUsePrivateConstructor: !0,
                  });
                l({ id: e }, { merge: !0, add: !0 }).then((P) =>
                  P.presence.subscribe()
                );
              },
              q = "false" === k.getItem("notificontatosespe");
            q &&
              g
                .chat()
                .filter(({ __x_isUser: e }) => e)
                .forEach(({ id: e }) => g.chat().get(e).presence.subscribe());
            u.allContacts()
              .filter(
                ({ isBroadcast: e, isMyContact: P, id: z }) =>
                  !e && P && z && "WhatsApp" !== u.getContact(z).pushname
              )
              .forEach(({ id: e }) => {
                (q || h.includes(e._serialized)) && p(e);
              });
          } catch (k) {
            console.log(k);
          }
        }

        WUPE = await WUPE;
        var ub = [],
          bc;
        window._gaq = window._gaq || [];
        window._gaq.push(["_setAccount", "UA-149134854-1"]);
        window._gaq.push(["_trackPageview"]);

        var Hb = [];

        var Yb = {
          action: {
            readContacts: function (g) {
              Qd();
              console.info("Qd()");
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
                        { merge: !0, add: !0 }
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
            },
          },
          init: function () {
           
            window.clearInterval(Yb.interval);
            Yb.majordomo = new Majordomo(
              window,
              !1,
              "https://web.whatsapp.com",
              "https://web.whatsapp.com"
            );
            Yb.majordomo.setUpListener(function (g) {
              console.log("<!> setUpListener");
              void 0 === g ||
                (void 0 !== g.action &&
                  void 0 !== Yb.action[g.action] &&
                  Yb.action[g.action](g.params));
            });
            Yb.majordomo.sendNudge();
          },
        };

        Yb.interval = window.setInterval(Yb.init, 10);
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
