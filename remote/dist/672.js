(self["webpackChunkremote"] = self["webpackChunkremote"] || []).push([[672],{

/***/ 672:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   stringToArray: () => (/* binding */ stringToArray)
/* harmony export */ });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(985);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_es__WEBPACK_IMPORTED_MODULE_0__);


// This is exported for consumers for this remote
function stringToArray(str) {
  return str.split(",").map((n) => parseInt(n));
}

window.calculateSum = function () {
  const str = document.getElementById("input").value;
  const numbers = stringToArray(str);
  const total = (0,lodash_es__WEBPACK_IMPORTED_MODULE_0__.sum)(numbers);

  document.getElementById("result").innerText = total;
};


/***/ })

}])