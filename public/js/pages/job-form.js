/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/components/Form/Form.ts":
/*!****************************************!*\
  !*** ./src/js/components/Form/Form.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Form)
/* harmony export */ });
/* harmony import */ var _FormField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormField */ "./src/js/components/Form/FormField.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var Form = /*#__PURE__*/function () {
  function Form(form) {
    _classCallCheck(this, Form);
    this.fields = [];
    this.submitCallback = function () {};
    this.formElement = typeof form === "string" ? document.querySelector(form) : form;
    if (!this.formElement || !(this.formElement instanceof HTMLFormElement)) {
      throw new Error("Form not found");
    }
    if (!this.formElement.hasAttribute("novalidate")) {
      this.formElement.setAttribute("novalidate", "");
    }
  }
  return _createClass(Form, [{
    key: "addField",
    value: function addField(config) {
      var field = new _FormField__WEBPACK_IMPORTED_MODULE_0__["default"](config);
      this.fields.push(field);
    }
  }, {
    key: "onSubmit",
    value: function onSubmit(callback) {
      var _this = this;
      this.submitCallback = callback;
      this.formElement.addEventListener("submit", function (event) {
        return _this.handleSubmit(event);
      });
    }
  }, {
    key: "reset",
    value: function reset() {
      this.formElement.reset();
      this.fields.forEach(function (field) {
        field.validate();
      });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      event.preventDefault();
      var isFormValid = true;
      this.fields.forEach(function (field) {
        if (!field.validate()) {
          isFormValid = false;
        }
      });
      if (isFormValid) {
        this.submitCallback(event, this.formElement);
      }
    }
  }]);
}();


/***/ }),

/***/ "./src/js/components/Form/FormField.ts":
/*!*********************************************!*\
  !*** ./src/js/components/Form/FormField.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _validation_enum_SelectorTypeEnum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../validation/enum/SelectorTypeEnum */ "./src/js/validation/enum/SelectorTypeEnum.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var FormField = /*#__PURE__*/function () {
  function FormField(config) {
    _classCallCheck(this, FormField);
    this.element = this.getElement(config.selector, config.selectorType || FormField.DEFAULT_SELECTOR_TYPE);
    this.errorElement = this.getElement(config.errorSelector, config.errorSelectorType || FormField.DEFAULT_SELECTOR_TYPE);
    this.validators = config.validator instanceof Array ? config.validator : [config.validator];
    this.event = config.event || this.handleNoEvent();
    this.attachEvent();
  }
  return _createClass(FormField, [{
    key: "handleNoEvent",
    value: function handleNoEvent() {
      switch (this.element.getAttribute("type")) {
        case "text":
        case "email":
        case "password":
        case "number":
        case "textarea":
          return "input";
        case "checkbox":
        case "radio":
        case "select":
        case "select-one":
        case "select-multiple":
          return "change";
        default:
          return "input";
      }
    }
  }, {
    key: "getElement",
    value: function getElement(selector, type) {
      if (typeof selector === "string") {
        switch (type) {
          case _validation_enum_SelectorTypeEnum__WEBPACK_IMPORTED_MODULE_0__["default"].NAME:
            return document.querySelector("[name=\"".concat(selector, "\"]"));
          case _validation_enum_SelectorTypeEnum__WEBPACK_IMPORTED_MODULE_0__["default"].ID:
            return document.getElementById(selector);
          case _validation_enum_SelectorTypeEnum__WEBPACK_IMPORTED_MODULE_0__["default"].DATA:
            return document.querySelector("[data-".concat(selector, "]"));
          default:
            throw new Error("Invalid selector type");
        }
      } else {
        return selector;
      }
    }
  }, {
    key: "attachEvent",
    value: function attachEvent() {
      var _this = this;
      this.element.addEventListener(this.event, function () {
        return _this.validate();
      });
    }
  }, {
    key: "validate",
    value: function validate() {
      var value = this.element.value;
      var isValid = true;
      var _iterator = _createForOfIteratorHelper(this.validators),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var validator = _step.value;
          if (!validator.validate(value)) {
            this.errorElement.textContent = validator.getErrorMessage();
            this.errorElement.classList.remove("hidden");
            this.element.classList.add("bg-red-50", "border-red-300");
            isValid = false;
            break;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      if (isValid) {
        this.errorElement.classList.add("hidden");
        this.element.classList.remove("bg-red-50", "border-red-300");
      }
      return isValid;
    }
  }, {
    key: "reset",
    value: function reset() {
      this.element.value = "";
      this.errorElement.textContent = "";
      this.errorElement.classList.add("hidden");
    }
  }]);
}();
FormField.DEFAULT_SELECTOR_TYPE = _validation_enum_SelectorTypeEnum__WEBPACK_IMPORTED_MODULE_0__["default"].ID;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormField);

/***/ }),

/***/ "./src/js/enum/CountryCodeEnum.ts":
/*!****************************************!*\
  !*** ./src/js/enum/CountryCodeEnum.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var CountryCodeEnum;
(function (CountryCodeEnum) {
  CountryCodeEnum["CANADA"] = "CA";
  CountryCodeEnum["USA"] = "US";
  CountryCodeEnum["UK"] = "UK";
})(CountryCodeEnum || (CountryCodeEnum = {}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CountryCodeEnum);

/***/ }),

/***/ "./src/js/validation/classes/EmailValidator.ts":
/*!*****************************************************!*\
  !*** ./src/js/validation/classes/EmailValidator.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EmailValidator)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var EmailValidator = /*#__PURE__*/function () {
  function EmailValidator() {
    _classCallCheck(this, EmailValidator);
    this.emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  }
  return _createClass(EmailValidator, [{
    key: "validate",
    value: function validate(value) {
      return this.emailPattern.test(value);
    }
  }, {
    key: "getErrorMessage",
    value: function getErrorMessage() {
      return "Veuillez entrer une adresse e-mail valide.";
    }
  }]);
}();


/***/ }),

/***/ "./src/js/validation/classes/PhoneValidator.ts":
/*!*****************************************************!*\
  !*** ./src/js/validation/classes/PhoneValidator.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PhoneValidator)
/* harmony export */ });
/* harmony import */ var _enum_CountryCodeEnum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../enum/CountryCodeEnum */ "./src/js/enum/CountryCodeEnum.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var PhoneValidator = /*#__PURE__*/function () {
  function PhoneValidator(country) {
    _classCallCheck(this, PhoneValidator);
    this.country = country;
  }
  return _createClass(PhoneValidator, [{
    key: "validate",
    value: function validate(value) {
      var pattern = this.getPattern();
      return pattern.test(value);
    }
  }, {
    key: "getErrorMessage",
    value: function getErrorMessage() {
      switch (this.country) {
        case _enum_CountryCodeEnum__WEBPACK_IMPORTED_MODULE_0__["default"].CANADA:
          return "Veuillez entrer un numéro de téléphone Canadien valide (ex: 514-123-4567)";
        case _enum_CountryCodeEnum__WEBPACK_IMPORTED_MODULE_0__["default"].USA:
          return "Veuillez entrer un numéro de téléphone Américain valide (ex: 555-555-5555)";
        case _enum_CountryCodeEnum__WEBPACK_IMPORTED_MODULE_0__["default"].UK:
          return "Veuillez entrer un numéro de téléphone Anglais valide (ex: 07123 456789)";
        default:
          return "Veuillez entrer un num\xE9ro de t\xE9l\xE9phone valide pour ".concat(this.country, ".");
      }
    }
  }, {
    key: "getPattern",
    value: function getPattern() {
      switch (this.country) {
        case _enum_CountryCodeEnum__WEBPACK_IMPORTED_MODULE_0__["default"].CANADA:
        case _enum_CountryCodeEnum__WEBPACK_IMPORTED_MODULE_0__["default"].USA:
          return /^(?:\+1[-.●]?)?\(?([2-9][0-9]{2})\)?[-.●]?([2-9][0-9]{2})[-.●]?([0-9]{4})$/;
        case _enum_CountryCodeEnum__WEBPACK_IMPORTED_MODULE_0__["default"].UK:
          return /^(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$/;
        default:
          throw new Error("Country code ".concat(this.country, " is not supported."));
      }
    }
  }]);
}();


/***/ }),

/***/ "./src/js/validation/classes/RequiredValidator.ts":
/*!********************************************************!*\
  !*** ./src/js/validation/classes/RequiredValidator.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RequiredValidator)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var RequiredValidator = /*#__PURE__*/function () {
  function RequiredValidator() {
    _classCallCheck(this, RequiredValidator);
  }
  return _createClass(RequiredValidator, [{
    key: "validate",
    value: function validate(value) {
      return value.trim().length > 0;
    }
  }, {
    key: "getErrorMessage",
    value: function getErrorMessage() {
      return "Ce champ est obligatoire.";
    }
  }]);
}();


/***/ }),

/***/ "./src/js/validation/enum/SelectorTypeEnum.ts":
/*!****************************************************!*\
  !*** ./src/js/validation/enum/SelectorTypeEnum.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var SelectorTypeEnum;
(function (SelectorTypeEnum) {
  SelectorTypeEnum["NAME"] = "name";
  SelectorTypeEnum["ID"] = "id";
  SelectorTypeEnum["DATA"] = "data";
})(SelectorTypeEnum || (SelectorTypeEnum = {}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectorTypeEnum);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************************!*\
  !*** ./src/js/pages/job-form.ts ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Form_Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../components/Form/Form */ "./src/js/components/Form/Form.ts");
/* harmony import */ var _validation_classes_EmailValidator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../validation/classes/EmailValidator */ "./src/js/validation/classes/EmailValidator.ts");
/* harmony import */ var _validation_classes_RequiredValidator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../validation/classes/RequiredValidator */ "./src/js/validation/classes/RequiredValidator.ts");
/* harmony import */ var _validation_classes_PhoneValidator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../validation/classes/PhoneValidator */ "./src/js/validation/classes/PhoneValidator.ts");
/* harmony import */ var _enum_CountryCodeEnum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../enum/CountryCodeEnum */ "./src/js/enum/CountryCodeEnum.ts");





document.addEventListener("DOMContentLoaded", function () {
  var _a;
  (_a = document === null || document === void 0 ? void 0 : document.getElementById("applyButton")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    var _a;
    (_a = document === null || document === void 0 ? void 0 : document.getElementById("applyForm")) === null || _a === void 0 ? void 0 : _a.classList.toggle("hidden");
  });
});
var form = new _components_Form_Form__WEBPACK_IMPORTED_MODULE_0__["default"]("#jobApplicationForm");
form.addField({
  selector: "name",
  errorSelector: "nameError",
  validator: new _validation_classes_RequiredValidator__WEBPACK_IMPORTED_MODULE_2__["default"]()
});
form.addField({
  selector: "email",
  errorSelector: "emailError",
  validator: new _validation_classes_EmailValidator__WEBPACK_IMPORTED_MODULE_1__["default"]()
});
form.addField({
  selector: "phone",
  errorSelector: "phoneError",
  validator: new _validation_classes_PhoneValidator__WEBPACK_IMPORTED_MODULE_3__["default"](_enum_CountryCodeEnum__WEBPACK_IMPORTED_MODULE_4__["default"].CANADA)
});
form.onSubmit(function () {
  alert("Merci, votre candidature a bien été reçue !");
  form.reset();
});
/******/ })()
;