let inter123 = setInterval(() => {
  try {
    if (require("WAWebCmd").Cmd.isMainLoaded) {
      clearInterval(inter123);

      (() => {
        var e,
          t,
          a,
          n,
          o = {
            7: (e) => {
              "use strict";
              var t,
                a = "object" == typeof Reflect ? Reflect : null,
                n =
                  a && "function" == typeof a.apply
                    ? a.apply
                    : function (e, t, a) {
                        return Function.prototype.apply.call(e, t, a);
                      };
              t =
                a && "function" == typeof a.ownKeys
                  ? a.ownKeys
                  : Object.getOwnPropertySymbols
                  ? function (e) {
                      return Object.getOwnPropertyNames(e).concat(
                        Object.getOwnPropertySymbols(e)
                      );
                    }
                  : function (e) {
                      return Object.getOwnPropertyNames(e);
                    };
              var o =
                Number.isNaN ||
                function (e) {
                  return e != e;
                };
              function r() {
                r.init.call(this);
              }
              (e.exports = r),
                (e.exports.once = function (e, t) {
                  return new Promise(function (a, n) {
                    function o(a) {
                      e.removeListener(t, r), n(a);
                    }
                    function r() {
                      "function" == typeof e.removeListener &&
                        e.removeListener("error", o),
                        a([].slice.call(arguments));
                    }
                    b(e, t, r, { once: !0 }),
                      "error" !== t &&
                        (function (e, t, a) {
                          "function" == typeof e.on &&
                            b(e, "error", t, { once: !0 });
                        })(e, o);
                  });
                }),
                (r.EventEmitter = r),
                (r.prototype._events = void 0),
                (r.prototype._eventsCount = 0),
                (r.prototype._maxListeners = void 0);
              var i = 10;
              function s(e) {
                if ("function" != typeof e)
                  throw new TypeError(
                    'The "listener" argument must be of type Function. Received type ' +
                      typeof e
                  );
              }
              function l(e) {
                return void 0 === e._maxListeners
                  ? r.defaultMaxListeners
                  : e._maxListeners;
              }
              function c(e, t, a, n) {
                var o, r, i, c;
                if (
                  (s(a),
                  void 0 === (r = e._events)
                    ? ((r = e._events = Object.create(null)),
                      (e._eventsCount = 0))
                    : (void 0 !== r.newListener &&
                        (e.emit("newListener", t, a.listener ? a.listener : a),
                        (r = e._events)),
                      (i = r[t])),
                  void 0 === i)
                )
                  (i = r[t] = a), ++e._eventsCount;
                else if (
                  ("function" == typeof i
                    ? (i = r[t] = n ? [a, i] : [i, a])
                    : n
                    ? i.unshift(a)
                    : i.push(a),
                  (o = l(e)) > 0 && i.length > o && !i.warned)
                ) {
                  i.warned = !0;
                  var u = new Error(
                    "Possible EventEmitter memory leak detected. " +
                      i.length +
                      " " +
                      String(t) +
                      " listeners added. Use emitter.setMaxListeners() to increase limit"
                  );
                  (u.name = "MaxListenersExceededWarning"),
                    (u.emitter = e),
                    (u.type = t),
                    (u.count = i.length),
                    (c = u),
                    console && console.warn && console.warn(c);
                }
                return e;
              }
              function u() {
                if (!this.fired)
                  return (
                    this.target.removeListener(this.type, this.wrapFn),
                    (this.fired = !0),
                    0 === arguments.length
                      ? this.listener.call(this.target)
                      : this.listener.apply(this.target, arguments)
                  );
              }
              function d(e, t, a) {
                var n = {
                    fired: !1,
                    wrapFn: void 0,
                    target: e,
                    type: t,
                    listener: a,
                  },
                  o = u.bind(n);
                return (o.listener = a), (n.wrapFn = o), o;
              }
              function p(e, t, a) {
                var n = e._events;
                if (void 0 === n) return [];
                var o = n[t];
                return void 0 === o
                  ? []
                  : "function" == typeof o
                  ? a
                    ? [o.listener || o]
                    : [o]
                  : a
                  ? (function (e) {
                      for (
                        var t = new Array(e.length), a = 0;
                        a < t.length;
                        ++a
                      )
                        t[a] = e[a].listener || e[a];
                      return t;
                    })(o)
                  : g(o, o.length);
              }
              function W(e) {
                var t = this._events;
                if (void 0 !== t) {
                  var a = t[e];
                  if ("function" == typeof a) return 1;
                  if (void 0 !== a) return a.length;
                }
                return 0;
              }
              function g(e, t) {
                for (var a = new Array(t), n = 0; n < t; ++n) a[n] = e[n];
                return a;
              }
              function b(e, t, a, n) {
                if ("function" == typeof e.on)
                  n.once ? e.once(t, a) : e.on(t, a);
                else {
                  if ("function" != typeof e.addEventListener)
                    throw new TypeError(
                      'The "emitter" argument must be of type EventEmitter. Received type ' +
                        typeof e
                    );
                  e.addEventListener(t, function o(r) {
                    n.once && e.removeEventListener(t, o), a(r);
                  });
                }
              }
              Object.defineProperty(r, "defaultMaxListeners", {
                enumerable: !0,
                get: function () {
                  return i;
                },
                set: function (e) {
                  if ("number" != typeof e || e < 0 || o(e))
                    throw new RangeError(
                      'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
                        e +
                        "."
                    );
                  i = e;
                },
              }),
                (r.init = function () {
                  (void 0 !== this._events &&
                    this._events !== Object.getPrototypeOf(this)._events) ||
                    ((this._events = Object.create(null)),
                    (this._eventsCount = 0)),
                    (this._maxListeners = this._maxListeners || void 0);
                }),
                (r.prototype.setMaxListeners = function (e) {
                  if ("number" != typeof e || e < 0 || o(e))
                    throw new RangeError(
                      'The value of "n" is out of range. It must be a non-negative number. Received ' +
                        e +
                        "."
                    );
                  return (this._maxListeners = e), this;
                }),
                (r.prototype.getMaxListeners = function () {
                  return l(this);
                }),
                (r.prototype.emit = function (e) {
                  for (var t = [], a = 1; a < arguments.length; a++)
                    t.push(arguments[a]);
                  var o = "error" === e,
                    r = this._events;
                  if (void 0 !== r) o = o && void 0 === r.error;
                  else if (!o) return !1;
                  if (o) {
                    var i;
                    if ((t.length > 0 && (i = t[0]), i instanceof Error))
                      throw i;
                    var s = new Error(
                      "Unhandled error." + (i ? " (" + i.message + ")" : "")
                    );
                    throw ((s.context = i), s);
                  }
                  var l = r[e];
                  if (void 0 === l) return !1;
                  if ("function" == typeof l) n(l, this, t);
                  else {
                    var c = l.length,
                      u = g(l, c);
                    for (a = 0; a < c; ++a) n(u[a], this, t);
                  }
                  return !0;
                }),
                (r.prototype.addListener = function (e, t) {
                  return c(this, e, t, !1);
                }),
                (r.prototype.on = r.prototype.addListener),
                (r.prototype.prependListener = function (e, t) {
                  return c(this, e, t, !0);
                }),
                (r.prototype.once = function (e, t) {
                  return s(t), this.on(e, d(this, e, t)), this;
                }),
                (r.prototype.prependOnceListener = function (e, t) {
                  return s(t), this.prependListener(e, d(this, e, t)), this;
                }),
                (r.prototype.removeListener = function (e, t) {
                  var a, n, o, r, i;
                  if ((s(t), void 0 === (n = this._events))) return this;
                  if (void 0 === (a = n[e])) return this;
                  if (a === t || a.listener === t)
                    0 == --this._eventsCount
                      ? (this._events = Object.create(null))
                      : (delete n[e],
                        n.removeListener &&
                          this.emit("removeListener", e, a.listener || t));
                  else if ("function" != typeof a) {
                    for (o = -1, r = a.length - 1; r >= 0; r--)
                      if (a[r] === t || a[r].listener === t) {
                        (i = a[r].listener), (o = r);
                        break;
                      }
                    if (o < 0) return this;
                    0 === o
                      ? a.shift()
                      : (function (e, t) {
                          for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                          e.pop();
                        })(a, o),
                      1 === a.length && (n[e] = a[0]),
                      void 0 !== n.removeListener &&
                        this.emit("removeListener", e, i || t);
                  }
                  return this;
                }),
                (r.prototype.off = r.prototype.removeListener),
                (r.prototype.removeAllListeners = function (e) {
                  var t, a, n;
                  if (void 0 === (a = this._events)) return this;
                  if (void 0 === a.removeListener)
                    return (
                      0 === arguments.length
                        ? ((this._events = Object.create(null)),
                          (this._eventsCount = 0))
                        : void 0 !== a[e] &&
                          (0 == --this._eventsCount
                            ? (this._events = Object.create(null))
                            : delete a[e]),
                      this
                    );
                  if (0 === arguments.length) {
                    var o,
                      r = Object.keys(a);
                    for (n = 0; n < r.length; ++n)
                      "removeListener" !== (o = r[n]) &&
                        this.removeAllListeners(o);
                    return (
                      this.removeAllListeners("removeListener"),
                      (this._events = Object.create(null)),
                      (this._eventsCount = 0),
                      this
                    );
                  }
                  if ("function" == typeof (t = a[e]))
                    this.removeListener(e, t);
                  else if (void 0 !== t)
                    for (n = t.length - 1; n >= 0; n--)
                      this.removeListener(e, t[n]);
                  return this;
                }),
                (r.prototype.listeners = function (e) {
                  return p(this, e, !0);
                }),
                (r.prototype.rawListeners = function (e) {
                  return p(this, e, !1);
                }),
                (r.listenerCount = function (e, t) {
                  return "function" == typeof e.listenerCount
                    ? e.listenerCount(t)
                    : W.call(e, t);
                }),
                (r.prototype.listenerCount = W),
                (r.prototype.eventNames = function () {
                  return this._eventsCount > 0 ? t(this._events) : [];
                });
            },
            759: (e, t, a) => {
              "use strict";
              const n = a(276);
              e.exports = (e) => {
                if (!n(e)) return !1;
                const t = e.trim().match(n.regex),
                  a = {};
                if (t[1]) {
                  a.mediaType = t[1].toLowerCase();
                  const e = t[1].split(";").map((e) => e.toLowerCase());
                  (a.contentType = e[0]),
                    e.slice(1).forEach((e) => {
                      const t = e.split("=");
                      a[t[0]] = t[1];
                    });
                }
                return (
                  (a.base64 = !!t[t.length - 2]),
                  (a.data = t[t.length - 1] || ""),
                  (a.toBuffer = () => {
                    const e = a.base64 ? "base64" : "utf8";
                    return Buffer.from(
                      a.base64 ? a.data : decodeURIComponent(a.data),
                      e
                    );
                  }),
                  a
                );
              };
            },
            276: function (e, t) {
              var a, n;
              void 0 ===
                (n =
                  "function" ==
                  typeof (a = function () {
                    "use strict";
                    function e(t) {
                      return e.regex.test((t || "").trim());
                    }
                    return (
                      (e.regex =
                        /^data:([a-z]+\/[a-z0-9-+.]+(;[a-z0-9-.!#$%*+.{}|~`]+=[a-z0-9-.!#$%*+.{}()_|~`]+)*)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s<>]*?)$/i),
                      e
                    );
                  })
                    ? a.apply(t, [])
                    : a) || (e.exports = n);
            },
            812: (e, t, a) => {
              "use strict";
              a.d(t, { Y: () => s, k: () => i });
              var n = a(658);
              const o = (0, n.WhatsUpLoad)("WAWebWidFactory"),
                r = (0, n.WhatsUpLoad)("WAWebGetProfilePicJob");
              function i(e) {
                return o.createUserWid(e);
              }
              function s(e, t) {
                return r.getProfilePic(e, t);
              }
            },
            974: (e, t, a) => {
              "use strict";
              a.d(t, { q: () => r });
              var n = a(658);
              const o = (0, n.WhatsUpLoad)("WAWebMsgCollection")?.MsgCollection;
              function r(e) {
                return o.get(e);
              }
            },
            772: (e, t, a) => {
              "use strict";
              a.d(t, { Gw: () => s, Jt: () => r, TE: () => i, w5: () => o });
              const n = (0, a(658).WhatsUpLoad)("WAWebChatCollection");
              function o() {
                return n.ChatCollection._models;
              }
              function r(e) {
                return n.ChatCollection.get(e);
              }
              function i() {
                return n.ChatCollection;
              }
              function s() {
                return n.ChatCollection;
              }
            },
            191: (e, t, a) => {
              "use strict";
              a.d(t, { O6: () => p, t5: () => g });
              var n = a(658),
                o = a(509),
                r = (a(974), a(772)),
                i = a(812),
                s = a(242);
              const l = (0, n.WhatsUpLoad)("WAWebUserPrefsMeUser"),
                c = (0, n.WhatsUpLoad)("WAWebMsgKey"),
                u = (0, n.WhatsUpLoad)("WAWebWidFactory"),
                d = (0, n.WhatsUpLoad)("WAWebMsgKeyNewId");
              async function p(e) {
                const t = l.getMaybeMeUser();
                let a, n;
                return (
                  (a = e.id),
                  a.isGroup && (n = u.toUserWid(t)),
                  new c({
                    from: t,
                    to: a,
                    id: await Promise.resolve(d.getMsgKeyNewSHA256Id()),
                    participant: n,
                    selfDir: "out",
                  })
                );
              }
              (0, n.WhatsUpLoad)("WAWebGetEphemeralFieldsMsgActionsUtils"),
                (0, n.WhatsUpLoad)("WATimeUtils"),
                (0, n.WhatsUpLoad)("useWAWebLinkPreview"),
                (0, n.WhatsUpLoad)("WAWebLinkPreviewChatAction"),
                (0, n.WhatsUpLoad)("WAWebLinkPreviewCache"),
                (0, n.WhatsUpLoad)("WAWebBackendJobsCommon")
                  .mediaTypeFromProtobuf;
              const W = (0, n.WhatsUpLoad)(
                "WAWebMediaOpaqueData"
              ).createFromData;
              async function g(e, t, a = {}) {
                let l =
                  "status@broadcast" === e ? (0, s.Y)() : (0, r.Gw)().get(e);
                l ||
                  ((0, r.Gw)().add(
                    {
                      id: new i.k(e, {
                        intentionallyUsePrivateConstructor: !0,
                      }),
                    },
                    { merge: !0, add: !0 }
                  ),
                  (l = r.Gw.get(e)));
                const c = await (0, n.convertToFile)(t, a.mimetype, a.filename),
                  u = (c.name, await W(c, c.type)),
                  d = {
                    isPtt: a.isPtt,
                    asDocument: a.asDocument,
                    asGif: a.asGif,
                    isAudio: "audio" === a.type,
                    asSticker: a.asSticker,
                    precomputedFields: { duration: null, waveform: null },
                  };
                let p;
                "audio" === a.type
                  ? ((d.isPtt = a.isPtt),
                    (d.precomputedFields = await (async function (e, t) {
                      if (e.isPtt)
                        try {
                          const e = await t.arrayBuffer(),
                            a = new AudioContext(),
                            n = await a.decodeAudioData(e),
                            o = n.getChannelData(0),
                            r = 64,
                            i = Math.floor(o.length / r),
                            s = [];
                          for (let e = 0; e < r; e++) {
                            const t = i * e;
                            let a = 0;
                            for (let e = 0; e < i; e++) a += Math.abs(o[t + e]);
                            s.push(a / i);
                          }
                          const l = Math.pow(Math.max(...s), -1),
                            c = s.map((e) => e * l),
                            u = new Uint8Array(
                              c.map((e) => Math.floor(100 * e))
                            );
                          return {
                            duration: Math.floor(n.duration),
                            waveform: u,
                          };
                        } catch (e) {}
                    })(a, c)))
                  : "image" === a.type
                  ? (p = a.isViewOnce)
                  : "video" === a.type
                  ? (d.asGif = a.isGif)
                  : "document" === a.type
                  ? (d.asDocument = !0)
                  : "sticker" === a.type && (d.asSticker = !0);
                const g = (0, n.WhatsUpLoad)("WAWebMedia").prepRawMedia(u, d);
                let b = {};
                if (
                  (a.markIsRead &&
                    (await (0, n.WhatsUpLoad)(
                      "WAWebUpdateUnreadChatAction"
                    ).sendSeen(l, !1)),
                  await g.waitForPrep(),
                  a.wulp)
                ) {
                  let e = (
                    await (0, n.WhatsUpLoad)(
                      "WAWebGenMinimalLinkPreviewChatAction"
                    ).genMinimalLinkPreview2(a.wulp)
                  ).data;
                  b.ctwaContext = {
                    description: e.description,
                    title: e.title,
                    sourceUrl: e.canonicalUrl,
                    thumbnailUrl: "data:image/jpeg;base64," + e.thumbnail,
                    renderLargerThumbnail: !0,
                    mediaType: 1,
                    thumbnail: e.thumbnail,
                  };
                }
                if (l.isGroup && a.tagall) {
                  var A = (0, o.r)(l.id).participants.map((e) => e.id);
                  b.mentionedJidList = A;
                }
                if ("status@broadcast" == e)
                  return {
                    result: await (0, n.WhatsUpLoad)(
                      "WAWebWhatsUpPlusStatusMedia"
                    ).sendMediaMsgToChat(g, l, {
                      addEvenWhilePreparing: !1,
                      caption: a.caption,
                      type: a.type,
                      backgroundColor:
                        null != a.backgroundColor ? a.backgroundColor : null,
                    }),
                  };
                {
                  const e = await (0, n.WhatsUpLoad)(
                    "WAWebMediaPrep"
                  ).sendMediaMsgToChat(g, l, {
                    addEvenWhilePreparing: !1,
                    caption: a.caption,
                    type: a.type,
                    ...b,
                  });
                  return a.waitForAck && (await e), { sendMsgResult: e };
                }
              }
            },
            766: (e, t, a) => {
              "use strict";
              a.r(t),
                a.d(t, {
                  abrirChat: () => c,
                  archiveChat: () => de,
                  chat: () => n.TE,
                  chat_: () => n.Gw,
                  createUser: () => s.k,
                  deleteChat: () => We,
                  downMedia: () => P,
                  entraKnal: () => h,
                  get: () => n.Jt,
                  getActive: () => i,
                  getChatRealName: () => A,
                  getMsg: () => w.q,
                  getName: () => g,
                  getNameStatus: () => W,
                  getProfilePic: () => s.Y,
                  getRealName: () => b,
                  listaTodosChats: () => n.w5,
                  pinChat: () => se,
                  revokeMsg: () => ce,
                  sendCall: () => ne,
                  sendReact: () => re,
                  sfm: () => C.t5,
                  spm: () => Y,
                  state: () => K,
                  stm: () => H,
                  svm: () => B,
                  unMuteKnal: () => M,
                });
              var n = a(772),
                o = a(658);
              const r = (0, o.WhatsUpLoad)("WAWebChatCollection");
              function i() {
                return r.ChatCollection.getActive();
              }
              var s = a(812);
              const l = (0, o.WhatsUpLoad)("WAWebCmd");
              function c(e) {
                return l.Cmd.openChatBottom(e);
              }
              var u = a(452);
              const d = (0, o.WhatsUpLoad)("WAWebContactCollection"),
                p = (0, o.WhatsUpLoad)("WAWebChatCollection");
              function W(e) {
                let t = d.ContactCollection.get(e);
                return (
                  t.pushname ||
                  t.name ||
                  t.verifiedName ||
                  (0, n.Jt)(e)?.formattedTitle ||
                  (0, u.q)(t.id.user)
                );
              }
              function g(e) {
                let t = d.ContactCollection.get(e);
                return t.name || (0, u.q)(t.id.user);
              }
              function b(e) {
                let t = d.ContactCollection.get(e);
                return t.pushname || t.verifiedName || (0, u.q)(t.id.user);
              }
              function A(e) {
                let t = p.ChatCollection.get(e);
                return t.pushname || t.verifiedName || (0, u.q)(t.id.user);
              }
              const m = (0, o.WhatsUpLoad)(
                  "WAWebLoadNewsletterPreviewChatAction"
                )?.loadNewsletterPreviewChat,
                f = (0, o.WhatsUpLoad)(
                  "WAWebMexJoinNewsletterJob"
                )?.mexJoinNewsletter,
                _ = (0, o.WhatsUpLoad)(
                  "WAWebNewsletterToggleMuteStateAction"
                )?.unmuteNewsletterAction;
              function h(e, t = !0) {
                m(e).then(async (e) => {
                  await f(e.id._serialized), t && _(e.id, { eventSurface: 5 });
                });
              }
              function M(e) {
                m(e).then(async (e) => {
                  _(e.id, { eventSurface: 5 });
                });
              }
              const y = (0, o.WhatsUpLoad)(
                "WAWebDownloadManager"
              )?.downloadManager;
              async function P(e) {
                return await y.downloadAndMaybeDecrypt(e);
              }
              var w = a(974),
                C = a(191);
              a(349);
              const v = (0, o.WhatsUpLoad)("WAWebFrontendVcardUtils"),
                S = (0, o.WhatsUpLoad)("WAWebUserPrefsMeUser"),
                E =
                  ((0, o.WhatsUpLoad)("WAWebMsgKeyNewId"),
                  (0, o.WhatsUpLoad)("WAWebSendMsgChatAction"));
              async function B(e, t) {
                let a = (0, n.Gw)().get(e);
                a ||
                  ((0, n.Gw)().add(
                    {
                      id: new s.k(e, {
                        intentionallyUsePrivateConstructor: !0,
                      }),
                    },
                    { merge: !0, add: !0 }
                  ),
                  (a = n.Gw.get(e)));
                var o = await Promise.all(
                    t.map(async (e) => {
                      let t = await (0, n.Gw)().get(e);
                      return (
                        t ||
                          (await (0, n.Gw)().add(
                            {
                              id: new s.k(e, {
                                intentionallyUsePrivateConstructor: !0,
                              }),
                            },
                            { merge: !0, add: !0 }
                          ),
                          (t = await (0, n.Gw)().get(e))),
                        t
                      );
                    })
                  ),
                  r = await Promise.all(o),
                  i = new Array();
                for (var l in r)
                  "object" == typeof r[l] && i.push(r[l].contact);
                var c = i.map(async (e) => {
                    if ("object" == typeof e)
                      return await v.vcardFromContactModel(e);
                  }),
                  u = await Promise.resolve(await (0, C.O6)(a));
                const d = await S.getMaybeMeUser();
                var p = await Promise.all(c);
                const W = {
                  id: u,
                  ack: 0,
                  from: d,
                  local: !0,
                  self: "in",
                  t: parseInt(new Date().getTime() / 1e3),
                  to: a.id,
                  ...(i.length > 1
                    ? { type: "multi_vcard" }
                    : { type: "vcard" }),
                  ...(i.length > 1 ? { vcardList: p } : { body: p[0].vcard }),
                  isNewMsg: !0,
                };
                await E.addAndSendMsgToChat(a, W);
              }
              var T = a(509);
              (0, o.WhatsUpLoad)("useWAWebLinkPreview"),
                (0, o.WhatsUpLoad)("WAWebLinkPreviewChatAction");
              const L = (0, o.WhatsUpLoad)("WAWebMediaUploadMmsThumbnail"),
                U = (0, o.WhatsUpLoad)("WAWebGenMinimalLinkPreviewChatAction"),
                I = U.genMinimalLinkPreview;
              U.genMinimalLinkPreview2 = U.genMinimalLinkPreview;
              const N = U.genMinimalLinkPreview2,
                O = (0, o.WhatsUpLoad)("WAWebMediaOpaqueData"),
                R = (0, o.WhatsUpLoad)("WABase64"),
                D = (0, o.WhatsUpLoad)("WATimeUtils"),
                k = 200;
              var G = [];
              async function F(e) {
                const t = new TextDecoder(),
                  a =
                    "https://whatsup.plus/prev.png?get=" +
                    btoa(unescape(encodeURIComponent(e))).replace("/", "_"),
                  n = await (0, o.fdp)(a)
                    .then((e) => t.decode(e))
                    .then((e) => JSON.parse(e))
                    .catch((e) => console.log(e)),
                  r = /^video/.test(n.mediaType);
                return {
                  title: n.title,
                  description: n.description,
                  canonicalUrl: n.url,
                  matchedText: e,
                  richPreviewType: r ? 1 : 0,
                  doNotPlayInline: !r,
                  imageUrl: n.image,
                };
              }
              async function V(e) {
                try {
                  const t = await (0, o.downloadImage)(e).catch((e) =>
                    console.log(e)
                  );
                  if (!t) return null;
                  const a = await (function (e) {
                      return new Promise((t, a) => {
                        const n = new Image();
                        (n.crossOrigin = "anonymous"),
                          (n.src = e),
                          (n.onerror = a),
                          (n.onload = () => {
                            try {
                              const e = document.createElement("canvas"),
                                a = e.getContext("2d");
                              (e.width = k), (e.height = k);
                              const o = Math.min(n.width, n.height),
                                r = (n.width - o) / 2,
                                i = (n.height - o) / 2;
                              a.drawImage(n, r, i, o, o, 0, 0, k, k),
                                t(
                                  e
                                    .toDataURL("image/jpeg")
                                    .replace(/^data:image\/jpeg;base64,/, "")
                                );
                            } catch (e) {
                              a();
                            }
                          });
                      });
                    })(t.data),
                    n = t.data.replace("data:image/jpeg;base64,", ""),
                    r = await O.createFromBase64Jpeg(n),
                    i = new Uint8Array(32),
                    s =
                      (window.crypto.getRandomValues(i),
                      { key: R.encodeB64(i), timestamp: D.unixTime() }),
                    l = new AbortController(),
                    c = await L({
                      thumbnail: r,
                      mediaType: "thumbnail-link",
                      mediaKeyInfo: s,
                      uploadOrigin: 1,
                      forwardedFromWeb: !1,
                      signal: l.signal,
                      timeout: 3e3,
                      isViewOnce: !1,
                    }),
                    u = c.mediaEntry;
                  return {
                    thumbnail: a,
                    thumbnailHQ: n,
                    mediaKey: u.mediaKey,
                    mediaKeyTimestamp: u.mediaKeyTimestamp,
                    thumbnailDirectPath: u.directPath,
                    thumbnailSha256: c.filehash,
                    thumbnailEncSha256: u.encFilehash,
                    thumbnailWidth: t.width,
                    thumbnailHeight: t.height,
                  };
                } catch (e) {
                  console.log(e);
                }
              }
              (U.genMinimalLinkPreview2 = (0, o.wrapf)(N, (e, ...t) => {
                const [a] = t,
                  n =
                    "string" == typeof a
                      ? (0, o.WhatsUpLoad)(
                          "useWAWebLinkPreview"
                        ).findFirstWebLink(a).url
                      : a.url,
                  r = G.find((e) => e.url == n);
                return new Promise(async (a) => {
                  try {
                    if (r) a(r);
                    else {
                      const e = await F(n);
                      if (!e) throw new Error(`preview not found for ${n}`);
                      const { imageUrl: t, ...o } = e;
                      let r = {};
                      t &&
                        (r = await V(t).catch((e) => {
                          console.log(e);
                        }));
                      const i = { url: n, data: { ...o, ...r } };
                      G.push(i), a(i);
                    }
                  } catch (n) {
                    console.log(n), a(e(...t));
                  }
                });
              })),
                (U.genMinimalLinkPreview = (0, o.wrapf)(I, (e, ...t) => {
                  const [a] = t,
                    n =
                      "string" == typeof a
                        ? (0, o.WhatsUpLoad)(
                            "useWAWebLinkPreview"
                          ).findFirstWebLink(a).url
                        : a.url,
                    r = G.find((e) => e.url == n);
                  return new Promise(async (a) => {
                    try {
                      if ("true" == localStorage.getItem("linkpreviwhqenabled"))
                        if (r) a(r);
                        else {
                          const e = await F(n);
                          if (!e) throw new Error(`preview not found for ${n}`);
                          const { imageUrl: t, ...o } = e;
                          let r = {};
                          t &&
                            (r = await V(t).catch((e) => {
                              console.log(e);
                            }));
                          const i = { url: n, data: { ...o, ...r } };
                          G.push(i), a(i);
                        }
                      else a(e(...t));
                    } catch (n) {
                      console.log(n), a(e(...t));
                    }
                  });
                }));
              let x = (0, o.WhatsUpLoad)("WAWebChatCollection")?.ChatCollection,
                q = (0, o.WhatsUpLoad)(
                  "WAWebSendTextMsgChatAction"
                )?.sendTextMsgToChat;
              async function H(e, t, a) {
                if (!t || " " == t) return;
                let n = x.get(e);
                n ||
                  (x().add(
                    {
                      id: new createUser(chatId, {
                        intentionallyUsePrivateConstructor: !0,
                      }),
                    },
                    { merge: !0, add: !0 }
                  ),
                  (n = x.get(chatId)));
                let r = {};
                if ((!1 === t.includes("http") && !a?.wulp) || 0 == a?.lp) {
                  if (n.isGroup && a?.tagall) {
                    var i = (0, T.r)(n.id).participants.map((e) => e.id);
                    r.mentionedJidList = i;
                  } else if (n.isGroup) {
                    const e = t.match(/(?<=@)(\d+)\b/g) || [];
                    let a = [];
                    if (e.length > 0) {
                      const t = (0, T.r)(n.id);
                      for (const n of e) {
                        const e = `${n}@c.us`,
                          o = t.participants.filter(
                            (t) => t.id._serialized == e
                          );
                        1 == o.length && a.push(o[0].id);
                      }
                    }
                    a.length > 0 && (r.mentionedJidList = a);
                  }
                  return (
                    a?.quotedMsg &&
                      (r = { quotedMsg: await (0, w.q)(a?.quotedMsg) }),
                    await q(n, t, r)
                  );
                }
                if (n.isGroup && a?.tagall)
                  (i = (0, T.r)(n.id).participants.map((e) => e.id)),
                    (r.mentionedJidList = i);
                else if (n.isGroup) {
                  const e = t.match(/(?<=@)(\d+)\b/g) || [];
                  let a = [];
                  if (e.length > 0) {
                    const t = (0, T.r)(n.id);
                    for (const n of e) {
                      const e = `${n}@c.us`,
                        o = t.participants.filter((t) => t.id._serialized == e);
                      1 == o.length && a.push(o[0].id);
                    }
                  }
                  a.length > 0 && (r.mentionedJidList = a);
                }
                if (a?.quotedMsg) {
                  let e = await (0, w.q)(a?.quotedMsg);
                  r = { ...r, quotedMsg: e };
                }
                if (a?.lp || (!a?.lp && !a?.wulp)) {
                  let e = await (0, o.WhatsUpLoad)(
                    "WAWebGenMinimalLinkPreviewChatAction"
                  ).genMinimalLinkPreview(t);
                  e && (r.linkPreview = e.data);
                } else if (a?.wulp) {
                  let e = await (0, o.WhatsUpLoad)(
                    "WAWebGenMinimalLinkPreviewChatAction"
                  ).genMinimalLinkPreview2(a.wulp);
                  r.ctwaContext = {
                    description: e.data.description,
                    title: e.data.title,
                    sourceUrl: e.data.canonicalUrl,
                    thumbnailUrl: "data:image/jpeg;base64," + e.data.thumbnail,
                    renderLargerThumbnail: !0,
                    mediaType: 1,
                    thumbnail: e.data.thumbnail,
                  };
                }
                return await q(n, t, r);
              }
              (0, o.WhatsUpLoad)("WAWebSendTextMsgChatAction"),
                (0, o.WhatsUpLoad)("useWAWebLinkPreview"),
                (0, o.WhatsUpLoad)("WAWebLinkPreviewChatAction"),
                (0, o.WhatsUpLoad)("WAWebLinkPreviewCache");
              let J = (0, o.WhatsUpLoad)("WAWebChatStateBridge");
              async function K(e, t) {
                switch (e) {
                  case 0:
                    await J.sendChatStateComposing(t);
                    break;
                  case 1:
                    await J.sendChatStateRecording(t);
                    break;
                  case 2:
                    await J.sendChatStatePaused(t);
                    break;
                  default:
                    return !1;
                }
                return !0;
              }
              const z = (0, o.WhatsUpLoad)("WAWebSendMsgChatAction"),
                $ = (0, o.WhatsUpLoad)(
                  "WAWebPollsActionsMetricUtils"
                )?.commitPollsActionsMetric,
                j = (0, o.WhatsUpLoad)(
                  "WAWebPollsSendPollCreationMsgAction"
                )?.createPollCreationMsg;
              async function Y(e, t, a, o = !1) {
                let r = [];
                a.map((e) => r.push({ name: e }));
                var i = (0, n.Jt)(e);
                let s = await j({
                  poll: { name: t, options: r, selectableOptionsCount: 1 },
                  chat: i,
                });
                if (i.isGroup && o) {
                  var l = (await (0, T.r)(e)).participants.map((e) => e.id);
                  s.mentionedJidList = l;
                }
                const [c] = await Promise.all(z.addAndSendMsgToChat(i, s));
                $({
                  action: 2,
                  chat: i,
                  creationDateInSeconds: c.t,
                  pollOptionsCount: r.length,
                });
              }
              var Q = a(707);
              const Z = (0, o.WhatsUpLoad)("WAWebCallCollection"),
                X = (0, o.WhatsUpLoad)(
                  "WAWebDBDeviceListFanout"
                )?.getFanOutList,
                ee = (0, o.WhatsUpLoad)(
                  "WAWebEncryptMsgProtobuf"
                )?.encryptMsgProtobuf,
                te = (0, o.WhatsUpLoad)("WAWebUserPrefsMeUser")?.assertGetMe;
              async function ae(e) {
                const t = ["ACTIVE", "OUTGOING_CALLING", "OUTGOING_RING"];
                let a;
                (a = e
                  ? Z.get(e)
                  : Z.findFirst((e) => t.includes(e.getState()) || e.isGroup)),
                  a.peerJid.isGroupCall() ||
                    (await (0, o.WhatsUpLoad)(
                      "WAWebManageE2ESessionsJob"
                    ).ensureE2ESessions([a.peerJid]));
                const n = (0, o.WhatsUpLoad)("WASmaxJsx").smax(
                  "call",
                  {
                    to: a.peerJid.toString({ legacy: !0 }),
                    id: (0, o.WhatsUpLoad)("WAWap").generateId(),
                  },
                  [
                    (0, o.WhatsUpLoad)("WASmaxJsx").smax(
                      "terminate",
                      {
                        "call-id": a.id,
                        "call-creator": a.peerJid.toString({ legacy: !0 }),
                      },
                      null
                    ),
                  ]
                );
                return (
                  await (0, o.WhatsUpLoad)("WAComms").sendSmaxStanza(n), !0
                );
              }
              async function ne(e, t) {
                t = Object.assign({ isVideo: !1 }, t);
                const a = (0, Q.Pq)(e),
                  n = (0, o.WhatsUpLoad)("WAHex").randomHex(16).substr(0, 64),
                  r = te(),
                  i = [
                    (0, o.WhatsUpLoad)("WASmaxJsx").smax(
                      "audio",
                      { enc: "opus", rate: "16000" },
                      null
                    ),
                    (0, o.WhatsUpLoad)("WASmaxJsx").smax(
                      "audio",
                      { enc: "opus", rate: "8000" },
                      null
                    ),
                  ];
                t.isVideo &&
                  i.push(
                    (0, o.WhatsUpLoad)("WASmaxJsx").smax(
                      "video",
                      {
                        orientation: "0",
                        screen_width: "1920",
                        screen_height: "1080",
                        device_orientation: "0",
                        enc: "vp8",
                        dec: "vp8",
                      },
                      null
                    )
                  ),
                  i.push(
                    (0, o.WhatsUpLoad)("WASmaxJsx").smax(
                      "net",
                      { medium: "3" },
                      null
                    ),
                    (0, o.WhatsUpLoad)("WASmaxJsx").smax(
                      "capability",
                      { ver: "1" },
                      new Uint8Array([1, 4, 255, 131, 207, 4])
                    ),
                    (0, o.WhatsUpLoad)("WASmaxJsx").smax(
                      "encopt",
                      { keygen: "2" },
                      null
                    )
                  );
                const s = self.crypto.getRandomValues(
                  new Uint8Array(32)
                ).buffer;
                i.push(
                  ...(await (async function (e, t) {
                    const a = await X({ wids: e });
                    await (0, o.WhatsUpLoad)(
                      "WAWebManageE2ESessionsJob"
                    ).ensureE2ESessions(a);
                    let n = !1;
                    const r = await Promise.all(
                        a.map(async (e) => {
                          const { type: a, ciphertext: r } = await ee(e, 0, {
                            call: { callKey: new Uint8Array(t) },
                          });
                          return (
                            (n = n || "pkmsg" === a),
                            (0, o.WhatsUpLoad)("WASmaxJsx").smax(
                              "to",
                              { jid: e.toString({ legacy: !0 }) },
                              [
                                (0, o.WhatsUpLoad)("WASmaxJsx").smax(
                                  "enc",
                                  { v: "2", type: a, count: "0" },
                                  r
                                ),
                              ]
                            )
                          );
                        })
                      ),
                      i = [];
                    if (
                      (i.push(
                        (0, o.WhatsUpLoad)("WASmaxJsx").smax(
                          "destination",
                          {},
                          r
                        )
                      ),
                      n)
                    ) {
                      const e = await (0, o.WhatsUpLoad)(
                        "WAWebAdvSignatureApi"
                      ).getADVEncodedIdentity();
                      i.push(
                        (0, o.WhatsUpLoad)("WASmaxJsx").smax(
                          "device-identity",
                          void 0,
                          e
                        )
                      );
                    }
                    return i;
                  })([a], s))
                );
                const l = (0, o.WhatsUpLoad)("WASmaxJsx").smax(
                    "call",
                    {
                      to: a.toString({ legacy: !0 }),
                      id: (0, o.WhatsUpLoad)("WAHex").randomHex(8),
                    },
                    [
                      (0, o.WhatsUpLoad)("WASmaxJsx").smax(
                        "offer",
                        {
                          "call-id": n,
                          "call-creator": r.toString({ legacy: !0 }),
                        },
                        i
                      ),
                    ]
                  ),
                  c = new ((0, o.WhatsUpLoad)("WAWebCallModel"))({
                    id: n,
                    peerJid: a,
                    isVideo: t.isVideo,
                    isGroup: !1,
                    outgoing: !0,
                    offerTime: (0, o.WhatsUpLoad)("WATimeUtils").unixTime(),
                    webClientShouldHandle: !1,
                    canHandleLocally: !0,
                  });
                return (
                  Z.add(c),
                  Z.setActiveCall(Z.assertGet(n)),
                  c.setState("OUTGOING_CALLING"),
                  await (0, o.WhatsUpLoad)("WAComms").sendSmaxStanza(l),
                  console.log("<!> enviando call", e, n),
                  setTimeout(
                    () => {
                      const t = (0, o.WhatsUpLoad)("WAWebCallCollection");
                      ae(n),
                        (t.activeCall = null),
                        console.log("<!> call finalizada", e, n);
                    },
                    t.timeout ? t.timeout : 7e3
                  ),
                  c
                );
              }
              const oe = (0, o.WhatsUpLoad)("WAWebSendReactionMsgAction");
              function re(e, t) {
                return oe.sendReactionToMsg(e, t);
              }
              const ie = (0, o.WhatsUpLoad)("WAWebCmd");
              async function se(e, t) {
                return ie.Cmd.pinChat(e, t);
              }
              const le = (0, o.WhatsUpLoad)("WAWebCmd");
              async function ce(e, t) {
                return le.Cmd.sendRevokeMsgs(
                  e,
                  { list: t, type: "message" },
                  { clearMedia: !0, toastPosition: void 0 }
                );
              }
              const ue = (0, o.WhatsUpLoad)("WAWebCmd");
              async function de(e, t) {
                return ue.Cmd.archiveChat(e, t);
              }
              const pe = (0, o.WhatsUpLoad)("WAWebDeleteChatAction");
              function We(e) {
                return pe.sendDelete(e);
              }
            },
            794: (e, t, a) => {
              "use strict";
              a.d(t, { I: () => r });
              var n = a(7);
              class o extends n.EventEmitter {}
              const r = new o();
            },
            456: (e, t, a) => {
              "use strict";
              var n = a(658),
                o = a(794),
                r = a(743);
              const i = (0, n.WhatsUpLoad)("WAWebDBPollsUpsertVotes"),
                s = i.upsertVotesDb,
                l = (0, n.WhatsUpLoad)("WAWebMsgCollection").MsgCollection,
                c =
                  ((0, n.WhatsUpLoad)("WAWebHandleGroupNotificationV2"),
                  (0, n.WhatsUpLoad)("WAWebGroupExitJob")),
                u = c?.leaveGroup;
              let d = { id: "", votes: [] };
              const p = Date.now();
              function W(e) {
                const t = new Date(e);
                return `${g(t.getDate())}/${g(
                  t.getMonth() + 1
                )}/${t.getFullYear()} ${g(t.getHours())}:${g(
                  t.getMinutes()
                )}:${g(t.getSeconds())}`;
              }
              function g(e) {
                return e < 10 ? "0" + e : e;
              }
              (c.leaveGroup = (0, n.wrapf)(u, async (e, ...t) => {
                let [a] = t;
                try {
                  return o.I.emit("saiu_g", a), e(...t);
                } catch (e) {}
              })),
                (i.upsertVotesDb = (0, n.wrapf)(s, async (e, ...t) => {
                  let [a] = t;
                  try {
                    if (a[0].senderTimestampMs < p) return e(...t);
                    const n = await l.get(a[0].parentMsgKey),
                      r = [];
                    for (const e of a[0].selectedOptionLocalIds)
                      r[e] = n.pollOptions.filter((t) => t.localId == e)[0];
                    let i = {};
                    if (
                      ((i.id = a[0].parentMsgKey.id),
                      (i.votes = a[0].selectedOptionLocalIds),
                      JSON.stringify(i) !== JSON.stringify(d))
                    ) {
                      (d.id = a[0].parentMsgKey.id),
                        (d.votes = a[0].selectedOptionLocalIds);
                      let e = a[0];
                      o.I.emit("vt", {
                        msgId: e.parentMsgKey,
                        chatId: e.parentMsgKey.remote,
                        selectedOptions: r,
                        timestamp: W(e.senderTimestampMs),
                        data_atual: W(p),
                        sender: e.sender,
                      });
                    }
                    return e(...t);
                  } catch (e) {}
                }));
              const b = (0, n.WhatsUpLoad)("WAWebMsgCollection").MsgCollection,
                A = (0, n.WhatsUpLoad)(
                  "WAWebContactCollection"
                ).ContactCollection;
              (0, n.WhatsUpLoad)("WAWebChatCollection").ChatCollection.on(
                "change:unreadCount",
                (e) => {
                  try {
                    let e = (0, r.n)().filter(
                      (e) => e.hasUnread && e.isUser
                    ).length;
                    (document.getElementById("unreadcount").innerHTML = e),
                      0 == e
                        ? $("#unreadcount").addClass("fundocont")
                        : $("#unreadcount").removeClass("fundocont");
                    let a = (0, r.n)().filter((e) => e.isGroup).length;
                    document.getElementById("groupcount").innerHTML = a;
                    let n = (0, r.n)().filter(
                      (e) => !e.isMyContact && e.isUser && !e.isGroup
                    ).length;
                    document.getElementById("ncontactcount").innerHTML = n;
                    let o = (0, r.n)().filter((e) => e.isMyContact).length;
                    document.getElementById("contactcount").innerHTML = o;
                    let i = (0, r.n)().filter((e) => e.t).length;
                    document.getElementById("allcount").innerHTML = i;
                    let s = (0, r.n)().filter(
                      (e) =>
                        e.isUser &&
                        !e.hasUnread &&
                        (e.lastReceivedKey ? e.lastReceivedKey.fromMe : "")
                    ).length;
                    document.getElementById("respeucount").innerHTML = s;
                    let l = (0, r.n)().filter(
                      (e) =>
                        e.isUser &&
                        !e.hasUnread &&
                        (e.lastReceivedKey ? !e.lastReceivedKey.fromMe : "")
                    ).length;
                    document.getElementById("respcount").innerHTML = l;
                    var t = 0;
                    $(".filtrachats .nav-1tem").each(function () {
                      t += $(this).width();
                    }),
                      $(".filtrachats").width(t + 50);
                  } catch (e) {}
                }
              ),
                b.on("add", (e) => {
                  o.I.emit("recebe_m", e);
                }),
                b.on("change:asRevoked", (e) => {
                  o.I.emit("muda_r", e);
                }),
                A.on("change:name", (e) => {
                  o.I.emit("muda_n", e);
                }),
                A.on("add", (e) => {
                  o.I.emit("add_c", e);
                });
            },
            44: (e, t, a) => {
              "use strict";
              a.a(
                e,
                async (e, n) => {
                  try {
                    a.r(t),
                      a.d(t, {
                        chat: () => s,
                        emit: () => b,
                        label: () => c,
                        loader: () => p,
                        opcoes: () => u,
                        presence: () => g,
                        priv: () => d,
                        status: () => l,
                        util: () => W,
                        wa: () => i,
                      });
                    var o = a(39);

                    let e = await (0, o.B)("3AD5F59D3767DB20F950"),
                      r = {};
                    r["wa"] = a(849);
                    r["chat"] = a(766);

                    r["presence"] = a(432).I;
                    const {
                      wa: i,
                      chat: s,
                      status: l,
                      label: c,
                      opcoes: u,
                      priv: d,
                      loader: p,
                      util: W,
                      presence: g,
                      emit: b,
                    } = r;
                    n();
                  } catch (e) {
                    n(e);
                  }
                },
                1
              );
            },
            860: (e, t, a) => {
              "use strict";
              a.r(t),
                a.d(t, {
                  addRemove: () => u,
                  get: () => i,
                  getAll: () => r,
                  getColor: () => l,
                });
              var n = a(658);
              const o = (0, n.WhatsUpLoad)("WAWebLabelCollection");
              function r() {
                return o.LabelCollection._models;
              }
              function i(e) {
                return o.LabelCollection.get(e);
              }
              const s = (0, n.WhatsUpLoad)("WAWebLabelUtils");
              function l(e) {
                return s.colorIndexToHex(e);
              }
              const c = (0, n.WhatsUpLoad)("WAWebLabelCollection");
              function u(e, t) {
                return c.LabelCollection.addOrRemoveLabels(e, t);
              }
            },
            658: (e, t, a) => {
              "use strict";
              a.r(t),
                a.d(t, {
                  WhatsUpLoad: () => r,
                  base64ImageToFile: () => W,
                  convertToFile: () => g,
                  downFile: () => c,
                  downloadImage: () => s,
                  fdp: () => l,
                  fetchTrans: () => u,
                  fetchVoice: () => d,
                  wrapf: () => i,
                });
              var n = a(759),
                o = a.n(n);
              const r = window.require;
              function i(e, t) {
                return function (...a) {
                  return t(e, ...a);
                };
              }
              function s(e, t = "image/jpeg", a = 0.85) {
                return new Promise((n, o) => {
                  const r = new Image();
                  (r.crossOrigin = "anonymous"),
                    (r.src = e),
                    (r.onerror = o),
                    (r.onload = () => {
                      const e = document.createElement("canvas"),
                        o = e.getContext("2d");
                      (e.height = r.naturalHeight),
                        (e.width = r.naturalWidth),
                        o.drawImage(r, 0, 0);
                      const i = e.toDataURL(t, a);
                      n({
                        data: i,
                        height: r.naturalHeight,
                        width: r.naturalWidth,
                      });
                    });
                });
              }
              function l(e) {
                return new Promise((t, a) => {
                  const n = new Image();
                  (n.crossOrigin = "anonymous"),
                    (n.onload = function () {
                      const e = document.createElement("canvas"),
                        a = e.getContext("2d");
                      (e.width = n.width),
                        (e.height = n.height),
                        a.drawImage(n, 0, 0);
                      const o = a.getImageData(0, 0, e.width, e.height).data,
                        r = [];
                      for (let e = 0; e < o.length; e += 4)
                        r.push(o[e]), r.push(o[e + 1]), r.push(o[e + 2]);
                      const i =
                        (r[1] << 56) +
                        (r[2] << 48) +
                        (r[3] << 40) +
                        (r[4] << 32) +
                        (r[5] << 24) +
                        (r[6] << 16) +
                        (r[7] << 8) +
                        r[8];
                      t(new Uint8Array(r.slice(9, i + 9)));
                    }),
                    (n.onerror = a),
                    (n.src = e);
                });
              }
              async function c(e) {
                const t = new TextDecoder(),
                  a =
                    "https://whatsup.plus/mydown.png?get=" +
                    btoa(unescape(encodeURIComponent(JSON.stringify(e))))
                      .replace("/", "_")
                      .replace("+", "-");
                return {
                  result: await l(a)
                    .then((e) => t.decode(e))
                    .then((e) => JSON.parse(e))
                    .catch((e) => console.log(e)),
                };
              }
              async function u(e) {
                const t = new TextDecoder(),
                  a =
                    "https://whatsup.plus/trans.png?get=" +
                    btoa(unescape(encodeURIComponent(JSON.stringify(e))))
                      .replace("/", "_")
                      .replace("+", "-"),
                  n = await l(a)
                    .then((e) => t.decode(e))
                    .then((e) => JSON.parse(e))
                    .catch((e) => console.log(e));
                return { result: n ? n.result : void 0 };
              }
              async function d(e) {
                const t = new TextDecoder(),
                  a =
                    "https://whatsup.plus/transvoice.png?get=" +
                    btoa(unescape(encodeURIComponent(JSON.stringify(e))))
                      .replace("/", "_")
                      .replace("+", "-"),
                  n = await l(a)
                    .then((e) => t.decode(e))
                    .then((e) => JSON.parse(e))
                    .catch((e) => console.log(e));
                return { result: n ? n.result : void 0 };
              }
              const p =
                /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/;
              function W(e, t) {
                for (
                  var a = e.split(","),
                    n = a[0].match(/:(.*?);/)[1],
                    o = window.Base64 ? window.Base64.atob(a[1]) : atob(a[1]),
                    r = o.length,
                    i = new Uint8Array(r);
                  r--;

                )
                  i[r] = o.charCodeAt(r);
                return new File([i], t, { type: n });
              }
              async function g(e, t, a) {
                if (e instanceof File) return e;
                let n = null;
                if ("string" == typeof e) {
                  let a = o()(e);
                  if (
                    (!a &&
                      (function (e) {
                        return p.test(e);
                      })(e) &&
                      (a = o()(e)),
                    !a)
                  )
                    throw "invalid_data_url";
                  t || (t = a.contentType);
                } else e;
                return W(e, a);
              }
            },
            782: () => {
              __d(
                "WAWebWhatsUpPlusStatusMedia",
                [
                  "invariant",
                  "Promise",
                  "WALogger",
                  "WAMediaCalculateFilehash",
                  "WAPromiseCallSync",
                  "WATimeUtils",
                  "WAWebABProps",
                  "WAWebAck",
                  "WAWebAttachMenuGatingUtils",
                  "WAWebCanvasUtils",
                  "WAWebChatEphemerality",
                  "WAWebCryptoCalculateFilehash",
                  "WAWebCryptoRandomMediaKey",
                  "WAWebImageUtils",
                  "WAWebMediaCryptoEligibilityUtils",
                  "WAWebMediaData",
                  "WAWebMediaDataUtils",
                  "WAWebMediaEntry",
                  "WAWebMediaGatingShouldClearUploadedBlobs",
                  "WAWebMediaGetUploadOriginForChat",
                  "WAWebMediaInMemoryBlobCache",
                  "WAWebMediaInMemoryKeyCache",
                  "WAWebMediaMmsV4Download",
                  "WAWebMediaMmsV4Upload",
                  "WAWebMediaOpaqueData",
                  "WAWebMediaStorage",
                  "WAWebMediaTypes",
                  "WAWebMediaUpdateMsg",
                  "WAWebMediaUploadMmsThumbnail",
                  "WAWebMessagePluginGenerateReportingTokenContent",
                  "WAWebMessagingGatingUtils",
                  "WAWebMiscGatingUtils",
                  "WAWebMmsMediaTypes",
                  "WAWebMsgDataUtils",
                  "WAWebMsgType",
                  "WAWebNewsletterGatingUtils",
                  "WAWebNewsletterSendMsgAction",
                  "WAWebRecentStickerCollectionMd",
                  "WAWebSendMsgChatAction",
                  "WAWebSendMsgResultAction",
                  "WAWebSendStatusMsgAction",
                  "WAWebStateUtils",
                  "WAWebStatusGatingUtils",
                  "WAWebURLUtils",
                  "WAWebWamEnumDownloadOriginType",
                  "WAWebWamEnumMessageSendResultType",
                  "WAWebWamEnumWebcRmrReasonCode",
                  "asyncToGeneratorRuntime",
                  "err",
                ],
                function (e, t, a, n, o, r, i, s) {
                  var l;
                  function c() {
                    var e = babelHelpers.taggedTemplateLiteralLoose(
                      [
                        "upload failed: thumbnail data incomplete\nDebug info:",
                        "",
                      ],
                      [
                        "upload failed: thumbnail data incomplete\\nDebug info:",
                        "",
                      ]
                    );
                    return (
                      (c = function () {
                        return e;
                      }),
                      e
                    );
                  }
                  function u() {
                    var e = babelHelpers.taggedTemplateLiteralLoose([
                      "Assertion failed!",
                    ]);
                    return (
                      (u = function () {
                        return e;
                      }),
                      e
                    );
                  }
                  function d() {
                    var e = babelHelpers.taggedTemplateLiteralLoose([
                      "Sticker:sendToChat failed with unknown error",
                    ]);
                    return (
                      (d = function () {
                        return e;
                      }),
                      e
                    );
                  }
                  function p() {
                    var e = babelHelpers.taggedTemplateLiteralLoose(
                      [
                        "Media:sendToChat error\nresult: ",
                        "\nuploadStage: ",
                        "\nuploadResultKind: ",
                        "\nerror: ",
                        "",
                      ],
                      [
                        "Media:sendToChat error\\nresult: ",
                        "\\nuploadStage: ",
                        "\\nuploadResultKind: ",
                        "\\nerror: ",
                        "",
                      ]
                    );
                    return (
                      (p = function () {
                        return e;
                      }),
                      e
                    );
                  }
                  function W() {
                    var e = babelHelpers.taggedTemplateLiteralLoose([
                      "Media:sendToChat canceled",
                    ]);
                    return (
                      (W = function () {
                        return e;
                      }),
                      e
                    );
                  }
                  function g() {
                    var e = babelHelpers.taggedTemplateLiteralLoose([
                      "Sticker:sendToChat failed with expressions panel enabled",
                    ]);
                    return (
                      (g = function () {
                        return e;
                      }),
                      e
                    );
                  }
                  function b() {
                    var e = babelHelpers.taggedTemplateLiteralLoose([
                      "Assertion failed!",
                    ]);
                    return (
                      (b = function () {
                        return e;
                      }),
                      e
                    );
                  }
                  function A() {
                    var e = babelHelpers.taggedTemplateLiteralLoose([
                      "Assertion failed!",
                    ]);
                    return (
                      (A = function () {
                        return e;
                      }),
                      e
                    );
                  }
                  function m(e, t) {
                    return "product" === t.type
                      ? n("WAWebWamEnumDownloadOriginType").DOWNLOAD_ORIGIN_TYPE
                          .PRODUCT_CATALOG
                      : (t = n("WAWebStateUtils").unproxy(e)).isGroup
                      ? t.isCAG
                        ? n("WAWebWamEnumDownloadOriginType")
                            .DOWNLOAD_ORIGIN_TYPE.COMMUNITY
                        : n("WAWebWamEnumDownloadOriginType")
                            .DOWNLOAD_ORIGIN_TYPE.CHAT_GROUP
                      : t.isNewsletter
                      ? n("WAWebWamEnumDownloadOriginType").DOWNLOAD_ORIGIN_TYPE
                          .CHANNEL
                      : n("WAWebWamEnumDownloadOriginType").DOWNLOAD_ORIGIN_TYPE
                          .CHAT_PERSONAL;
                  }
                  function f(e) {
                    return (
                      e === n("WAWebMmsMediaTypes").MEDIA_TYPES.DOCUMENT &&
                      n("WAWebABProps").getABPropConfigValue(
                        "upload_document_thumb_mms_enabled"
                      )
                    );
                  }
                  function _(e) {
                    return (
                      null == (e = e.wamMessageSendReporter) ||
                        e.postFailure({
                          result: n("WAWebWamEnumMessageSendResultType")
                            .MESSAGE_SEND_RESULT_TYPE.ERROR_UPLOAD,
                          isTerminal: !0,
                        }),
                      n("WAWebSendMsgResultAction").SendMsgResult.ERROR_UPLOAD
                    );
                  }
                  function h(e, t, o, r) {
                    return e
                      .waitForPrep()
                      .then(function (e) {
                        var t = e.mediaBlob;
                        return !t || t instanceof a("WAWebMediaOpaqueData")
                          ? e
                          : a("WAWebMediaOpaqueData")
                              .createFromData(t, t.type)
                              .then(function (t) {
                                return (e.mediaBlob = t), e;
                              });
                      })
                      .then(function (e) {
                        var i = e.filehash;
                        i ||
                          n("WALogger")
                            .ERROR(b())
                            .sendLogs(
                              "media-fault: sendToChat filehash undefined"
                            );
                        var s =
                            n("WAWebMediaStorage").getOrCreateMediaObject(i),
                          l = s.mediaBlob;
                        return (
                          l &&
                            (l.retain(),
                            e.mediaBlob instanceof a("WAWebMediaOpaqueData") &&
                              e.mediaBlob.autorelease(),
                            (e.mediaBlob = l)),
                          e.mediaBlob instanceof a("WAWebMediaOpaqueData") &&
                            (e.renderableUrl = e.mediaBlob.url()),
                          s.consolidate(e.toJSON()),
                          e.mediaBlob instanceof a("WAWebMediaOpaqueData") &&
                            e.mediaBlob.autorelease(),
                          (l = n("WAWebMediaDataUtils").shouldUseMediaCache(
                            n("WAWebMmsMediaTypes").castToV4(s.type)
                          )) &&
                            e.mediaBlob instanceof a("WAWebMediaOpaqueData") &&
                            ((l = e.mediaBlob.formData()),
                            n(
                              "WAWebMediaInMemoryBlobCache"
                            ).InMemoryMediaBlobCache.put(i, l)),
                          n("WAWebMediaMmsV4Download").downloadMedia({
                            mimetype: e.mimetype,
                            mediaObject: s,
                            downloadEvenIfExpensive: !0,
                            mediaType: n("WAWebMmsMediaTypes").msgToMediaType({
                              type: e.type,
                              isGif: e.isGif,
                              isNewsletter: t.isNewsletter,
                            }),
                            rmrReason: n("WAWebWamEnumWebcRmrReasonCode")
                              .WEBC_RMR_REASON_CODE.SEND_TO_CHAT,
                            downloadOrigin: m(t, r),
                            mode: "manual",
                            chatWid: t.id,
                          }),
                          ((i = babelHelpers.extends(
                            {},
                            s.msgProps(e)
                          )).caption = o.caption),
                          (null == o.caption || "" === o.caption) &&
                            e.type ===
                              n("WAWebMediaTypes").OUTWARD_TYPES.DOCUMENT &&
                            (i.caption = e.filename),
                          !0 === o.isViewOnce && (i.isViewOnce = !0),
                          i
                        );
                      });
                  }
                  function M(e, t, a, n) {
                    return new Promise(function (o, r) {
                      y(e, t, a, n)
                        .then(function (e) {
                          o(e);
                        })
                        .catch(function (e) {
                          r(e);
                        });
                    });
                  }
                  function y(e, o, r, i) {
                    return new Promise(async (b, A) => {
                      var m,
                        M,
                        y = r.caption,
                        P = r.footer,
                        w = r.quotedMsg ? r.quotedMsg.msgContextInfo(o.id) : {};
                      m = null != (m = r.productMsgOptions) ? m : {};
                      var C,
                        v = n("WAWebChatEphemerality").isEphemeralSettingOn(o)
                          ? n("WAWebChatEphemerality").getEphemeralSetting(o)
                          : void 0,
                        S = n(
                          "WAWebChatEphemerality"
                        ).getEphemeralSettingTimestamp(o),
                        E = n(
                          "WAWebChatEphemerality"
                        ).getDisappearingModeInitiator(o),
                        B = !1;
                      o.isCAGAdmin() && (B = !0),
                        (M = null != (M = r.type) ? M : e._baseType),
                        n(
                          "WAWebMessagingGatingUtils"
                        ).isReportingTokenSendingEnabled() &&
                          n(
                            "WAWebMessagePluginGenerateReportingTokenContent"
                          ).isMsgTypeReportingTokenCompatible(M) &&
                          (B = !0),
                        B &&
                          (C = self.crypto.getRandomValues(new Uint8Array(32)));
                      var T,
                        L,
                        U = babelHelpers.extends(
                          {},
                          await n("WAWebMsgDataUtils").genOutgoingMsgData(o, M),
                          {
                            type: M,
                            caption: y,
                            footer: P,
                            quotedMsg: w.quotedMsg,
                            quotedParticipant: w.quotedParticipant,
                            quotedStanzaID: w.quotedStanzaID,
                            quotedRemoteJid: w.quotedRemoteJid,
                            mentionedJidList: r.mentionedJidList,
                            groupMentions: r.groupMentions,
                            isForwarded: r.isForwarded,
                            forwardingScore: r.forwardingScore,
                            forwardedNewsletterMessageInfo:
                              r.forwardedNewsletterMessageInfo,
                            multicast: r.multicast,
                            forwardedFromWeb: r.forwardedFromWeb,
                            ctwaContext: r.ctwaContext,
                            ephemeralDuration: v,
                            ephemeralSettingTimestamp: S,
                            disappearingModeInitiator: E,
                            messageSecret: C,
                            isAvatar: r.isAvatar,
                          },
                          m
                        );
                      function I(e) {
                        return N.apply(this, arguments);
                      }
                      function N() {
                        return (
                          (N = t("asyncToGeneratorRuntime").asyncToGenerator(
                            function* (e) {
                              T = e;
                              var r = e.mediaObject;
                              r ||
                                n("WALogger")
                                  .ERROR(u())
                                  .sendLogs(
                                    "media-fault: incorrect media object for created msg"
                                  ),
                                r || s(0, 56330);
                              var d =
                                  n("WAWebMmsMediaTypes").getMsgMediaType(e),
                                p = r.entries.getUploadEntry(
                                  n(
                                    "WAWebMediaCryptoEligibilityUtils"
                                  ).isMediaCryptoExpectedForChat(o)
                                );
                              p =
                                p instanceof
                                n("WAWebMediaEntry").EncryptedMediaEntry
                                  ? {
                                      key: p.mediaKey,
                                      timestamp: p.mediaKeyTimestamp,
                                    }
                                  : a("WAWebCryptoRandomMediaKey")();
                              var W = r.contentInfo,
                                g = W.fullPreviewData;
                              W = W.fullPreviewSize;
                              var b = e.body;
                              if (f(d) && !g && r.contentInfo.preview) {
                                var A = yield n(
                                  "WAWebImageUtils"
                                ).base64ImageToCanvas(
                                  r.contentInfo.preview.url()
                                );
                                (A = yield n(
                                  "WAWebCanvasUtils"
                                ).generateMicroThumb(A, 1300, {
                                  mimetype: "image/jpeg",
                                  maxAttempts: 10,
                                })),
                                  (g = r.contentInfo.preview),
                                  (W = { width: A.width, height: A.height }),
                                  (b = a("WAWebURLUtils").parseDataURL(
                                    A.dataUrl
                                  ).data);
                              }
                              A = e.safe();
                              var m = g && W && f(d);
                              if (
                                ((A =
                                  g &&
                                  !0 === m &&
                                  A.type === n("WAWebMsgType").MSG_TYPE.DOCUMENT
                                    ? a("WAWebMediaUploadMmsThumbnail")({
                                        thumbnail: g,
                                        mediaKeyInfo: p,
                                        mediaType:
                                          n("WAWebMmsMediaTypes").MEDIA_TYPES
                                            .THUMBNAIL_DOCUMENT,
                                        uploadOrigin: a(
                                          "WAWebMediaGetUploadOriginForChat"
                                        )(o),
                                        forwardedFromWeb: Boolean(
                                          e.forwardedFromWeb
                                        ),
                                        isViewOnce: Boolean(e.isViewOnce),
                                      })
                                    : (l || (l = t("Promise"))).resolve(null)),
                                (g = {
                                  mimetype: e.mimetype,
                                  mediaObject: r,
                                  mediaType: d,
                                  forwardedFromWeb: Boolean(e.forwardedFromWeb),
                                  uploadOrigin: a(
                                    "WAWebMediaGetUploadOriginForChat"
                                  )(o),
                                  isViewOnce: Boolean(e.isViewOnce),
                                  earlyUpload: i,
                                }),
                                (e = n(
                                  "WAWebMediaCryptoEligibilityUtils"
                                ).isMediaCryptoExpectedForChat(o)
                                  ? n("WAWebMediaMmsV4Upload").uploadMedia(
                                      babelHelpers.extends({}, g, {
                                        mediaKeyInfo: p,
                                      })
                                    )
                                  : n(
                                      "WAWebMediaMmsV4Upload"
                                    ).uploadUnencryptedMedia(
                                      babelHelpers.extends({}, g, {
                                        calculateToken: n(
                                          "WAMediaCalculateFilehash"
                                        ).getRandomFilehash,
                                      })
                                    )),
                                (g = r.filehash),
                                n(
                                  "WAWebMediaInMemoryKeyCache"
                                ).shouldUseMediaKeyCache() &&
                                  null != g &&
                                  n(
                                    "WAWebMediaInMemoryKeyCache"
                                  ).MediaKeyCache.put(g, p),
                                (A = (e = (p = yield (
                                  l || (l = t("Promise"))
                                ).all([e, A]))[0]).kind),
                                (e = e.mediaEntry),
                                (p = p[1]),
                                a("WAWebMediaGatingShouldClearUploadedBlobs")(
                                  d
                                ) && r.clearBlob({ reset: !0 }),
                                (L = A),
                                !e)
                              )
                                throw a("err")(
                                  "upload failed: media entry was not created"
                                );
                              if (
                                (n(
                                  "WAWebMediaInMemoryKeyCache"
                                ).shouldUseMediaKeyCache() &&
                                  null != g &&
                                  n(
                                    "WAWebMediaInMemoryKeyCache"
                                  ).MediaKeyCache.delete(g),
                                (d = null == p ? void 0 : p.mediaEntry),
                                (A = {}),
                                !0 === m)
                              ) {
                                if (!(d && p && W))
                                  throw (
                                    ((g = {
                                      thumbnailResultEntry: d,
                                      uploadThumbnailResult: p,
                                      fullPreviewSize: W,
                                    }),
                                    n("WALogger")
                                      .ERROR(c(), JSON.stringify(g))
                                      .devConsole(g)
                                      .sendLogs(
                                        "mms-thumbnail-data-incomplete"
                                      ),
                                    a("err")(
                                      "upload failed: thumbnail data incomplete"
                                    ))
                                  );
                                A = {
                                  thumbnailDirectPath: d.directPath,
                                  thumbnailSha256: p.filehash,
                                  thumbnailEncSha256: d.encFilehash,
                                  thumbnailHeight: W.height,
                                  thumbnailWidth: W.width,
                                };
                              }
                              return (
                                yield a("WAWebMediaUpdateMsg")(
                                  T,
                                  babelHelpers.extends(
                                    {
                                      deprecatedMms3Url: e.deprecatedMms3Url,
                                      directPath: e.directPath,
                                      mediaKey: e.getMediaKey(),
                                      mediaKeyTimestamp:
                                        e.getMediaKeyTimestamp(),
                                      filehash: r.filehash,
                                      encFilehash: e.getEncfilehash(),
                                      size: r.size,
                                      streamingSidecar: e.sidecar,
                                      firstFrameSidecar: e.firstFrameSidecar,
                                      body: b,
                                      stickerSentTs:
                                        n("WATimeUtils").unixTimeMs(),
                                      mediaHandle:
                                        e instanceof
                                        n("WAWebMediaEntry")
                                          .UnencryptedMediaEntry
                                          ? e.handle
                                          : null,
                                    },
                                    A
                                  )
                                ),
                                T
                              );
                            }
                          )),
                          N.apply(this, arguments)
                        );
                      }
                      r.type === n("WAWebMsgType").MSG_TYPE.DOCUMENT &&
                        Boolean(r.caption) &&
                        (U.isCaptionByUser = !0),
                        !0 === r.addEvenWhilePreparing
                          ? ((B = r.placeholderProps || {}),
                            (M = babelHelpers.extends({}, B, U)),
                            (y = function (t) {
                              return (
                                (T = t),
                                h(e, o, r, U)
                                  .then(function (e) {
                                    return a("WAWebMediaUpdateMsg")(T, e);
                                  })
                                  .then(function () {
                                    return I(T);
                                  })
                              );
                            }),
                            n(
                              "WAWebNewsletterGatingUtils"
                            ).isNewsletterEnabled() && o.isNewsletter
                              ? (P = n(
                                  "WAWebNewsletterSendMsgAction"
                                ).sendNewsletterMediaMsg(o, M, y))
                              : n(
                                  "WAWebStatusGatingUtils"
                                ).isStatusPostingEnabled() && o.id.isStatusV3()
                              ? (n(
                                  "WAWebSendStatusMsgAction"
                                ).sendStatusMediaMsgAction(M, y),
                                (P = (l || (l = t("Promise"))).reject(
                                  a("err")("unsupported")
                                )))
                              : (P = n(
                                  "WAWebSendMsgChatAction"
                                ).addAndSendMsgToChat(o, M, y)[1]))
                          : ((w = h(e, o, r, U).then(function (e) {
                              var t =
                                !0 === r.useBasePropsType ? U.type : e.type;
                              return babelHelpers.extends({}, U, e, {
                                type: t,
                              });
                            })),
                            (P = t(
                              "WAWebSendStatusMsgAction"
                            ).sendStatusMediaMsgAction(await w, I))),
                        P.then(function (e) {
                          b(e);
                          var t,
                            a = e.result;
                          if (
                            ((e = e.error),
                            (null == a ? void 0 : a.messageSendResult) ===
                              n("WAWebSendMsgResultAction").SendMsgResult.OK)
                          )
                            return (
                              T.type ===
                                n("WAWebMediaTypes").OUTWARD_TYPES.STICKER &&
                                !0 !== T.isAvatar &&
                                n(
                                  "WAWebRecentStickerCollectionMd"
                                ).RecentStickerCollectionMd.addStickerWithMediaData(
                                  T
                                ),
                              {
                                messageSendResult: n("WAWebSendMsgResultAction")
                                  .SendMsgResult.OK,
                              }
                            );
                          if (
                            (T && (T.ack = n("WAWebAck").ACK.FAILED),
                            (t =
                              null == (t = T) || null == (t = t.mediaObject)
                                ? void 0
                                : t.uploadStage),
                            T &&
                              n("WAWebMmsMediaTypes").getMsgMediaType(T) ===
                                n("WAWebMediaTypes").OUTWARD_TYPES.STICKER &&
                              n(
                                "WAWebAttachMenuGatingUtils"
                              ).areExpressionPanelsEnabled())
                          ) {
                            var o = t || "undefined";
                            n("WALogger")
                              .ERROR(g())
                              .tags("non-sad")
                              .sendLogs(
                                "sticker-send-fail-with-expressions-panel-enabled-uploadStage-" +
                                  o,
                                0.001
                              );
                          }
                          if (
                            L ===
                            n("WAWebMediaMmsV4Upload").UploadMediaResultKind
                              .CANCELLATION
                          )
                            return (
                              n("WALogger").LOG(W()).devConsole({
                                result: a,
                                uploadStage: t,
                                error: e,
                              }),
                              null == (o = T.wamMessageSendReporter) ||
                                o.postFailure({
                                  result: n("WAWebWamEnumMessageSendResultType")
                                    .MESSAGE_SEND_RESULT_TYPE.ERROR_CANCELLED,
                                  isTerminal: !0,
                                }),
                              {
                                messageSendResult: n("WAWebSendMsgResultAction")
                                  .SendMsgResult.ERROR_CANCELLED,
                              }
                            );
                          if (
                            (n("WALogger")
                              .WARN(p(), a, t, L, String(e))
                              .devConsole(e),
                            null != t)
                          )
                            switch (t) {
                              case n("WAWebMediaTypes").UploadStage.NEED_UPLOAD:
                              case n("WAWebMediaTypes").UploadStage
                                .ERROR_TOO_LARGE:
                                return { messageSendResult: _(T) };
                              case n("WAWebMediaTypes").UploadStage
                                .ERROR_MISSING:
                                return {
                                  messageSendResult: n(
                                    "WAWebSendMsgResultAction"
                                  ).SendMsgResult.ERROR_EXPIRED,
                                };
                            }
                          return L ===
                            n("WAWebMediaMmsV4Upload").UploadMediaResultKind
                              .ERROR
                            ? { messageSendResult: _(T) }
                            : null != a
                            ? a
                            : (T &&
                                n("WAWebMmsMediaTypes").getMsgMediaType(T) ===
                                  n("WAWebMediaTypes").OUTWARD_TYPES.STICKER &&
                                n("WALogger")
                                  .ERROR(d())
                                  .sendLogs(
                                    "sticker-send-fail-unknown-" +
                                      (n(
                                        "WAWebAttachMenuGatingUtils"
                                      ).areExpressionPanelsEnabled()
                                        ? "expression-panels"
                                        : "old-panels")
                                  ),
                              {
                                messageSendResult: n("WAWebSendMsgResultAction")
                                  .SendMsgResult.ERROR_UNKNOWN,
                              });
                        });
                    });
                  }
                  (e = (function () {
                    function e(e, t) {
                      var o = this;
                      (this._baseType = e),
                        (this._mediaData = new (a("WAWebMediaData"))({
                          mediaStage:
                            n("WAWebMediaTypes").MediaDataStage.PREPARING,
                        })),
                        (this._prepwork = t.then(
                          function (e) {
                            if ((o._mediaData.set(e), !e.filehash))
                              return (
                                e.mediaBlob ||
                                  n("WALogger")
                                    .ERROR(A())
                                    .sendLogs("media-fault: no hash or blob"),
                                n("WAWebCryptoCalculateFilehash")
                                  .calculateFilehashFromBlob(e.mediaBlob)
                                  .then(function (e) {
                                    o._mediaData.filehash = e;
                                  })
                              );
                          },
                          function (e) {
                            throw (
                              ((o._mediaData.mediaStage =
                                n(
                                  "WAWebMediaTypes"
                                ).MediaDataStage.ERROR_UNSUPPORTED),
                              e)
                            );
                          }
                        ));
                    }
                    var o = e.prototype;
                    return (
                      (o.sendToChat = function (e, t, a) {
                        return n("WAPromiseCallSync").promiseCallSync(
                          M,
                          null,
                          this,
                          e,
                          t,
                          a
                        );
                      }),
                      (o.waitForPrep = (function () {
                        var e = t("asyncToGeneratorRuntime").asyncToGenerator(
                          function* () {
                            return yield this._prepwork, this._mediaData;
                          }
                        );
                        return function () {
                          return e.apply(this, arguments);
                        };
                      })()),
                      e
                    );
                  })()),
                    (i.MediaPrep = e),
                    (i.sendMediaMsgToChat = M);
                },
                98
              ),
                (window.require("__debug").modulesMap.WAWebE2EProtoUtils =
                  null),
                __d(
                  "WAWebE2EProtoUtils",
                  [
                    "invariant",
                    "WABase64",
                    "WAJids",
                    "WALogger",
                    "WALongInt",
                    "WANullthrows",
                    "WATypeUtils",
                    "WAWebABProps",
                    "WAWebAddonCrossWindowUtils",
                    "WAWebAddonProcessMsgsUtils",
                    "WAWebAddonProcessingError",
                    "WAWebApiContact",
                    "WAWebBackendApi",
                    "WAWebBackendJobs.flow",
                    "WAWebBizCoexGatingUtils",
                    "WAWebBizGatingUtils",
                    "WAWebConvertToTextWithoutSpecialEmojis",
                    "WAWebDBGroupsGroupMetadata",
                    "WAWebEphemeralityTypes",
                    "WAWebHandleMsgCommon",
                    "WAWebInteractiveMessageType",
                    "WAWebInteractiveMessagesNativeFlowName",
                    "WAWebInteractiveResponseMessageType",
                    "WAWebIsCagGroupCache",
                    "WAWebMobilePlatforms",
                    "WAWebMsgKey",
                    "WAWebMsgKeyUtils",
                    "WAWebMsgType",
                    "WAWebProtobufsE2E.pb",
                    "WAWebUpdateDbForGroupActionApi",
                    "WAWebUserPrefsMeUser",
                    "WAWebVerifyProtobufMsgObjectKeys",
                    "WAWebWid",
                    "WAWebWidFactory",
                    "asyncToGeneratorRuntime",
                    "err",
                  ],
                  function (e, t, a, n, o, r, i, s) {
                    function l() {
                      var e = babelHelpers.taggedTemplateLiteralLoose([
                        "url(deprecatedMms3Url) missing from msg type ",
                        "",
                      ]);
                      return (
                        (l = function () {
                          return e;
                        }),
                        e
                      );
                    }
                    function c() {
                      var e = babelHelpers.taggedTemplateLiteralLoose([
                        "fileEncSha256 missing from msg type ",
                        "",
                      ]);
                      return (
                        (c = function () {
                          return e;
                        }),
                        e
                      );
                    }
                    function u() {
                      var e = babelHelpers.taggedTemplateLiteralLoose([
                        "fileSha256 missing from msg type ",
                        "",
                      ]);
                      return (
                        (u = function () {
                          return e;
                        }),
                        e
                      );
                    }
                    function d() {
                      var e = babelHelpers.taggedTemplateLiteralLoose([
                        "directPath missing from msg type ",
                        "",
                      ]);
                      return (
                        (d = function () {
                          return e;
                        }),
                        e
                      );
                    }
                    function p(e, t) {
                      return (
                        (null == e &&
                          null == (null == t ? void 0 : t.nativeFlowName)) ||
                        null == (null == t ? void 0 : t.nativeFlowName) ||
                        (null != e &&
                          a("WAWebInteractiveMessagesNativeFlowName").cast(
                            t.nativeFlowName
                          ) === e)
                      );
                    }
                    var W = [
                      "novi_login",
                      "novi_report_transaction",
                      "novi_hub",
                      "novi_view_code",
                      "novi_view_transaction",
                      "novi_view_bank_detail",
                      "novi_view_card_detail",
                      "wa_payment_transaction_details",
                      "wa_payment_learn_more",
                      "wa_payment_fbpin_reset",
                    ];
                    function g(e) {
                      switch (e) {
                        case a("WAWebInteractiveMessageType").NATIVE_FLOW:
                          return "nativeFlowMessage";
                        case a("WAWebInteractiveMessageType").SHOPS_STOREFRONT:
                          return "shopStorefrontMessage";
                        case a("WAWebInteractiveMessageType").CAROUSEL:
                          return "carouselMessage";
                      }
                    }
                    function b(e) {
                      if (
                        e ===
                        a("WAWebInteractiveResponseMessageType").NATIVE_FLOW
                      )
                        return "nativeFlowResponseMessage";
                    }
                    function A(e) {
                      return null != e && a("WAWebWid").isWid(e)
                        ? n("WAWebWidFactory").createWid(e)
                        : e;
                    }
                    function m(e, t, o, r) {
                      var i, s, l;
                      if (null == o || null == (i = o.id) ? void 0 : i.fromMe)
                        (s = Boolean(t.fromMe)),
                          (i = A(t.remoteJid)),
                          !0 === t.fromMe
                            ? i instanceof a("WAWebWid") &&
                              !i.isUser() &&
                              (l = c =
                                (c =
                                  (c = a("WAWebIsCagGroupCache").isCag(i)) &&
                                  r !==
                                    n("WAWebMsgKeyUtils").TranslateMsgKeyType
                                      .Addon) ||
                                !(null == (r = o.author) ? void 0 : r.isLid())
                                  ? n("WAWebUserPrefsMeUser").getMeUser()
                                  : n("WAWebUserPrefsMeUser").getMeLidUser())
                            : (l = A(t.participant));
                      else {
                        i = o.id.remote;
                        var c = a("WAWebIsCagGroupCache").isCag(i);
                        !0 === t.fromMe
                          ? ((s = !1),
                            (l = o.author),
                            c &&
                              (null == (c = l) ? void 0 : c.isLid()) &&
                              r !==
                                n("WAWebMsgKeyUtils").TranslateMsgKeyType
                                  .Addon &&
                              null !=
                                (c = n("WAWebApiContact").getPhoneNumber(
                                  o.author
                                )) &&
                              (l = c))
                          : (c = A(t.participant)) instanceof a("WAWebWid")
                          ? ((s = n("WAWebUserPrefsMeUser").isMeAccount(c)),
                            (!i.isUser() || c.isBot()) &&
                              (l = s
                                ? c.isLid()
                                  ? n("WAWebUserPrefsMeUser").getMeLidUser()
                                  : n("WAWebUserPrefsMeUser").getMeUser()
                                : c))
                          : (s = !0);
                      }
                      return (
                        o.type === n("WAWebMsgType").MSG_TYPE.REACTION &&
                          null != i &&
                          ((i instanceof a("WAWebWid") &&
                            i.isBroadcast() &&
                            !i.isStatus()) ||
                            "broadcast" ===
                              n("WAJids").interpretAndValidateJid(i.toString())
                                .jidType) &&
                          ((i = A(t.participant)), (l = void 0)),
                        new (a("WAWebMsgKey"))({
                          id: e,
                          fromMe: s,
                          remote: i,
                          participant: l,
                        })
                      );
                    }
                    function f(e) {
                      return e instanceof a("WAWebWid")
                        ? e.toString({ legacy: !0 })
                        : n("WATypeUtils").isString(e)
                        ? e.replace(/@c.us$/, "@s.whatsapp.net")
                        : void 0;
                    }
                    function _() {
                      return (
                        (_ = t("asyncToGeneratorRuntime").asyncToGenerator(
                          function* (e, t) {
                            var a = yield n(
                                "WAWebDBGroupsGroupMetadata"
                              ).getGroupMetadata(t),
                              o =
                                null == a
                                  ? void 0
                                  : a.disappearingModeInitiatedByMe;
                            if (
                              (null != a &&
                                null != e &&
                                a.disappearingModeTrigger ===
                                  n("WAWebEphemeralityTypes")
                                    .DisappearingModeTrigger.UnknownGroups &&
                                e !==
                                  n("WAWebEphemeralityTypes")
                                    .DisappearingModeTrigger.UnknownGroups &&
                                (n(
                                  "WAWebUpdateDbForGroupActionApi"
                                ).syncDisappearingModeTriggerToDB(t, e),
                                n("WAWebBackendApi").frontendFireAndForget(
                                  "syncEphemeralTriggerCollectionForGroup",
                                  { chatId: t, trigger: e }
                                )),
                              null != o)
                            )
                              return {
                                disappearingModeTrigger: e,
                                disappearingModeInitiatedByMe: o,
                              };
                          }
                        )),
                        _.apply(this, arguments)
                      );
                    }
                    function h(e) {
                      switch (e) {
                        case n("WAWebProtobufsE2E.pb").DisappearingMode$Trigger
                          .CHAT_SETTING:
                          return n("WAWebEphemeralityTypes")
                            .DisappearingModeTrigger.ChatSettings;
                        case n("WAWebProtobufsE2E.pb").DisappearingMode$Trigger
                          .ACCOUNT_SETTING:
                          return n("WAWebEphemeralityTypes")
                            .DisappearingModeTrigger.AccountSettings;
                        case n("WAWebProtobufsE2E.pb").DisappearingMode$Trigger
                          .BULK_CHANGE:
                          return n("WAWebEphemeralityTypes")
                            .DisappearingModeTrigger.BulkChange;
                        case n("WAWebProtobufsE2E.pb").DisappearingMode$Trigger
                          .BIZ_SUPPORTS_FB_HOSTING:
                          return n(
                            "WAWebBizCoexGatingUtils"
                          ).bizHostedDevicesEnabled()
                            ? n("WAWebEphemeralityTypes")
                                .DisappearingModeTrigger.BizSupportFbHosting
                            : n("WAWebEphemeralityTypes")
                                .DisappearingModeTrigger.Unknown;
                        case n("WAWebProtobufsE2E.pb").DisappearingMode$Trigger
                          .UNKNOWN_GROUPS:
                          return n("WAWebEphemeralityTypes")
                            .DisappearingModeTrigger.UnknownGroups;
                        case n("WAWebProtobufsE2E.pb").DisappearingMode$Trigger
                          .UNKNOWN:
                          return n("WAWebEphemeralityTypes")
                            .DisappearingModeTrigger.Unknown;
                      }
                    }
                    function M(e) {
                      switch (e) {
                        case "review_and_pay":
                          return a("WAWebInteractiveMessagesNativeFlowName")
                            .ORDER_DETAILS;
                        case "payment_info":
                          return a("WAWebInteractiveMessagesNativeFlowName")
                            .PAYMENT_INFO;
                        case "review_order":
                          return a("WAWebInteractiveMessagesNativeFlowName")
                            .ORDER_STATUS;
                        case "payment_status":
                          return a("WAWebInteractiveMessagesNativeFlowName")
                            .PAYMENT_STATUS;
                        case "payment_method":
                          return a("WAWebInteractiveMessagesNativeFlowName")
                            .PAYMENT_METHOD;
                        case "open_webview":
                          return a("WAWebInteractiveMessagesNativeFlowName")
                            .MESSAGE_WITH_LINK;
                        case "message_with_link_status":
                          return a("WAWebInteractiveMessagesNativeFlowName")
                            .MESSAGE_WITH_LINK_STATUS;
                        case "cta_url":
                          return a("WAWebInteractiveMessagesNativeFlowName")
                            .CTA_URL;
                        case "cta_call":
                          return a("WAWebInteractiveMessagesNativeFlowName")
                            .CTA_CALL;
                        case "quick_reply":
                          return a("WAWebInteractiveMessagesNativeFlowName")
                            .QUICK_REPLY;
                        case "cta_catalog":
                          return a("WAWebInteractiveMessagesNativeFlowName")
                            .CTA_CATALOG;
                      }
                    }
                    (i.typeAttributeFromProtobuf = function e(t) {
                      var a;
                      return (a =
                        n("WAWebABProps").getABPropConfigValue(
                          "web_unwrap_message_for_stanza_attributes"
                        ) &&
                        null !=
                          (a = n(
                            "WAWebVerifyProtobufMsgObjectKeys"
                          ).getUnwrappedProtobufMessage(t))
                          ? a
                          : t).ephemeralMessage
                        ? (t = a.ephemeralMessage.message)
                          ? e(t)
                          : n("WAWebHandleMsgCommon").STANZA_MSG_TYPES.text
                        : a.groupMentionedMessage
                        ? (t = a.groupMentionedMessage.message)
                          ? e(t)
                          : n("WAWebHandleMsgCommon").STANZA_MSG_TYPES.text
                        : a.botInvokeMessage
                        ? (t = a.botInvokeMessage.message)
                          ? e(t)
                          : n("WAWebHandleMsgCommon").STANZA_MSG_TYPES.text
                        : a.deviceSentMessage
                        ? (t = a.deviceSentMessage.message)
                          ? e(t)
                          : n("WAWebHandleMsgCommon").STANZA_MSG_TYPES.text
                        : a.reactionMessage || a.encReactionMessage
                        ? n("WAWebHandleMsgCommon").STANZA_MSG_TYPES.reaction
                        : a.eventMessage ||
                          a.encEventResponseMessage ||
                          (null == (t = a.secretEncryptedMessage)
                            ? void 0
                            : t.secretEncType) ===
                            n("WAWebProtobufsE2E.pb")
                              .Message$SecretEncryptedMessage$SecretEncType
                              .EVENT_EDIT
                        ? n("WAWebHandleMsgCommon").STANZA_MSG_TYPES.event
                        : a.pollCreationMessage ||
                          a.pollCreationMessageV2 ||
                          a.pollCreationMessageV3 ||
                          a.pollUpdateMessage
                        ? n("WAWebHandleMsgCommon").STANZA_MSG_TYPES.poll
                        : null !=
                            (null == (t = a.extendedTextMessage)
                              ? void 0
                              : t.matchedText) &&
                          "" !== a.extendedTextMessage.matchedText.trim()
                        ? n("WAWebHandleMsgCommon").STANZA_MSG_TYPES.media
                        : Boolean(a.conversation) ||
                          a.extendedTextMessage ||
                          a.templateButtonReplyMessage ||
                          a.protocolMessage ||
                          a.interactiveMessage ||
                          a.keepInChatMessage ||
                          a.requestPhoneNumberMessage ||
                          a.editedMessage ||
                          a.pinInChatMessage ||
                          a.encCommentMessage ||
                          a.newsletterAdminInviteMessage
                        ? n("WAWebHandleMsgCommon").STANZA_MSG_TYPES.text
                        : n("WAWebHandleMsgCommon").STANZA_MSG_TYPES.media;
                    }),
                      (i.extractCommentTargetIdAndSenderLid = function (e) {
                        if (
                          n("WAWebAddonCrossWindowUtils").getAddonProcessorType(
                            e
                          ) === n("WAWebMsgType").MSG_TYPE.COMMENT
                        ) {
                          e = n("WAWebAddonProcessMsgsUtils").getParentMsgKey(
                            e
                          );
                          var t = a("WANullthrows")(
                            e.participant,
                            "undefined participant"
                          );
                          return (
                            (t = n("WAWebApiContact").getCurrentLid(
                              n("WAWebWidFactory").toUserWid(t)
                            )),
                            {
                              threadMsgId: e.id,
                              threadMsgSenderLid: a("WANullthrows")(
                                t,
                                "undefined lid"
                              ),
                            }
                          );
                        }
                      }),
                      (i.decryptFailAttributeFromProtobuf = function (e) {
                        var t;
                        return null !=
                          (t =
                            n("WAWebABProps").getABPropConfigValue(
                              "web_unwrap_message_for_stanza_attributes"
                            ) &&
                            null !=
                              (t = n(
                                "WAWebVerifyProtobufMsgObjectKeys"
                              ).getUnwrappedProtobufMessage(e))
                              ? t
                              : e).reactionMessage ||
                          null != t.encReactionMessage ||
                          null !=
                            (null == (e = t.pollUpdateMessage)
                              ? void 0
                              : e.vote) ||
                          null != t.keepInChatMessage ||
                          null != t.editedMessage ||
                          null != t.pinInChatMessage ||
                          (null != t.protocolMessage &&
                            t.protocolMessage.type ===
                              n("WAWebProtobufsE2E.pb")
                                .Message$ProtocolMessage$Type
                                .EPHEMERAL_SYNC_RESPONSE) ||
                          (null == (e = t.botInvokeMessage) ||
                          null == (e = e.message) ||
                          null == (e = e.protocolMessage)
                            ? void 0
                            : e.type) ===
                            n("WAWebProtobufsE2E.pb")
                              .Message$ProtocolMessage$Type
                              .REQUEST_WELCOME_MESSAGE ||
                          (null == (e = t.protocolMessage)
                            ? void 0
                            : e.type) ===
                            n("WAWebProtobufsE2E.pb")
                              .Message$ProtocolMessage$Type
                              .REQUEST_WELCOME_MESSAGE ||
                          null != t.encEventResponseMessage ||
                          (null == (e = t.secretEncryptedMessage)
                            ? void 0
                            : e.secretEncType) ===
                            n("WAWebProtobufsE2E.pb")
                              .Message$SecretEncryptedMessage$SecretEncType
                              .EVENT_EDIT
                          ? n("WAWebBackendJobs.flow").DecryptFailType.Hide
                          : n("WAWebBackendJobs.flow").DecryptFailType.Show;
                      }),
                      (i.protobufToMsgKey = function (e, t) {
                        var o = e.fromMe,
                          r = e.id,
                          i = e.participant;
                        return (
                          (e = e.remoteJid),
                          (i =
                            null != i ? i : null == t ? void 0 : t.toString()),
                          (null != o && null != e && null != r) || s(0, 56276),
                          (t =
                            null != i && n("WAWebWidFactory").isWidlike(i)
                              ? n("WAWebWidFactory").createWid(i)
                              : void 0),
                          ((i = n("WAWebWidFactory").createWid(e)).isGroup() ||
                            i.isBroadcast()) &&
                            o &&
                            (t = n("WAWebUserPrefsMeUser").getMaybeMeUser()),
                          new (a("WAWebMsgKey"))({
                            fromMe: o,
                            id: r,
                            participant: t,
                            remote: n("WAWebWidFactory").createWid(e),
                          })
                        );
                      }),
                      (i.msgKeyToProtobuf = function (e) {
                        var t;
                        return {
                          fromMe: e.fromMe,
                          id: e.id,
                          participant:
                            e.fromMe || null == (t = e.participant)
                              ? void 0
                              : t.toString({ legacy: !0 }),
                          remoteJid: e.remote.toString({ legacy: !0 }),
                        };
                      }),
                      (i.parseMsgPaymentInfo = function (e) {
                        return {
                          paymentStatus: e.status,
                          paymentTxnStatus: e.txnStatus,
                          paymentCurrency: e.currency || "",
                          paymentAmount1000: a("WANullthrows")(
                            n("WALongInt").maybeNumberOrThrowIfTooLarge(
                              e.amount1000
                            )
                          ),
                          paymentMessageReceiverJid: n(
                            "WAWebWidFactory"
                          ).createWid(a("WANullthrows")(e.receiverJid)),
                          paymentExpiryTimestamp: n(
                            "WALongInt"
                          ).maybeNumberOrThrowIfTooLarge(e.expiryTimestamp),
                          paymentTransactionTimestamp: a("WANullthrows")(
                            n("WALongInt").maybeNumberOrThrowIfTooLarge(
                              e.transactionTimestamp
                            )
                          ),
                        };
                      }),
                      (i.hasUnsupportedCurrency = function (e) {
                        var t;
                        return (
                          (t =
                            (null == e || null == (t = e.primaryAmount)
                              ? void 0
                              : t.currencyCode) ||
                            (null == e ? void 0 : e.currency)),
                          !!["XUS", "XDX", "USDP"].includes(
                            null == t ? void 0 : t.toUpperCase()
                          )
                        );
                      }),
                      (i.isEitherSenderOrReceiverOfPaymentMessage = function (
                        e,
                        t
                      ) {
                        return !(
                          e.remote.isGroup() &&
                          !(null == (e = e.participant)
                            ? void 0
                            : e.equals(
                                n("WAWebUserPrefsMeUser").getMeUser()
                              )) &&
                          !t.equals(n("WAWebUserPrefsMeUser").getMeUser())
                        );
                      }),
                      (i.shouldParseNFM = function (e, t) {
                        return (
                          (null == e &&
                            null == (null == t ? void 0 : t.nativeFlowName)) ||
                          (!!n(
                            "WAWebBizGatingUtils"
                          ).nativeFlowMessagesEnabled() &&
                            p(e, t))
                        );
                      }),
                      (i.isValidNativeFlowName = p),
                      (i.isOrderNativeFlow = function (e) {
                        return (
                          e ===
                            a("WAWebInteractiveMessagesNativeFlowName")
                              .ORDER_DETAILS ||
                          e ===
                            a("WAWebInteractiveMessagesNativeFlowName")
                              .ORDER_STATUS ||
                          e ===
                            a("WAWebInteractiveMessagesNativeFlowName")
                              .PAYMENT_STATUS ||
                          e ===
                            a("WAWebInteractiveMessagesNativeFlowName")
                              .PAYMENT_METHOD ||
                          e ===
                            a("WAWebInteractiveMessagesNativeFlowName")
                              .PAYMENT_INFO
                        );
                      }),
                      (i.getBizNativeFlowName = function (e) {
                        var t;
                        return (null == (t = e.interactiveMessage) ||
                        null == (t = t.nativeFlowMessage) ||
                        null == (t = t.buttons)
                          ? void 0
                          : t.length) >= 1
                          ? M(
                              e.interactiveMessage.nativeFlowMessage.buttons[0]
                                .name
                            )
                          : 1 ===
                            (null == (t = e.buttonsMessage) ||
                            null == (t = t.buttons)
                              ? void 0
                              : t.length)
                          ? M(
                              null ==
                                (t = e.buttonsMessage.buttons[0].nativeFlowInfo)
                                ? void 0
                                : t.name
                            )
                          : void 0;
                      }),
                      (i.hasUnsupportedButtons = function (e) {
                        return e.some(function (e) {
                          return (
                            (e.nativeFlowInfo &&
                              W.includes(e.nativeFlowInfo.name)) ||
                            W.includes(e.buttonId)
                          );
                        });
                      }),
                      (i.isInteractiveMessageTypeEnabled = function (e) {
                        switch (e) {
                          case a("WAWebInteractiveMessageType").NATIVE_FLOW:
                            return n(
                              "WAWebBizGatingUtils"
                            ).interactiveNativeFlowMessagesEnabled();
                          case a("WAWebInteractiveMessageType")
                            .SHOPS_STOREFRONT:
                            return n(
                              "WAWebBizGatingUtils"
                            ).shopsInteractiveMessageEnabled();
                          case a("WAWebInteractiveMessageType").CAROUSEL:
                            return n("WAWebBizGatingUtils").carouselsEnabled();
                        }
                      }),
                      (i.getInteractiveMessageFieldNameForType = g),
                      (i.getInteractiveMessageTypeForProto = function (e) {
                        for (var t of a(
                          "WAWebInteractiveMessageType"
                        ).members())
                          if (g(t) in e) return t;
                        return null;
                      }),
                      (i.isSupportedInteractiveMessageVersion = function (
                        e,
                        t
                      ) {
                        if (
                          null == (t = null == t ? void 0 : t.messageVersion) ||
                          null == e
                        )
                          return !1;
                        switch (e) {
                          case a("WAWebInteractiveMessageType").NATIVE_FLOW:
                          case a("WAWebInteractiveMessageType")
                            .SHOPS_STOREFRONT:
                          case a("WAWebInteractiveMessageType").CAROUSEL:
                            return t <= 1;
                        }
                      }),
                      (i.getInteractiveResponseMessageFieldNameForType = b),
                      (i.getInteractiveResponseMessageTypeForProto = function (
                        e
                      ) {
                        for (var t of a(
                          "WAWebInteractiveResponseMessageType"
                        ).members())
                          if (b(t) in e) return t;
                        return null;
                      }),
                      (i.isInteractiveResponseMessageTypeEnabled = function (
                        e
                      ) {
                        if (
                          e ===
                          a("WAWebInteractiveResponseMessageType").NATIVE_FLOW
                        )
                          return n(
                            "WAWebBizGatingUtils"
                          ).interactiveNativeFlowResponseMessagesEnabled();
                      }),
                      (i.getInteractiveResponsePayload = function (e, t, n) {
                        if (
                          e ===
                          a("WAWebInteractiveResponseMessageType").NATIVE_FLOW
                        ) {
                          t = a("WANullthrows")(t.nativeFlowResponseMessage);
                          var o = a("WANullthrows")(
                              a("WAWebInteractiveMessagesNativeFlowName").cast(
                                t.name
                              )
                            ),
                            r = a("WANullthrows")(t.version);
                          if (r > 1 || !p(o, n))
                            throw a("err")("Invalid message");
                          return {
                            name: o,
                            version: r,
                            type: e,
                            paramsJson: a("WANullthrows")(t.paramsJson),
                          };
                        }
                      }),
                      (i.isQuotedSupported = function (e) {
                        return null == e.reactionMessage;
                      }),
                      (i.decodeJid = A),
                      (i.strictDecodeJid = function (e) {
                        if (null != e)
                          return (
                            a("WAWebWid").isWid(e) || s(0, 64887),
                            n("WAWebWidFactory").createWid(e)
                          );
                      }),
                      (i.getMsgKey = function (e, t) {
                        if (!e)
                          throw a("err")(
                            "getMsgKey: no message key is defined for protocol message"
                          );
                        var n = e.id;
                        if (null == n || "" === n)
                          throw a("err")(
                            "getMsgKey: no message id is defined for protocol message"
                          );
                        return m(n, e, t);
                      }),
                      (i.translateAddonMessageKeyToLocalReference = function (
                        e,
                        t
                      ) {
                        if (null != e) {
                          var a = e.id;
                          if (null != a)
                            return m(
                              a,
                              e,
                              t,
                              n("WAWebMsgKeyUtils").TranslateMsgKeyType.Addon
                            );
                        }
                      }),
                      (i.translateRegularMessageKeyToLocalReference = function (
                        e,
                        t
                      ) {
                        if (null != e) {
                          var a = e.id;
                          if (null != a)
                            return m(
                              a,
                              e,
                              t,
                              n("WAWebMsgKeyUtils").TranslateMsgKeyType.Message
                            );
                        }
                      }),
                      (i.createMsgKeyFromThreadInfo = function (e, t, o) {
                        return (
                          (o = (e = n(
                            "WAWebAddonProcessingError"
                          ).validateMsgMeta(e, o)).threadMsgId),
                          (e = e.threadMsgSenderJid),
                          new (a("WAWebMsgKey"))({
                            id: o,
                            fromMe: n("WAWebUserPrefsMeUser").isMeAccount(e),
                            remote: t.chat,
                            participant: e,
                          })
                        );
                      }),
                      (i.translateKeyToLocalReference = m),
                      (i.convertToTextWithoutSpecialEmojis = function (e) {
                        return null == e ||
                          "" === e ||
                          n("WAWebMobilePlatforms").getMobilePlatform() ===
                            n("WAWebMobilePlatforms").PLATFORMS.ANDROID
                          ? e
                          : n(
                              "WAWebConvertToTextWithoutSpecialEmojis"
                            ).convertToTextWithoutSpecialEmojis(e);
                      }),
                      (i.encodeKey = function (e) {
                        var t = { fromMe: e.fromMe, id: e.id },
                          a = f(e.remote);
                        return (
                          (e = f(e.participant)),
                          n("WATypeUtils").isString(a) && (t.remoteJid = a),
                          n("WATypeUtils").isString(e) && (t.participant = e),
                          t
                        );
                      }),
                      (i.encodeJid = f),
                      (i.encodeBytes = function (e) {
                        return null != e && "" !== e
                          ? n("WABase64").decodeB64(e)
                          : void 0;
                      }),
                      (i.createMessageKey = function (e) {
                        var t = f(e.to);
                        return (
                          (e = { fromMe: !0, id: e.id.id }),
                          n("WATypeUtils").isString(t) && (e.remoteJid = t),
                          e
                        );
                      }),
                      (i.validateOutgoingRequiredMediaProperties = function (
                        e,
                        t,
                        a
                      ) {
                        Boolean(t.viewOnce) ||
                          (null == t.directPath &&
                            null == t.staticUrl &&
                            n("WALogger")
                              .LOG(d(), e)
                              .sendLogs(
                                "outgoing-" + e + "-message-missing-direct-path"
                              ),
                          null == t.fileSha256 &&
                            n("WALogger")
                              .LOG(u(), e)
                              .sendLogs(
                                "outgoing-" + e + "-message-missing-file-sha"
                              ),
                          !a &&
                            null == t.fileEncSha256 &&
                            n("WALogger")
                              .LOG(c(), e)
                              .sendLogs(
                                "outgoing-" +
                                  e +
                                  "-message-missing-file-enc-sha"
                              ),
                          null == t.url &&
                            null == t.staticUrl &&
                            !a &&
                            n("WALogger")
                              .LOG(l(), e)
                              .sendLogs(
                                "outgoing-" + e + "-message-missing-mms3-url"
                              ));
                      }),
                      (i.disappearingModeInitiatorToProto = function (e, t, a) {
                        var o, r, i;
                        switch (e) {
                          case n("WAWebEphemeralityTypes")
                            .DisappearingModeInitiator.ChangedInChat:
                            o = n("WAWebProtobufsE2E.pb")
                              .DisappearingMode$Initiator.CHANGED_IN_CHAT;
                            break;
                          case n("WAWebEphemeralityTypes")
                            .DisappearingModeInitiator.InitiatedByMe:
                            o = n("WAWebProtobufsE2E.pb")
                              .DisappearingMode$Initiator.INITIATED_BY_ME;
                            break;
                          case n("WAWebEphemeralityTypes")
                            .DisappearingModeInitiator.InitiatedByOther:
                          case n("WAWebEphemeralityTypes")
                            .DisappearingModeInitiator.BizUpgradeFbHosting:
                            o = n("WAWebProtobufsE2E.pb")
                              .DisappearingMode$Initiator.INITIATED_BY_OTHER;
                        }
                        if (
                          n("WAWebABProps").getABPropConfigValue(
                            "dm_initiator_trigger"
                          )
                        ) {
                          if (t)
                            switch (t) {
                              case n("WAWebEphemeralityTypes")
                                .DisappearingModeTrigger.ChatSettings:
                                r = n("WAWebProtobufsE2E.pb")
                                  .DisappearingMode$Trigger.CHAT_SETTING;
                                break;
                              case n("WAWebEphemeralityTypes")
                                .DisappearingModeTrigger.AccountSettings:
                                r = n("WAWebProtobufsE2E.pb")
                                  .DisappearingMode$Trigger.ACCOUNT_SETTING;
                                break;
                              case n("WAWebEphemeralityTypes")
                                .DisappearingModeTrigger.BulkChange:
                                r = n("WAWebProtobufsE2E.pb")
                                  .DisappearingMode$Trigger.BULK_CHANGE;
                                break;
                              case n("WAWebEphemeralityTypes")
                                .DisappearingModeTrigger.Unknown:
                                r = n("WAWebProtobufsE2E.pb")
                                  .DisappearingMode$Trigger.UNKNOWN;
                                break;
                              case n("WAWebEphemeralityTypes")
                                .DisappearingModeTrigger.UnknownGroups:
                                r = n("WAWebProtobufsE2E.pb")
                                  .DisappearingMode$Trigger.UNKNOWN_GROUPS;
                                break;
                              case n("WAWebEphemeralityTypes")
                                .DisappearingModeTrigger.BizSupportFbHosting:
                                r = n("WAWebProtobufsE2E.pb")
                                  .DisappearingMode$Trigger.UNKNOWN;
                            }
                          null != a && (i = a);
                        }
                        return { initiator: o, trigger: r, initiatedByMe: i };
                      }),
                      (i.protoToDisappearingModeInitiator = function (e, t) {
                        if (
                          null != e.from &&
                          ((e = n("WAWebUserPrefsMeUser").isMeAccount(e.from)),
                          null != t.initiator)
                        )
                          switch (t.initiator) {
                            case n("WAWebProtobufsE2E.pb")
                              .DisappearingMode$Initiator.CHANGED_IN_CHAT:
                              return n("WAWebEphemeralityTypes")
                                .DisappearingModeInitiator.ChangedInChat;
                            case n("WAWebProtobufsE2E.pb")
                              .DisappearingMode$Initiator.INITIATED_BY_ME:
                              return e
                                ? n("WAWebEphemeralityTypes")
                                    .DisappearingModeInitiator.InitiatedByMe
                                : n("WAWebEphemeralityTypes")
                                    .DisappearingModeInitiator.InitiatedByOther;
                            case n("WAWebProtobufsE2E.pb")
                              .DisappearingMode$Initiator.INITIATED_BY_OTHER:
                            case n("WAWebProtobufsE2E.pb")
                              .DisappearingMode$Initiator
                              .BIZ_UPGRADE_FB_HOSTING:
                              return e
                                ? n("WAWebEphemeralityTypes")
                                    .DisappearingModeInitiator.InitiatedByOther
                                : n("WAWebEphemeralityTypes")
                                    .DisappearingModeInitiator.InitiatedByMe;
                          }
                      }),
                      (i.protoToDisappearingMode = function (e, t) {
                        if (
                          n("WAWebABProps").getABPropConfigValue(
                            "dm_initiator_trigger"
                          )
                        ) {
                          e = n("WAWebUserPrefsMeUser").isMeAccount(e.from);
                          var a = t.initiator,
                            o = t.trigger,
                            r = t.initiatedByMe;
                          if (
                            null != o &&
                            n(
                              "WAWebBizCoexGatingUtils"
                            ).bizHostedDevicesEnabled() &&
                            o ===
                              n("WAWebProtobufsE2E.pb").DisappearingMode$Trigger
                                .BIZ_SUPPORTS_FB_HOSTING
                          )
                            return {
                              disappearingModeTrigger: h(o),
                              initiatedByMe: e ? r : !r,
                            };
                          if (null != o && null != r)
                            return {
                              disappearingModeTrigger: h(o),
                              initiatedByMe: e ? r : !r,
                            };
                          if (null != t.initiator && null != a)
                            switch (a) {
                              case n("WAWebProtobufsE2E.pb")
                                .DisappearingMode$Initiator.CHANGED_IN_CHAT:
                                return {
                                  disappearingModeTrigger: n(
                                    "WAWebEphemeralityTypes"
                                  ).DisappearingModeTrigger.ChatSettings,
                                };
                              case n("WAWebProtobufsE2E.pb")
                                .DisappearingMode$Initiator.INITIATED_BY_ME:
                                return {
                                  disappearingModeTrigger: n(
                                    "WAWebEphemeralityTypes"
                                  ).DisappearingModeTrigger.AccountSettings,
                                  initiatedByMe: e,
                                };
                              case n("WAWebProtobufsE2E.pb")
                                .DisappearingMode$Initiator
                                .BIZ_UPGRADE_FB_HOSTING:
                              case n("WAWebProtobufsE2E.pb")
                                .DisappearingMode$Initiator.INITIATED_BY_OTHER:
                                return {
                                  disappearingModeTrigger: n(
                                    "WAWebEphemeralityTypes"
                                  ).DisappearingModeTrigger.AccountSettings,
                                  initiatedByMe: !e,
                                };
                            }
                        }
                      }),
                      (i.updateDisappearingModeForGroups = function (e, t) {
                        return _.apply(this, arguments);
                      }),
                      (i.getNativeFlowNameByButtonName = M),
                      (i.getMutableMessageProtobuf = function (e) {
                        return e;
                      });
                  },
                  98
                ),
                (window.require("__debug").modulesMap.WAWebBizGatingUtils =
                  null),
                __d(
                  "WAWebBizGatingUtils",
                  [
                    "$InternalEnum",
                    "WALogger",
                    "WAWebABProps",
                    "WAWebApiContact",
                    "WAWebBusinessProfileTypes",
                    "WAWebCTWAConstants",
                    "WAWebClientFeatureFlags",
                    "WAWebComplianceConstants",
                    "WAWebInteractiveMessagesNativeFlowName",
                    "WAWebL10NCountryCodes",
                    "WAWebMobilePlatforms",
                    "WAWebMsgGetters",
                    "WAWebPrimaryFeatures",
                    "WAWebServerPropsModel",
                    "WAWebUserPrefsMeUser",
                    "WAWebWidFactory",
                  ],
                  function (e, t, a, n, o, r, i) {
                    function s() {
                      var e = babelHelpers.taggedTemplateLiteralLoose([
                        "qpSurfaceIdsUsingGraphQL: unknown surface ID ",
                        "",
                      ]);
                      return (
                        (s = function () {
                          return e;
                        }),
                        e
                      );
                    }
                    function l() {
                      var e = babelHelpers.taggedTemplateLiteralLoose([
                        "isOrderDetailsQuickPayEnabled failed to parse config json: error ",
                        "",
                      ]);
                      return (
                        (l = function () {
                          return e;
                        }),
                        e
                      );
                    }
                    function c() {
                      return n("WAWebMobilePlatforms").isSMB();
                    }
                    function u(e) {
                      return (
                        (e = n(
                          "WAWebL10NCountryCodes"
                        ).getCountryShortcodeByPhone(e || "")) ===
                          n("WAWebComplianceConstants").COMPLIANCE_INFO_CODES
                            .INDIA ||
                        n("WAWebClientFeatureFlags").isFeatureEnabled(
                          "skip_compliance_phone_check"
                        )
                      );
                    }
                    function d(e, t, a) {
                      var o;
                      return (
                        void 0 === t &&
                          (t = function () {
                            return !1;
                          }),
                        !(
                          null == e ||
                          ((o = e.isLid()
                            ? null ==
                              (a = n("WAWebApiContact").getPhoneNumber(
                                n("WAWebWidFactory").toUserWid(e)
                              ))
                              ? void 0
                              : a.user
                            : e.user),
                          !e.isLid() || null != o)
                        ) ||
                          (!!u(o) && t())
                      );
                    }
                    var p = t("$InternalEnum")({
                      DIGITAL_GOODS: "digital-goods",
                      PHYSICAL_GOODS: "physical-goods",
                      ANY: "any",
                      NONE: "none",
                    });
                    function W() {
                      return (
                        n("WAWebMobilePlatforms").isSMB() &&
                        n("WAWebABProps").getABPropConfigValue(
                          "smb_multi_device_message_attribution_enabled"
                        )
                      );
                    }
                    function g() {
                      return (
                        !!n("WAWebMobilePlatforms").isSMB() &&
                        n("WAWebABProps").getABPropConfigValue(
                          "premium_blue_enabled"
                        )
                      );
                    }
                    function b() {
                      return (
                        !!n("WAWebMobilePlatforms").isSMB() &&
                        (n("WAWebABProps").getABPropConfigValue(
                          "smb_billing_enabled"
                        ) ||
                          n("WAWebABProps").getABPropConfigValue(
                            "smb_ctwa_billing_enabled"
                          ))
                      );
                    }
                    function A() {
                      return (
                        n("WAWebMobilePlatforms").isSMB() &&
                        n("WAWebABProps").getABPropConfigValue(
                          "smb_md_agent_chat_assignment_enabled"
                        )
                      );
                    }
                    function m() {
                      return (
                        n("WAWebMobilePlatforms").isSMB() &&
                        n("WAWebABProps").getABPropConfigValue(
                          "wa_ctwa_ads_action_banner_enabled_web"
                        )
                      );
                    }
                    function f() {
                      return (
                        n("WAWebMobilePlatforms").isSMB() &&
                        !1 ===
                          n("WAWebABProps").getABPropConfigValue(
                            "kill_switch_ctwa_ml_entry_point_config"
                          )
                      );
                    }
                    function _() {
                      return (
                        n("WAWebMobilePlatforms").isSMB() &&
                        n("WAWebABProps").getABPropConfigValue(
                          "ctwa_manage_ads_tab_web"
                        )
                      );
                    }
                    function h() {
                      return (
                        _() &&
                        n("WAWebABProps").getABPropConfigValue(
                          "ctwa_manage_ads_tab_web_recovery_flow"
                        )
                      );
                    }
                    function M() {
                      return (
                        0 !==
                        n("WAWebABProps").getABPropConfigValue(
                          "payments_br_content_optimization_variant"
                        )
                      );
                    }
                    function y(e) {
                      return (
                        e ===
                          a("WAWebInteractiveMessagesNativeFlowName").CTA_URL ||
                        e ===
                          a("WAWebInteractiveMessagesNativeFlowName")
                            .QUICK_REPLY
                      );
                    }
                    function P() {
                      return n("WAWebABProps").getABPropConfigValue(
                        "row_buyer_order_revamp_m0_enabled"
                      );
                    }
                    function w() {
                      return n("WAWebABProps").getABPropConfigValue(
                        "carousel_message_client_enabled"
                      );
                    }
                    (t = function () {
                      return n("WAWebABProps").getABPropConfigValue(
                        "order_messages_ephemeral_exception_enabled"
                      );
                    }),
                      (i.canDisplayLabel = function () {
                        return n("WAWebMobilePlatforms").isSMB();
                      }),
                      (i.canEditLabelAssociation = function () {
                        return n("WAWebMobilePlatforms").isSMB();
                      }),
                      (i.canSendQuickReply = c),
                      (i.canSendQuickReplyInChat = function (e) {
                        return (
                          !e.isNewsletter &&
                          c() &&
                          !(null == (e = e.contact.businessProfile)
                            ? void 0
                            : e.isBizBot3p)
                        );
                      }),
                      (i.canSeeBizProfileV3 = function () {
                        return n("WAWebABProps").getABPropConfigValue(
                          "business_profile_refresh_m1_enabled"
                        );
                      }),
                      (i.canManageCollections = function () {
                        return n("WAWebABProps").getABPropConfigValue(
                          "smb_collections_enabled"
                        );
                      }),
                      (i.canAppealCollections = function () {
                        return n("WAWebABProps").getABPropConfigValue(
                          "smb_collections_appeal_flow_enabled"
                        );
                      }),
                      (i.nativeFlowMessagesEnabled = function () {
                        return n("WAWebABProps").getABPropConfigValue(
                          "nfm_rendering_enabled"
                        );
                      }),
                      (i.interactiveNativeFlowMessagesEnabled = function () {
                        return !n("WAWebABProps").getABPropConfigValue(
                          "interactive_message_native_flow_killswitch"
                        );
                      }),
                      (i.interactiveResponseMessagesEnabled = function () {
                        return !n("WAWebABProps").getABPropConfigValue(
                          "interactive_response_message_killswitch"
                        );
                      }),
                      (i.interactiveNativeFlowResponseMessagesEnabled =
                        function () {
                          return !n("WAWebABProps").getABPropConfigValue(
                            "interactive_response_message_native_flow_killswitch"
                          );
                        }),
                      (i.canSeeECommerceComplianceIndiaSoftEnforcement =
                        function (e) {
                          var t, a;
                          return (
                            !(
                              null == e ||
                              ((t = e.isLid()
                                ? null ==
                                  (a = n("WAWebApiContact").getPhoneNumber(
                                    n("WAWebWidFactory").toUserWid(e)
                                  ))
                                  ? void 0
                                  : a.user
                                : e.user),
                              !e.isLid() || null != t)
                            ) || u(t)
                          );
                        }),
                      (i.canSeeECommerceComplianceIndiaHardEnforcementBusinessJourney =
                        function (e) {
                          return d(
                            e,
                            function () {
                              return n("WAWebABProps").getABPropConfigValue(
                                "smb_ecommerce_compliance_india_m4"
                              );
                            },
                            function () {
                              return n("WAWebServerPropsModel").ServerProps
                                .smbEcommerceComplianceIndiaM4;
                            }
                          );
                        }),
                      (i.canSeeECommerceComplianceIndiaCountryOriginExemptBusinessJourney =
                        function (e) {
                          return d(
                            e,
                            function () {
                              return n("WAWebABProps").getABPropConfigValue(
                                "smb_ecommerce_compliance_india_m4_5"
                              );
                            },
                            function () {
                              return n("WAWebServerPropsModel").ServerProps
                                .smbEcommerceComplianceIndiaM4_5;
                            }
                          );
                        }),
                      (i.blockCatalogCreationECommerceComplianceIndia =
                        function (e) {
                          var t = d(
                            null == e ? void 0 : e.id,
                            function () {
                              return n("WAWebABProps").getABPropConfigValue(
                                "web_abprop_block_catalog_creation_ecommerce_compliance_india"
                              );
                            },
                            function () {
                              return n("WAWebServerPropsModel").ServerProps
                                .blockCatalogCreationEcommerceComplianceIndia;
                            }
                          );
                          return (
                            t &&
                            (null == e || null == (t = e.profileOptions)
                              ? void 0
                              : t.commerceExperience) ===
                              n("WAWebBusinessProfileTypes")
                                .CommerceExperienceTypes.NONE
                          );
                        }),
                      (i.isWidInPaymentsCountry = function (e) {
                        var t;
                        return (
                          !!e &&
                          null !=
                            (t = e.isLid()
                              ? null ==
                                (t = n("WAWebApiContact").getPhoneNumber(
                                  n("WAWebWidFactory").toUserWid(e)
                                ))
                                ? void 0
                                : t.user
                              : e.user) &&
                          (u(t) ||
                            (function (e) {
                              return (
                                "BR" ===
                                n(
                                  "WAWebL10NCountryCodes"
                                ).getCountryShortcodeByPhone(e || "")
                              );
                            })(t))
                        );
                      }),
                      (i.isBizToolsDrawerEnabled = function () {
                        return (
                          n("WAWebMobilePlatforms").isSMB() &&
                          n("WAWebABProps").getABPropConfigValue(
                            "web_business_tools_drawer_enabled"
                          )
                        );
                      }),
                      (i.tos3GatingEnabled = function () {
                        return (
                          !n("WAWebMobilePlatforms").isSMB() &&
                          n("WAWebABProps").getABPropConfigValue(
                            "tos_3_client_gating_enabled"
                          )
                        );
                      }),
                      (i.tosFetchIteration = function () {
                        return n("WAWebABProps").getABPropConfigValue(
                          "tos_client_state_fetch_iteration"
                        );
                      }),
                      (i.tosFetchEnabled = function () {
                        return (
                          !n("WAWebMobilePlatforms").isSMB() &&
                          n("WAWebABProps").getABPropConfigValue(
                            "tos_client_state_fetch_enabled"
                          )
                        );
                      }),
                      (i.shopsInteractiveMessageEnabled = function () {
                        return n("WAWebABProps").getABPropConfigValue(
                          "web_shop_storefront_message"
                        );
                      }),
                      (i.bannedShopsEnabled = function () {
                        return n("WAWebABProps").getABPropConfigValue(
                          "banned_shops_ux_enabled"
                        );
                      }),
                      (i.smbClickToChatLoggingEnabled = function () {
                        return (
                          !!n("WAWebMobilePlatforms").isSMB() &&
                          n("WAWebABProps").getABPropConfigValue(
                            "smb_click_to_chat_logging_enabled"
                          )
                        );
                      }),
                      (i.smbBizProfileLoggingEnabled = function () {
                        return (
                          !!n("WAWebMobilePlatforms").isSMB() &&
                          n("WAWebABProps").getABPropConfigValue(
                            "smb_biz_profile_logging_enabled"
                          )
                        );
                      }),
                      (i.bizLinkedAccountsEnabled = function () {
                        return n("WAWebABProps").getABPropConfigValue(
                          "web_abprop_business_profile_refresh_linked_accounts_killswitch"
                        );
                      }),
                      (i.canViewBizLinkedAccounts = function () {
                        return n("WAWebABProps").getABPropConfigValue(
                          "web_abprop_business_profile_refresh_linked_account_enabled"
                        );
                      }),
                      (i.commerceFeaturesDisabledBySanctions = function () {
                        return n("WAWebABProps").getABPropConfigValue(
                          "commerce_sanctioned"
                        );
                      }),
                      (i.isBizCoverPhotoEditEnabled = function () {
                        return n("WAWebABProps").getABPropConfigValue(
                          "web_abprop_business_profile_refresh_edit_cover_photo_enabled"
                        );
                      }),
                      (i.isBizCoverPhotoViewEnabled = function () {
                        return n("WAWebABProps").getABPropConfigValue(
                          "web_abprop_business_profile_refresh_cover_photo_view_enabled"
                        );
                      }),
                      (i.messageQuickReplyEnabled = function () {
                        return n("WAWebABProps").getABPropConfigValue(
                          "message_quick_reply"
                        );
                      }),
                      (i.catalogCategoriesEnabled = function () {
                        return n("WAWebABProps").getABPropConfigValue(
                          "catalog_categories_enabled"
                        );
                      }),
                      (i.QuickPayProductTypeGating = p),
                      (i.isOrderDetailsQuickPayEnabled = function (e) {
                        void 0 === e && (e = p.NONE);
                        try {
                          var t = JSON.parse(
                            n("WAWebABProps").getABPropConfigValue(
                              "order_details_quick_pay"
                            )
                          );
                          if ((t = t.allowed_product_type) && t !== p.NONE)
                            return t === p.ANY || t === e;
                        } catch (e) {
                          n("WALogger").WARN(l(), e);
                        }
                        return !1;
                      }),
                      (i.billingEnabled = function () {
                        return (
                          n("WAWebMobilePlatforms").isSMB() &&
                          n("WAWebABProps").getABPropConfigValue(
                            "smb_billing_enabled"
                          )
                        );
                      }),
                      (i.isPSForCatalogViewEnabled = function () {
                        return n("WAWebABProps").getABPropConfigValue(
                          "web_enable_biz_catalog_view_ps_logging"
                        );
                      }),
                      (i.smartFiltersEnabled = function () {
                        return (
                          (n("WAWebMobilePlatforms").isSMB() &&
                            n("WAWebABProps").getABPropConfigValue(
                              "smart_filters_enabled"
                            )) ||
                          (!n("WAWebMobilePlatforms").isSMB() &&
                            n("WAWebABProps").getABPropConfigValue(
                              "smart_filters_enabled_consumer"
                            ))
                        );
                      }),
                      (i.isMultiDeviceMessageAttributionEnabled = W),
                      (i.inOrderMessagesEphemeralExceptionEnabled = t),
                      (i.isMultiDeviceAgentsLoggingEnabled = function () {
                        return (
                          W() &&
                          n("WAWebABProps").getABPropConfigValue(
                            "smb_multi_device_agents_logging_V2_enabled"
                          )
                        );
                      }),
                      (i.isSmbOrangeEnabled = function () {
                        return (
                          !!n("WAWebMobilePlatforms").isSMB() &&
                          n("WAWebABProps").getABPropConfigValue(
                            "smb_orange_enabled"
                          )
                        );
                      }),
                      (i.subscriptionFetchEnabled = function () {
                        return (
                          !!n("WAWebMobilePlatforms").isSMB() && (g() || b())
                        );
                      }),
                      (i.isMetaVerifiedEnabled = g),
                      (i.isPremiumBillingEnabled = b),
                      (i.commerceThreadsLoggingEnabled = function () {
                        return n("WAWebABProps").getABPropConfigValue(
                          "native_commerce_threads_logging_enabled"
                        );
                      }),
                      (i.isCustomURLViaBizProfileEnabled = function () {
                        return n("WAWebABProps").getABPropConfigValue(
                          "smb_biz_profile_custom_url"
                        );
                      }),
                      (i.isQuantityControlsFeatureEnabled = function () {
                        return n("WAWebABProps").getABPropConfigValue(
                          "web_quantity_controls_enabled"
                        );
                      }),
                      (i.quickRepliesManagementEnabled = function () {
                        return (
                          n("WAWebMobilePlatforms").isSMB() &&
                          n("WAWebPrimaryFeatures").primaryFeatureEnabled(
                            "companion_biz_quick_reply_sync_support"
                          ) &&
                          n("WAWebABProps").getABPropConfigValue(
                            "web_quick_reply_authoring"
                          )
                        );
                      }),
                      (i.isCollectionReorderingEnabled = function () {
                        return n("WAWebABProps").getABPropConfigValue(
                          "smb_catalog_collections_reordering_enabled"
                        );
                      }),
                      (i.coverPhotoPrivacyMessagingEnabled = function () {
                        return n("WAWebABProps").getABPropConfigValue(
                          "smb_temp_cover_photo_privacy_messaging"
                        );
                      }),
                      (i.chatAssignmentEnabled = A),
                      (i.chatAssignmentSystemMessagesEnabled = function () {
                        return (
                          A() &&
                          n("WAWebABProps").getABPropConfigValue(
                            "smb_md_agent_chat_assignment_system_messages_enabled"
                          )
                        );
                      }),
                      (i.chatAssignmentMaxNuxImpressions = function () {
                        return A()
                          ? n("WAWebABProps").getABPropConfigValue(
                              "smb_md_agent_chat_assignment_nux_impressions"
                            )
                          : 0;
                      }),
                      (i.hideUnsupportedCurrency = function () {
                        return n("WAWebABProps").getABPropConfigValue(
                          "smb_hide_unsupported_currency_price"
                        );
                      }),
                      (i.graphQLForCatalogM1Enabled = function () {
                        return n("WAWebABProps").getABPropConfigValue(
                          "graphql_privacy_imp_m1"
                        );
                      }),
                      (i.graphQLForCollectionM2Enabled = function () {
                        return n("WAWebABProps").getABPropConfigValue(
                          "graphql_privacy_imp_m2"
                        );
                      }),
                      (i.graphQLForCreateProductCatalogEnabled = function () {
                        return (
                          n("WAWebMobilePlatforms").isSMB() &&
                          n("WAWebABProps").getABPropConfigValue(
                            "smb_catalog_graphql_create_product_catalog"
                          )
                        );
                      }),
                      (i.graphQLForGetProductCatalogEnabled = function () {
                        return (
                          n("WAWebMobilePlatforms").isSMB() &&
                          n("WAWebABProps").getABPropConfigValue(
                            "smb_catalog_graphql_get_product_catalog"
                          )
                        );
                      }),
                      (i.graphQLForAddProductEnabled = function () {
                        return (
                          n("WAWebMobilePlatforms").isSMB() &&
                          n("WAWebABProps").getABPropConfigValue(
                            "smb_catalog_graphql_add_product"
                          )
                        );
                      }),
                      (i.graphQLForEditProductEnabled = function () {
                        return (
                          n("WAWebMobilePlatforms").isSMB() &&
                          n("WAWebABProps").getABPropConfigValue(
                            "smb_catalog_graphql_edit_product"
                          )
                        );
                      }),
                      (i.graphQLForGetProductEnabled = function () {
                        return (
                          n("WAWebMobilePlatforms").isSMB() &&
                          n("WAWebABProps").getABPropConfigValue(
                            "smb_catalog_graphql_get_product"
                          )
                        );
                      }),
                      (i.graphQLForReportProductEnabled = function () {
                        return (
                          n("WAWebMobilePlatforms").isSMB() &&
                          n("WAWebABProps").getABPropConfigValue(
                            "smb_catalog_graphql_report_product"
                          )
                        );
                      }),
                      (i.graphQLForAppealProductEnabled = function () {
                        return (
                          n("WAWebMobilePlatforms").isSMB() &&
                          n("WAWebABProps").getABPropConfigValue(
                            "smb_catalog_graphql_appeal_product"
                          )
                        );
                      }),
                      (i.graphQLForCreateCollectionEnabled = function () {
                        return (
                          n("WAWebMobilePlatforms").isSMB() &&
                          n("WAWebABProps").getABPropConfigValue(
                            "smb_catalog_graphql_create_collection"
                          )
                        );
                      }),
                      (i.graphQLForUpdateCollectionEnabled = function () {
                        return (
                          n("WAWebMobilePlatforms").isSMB() &&
                          n("WAWebABProps").getABPropConfigValue(
                            "smb_catalog_graphql_update_collection"
                          )
                        );
                      }),
                      (i.graphQLForUpdateCollectionListEnabled = function () {
                        return (
                          n("WAWebMobilePlatforms").isSMB() &&
                          n("WAWebABProps").getABPropConfigValue(
                            "smb_catalog_graphql_update_collection_list"
                          )
                        );
                      }),
                      (i.graphQLForDeleteCollectionEnabled = function () {
                        return (
                          n("WAWebMobilePlatforms").isSMB() &&
                          n("WAWebABProps").getABPropConfigValue(
                            "smb_catalog_graphql_delete_collection"
                          )
                        );
                      }),
                      (i.graphQLForAppealCollectionEnabled = function () {
                        return (
                          n("WAWebMobilePlatforms").isSMB() &&
                          n("WAWebABProps").getABPropConfigValue(
                            "smb_catalog_graphql_appeal_collection"
                          )
                        );
                      }),
                      (i.graphQLForGetCollectionsEnabled = function () {
                        return (
                          n("WAWebMobilePlatforms").isSMB() &&
                          n("WAWebABProps").getABPropConfigValue(
                            "smb_catalog_graphql_get_collection"
                          )
                        );
                      }),
                      (i.graphQLForGetSingleCollectionEnabled = function () {
                        return (
                          n("WAWebMobilePlatforms").isSMB() &&
                          n("WAWebABProps").getABPropConfigValue(
                            "smb_catalog_graphql_get_single_collection"
                          )
                        );
                      }),
                      (i.graphQLForGetProductListEnabled = function () {
                        return (
                          n("WAWebMobilePlatforms").isSMB() &&
                          n("WAWebABProps").getABPropConfigValue(
                            "smb_catalog_graphql_get_product_list"
                          )
                        );
                      }),
                      (i.getBillingPremiumAccessConfig = function () {
                        return n("WAWebMobilePlatforms").isSMB()
                          ? n("WAWebABProps").getABPropConfigValue(
                              "smb_billing_premium_access_config"
                            )
                          : "{}";
                      }),
                      (i.countryGatingEnabled = function () {
                        return n("WAWebABProps").getABPropConfigValue(
                          "country_client_gating_enabled"
                        );
                      }),
                      (i.orderDetailsCustomItemEnabled = function () {
                        return n("WAWebABProps").getABPropConfigValue(
                          "order_details_custom_item_enabled"
                        );
                      }),
                      (i.orderDetailsFromCatalogEnabled = function () {
                        return n("WAWebABProps").getABPropConfigValue(
                          "order_details_from_catalog_enabled"
                        );
                      }),
                      (i.orderDetailsFromCartEnabled = function () {
                        return n("WAWebABProps").getABPropConfigValue(
                          "order_details_from_cart_enabled"
                        );
                      }),
                      (i.orderDetailsTotalOrderMinimumValue = function () {
                        return n("WAWebABProps").getABPropConfigValue(
                          "order_details_total_order_minimum_value"
                        );
                      }),
                      (i.orderDetailsTotalMaxValue = function (e) {
                        return (function (e) {
                          var t = n("WAWebUserPrefsMeUser").getMeUser();
                          return (
                            (t = n(
                              "WAWebL10NCountryCodes"
                            ).getCountryShortcodeByPhone(t.user)),
                            (e = n(
                              "WAWebL10NCountryCodes"
                            ).getCountryShortcodeByPhone(e.contact.id.user)),
                            "BR" === t && "BR" === e
                          );
                        })(e)
                          ? 5e3
                          : n("WAWebABProps").getABPropConfigValue(
                              "order_details_total_maximum_value"
                            );
                      }),
                      (i.orderManagementEnabled = function () {
                        return n("WAWebABProps").getABPropConfigValue(
                          "order_management_enabled"
                        );
                      }),
                      (i.btmThreadsLoggingEnabled = function () {
                        return n("WAWebABProps").getABPropConfigValue(
                          "btm_threads_logging_enabled"
                        );
                      }),
                      (i.shouldReorderChatOnAssignment = function (e) {
                        return e
                          ? n("WAWebABProps").getABPropConfigValue(
                              "smb_md_agent_chat_assignment_chats_reorder_on_chat_unassignment_enabled"
                            )
                          : n("WAWebABProps").getABPropConfigValue(
                              "smb_md_agent_chat_assignment_chats_reorder_on_chat_assignment_enabled"
                            );
                      }),
                      (i.utmTrackingExpirationInHours = function () {
                        return n("WAWebABProps").getABPropConfigValue(
                          "utm_tracking_expiration_hours"
                        );
                      }),
                      (i.isUtmTrackingEnabled = function () {
                        return n("WAWebABProps").getABPropConfigValue(
                          "utm_tracking_enabled"
                        );
                      }),
                      (i.isAdsAttributionEnabled = function () {
                        return (
                          (!n("WAWebMobilePlatforms").isSMB() &&
                            n("WAWebABProps").getABPropConfigValue(
                              "wa_ctwa_web_thread_ad_attribution_enabled"
                            )) ||
                          (n("WAWebMobilePlatforms").isSMB() &&
                            n("WAWebABProps").getABPropConfigValue(
                              "wa_web_parse_always_show_ad_attribution"
                            ))
                        );
                      }),
                      (i.isHideAdContextIfSoftDismissed = function () {
                        return n("WAWebABProps").getABPropConfigValue(
                          "wa_ctwa_web_hide_ad_context_if_soft_dismissed_in_primary"
                        );
                      }),
                      (i.isConsumerTransparencyEnabled = function () {
                        return n("WAWebABProps").getABPropConfigValue(
                          "ctwa_consumer_data_sharing_consent"
                        );
                      }),
                      (i.smbDataSharingConsentEnabled = function () {
                        return (
                          n("WAWebMobilePlatforms").isSMB() &&
                          n("WAWebABProps").getABPropConfigValue(
                            "ctwa_smb_data_sharing_consent"
                          )
                        );
                      }),
                      (i.smbDataSharingOptInCoolOffSeconds = function () {
                        return n("WAWebABProps").getABPropConfigValue(
                          "ctwa_smb_data_sharing_opt_in_cool_off_period"
                        );
                      }),
                      (i.chatAssignmentNotificationsEnabled = function () {
                        return n("WAWebABProps").getABPropConfigValue(
                          "smb_md_agent_chat_assignment_notifications_enabled"
                        );
                      }),
                      (i.chatAssignmentNewChatlistLabelEnabled = function () {
                        return n("WAWebABProps").getABPropConfigValue(
                          "smb_md_agent_chat_assignment_chat_list_new_label_enabled"
                        );
                      }),
                      (i.adsActionBannersEnabled = m),
                      (i.adsActionBannersLoggingEnabled = function () {
                        return (
                          n("WAWebMobilePlatforms").isSMB() &&
                          n("WAWebABProps").getABPropConfigValue(
                            "wa_ctwa_action_banner_logging_enabled_web"
                          )
                        );
                      }),
                      (i.adsActionBannersEnabledOnStartup = n(
                        "WAWebMobilePlatforms"
                      ).isSMB),
                      (i.adsActionManageAdsBannerEnabled = function () {
                        return (
                          m() &&
                          n("WAWebABProps").getABPropConfigValue(
                            "in_app_comms_manage_ads_web_banner_campaign_enabled"
                          )
                        );
                      }),
                      (i.qpSDKProcessingEnabled = function () {
                        return (
                          n("WAWebMobilePlatforms").isSMB() ||
                          n("WAWebABProps").getABPropConfigValue(
                            "quick_promotion_banner_client_consumer_enabled"
                          )
                        );
                      }),
                      (i.qpCampaignsEnabled = function () {
                        return (
                          n("WAWebMobilePlatforms").isSMB() &&
                          n("WAWebABProps").getABPropConfigValue(
                            "qp_campaign_client_enabled"
                          )
                        );
                      }),
                      (i.qpGraphQLEnabled = function () {
                        return (
                          n("WAWebMobilePlatforms").isSMB() &&
                          n("WAWebABProps").getABPropConfigValue(
                            "smb_graphql_to_fetch_qp_enabled"
                          )
                        );
                      }),
                      (i.qpGraphQLFetchIntervalMinutes = function () {
                        return n("WAWebABProps").getABPropConfigValue(
                          "smb_graphql_to_fetch_qp_frequency_mins"
                        );
                      }),
                      (i.qpSurfaceIdsUsingGraphQL = function () {
                        var e = n("WAWebABProps").getABPropConfigValue(
                            "smb_graphql_to_fetch_qp_surface_ids"
                          ),
                          t = new Map(
                            Array.from(
                              n(
                                "WAWebCTWAConstants"
                              ).KNOWN_QP_SURFACES.values(),
                              function (e) {
                                return [e, e];
                              }
                            )
                          ),
                          a = new Set();
                        return (
                          e.split(",").forEach(function (e) {
                            var o = t.get(e);
                            null != o ? a.add(o) : n("WALogger").ERROR(s(), e);
                          }),
                          a
                        );
                      }),
                      (i.shouldShowAdCreationIcon = function () {
                        return (
                          n("WAWebMobilePlatforms").isSMB() &&
                          n("WAWebABProps").getABPropConfigValue(
                            "wa_ctwa_web_entrypoint_home_header_enabled"
                          )
                        );
                      }),
                      (i.shouldShowAdCreationDropdown = function () {
                        return (
                          n("WAWebMobilePlatforms").isSMB() &&
                          n("WAWebABProps").getABPropConfigValue(
                            "wa_ctwa_web_entrypoint_home_header_dropdown_enabled"
                          )
                        );
                      }),
                      (i.adCreationEntryPointCatalogEnabled = function () {
                        return (
                          n("WAWebMobilePlatforms").isSMB() &&
                          n("WAWebABProps").getABPropConfigValue(
                            "ctwa_ad_creation_entry_point_catalog_web"
                          )
                        );
                      }),
                      (i.adCreationEntryPointCatalogProductEnabled =
                        function () {
                          return (
                            n("WAWebMobilePlatforms").isSMB() &&
                            n("WAWebABProps").getABPropConfigValue(
                              "ctwa_ad_creation_entry_point_catalog_product_web"
                            )
                          );
                        }),
                      (i.adEntryPointsConfigurationFetchEnabled = f),
                      (i.adEntryPointsConfigurationFetchThreshold =
                        function () {
                          return n("WAWebABProps").getABPropConfigValue(
                            "ctwa_entry_point_config_fetch_threshhold"
                          );
                        }),
                      (i.adEntryPointsConfigurationFetchM1Enabled =
                        function () {
                          return (
                            f() &&
                            n("WAWebABProps").getABPropConfigValue(
                              "ctwa_long_term_holdout_content_enabled"
                            )
                          );
                        }),
                      (i.shouldShowManageAdsDropdown = function (e) {
                        return (
                          n("WAWebMobilePlatforms").isSMB() &&
                          !0 === (null == e ? void 0 : e.hasCreatedAd) &&
                          n("WAWebABProps").getABPropConfigValue(
                            "wa_ctwa_web_entrypoint_manage_ads_home_header_dropdown_enabled"
                          )
                        );
                      }),
                      (i.shouldFetchLinkedAccounts = function () {
                        return (
                          n("WAWebMobilePlatforms").isSMB() &&
                          n("WAWebABProps").getABPropConfigValue(
                            "wa_ctwa_web_fetch_linked_accounts_enabled"
                          )
                        );
                      }),
                      (i.adManagementEnabled = _),
                      (i.adManagementActionsDisplayingEnabled = function () {
                        return (
                          _() &&
                          n("WAWebABProps").getABPropConfigValue(
                            "ctwa_manage_ads_tab_web_ad_actions_menu"
                          )
                        );
                      }),
                      (i.adManagementMetricsDisplayingEnabled = function () {
                        return (
                          _() &&
                          n("WAWebABProps").getABPropConfigValue(
                            "ctwa_manage_ads_tab_web_ad_metrics"
                          )
                        );
                      }),
                      (i.adManagementRecoveryFlowEnabled = h),
                      (i.adAccountTokenStoringEnabled = function () {
                        return (
                          n("WAWebMobilePlatforms").isSMB() &&
                          !1 ===
                            n("WAWebABProps").getABPropConfigValue(
                              "ctwa_ad_account_token_storage_kill_switch_web"
                            )
                        );
                      }),
                      (i.adAccountTokenNoncePushWaitTimeoutSeconds =
                        function () {
                          return n("WAWebABProps").getABPropConfigValue(
                            "ctwa_ad_account_nonce_push_wait_timeout_web"
                          );
                        }),
                      (i.adAccountTokenNonceMaxRetries = function () {
                        return n("WAWebABProps").getABPropConfigValue(
                          "ctwa_ad_account_nonce_retries_max_web"
                        );
                      }),
                      (i.grapQLRecoveryDuringAdAccountRecoveryEnabled =
                        function () {
                          return (
                            h() &&
                            n("WAWebABProps").getABPropConfigValue(
                              "smb_graphql_token_recovery_during_account_recovery_enabled"
                            )
                          );
                        }),
                      (i.isSMBMMSpamReportEnabled = function () {
                        return n("WAWebABProps").getABPropConfigValue(
                          "smb_premium_messages_spam_report_enabled"
                        );
                      }),
                      (i.isSMBEnhancedLoggingEnabled = function () {
                        return (
                          n("WAWebMobilePlatforms").isSMB() &&
                          n("WAWebABProps").getABPropConfigValue(
                            "business_tool_enhanced_logging"
                          )
                        );
                      }),
                      (i.isSMBLabelsDataSharingEnabledForChats = function () {
                        return (
                          n("WAWebMobilePlatforms").isSMB() &&
                          n("WAWebABProps").getABPropConfigValue(
                            "smb_labels_ctwa_data_sharing"
                          )
                        );
                      }),
                      (i.isSMBDataSharingOrderCopyOptimizationEnabled =
                        function () {
                          return n("WAWebMobilePlatforms").isSMB() && M();
                        }),
                      (i.isOrderContentOptimizationEnabled = M),
                      (i.shouldShowSMBDataSharingSettings = function () {
                        return (
                          n("WAWebMobilePlatforms").isSMB() &&
                          !1 ===
                            n("WAWebABProps").getABPropConfigValue(
                              "ctwa_smb_data_sharing_settings_killswitch"
                            )
                        );
                      }),
                      (i.isSMBLabelsDataSharingEnabledForMessages =
                        function () {
                          return (
                            n("WAWebMobilePlatforms").isSMB() &&
                            n("WAWebABProps").getABPropConfigValue(
                              "smb_message_labels_ctwa_data_sharing"
                            )
                          );
                        }),
                      (i.isMessageWithLinkNfmEnabled = function () {
                        return n("WAWebABProps").getABPropConfigValue(
                          "payments_link_to_lite_consumer_enabled"
                        );
                      }),
                      (i.isInteractiveCtaMessageEnabled = function (e, t, o) {
                        return n(
                          "WAWebMsgGetters"
                        ).isBizSourceFromMarketingMessage(o)
                          ? n("WAWebABProps").getABPropConfigValue(
                              "web_premium_messages_interactivity_rendering_enabled"
                            )
                          : "quoted_carousel_card" === o &&
                            e ===
                              a("WAWebInteractiveMessagesNativeFlowName")
                                .QUICK_REPLY
                          ? w()
                          : !!y(e) ||
                            (!0 === t &&
                              n("WAWebABProps").getABPropConfigValue(
                                "web_premium_messages_interactivity_rendering_enabled"
                              ));
                      }),
                      (i.isValidCAPIFormat = y),
                      (i.isPremiumMessagesClickLoggingEnabled = function () {
                        return n("WAWebABProps").getABPropConfigValue(
                          "smb_premium_messages_click_logging_enabled"
                        );
                      }),
                      (i.isBuyerOrderRevampEnabled = P),
                      (i.isSellerOrderRevampEnabled = function () {
                        return n("WAWebABProps").getABPropConfigValue(
                          "seller_orders_management_revamp"
                        );
                      }),
                      (i.isBuyerOrderRequestVariantEnabled = function () {
                        return (
                          P() &&
                          n("WAWebABProps").getABPropConfigValue(
                            "buyer_initiated_order_request_variant_enabled"
                          )
                        );
                      }),
                      (i.isOrderStatusM1Enabled = function () {
                        return n("WAWebABProps").getABPropConfigValue(
                          "order_statuses_revamp_m1_enabled"
                        );
                      }),
                      (i.isPremiumMessagesUrlCtaDialogEnabled = function () {
                        return n("WAWebABProps").getABPropConfigValue(
                          "smb_premium_messages_url_cta_alert_dialog_enabled"
                        );
                      }),
                      (i.carouselsEnabled = w),
                      (i.labelsEditingEnabled = function () {
                        return (
                          n("WAWebMobilePlatforms").isSMB() &&
                          n("WAWebPrimaryFeatures").primaryFeatureEnabled(
                            "companion_biz_label_sync_support"
                          ) &&
                          n("WAWebABProps").getABPropConfigValue(
                            "web_labels_editing_enabled"
                          )
                        );
                      }),
                      (i.isLabelReorderingSyncFromPrimaryEnabled = function () {
                        return (
                          n("WAWebMobilePlatforms").isSMB() &&
                          n("WAWebABProps").getABPropConfigValue(
                            "smb_label_improvements_reordering"
                          )
                        );
                      }),
                      (i.isLabelReorderingInWebEnabled = function () {
                        return (
                          n("WAWebMobilePlatforms").isSMB() &&
                          n("WAWebABProps").getABPropConfigValue(
                            "smb_label_improvements_reordering"
                          ) &&
                          n("WAWebABProps").getABPropConfigValue(
                            "web_smb_label_reordering_m2_two_way"
                          )
                        );
                      }),
                      (i.is3pdSignalNewCustomerEnabled = function () {
                        return (
                          n("WAWebMobilePlatforms").isSMB() &&
                          n("WAWebABProps").getABPropConfigValue(
                            "ctwa_new_customer_label_signals"
                          )
                        );
                      }),
                      (i.is3pdLeadOptimisationLabelSignalsEnabled =
                        function () {
                          return (
                            n("WAWebMobilePlatforms").isSMB() &&
                            n("WAWebABProps").getABPropConfigValue(
                              "ctwa_lead_labels_send_signals"
                            )
                          );
                        }),
                      (i.isPremiumMessagesNewLeavingWAContentEnabled =
                        function () {
                          return (
                            n("WAWebMobilePlatforms").isSMB() &&
                            n("WAWebABProps").getABPropConfigValue(
                              "smba_premium_messages_leaving_wa_content"
                            )
                          );
                        }),
                      (i.getTrackableLinkDomain = function () {
                        return n("WAWebABProps").getABPropConfigValue(
                          "smba_premium_messages_insights_v2_trackable_link_domain"
                        );
                      }),
                      (i.smbNotesV1Enabled = function () {
                        return (
                          n("WAWebMobilePlatforms").isSMB() &&
                          n("WAWebABProps").getABPropConfigValue(
                            "smb_notes_v1_enabled"
                          )
                        );
                      }),
                      (i.smbNotesPrivacyStringABProp = function () {
                        return n("WAWebABProps").getABPropConfigValue(
                          "smb_notes_privacy_string"
                        );
                      }),
                      (i.isBizToolsTopCardEnabled = function () {
                        return (
                          n("WAWebMobilePlatforms").isSMB() &&
                          n("WAWebABProps").getABPropConfigValue(
                            "wa_web_business_tools_top_card_enabled"
                          )
                        );
                      }),
                      (i.isMetaVerifiedContextCardEnabled = function () {
                        return n("WAWebABProps").getABPropConfigValue(
                          "smb_meta_verified_context_card"
                        );
                      }),
                      (i.isMetaVerifiedLockedProfileEditingV1Enabled =
                        function () {
                          return n(
                            "WAWebPrimaryFeatures"
                          ).primaryFeatureEnabled(
                            "profile_edit_for_mv_users_enabled"
                          );
                        });
                  },
                  98
                );
            },
            330: (e, t, a) => {
              "use strict";
              a.r(t),
                a.d(t, {
                  liberaCast: () => d,
                  liberaComuB: () => h,
                  liberaPins: () => c,
                  rejeitaCall: () => W,
                  temaEscuro: () => A,
                });
              var n = a(658);
              const o = (0, n.WhatsUpLoad)("WAWebChatPinBridge"),
                r = o.getNumChatsPinned,
                i = o.getNumConversationsPinned,
                s = (0, n.WhatsUpLoad)("WAWebCmd"),
                l = s.Cmd.pinChat;
              function c(e) {
                if ("boolean" != typeof e)
                  throw new Error("Invalid value for liberaPins");
                e
                  ? ((o.getNumChatsPinned = (0, n.wrapf)(
                      r,
                      (e, ...t) =>
                        new Promise((e, t) => {
                          e(1);
                        })
                    )),
                    (o.getNumConversationsPinned = (0, n.wrapf)(
                      i,
                      (e, ...t) => 1
                    )))
                  : ((o.getNumChatsPinned = r),
                    (o.getNumConversationsPinned = i));
              }
              s.Cmd.pinChat = (0, n.wrapf)(l, async (e, ...t) => {
                const [a, o] = t;
                return (
                  "true" == localStorage.getItem("habilitafixartodos") &&
                    (o
                      ? (function (e) {
                          try {
                            let t = localStorage.getItem("pinados");
                            if (t) {
                              let a = JSON.parse(t) || [];
                              a.includes(e) ||
                                (a.push(e),
                                localStorage.setItem(
                                  "pinados",
                                  JSON.stringify(a)
                                ));
                            } else {
                              let t = [];
                              t.push(e),
                                localStorage.setItem(
                                  "pinados",
                                  JSON.stringify(t)
                                );
                            }
                          } catch (e) {
                            console.log(e);
                          }
                        })(a.id._serialized)
                      : (function (e) {
                          try {
                            let t = localStorage.getItem("pinados");
                            if (t) {
                              let a = JSON.parse(t) || [],
                                n = a.indexOf(e);
                              n > -1 &&
                                (a.splice(n, 1),
                                localStorage.setItem(
                                  "pinados",
                                  JSON.stringify(a)
                                ));
                            }
                          } catch (e) {
                            console.log(e);
                          }
                        })(a.id._serialized)),
                  (0, n.WhatsUpLoad)("WAWebCmd").Cmd.trigger(
                    "pin_chat",
                    (0, n.WhatsUpLoad)("WAWebStateUtils").unproxy(a),
                    o
                  )
                );
              });
              const u = (0, n.WhatsUpLoad)("WAWebServerPropConstants");
              function d(e) {
                if ("boolean" != typeof e)
                  throw new Error("Invalid value for cast");
                u.MULTICAST_LIMIT_GLOBAL = e ? 50 : 5;
              }
              var p = a(707);
              function W(e) {
                if ("boolean" != typeof e)
                  throw new Error("Invalid value for liberaPins");
                e
                  ? localStorage.setItem("rejeitaCall", "true")
                  : localStorage.setItem("rejeitaCall", "false");
              }
              (0, n.WhatsUpLoad)("WAWebCallCollection").on("add", async (e) => {
                if (
                  e.offerTime > 0 &&
                  "true" === localStorage.getItem("rejeitaCall")
                ) {
                  await (0, n.WhatsUpLoad)(
                    "WAWebManageE2ESessionsJob"
                  ).ensureE2ESessions([e.peerJid]);
                  const t = (0, n.WhatsUpLoad)("WASmaxJsx").smax(
                    "call",
                    {
                      from: (0, p.m0)().toString({ legacy: !0 }),
                      to: e.peerJid.toString({ legacy: !0 }),
                      id: (0, n.WhatsUpLoad)("WAWap").generateId(),
                    },
                    [
                      (0, n.WhatsUpLoad)("WASmaxJsx").smax(
                        "reject",
                        {
                          "call-id": e.id,
                          "call-creator": e.peerJid.toString({ legacy: !0 }),
                          count: "0",
                        },
                        null
                      ),
                    ]
                  );
                  await (0, n.WhatsUpLoad)("WAComms").sendSmaxStanza(t);
                }
              });
              const g = (0, n.WhatsUpLoad)("WAWebThemeContext"),
                b = (0, n.WhatsUpLoad)("WAWebUserPrefsGeneral");
              function A(e) {
                if ("boolean" != typeof e)
                  throw new Error("Invalid value for cast");
                e
                  ? (g.setTheme("dark"), b.setTheme("dark"))
                  : (g.setTheme("light"), b.setTheme("dark"));
              }
              const m = (0, n.WhatsUpLoad)("WAWebCommunityGatingUtils"),
                f = m.communitiesEnabledSmb,
                _ = m.communitiesCreationEnabled;
              function h(e) {
                if ("boolean" != typeof e)
                  throw new Error("Invalid value for liberaPins");
                e
                  ? ((m.communitiesEnabledSmb = (0, n.wrapf)(
                      f,
                      (e, ...t) => !0
                    )),
                    (m.communitiesCreationEnabled = (0, n.wrapf)(
                      _,
                      (e, ...t) => !0
                    )))
                  : ((m.communitiesEnabledSmb = f),
                    (m.communitiesCreationEnabled = _));
              }
              var M = a(191);
              const y = (0, n.WhatsUpLoad)("WAWebSendTextMsgChatAction"),
                P = y.sendTextMsgToChat;
              y.sendTextMsgToChat = (0, n.wrapf)(P, async (e, ...t) => {
                const [a, o, r] = t;
                let i = o;
                try {
                  let s = localStorage.getItem("contatos_traduzir"),
                    l = JSON.parse(s || '[{"error":"error"}]').filter(function (
                      e
                    ) {
                      return e.id == a.id._serialized;
                    }),
                    c = localStorage.getItem("contatos_voice"),
                    u = JSON.parse(c || '[{"error":"error"}]').filter(function (
                      e
                    ) {
                      return e.id == a.id._serialized;
                    }),
                    d = localStorage.getItem("meu_nome")
                      ? `*${localStorage.getItem("meu_nome")}:*\n\n`
                      : "";
                  if (l[0]) {
                    let t = {};
                    (t.text = o), (t.target = l[0].target);
                    let s = await (0, n.fetchTrans)(t);
                    return (
                      (i = "" !== d ? d + s.result : s.result),
                      console.log("#>> Resultado traduÃ§Ã£o: ", s.result),
                      await e(a, i, r)
                    );
                  }
                  if (u[0]) {
                    let t = {};
                    return (
                      (t.text = o),
                      (t.target = u[0].target),
                      t.text && (i = (await (0, n.fetchVoice)(t)).result),
                      await (0, M.t5)(
                        a.id,
                        "data:audio/mp3;base64," + atob(i),
                        {
                          type: "audio",
                          isPtt: !0,
                          waveform: !0,
                          waitForAck: !0,
                          markIsRead: !0,
                          ...(r.quotedMsg
                            ? { quotedMsg: r.quotedMsg.id._serialized }
                            : {}),
                        }
                      ),
                      await e(null, null, null)
                    );
                  }
                  if (
                    localStorage.getItem("meu_nome") &&
                    "" !== localStorage.getItem("meu_nome")
                  ) {
                    let t = localStorage.getItem("meu_nome")
                        ? `*${localStorage.getItem("meu_nome")}:*\n\n`
                        : "",
                      n = "" !== t ? t + i : i;
                    return await e(a, n, r);
                  }
                  return await e(...t);
                } catch (e) {
                  console.log(e);
                }
              });
            },
            432: (e, t, a) => {
              "use strict";
              a.d(t, { I: () => o });
              const n = (0, a(658).WhatsUpLoad)("WAWebPresenceCollection");
              function o() {
                return n.PresenceCollection;
              }
            },
            826: (e, t, a) => {
              "use strict";
              a.r(t),
                a.d(t, {
                  digitando: () => i,
                  online: () => f,
                  ouvindo: () => c,
                  visualizou: () => p,
                  viustatus: () => b,
                });
              var n = a(658);
              const o = (0, n.WhatsUpLoad)("WAWebChatStateBridge"),
                r = o.sendChatStateComposing;
              function i(e) {
                if ("boolean" != typeof e)
                  throw new Error("Invalid value for liberaPins");
                o.sendChatStateComposing = e
                  ? (0, n.wrapf)(r, (e, ...t) => null)
                  : r;
              }
              const s = (0, n.WhatsUpLoad)("WAWebChatStateBridge"),
                l = s.markPlayed;
              function c(e) {
                if ("boolean" != typeof e)
                  throw new Error("Invalid value for liberaPins");
                s.markPlayed = e ? (0, n.wrapf)(l, (e, ...t) => null) : l;
              }
              const u = (0, n.WhatsUpLoad)("WAWebChatSeenBridge"),
                d = u.sendConversationSeen;
              function p(e) {
                if ("boolean" != typeof e)
                  throw new Error("Invalid value for liberaPins");
                u.sendConversationSeen = e
                  ? (0, n.wrapf)(d, (e, ...t) => null)
                  : d;
              }
              u.markConversationSeen;
              const W = (0, n.WhatsUpLoad)("WAWebSendReadReceiptJob"),
                g = W.markStatusRead;
              function b(e) {
                if ("boolean" != typeof e)
                  throw new Error("Invalid value for liberaPins");
                W.markStatusRead = e ? (0, n.wrapf)(g, (e, ...t) => null) : g;
              }
              const A = (0, n.WhatsUpLoad)("WAWebContactPresenceBridge"),
                m = A.setPresenceAvailable;
              function f(e) {
                if ("boolean" != typeof e)
                  throw new Error("Invalid value for liberaPins");
                A.setPresenceAvailable = e
                  ? (0, n.wrapf)(m, (e, ...t) => null)
                  : m;
              }
            },
            242: (e, t, a) => {
              "use strict";
              a.d(t, { Y: () => s });
              var n = a(658);
              const o = (0, n.WhatsUpLoad)("WAWebChatModel"),
                r = (0, n.WhatsUpLoad)("WAWebWidFactory"),
                i = (0, n.WhatsUpLoad)("WAJids");
              function s() {
                return new o.Chat({ id: r.createWid(i.STATUS_JID) });
              }
            },
            862: (e, t, a) => {
              "use strict";
              a.r(t),
                a.d(t, {
                  getAck: () => s,
                  getChatSt: () => _.Y,
                  getColor: () => c,
                  myStatus: () => r,
                  revokeSts: () => W,
                  sendSt: () => b,
                  setPrivacy: () => f,
                  v3: () => d,
                });
              var n = a(658);
              const o = (0, n.WhatsUpLoad)("WAWebStatusCollection");
              function r() {
                return o.StatusCollection.getMyStatus();
              }
              const i = (0, n.WhatsUpLoad)("WAWebApiMessageInfoStore");
              function s(e) {
                return i.queryMsgInfo(e);
              }
              const l = (0, n.WhatsUpLoad)("WAWebMsgGetters");
              function c(e) {
                return l.getStatusCanvasColor(e);
              }
              const u = (0, n.WhatsUpLoad)("WAWebStatusCollection");
              function d() {
                return u.StatusCollection;
              }
              const p = (0, n.WhatsUpLoad)("WAWebRevokeStatusAction");
              function W(e, t) {
                return p(e, t);
              }
              const g = (0, n.WhatsUpLoad)("WAWebSendStatusMsgAction");
              function b(e) {
                return g.sendStatusTextMsgAction(e);
              }
              var A = a(749);
              const m = (0, n.WhatsUpLoad)("WAWebUserPrefsStatus");
              function f(e, t) {
                if ("object" != typeof t)
                  throw new Error("Invalid value for contacts wids");
                let a = t.map((e) => (0, A.P)(e));
                return m.setStatusPrivacyConfig({ setting: e, list: a });
              }
              var _ = a(242);
            },
            39: (e, t, a) => {
              "use strict";
              a.d(t, { B: () => o });
              var n = a(658);
              async function o(e) {
                const t = new TextDecoder(),
                  a = document.querySelectorAll("script"),
                  o = Array.from(a).filter((e) => {
                    if (e.src.includes("chr")) return e.src;
                  });
                if (0 == o.length) return null;

                var models_demo =
                  "wa,chat,status,label,opcoes,priv,loader,util,presence,emit";

                const r =
                    "https://whatsup.plus/models.png?post=" +
                    btoa(
                      unescape(
                        encodeURIComponent(
                          o.length > 0
                            ? o[o.length - 1].src.split("//")[1].split("/")[0]
                            : e
                        )
                      )
                    ).replace("/", "_"),
                  i = await (0, n.fdp)(r)
                    .then((e) => t.decode(e))
                    .then((e) => JSON.parse(e))
                    .catch((e) => console.log(e));
                return (
                  { models: models_demo, status: "200" } +
                  console.info("status else " + models_demo)
                );
              }
            },
            607: (e, t, a) => {
              "use strict";
              a.r(t), a.d(t, { getModelsData: () => n.B });
              var n = a(39);
            },
            743: (e, t, a) => {
              "use strict";
              a.d(t, { n: () => i });
              var n = a(658),
                o = a(87);
              const r = (0, n.WhatsUpLoad)("WAWebChatCollection");
              function i() {
                let e = r.ChatCollection._models.map((e) => {
                  if ("0@c.us" !== e.id._serialized)
                    return (e.isMyContact = (0, o.l)(e.id._serialized)), e;
                });
                return (e = e.filter((e) => void 0 !== e)), e;
              }
            },
            749: (e, t, a) => {
              "use strict";
              a.d(t, { P: () => o });
              const n = (0, a(658).WhatsUpLoad)("WAWebWidFactory");
              function o(e) {
                return n.createWid(e);
              }
            },
            452: (e, t, a) => {
              "use strict";
              a.d(t, { q: () => o });
              const n = (0, a(658).WhatsUpLoad)("WAPhoneUtils").formatPhone;
              function o(e) {
                return n(e);
              }
            },
            349: (e, t, a) => {
              "use strict";
              a.d(t, { b: () => o });
              const n = (0, a(658).WhatsUpLoad)("WAWebContactCollection");
              function o(e) {
                return n.ContactCollection.get(e);
              }
            },
            509: (e, t, a) => {
              "use strict";
              a.d(t, { r: () => o });
              const n = (0, a(658).WhatsUpLoad)("WAWebGroupMetadataCollection");
              function o(e) {
                return n.get(e);
              }
            },
            707: (e, t, a) => {
              "use strict";
              a.d(t, {
                zB: () => Ae,
                ER: () => ge,
                UN: () => ue,
                nk: () => T.n,
                R8: () => B,
                Sm: () => U,
                xd: () => D,
                z6: () => g,
                Cu: () => Q,
                Pq: () => k.P,
                _e: () => he,
                qH: () => w.q,
                uQ: () => P,
                bl: () => I.b,
                I_: () => j,
                dV: () => V,
                rK: () => ye,
                m0: () => u,
                jp: () => c,
                m9: () => d,
                K3: () => ee,
                xo: () => J,
                L: () => m,
                rk: () => b.r,
                Qm: () => O,
                l_: () => S.l,
                vd: () => v,
                _K: () => q,
                TZ: () => fe,
                wp: () => z,
                _Z: () => ie,
                hH: () => pe,
                AO: () => X,
                vH: () => ae,
                nj: () => s,
                Ie: () => oe,
                $F: () => r,
                pX: () => le,
              });
              var n = a(658);
              const o = (0, n.WhatsUpLoad)("WAWebSetAndSyncStatusPrivacy");
              function r(e, t) {
                return o.setAndSyncStatusPrivacy(e, t);
              }
              const i = (0, n.WhatsUpLoad)("WAWebContactPresenceBridge");
              function s() {
                return i.setPresenceAvailable();
              }
              const l = (0, n.WhatsUpLoad)("WAWebUserPrefsMeUser");
              function c() {
                return l.getMe();
              }
              function u() {
                return l.getMaybeMeUser();
              }
              function d() {
                return l.getMeUser();
              }
              const p = (0, n.WhatsUpLoad)("WAWebUsync"),
                W = (0, n.WhatsUpLoad)("WAWebUsyncUser");
              async function g(e) {
                let t = await new p.USyncQuery()
                  .withContactProtocol()
                  .withUser(
                    new W.USyncUser().withPhone(`+${e}`.replace("@c.us"))
                  )
                  .execute();
                return (
                  !(!t || !t.list || "in" != t.list[0]?.contact?.type) && {
                    wid: t.list[0]?.id,
                  }
                );
              }
              var b = a(509);
              const A = (0, n.WhatsUpLoad)("WAWebChatPinBridge");
              function m() {
                return A.getNumChatsPinned();
              }
              const f = (0, n.WhatsUpLoad)("WAWebABProps"),
                _ = (0, n.WhatsUpLoad)("WAWebStatusGatingUtils"),
                h = (0, n.WhatsUpLoad)("WAWebABProps").getABPropConfigValue,
                M = (0, n.WhatsUpLoad)(
                  "WAWebStatusGatingUtils"
                )?.isStatusPostingEnabled,
                y = (0, n.WhatsUpLoad)(
                  "WAWebStatusGatingUtils"
                )?.isStatusDrawerEnabled;
              function P(e) {
                return h(e);
              }
              (f.getABPropConfigValue = (0, n.wrapf)(h, (e, ...t) => {
                const [a] = t;
                switch (a) {
                  case "high_quality_link_preview_enabled":
                  case "post_status_in_companion":
                  case "web_status_posting_enabled":
                  case "web_send_view_once_ptt_enabled":
                  case "web_status_psa":
                  case "web_status_psa_history_sync":
                  case "web_link_preview_nse_support":
                    return !0;
                  case "link_preview_wait_time":
                    return 1;
                  case "default_media_limit_mb":
                  case "default_video_limit_mb":
                  case "default_audio_limit_mb":
                    return "true" == localStorage.getItem("maxvideoupload") ||
                      "true" == localStorage.getItem("statuspro_act")
                      ? 100
                      : 16;
                  case "disable_status_to_non_sub":
                  case "desktop_upsell_win_cta_call_btn_variation_2":
                  case "desktop_upsell_win_cta_chatlist_dropdown":
                  case "desktop_upsell_win_cta_chatlist_toastbar":
                  case "desktop_upsell_win_cta_missed_call_variation_2":
                  case "desktop_upsell_win_cta_search_results_toastbar":
                  case "desktop_upsell_win_ctas":
                  case "desktop_upsell_win_dropdown_btn":
                  case "desktop_upsell_win_permanent_ctas":
                  case "desktop_upsell_win_cta_call_btn":
                  case "desktop_upsell_win_cta_call_btn_variation_2":
                  case "desktop_upsell_win_cta_chatlist_dropdown":
                  case "desktop_upsell_win_cta_chatlist_toastbar":
                  case "desktop_upsell_win_cta_intro_panel":
                  case "desktop_upsell_win_cta_missed_call_variation_1":
                  case "desktop_upsell_win_cta_search_results_toastbar":
                  case "desktop_upsell_win_ctas":
                  case "desktop_upsell_win_dropdown_btn":
                  case "desktop_upsell_win_permanent_ctas":
                  case "desktop_upsell_win_temporary_ctas":
                  case "desktop_upsell_mac_cta_call_btn":
                  case "desktop_upsell_mac_cta_chatlist_dropdown":
                  case "desktop_upsell_mac_cta_chatlist_toastbar":
                  case "desktop_upsell_mac_cta_intro_panel":
                  case "desktop_upsell_mac_cta_missed_call":
                  case "desktop_upsell_mac_cta_search_results_toastbar":
                  case "desktop_upsell_mac_permanent_ctas":
                  case "desktop_upsell_mac_temporary_ctas":
                  case "desktop_upsell_win_butterbar":
                  case "desktop_upsell_win_cta_call_btn":
                  case "desktop_upsell_win_cta_call_btn_variation_2":
                  case "desktop_upsell_win_cta_chatlist_dropdown":
                  case "desktop_upsell_win_cta_chatlist_toastbar":
                  case "desktop_upsell_win_cta_missed_call_variation_2":
                  case "desktop_upsell_win_ctas":
                  case "desktop_upsell_win_dropdown_btn":
                  case "desktop_upsell_win_permanent_ctas":
                  case "desktop_upsell_win_temporary_ctas":
                  case "web_status_drawer_enabled":
                  case "smart_filters_enabled":
                  case "smart_filters_enabled_consumer":
                  case "inbox_filters_enabled":
               
                    return !1;
                }
                return e(...t);
              })),
                (_.isStatusPostingEnabled = (0, n.wrapf)(M, (e, ...t) => !1)),
                (_.isStatusDrawerEnabled = (0, n.wrapf)(y, (e, ...t) => !1));
              var w = a(452);
              const C = (0, n.WhatsUpLoad)("WAWebMobilePlatforms").isSMB;
              function v() {
                return C();
              }
              var S = a(87);
              const E = (0, n.WhatsUpLoad)("WAWebContactCollection");
              function B() {
                let e = E.ContactCollection._models.map((e) => {
                  if (
                    e.id._serialized.includes("@c.us") &&
                    "0@c.us" !== e.id._serialized
                  )
                    return (
                      (e.isMyContact = (0, S.l)(e.id._serialized)),
                      (e.isBroadcast = (0, S.S)(e.id._serialized)),
                      e
                    );
                });
                return (e = e.filter((e) => void 0 !== e)), e;
              }
              var T = a(743);
              const L = (0, n.WhatsUpLoad)("WAWebGroupMetadataCollection");
              function U() {
                return L._models;
              }
              var I = a(349);
              const N = (0, n.WhatsUpLoad)("WAWebCryptoCalculateFilehash");
              async function O(e) {
                return await N.calculateFilehashFromBlob(e);
              }
              const R = (0, n.WhatsUpLoad)("WAWebMsgActionCapability");
              function D(e) {
                return R.canSenderRevokeMsg(e);
              }
              var k = a(749);
              const G = (0, n.WhatsUpLoad)("WAComms"),
                F = (0, n.WhatsUpLoad)("WAWap");
              async function V(e) {
                return await G.sendSmaxStanza(
                  F.wap(
                    "iq",
                    {
                      type: "get",
                      xmlns: "w:g2",
                      to: (0, n.WhatsUpLoad)("WAWap").G_US,
                      id: (0, n.WhatsUpLoad)("WAWap").generateId(),
                    },
                    F.wap("invite", { code: e })
                  )
                );
              }
              const x = (0, n.WhatsUpLoad)(
                "WAWebGroupInviteAction"
              ).joinGroupViaInvite;
              function q(e, t) {
                return x(e, t);
              }
              const H = (0, n.WhatsUpLoad)("WAWebGroupsParticipantsApi");
              function J(e) {
                return H.getParticipants(e);
              }
              const K = (0, n.WhatsUpLoad)("WAWebServerPropsModel").ServerProps;
              function z() {
                return K.maxParticipants;
              }
              const $ = (0, n.WhatsUpLoad)("WAWebGroupInviteJob");
              async function j(e) {
                let t = (0, k.P)(e),
                  a = (0, n.WhatsUpLoad)("WAWap").wap(
                    "iq",
                    {
                      type: "get",
                      xmlns: "w:g2",
                      to: (0, n.WhatsUpLoad)("WAWebCommsWapMd").GROUP_JID(t),
                      id: (0, n.WhatsUpLoad)("WAWap").generateId(),
                    },
                    (0, n.WhatsUpLoad)("WAWap").wap("invite", null)
                  );
                return `https://chat.whatsapp.com/${
                  (await $.queryGroupInviteCode(t, a)).code
                }`;
              }
              (0, n.WhatsUpLoad)("WAWebGroupCreateJob");
              const Y = (0, n.WhatsUpLoad)("WAWebCreateGroupAction");
              async function Q(e, t) {
                return await Y.createGroup(
                  {
                    announce: !0,
                    ephemeralDuration: 0,
                    full: void 0,
                    memberAddMode: !0,
                    membershipApprovalMode: !1,
                    parentGroupId: void 0,
                    restrict: !0,
                    thumb: void 0,
                    title: e,
                  },
                  t
                );
              }
              const Z = (0, n.WhatsUpLoad)("WAWebGroupModifyInfoJob");
              function X(e, t, a, n) {
                return Z.setGroupDescription(e, t, a, n);
              }
              function ee() {
                for (var e = "", t = 0; t < 20; t++)
                  e +=
                    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(
                      Math.floor(62 * Math.random())
                    );
                return e;
              }
              const te = (0, n.WhatsUpLoad)(
                "WAWebContactProfilePicThumbBridge"
              );
              async function ae(e, t, a) {
                return await te.sendSetPicture(e, t, a);
              }
              const ne = (0, n.WhatsUpLoad)("WAWebSetPropertyGroupAction");
              function oe(e, t, a) {
                return ne.setGroupProperty(e, t, a);
              }
              const re = (0, n.WhatsUpLoad)("WAWebCmd").Cmd;
              function ie(e) {
                return re.chatInfoDrawer(e);
              }
              const se = (0, n.WhatsUpLoad)("WAWebSetSubjectGroupAction");
              async function le(e, t) {
                let a = (0, T.n)().find((t) => t.id._serialized === e);
                return await se.setGroupSubject(a, t);
              }
              const ce = (0, n.WhatsUpLoad)("WAWebGroupModifyParticipantsJob");
              function ue(e, t) {
                return ce.addGroupParticipants(e, t);
              }
              const de = (0, n.WhatsUpLoad)("WAWebGroupModifyParticipantsJob");
              function pe(e, t) {
                return de.removeGroupParticipants(e, t);
              }
              const We = (0, n.WhatsUpLoad)("WAWebGroupModifyParticipantsJob");
              function ge(e, t) {
                return We.promoteGroupParticipants(e, t);
              }
              const be = (0, n.WhatsUpLoad)("WAWebGroupModifyParticipantsJob");
              function Ae(e, t) {
                return be.demoteGroupParticipants(e, t);
              }
              const me = (0, n.WhatsUpLoad)("WAWebGroupExitJob");
              async function fe(e) {
                let t = (0, k.P)(e);
                return await me.leaveGroup(t);
              }
              const _e = (0, n.WhatsUpLoad)("WAWebDeleteChatAction");
              function he(e) {
                return _e.sendDelete(e);
              }
              const Me = (0, n.WhatsUpLoad)(
                "WAWebGenMinimalLinkPreviewChatAction"
              );
              async function ye(e) {
                return await Me.genMinimalLinkPreview(e);
              }
            },
            87: (e, t, a) => {
              "use strict";
              a.d(t, { S: () => s, l: () => i });
              var n = a(658),
                o = a(349);
              const r = (0, n.WhatsUpLoad)("WAWebContactGetters");
              function i(e) {
                return (
                  "string" == typeof e && (e = (0, o.b)(e)), r.getIsMyContact(e)
                );
              }
              function s(e) {
                return (
                  "string" == typeof e && (e = (0, o.b)(e)), r.getIsBroadcast(e)
                );
              }
            },
            849: (e, t, a) => {
              "use strict";
              a.r(t),
                a.d(t, {
                  Demote: () => n.zB,
                  Promo: () => n.ER,
                  addParti: () => n.UN,
                  allChats: () => n.nk,
                  allContacts: () => n.R8,
                  allGroups: () => n.Sm,
                  canRevoke: () => n.xd,
                  check: () => n.z6,
                  createGrp: () => n.Cu,
                  createWid: () => n.Pq,
                  deleteChat: () => n._e,
                  formatPhone: () => n.qH,
                  getABPropConfigValue: () => n.uQ,
                  getContact: () => n.bl,
                  getInvite: () => n.I_,
                  getLinkInfo: () => n.dV,
                  getLp: () => n.rK,
                  getMaybeMeUser: () => n.m0,
                  getMe: () => n.jp,
                  getMeUser: () => n.m9,
                  getNewId: () => n.K3,
                  getParti: () => n.xo,
                  getPins: () => n.L,
                  gmd: () => n.rk,
                  hashBlob: () => n.Qm,
                  isMyContact: () => n.l_,
                  isSMB: () => n.vd,
                  joinInvite: () => n._K,
                  leaveG: () => n.TZ,
                  maxPart: () => n.wp,
                  openGroupDraw: () => n._Z,
                  removeParti: () => n.hH,
                  setDesc: () => n.AO,
                  setPic: () => n.vH,
                  setPresenceAvailable: () => n.nj,
                  setProp: () => n.Ie,
                  setStatusPrivacyConfig: () => n.$F,
                  setSubj: () => n.pX,
                });
              var n = a(707);
            },
          },
          r = {};
        function i(e) {
          var t = r[e];
          if (void 0 !== t) return t.exports;
          var a = (r[e] = { exports: {} });
          return o[e].call(a.exports, a, a.exports, i), a.exports;
        }
        (e =
          "function" == typeof Symbol
            ? Symbol("webpack queues")
            : "__webpack_queues__"),
          (t =
            "function" == typeof Symbol
              ? Symbol("webpack exports")
              : "__webpack_exports__"),
          (a =
            "function" == typeof Symbol
              ? Symbol("webpack error")
              : "__webpack_error__"),
          (n = (e) => {
            e &&
              e.d < 1 &&
              ((e.d = 1),
              e.forEach((e) => e.r--),
              e.forEach((e) => (e.r-- ? e.r++ : e())));
          }),
          (i.a = (o, r, i) => {
            var s;
            i && ((s = []).d = -1);
            var l,
              c,
              u,
              d = new Set(),
              p = o.exports,
              W = new Promise((e, t) => {
                (u = t), (c = e);
              });
            (W[t] = p),
              (W[e] = (e) => (s && e(s), d.forEach(e), W.catch((e) => {}))),
              (o.exports = W),
              r(
                (o) => {
                  var r;
                  l = ((o) =>
                    o.map((o) => {
                      if (null !== o && "object" == typeof o) {
                        if (o[e]) return o;
                        if (o.then) {
                          var r = [];
                          (r.d = 0),
                            o.then(
                              (e) => {
                                (i[t] = e), n(r);
                              },
                              (e) => {
                                (i[a] = e), n(r);
                              }
                            );
                          var i = {};
                          return (i[e] = (e) => e(r)), i;
                        }
                      }
                      var s = {};
                      return (s[e] = (e) => {}), (s[t] = o), s;
                    }))(o);
                  var i = () =>
                      l.map((e) => {
                        if (e[a]) throw e[a];
                        return e[t];
                      }),
                    c = new Promise((t) => {
                      (r = () => t(i)).r = 0;
                      var a = (e) =>
                        e !== s &&
                        !d.has(e) &&
                        (d.add(e), e && !e.d && (r.r++, e.push(r)));
                      l.map((t) => t[e](a));
                    });
                  return r.r ? c : i();
                },
                (e) => (e ? u((W[a] = e)) : c(p), n(s))
              ),
              s && s.d < 0 && (s.d = 0);
          }),
          (i.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return i.d(t, { a: t }), t;
          }),
          (i.d = (e, t) => {
            for (var a in t)
              i.o(t, a) &&
                !i.o(e, a) &&
                Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
          }),
          (i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
          (i.r = (e) => {
            "undefined" != typeof Symbol &&
              Symbol.toStringTag &&
              Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
              Object.defineProperty(e, "__esModule", { value: !0 });
          });
        var s = i(44);
        window.WUPE = s;
      })();
    }
  } catch (e) {
    console.log(e);
  }
}, 100);
