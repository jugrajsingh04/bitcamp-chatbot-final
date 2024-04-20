"use strict";
(() => {
var exports = {};
exports.id = 934;
exports.ids = [934];
exports.modules = {

/***/ 53:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(893);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const ChatBoxAdmin = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()({
    loader: ()=>Promise.all(/* import() */[__webpack_require__.e(910), __webpack_require__.e(738)]).then(__webpack_require__.bind(__webpack_require__, 738)),
    ssr: false
}, {
    loadableGenerated: {
        modules: [
            "chat/[id].tsx -> " + "../../components/admin/index"
        ]
    }
});
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ChatBoxAdmin, {});
}


/***/ }),

/***/ 832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 925:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 611:
/***/ ((module) => {

module.exports = import("nanoid");;

/***/ }),

/***/ 853:
/***/ ((module) => {

module.exports = import("react-textarea-autosize");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,152], () => (__webpack_exec__(53)));
module.exports = __webpack_exports__;

})();