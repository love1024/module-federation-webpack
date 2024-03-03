(self["webpackChunkhost"] = self["webpackChunkhost"] || []).push([[672],{

/***/ 672:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(985);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_es__WEBPACK_IMPORTED_MODULE_0__);
// Here, we are importing the remote module
const { stringToArray } = await __webpack_require__.e(/* import() */ 55).then(__webpack_require__.t.bind(__webpack_require__, 55, 23));


window.calculateAverage = function () {
  const str = document.getElementById("input").value;
  // Use external function to convert string to array
  const arr = stringToArray(str);
  const average = (0,lodash_es__WEBPACK_IMPORTED_MODULE_0__.sum)(arr) / arr.length;

  document.getElementById("result").innerText = average;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ })

}])