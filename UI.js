var back_click_check = false;
var close_btn = false;
var loginClassCheck = false;
var mainClassCheck = false;
var statusClassCheck = false;
var status_view_Check = false;
var side_bar_Check = false;

observer("._aigu", ".x1jchvi3", back_click);

function checkChildClass() {
  var mainElement = document.querySelector("._aiwn");
  if (mainElement) {
    var childlogin = mainElement.querySelector(".landing-wrapper");
    var childmain = mainElement.querySelector("._aigs");
    var childstatus = mainElement.querySelector("._ah9q");
    var x1tkvqr7 = mainElement.querySelector(".x1tkvqr7");
    var childstatus_conf = mainElement.querySelector(
      ".xajqne3.x1n2onr6.x13x2ugz.xat24cr.x1iyjqo2.xs83m0k.x1t1x2f9"
    );
    var childstatus_view = mainElement.querySelector(
      ".xajqne3.x1n2onr6.x1c4vz4f.x2lah0s.xdl72j9.xyorhqc.x13x2ugz"
    );
    var headers = document.querySelectorAll("h1.x1qlqyl8.x1pd3egz.xcgk4ki");

    if (childlogin) {
      if (loginClassCheck == false) {
        mainClassCheck = false;
        statusClassCheck = false;
        status_view_Check = false;
        loginpage();
      }
    } else if (headers) {
      if (headers.length > 0) {
        var statusHeader = headers[0];
        var headerText = statusHeader.textContent.trim();
        if (headerText === "Status") {
          side_bar_Check = true;
          back_click();
          if (status_view_Check == false) {
            status_view_Check = true;
            status_view();
          }
        } else {
          side_bar_Check = false;
          if (childmain) {
            if (childstatus) {
              loginClassCheck = false;
              if (childstatus_conf) {
                status_load();
              } else {
                status_load();
              }
            } else {
              if (mainClassCheck == false) {
                loginClassCheck = false;
                statusClassCheck = false;
                mainload();
              }
            }
          }
        }
      }else{
        side_bar_Check = false;
          if (childmain) {
            if (childstatus) {
              loginClassCheck = false;
              if (childstatus_conf) {
                status_load();
              } else {
                status_load();
              }
            } else {
              if (mainClassCheck == false) {
                loginClassCheck = false;
                statusClassCheck = false;
                mainload();
              }
            }
          }
    }
    }
  } else {
  }
}
setInterval(checkChildClass, 500);

function photo_upload() {
  var full_ui = document.querySelectorAll("._aigv._aigw._aigx");
  full_ui.forEach(function (element) {
    element.style.display = "none";
  });
}

function status_view() {
  var additionalStyles = document.createElement("style");
  additionalStyles.innerText = `      .xvue9z {        min-width: 100%;        width: 0;      }      .x2vplmn {        top: 80px;      }      .xoyzfg9 {        top: 40px;      }    `;
  document.head.appendChild(additionalStyles);
}

function close_chat() {
  const elementExists = document.querySelector("._al_x") !== null;
  if (elementExists) {
    if (back_click_check == false) {
      back_click_check = true;
      back_click();
    }
  }
}
function side_bar() {
  var side = document.querySelectorAll(".x10l6tqk.xh8yej3.x1g42fcv");
  side.forEach(function (element) {
    element.addEventListener("click", function () {
      const sidebar = document.querySelector("#side")?.parentElement;
      if (sidebar) {
        console.log("Chat_Item_Clicked!");
        auto_fouce();
        back_click_check = false;
        photo_upload();
        if (side_bar_Check == false) {
          sidebar.style.display =
          sidebar.style.display === "none" ? "none" : "none";
          var header = document.querySelectorAll(
              ".xa1v5g2.x1n2onr6.x9f619.x78zum5.x6s0dn4.xl56j7k.xbyj736.x5yr21d.x1ye3gou.xn6708d.x1acz5yr.xm81vs4.xu3j5b3.x1a0jr7w"
          );
          if (header.length > 0) {
              const header = sidebar.parentElement?.querySelector("header");
              if (header) {
                header.style.display =
                header.style.display === "none" ? "none" : "none";
              }
          }
        }else{
            back_click();
        } 
      }
    });
  });
}
function back_click() {
  var _ajv1 = document.querySelectorAll("._ajv1");
  _ajv1.forEach((element) => {
    element.style.marginTop = "";
  });
  console.log("Back_btn_Clicked");
  var full_ui = document.querySelectorAll("._aohf._aigv._aigw._aigx");
  full_ui.forEach(function (element) {
    element.style.display = "";
  });
  var full_uii = document.querySelectorAll("._aigs");
  full_uii.forEach(function (element) {
    element.style.minWidth = "100%";
    element.style.minHeight = "100%";
  });
  
  var header = document.querySelectorAll(
    ".xa1v5g2.x1n2onr6.x9f619.x78zum5.x6s0dn4.xl56j7k.xbyj736.x5yr21d.x1ye3gou.xn6708d.x1acz5yr.xm81vs4.xu3j5b3.x1a0jr7w"
  );

  if (header.length > 0) {
    var main = document.querySelectorAll("._aigv._aigw");
    main.forEach(function (element) {
      element.style.minWidth = "85%";
      element.style.display = "";
    });
    header.forEach(function (element) {
        element.style.minWidth = "15%";
        element.style.display = "";
      });
  }else{
    var main = document.querySelectorAll("._aigv._aigw");
    main.forEach(function (element) {
      element.style.minWidth = "100%";
      element.style.display = "";
    });
  }
 
}
function addBackBtn() {
  var backButtonExists = document.querySelector(".back_btn") !== null;
  if (backButtonExists) {
  } else {
    var newDivElement = document.createElement("div");
    newDivElement.setAttribute("aria-disabled", "false");
    newDivElement.setAttribute("role", "button");
    newDivElement.setAttribute("tabindex", "0");
    newDivElement.setAttribute("class", "back_btn");
    newDivElement.setAttribute("data-tab", "6");
    newDivElement.setAttribute("title", "Menu");
    newDivElement.setAttribute("aria-label", "Menu");
    var svgElement = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svgElement.setAttribute("fill", "currentColor");
    svgElement.setAttribute("class", "bi bi-chevron-left");
    svgElement.setAttribute("viewBox", "0 0 16 16");
    svgElement.setAttribute(
      "style",
      "width: 25px; height: 25px; font-weight: bold; margin-right: 10px;"
    );
    var pathElement = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    pathElement.setAttribute("fill-rule", "evenodd");
    pathElement.setAttribute(
      "d",
      "M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
    );
    svgElement.appendChild(pathElement);
    newDivElement.appendChild(svgElement);
    var x1o095ql = document.querySelectorAll(".x1o095ql");
    x1o095ql.forEach(function (element) {
      element.style.width = "";
      element.style.minWidth = "90%";
    });
    var container = document.querySelector("._amid");
    container.insertAdjacentElement("afterbegin", newDivElement);
    document.addEventListener("click", function (event) {
      if (event.target.classList.contains("back_btn")) {
        back_click();
      }
    });
  }
}
function info() {
  if (close_btn == false) {
    var aohg = document.querySelectorAll("._aigv._aig-");
    aohg.forEach(function (element) {
      element.style.minWidth = "100%";
    });
    var closeButtons = document.querySelectorAll(
      ".x1okw0bk.x16dsc37.x1ypdohk.xeq5yr9.xfect85"
    );
    closeButtons.forEach(function (button) {
      button.addEventListener("click", function (event) {
        un_info();
      });
    });
  }
  btn_selecet();
}
function un_info() {
  close_btn = true;
  var _aohg = document.querySelectorAll("._aigv._aig-");
  _aohg.forEach(function (element) {
    element.style.minWidth = "";

    console.log("Chat_Item_Clicked!");
  });
}
function auto_fouce() {
  var element = document.querySelector(
    ".x1hx0egp.x6ikm8r.x1odjw0f.x1k6rcq7.x6prxxf"
  );
  if (element) {
    element.blur();
  } else {
  }
}
function btn_selecet() {
  var amidbtn = document.querySelectorAll("._amid");
  amidbtn.forEach(function (element) {
    element.addEventListener("click", function () {
      close_btn = false;
    });
  });
  var _ajv6btn = document.querySelectorAll(
    "._ajv6.x1y1aw1k.x1sxyh0.xwib8y2.xurb0ha"
  );
  _ajv6btn.forEach(function (element) {
    element.addEventListener("click", function () {
      close_btn = false;
    });
  });
}
function adsbox() {
  var xpb48g7 = document.querySelectorAll(".xpb48g7");
  xpb48g7.forEach(function (element) {
    element.style.minWidth = "90%";
  });
  var xvue9z = document.querySelectorAll(".xvue9z");
  xvue9z.forEach(function (element) {
    element.style.width = "0";
    element.style.minWidth = "90%";
  });
}
function code_resize() {
  var elements = document.querySelectorAll("._ak96");
  elements.forEach(function (element) {
    element.style.display = "flex";
    element.style.flexWrap = "wrap";
    element.style.justifyContent = "center";
    element.style.minWidth = "100%";
    element.style.paddingLeft = "0";
  });
  var elements = document.querySelectorAll(".x10h3iyq");
  elements.forEach(function (element) {
    element.style.width = "25px";
    element.style.height = "25px";
    element.style.display = "flex";
    element.style.alignItems = "center";
    element.style.justifyContent = "center";
    element.style.margin = "5px";
  });
}
function status_contacts() {
  var xpb48g7 = document.querySelectorAll(".xpb48g7");
  xpb48g7.forEach(function (element) {
    element.style.minWidth = "0";
  });
  var xs8rnei = document.querySelectorAll(".xs8rnei");
  xs8rnei.forEach(function (element) {
    element.style.width = "90%";
  });
}
function emoji() {
  const ak4w_emoji = document.querySelectorAll("._ak4w");
  ak4w_emoji.forEach((element) => {
    element.style.marginLeft = "0px";
    element.style.left = "0px";
    element.style.width = "100%";
    element.style.maxWidth = "";
  });
}
function text() {
  var x1q0g3np = document.querySelectorAll(".x1q0g3np");
  x1q0g3np.forEach(function (element) {
    element.style.flexDirection = "";
  });
  var x1c4vz4f = document.querySelectorAll(
    ".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xeuugli.x2lwn1j.xl56j7k.x1q0g3np.x6s0dn4._ah9w"
  );
  x1c4vz4f.forEach(function (element) {
    element.style.flexDirection = "column";
    element.style.Width = "100%";
  });
}


function mainload() {
  mainClassCheck = true;
  btn_selecet();
  auto_fouce();
  back_click();
  side_bar();
  observer("._aigs", "_ajx_", addBackBtn);
  observer2("_aigz", "_al_h", close_chat);
  observer4("._aigv._aig-", "x5yr21d", info);

  var mainClass = "._aiwn";
  var childClasses = [
    "x9f619",
    "x78zum5",
    "xdt5ytf",
    "x6s0dn4",
    "xl56j7k",
    "xh8yej3",
    "xpb48g7",
    "x1jn0hjm",
    "x1us19tq",
  ];
  MultiChilClass(mainClass, childClasses, adsbox);
}
function loginpage() {
  loginClassCheck = true;
  var landingWrapper = document.querySelector(".landing-wrapper");
  if (landingWrapper) {
    landingWrapper.style.minWidth = "100%";
  }
  observer(".landing-main", "x1n2onr6", code_resize);
}
function status_load() {
  statusClassCheck = true;
  var ajwt = document.querySelectorAll("._ajwt");
  ajwt.forEach(function (element) {
    element.style.minWidth = "100%";
  });
  var _ajv1 = document.querySelectorAll("._ajvd");
  _ajv1.forEach((element) => {
    element.style.marginTop = "50px";
    element.style.display = "flex";
    element.style.flexWrap = "wrap";
  });
  var divElement = document.createElement("div");
  divElement.classList.add("x889kno");
  document.body.appendChild(divElement);
  var x889kno = document.querySelector(".x889kno");
  x889kno.addEventListener("click", function () {
    setTimeout(() => {
      status_contacts();
    }, 10);
  });
  observer_status("._aiwn", "x916qxe", status_contacts);
  observer_status("._aiwn", "_ahyg", emoji);
  observer_status("._aiwn", "_amlz", emoji);
  observer_status("._aiwn", "_ak06", text);
}
function observer(mainClass, childClass, callback) {
  var mainElement = document.querySelector(mainClass);
  var observer = new MutationObserver(function (mutationsList, observer) {
    for (var mutation of mutationsList) {
      if (mutation.type === "attributes") {
        if (mutation.attributeName === "class") {
          if (mainElement.classList.contains(mainClass.replace(".", ""))) {
            var childElement = mainElement.querySelector("." + childClass);
            if (childElement) {
              if (typeof callback === "function") {
                callback();
              }
            } else {
            }
          }
        }
      }
    }
  });
  observer.observe(document.body, { attributes: true, subtree: true });
}
function observer2(mainClass, childClass, callback) {
  var mainElements = document.querySelectorAll("." + mainClass);
  var observer = new MutationObserver(function (mutationsList, observer) {
    for (var mutation of mutationsList) {
      if (mutation.type === "attributes") {
        if (mutation.attributeName === "class") {
          var secondOccurrence = false;
          for (var mainElement of mainElements) {
            var childElement = mainElement.querySelector("." + childClass);
            if (childElement) {
              secondOccurrence = true;
              break;
            }
          }
          if (secondOccurrence) {
            if (typeof callback === "function") {
              callback();
            }
          } else {
            if (side_bar_Check == false) {
              side_bar();
            } 
          }
        }
      }
    }
  });
  observer.observe(document.body, { attributes: true, subtree: true });
}
function observer3(mainClass, childClass, callback) {
  var mainElement = document.querySelector(mainClass);
  var observer = new MutationObserver(function (mutationsList, observer) {
    for (var mutation of mutationsList) {
      if (mutation.type === "attributes") {
        if (mutation.attributeName === "class") {
          if (mainElement.classList.contains(mainClass)) {
            var childElement = mainElement.querySelector("." + childClass);
            if (childElement) {
              if (typeof callback === "function") {
                callback();
              }
            } else {
            }
          }
        }
      }
    }
  });
  observer.observe(mainElement, { attributes: true, subtree: true });
}
function observer4(mainClass, childClass, callback) {
    var mainElement = document.querySelector(mainClass);
    if (!mainElement) {
      return;
    }
    var observer = new MutationObserver(function (mutationsList, observer) {
      for (var mutation of mutationsList) {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "class"
        ) {
  
          var currentClasses = mainElement.classList;
          var requiredClasses = mainClass.split('.').filter(cls => cls);

          var hasRequiredClasses = requiredClasses.every(className => currentClasses.contains(className));

          if (hasRequiredClasses) {
            var previousClasses = mutation.oldValue ? mutation.oldValue.split(" ") : [];
            var hadRequiredClasses = requiredClasses.every(className => previousClasses.includes(className));
            if (!hadRequiredClasses) {
              var childElement = mainElement.querySelector("." + childClass);
              if (childElement) {
                if (typeof callback === "function") {
                  callback();
                }
              } 
            }
          }
        }
      }
    });
  
    observer.observe(mainElement, {
      attributes: true,
      subtree: true,
      attributeOldValue: true,
      attributeFilter: ["class"],
    });
  }

function MultiChilClass(mainClass, childClasses, callback) {
  var mainElement = document.querySelector(mainClass);
  var observer = new MutationObserver(function (mutationsList, observer) {
    for (var mutation of mutationsList) {
      if (
        mutation.type === "attributes" &&
        mutation.attributeName === "class"
      ) {
        if (mainElement.classList.contains(mainClass.replace(".", ""))) {
          var allClassesFound = true;
          for (var childClass of childClasses) {
            var childElement = mainElement.querySelector("." + childClass);
            if (!childElement) {
              allClassesFound = false;
              break;
            }
          }
          if (allClassesFound) {
            if (typeof callback === "function") {
              callback();
            }
          } else {
          }
        }
      }
    }
  });
  observer.observe(mainElement, { attributes: true, subtree: true });
}
function observer_status(mainClass, childClass, callback) {
  var mainElement = document.querySelector(mainClass);
  var observer = new MutationObserver(function (mutationsList, observer) {
    for (var mutation of mutationsList) {
      if (mutation.type === "attributes") {
        if (mutation.attributeName === "class") {
          if (mainElement.classList.contains(mainClass.replace(".", ""))) {
            var childElement = mainElement.querySelector("." + childClass);
            if (childElement) {
              if (typeof callback === "function") {
                callback();
              }
            }
          }
        }
      }
    }
  });
  observer.observe(mainElement, { attributes: true, subtree: true });
}
