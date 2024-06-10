"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/check-password-strength";
exports.ids = ["vendor-chunks/check-password-strength"];
exports.modules = {

/***/ "(ssr)/./node_modules/check-password-strength/dist/index.mjs":
/*!*************************************************************!*\
  !*** ./node_modules/check-password-strength/dist/index.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ index),\n/* harmony export */   defaultOptions: () => (/* binding */ defaultOptions_1),\n/* harmony export */   passwordStrength: () => (/* binding */ passwordStrength_1)\n/* harmony export */ });\nfunction getDefaultExportFromCjs (x) {\r\n\treturn x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;\r\n}\r\n\r\nvar src = {exports: {}};\r\n\r\nconst defaultOptions = [\r\n  {\r\n    id: 0,\r\n    value: \"Too weak\",\r\n    minDiversity: 0,\r\n    minLength: 0\r\n  },\r\n  {\r\n    id: 1,\r\n    value: \"Weak\",\r\n    minDiversity: 2,\r\n    minLength: 6\r\n  },\r\n  {\r\n    id: 2,\r\n    value: \"Medium\",\r\n    minDiversity: 4,\r\n    minLength: 8\r\n  },\r\n  {\r\n    id: 3,\r\n    value: \"Strong\",\r\n    minDiversity: 4,\r\n    minLength: 10\r\n  }\r\n];\r\n\r\nconst passwordStrength = (password, options = defaultOptions, allowedSymbols = \"!\\\"#\\$%&'\\(\\)\\*\\+,-\\./:;<=>\\?@\\[\\\\\\\\\\\\]\\^_`\\{|\\}~\") => {\r\n\r\n  let passwordCopy = password || '';\r\n\r\n  options[0].minDiversity = 0,\r\n    options[0].minLength = 0;\r\n\r\n  const rules = [\r\n    {\r\n      regex: \"[a-z]\",\r\n      message: 'lowercase'\r\n    },\r\n    {\r\n      regex: '[A-Z]',\r\n      message: 'uppercase'\r\n    },\r\n    {\r\n      regex: '[0-9]',\r\n      message: 'number'\r\n    },\r\n  ];\r\n\r\n  if (allowedSymbols) {\r\n    rules.push({\r\n      regex: `[${allowedSymbols}]`,\r\n      message: 'symbol'\r\n    });\r\n  }\r\n\r\n  let strength = {};\r\n\r\n  strength.contains = rules\r\n    .filter(rule => new RegExp(`${rule.regex}`).test(passwordCopy))\r\n    .map(rule => rule.message);\r\n\r\n  strength.length = passwordCopy.length;\r\n\r\n  let fulfilledOptions = options\r\n    .filter(option => strength.contains.length >= option.minDiversity)\r\n    .filter(option => strength.length >= option.minLength)\r\n    .sort((o1, o2) => o2.id - o1.id)\r\n    .map(option => ({ id: option.id, value: option.value }));\r\n\r\n  Object.assign(strength, fulfilledOptions[0]);\r\n\r\n  return strength;\r\n};\r\n\r\nsrc.exports = { passwordStrength, defaultOptions };\r\nvar passwordStrength_1 = src.exports.passwordStrength = passwordStrength;\r\nvar defaultOptions_1 = src.exports.defaultOptions = defaultOptions;\r\n\r\nvar srcExports = src.exports;\r\nvar index = /*@__PURE__*/getDefaultExportFromCjs(srcExports);\r\n\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvY2hlY2stcGFzc3dvcmQtc3RyZW5ndGgvZGlzdC9pbmRleC5tanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3R0FBd0cscUJBQXFCLEdBQUc7QUFDaEk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixlQUFlO0FBQ2hDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsV0FBVztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLG9DQUFvQztBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3dHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9ub2RlX21vZHVsZXMvY2hlY2stcGFzc3dvcmQtc3RyZW5ndGgvZGlzdC9pbmRleC5tanM/NWJmNyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBnZXREZWZhdWx0RXhwb3J0RnJvbUNqcyAoeCkge1xyXG5cdHJldHVybiB4ICYmIHguX19lc01vZHVsZSAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoeCwgJ2RlZmF1bHQnKSA/IHhbJ2RlZmF1bHQnXSA6IHg7XHJcbn1cclxuXHJcbnZhciBzcmMgPSB7ZXhwb3J0czoge319O1xyXG5cclxuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSBbXHJcbiAge1xyXG4gICAgaWQ6IDAsXHJcbiAgICB2YWx1ZTogXCJUb28gd2Vha1wiLFxyXG4gICAgbWluRGl2ZXJzaXR5OiAwLFxyXG4gICAgbWluTGVuZ3RoOiAwXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMSxcclxuICAgIHZhbHVlOiBcIldlYWtcIixcclxuICAgIG1pbkRpdmVyc2l0eTogMixcclxuICAgIG1pbkxlbmd0aDogNlxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDIsXHJcbiAgICB2YWx1ZTogXCJNZWRpdW1cIixcclxuICAgIG1pbkRpdmVyc2l0eTogNCxcclxuICAgIG1pbkxlbmd0aDogOFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDMsXHJcbiAgICB2YWx1ZTogXCJTdHJvbmdcIixcclxuICAgIG1pbkRpdmVyc2l0eTogNCxcclxuICAgIG1pbkxlbmd0aDogMTBcclxuICB9XHJcbl07XHJcblxyXG5jb25zdCBwYXNzd29yZFN0cmVuZ3RoID0gKHBhc3N3b3JkLCBvcHRpb25zID0gZGVmYXVsdE9wdGlvbnMsIGFsbG93ZWRTeW1ib2xzID0gXCIhXFxcIiNcXCQlJidcXChcXClcXCpcXCssLVxcLi86Ozw9PlxcP0BcXFtcXFxcXFxcXFxcXFxdXFxeX2BcXHt8XFx9flwiKSA9PiB7XHJcblxyXG4gIGxldCBwYXNzd29yZENvcHkgPSBwYXNzd29yZCB8fCAnJztcclxuXHJcbiAgb3B0aW9uc1swXS5taW5EaXZlcnNpdHkgPSAwLFxyXG4gICAgb3B0aW9uc1swXS5taW5MZW5ndGggPSAwO1xyXG5cclxuICBjb25zdCBydWxlcyA9IFtcclxuICAgIHtcclxuICAgICAgcmVnZXg6IFwiW2Etel1cIixcclxuICAgICAgbWVzc2FnZTogJ2xvd2VyY2FzZSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHJlZ2V4OiAnW0EtWl0nLFxyXG4gICAgICBtZXNzYWdlOiAndXBwZXJjYXNlJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcmVnZXg6ICdbMC05XScsXHJcbiAgICAgIG1lc3NhZ2U6ICdudW1iZXInXHJcbiAgICB9LFxyXG4gIF07XHJcblxyXG4gIGlmIChhbGxvd2VkU3ltYm9scykge1xyXG4gICAgcnVsZXMucHVzaCh7XHJcbiAgICAgIHJlZ2V4OiBgWyR7YWxsb3dlZFN5bWJvbHN9XWAsXHJcbiAgICAgIG1lc3NhZ2U6ICdzeW1ib2wnXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGxldCBzdHJlbmd0aCA9IHt9O1xyXG5cclxuICBzdHJlbmd0aC5jb250YWlucyA9IHJ1bGVzXHJcbiAgICAuZmlsdGVyKHJ1bGUgPT4gbmV3IFJlZ0V4cChgJHtydWxlLnJlZ2V4fWApLnRlc3QocGFzc3dvcmRDb3B5KSlcclxuICAgIC5tYXAocnVsZSA9PiBydWxlLm1lc3NhZ2UpO1xyXG5cclxuICBzdHJlbmd0aC5sZW5ndGggPSBwYXNzd29yZENvcHkubGVuZ3RoO1xyXG5cclxuICBsZXQgZnVsZmlsbGVkT3B0aW9ucyA9IG9wdGlvbnNcclxuICAgIC5maWx0ZXIob3B0aW9uID0+IHN0cmVuZ3RoLmNvbnRhaW5zLmxlbmd0aCA+PSBvcHRpb24ubWluRGl2ZXJzaXR5KVxyXG4gICAgLmZpbHRlcihvcHRpb24gPT4gc3RyZW5ndGgubGVuZ3RoID49IG9wdGlvbi5taW5MZW5ndGgpXHJcbiAgICAuc29ydCgobzEsIG8yKSA9PiBvMi5pZCAtIG8xLmlkKVxyXG4gICAgLm1hcChvcHRpb24gPT4gKHsgaWQ6IG9wdGlvbi5pZCwgdmFsdWU6IG9wdGlvbi52YWx1ZSB9KSk7XHJcblxyXG4gIE9iamVjdC5hc3NpZ24oc3RyZW5ndGgsIGZ1bGZpbGxlZE9wdGlvbnNbMF0pO1xyXG5cclxuICByZXR1cm4gc3RyZW5ndGg7XHJcbn07XHJcblxyXG5zcmMuZXhwb3J0cyA9IHsgcGFzc3dvcmRTdHJlbmd0aCwgZGVmYXVsdE9wdGlvbnMgfTtcclxudmFyIHBhc3N3b3JkU3RyZW5ndGhfMSA9IHNyYy5leHBvcnRzLnBhc3N3b3JkU3RyZW5ndGggPSBwYXNzd29yZFN0cmVuZ3RoO1xyXG52YXIgZGVmYXVsdE9wdGlvbnNfMSA9IHNyYy5leHBvcnRzLmRlZmF1bHRPcHRpb25zID0gZGVmYXVsdE9wdGlvbnM7XHJcblxyXG52YXIgc3JjRXhwb3J0cyA9IHNyYy5leHBvcnRzO1xyXG52YXIgaW5kZXggPSAvKkBfX1BVUkVfXyovZ2V0RGVmYXVsdEV4cG9ydEZyb21DanMoc3JjRXhwb3J0cyk7XHJcblxyXG5leHBvcnQgeyBpbmRleCBhcyBkZWZhdWx0LCBkZWZhdWx0T3B0aW9uc18xIGFzIGRlZmF1bHRPcHRpb25zLCBwYXNzd29yZFN0cmVuZ3RoXzEgYXMgcGFzc3dvcmRTdHJlbmd0aCB9O1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/check-password-strength/dist/index.mjs\n");

/***/ })

};
;