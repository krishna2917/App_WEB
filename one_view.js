let loadModule = (name, id) => {
  window.ErrorGuard?.skipGuardGlobal(true);
  return new Promise((r) => {
    try {
      window.webpackChunkwhatsapp_web_client?.push([
        [Math.random()],
        {},
        (e) => {
          const module = e(id);
          r(module.default ? module.default : module);
        },
      ]);
      r(window.require?.(name));
    } catch (e) {
      r(null);
    }
  });
};
let getIndexedDB = (database, table, key) => {
  return new Promise((r) => {
    let dbRequest = window.indexedDB.open(database);
    dbRequest.onsuccess = (event) => {
      let db = event.target.result;
      let transaction = db.transaction(table, "readonly");
      let objectStore = transaction.objectStore(table);
      let getRequest = objectStore.get(key);
      getRequest.onsuccess = (event) => {
        r(event.target.result);
      };
      getRequest.onerror = (event) => {
        r(null);
      };
    };
    dbRequest.onerror = (event) => {
      r(null);
    };
  });
};
let setIndexedDB = (database, table, object) => {
  return new Promise((r) => {
    let dbRequest = window.indexedDB.open(database);
    dbRequest.onsuccess = (event) => {
      let db = event.target.result;
      let transaction = db.transaction(table, "readwrite");
      let objectStore = transaction.objectStore(table);
      let putRequest = objectStore.put(object);
      putRequest.onsuccess = (event) => {
        r(true);
      };
      putRequest.onerror = (event) => {
        r(false);
      };
    };
    dbRequest.onerror = (event) => {
      r(null);
    };
  });
};
let interval = setInterval(() => {
  if (!document.querySelector("#side")) return;
  clearInterval(interval);
  loadModule("WAWebCollections", 729804).then((module) => {
    module.Msg.on("add", (msg) => {
      msg.__x_isViewOnce = false;
      getIndexedDB("model-storage", "message", msg.id._serialized).then(
        (IDBmessage) => {
          if (IDBmessage) {
            IDBmessage.isViewOnce = false;
            setIndexedDB("model-storage", "message", IDBmessage);
          }
        }
      );
    });
  });
  loadModule("WAWebChatCollection", 351053).then((module) => {
    module.ChatCollection.getModelsArray().forEach((e) => {
      let lastMessage = e.msgs._models[e.msgs._models.length - 1];
      if (!lastMessage) return;
      lastMessage.isViewOnce = false;
      getIndexedDB("model-storage", "message", lastMessage.id._serialized).then(
        (IDBmessage) => {
          if (IDBmessage) {
            IDBmessage.isViewOnce = false;
            setIndexedDB("model-storage", "message", IDBmessage);
          }
        }
      );
    });
  });
}, 100);
console.info("onec Call.");
