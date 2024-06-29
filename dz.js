// AtivaAposAcharJquery = {};
// AtivaAposAcharJquery.init = function () {

//     if ("undefined" == typeof require("WAWebCmd"))
//     return null;

//     if ("undefined" == typeof require("WAWebCmd").Cmd)
//     return null;

//     if ("undefined" == typeof require("WAWebCmd").Cmd.isMainLoaded)
//     return null;

//     try {

let inter123 = setInterval(() => {
  try {
    if (require("WAWebCmd").Cmd.isMainLoaded) {
      clearInterval(inter123);

      (() => {
        var e,
          t,
          a,
          n,
          i = {
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
              var i =
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
                    function i(a) {
                      e.removeListener(t, r), n(a);
                    }
                    function r() {
                      "function" == typeof e.removeListener &&
                        e.removeListener("error", i),
                        a([].slice.call(arguments));
                    }
                    b(e, t, r, { once: !0 }),
                      "error" !== t &&
                        (function (e, t, a) {
                          "function" == typeof e.on &&
                            b(e, "error", t, { once: !0 });
                        })(e, i);
                  });
                }),
                (r.EventEmitter = r),
                (r.prototype._events = void 0),
                (r.prototype._eventsCount = 0),
                (r.prototype._maxListeners = void 0);
              var o = 10;
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
                var i, r, o, c;
                if (
                  (s(a),
                  void 0 === (r = e._events)
                    ? ((r = e._events = Object.create(null)),
                      (e._eventsCount = 0))
                    : (void 0 !== r.newListener &&
                        (e.emit("newListener", t, a.listener ? a.listener : a),
                        (r = e._events)),
                      (o = r[t])),
                  void 0 === o)
                )
                  (o = r[t] = a), ++e._eventsCount;
                else if (
                  ("function" == typeof o
                    ? (o = r[t] = n ? [a, o] : [o, a])
                    : n
                    ? o.unshift(a)
                    : o.push(a),
                  (i = l(e)) > 0 && o.length > i && !o.warned)
                ) {
                  o.warned = !0;
                  var d = new Error(
                    "Possible EventEmitter memory leak detected. " +
                      o.length +
                      " " +
                      String(t) +
                      " listeners added. Use emitter.setMaxListeners() to increase limit"
                  );
                  (d.name = "MaxListenersExceededWarning"),
                    (d.emitter = e),
                    (d.type = t),
                    (d.count = o.length),
                    (c = d),
                    console && console.warn && console.warn(c);
                }
                return e;
              }
              function d() {
                if (!this.fired)
                  return (
                    this.target.removeListener(this.type, this.wrapFn),
                    (this.fired = !0),
                    0 === arguments.length
                      ? this.listener.call(this.target)
                      : this.listener.apply(this.target, arguments)
                  );
              }
              function u(e, t, a) {
                var n = {
                    fired: !1,
                    wrapFn: void 0,
                    target: e,
                    type: t,
                    listener: a,
                  },
                  i = d.bind(n);
                return (i.listener = a), (n.wrapFn = i), i;
              }
              function W(e, t, a) {
                var n = e._events;
                if (void 0 === n) return [];
                var i = n[t];
                return void 0 === i
                  ? []
                  : "function" == typeof i
                  ? a
                    ? [i.listener || i]
                    : [i]
                  : a
                  ? (function (e) {
                      for (
                        var t = new Array(e.length), a = 0;
                        a < t.length;
                        ++a
                      )
                        t[a] = e[a].listener || e[a];
                      return t;
                    })(i)
                  : m(i, i.length);
              }
              function p(e) {
                var t = this._events;
                if (void 0 !== t) {
                  var a = t[e];
                  if ("function" == typeof a) return 1;
                  if (void 0 !== a) return a.length;
                }
                return 0;
              }
              function m(e, t) {
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
                  e.addEventListener(t, function i(r) {
                    n.once && e.removeEventListener(t, i), a(r);
                  });
                }
              }
              Object.defineProperty(r, "defaultMaxListeners", {
                enumerable: !0,
                get: function () {
                  return o;
                },
                set: function (e) {
                  if ("number" != typeof e || e < 0 || i(e))
                    throw new RangeError(
                      'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
                        e +
                        "."
                    );
                  o = e;
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
                  if ("number" != typeof e || e < 0 || i(e))
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
                  var i = "error" === e,
                    r = this._events;
                  if (void 0 !== r) i = i && void 0 === r.error;
                  else if (!i) return !1;
                  if (i) {
                    var o;
                    if ((t.length > 0 && (o = t[0]), o instanceof Error))
                      throw o;
                    var s = new Error(
                      "Unhandled error." + (o ? " (" + o.message + ")" : "")
                    );
                    throw ((s.context = o), s);
                  }
                  var l = r[e];
                  if (void 0 === l) return !1;
                  if ("function" == typeof l) n(l, this, t);
                  else {
                    var c = l.length,
                      d = m(l, c);
                    for (a = 0; a < c; ++a) n(d[a], this, t);
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
                  return s(t), this.on(e, u(this, e, t)), this;
                }),
                (r.prototype.prependOnceListener = function (e, t) {
                  return s(t), this.prependListener(e, u(this, e, t)), this;
                }),
                (r.prototype.removeListener = function (e, t) {
                  var a, n, i, r, o;
                  if ((s(t), void 0 === (n = this._events))) return this;
                  if (void 0 === (a = n[e])) return this;
                  if (a === t || a.listener === t)
                    0 == --this._eventsCount
                      ? (this._events = Object.create(null))
                      : (delete n[e],
                        n.removeListener &&
                          this.emit("removeListener", e, a.listener || t));
                  else if ("function" != typeof a) {
                    for (i = -1, r = a.length - 1; r >= 0; r--)
                      if (a[r] === t || a[r].listener === t) {
                        (o = a[r].listener), (i = r);
                        break;
                      }
                    if (i < 0) return this;
                    0 === i
                      ? a.shift()
                      : (function (e, t) {
                          for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                          e.pop();
                        })(a, i),
                      1 === a.length && (n[e] = a[0]),
                      void 0 !== n.removeListener &&
                        this.emit("removeListener", e, o || t);
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
                    var i,
                      r = Object.keys(a);
                    for (n = 0; n < r.length; ++n)
                      "removeListener" !== (i = r[n]) &&
                        this.removeAllListeners(i);
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
                  return W(this, e, !0);
                }),
                (r.prototype.rawListeners = function (e) {
                  return W(this, e, !1);
                }),
                (r.listenerCount = function (e, t) {
                  return "function" == typeof e.listenerCount
                    ? e.listenerCount(t)
                    : p.call(e, t);
                }),
                (r.prototype.listenerCount = p),
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
              a.d(t, { Y: () => s, k: () => o });
              var n = a(658);
              const i = (0, n.WhatsUpLoad)("WAWebWidFactory"),
                r = (0, n.WhatsUpLoad)("WAWebGetProfilePicJob");
              function o(e) {
                return i.createUserWid(e);
              }
              function s(e, t) {
                return r.getProfilePic(e, t);
              }
            },
            974: (e, t, a) => {
              "use strict";
              a.d(t, { q: () => r });
              var n = a(658);
              const i = (0, n.WhatsUpLoad)("WAWebMsgCollection")?.MsgCollection;
              function r(e) {
                return i.get(e);
              }
            },
            772: (e, t, a) => {
              "use strict";
              a.d(t, { Gw: () => s, Jt: () => r, TE: () => o, w5: () => i });
              const n = (0, a(658).WhatsUpLoad)("WAWebChatCollection");
              function i() {
                return n.ChatCollection._models;
              }
              function r(e) {
                return n.ChatCollection.get(e);
              }
              function o() {
                return n.ChatCollection;
              }
              function s() {
                return n.ChatCollection;
              }
            },
            191: (e, t, a) => {
              "use strict";
              a.d(t, { O6: () => W, t5: () => m });
              var n = a(658),
                i = a(509),
                r = (a(974), a(772)),
                o = a(812),
                s = a(242);
              const l = (0, n.WhatsUpLoad)("WAWebUserPrefsMeUser"),
                c = (0, n.WhatsUpLoad)("WAWebMsgKey"),
                d = (0, n.WhatsUpLoad)("WAWebWidFactory"),
                u = (0, n.WhatsUpLoad)("WAWebMsgKeyNewId");
              async function W(e) {
                const t = l.getMaybeMeUser();
                let a, n;
                return (
                  (a = e.id),
                  a.isGroup && (n = d.toUserWid(t)),
                  new c({
                    from: t,
                    to: a,
                    id: await Promise.resolve(u.getMsgKeyNewSHA256Id()),
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
              const p = (0, n.WhatsUpLoad)(
                "WAWebMediaOpaqueData"
              ).createFromData;
              async function m(e, t, a = {}) {
                let l =
                  "status@broadcast" === e ? (0, s.Y)() : (0, r.Gw)().get(e);
                l ||
                  ((0, r.Gw)().add(
                    {
                      id: new o.k(e, {
                        intentionallyUsePrivateConstructor: !0,
                      }),
                    },
                    { merge: !0, add: !0 }
                  ),
                  (l = r.Gw.get(e)));
                const c = await (0, n.convertToFile)(t, a.mimetype, a.filename),
                  d = (c.name, await p(c, c.type)),
                  u = {
                    isPtt: a.isPtt,
                    asDocument: a.asDocument,
                    asGif: a.asGif,
                    isAudio: "audio" === a.type,
                    asSticker: a.asSticker,
                    precomputedFields: { duration: null, waveform: null },
                  };
                let W;
                "audio" === a.type
                  ? ((u.isPtt = a.isPtt),
                    (u.precomputedFields = await (async function (e, t) {
                      if (e.isPtt)
                        try {
                          const e = await t.arrayBuffer(),
                            a = new AudioContext(),
                            n = await a.decodeAudioData(e),
                            i = n.getChannelData(0),
                            r = 64,
                            o = Math.floor(i.length / r),
                            s = [];
                          for (let e = 0; e < r; e++) {
                            const t = o * e;
                            let a = 0;
                            for (let e = 0; e < o; e++) a += Math.abs(i[t + e]);
                            s.push(a / o);
                          }
                          const l = Math.pow(Math.max(...s), -1),
                            c = s.map((e) => e * l),
                            d = new Uint8Array(
                              c.map((e) => Math.floor(100 * e))
                            );
                          return {
                            duration: Math.floor(n.duration),
                            waveform: d,
                          };
                        } catch (e) {}
                    })(a, c)))
                  : "image" === a.type
                  ? (W = a.isViewOnce)
                  : "video" === a.type
                  ? (u.asGif = a.isGif)
                  : "document" === a.type
                  ? (u.asDocument = !0)
                  : "sticker" === a.type && (u.asSticker = !0);
                const m = (0, n.WhatsUpLoad)("WAWebMedia").prepRawMedia(d, u);
                let b = {};
                if (
                  (a.markIsRead &&
                    (await (0, n.WhatsUpLoad)(
                      "WAWebUpdateUnreadChatAction"
                    ).sendSeen(l, !1)),
                  await m.waitForPrep(),
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
                  var h = (0, i.r)(l.id).participants.map((e) => e.id);
                  b.mentionedJidList = h;
                }
                if ("status@broadcast" == e)
                  return {
                    result: await (0, n.WhatsUpLoad)(
                      "WAWebWhatsUpPlusStatusMedia"
                    ).sendMediaMsgToChat(m, l, {
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
                  ).sendMediaMsgToChat(m, l, {
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
                  archiveChat: () => ue,
                  chat: () => n.TE,
                  chat_: () => n.Gw,
                  createUser: () => s.k,
                  deleteChat: () => pe,
                  downMedia: () => C,
                  entraKnal: () => f,
                  get: () => n.Jt,
                  getActive: () => o,
                  getChatRealName: () => h,
                  getMsg: () => w.q,
                  getName: () => m,
                  getNameStatus: () => p,
                  getProfilePic: () => s.Y,
                  getRealName: () => b,
                  listaTodosChats: () => n.w5,
                  pinChat: () => se,
                  revokeMsg: () => ce,
                  sendCall: () => ne,
                  sendReact: () => re,
                  sfm: () => S.t5,
                  spm: () => $,
                  state: () => V,
                  stm: () => Y,
                  svm: () => M,
                  unMuteKnal: () => y,
                });
              var n = a(772),
                i = a(658);
              const r = (0, i.WhatsUpLoad)("WAWebChatCollection");
              function o() {
                return r.ChatCollection.getActive();
              }
              var s = a(812);
              const l = (0, i.WhatsUpLoad)("WAWebCmd");
              function c(e) {
                return l.Cmd.openChatBottom(e);
              }
              var d = a(452);
              const u = (0, i.WhatsUpLoad)("WAWebContactCollection"),
                W = (0, i.WhatsUpLoad)("WAWebChatCollection");
              function p(e) {
                let t = u.ContactCollection.get(e);
                return (
                  t.pushname ||
                  t.name ||
                  t.verifiedName ||
                  (0, n.Jt)(e).formattedTitle ||
                  t.id.user
                );
              }
              function m(e) {
                let t = u.ContactCollection.get(e);
                return t.name || (0, d.q)(t.id.user);
              }
              function b(e) {
                let t = u.ContactCollection.get(e);
                return t.pushname || t.verifiedName || (0, d.q)(t.id.user);
              }
              function h(e) {
                let t = W.ChatCollection.get(e);
                return t.pushname || t.verifiedName || (0, d.q)(t.id.user);
              }
              const A = (0, i.WhatsUpLoad)(
                  "WAWebLoadNewsletterPreviewChatAction"
                )?.loadNewsletterPreviewChat,
                g = (0, i.WhatsUpLoad)(
                  "WAWebMexJoinNewsletterJob"
                )?.mexJoinNewsletter,
                _ = (0, i.WhatsUpLoad)(
                  "WAWebNewsletterToggleMuteStateAction"
                )?.unmuteNewsletterAction;
              function f(e, t = !0) {
                A(e).then(async (e) => {
                  await g(e.id._serialized), t && _(e.id, { eventSurface: 5 });
                });
              }
              function y(e) {
                A(e).then(async (e) => {
                  _(e.id, { eventSurface: 5 });
                });
              }
              const v = (0, i.WhatsUpLoad)(
                "WAWebDownloadManager"
              )?.downloadManager;
              async function C(e) {
                return await v.downloadAndMaybeDecrypt(e);
              }
              var w = a(974),
                S = a(191);
              a(349);
              const L = (0, i.WhatsUpLoad)("WAWebFrontendVcardUtils"),
                T = (0, i.WhatsUpLoad)("WAWebUserPrefsMeUser"),
                P =
                  ((0, i.WhatsUpLoad)("WAWebMsgKeyNewId"),
                  (0, i.WhatsUpLoad)("WAWebSendMsgChatAction"));
              async function M(e, t) {
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
                var i = await Promise.all(
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
                  r = await Promise.all(i),
                  o = new Array();
                for (var l in r)
                  "object" == typeof r[l] && o.push(r[l].contact);
                var c = o.map(async (e) => {
                    if ("object" == typeof e)
                      return await L.vcardFromContactModel(e);
                  }),
                  d = await Promise.resolve(await (0, S.O6)(a));
                const u = await T.getMaybeMeUser();
                var W = await Promise.all(c);
                const p = {
                  id: d,
                  ack: 0,
                  from: u,
                  local: !0,
                  self: "in",
                  t: parseInt(new Date().getTime() / 1e3),
                  to: a.id,
                  ...(o.length > 1
                    ? { type: "multi_vcard" }
                    : { type: "vcard" }),
                  ...(o.length > 1 ? { vcardList: W } : { body: W[0].vcard }),
                  isNewMsg: !0,
                };
                await P.addAndSendMsgToChat(a, p);
              }
              var E = a(509);
              (0, i.WhatsUpLoad)("useWAWebLinkPreview"),
                (0, i.WhatsUpLoad)("WAWebLinkPreviewChatAction");
              const I = (0, i.WhatsUpLoad)("WAWebMediaUploadMmsThumbnail"),
                U = (0, i.WhatsUpLoad)("WAWebGenMinimalLinkPreviewChatAction"),
                R = U.genMinimalLinkPreview;
              U.genMinimalLinkPreview2 = U.genMinimalLinkPreview;
              const O = U.genMinimalLinkPreview2,
                x = (0, i.WhatsUpLoad)("WAWebMediaOpaqueData"),
                k = (0, i.WhatsUpLoad)("WABase64"),
                N = (0, i.WhatsUpLoad)("WATimeUtils"),
                D = 200;
              var G = [];
              async function H(e) {
                const t = new TextDecoder(),
                  a =
                    "https://whatsup.plus/prev.png?get=" +
                    btoa(unescape(encodeURIComponent(e))).replace("/", "_"),
                  n = await (0, i.fdp)(a)
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
              async function B(e) {
                try {
                  const t = await (0, i.downloadImage)(e).catch((e) =>
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
                              (e.width = D), (e.height = D);
                              const i = Math.min(n.width, n.height),
                                r = (n.width - i) / 2,
                                o = (n.height - i) / 2;
                              a.drawImage(n, r, o, i, i, 0, 0, D, D),
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
                    r = await x.createFromBase64Jpeg(n),
                    o = new Uint8Array(32),
                    s =
                      (window.crypto.getRandomValues(o),
                      { key: k.encodeB64(o), timestamp: N.unixTime() }),
                    l = new AbortController(),
                    c = await I({
                      thumbnail: r,
                      mediaType: "thumbnail-link",
                      mediaKeyInfo: s,
                      uploadOrigin: 1,
                      forwardedFromWeb: !1,
                      signal: l.signal,
                      timeout: 3e3,
                      isViewOnce: !1,
                    }),
                    d = c.mediaEntry;
                  return {
                    thumbnail: a,
                    thumbnailHQ: n,
                    mediaKey: d.mediaKey,
                    mediaKeyTimestamp: d.mediaKeyTimestamp,
                    thumbnailDirectPath: d.directPath,
                    thumbnailSha256: c.filehash,
                    thumbnailEncSha256: d.encFilehash,
                    thumbnailWidth: t.width,
                    thumbnailHeight: t.height,
                  };
                } catch (e) {
                  console.log(e);
                }
              }
              (U.genMinimalLinkPreview2 = (0, i.wrapf)(O, (e, ...t) => {
                const [a] = t,
                  n =
                    "string" == typeof a
                      ? (0, i.WhatsUpLoad)(
                          "useWAWebLinkPreview"
                        ).findFirstWebLink(a).url
                      : a.url,
                  r = G.find((e) => e.url == n);
                return new Promise(async (a) => {
                  try {
                    if (r) a(r);
                    else {
                      const e = await H(n);
                      if (!e) throw new Error(`preview not found for ${n}`);
                      const { imageUrl: t, ...i } = e;
                      let r = {};
                      t &&
                        (r = await B(t).catch((e) => {
                          console.log(e);
                        }));
                      const o = { url: n, data: { ...i, ...r } };
                      G.push(o), a(o);
                    }
                  } catch (n) {
                    console.log(n), a(e(...t));
                  }
                });
              })),
                (U.genMinimalLinkPreview = (0, i.wrapf)(R, (e, ...t) => {
                  const [a] = t,
                    n =
                      "string" == typeof a
                        ? (0, i.WhatsUpLoad)(
                            "useWAWebLinkPreview"
                          ).findFirstWebLink(a).url
                        : a.url,
                    r = G.find((e) => e.url == n);
                  return new Promise(async (a) => {
                    try {
                      if ("true" == localStorage.getItem("linkpreviwhqenabled"))
                        if (r) a(r);
                        else {
                          const e = await H(n);
                          if (!e) throw new Error(`preview not found for ${n}`);
                          const { imageUrl: t, ...i } = e;
                          let r = {};
                          t &&
                            (r = await B(t).catch((e) => {
                              console.log(e);
                            }));
                          const o = { url: n, data: { ...i, ...r } };
                          G.push(o), a(o);
                        }
                      else a(e(...t));
                    } catch (n) {
                      console.log(n), a(e(...t));
                    }
                  });
                }));
              let j = (0, i.WhatsUpLoad)("WAWebChatCollection")?.ChatCollection,
                J = (0, i.WhatsUpLoad)(
                  "WAWebSendTextMsgChatAction"
                )?.sendTextMsgToChat;
              async function Y(e, t, a) {
                if (!t || " " == t) return;
                let n = j.get(e);
                n ||
                  (j().add(
                    {
                      id: new createUser(chatId, {
                        intentionallyUsePrivateConstructor: !0,
                      }),
                    },
                    { merge: !0, add: !0 }
                  ),
                  (n = j.get(chatId)));
                let r = {};
                if ((!1 === t.includes("http") && !a?.wulp) || 0 == a?.lp) {
                  if (n.isGroup && a?.tagall) {
                    var o = (0, E.r)(n.id).participants.map((e) => e.id);
                    r.mentionedJidList = o;
                  } else if (n.isGroup) {
                    const e = t.match(/(?<=@)(\d+)\b/g) || [];
                    let a = [];
                    if (e.length > 0) {
                      const t = (0, E.r)(n.id);
                      for (const n of e) {
                        const e = `${n}@c.us`,
                          i = t.participants.filter(
                            (t) => t.id._serialized == e
                          );
                        1 == i.length && a.push(i[0].id);
                      }
                    }
                    a.length > 0 && (r.mentionedJidList = a);
                  }
                  return (
                    a?.quotedMsg &&
                      (r = { quotedMsg: await (0, w.q)(a?.quotedMsg) }),
                    await J(n, t, r)
                  );
                }
                if (n.isGroup && a?.tagall)
                  (o = (0, E.r)(n.id).participants.map((e) => e.id)),
                    (r.mentionedJidList = o);
                else if (n.isGroup) {
                  const e = t.match(/(?<=@)(\d+)\b/g) || [];
                  let a = [];
                  if (e.length > 0) {
                    const t = (0, E.r)(n.id);
                    for (const n of e) {
                      const e = `${n}@c.us`,
                        i = t.participants.filter((t) => t.id._serialized == e);
                      1 == i.length && a.push(i[0].id);
                    }
                  }
                  a.length > 0 && (r.mentionedJidList = a);
                }
                if (a?.quotedMsg) {
                  let e = await (0, w.q)(a?.quotedMsg);
                  r = { ...r, quotedMsg: e };
                }
                if (a?.lp || (!a?.lp && !a?.wulp)) {
                  let e = await (0, i.WhatsUpLoad)(
                    "WAWebGenMinimalLinkPreviewChatAction"
                  ).genMinimalLinkPreview(t);
                  e && (r.linkPreview = e.data);
                } else if (a?.wulp) {
                  let e = await (0, i.WhatsUpLoad)(
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
                return await J(n, t, r);
              }
              (0, i.WhatsUpLoad)("WAWebSendTextMsgChatAction"),
                (0, i.WhatsUpLoad)("useWAWebLinkPreview"),
                (0, i.WhatsUpLoad)("WAWebLinkPreviewChatAction"),
                (0, i.WhatsUpLoad)("WAWebLinkPreviewCache");
              let F = (0, i.WhatsUpLoad)("WAWebChatStateBridge");
              async function V(e, t) {
                switch (e) {
                  case 0:
                    await F.sendChatStateComposing(t);
                    break;
                  case 1:
                    await F.sendChatStateRecording(t);
                    break;
                  case 2:
                    await F.sendChatStatePaused(t);
                    break;
                  default:
                    return !1;
                }
                return !0;
              }
              const K = (0, i.WhatsUpLoad)("WAWebSendMsgChatAction"),
                q = (0, i.WhatsUpLoad)(
                  "WAWebPollsActionsMetricUtils"
                )?.commitPollsActionsMetric,
                z = (0, i.WhatsUpLoad)(
                  "WAWebPollsSendPollCreationMsgAction"
                )?.createPollCreationMsg;
              async function $(e, t, a, i = !1) {
                let r = [];
                a.map((e) => r.push({ name: e }));
                var o = (0, n.Jt)(e);
                let s = await z({
                  poll: { name: t, options: r, selectableOptionsCount: 1 },
                  chat: o,
                });
                if (o.isGroup && i) {
                  var l = (await (0, E.r)(e)).participants.map((e) => e.id);
                  s.mentionedJidList = l;
                }
                const [c] = await Promise.all(K.addAndSendMsgToChat(o, s));
                q({
                  action: 2,
                  chat: o,
                  creationDateInSeconds: c.t,
                  pollOptionsCount: r.length,
                });
              }
              var Z = a(707);
              const X = (0, i.WhatsUpLoad)("WAWebCallCollection"),
                Q = (0, i.WhatsUpLoad)(
                  "WAWebDBDeviceListFanout"
                )?.getFanOutList,
                ee = (0, i.WhatsUpLoad)(
                  "WAWebEncryptMsgProtobuf"
                )?.encryptMsgProtobuf,
                te = (0, i.WhatsUpLoad)("WAWebUserPrefsMeUser")?.assertGetMe;
              async function ae(e) {
                const t = ["ACTIVE", "OUTGOING_CALLING", "OUTGOING_RING"];
                let a;
                (a = e
                  ? X.get(e)
                  : X.findFirst((e) => t.includes(e.getState()) || e.isGroup)),
                  a.peerJid.isGroupCall() ||
                    (await (0, i.WhatsUpLoad)(
                      "WAWebManageE2ESessionsJob"
                    ).ensureE2ESessions([a.peerJid]));
                const n = (0, i.WhatsUpLoad)("WASmaxJsx").smax(
                  "call",
                  {
                    to: a.peerJid.toString({ legacy: !0 }),
                    id: (0, i.WhatsUpLoad)("WAWap").generateId(),
                  },
                  [
                    (0, i.WhatsUpLoad)("WASmaxJsx").smax(
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
                  await (0, i.WhatsUpLoad)("WAComms").sendSmaxStanza(n), !0
                );
              }
              async function ne(e, t) {
                t = Object.assign({ isVideo: !1 }, t);
                const a = (0, Z.Pq)(e),
                  n = (0, i.WhatsUpLoad)("WAHex").randomHex(16).substr(0, 64),
                  r = te(),
                  o = [
                    (0, i.WhatsUpLoad)("WASmaxJsx").smax(
                      "audio",
                      { enc: "opus", rate: "16000" },
                      null
                    ),
                    (0, i.WhatsUpLoad)("WASmaxJsx").smax(
                      "audio",
                      { enc: "opus", rate: "8000" },
                      null
                    ),
                  ];
                t.isVideo &&
                  o.push(
                    (0, i.WhatsUpLoad)("WASmaxJsx").smax(
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
                  o.push(
                    (0, i.WhatsUpLoad)("WASmaxJsx").smax(
                      "net",
                      { medium: "3" },
                      null
                    ),
                    (0, i.WhatsUpLoad)("WASmaxJsx").smax(
                      "capability",
                      { ver: "1" },
                      new Uint8Array([1, 4, 255, 131, 207, 4])
                    ),
                    (0, i.WhatsUpLoad)("WASmaxJsx").smax(
                      "encopt",
                      { keygen: "2" },
                      null
                    )
                  );
                const s = self.crypto.getRandomValues(
                  new Uint8Array(32)
                ).buffer;
                o.push(
                  ...(await (async function (e, t) {
                    const a = await Q({ wids: e });
                    await (0, i.WhatsUpLoad)(
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
                            (0, i.WhatsUpLoad)("WASmaxJsx").smax(
                              "to",
                              { jid: e.toString({ legacy: !0 }) },
                              [
                                (0, i.WhatsUpLoad)("WASmaxJsx").smax(
                                  "enc",
                                  { v: "2", type: a, count: "0" },
                                  r
                                ),
                              ]
                            )
                          );
                        })
                      ),
                      o = [];
                    if (
                      (o.push(
                        (0, i.WhatsUpLoad)("WASmaxJsx").smax(
                          "destination",
                          {},
                          r
                        )
                      ),
                      n)
                    ) {
                      const e = await (0, i.WhatsUpLoad)(
                        "WAWebAdvSignatureApi"
                      ).getADVEncodedIdentity();
                      o.push(
                        (0, i.WhatsUpLoad)("WASmaxJsx").smax(
                          "device-identity",
                          void 0,
                          e
                        )
                      );
                    }
                    return o;
                  })([a], s))
                );
                const l = (0, i.WhatsUpLoad)("WASmaxJsx").smax(
                    "call",
                    {
                      to: a.toString({ legacy: !0 }),
                      id: (0, i.WhatsUpLoad)("WAHex").randomHex(8),
                    },
                    [
                      (0, i.WhatsUpLoad)("WASmaxJsx").smax(
                        "offer",
                        {
                          "call-id": n,
                          "call-creator": r.toString({ legacy: !0 }),
                        },
                        o
                      ),
                    ]
                  ),
                  c = new ((0, i.WhatsUpLoad)("WAWebCallModel"))({
                    id: n,
                    peerJid: a,
                    isVideo: t.isVideo,
                    isGroup: !1,
                    outgoing: !0,
                    offerTime: (0, i.WhatsUpLoad)("WATimeUtils").unixTime(),
                    webClientShouldHandle: !1,
                    canHandleLocally: !0,
                  });
                return (
                  X.add(c),
                  X.setActiveCall(X.assertGet(n)),
                  c.setState("OUTGOING_CALLING"),
                  await (0, i.WhatsUpLoad)("WAComms").sendSmaxStanza(l),
                  console.log("<!> enviando call", e, n),
                  setTimeout(
                    () => {
                      const t = (0, i.WhatsUpLoad)("WAWebCallCollection");
                      ae(n),
                        (t.activeCall = null),
                        console.log("<!> call finalizada", e, n);
                    },
                    t.timeout ? t.timeout : 7e3
                  ),
                  c
                );
              }
              const ie = (0, i.WhatsUpLoad)("WAWebSendReactionMsgAction");
              function re(e, t) {
                return ie.sendReactionToMsg(e, t);
              }
              const oe = (0, i.WhatsUpLoad)("WAWebCmd");
              async function se(e, t) {
                return oe.Cmd.pinChat(e, t);
              }
              const le = (0, i.WhatsUpLoad)("WAWebCmd");
              async function ce(e, t) {
                return le.Cmd.sendRevokeMsgs(e, t, !0);
              }
              const de = (0, i.WhatsUpLoad)("WAWebCmd");
              async function ue(e, t) {
                return de.Cmd.archiveChat(e, t);
              }
              const We = (0, i.WhatsUpLoad)("WAWebDeleteChatAction");
              function pe(e) {
                return We.sendDelete(e);
              }
            },
            794: (e, t, a) => {
              "use strict";
              a.d(t, { I: () => r });
              var n = a(7);
              class i extends n.EventEmitter {}
              const r = new i();
            },
            456: (e, t, a) => {
              "use strict";
              var n = a(658),
                i = a(794),
                r = a(743);
              const o = (0, n.WhatsUpLoad)(
                  "WAWebPollsUpsertVotesModelCollectionMsgAction"
                ),
                s = o.upsertVotesModelCollection,
                l = (0, n.WhatsUpLoad)("WAWebMsgCollection").MsgCollection,
                c =
                  ((0, n.WhatsUpLoad)("WAWebHandleGroupNotificationV2"),
                  (0, n.WhatsUpLoad)("WAWebGroupExitJob")),
                d = c?.leaveGroup;
              let u = { id: "", votes: [] };
              const W = Date.now();
              function p(e) {
                const t = new Date(e);
                return `${m(t.getDate())}/${m(
                  t.getMonth() + 1
                )}/${t.getFullYear()} ${m(t.getHours())}:${m(
                  t.getMinutes()
                )}:${m(t.getSeconds())}`;
              }
              function m(e) {
                return e < 10 ? "0" + e : e;
              }
              (c.leaveGroup = (0, n.wrapf)(d, async (e, ...t) => {
                let [a] = t;
                try {
                  return i.I.emit("saiu_g", a), e(...t);
                } catch (e) {}
              })),
                (o.upsertVotesModelCollection = (0, n.wrapf)(
                  s,
                  async (e, ...t) => {
                    let [a, n] = t;
                    try {
                      if (a[0].senderTimestampMs < W) return e(...t);
                      const n = await l.get(a[0].parentMsgKey),
                        r = [];
                      for (const e of a[0].selectedOptionLocalIds)
                        r[e] = n.pollOptions.filter((t) => t.localId == e)[0];
                      let o = {};
                      if (
                        ((o.id = a[0].parentMsgKey.id),
                        (o.votes = a[0].selectedOptionLocalIds),
                        JSON.stringify(o) !== JSON.stringify(u))
                      ) {
                        (u.id = a[0].parentMsgKey.id),
                          (u.votes = a[0].selectedOptionLocalIds);
                        let e = a[0];
                        i.I.emit("vt", {
                          msgId: e.parentMsgKey,
                          chatId: e.parentMsgKey.remote,
                          selectedOptions: r,
                          timestamp: p(e.senderTimestampMs),
                          data_atual: p(W),
                          sender: e.sender,
                        });
                      }
                      return e(...t);
                    } catch (e) {}
                  }
                ));
              const b = (0, n.WhatsUpLoad)("WAWebMsgCollection").MsgCollection,
                h = (0, n.WhatsUpLoad)(
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
                    let i = (0, r.n)().filter((e) => e.isMyContact).length;
                    document.getElementById("contactcount").innerHTML = i;
                    let o = (0, r.n)().filter((e) => e.t).length;
                    document.getElementById("allcount").innerHTML = o;
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
                  i.I.emit("recebe_m", e);
                }),
                b.on("change:asRevoked", (e) => {
                  i.I.emit("muda_r", e);
                }),
                h.on("change:name", (e) => {
                  i.I.emit("muda_n", e);
                }),
                h.on("add", (e) => {
                  i.I.emit("add_c", e);
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
                        loader: () => W,
                        opcoes: () => d,
                        presence: () => m,
                        priv: () => u,
                        status: () => l,
                        util: () => p,
                        wa: () => o,
                      });
                    var i = a(39);
                    a(456), a(782);
                     let e = await (0, i.B)("3AD5F59D3767DB20F950"),
                    r = {};
                  var ax = "wa";
                  var bx = "chat";
                  var cx = "presence";

                  r[ax] = a(849);
                  r[bx] = a(766);
                  r[cx] = a(432).I;
                    
                    const {
                      wa: o,
                      chat: s,
                      status: l,
                      label: c,
                      opcoes: d,
                      priv: u,
                      loader: W,
                      util: p,
                      presence: m,
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
                  addRemove: () => d,
                  get: () => o,
                  getAll: () => r,
                  getColor: () => l,
                });
              var n = a(658);
              const i = (0, n.WhatsUpLoad)("WAWebLabelCollection");
              function r() {
                return i.LabelCollection._models;
              }
              function o(e) {
                return i.LabelCollection.get(e);
              }
              const s = (0, n.WhatsUpLoad)("WAWebLabelUtils");
              function l(e) {
                return s.colorIndexToHex(e);
              }
              const c = (0, n.WhatsUpLoad)("WAWebLabelCollection");
              function d(e, t) {
                return c.LabelCollection.addOrRemoveLabels(e, t);
              }
            },
            658: (e, t, a) => {
              "use strict";
              a.r(t),
                a.d(t, {
                  WhatsUpLoad: () => r,
                  base64ImageToFile: () => p,
                  convertToFile: () => m,
                  downFile: () => c,
                  downloadImage: () => s,
                  fdp: () => l,
                  fetchTrans: () => d,
                  fetchVoice: () => u,
                  wrapf: () => o,
                });
              var n = a(759),
                i = a.n(n);
              const r = window.require;
              function o(e, t) {
                return function (...a) {
                  return t(e, ...a);
                };
              }
              function s(e, t = "image/jpeg", a = 0.85) {
                return new Promise((n, i) => {
                  const r = new Image();
                  (r.crossOrigin = "anonymous"),
                    (r.src = e),
                    (r.onerror = i),
                    (r.onload = () => {
                      const e = document.createElement("canvas"),
                        i = e.getContext("2d");
                      (e.height = r.naturalHeight),
                        (e.width = r.naturalWidth),
                        i.drawImage(r, 0, 0);
                      const o = e.toDataURL(t, a);
                      n({
                        data: o,
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
                      const i = a.getImageData(0, 0, e.width, e.height).data,
                        r = [];
                      for (let e = 0; e < i.length; e += 4)
                        r.push(i[e]), r.push(i[e + 1]), r.push(i[e + 2]);
                      const o =
                        (r[1] << 56) +
                        (r[2] << 48) +
                        (r[3] << 40) +
                        (r[4] << 32) +
                        (r[5] << 24) +
                        (r[6] << 16) +
                        (r[7] << 8) +
                        r[8];
                      t(new Uint8Array(r.slice(9, o + 9)));
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
              async function d(e) {
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
              async function u(e) {
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
              const W =
                /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/;
              function p(e, t) {
                for (
                  var a = e.split(","),
                    n = a[0].match(/:(.*?);/)[1],
                    i = window.Base64 ? window.Base64.atob(a[1]) : atob(a[1]),
                    r = i.length,
                    o = new Uint8Array(r);
                  r--;

                )
                  o[r] = i.charCodeAt(r);
                return new File([o], t, { type: n });
              }
              async function m(e, t, a) {
                if (e instanceof File) return e;
                let n = null;
                if ("string" == typeof e) {
                  let a = i()(e);
                  if (
                    (!a &&
                      (function (e) {
                        return W.test(e);
                      })(e) &&
                      (a = i()(e)),
                    !a)
                  )
                    throw "invalid_data_url";
                  t || (t = a.contentType);
                } else e;
                return p(e, a);
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
                  "WAWebStatusSendGatingUtils",
                  "WAWebURLUtils",
                  "WAWebWamEnumDownloadOriginType",
                  "WAWebWamEnumMessageSendResultType",
                  "WAWebWamEnumWebcRmrReasonCode",
                  "asyncToGeneratorRuntime",
                  "err",
                ],
                function (e, t, a, n, i, r, o, s) {
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
                  function d() {
                    var e = babelHelpers.taggedTemplateLiteralLoose([
                      "Assertion failed!",
                    ]);
                    return (
                      (d = function () {
                        return e;
                      }),
                      e
                    );
                  }
                  function u() {
                    var e = babelHelpers.taggedTemplateLiteralLoose([
                      "Sticker:sendToChat failed with unknown error",
                    ]);
                    return (
                      (u = function () {
                        return e;
                      }),
                      e
                    );
                  }
                  function W() {
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
                      (W = function () {
                        return e;
                      }),
                      e
                    );
                  }
                  function p() {
                    var e = babelHelpers.taggedTemplateLiteralLoose([
                      "Media:sendToChat canceled",
                    ]);
                    return (
                      (p = function () {
                        return e;
                      }),
                      e
                    );
                  }
                  function m() {
                    var e = babelHelpers.taggedTemplateLiteralLoose([
                      "Sticker:sendToChat failed with expressions panel enabled",
                    ]);
                    return (
                      (m = function () {
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
                  function h() {
                    var e = babelHelpers.taggedTemplateLiteralLoose([
                      "Assertion failed!",
                    ]);
                    return (
                      (h = function () {
                        return e;
                      }),
                      e
                    );
                  }
                  function A(e, t) {
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
                  function g(e) {
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
                  function f(e, t, i, r) {
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
                        var o = e.filehash;
                        o ||
                          n("WALogger")
                            .ERROR(b())
                            .sendLogs(
                              "media-fault: sendToChat filehash undefined"
                            );
                        var s =
                            n("WAWebMediaStorage").getOrCreateMediaObject(o),
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
                            ).InMemoryMediaBlobCache.put(o, l)),
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
                            downloadOrigin: A(t, r),
                            mode: "manual",
                            chatWid: t.id,
                          }),
                          ((o = babelHelpers.extends(
                            {},
                            s.msgProps(e)
                          )).caption = i.caption),
                          (null == i.caption || "" === i.caption) &&
                            e.type ===
                              n("WAWebMediaTypes").OUTWARD_TYPES.DOCUMENT &&
                            (o.caption = e.filename),
                          !0 === i.isViewOnce && (o.isViewOnce = !0),
                          o
                        );
                      });
                  }
                  function y(e, t, a, n) {
                    return new Promise(function (i, r) {
                      v(e, t, a, n)
                        .then(function (e) {
                          i(e);
                        })
                        .catch(function (e) {
                          r(e);
                        });
                    });
                  }
                  function v(e, i, r, o) {
                    return new Promise(async (b, h) => {
                      var A,
                        y,
                        v = r.caption,
                        C = r.footer,
                        w = r.quotedMsg ? r.quotedMsg.msgContextInfo(i.id) : {};
                      A = null != (A = r.productMsgOptions) ? A : {};
                      var S,
                        L = n("WAWebChatEphemerality").isEphemeralSettingOn(i)
                          ? n("WAWebChatEphemerality").getEphemeralSetting(i)
                          : void 0,
                        T = n(
                          "WAWebChatEphemerality"
                        ).getEphemeralSettingTimestamp(i),
                        P = n(
                          "WAWebChatEphemerality"
                        ).getDisappearingModeInitiator(i),
                        M = !1;
                      i.isCAGAdmin() && (M = !0),
                        (y = null != (y = r.type) ? y : e._baseType),
                        n(
                          "WAWebMessagingGatingUtils"
                        ).isReportingTokenSendingEnabled() &&
                          n(
                            "WAWebMessagePluginGenerateReportingTokenContent"
                          ).isMsgTypeReportingTokenCompatible(y) &&
                          (M = !0),
                        M &&
                          (S = self.crypto.getRandomValues(new Uint8Array(32)));
                      var E,
                        I,
                        U = babelHelpers.extends(
                          {},
                          await n("WAWebMsgDataUtils").genOutgoingMsgData(i, y),
                          {
                            type: y,
                            caption: v,
                            footer: C,
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
                            ephemeralDuration: L,
                            ephemeralSettingTimestamp: T,
                            disappearingModeInitiator: P,
                            messageSecret: S,
                            isAvatar: r.isAvatar,
                          },
                          A
                        );
                      function R(e) {
                        return O.apply(this, arguments);
                      }
                      function O() {
                        return (
                          (O = t("asyncToGeneratorRuntime").asyncToGenerator(
                            function* (e) {
                              E = e;
                              var r = e.mediaObject;
                              r ||
                                n("WALogger")
                                  .ERROR(d())
                                  .sendLogs(
                                    "media-fault: incorrect media object for created msg"
                                  ),
                                r || s(0, 56330);
                              var u =
                                  n("WAWebMmsMediaTypes").getMsgMediaType(e),
                                W = r.entries.getUploadEntry(
                                  n(
                                    "WAWebMediaCryptoEligibilityUtils"
                                  ).isMediaCryptoExpectedForChat(i)
                                );
                              W =
                                W instanceof
                                n("WAWebMediaEntry").EncryptedMediaEntry
                                  ? {
                                      key: W.mediaKey,
                                      timestamp: W.mediaKeyTimestamp,
                                    }
                                  : a("WAWebCryptoRandomMediaKey")();
                              var p = r.contentInfo,
                                m = p.fullPreviewData;
                              p = p.fullPreviewSize;
                              var b = e.body;
                              if (g(u) && !m && r.contentInfo.preview) {
                                var h = yield n(
                                  "WAWebImageUtils"
                                ).base64ImageToCanvas(
                                  r.contentInfo.preview.url()
                                );
                                (h = yield n(
                                  "WAWebCanvasUtils"
                                ).generateMicroThumb(h, 1300, {
                                  mimetype: "image/jpeg",
                                  maxAttempts: 10,
                                })),
                                  (m = r.contentInfo.preview),
                                  (p = { width: h.width, height: h.height }),
                                  (b = a("WAWebURLUtils").parseDataURL(
                                    h.dataUrl
                                  ).data);
                              }
                              h = e.safe();
                              var A = m && p && g(u);
                              if (
                                ((h =
                                  m &&
                                  !0 === A &&
                                  h.type === n("WAWebMsgType").MSG_TYPE.DOCUMENT
                                    ? a("WAWebMediaUploadMmsThumbnail")({
                                        thumbnail: m,
                                        mediaKeyInfo: W,
                                        mediaType:
                                          n("WAWebMmsMediaTypes").MEDIA_TYPES
                                            .THUMBNAIL_DOCUMENT,
                                        uploadOrigin: a(
                                          "WAWebMediaGetUploadOriginForChat"
                                        )(i),
                                        forwardedFromWeb: Boolean(
                                          e.forwardedFromWeb
                                        ),
                                        isViewOnce: Boolean(e.isViewOnce),
                                      })
                                    : (l || (l = t("Promise"))).resolve(null)),
                                (m = {
                                  mimetype: e.mimetype,
                                  mediaObject: r,
                                  mediaType: u,
                                  forwardedFromWeb: Boolean(e.forwardedFromWeb),
                                  uploadOrigin: a(
                                    "WAWebMediaGetUploadOriginForChat"
                                  )(i),
                                  isViewOnce: Boolean(e.isViewOnce),
                                  earlyUpload: o,
                                }),
                                (e = n(
                                  "WAWebMediaCryptoEligibilityUtils"
                                ).isMediaCryptoExpectedForChat(i)
                                  ? n("WAWebMediaMmsV4Upload").uploadMedia(
                                      babelHelpers.extends({}, m, {
                                        mediaKeyInfo: W,
                                      })
                                    )
                                  : n(
                                      "WAWebMediaMmsV4Upload"
                                    ).uploadUnencryptedMedia(
                                      babelHelpers.extends({}, m, {
                                        calculateToken: n(
                                          "WAMediaCalculateFilehash"
                                        ).getRandomFilehash,
                                      })
                                    )),
                                (m = r.filehash),
                                n(
                                  "WAWebMediaInMemoryKeyCache"
                                ).shouldUseMediaKeyCache() &&
                                  null != m &&
                                  n(
                                    "WAWebMediaInMemoryKeyCache"
                                  ).MediaKeyCache.put(m, W),
                                (h = (e = (W = yield (
                                  l || (l = t("Promise"))
                                ).all([e, h]))[0]).kind),
                                (e = e.mediaEntry),
                                (W = W[1]),
                                a("WAWebMediaGatingShouldClearUploadedBlobs")(
                                  u
                                ) && r.clearBlob({ reset: !0 }),
                                (I = h),
                                !e)
                              )
                                throw a("err")(
                                  "upload failed: media entry was not created"
                                );
                              if (
                                (n(
                                  "WAWebMediaInMemoryKeyCache"
                                ).shouldUseMediaKeyCache() &&
                                  null != m &&
                                  n(
                                    "WAWebMediaInMemoryKeyCache"
                                  ).MediaKeyCache.delete(m),
                                (u = null == W ? void 0 : W.mediaEntry),
                                (h = {}),
                                !0 === A)
                              ) {
                                if (!(u && W && p))
                                  throw (
                                    ((m = {
                                      thumbnailResultEntry: u,
                                      uploadThumbnailResult: W,
                                      fullPreviewSize: p,
                                    }),
                                    n("WALogger")
                                      .ERROR(c(), JSON.stringify(m))
                                      .devConsole(m)
                                      .sendLogs(
                                        "mms-thumbnail-data-incomplete"
                                      ),
                                    a("err")(
                                      "upload failed: thumbnail data incomplete"
                                    ))
                                  );
                                h = {
                                  thumbnailDirectPath: u.directPath,
                                  thumbnailSha256: W.filehash,
                                  thumbnailEncSha256: u.encFilehash,
                                  thumbnailHeight: p.height,
                                  thumbnailWidth: p.width,
                                };
                              }
                              return (
                                yield a("WAWebMediaUpdateMsg")(
                                  E,
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
                                    h
                                  )
                                ),
                                E
                              );
                            }
                          )),
                          O.apply(this, arguments)
                        );
                      }
                      r.type === n("WAWebMsgType").MSG_TYPE.DOCUMENT &&
                        Boolean(r.caption) &&
                        (U.isCaptionByUser = !0),
                        !0 === r.addEvenWhilePreparing
                          ? ((M = r.placeholderProps || {}),
                            (y = babelHelpers.extends({}, M, U)),
                            (v = function (t) {
                              return (
                                (E = t),
                                f(e, i, r, U)
                                  .then(function (e) {
                                    return a("WAWebMediaUpdateMsg")(E, e);
                                  })
                                  .then(function () {
                                    return R(E);
                                  })
                              );
                            }),
                            n(
                              "WAWebNewsletterGatingUtils"
                            ).isNewsletterEnabled() && i.isNewsletter
                              ? (C = n(
                                  "WAWebNewsletterSendMsgAction"
                                ).sendNewsletterMediaMsg(i, y, v))
                              : n(
                                  "WAWebStatusSendGatingUtils"
                                ).isStatusPostingEnabled() && i.id.isStatusV3()
                              ? (n(
                                  "WAWebSendStatusMsgAction"
                                ).sendStatusMediaMsgAction(y, v),
                                (C = (l || (l = t("Promise"))).reject(
                                  a("err")("unsupported")
                                )))
                              : (C = n(
                                  "WAWebSendMsgChatAction"
                                ).addAndSendMsgToChat(i, y, v)[1]))
                          : ((w = f(e, i, r, U).then(function (e) {
                              var t =
                                !0 === r.useBasePropsType ? U.type : e.type;
                              return babelHelpers.extends({}, U, e, {
                                type: t,
                              });
                            })),
                            (C = t(
                              "WAWebSendStatusMsgAction"
                            ).sendStatusMediaMsgAction(await w, R))),
                        C.then(function (e) {
                          b(e);
                          var t,
                            a = e.result;
                          if (
                            ((e = e.error),
                            (null == a ? void 0 : a.messageSendResult) ===
                              n("WAWebSendMsgResultAction").SendMsgResult.OK)
                          )
                            return (
                              E.type ===
                                n("WAWebMediaTypes").OUTWARD_TYPES.STICKER &&
                                !0 !== E.isAvatar &&
                                n(
                                  "WAWebRecentStickerCollectionMd"
                                ).RecentStickerCollectionMd.addStickerWithMediaData(
                                  E
                                ),
                              {
                                messageSendResult: n("WAWebSendMsgResultAction")
                                  .SendMsgResult.OK,
                              }
                            );
                          if (
                            (E && (E.ack = n("WAWebAck").ACK.FAILED),
                            (t =
                              null == (t = E) || null == (t = t.mediaObject)
                                ? void 0
                                : t.uploadStage),
                            E &&
                              n("WAWebMmsMediaTypes").getMsgMediaType(E) ===
                                n("WAWebMediaTypes").OUTWARD_TYPES.STICKER &&
                              n(
                                "WAWebAttachMenuGatingUtils"
                              ).areExpressionPanelsEnabled())
                          ) {
                            var i = t || "undefined";
                            n("WALogger")
                              .ERROR(m())
                              .tags("non-sad")
                              .sendLogs(
                                "sticker-send-fail-with-expressions-panel-enabled-uploadStage-" +
                                  i,
                                0.001
                              );
                          }
                          if (
                            I ===
                            n("WAWebMediaMmsV4Upload").UploadMediaResultKind
                              .CANCELLATION
                          )
                            return (
                              n("WALogger")
                                .LOG(p())
                                .devConsole({
                                  result: a,
                                  uploadStage: t,
                                  error: e,
                                }),
                              null == (i = E.wamMessageSendReporter) ||
                                i.postFailure({
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
                              .WARN(W(), a, t, I, String(e))
                              .devConsole(e),
                            null != t)
                          )
                            switch (t) {
                              case n("WAWebMediaTypes").UploadStage.NEED_UPLOAD:
                              case n("WAWebMediaTypes").UploadStage
                                .ERROR_TOO_LARGE:
                                return { messageSendResult: _(E) };
                              case n("WAWebMediaTypes").UploadStage
                                .ERROR_MISSING:
                                return {
                                  messageSendResult: n(
                                    "WAWebSendMsgResultAction"
                                  ).SendMsgResult.ERROR_EXPIRED,
                                };
                            }
                          return I ===
                            n("WAWebMediaMmsV4Upload").UploadMediaResultKind
                              .ERROR
                            ? { messageSendResult: _(E) }
                            : null != a
                            ? a
                            : (E &&
                                n("WAWebMmsMediaTypes").getMsgMediaType(E) ===
                                  n("WAWebMediaTypes").OUTWARD_TYPES.STICKER &&
                                n("WALogger")
                                  .ERROR(u())
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
                      var i = this;
                      (this._baseType = e),
                        (this._mediaData = new (a("WAWebMediaData"))({
                          mediaStage:
                            n("WAWebMediaTypes").MediaDataStage.PREPARING,
                        })),
                        (this._prepwork = t.then(
                          function (e) {
                            if ((i._mediaData.set(e), !e.filehash))
                              return (
                                e.mediaBlob ||
                                  n("WALogger")
                                    .ERROR(h())
                                    .sendLogs("media-fault: no hash or blob"),
                                n("WAWebCryptoCalculateFilehash")
                                  .calculateFilehashFromBlob(e.mediaBlob)
                                  .then(function (e) {
                                    i._mediaData.filehash = e;
                                  })
                              );
                          },
                          function (e) {
                            throw (
                              ((i._mediaData.mediaStage =
                                n(
                                  "WAWebMediaTypes"
                                ).MediaDataStage.ERROR_UNSUPPORTED),
                              e)
                            );
                          }
                        ));
                    }
                    var i = e.prototype;
                    return (
                      (i.sendToChat = function (e, t, a) {
                        return n("WAPromiseCallSync").promiseCallSync(
                          y,
                          null,
                          this,
                          e,
                          t,
                          a
                        );
                      }),
                      (i.waitForPrep = (function () {
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
                    (o.MediaPrep = e),
                    (o.sendMediaMsgToChat = y);
                },
                98
              ),
                (window.require("__debug").modulesMap[
                  "WAWebPrivacySettingsDrawer.react"
                ] = null),
                __d(
                  "WAWebPrivacySettingsDrawer.react",
                  [
                    "fbt",
                    "WALogger",
                    "WANullthrows",
                    "WAWebAccountSyncJob",
                    "WAWebApiPrivacyDisallowedList",
                    "WAWebBlocklistCollection",
                    "WAWebCheckBox.react",
                    "WAWebChevronLeftIcon",
                    "WAWebChevronRightIcon",
                    "WAWebCmd",
                    "WAWebContactCollection",
                    "WAWebDisableLinkPreviewsAction",
                    "WAWebDisableLinkPreviewsGatingUtils",
                    "WAWebDrawer.react",
                    "WAWebDrawerBody.react",
                    "WAWebDrawerHeader.react",
                    "WAWebDrawerItem.react",
                    "WAWebDrawerSection.react",
                    "WAWebEphemeralityDurations",
                    "WAWebExternalLink.react",
                    "WAWebFaqUrl",
                    "WAWebFbtCommon",
                    "WAWebFbtIntlList",
                    "WAWebL10N",
                    "WAWebLoadingDrawer.react",
                    "WAWebMiscGatingUtils",
                    "WAWebPrivacySettings",
                    "WAWebPrivacySettingsClickWamEvent",
                    "WAWebScreenLockTimerOptions",
                    "WAWebSetPrivacyForOneCategoryAction",
                    "WAWebSettingsFBT",
                    "WAWebStatusSendGatingUtils",
                    "WAWebStatusSendUtils",
                    "WAWebTextStatusGatingUtils",
                    "WAWebToast.react",
                    "WAWebToastManager",
                    "WAWebTopMenuRedesignGatingUtils",
                    "WAWebUserPrefsGeneral",
                    "WAWebUserPrefsScreenLock",
                    "WAWebWamEnumPrivacyControlEntryPointType",
                    "WAWebWamEnumPrivacyControlItemType",
                    "asyncToGeneratorRuntime",
                    "err",
                    "gkx",
                    "react",
                    "useWAWebListener",
                    "useWAWebModelValues",
                    "useWAWebStatusPrivacySettingConfig",
                  ],
                  function (e, t, a, n, i, r, o, s) {
                    var l;
                    function c() {
                      var e = babelHelpers.taggedTemplateLiteralLoose([
                        "privacy_settings_drawer: set readreceipts failed ",
                        "",
                      ]);
                      return (
                        (c = function () {
                          return e;
                        }),
                        e
                      );
                    }
                    function d() {
                      var e = babelHelpers.taggedTemplateLiteralLoose([
                        "privacy_settings_drawer: get privacy settings failed ",
                        "",
                      ]);
                      return (
                        (d = function () {
                          return e;
                        }),
                        e
                      );
                    }
                    i = n("react");
                    var u = l || (l = a("react")),
                      W = i.useEffect,
                      p = i.useState,
                      m = {
                        drawerTitle: {
                          paddingTop: "x134lwj9",
                          paddingEnd: "x4uap5",
                          paddingBottom: "x1i2zvha",
                          paddingStart: "xkhd6sd",
                          $$css: !0,
                        },
                        chevronIcon: {
                          color: "x16zc8z2",
                          height: "x17rw0jw",
                          $$css: !0,
                        },
                      };
                    function b(e, t) {
                      new (n(
                        "WAWebPrivacySettingsClickWamEvent"
                      ).PrivacySettingsClickWamEvent)({
                        privacyControlItem: e,
                        privacyControlEntryPoint: t,
                      }).commit();
                    }
                    function e(e, i) {
                      var r,
                        o = e.onClose,
                        l = e.onOpenBlockedContacts,
                        c = e.onOpenCallsDrawer,
                        h = e.onOpenEphemeralityDrawer,
                        y = e.onOpenScreenLockDrawer,
                        v =
                          (e.onOpenStatusPrivacySettingDrawer,
                          e.onOpenVisibilityEditDrawer),
                        C = (e = p(function () {
                          return g(
                            n("WAWebUserPrefsGeneral").getUserPrivacySettings()
                          );
                        }))[0],
                        w = e[1],
                        S = (e = p({
                          about: null,
                          groupadd: null,
                          last: null,
                          profile: null,
                        }))[0],
                        L = e[1];
                      e = (e = n(
                        "useWAWebStatusPrivacySettingConfig"
                      ).useWAWebStatusPrivacySettingConfig())
                        .statusPostingPrivacyConfig;
                      var T = a("WANullthrows")(
                        n(
                          "WAWebContactCollection"
                        ).ContactCollection.getMeContact()
                      );
                      function P(e) {
                        var t = g(e.privacySettings);
                        if (null == t)
                          throw a("err")(
                            "Incomplete privacy settings: " +
                              Object.keys(
                                n(
                                  "WAWebUserPrefsGeneral"
                                ).getUserPrivacySettings()
                              ).join(", ")
                          );
                        w(t),
                          L(
                            n(
                              "WAWebApiPrivacyDisallowedList"
                            ).disallowedRowsToLists(e.privacyDisallowedRows)
                          );
                      }
                      (T = (T = n("useWAWebModelValues").useModelValues(T, [
                        "disappearingModeDuration",
                      ])).disappearingModeDuration),
                        W(function () {
                          var e = new AbortController();
                          return (
                            null == C &&
                              t("asyncToGeneratorRuntime").asyncToGenerator(
                                function* () {
                                  try {
                                    var t = yield n(
                                      "WAWebAccountSyncJob"
                                    ).updatePrivacySettings();
                                    if (e.signal.aborted) return;
                                    P(t);
                                  } catch (e) {
                                    e instanceof Error &&
                                      n("WALogger")
                                        .ERROR(d(), e.stack)
                                        .sendLogs(
                                          "privacy_settings_drawer: get privacy settings failed"
                                        ),
                                      o(),
                                      n("WAWebToastManager").ToastManager.open(
                                        u.jsx(n("WAWebToast.react").Toast, {
                                          msg: s._(
                                            "__JHASH__FZvj53aL_-d__JHASH__"
                                          ),
                                        })
                                      );
                                  }
                                }
                              )(),
                            function () {
                              return e.abort();
                            }
                          );
                        }, []),
                        W(function () {
                          var e = new AbortController();
                          return (
                            t("asyncToGeneratorRuntime").asyncToGenerator(
                              function* () {
                                var t = yield n(
                                  "WAWebApiPrivacyDisallowedList"
                                ).queryDisallowedLists();
                                e.signal.aborted || L(t);
                              }
                            )(),
                            function () {
                              return e.abort();
                            }
                          );
                        }, []),
                        n("useWAWebListener").useListener(
                          n("WAWebCmd").Cmd,
                          "account_sync_for_privacy",
                          function (e) {
                            P(e);
                          }
                        );
                      var M = s._("__JHASH__zfB6j45zrdG__JHASH__");
                      if (!C)
                        return u.jsx(a("WAWebLoadingDrawer.react"), {
                          title: M,
                          error: !1,
                        });
                      var E = n(
                          "WAWebMiscGatingUtils"
                        ).isDefaultDisappearingMessagesEnabled(),
                        I = C.lastSeen,
                        U = C.online,
                        R = C.profilePicture,
                        O = C.about,
                        x = C.groupAdd,
                        k = C.readReceipts,
                        N = C.disableLinkPreviews;
                      (r = [
                        _(
                          I,
                          null == (r = S.last)
                            ? void 0
                            : r.disallowedList.length
                        ),
                      ]),
                        I !== n("WAWebPrivacySettings").VISIBILITY.all &&
                          U ===
                            n("WAWebPrivacySettings").ONLINE_VISIBILITY.all &&
                          r.push(_(U)),
                        (I = a("WAWebFbtIntlList")(
                          r,
                          a("WAWebFbtIntlList").CONJUNCTIONS.NONE,
                          a("WAWebFbtIntlList").DELIMITERS.COMMA
                        )),
                        (U = u.jsx(A, {
                          title:
                            n(
                              "WAWebSettingsFBT"
                            ).privacyLastSeenOnlineEnabledTitle(),
                          onClick: function () {
                            v("lastSeen"),
                              b(
                                n("WAWebWamEnumPrivacyControlItemType")
                                  .PRIVACY_CONTROL_ITEM_TYPE
                                  .LAST_SEEN_AND_ONLINE,
                                n("WAWebWamEnumPrivacyControlEntryPointType")
                                  .PRIVACY_CONTROL_ENTRY_POINT_TYPE
                                  .PRIVACY_SETTINGS
                              );
                          },
                          testid: void 0,
                          children: u.jsxs("span", { children: [" ", I] }),
                        })),
                        (r = n(
                          "WAWebBlocklistCollection"
                        ).BlocklistCollection.dedupedList().length),
                        (I = s._("__JHASH__x5Hlana7FHU__JHASH__"));
                      var D = s._("__JHASH__i7c6q_KKlS-__JHASH__");
                      e = null;
                      var G = (function () {
                        var e = t("asyncToGeneratorRuntime").asyncToGenerator(
                          function* (e) {
                            w(
                              babelHelpers.extends({}, C, {
                                disableLinkPreviews: e,
                              })
                            ),
                              n(
                                "WAWebDisableLinkPreviewsAction"
                              ).setDisableLinkPreviews(e);
                          }
                        );
                        return function (t) {
                          return e.apply(this, arguments);
                        };
                      })();
                      return u.jsxs(a("WAWebDrawer.react"), {
                        ref: i,
                        theme: "striped",
                        testid: void 0,
                        children: [
                          u.jsx(n("WAWebDrawerHeader.react").DrawerHeader, {
                            testid: void 0,
                            title: M,
                            onBack: o,
                            type: n(
                              "WAWebTopMenuRedesignGatingUtils"
                            ).topMenuRedesignEnabled()
                              ? n("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE
                                  .SMALL
                              : n("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE
                                  .LARGE,
                            focusBackOrCancel: !0,
                          }),
                          u.jsxs(a("WAWebDrawerBody.react"), {
                            children: [
                              u.jsxs(a("WAWebDrawerSection.react"), {
                                title:
                                  n(
                                    "WAWebSettingsFBT"
                                  ).privacyPersonalInfoHeaderTitle(),
                                titleXStyle: m.drawerTitle,
                                theme: "padding-no-vertical",
                                animation: !1,
                                ellipsify: !1,
                                children: [
                                  U,
                                  u.jsx(A, {
                                    title:
                                      n(
                                        "WAWebSettingsFBT"
                                      ).privacyProfilePhotoTitle(),
                                    onClick: function () {
                                      v("profilePicture"),
                                        b(
                                          n(
                                            "WAWebWamEnumPrivacyControlItemType"
                                          ).PRIVACY_CONTROL_ITEM_TYPE
                                            .PROFILE_PHOTO,
                                          n(
                                            "WAWebWamEnumPrivacyControlEntryPointType"
                                          ).PRIVACY_CONTROL_ENTRY_POINT_TYPE
                                            .PRIVACY_SETTINGS
                                        );
                                    },
                                    testid: void 0,
                                    children: u.jsx("span", {
                                      children: _(
                                        R,
                                        null == (i = S.profile)
                                          ? void 0
                                          : i.disallowedList.length
                                      ),
                                    }),
                                  }),
                                  u.jsx(A, {
                                    title: n(
                                      "WAWebTextStatusGatingUtils"
                                    ).receiveTextStatusEnabled()
                                      ? n(
                                          "WAWebSettingsFBT"
                                        ).privacyTextStatusTitle()
                                      : n(
                                          "WAWebSettingsFBT"
                                        ).privacyAboutTitle(),
                                    onClick: function () {
                                      v("about"),
                                        b(
                                          n(
                                            "WAWebWamEnumPrivacyControlItemType"
                                          ).PRIVACY_CONTROL_ITEM_TYPE.ABOUT,
                                          n(
                                            "WAWebWamEnumPrivacyControlEntryPointType"
                                          ).PRIVACY_CONTROL_ENTRY_POINT_TYPE
                                            .PRIVACY_SETTINGS
                                        );
                                    },
                                    testid: void 0,
                                    children: u.jsx("span", {
                                      children: _(
                                        O,
                                        null == (M = S.about)
                                          ? void 0
                                          : M.disallowedList.length
                                      ),
                                    }),
                                  }),
                                  e,
                                  u.jsx(a("WAWebDrawerItem.react"), {
                                    title:
                                      n(
                                        "WAWebSettingsFBT"
                                      ).privacyReadReceiptsTitle(),
                                    tabIndex: -1,
                                    icon: u.jsx("div", {
                                      className: "x1849jeq x78zum5 xl56j7k",
                                      children: u.jsx(
                                        n("WAWebCheckBox.react").CheckBox,
                                        {
                                          checked:
                                            k ===
                                            n("WAWebPrivacySettings").ALL_NONE
                                              .all,
                                          onChange: function (e) {},
                                          ariaLabel: I,
                                        }
                                      ),
                                    }),
                                    theme: "privacy",
                                    isLastItem: !0,
                                    onClick: function () {
                                      b(
                                        n("WAWebWamEnumPrivacyControlItemType")
                                          .PRIVACY_CONTROL_ITEM_TYPE
                                          .READ_RECEIPT,
                                        n(
                                          "WAWebWamEnumPrivacyControlEntryPointType"
                                        ).PRIVACY_CONTROL_ENTRY_POINT_TYPE
                                          .PRIVACY_SETTINGS
                                      ),
                                        (function (e, t, a) {
                                          f.apply(this, arguments);
                                        })(C, w, k);
                                    },
                                    testid: void 0,
                                    children: u.jsx("span", { children: I }),
                                  }),
                                ],
                              }),
                              E &&
                                u.jsx(a("WAWebDrawerSection.react"), {
                                  theme: "padding-no-vertical",
                                  title: s._("__JHASH__605pD75h6Wa__JHASH__"),
                                  titleXStyle: m.drawerTitle,
                                  animation: !1,
                                  children: u.jsx(A, {
                                    title:
                                      n("WAWebSettingsFBT").privacyDDMTitle(),
                                    onClick: function () {
                                      b(
                                        n("WAWebWamEnumPrivacyControlItemType")
                                          .PRIVACY_CONTROL_ITEM_TYPE.DDM_TIMER,
                                        n(
                                          "WAWebWamEnumPrivacyControlEntryPointType"
                                        ).PRIVACY_CONTROL_ENTRY_POINT_TYPE
                                          .PRIVACY_SETTINGS
                                      ),
                                        h();
                                    },
                                    isLastItem: !0,
                                    testid: void 0,
                                    children: u.jsx("span", {
                                      "data-testid": void 0,
                                      children: n(
                                        "WAWebEphemeralityDurations"
                                      ).durationToLabel(T),
                                    }),
                                  }),
                                }),
                              n(
                                "WAWebDisableLinkPreviewsGatingUtils"
                              ).canDisableLinkPreviews()
                                ? u.jsx(a("WAWebDrawerSection.react"), {
                                    theme: "padding-no-vertical",
                                    title: s._("__JHASH__xKyUyL3cmP8__JHASH__"),
                                    titleXStyle: m.drawerTitle,
                                    animation: !1,
                                    children: u.jsx(
                                      a("WAWebDrawerItem.react"),
                                      {
                                        title:
                                          n(
                                            "WAWebSettingsFBT"
                                          ).privacyLinkPreviewsTitle(),
                                        tabIndex: -1,
                                        icon: u.jsx("div", {
                                          className: "x1849jeq x78zum5 xl56j7k",
                                          children: u.jsx(
                                            n("WAWebCheckBox.react").CheckBox,
                                            {
                                              checked: N,
                                              onChange: function (e) {},
                                              ariaLabel: D,
                                            }
                                          ),
                                        }),
                                        theme: "privacy",
                                        isLastItem: !0,
                                        onClick: function () {
                                          G(!N);
                                        },
                                        testid: void 0,
                                        children: u.jsxs("span", {
                                          children: [
                                            D,
                                            " ",
                                            u.jsx(
                                              n("WAWebExternalLink.react")
                                                .ExternalLink,
                                              {
                                                href: n(
                                                  "WAWebFaqUrl"
                                                ).getDisableLinkPreviewsFaqUrl(),
                                                children:
                                                  a("WAWebFbtCommon")(
                                                    "Learn more"
                                                  ),
                                              }
                                            ),
                                          ],
                                        }),
                                      }
                                    ),
                                  })
                                : null,
                              u.jsxs(a("WAWebDrawerSection.react"), {
                                theme: E ? "padding" : "padding-no-vertical",
                                animation: !1,
                                children: [
                                  u.jsx(A, {
                                    title:
                                      n(
                                        "WAWebSettingsFBT"
                                      ).privacyGroupsTitle(),
                                    onClick: function () {
                                      b(
                                        n("WAWebWamEnumPrivacyControlItemType")
                                          .PRIVACY_CONTROL_ITEM_TYPE.GROUPS,
                                        n(
                                          "WAWebWamEnumPrivacyControlEntryPointType"
                                        ).PRIVACY_CONTROL_ENTRY_POINT_TYPE
                                          .PRIVACY_SETTINGS
                                      ),
                                        v("groupAdd");
                                    },
                                    testid: void 0,
                                    children: u.jsx("span", {
                                      children: _(
                                        x,
                                        null == (U = S.groupadd)
                                          ? void 0
                                          : U.disallowedList.length
                                      ),
                                    }),
                                  }),
                                  a("gkx")("26255") &&
                                    u.jsx(A, {
                                      title: n("WAWebSettingsFBT").callsTitle(),
                                      onClick: function () {
                                        c();
                                      },
                                      testid: void 0,
                                      children: u.jsx("span", {
                                        children:
                                          n(
                                            "WAWebSettingsFBT"
                                          ).silenceUnknownCallsTitle(),
                                      }),
                                    }),
                                  u.jsx(A, {
                                    title:
                                      n(
                                        "WAWebSettingsFBT"
                                      ).privacyBlockedTitle(),
                                    isLastItem: !n(
                                      "WAWebMiscGatingUtils"
                                    ).screenLockFeatureSupported(),
                                    onClick: function () {
                                      b(
                                        n("WAWebWamEnumPrivacyControlItemType")
                                          .PRIVACY_CONTROL_ITEM_TYPE.BLOCKED,
                                        n(
                                          "WAWebWamEnumPrivacyControlEntryPointType"
                                        ).PRIVACY_CONTROL_ENTRY_POINT_TYPE
                                          .PRIVACY_SETTINGS
                                      ),
                                        l();
                                    },
                                    testid: void 0,
                                    children: u.jsx("span", {
                                      children:
                                        0 === r
                                          ? s._("__JHASH__qtyc0fycakq__JHASH__")
                                          : r,
                                    }),
                                  }),
                                  n(
                                    "WAWebMiscGatingUtils"
                                  ).screenLockFeatureSupported() &&
                                    u.jsx(A, {
                                      title:
                                        n(
                                          "WAWebSettingsFBT"
                                        ).privacyScreenlockTitle(),
                                      isLastItem: !0,
                                      onClick: function () {
                                        b(
                                          n(
                                            "WAWebWamEnumPrivacyControlItemType"
                                          ).PRIVACY_CONTROL_ITEM_TYPE
                                            .SCREEN_LOCK,
                                          n(
                                            "WAWebWamEnumPrivacyControlEntryPointType"
                                          ).PRIVACY_CONTROL_ENTRY_POINT_TYPE
                                            .PRIVACY_SETTINGS
                                        ),
                                          y();
                                      },
                                      testid: void 0,
                                      children: n(
                                        "WAWebScreenLockTimerOptions"
                                      ).getScreenLockAutoTimerLabelForSummary(
                                        n(
                                          "WAWebUserPrefsScreenLock"
                                        ).getScreenLockDurationInSeconds()
                                      ),
                                    }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      });
                    }
                    (i = u.forwardRef(e)),
                      (e.displayName = e.name + " [from " + r.id + "]"),
                      (e = i);
                    var h = function () {
                      return a("WAWebL10N").isRTL()
                        ? u.jsx(n("WAWebChevronLeftIcon").ChevronLeftIcon, {
                            iconXstyle: m.chevronIcon,
                          })
                        : u.jsx(n("WAWebChevronRightIcon").ChevronRightIcon, {
                            iconXstyle: m.chevronIcon,
                          });
                    };
                    function A(e) {
                      var t = e.children,
                        n = e.icon,
                        i = e.isLastItem,
                        r = e.onClick,
                        o = e.tabIndex;
                      o = void 0 === o ? 0 : o;
                      var s = e.testid;
                      return (
                        (s = e.title),
                        (e = null != n ? n : h()),
                        u.jsx(a("WAWebDrawerItem.react"), {
                          title: s,
                          theme: "privacy",
                          icon: e,
                          onClick: r,
                          isLastItem: i,
                          tabIndex: o,
                          testid: void 0,
                          children: t,
                        })
                      );
                    }
                    function g(e) {
                      var t = e.about,
                        a = e.groupAdd,
                        n = e.lastSeen,
                        i = e.online;
                      i = void 0 === i ? "all" : i;
                      var r = e.profilePicture,
                        o = e.readReceipts;
                      if (
                        ((e = void 0 !== (e = e.disableLinkPreviews) && e),
                        null != t &&
                          null != a &&
                          null != n &&
                          null != r &&
                          null != o)
                      )
                        return {
                          about: t,
                          groupAdd: a,
                          lastSeen: n,
                          online: i,
                          profilePicture: r,
                          readReceipts: o,
                          disableLinkPreviews: e,
                        };
                    }
                    function _(e, t) {
                      switch (e) {
                        case n("WAWebPrivacySettings").VISIBILITY.all:
                          return s._("__JHASH__V_0DIA-3ES8__JHASH__");
                        case n("WAWebPrivacySettings").VISIBILITY.contacts:
                          return s._("__JHASH__R3PW7ZJPlwV__JHASH__");
                        case n("WAWebPrivacySettings").VISIBILITY
                          .contact_blacklist:
                          return null == t
                            ? ""
                            : s._("__JHASH__EcxUDeg4ZpC__JHASH__", [
                                s._plural(t, "count"),
                              ]);
                        case n("WAWebPrivacySettings").VISIBILITY.none:
                          return s._("__JHASH__UfItQ5G0pTc__JHASH__");
                        case n("WAWebPrivacySettings").ONLINE_VISIBILITY
                          .match_last_seen:
                          return s._("__JHASH__SrK10eDMnJH__JHASH__");
                        default:
                          return "";
                      }
                    }
                    function f() {
                      return (
                        (f = t("asyncToGeneratorRuntime").asyncToGenerator(
                          function* (e, t, a) {
                            (a =
                              a === n("WAWebPrivacySettings").ALL_NONE.all
                                ? n("WAWebPrivacySettings").ALL_NONE.none
                                : n("WAWebPrivacySettings").ALL_NONE.all),
                              t(
                                babelHelpers.extends({}, e, { readReceipts: a })
                              );
                            try {
                              a === n("WAWebPrivacySettings").ALL_NONE.none
                                ? yield n(
                                    "WAWebSetPrivacyForOneCategoryAction"
                                  ).setPrivacyForOneCategory({
                                    name: "readreceipts",
                                    value: "none",
                                  })
                                : yield n(
                                    "WAWebSetPrivacyForOneCategoryAction"
                                  ).setPrivacyForOneCategory({
                                    name: "readreceipts",
                                    value: "all",
                                  });
                            } catch (e) {
                              e instanceof Error &&
                                n("WALogger")
                                  .WARN(c(), e.stack)
                                  .sendLogs(
                                    "privacy_settings_drawer: set readreceipts failed"
                                  ),
                                n("WAWebToastManager").ToastManager.open(
                                  u.jsx(n("WAWebToast.react").Toast, {
                                    msg: s._("__JHASH__A3nyctjYpYJ__JHASH__"),
                                  })
                                );
                            }
                          }
                        )),
                        f.apply(this, arguments)
                      );
                    }
                    (A.displayName = A.name + " [from " + r.id + "]"),
                      (o.default = e);
                  },
                  226
                ),
                __d(
                  "WAWebPrivacySettingsDrawer.react",
                  [
                    "fbt",
                    "WALogger",
                    "WANullthrows",
                    "WAWebAccountSyncJob",
                    "WAWebApiPrivacyDisallowedList",
                    "WAWebBlocklistCollection",
                    "WAWebCheckBox.react",
                    "WAWebChevronLeftIcon",
                    "WAWebChevronRightIcon",
                    "WAWebCmd",
                    "WAWebContactCollection",
                    "WAWebDrawer.react",
                    "WAWebDrawerBody.react",
                    "WAWebDrawerHeader.react",
                    "WAWebDrawerItem.react",
                    "WAWebDrawerSection.react",
                    "WAWebEphemeralityDurations",
                    "WAWebFbtIntlList",
                    "WAWebL10N",
                    "WAWebLoadingDrawer.react",
                    "WAWebMiscGatingUtils",
                    "WAWebPrivacyGatingUtils",
                    "WAWebPrivacySettings",
                    "WAWebPrivacySettingsClickWamEvent",
                    "WAWebScreenLockTimerOptions",
                    "WAWebStatusSendGatingUtils",
                    "WAWebSendStatusUtils",
                    "WAWebSetPrivacyForOneCategoryAction",
                    "WAWebSettingsFBT",
                    "WAWebTextStatusGatingUtils",
                    "WAWebToast.react",
                    "WAWebToastManager",
                    "WAWebTopMenuRedesignGatingUtils",
                    "WAWebUserPrefsGeneral",
                    "WAWebUserPrefsScreenLock",
                    "WAWebWamEnumPrivacyControlEntryPointType",
                    "WAWebWamEnumPrivacyControlItemType",
                    "asyncToGeneratorRuntime",
                    "err",
                    "react",
                    "useWAWebListener",
                    "useWAWebModelValues",
                    "useWAWebStatusPrivacySettingConfig",
                  ],
                  function (e, t, a, n, i, r, o, s) {
                    var l;
                    function c() {
                      var e = babelHelpers.taggedTemplateLiteralLoose([
                        "privacy_settings_drawer: set readreceipts failed ",
                        "",
                      ]);
                      return (
                        (c = function () {
                          return e;
                        }),
                        e
                      );
                    }
                    function d() {
                      var e = babelHelpers.taggedTemplateLiteralLoose([
                        "privacy_settings_drawer: get privacy settings failed ",
                        "",
                      ]);
                      return (
                        (d = function () {
                          return e;
                        }),
                        e
                      );
                    }
                    i = n("react");
                    var u = l || (l = a("react"));
                    i.forwardRef;
                    var W = i.useEffect,
                      p = i.useState;
                    i = u.forwardRef(e);
                    var m = {
                      drawerTitle: {
                        paddingTop: "x134lwj9",
                        paddingEnd: "x4uap5",
                        paddingBottom: "x1i2zvha",
                        paddingStart: "xkhd6sd",
                        $$css: !0,
                      },
                      chevronIcon: {
                        color: "x16zc8z2",
                        height: "x17rw0jw",
                        $$css: !0,
                      },
                      readReceiptsCheckBoxWrapper: {
                        width: "x1849jeq",
                        display: "x78zum5",
                        justifyContent: "xl56j7k",
                        $$css: !0,
                      },
                    };
                    function b(e, t) {
                      new (n(
                        "WAWebPrivacySettingsClickWamEvent"
                      ).PrivacySettingsClickWamEvent)({
                        privacyControlItem: e,
                        privacyControlEntryPoint: t,
                      }).commit();
                    }
                    function e(e, i) {
                      var r,
                        o = e.onClose,
                        l = e.onOpenBlockedContacts,
                        c = e.onOpenCallsDrawer,
                        h = e.onOpenEphemeralityDrawer,
                        y = e.onOpenScreenLockDrawer,
                        v =
                          (e.onOpenStatusPrivacySettingDrawer,
                          e.onOpenVisibilityEditDrawer),
                        C = (e = p(function () {
                          return g(
                            n("WAWebUserPrefsGeneral").getUserPrivacySettings()
                          );
                        }))[0],
                        w = e[1],
                        S = (e = p({
                          about: null,
                          groupadd: null,
                          last: null,
                          profile: null,
                        }))[0],
                        L = e[1];
                      e = (e = n(
                        "useWAWebStatusPrivacySettingConfig"
                      ).useWAWebStatusPrivacySettingConfig())
                        .statusPostingPrivacyConfig;
                      var T = a("WANullthrows")(
                        n(
                          "WAWebContactCollection"
                        ).ContactCollection.getMeContact()
                      );
                      function P(e) {
                        var t = g(e.privacySettings);
                        if (null == t)
                          throw a("err")(
                            "Incomplete privacy settings: " +
                              Object.keys(
                                n(
                                  "WAWebUserPrefsGeneral"
                                ).getUserPrivacySettings()
                              ).join(", ")
                          );
                        w(t),
                          L(
                            n(
                              "WAWebApiPrivacyDisallowedList"
                            ).disallowedRowsToLists(e.privacyDisallowedRows)
                          );
                      }
                      (T = (T = n("useWAWebModelValues").useModelValues(T, [
                        "disappearingModeDuration",
                      ])).disappearingModeDuration),
                        W(function () {
                          var e = new AbortController();
                          return (
                            null == C &&
                              t("asyncToGeneratorRuntime").asyncToGenerator(
                                function* () {
                                  try {
                                    var t = yield n(
                                      "WAWebAccountSyncJob"
                                    ).updatePrivacySettings();
                                    if (e.signal.aborted) return;
                                    P(t);
                                  } catch (e) {
                                    e instanceof Error &&
                                      n("WALogger")
                                        .ERROR(d(), e.stack)
                                        .sendLogs(
                                          "privacy_settings_drawer: get privacy settings failed"
                                        ),
                                      o(),
                                      n("WAWebToastManager").ToastManager.open(
                                        u.jsx(n("WAWebToast.react").Toast, {
                                          msg: s._(
                                            "__JHASH__FZvj53aL_-d__JHASH__"
                                          ),
                                        })
                                      );
                                  }
                                }
                              )(),
                            function () {
                              return e.abort();
                            }
                          );
                        }, []),
                        W(function () {
                          var e = new AbortController();
                          return (
                            t("asyncToGeneratorRuntime").asyncToGenerator(
                              function* () {
                                var t = yield n(
                                  "WAWebApiPrivacyDisallowedList"
                                ).queryDisallowedLists();
                                e.signal.aborted || L(t);
                              }
                            )(),
                            function () {
                              return e.abort();
                            }
                          );
                        }, []),
                        n("useWAWebListener").useListener(
                          n("WAWebCmd").Cmd,
                          "account_sync_for_privacy",
                          function (e) {
                            P(e);
                          }
                        );
                      var M = s._("__JHASH__zfB6j45zrdG__JHASH__");
                      if (!C)
                        return u.jsx(a("WAWebLoadingDrawer.react"), {
                          title: M,
                          error: !1,
                        });
                      var E = n(
                          "WAWebMiscGatingUtils"
                        ).isDefaultDisappearingMessagesEnabled(),
                        I = C.lastSeen,
                        U = C.online,
                        R = C.profilePicture,
                        O = C.about,
                        x = C.groupAdd,
                        k = C.readReceipts;
                      return (
                        (r = [
                          _(
                            I,
                            null == (r = S.last)
                              ? void 0
                              : r.disallowedList.length
                          ),
                        ]),
                        I !== n("WAWebPrivacySettings").VISIBILITY.all &&
                          U ===
                            n("WAWebPrivacySettings").ONLINE_VISIBILITY.all &&
                          r.push(_(U)),
                        (I = a("WAWebFbtIntlList")(
                          r,
                          a("WAWebFbtIntlList").CONJUNCTIONS.NONE,
                          a("WAWebFbtIntlList").DELIMITERS.COMMA
                        )),
                        (U = u.jsx(A, {
                          title:
                            n(
                              "WAWebSettingsFBT"
                            ).privacyLastSeenOnlineEnabledTitle(),
                          onClick: function () {
                            v("lastSeen"),
                              b(
                                n("WAWebWamEnumPrivacyControlItemType")
                                  .PRIVACY_CONTROL_ITEM_TYPE
                                  .LAST_SEEN_AND_ONLINE,
                                n("WAWebWamEnumPrivacyControlEntryPointType")
                                  .PRIVACY_CONTROL_ENTRY_POINT_TYPE
                                  .PRIVACY_SETTINGS
                              );
                          },
                          testid: void 0,
                          children: u.jsxs("span", { children: [" ", I] }),
                        })),
                        (r = n(
                          "WAWebBlocklistCollection"
                        ).BlocklistCollection.dedupedList().length),
                        (I = s._("__JHASH__gpKRogBOeMm__JHASH__")),
                        (e = null),
                        u.jsxs(a("WAWebDrawer.react"), {
                          ref: i,
                          theme: "striped",
                          testid: void 0,
                          children: [
                            u.jsx(n("WAWebDrawerHeader.react").DrawerHeader, {
                              testid: void 0,
                              title: M,
                              onBack: o,
                              type: n(
                                "WAWebTopMenuRedesignGatingUtils"
                              ).topMenuRedesignEnabled()
                                ? n("WAWebDrawerHeader.react")
                                    .DRAWER_HEADER_TYPE.SMALL
                                : n("WAWebDrawerHeader.react")
                                    .DRAWER_HEADER_TYPE.LARGE,
                              focusBackOrCancel: !0,
                            }),
                            u.jsxs(a("WAWebDrawerBody.react"), {
                              children: [
                                u.jsxs(a("WAWebDrawerSection.react"), {
                                  title:
                                    n(
                                      "WAWebSettingsFBT"
                                    ).privacyPersonalInfoHeaderTitle(),
                                  titleXStyle: m.drawerTitle,
                                  theme: "padding-no-vertical",
                                  animation: !1,
                                  ellipsify: !1,
                                  children: [
                                    U,
                                    u.jsx(A, {
                                      title:
                                        n(
                                          "WAWebSettingsFBT"
                                        ).privacyProfilePhotoTitle(),
                                      onClick: function () {
                                        v("profilePicture"),
                                          b(
                                            n(
                                              "WAWebWamEnumPrivacyControlItemType"
                                            ).PRIVACY_CONTROL_ITEM_TYPE
                                              .PROFILE_PHOTO,
                                            n(
                                              "WAWebWamEnumPrivacyControlEntryPointType"
                                            ).PRIVACY_CONTROL_ENTRY_POINT_TYPE
                                              .PRIVACY_SETTINGS
                                          );
                                      },
                                      testid: void 0,
                                      children: u.jsx("span", {
                                        children: _(
                                          R,
                                          null == (i = S.profile)
                                            ? void 0
                                            : i.disallowedList.length
                                        ),
                                      }),
                                    }),
                                    u.jsx(A, {
                                      title: n(
                                        "WAWebTextStatusGatingUtils"
                                      ).receiveTextStatusEnabled()
                                        ? n(
                                            "WAWebSettingsFBT"
                                          ).privacyTextStatusTitle()
                                        : n(
                                            "WAWebSettingsFBT"
                                          ).privacyAboutTitle(),
                                      onClick: function () {
                                        v("about"),
                                          b(
                                            n(
                                              "WAWebWamEnumPrivacyControlItemType"
                                            ).PRIVACY_CONTROL_ITEM_TYPE.ABOUT,
                                            n(
                                              "WAWebWamEnumPrivacyControlEntryPointType"
                                            ).PRIVACY_CONTROL_ENTRY_POINT_TYPE
                                              .PRIVACY_SETTINGS
                                          );
                                      },
                                      testid: void 0,
                                      children: u.jsx("span", {
                                        children: _(
                                          O,
                                          null == (M = S.about)
                                            ? void 0
                                            : M.disallowedList.length
                                        ),
                                      }),
                                    }),
                                    e,
                                    u.jsx(a("WAWebDrawerItem.react"), {
                                      title:
                                        n(
                                          "WAWebSettingsFBT"
                                        ).privacyReadReceiptsTitle(),
                                      tabIndex: -1,
                                      icon: u.jsx("div", {
                                        className: "x1849jeq x78zum5 xl56j7k",
                                        children: u.jsx(
                                          n("WAWebCheckBox.react").CheckBox,
                                          {
                                            checked:
                                              k ===
                                              n("WAWebPrivacySettings").ALL_NONE
                                                .all,
                                            onChange: function (e) {},
                                            ariaLabel: I,
                                          }
                                        ),
                                      }),
                                      theme: "privacy",
                                      isLastItem: !0,
                                      onClick: function () {
                                        b(
                                          n(
                                            "WAWebWamEnumPrivacyControlItemType"
                                          ).PRIVACY_CONTROL_ITEM_TYPE
                                            .READ_RECEIPT,
                                          n(
                                            "WAWebWamEnumPrivacyControlEntryPointType"
                                          ).PRIVACY_CONTROL_ENTRY_POINT_TYPE
                                            .PRIVACY_SETTINGS
                                        ),
                                          (function (e, t, a) {
                                            f.apply(this, arguments);
                                          })(C, w, k);
                                      },
                                      testid: void 0,
                                      children: u.jsx("span", { children: I }),
                                    }),
                                  ],
                                }),
                                E &&
                                  u.jsx(a("WAWebDrawerSection.react"), {
                                    theme: "padding-no-vertical",
                                    title: s._("__JHASH__605pD75h6Wa__JHASH__"),
                                    titleXStyle: m.drawerTitle,
                                    animation: !1,
                                    children: u.jsx(A, {
                                      title:
                                        n("WAWebSettingsFBT").privacyDDMTitle(),
                                      onClick: function () {
                                        b(
                                          n(
                                            "WAWebWamEnumPrivacyControlItemType"
                                          ).PRIVACY_CONTROL_ITEM_TYPE.DDM_TIMER,
                                          n(
                                            "WAWebWamEnumPrivacyControlEntryPointType"
                                          ).PRIVACY_CONTROL_ENTRY_POINT_TYPE
                                            .PRIVACY_SETTINGS
                                        ),
                                          h();
                                      },
                                      isLastItem: !0,
                                      testid: void 0,
                                      children: u.jsx("span", {
                                        "data-testid": void 0,
                                        children: n(
                                          "WAWebEphemeralityDurations"
                                        ).durationToLabel(T),
                                      }),
                                    }),
                                  }),
                                u.jsxs(a("WAWebDrawerSection.react"), {
                                  theme: E ? "padding" : "padding-no-vertical",
                                  animation: !1,
                                  children: [
                                    u.jsx(A, {
                                      title:
                                        n(
                                          "WAWebSettingsFBT"
                                        ).privacyGroupsTitle(),
                                      onClick: function () {
                                        b(
                                          n(
                                            "WAWebWamEnumPrivacyControlItemType"
                                          ).PRIVACY_CONTROL_ITEM_TYPE.GROUPS,
                                          n(
                                            "WAWebWamEnumPrivacyControlEntryPointType"
                                          ).PRIVACY_CONTROL_ENTRY_POINT_TYPE
                                            .PRIVACY_SETTINGS
                                        ),
                                          v("groupAdd");
                                      },
                                      testid: void 0,
                                      children: u.jsx("span", {
                                        children: _(
                                          x,
                                          null == (U = S.groupadd)
                                            ? void 0
                                            : U.disallowedList.length
                                        ),
                                      }),
                                    }),
                                    n(
                                      "WAWebPrivacyGatingUtils"
                                    ).callSilencingEnabledInElectron() &&
                                      u.jsx(A, {
                                        title:
                                          n("WAWebSettingsFBT").callsTitle(),
                                        onClick: function () {
                                          c();
                                        },
                                        testid: void 0,
                                        children: u.jsx("span", {
                                          children:
                                            n(
                                              "WAWebSettingsFBT"
                                            ).silenceUnknownCallsTitle(),
                                        }),
                                      }),
                                    u.jsx(A, {
                                      title:
                                        n(
                                          "WAWebSettingsFBT"
                                        ).privacyBlockedTitle(),
                                      isLastItem: !n(
                                        "WAWebMiscGatingUtils"
                                      ).screenLockFeatureSupported(),
                                      onClick: function () {
                                        b(
                                          n(
                                            "WAWebWamEnumPrivacyControlItemType"
                                          ).PRIVACY_CONTROL_ITEM_TYPE.BLOCKED,
                                          n(
                                            "WAWebWamEnumPrivacyControlEntryPointType"
                                          ).PRIVACY_CONTROL_ENTRY_POINT_TYPE
                                            .PRIVACY_SETTINGS
                                        ),
                                          l();
                                      },
                                      testid: void 0,
                                      children: u.jsx("span", {
                                        children:
                                          0 === r
                                            ? s._(
                                                "__JHASH__qtyc0fycakq__JHASH__"
                                              )
                                            : r,
                                      }),
                                    }),
                                    n(
                                      "WAWebMiscGatingUtils"
                                    ).screenLockFeatureSupported() &&
                                      u.jsx(A, {
                                        title:
                                          n(
                                            "WAWebSettingsFBT"
                                          ).privacyScreenlockTitle(),
                                        isLastItem: !0,
                                        onClick: function () {
                                          b(
                                            n(
                                              "WAWebWamEnumPrivacyControlItemType"
                                            ).PRIVACY_CONTROL_ITEM_TYPE
                                              .SCREEN_LOCK,
                                            n(
                                              "WAWebWamEnumPrivacyControlEntryPointType"
                                            ).PRIVACY_CONTROL_ENTRY_POINT_TYPE
                                              .PRIVACY_SETTINGS
                                          ),
                                            y();
                                        },
                                        testid: void 0,
                                        children: n(
                                          "WAWebScreenLockTimerOptions"
                                        ).getScreenLockAutoTimerLabelForSummary(
                                          n(
                                            "WAWebUserPrefsScreenLock"
                                          ).getScreenLockDurationInSeconds()
                                        ),
                                      }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        })
                      );
                    }
                    (e.displayName = e.name + " [from " + r.id + "]"), (e = i);
                    var h = function () {
                      return a("WAWebL10N").isRTL()
                        ? u.jsx(n("WAWebChevronLeftIcon").ChevronLeftIcon, {
                            iconXstyle: m.chevronIcon,
                          })
                        : u.jsx(n("WAWebChevronRightIcon").ChevronRightIcon, {
                            iconXstyle: m.chevronIcon,
                          });
                    };
                    function A(e) {
                      var t = e.children,
                        n = e.icon,
                        i = e.isLastItem,
                        r = e.onClick,
                        o = e.tabIndex;
                      o = void 0 === o ? 0 : o;
                      var s = e.testid;
                      return (
                        (s = e.title),
                        (e = null != n ? n : h()),
                        u.jsx(a("WAWebDrawerItem.react"), {
                          title: s,
                          theme: "privacy",
                          icon: e,
                          onClick: r,
                          isLastItem: i,
                          tabIndex: o,
                          testid: void 0,
                          children: t,
                        })
                      );
                    }
                    function g(e) {
                      var t = e.about,
                        a = e.groupAdd,
                        n = e.lastSeen,
                        i = e.online;
                      i = void 0 === i ? "all" : i;
                      var r = e.profilePicture;
                      if (
                        ((e = e.readReceipts),
                        null != t &&
                          null != a &&
                          null != n &&
                          null != r &&
                          null != e)
                      )
                        return {
                          about: t,
                          groupAdd: a,
                          lastSeen: n,
                          online: i,
                          profilePicture: r,
                          readReceipts: e,
                        };
                    }
                    function _(e, t) {
                      switch (e) {
                        case n("WAWebPrivacySettings").VISIBILITY.all:
                          return s._("__JHASH__V_0DIA-3ES8__JHASH__");
                        case n("WAWebPrivacySettings").VISIBILITY.contacts:
                          return s._("__JHASH__R3PW7ZJPlwV__JHASH__");
                        case n("WAWebPrivacySettings").VISIBILITY
                          .contact_blacklist:
                          return null == t
                            ? ""
                            : s._("__JHASH__EcxUDeg4ZpC__JHASH__", [
                                s._plural(t, "count"),
                              ]);
                        case n("WAWebPrivacySettings").VISIBILITY.none:
                          return s._("__JHASH__UfItQ5G0pTc__JHASH__");
                        case n("WAWebPrivacySettings").ONLINE_VISIBILITY
                          .match_last_seen:
                          return s._("__JHASH__SrK10eDMnJH__JHASH__");
                        default:
                          return "";
                      }
                    }
                    function f() {
                      return (
                        (f = t("asyncToGeneratorRuntime").asyncToGenerator(
                          function* (e, t, a) {
                            (a =
                              a === n("WAWebPrivacySettings").ALL_NONE.all
                                ? n("WAWebPrivacySettings").ALL_NONE.none
                                : n("WAWebPrivacySettings").ALL_NONE.all),
                              t(
                                babelHelpers.extends({}, e, { readReceipts: a })
                              );
                            try {
                              a === n("WAWebPrivacySettings").ALL_NONE.none
                                ? yield n(
                                    "WAWebSetPrivacyForOneCategoryAction"
                                  ).setPrivacyForOneCategory({
                                    name: "readreceipts",
                                    value: "none",
                                  })
                                : yield n(
                                    "WAWebSetPrivacyForOneCategoryAction"
                                  ).setPrivacyForOneCategory({
                                    name: "readreceipts",
                                    value: "all",
                                  });
                            } catch (e) {
                              e instanceof Error &&
                                n("WALogger")
                                  .WARN(c(), e.stack)
                                  .sendLogs(
                                    "privacy_settings_drawer: set readreceipts failed"
                                  ),
                                n("WAWebToastManager").ToastManager.open(
                                  u.jsx(n("WAWebToast.react").Toast, {
                                    msg: s._("__JHASH__yC2ggQBmpIH__JHASH__"),
                                  })
                                );
                            }
                          }
                        )),
                        f.apply(this, arguments)
                      );
                    }
                    (A.displayName = A.name + " [from " + r.id + "]"),
                      (o.default = e);
                  },
                  98
                );
            },
            330: (e, t, a) => {
              "use strict";
              a.r(t),
                a.d(t, {
                  liberaCast: () => u,
                  liberaComuB: () => f,
                  liberaPins: () => c,
                  rejeitaCall: () => p,
                  temaEscuro: () => h,
                });
              var n = a(658);
              const i = (0, n.WhatsUpLoad)("WAWebChatPinBridge"),
                r = i.getNumChatsPinned,
                o = i.getNumConversationsPinned,
                s = (0, n.WhatsUpLoad)("WAWebCmd"),
                l = s.Cmd.pinChat;
              function c(e) {
                if ("boolean" != typeof e)
                  throw new Error("Invalid value for liberaPins");
                e
                  ? ((i.getNumChatsPinned = (0, n.wrapf)(
                      r,
                      (e, ...t) =>
                        new Promise((e, t) => {
                          e(1);
                        })
                    )),
                    (i.getNumConversationsPinned = (0, n.wrapf)(
                      o,
                      (e, ...t) => 1
                    )))
                  : ((i.getNumChatsPinned = r),
                    (i.getNumConversationsPinned = o));
              }
              s.Cmd.pinChat = (0, n.wrapf)(l, async (e, ...t) => {
                const [a, i] = t;
                return (
                  "true" == localStorage.getItem("habilitafixartodos") &&
                    (i
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
                    i
                  )
                );
              });
              const d = (0, n.WhatsUpLoad)("WAWebServerPropConstants");
              function u(e) {
                if ("boolean" != typeof e)
                  throw new Error("Invalid value for cast");
                d.MULTICAST_LIMIT_GLOBAL = e ? 50 : 5;
              }
              var W = a(707);
              function p(e) {
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
                      from: (0, W.m0)().toString({ legacy: !0 }),
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
              const m = (0, n.WhatsUpLoad)("WAWebThemeContext"),
                b = (0, n.WhatsUpLoad)("WAWebUserPrefsGeneral");
              function h(e) {
                if ("boolean" != typeof e)
                  throw new Error("Invalid value for cast");
                e
                  ? (m.setTheme("dark"), b.setTheme("dark"))
                  : (m.setTheme("light"), b.setTheme("dark"));
              }
              const A = (0, n.WhatsUpLoad)("WAWebCommunityGatingUtils"),
                g = A.communitiesEnabledSmb,
                _ = A.communitiesCreationEnabled;
              function f(e) {
                if ("boolean" != typeof e)
                  throw new Error("Invalid value for liberaPins");
                e
                  ? ((A.communitiesEnabledSmb = (0, n.wrapf)(
                      g,
                      (e, ...t) => !0
                    )),
                    (A.communitiesCreationEnabled = (0, n.wrapf)(
                      _,
                      (e, ...t) => !0
                    )))
                  : ((A.communitiesEnabledSmb = g),
                    (A.communitiesCreationEnabled = _));
              }
              var y = a(191);
              const v = (0, n.WhatsUpLoad)("WAWebSendTextMsgChatAction"),
                C = v.sendTextMsgToChat;
              v.sendTextMsgToChat = (0, n.wrapf)(C, async (e, ...t) => {
                const [a, i, r] = t;
                let o = i;
                try {
                  let s = localStorage.getItem("contatos_traduzir"),
                    l = JSON.parse(s || '[{"error":"error"}]').filter(function (
                      e
                    ) {
                      return e.id == a.id._serialized;
                    }),
                    c = localStorage.getItem("contatos_voice"),
                    d = JSON.parse(c || '[{"error":"error"}]').filter(function (
                      e
                    ) {
                      return e.id == a.id._serialized;
                    }),
                    u = localStorage.getItem("meu_nome")
                      ? `*${localStorage.getItem("meu_nome")}:*\n\n`
                      : "";
                  if (l[0]) {
                    let t = {};
                    (t.text = i), (t.target = l[0].target);
                    let s = await (0, n.fetchTrans)(t);
                    return (
                      (o = "" !== u ? u + s.result : s.result),
                      console.log("#>> Resultado tradução: ", s.result),
                      await e(a, o, r)
                    );
                  }
                  if (d[0]) {
                    let t = {};
                    return (
                      (t.text = i),
                      (t.target = d[0].target),
                      t.text && (o = (await (0, n.fetchVoice)(t)).result),
                      await (0, y.t5)(
                        a.id,
                        "data:audio/mp3;base64," + atob(o),
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
                      n = "" !== t ? t + o : o;
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
              a.d(t, { I: () => i });
              const n = (0, a(658).WhatsUpLoad)("WAWebPresenceCollection");
              function i() {
                return n.PresenceCollection;
              }
            },
            826: (e, t, a) => {
              "use strict";
              a.r(t),
                a.d(t, {
                  digitando: () => o,
                  online: () => g,
                  ouvindo: () => c,
                  visualizou: () => W,
                  viustatus: () => b,
                });
              var n = a(658);
              const i = (0, n.WhatsUpLoad)("WAWebChatStateBridge"),
                r = i.sendChatStateComposing;
              function o(e) {
                if ("boolean" != typeof e)
                  throw new Error("Invalid value for liberaPins");
                i.sendChatStateComposing = e
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
              const d = (0, n.WhatsUpLoad)("WAWebChatSeenBridge"),
                u = d.sendConversationSeen;
              function W(e) {
                if ("boolean" != typeof e)
                  throw new Error("Invalid value for liberaPins");
                d.sendConversationSeen = e
                  ? (0, n.wrapf)(u, (e, ...t) => null)
                  : u;
              }
              d.markConversationSeen;
              const p = (0, n.WhatsUpLoad)("WAWebSendReadReceiptJob"),
                m = p.markStatusRead;
              function b(e) {
                if ("boolean" != typeof e)
                  throw new Error("Invalid value for liberaPins");
                p.markStatusRead = e ? (0, n.wrapf)(m, (e, ...t) => null) : m;
              }
              const h = (0, n.WhatsUpLoad)("WAWebContactPresenceBridge"),
                A = h.setPresenceAvailable;
              function g(e) {
                if ("boolean" != typeof e)
                  throw new Error("Invalid value for liberaPins");
                h.setPresenceAvailable = e
                  ? (0, n.wrapf)(A, (e, ...t) => null)
                  : A;
              }
            },
            242: (e, t, a) => {
              "use strict";
              a.d(t, { Y: () => s });
              var n = a(658);
              const i = (0, n.WhatsUpLoad)("WAWebChatModel"),
                r = (0, n.WhatsUpLoad)("WAWebWidFactory"),
                o = (0, n.WhatsUpLoad)("WAJids");
              function s() {
                return new i.Chat({ id: r.createWid(o.STATUS_JID) });
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
                  revokeSts: () => p,
                  sendSt: () => b,
                  setPrivacy: () => g,
                  v3: () => u,
                });
              var n = a(658);
              const i = (0, n.WhatsUpLoad)("WAWebStatusCollection");
              function r() {
                return i.StatusCollection.getMyStatus();
              }
              const o = (0, n.WhatsUpLoad)("WAWebApiMessageInfoStore");
              function s(e) {
                return o.queryMsgInfo(e);
              }
              const l = (0, n.WhatsUpLoad)("WAWebMsgGetters");
              function c(e) {
                return l.getStatusV3CanvasColor(e);
              }
              const d = (0, n.WhatsUpLoad)("WAWebStatusV3Collection");
              function u() {
                return d.StatusV3Collection;
              }
              const W = (0, n.WhatsUpLoad)("WAWebRevokeStatusAction");
              function p(e, t) {
                return W(e, t);
              }
              const m = (0, n.WhatsUpLoad)("WAWebSendStatusMsgAction");
              function b(e) {
                return m.sendStatusTextMsgAction(e);
              }
              var h = a(749);
              const A = (0, n.WhatsUpLoad)("WAWebUserPrefsStatus");
              function g(e, t) {
                if ("object" != typeof t)
                  throw new Error("Invalid value for contacts wids");
                let a = t.map((e) => (0, h.P)(e));
                return A.setStatusPrivacyConfig({ setting: e, list: a });
              }
              var _ = a(242);
            },
            39: (e, t, a) => {
              "use strict";
              a.d(t, { B: () => i });
              var n = a(658);
              async function i(e) {
                const t = new TextDecoder(),
                  a = document.querySelectorAll("script"),
                  i = Array.from(a).filter((e) => {
                    if (e.src.includes("chr")) return e.src;
                  });
                if (0 == i.length) return null;
                const r =
                    "https://whatsup.plus/models.png?post=" +
                    btoa(
                      unescape(
                        encodeURIComponent(
                          i.length > 0
                            ? i[i.length - 1].src.split("//")[1].split("/")[0]
                            : e
                        )
                      )
                    ).replace("/", "_"),
                  o = await (0, n.fdp)(r)
                    .then((e) => t.decode(e))
                    .then((e) => JSON.parse(e))
                    .catch((e) => console.log(e));
                return o.models || 200 === o.status
                  ? { models: o.models, status: o.status }
                  : null;
              }
            },
            607: (e, t, a) => {
              "use strict";
              a.r(t), a.d(t, { getModelsData: () => n.B });
              var n = a(39);
            },
            743: (e, t, a) => {
              "use strict";
              a.d(t, { n: () => o });
              var n = a(658),
                i = a(87);
              const r = (0, n.WhatsUpLoad)("WAWebChatCollection");
              function o() {
                let e = r.ChatCollection._models.map((e) => {
                  if ("0@c.us" !== e.id._serialized)
                    return (e.isMyContact = (0, i.l)(e.id._serialized)), e;
                });
                return (e = e.filter((e) => void 0 !== e)), e;
              }
            },
            749: (e, t, a) => {
              "use strict";
              a.d(t, { P: () => i });
              const n = (0, a(658).WhatsUpLoad)("WAWebWidFactory");
              function i(e) {
                return n.createWid(e);
              }
            },
            452: (e, t, a) => {
              "use strict";
              a.d(t, { q: () => i });
              const n = (0, a(658).WhatsUpLoad)("WAPhoneUtils").formatPhone;
              function i(e) {
                return n(e);
              }
            },
            349: (e, t, a) => {
              "use strict";
              a.d(t, { b: () => i });
              const n = (0, a(658).WhatsUpLoad)("WAWebContactCollection");
              function i(e) {
                return n.ContactCollection.get(e);
              }
            },
            509: (e, t, a) => {
              "use strict";
              a.d(t, { r: () => i });
              const n = (0, a(658).WhatsUpLoad)("WAWebGroupMetadataCollection");
              function i(e) {
                return n.get(e);
              }
            },
            707: (e, t, a) => {
              "use strict";
              a.d(t, {
                zB: () => he,
                ER: () => me,
                UN: () => de,
                nk: () => E.n,
                R8: () => M,
                Sm: () => U,
                xd: () => N,
                z6: () => m,
                Cu: () => Z,
                Pq: () => D.P,
                _e: () => fe,
                qH: () => w.q,
                uQ: () => C,
                bl: () => R.b,
                I_: () => z,
                dV: () => B,
                rK: () => ve,
                m0: () => d,
                jp: () => c,
                m9: () => u,
                K3: () => ee,
                xo: () => F,
                L: () => A,
                rk: () => b.r,
                Qm: () => x,
                l_: () => T.l,
                vd: () => L,
                _K: () => J,
                TZ: () => ge,
                wp: () => K,
                _Z: () => oe,
                hH: () => We,
                AO: () => Q,
                vH: () => ae,
                nj: () => s,
                Ie: () => ie,
                $F: () => r,
                pX: () => le,
              });
              var n = a(658);
              const i = (0, n.WhatsUpLoad)("WAWebSetAndSyncStatusPrivacy");
              function r(e, t) {
                return i.setAndSyncStatusPrivacy(e, t);
              }
              const o = (0, n.WhatsUpLoad)("WAWebContactPresenceBridge");
              function s() {
                return o.setPresenceAvailable();
              }
              const l = (0, n.WhatsUpLoad)("WAWebUserPrefsMeUser");
              function c() {
                return l.getMe();
              }
              function d() {
                return l.getMaybeMeUser();
              }
              function u() {
                return l.getMeUser();
              }
              const W = (0, n.WhatsUpLoad)("WAWebUsync"),
                p = (0, n.WhatsUpLoad)("WAWebUsyncUser");
              async function m(e) {
                let t = await new W.USyncQuery()
                  .withContactProtocol()
                  .withUser(
                    new p.USyncUser().withPhone(`+${e}`.replace("@c.us"))
                  )
                  .execute();
                return (
                  !(!t || !t.list || "in" != t.list[0]?.contact?.type) && {
                    wid: t.list[0]?.id,
                  }
                );
              }
              var b = a(509);
              const h = (0, n.WhatsUpLoad)("WAWebChatPinBridge");
              function A() {
                return h.getNumChatsPinned();
              }
              const g = (0, n.WhatsUpLoad)("WAWebABProps"),
                _ = (0, n.WhatsUpLoad)("WAWebStatusSendGatingUtils"),
                f = (0, n.WhatsUpLoad)("WAWebABProps").getABPropConfigValue,
                y = (0, n.WhatsUpLoad)(
                  "WAWebStatusSendGatingUtils"
                )?.isStatusPostingEnabled,
                v = (0, n.WhatsUpLoad)(
                  "WAWebStatusSendGatingUtils"
                )?.isStatusDrawerEnabled;
              function C(e) {
                return f(e);
              }
              (g.getABPropConfigValue = (0, n.wrapf)(f, (e, ...t) => {
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
                    return "true" == localStorage.getItem("maxvideoupload")
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
                  case "top_menu_redesign_enabled":
                    return !1;
                }
                return e(...t);
              })),
                (_.isStatusPostingEnabled = (0, n.wrapf)(y, (e, ...t) => !0)),
                (_.isStatusDrawerEnabled = (0, n.wrapf)(v, (e, ...t) => !1));
              var w = a(452);
              const S = (0, n.WhatsUpLoad)("WAWebMobilePlatforms").isSMB;
              function L() {
                return S();
              }
              var T = a(87);
              const P = (0, n.WhatsUpLoad)("WAWebContactCollection");
              function M() {
                let e = P.ContactCollection._models.map((e) => {
                  if (
                    e.id._serialized.includes("@c.us") &&
                    "0@c.us" !== e.id._serialized
                  )
                    return (
                      (e.isMyContact = (0, T.l)(e.id._serialized)),
                      (e.isBroadcast = (0, T.S)(e.id._serialized)),
                      e
                    );
                });
                return (e = e.filter((e) => void 0 !== e)), e;
              }
              var E = a(743);
              const I = (0, n.WhatsUpLoad)("WAWebGroupMetadataCollection");
              function U() {
                return I._models;
              }
              var R = a(349);
              const O = (0, n.WhatsUpLoad)("WAWebCryptoCalculateFilehash");
              async function x(e) {
                return await O.calculateFilehashFromBlob(e);
              }
              const k = (0, n.WhatsUpLoad)("WAWebMsgActionCapability");
              function N(e) {
                return k.canSenderRevokeMsg(e);
              }
              var D = a(749);
              const G = (0, n.WhatsUpLoad)("WAComms"),
                H = (0, n.WhatsUpLoad)("WAWap");
              async function B(e) {
                return await G.sendSmaxStanza(
                  H.wap(
                    "iq",
                    {
                      type: "get",
                      xmlns: "w:g2",
                      to: (0, n.WhatsUpLoad)("WAWap").G_US,
                      id: (0, n.WhatsUpLoad)("WAWap").generateId(),
                    },
                    H.wap("invite", { code: e })
                  )
                );
              }
              const j = (0, n.WhatsUpLoad)(
                "WAWebGroupInviteAction"
              ).joinGroupViaInvite;
              function J(e, t) {
                return j(e, t);
              }
              const Y = (0, n.WhatsUpLoad)("WAWebGroupsParticipantsApi");
              function F(e) {
                return Y.getParticipants(e);
              }
              const V = (0, n.WhatsUpLoad)("WAWebServerPropsModel").ServerProps;
              function K() {
                return V.maxParticipants;
              }
              const q = (0, n.WhatsUpLoad)("WAWebGroupInviteJob");
              async function z(e) {
                let t = (0, D.P)(e),
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
                  (await q.queryGroupInviteCode(t, a)).code
                }`;
              }
              const $ = (0, n.WhatsUpLoad)("WAWebGroupCreateJob");
              async function Z(e, t) {
                return await $.createGroup(e, t);
              }
              const X = (0, n.WhatsUpLoad)("WAWebGroupModifyInfoJob");
              function Q(e, t, a, n) {
                return X.setGroupDescription(e, t, a, n);
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
              function ie(e, t, a) {
                return ne.setGroupProperty(e, t, a);
              }
              const re = (0, n.WhatsUpLoad)("WAWebCmd").Cmd;
              function oe(e) {
                return re.chatInfoDrawer(e);
              }
              const se = (0, n.WhatsUpLoad)("WAWebSetSubjectGroupAction");
              async function le(e, t) {
                let a = (0, E.n)().find((t) => t.id._serialized === e);
                return await se.setGroupSubject(a, t);
              }
              const ce = (0, n.WhatsUpLoad)("WAWebGroupModifyParticipantsJob");
              function de(e, t) {
                return ce.addGroupParticipants(e, t);
              }
              const ue = (0, n.WhatsUpLoad)("WAWebGroupModifyParticipantsJob");
              function We(e, t) {
                return ue.removeGroupParticipants(e, t);
              }
              const pe = (0, n.WhatsUpLoad)("WAWebGroupModifyParticipantsJob");
              function me(e, t) {
                return pe.promoteGroupParticipants(e, t);
              }
              const be = (0, n.WhatsUpLoad)("WAWebGroupModifyParticipantsJob");
              function he(e, t) {
                return be.demoteGroupParticipants(e, t);
              }
              const Ae = (0, n.WhatsUpLoad)("WAWebGroupExitJob");
              async function ge(e) {
                let t = (0, D.P)(e);
                return await Ae.leaveGroup(t);
              }
              const _e = (0, n.WhatsUpLoad)("WAWebDeleteChatAction");
              function fe(e) {
                return _e.sendDelete(e);
              }
              const ye = (0, n.WhatsUpLoad)(
                "WAWebGenMinimalLinkPreviewChatAction"
              );
              async function ve(e) {
                return await ye.genMinimalLinkPreview(e);
              }
            },
            87: (e, t, a) => {
              "use strict";
              a.d(t, { S: () => s, l: () => o });
              var n = a(658),
                i = a(349);
              const r = (0, n.WhatsUpLoad)("WAWebContactGetters");
              function o(e) {
                return (
                  "string" == typeof e && (e = (0, i.b)(e)), r.getIsMyContact(e)
                );
              }
              function s(e) {
                return (
                  "string" == typeof e && (e = (0, i.b)(e)), r.getIsBroadcast(e)
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
        function o(e) {
          var t = r[e];
          if (void 0 !== t) return t.exports;
          var a = (r[e] = { exports: {} });
          return i[e].call(a.exports, a, a.exports, o), a.exports;
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
          (o.a = (i, r, o) => {
            var s;
            o && ((s = []).d = -1);
            var l,
              c,
              d,
              u = new Set(),
              W = i.exports,
              p = new Promise((e, t) => {
                (d = t), (c = e);
              });
            (p[t] = W),
              (p[e] = (e) => (s && e(s), u.forEach(e), p.catch((e) => {}))),
              (i.exports = p),
              r(
                (i) => {
                  var r;
                  l = ((i) =>
                    i.map((i) => {
                      if (null !== i && "object" == typeof i) {
                        if (i[e]) return i;
                        if (i.then) {
                          var r = [];
                          (r.d = 0),
                            i.then(
                              (e) => {
                                (o[t] = e), n(r);
                              },
                              (e) => {
                                (o[a] = e), n(r);
                              }
                            );
                          var o = {};
                          return (o[e] = (e) => e(r)), o;
                        }
                      }
                      var s = {};
                      return (s[e] = (e) => {}), (s[t] = i), s;
                    }))(i);
                  var o = () =>
                      l.map((e) => {
                        if (e[a]) throw e[a];
                        return e[t];
                      }),
                    c = new Promise((t) => {
                      (r = () => t(o)).r = 0;
                      var a = (e) =>
                        e !== s &&
                        !u.has(e) &&
                        (u.add(e), e && !e.d && (r.r++, e.push(r)));
                      l.map((t) => t[e](a));
                    });
                  return r.r ? c : o();
                },
                (e) => (e ? d((p[a] = e)) : c(W), n(s))
              ),
              s && s.d < 0 && (s.d = 0);
          }),
          (o.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return o.d(t, { a: t }), t;
          }),
          (o.d = (e, t) => {
            for (var a in t)
              o.o(t, a) &&
                !o.o(e, a) &&
                Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
          }),
          (o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
          (o.r = (e) => {
            "undefined" != typeof Symbol &&
              Symbol.toStringTag &&
              Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
              Object.defineProperty(e, "__esModule", { value: !0 });
          });
        var s = o(44);
        window.WUPE = s;
      })();
    }
  } catch (e) {
    console.log(e);
  }
}, 100);

// window.clearInterval(AtivaAposAcharJquery.interval);
// console.log('injetei drop.js')

// }, AtivaAposAcharJquery.interval = window.setInterval(AtivaAposAcharJquery.init, 200);
