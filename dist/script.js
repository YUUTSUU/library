/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/lib/components/accordion.js":
/*!********************************************!*\
  !*** ./src/js/lib/components/accordion.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.accordion = function (headerActive = "accordion-header-active", contentActive = "accordion-content-active", paddings = "40") {
  for (let i = 0; i < this.length; i++) {
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).on("click", function () {
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this).toggleClass(headerActive);
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this.nextElementSibling).toggleClass(contentActive);

      if (this.classList.contains(headerActive)) {
        this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + paddings + "px";
      } else {
        this.nextElementSibling.style.maxHeight = "0px";
      }
    });
  }
};

/***/ }),

/***/ "./src/js/lib/components/carousel.js":
/*!*******************************************!*\
  !*** ./src/js/lib/components/carousel.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.carousel = function ({
  slides,
  autoPlay,
  indicator
} = {}) {
  for (let i = 0; i < this.length; i++) {
    const innerElement = this[i].querySelector(".carousel-inner"),
          innerWidth = +window.getComputedStyle(innerElement).width.replace(/\D/g, ""),
          slidesItem = this[i].querySelectorAll(".carousel-item"),
          slidesField = this[i].querySelector(".carousel-slides"),
          dots = [],
          quantity = slides - 1 || slidesItem.length - 1;
    slidesField.style.width = `${100 * (quantity + 1)}%`;
    slidesItem.forEach(slide => {
      slide.style.width = `${innerWidth}px`;
    });
    let offset = 0,
        index = 0,
        slidePause = null;

    if (indicator) {
      const indicators = document.createElement("ol");
      indicators.classList.add("carousel-indicators");
      this[i].prepend(indicators);

      for (let j = 0; j < slidesItem.length; j++) {
        const dot = document.createElement("li");
        dot.setAttribute("data-slide-to", j + 0);
        dots.push(dot);
        indicators.append(...dots);

        if (j == 0) {
          dot.classList.add("active");
        }
      }

      const id = this[i].getAttribute("id");
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(`#${id} .carousel-indicators li`).click(function () {
        index = this.getAttribute("data-slide-to");
        offset = innerWidth * index;
        slidesField.style.transform = `translateX(-${offset}px)`;

        try {
          dots.forEach(dot => {
            dot.classList.remove("active");
          });
          dots[index].classList.add("active");
        } catch (e) {}
      });
    }

    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i].querySelector("[data-slide='next']")).click(event => {
      event.preventDefault();

      if (offset == innerWidth * quantity) {
        offset = 0;
      } else {
        offset += innerWidth;
      }

      slidesField.style.transform = `translateX(-${offset}px)`;

      if (index == quantity) {
        index = 0;
      } else {
        index++;
      }

      try {
        dots.forEach(dot => {
          dot.classList.remove("active");
        });
        dots[index].classList.add("active");
      } catch (e) {}
    });
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i].querySelector("[data-slide='prev']")).click(event => {
      event.preventDefault();

      if (offset == 0) {
        offset = innerWidth * quantity;
      } else {
        offset -= innerWidth;
      }

      slidesField.style.transform = `translateX(-${offset}px)`;

      if (index == 0) {
        index = quantity;
      } else {
        index--;
      }

      try {
        dots.forEach(dot => {
          dot.classList.remove("active");
        });
        dots[index].classList.add("active");
      } catch (e) {}
    });
    animated();
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).on("mouseenter", () => {
      clearInterval(slidePause);
    });
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).on("mouseleave", () => {
      animated();
    });

    function animated() {
      if (autoPlay) {
        slidePause = setInterval(() => {
          if (offset == innerWidth * quantity) {
            offset = 0;
          } else {
            offset += innerWidth;
          }

          if (index == quantity) {
            index = 0;
          } else {
            index++;
          }

          slidesField.style.transform = `translateX(-${offset}px)`;

          try {
            dots.forEach(dot => {
              dot.classList.remove("active");
            });
            dots[index].classList.add("active");
          } catch (e) {}
        }, 3000);
      }
    }
  }
};

/***/ }),

/***/ "./src/js/lib/components/dropdown.js":
/*!*******************************************!*\
  !*** ./src/js/lib/components/dropdown.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.dropdown = function () {
  for (let i = 0; i < this.length; i++) {
    const id = Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).getAttribute("id")[0].id;
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).on("click", function () {
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(`[data-dopdown-id=${id}]`).fadeToggle(300);
    });
  }
};

/***/ }),

/***/ "./src/js/lib/components/modal.js":
/*!****************************************!*\
  !*** ./src/js/lib/components/modal.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.calcSroll = function () {
  const div = document.createElement("div");
  div.style.width = "50px";
  div.style.height = "50px";
  div.style.overflowY = "scroll";
  div.style.visibility = "hidden";
  document.body.appendChild(div);
  const scrollWidth = div.offsetWidth - div.clientWidth;
  div.remove();
  return scrollWidth;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.modal = function (created) {
  const offset = this.calcSroll();

  for (let i = 0; i < this.length; i++) {
    const target = this[i].getAttribute("data-target");
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).on("click", function (event) {
      event.preventDefault();
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(target).fadeIn(500);
      document.body.style.overflow = "hidden";
      document.body.style.marginRight = `${offset}px`;
    });
    document.querySelectorAll(`${target} [data-close]`).forEach(close => {
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(close).on("click", function () {
        Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(target).fadeOut(500);
        document.body.style.overflow = "";
        document.body.style.marginRight = "0px";

        if (created) {
          document.querySelector(target).remove();
        }
      });
    });
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(target).on("click", function (event) {
      if (event.target.classList.contains("modal")) {
        Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(target).fadeOut(500);
        document.body.style.overflow = "";
        document.body.style.marginRight = "0px";

        if (created) {
          document.querySelector(target).remove();
        }
      }
    });
  }
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.createModal = function ({
  text,
  btns
} = {}) {
  for (let i = 0; i < this.length; i++) {
    let modal = document.createElement("div");
    modal.classList.add("modal");
    modal.setAttribute("id", this[i].getAttribute("data-target").slice(1));
    const buttons = [];

    for (let j = 0; j < btns.count; j++) {
      let btn = document.createElement("button");
      btn.classList.add("btn", ...btns.settings[j][1]);
      btn.textContent = btns.settings[j][0];

      if (btns.settings[j][2]) {
        btn.setAttribute("data-close", "true");
      }

      if (btns.settings[j][3] && typeof btns.settings[j][3] === "function") {
        btn.addEventListener("click", btns.settings[j][3]);
      }

      buttons.push(btn);
    }

    modal.innerHTML = `
      <div class="modal-dialog">
        <div class="modal-content">
          <button class="close" data-close>
            <span>&times;</span>
          </button>
          <div class="modal-header">
            <div class="modal-title">
              ${text.title}
            </div>
          </div>
          <div class="modal-body">
            ${text.body}
          </div>
          <div class="modal-footer"></div>
        </div>
      </div>
    `;
    modal.querySelector(".modal-footer").append(...buttons);
    document.querySelector(".container").append(modal);
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).modal(true);
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i].getAttribute("data-target")).fadeIn(500);
  }
};

/***/ }),

/***/ "./src/js/lib/components/tab.js":
/*!**************************************!*\
  !*** ./src/js/lib/components/tab.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.tab = function () {
  for (let i = 0; i < this.length; i++) {
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).on("click", function () {
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this).addClass('tab-item-active').siblings().removeClass('tab-item-active').closest('.tab').find('.tab-content').removeClass('tab-content-active').eq(Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this).index()).addClass('tab-content-active');
    });
  }
};

/***/ }),

/***/ "./src/js/lib/core.js":
/*!****************************!*\
  !*** ./src/js/lib/core.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const $ = function (selector) {
  return new $.prototype.init(selector);
};

$.prototype.init = function (selector) {
  if (!selector) {
    return this; //{}
  }

  if (selector.tagName) {
    this[0] = selector;
    this.length = 1;
    return this;
  }

  Object.assign(this, document.querySelectorAll(selector));
  this.length = document.querySelectorAll(selector).length;
  return this;
};

$.prototype.init.prototype = $.prototype;
window.$ = $;
/* harmony default export */ __webpack_exports__["default"] = ($);

/***/ }),

/***/ "./src/js/lib/lib.js":
/*!***************************!*\
  !*** ./src/js/lib/lib.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./src/js/lib/core.js");
/* harmony import */ var _modules_display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/display */ "./src/js/lib/modules/display.js");
/* harmony import */ var _modules_classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/classes */ "./src/js/lib/modules/classes.js");
/* harmony import */ var _modules_handlers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/handlers */ "./src/js/lib/modules/handlers.js");
/* harmony import */ var _modules_attribute__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/attribute */ "./src/js/lib/modules/attribute.js");
/* harmony import */ var _modules_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/actions */ "./src/js/lib/modules/actions.js");
/* harmony import */ var _modules_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/effects */ "./src/js/lib/modules/effects.js");
/* harmony import */ var _components_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/dropdown */ "./src/js/lib/components/dropdown.js");
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/modal */ "./src/js/lib/components/modal.js");
/* harmony import */ var _components_tab__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/tab */ "./src/js/lib/components/tab.js");
/* harmony import */ var _components_accordion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/accordion */ "./src/js/lib/components/accordion.js");
/* harmony import */ var _components_carousel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/carousel */ "./src/js/lib/components/carousel.js");
/* harmony import */ var _services_request__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/request */ "./src/js/lib/services/request.js");













/* harmony default export */ __webpack_exports__["default"] = (_core__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/js/lib/modules/actions.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/actions.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.html = function (content) {
  for (let i = 0; i < this.length; i++) {
    if (content) {
      this[i].innerHTML = content;
    } else {
      return this[i].innerHTML;
    }
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.eq = function (i) {
  const swap = this[i],
        objLength = Object.keys(this).length;

  for (let i = 0; i < objLength; i++) {
    delete this[i];
  }

  this[0] = swap;
  this.length = 1;
  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.index = function () {
  const parent = this[0].parentNode;
  const childs = [...parent.children];

  const findMyIndex = item => {
    return item == this[0];
  };

  return childs.findIndex(findMyIndex);
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.find = function (selector) {
  let numberOfItems = 0,
      counter = 0;
  const copyObj = Object.assign({}, this);

  for (let i = 0; i < copyObj.length; i++) {
    const arr = copyObj[i].querySelectorAll(selector);

    if (arr.length == 0) {
      continue;
    }

    for (let j = 0; j < arr.length; j++) {
      this[counter] = arr[j];
      counter++;
    }

    numberOfItems += arr.length;
  }

  this.length = numberOfItems;
  const objLength = Object.keys(this).length;

  for (; numberOfItems < objLength; numberOfItems++) {
    delete this[numberOfItems];
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.closest = function (selector) {
  let counter = 0;

  for (let i = 0; i < this.length; i++) {
    this[i] = this[i].closest(selector);

    if (this[i] == null) {
      this[i] = "undefined";
    }

    counter++;
  }

  const objLength = Object.keys(this).length;

  for (; counter < objLength; counter++) {
    delete this[counter];
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.siblings = function () {
  let numberOfItems = 0,
      counter = 0;
  const copyObj = Object.assign({}, this);

  for (let i = 0; i < copyObj.length; i++) {
    const arr = copyObj[i].parentNode.children;

    for (let j = 0; j < arr.length; j++) {
      if (copyObj[i] === arr[j]) {
        continue;
      }

      this[counter] = arr[j];
      counter++;
    }

    numberOfItems += arr.length - 1;
  }

  this.length = numberOfItems;
  const objLength = Object.keys(this).length;

  for (; numberOfItems < objLength; numberOfItems++) {
    delete this[numberOfItems];
  }

  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/attribute.js":
/*!*****************************************!*\
  !*** ./src/js/lib/modules/attribute.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.getAttribute = function (...attribute) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].getAttribute) {
      continue;
    }

    this[i].getAttribute(...attribute);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.setAttribute = function (...attribute) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].setAttribute) {
      continue;
    }

    this[i].setAttribute(...attribute);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.removeAttribute = function (...attribute) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].removeAttribute) {
      continue;
    }

    this[i].removeAttribute(...attribute);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggleAttribute = function (...attribute) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].hasAttribute) {
      continue;
    }

    if (this[i].hasAttribute(...attribute)) {
      this[i].removeAttribute(...attribute);
    } else {
      this[i].setAttribute(...attribute);
    }
  }

  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/classes.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/classes.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.addClass = function (...classNames) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList) {
      continue;
    }

    this[i].classList.add(...classNames);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.removeClass = function (...classNames) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList) {
      continue;
    }

    this[i].classList.remove(...classNames);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggleClass = function (...classNames) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList) {
      continue;
    }

    this[i].classList.toggle(...classNames); // if (this[i].classList.contains(...classNames)) {
    //   this[i].classList.remove(...classNames)
    // } else {
    //   this[i].classList.add(...classNames)
    // }
  }

  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/display.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/display.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.show = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }

    this[i].style.display = "";
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.hide = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }

    this[i].style.display = "none";
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggle = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }

    if (this[i].style.display === "none") {
      this[i].style.display = "";
    } else {
      this[i].style.display = "none";
    }
  }

  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/effects.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/effects.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.animateOverTime = function (duration, callback, finaly) {
  let timeStart;

  function _animateOverTime(time) {
    if (!timeStart) {
      timeStart = time;
    }

    let timeElapsed = time - timeStart,
        complection = Math.min(timeElapsed / duration, 1);
    callback(complection);

    if (timeElapsed < duration) {
      requestAnimationFrame(_animateOverTime);
    } else {
      if (typeof finaly === "function") {
        finaly();
      }
    }
  }

  return _animateOverTime;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeIn = function (duration, display, finaly) {
  for (let i = 0; i < this.length; i++) {
    this[i].style.display = display || "block";

    const _fadeIn = complection => {
      this[i].style.opacity = complection;
    };

    const animation = this.animateOverTime(duration, _fadeIn, finaly);
    requestAnimationFrame(animation);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeOut = function (duration, finaly) {
  for (let i = 0; i < this.length; i++) {
    const _fadeOut = complection => {
      this[i].style.opacity = 1 - complection;

      if (complection == 1) {
        this[i].style.display = "none";
      }
    };

    const animation = this.animateOverTime(duration, _fadeOut, finaly);
    requestAnimationFrame(animation);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeToggle = function (duration, display, finaly) {
  for (let i = 0; i < this.length; i++) {
    if (window.getComputedStyle(this[i]).display === "none") {
      this[i].style.display = display || "block";

      const _fadeIn = complection => {
        this[i].style.opacity = complection;
      };

      const animation = this.animateOverTime(duration, _fadeIn, finaly);
      requestAnimationFrame(animation);
    } else {
      const _fadeOut = complection => {
        this[i].style.opacity = 1 - complection;

        if (complection == 1) {
          this[i].style.display = "none";
        }
      };

      const animation = this.animateOverTime(duration, _fadeOut, finaly);
      requestAnimationFrame(animation);
    }
  }

  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/handlers.js":
/*!****************************************!*\
  !*** ./src/js/lib/modules/handlers.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.on = function (eventName, callBack) {
  for (let i = 0; i < this.length; i++) {
    if (!eventName || !callBack) {
      continue;
    }

    this[i].addEventListener(eventName, callBack);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.off = function (eventName, callBack) {
  for (let i = 0; i < this.length; i++) {
    if (!eventName || !callBack) {
      continue;
    }

    this[i].removeEventListener(eventName, callBack);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.click = function (handler) {
  for (let i = 0; i < this.length; i++) {
    if (handler) {
      this[i].addEventListener("click", handler);
    } else {
      this[i].click();
    }
  }

  return this;
};

/***/ }),

/***/ "./src/js/lib/services/request.js":
/*!****************************************!*\
  !*** ./src/js/lib/services/request.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.get = async function (url, dataTypeAnswer = "json") {
  let res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, status: ${res.status}`);
  }

  switch (dataTypeAnswer) {
    case "json":
      return await res.json();

    case "text":
      return await res.text();

    case "blob":
      return await res.blob();
  }
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.post = async function (url, data, dataTypeAnswer = "text") {
  let res = await fetch(url, {
    method: "POST",
    body: data
  });

  switch (dataTypeAnswer) {
    case "json":
      return await res.json();

    case "text":
      return await res.text();

    case "blob":
      return await res.blob();
  }
};

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/lib */ "./src/js/lib/lib.js");

Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])("#first").on("click", function () {
  Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])(".content").eq(0).fadeToggle(800);
});
Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])("[data-count='second']").on("click", function () {
  Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])(".content").eq(1).fadeToggle(800);
});
Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])("button").eq(2).on("click", function () {
  Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])(".content").fadeToggle(800);
}); // $(".wrap").html(
//   `
//   <div class="dropdown m-20">
//     <button class="btn btn-primary dropdown-toggle" name="kdlsk" id="dropDownMenuButton">Dropdown button</button>
//     <div class="dropdown-menu" data-dopdown-id="dropDownMenuButton">
//         <a href="#" class="dropdown-item">Action #1</a>
//         <a href="#" class="dropdown-item">Action #2</a>
//         <a href="#" class="dropdown-item">Action #3</a>
//     </div>
//   </div>
//   `
// )

Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])(".dropdown-toggle").dropdown();
Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])("[data-toggle=modal]").modal();
Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])("#trigger").on("click", function () {
  Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])("#trigger").createModal({
    text: {
      title: "Modal title 2",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, quidem veritatis aperiam accusamus numquam impedit officiis quasi obcaecati non tenetur iusto, totam eligendi dolorum rerum accusantium mollitia neque cum! Perspiciatis!"
    },
    btns: {
      count: 3,
      settings: [["close", ["btn-danger", "mr-20"], true], ["Save changes", ["btn-succes"], false, () => {
        alert("Данные сохранены");
      }], ["Another btn", ["btn-warning", "ml-10"], false, () => {
        alert("Hello World");
      }]]
    }
  });
});
Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])("[data-tabpanel] .tab-item").tab();
Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])(".accordion-header").accordion();
Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])(".carousel").carousel({
  slides: 3,
  autoPlay: true,
  indicator: true
});
Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])().get("https://jsonplaceholder.typicode.com/todos/1").then(res => console.log(res));

/***/ })

/******/ });
//# sourceMappingURL=script.js.map