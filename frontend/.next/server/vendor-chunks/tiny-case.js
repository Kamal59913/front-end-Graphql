/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/tiny-case";
exports.ids = ["vendor-chunks/tiny-case"];
exports.modules = {

/***/ "(ssr)/./node_modules/tiny-case/index.js":
/*!*****************************************!*\
  !*** ./node_modules/tiny-case/index.js ***!
  \*****************************************/
/***/ ((module) => {

eval("const reWords = /[A-Z\\xc0-\\xd6\\xd8-\\xde]?[a-z\\xdf-\\xf6\\xf8-\\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000]|[A-Z\\xc0-\\xd6\\xd8-\\xde]|$)|(?:[A-Z\\xc0-\\xd6\\xd8-\\xde]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000]|[A-Z\\xc0-\\xd6\\xd8-\\xde](?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])|$)|[A-Z\\xc0-\\xd6\\xd8-\\xde]?(?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\\xc0-\\xd6\\xd8-\\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])|\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])|\\d+|(?:[\\u2700-\\u27bf]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff])[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?(?:\\u200d(?:[^\\ud800-\\udfff]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff])[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?)*/g\n\nconst words = (str) => str.match(reWords) || []\n\nconst upperFirst = (str) => str[0].toUpperCase() + str.slice(1)\n\nconst join = (str, d) => words(str).join(d).toLowerCase()\n\nconst camelCase = (str) =>\n  words(str).reduce(\n    (acc, next) =>\n      `${acc}${\n        !acc\n          ? next.toLowerCase()\n          : next[0].toUpperCase() + next.slice(1).toLowerCase()\n      }`,\n    '',\n  )\n\nconst pascalCase = (str) => upperFirst(camelCase(str))\n\nconst snakeCase = (str) => join(str, '_')\n\nconst kebabCase = (str) => join(str, '-')\n\nconst sentenceCase = (str) => upperFirst(join(str, ' '))\n\nconst titleCase = (str) => words(str).map(upperFirst).join(' ')\n\nmodule.exports = {\n  words,\n  upperFirst,\n  camelCase,\n  pascalCase,\n  snakeCase,\n  kebabCase,\n  sentenceCase,\n  titleCase,\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdGlueS1jYXNlL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBLDhyREFBOHJELEVBQUUsMEtBQTBLLEVBQUU7O0FBRTUyRDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLElBQUk7QUFDYjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vbm9kZV9tb2R1bGVzL3RpbnktY2FzZS9pbmRleC5qcz83YmNmIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHJlV29yZHMgPSAvW0EtWlxceGMwLVxceGQ2XFx4ZDgtXFx4ZGVdP1thLXpcXHhkZi1cXHhmNlxceGY4LVxceGZmXSsoPzpbJ+KAmV0oPzpkfGxsfG18cmV8c3x0fHZlKSk/KD89W1xceGFjXFx4YjFcXHhkN1xceGY3XFx4MDAtXFx4MmZcXHgzYS1cXHg0MFxceDViLVxceDYwXFx4N2ItXFx4YmZcXHUyMDAwLVxcdTIwNmYgXFx0XFx4MGJcXGZcXHhhMFxcdWZlZmZcXG5cXHJcXHUyMDI4XFx1MjAyOVxcdTE2ODBcXHUxODBlXFx1MjAwMFxcdTIwMDFcXHUyMDAyXFx1MjAwM1xcdTIwMDRcXHUyMDA1XFx1MjAwNlxcdTIwMDdcXHUyMDA4XFx1MjAwOVxcdTIwMGFcXHUyMDJmXFx1MjA1ZlxcdTMwMDBdfFtBLVpcXHhjMC1cXHhkNlxceGQ4LVxceGRlXXwkKXwoPzpbQS1aXFx4YzAtXFx4ZDZcXHhkOC1cXHhkZV18W15cXHVkODAwLVxcdWRmZmZcXHhhY1xceGIxXFx4ZDdcXHhmN1xceDAwLVxceDJmXFx4M2EtXFx4NDBcXHg1Yi1cXHg2MFxceDdiLVxceGJmXFx1MjAwMC1cXHUyMDZmIFxcdFxceDBiXFxmXFx4YTBcXHVmZWZmXFxuXFxyXFx1MjAyOFxcdTIwMjlcXHUxNjgwXFx1MTgwZVxcdTIwMDBcXHUyMDAxXFx1MjAwMlxcdTIwMDNcXHUyMDA0XFx1MjAwNVxcdTIwMDZcXHUyMDA3XFx1MjAwOFxcdTIwMDlcXHUyMDBhXFx1MjAyZlxcdTIwNWZcXHUzMDAwXFxkK1xcdTI3MDAtXFx1MjdiZmEtelxceGRmLVxceGY2XFx4ZjgtXFx4ZmZBLVpcXHhjMC1cXHhkNlxceGQ4LVxceGRlXSkrKD86WyfigJldKD86RHxMTHxNfFJFfFN8VHxWRSkpPyg/PVtcXHhhY1xceGIxXFx4ZDdcXHhmN1xceDAwLVxceDJmXFx4M2EtXFx4NDBcXHg1Yi1cXHg2MFxceDdiLVxceGJmXFx1MjAwMC1cXHUyMDZmIFxcdFxceDBiXFxmXFx4YTBcXHVmZWZmXFxuXFxyXFx1MjAyOFxcdTIwMjlcXHUxNjgwXFx1MTgwZVxcdTIwMDBcXHUyMDAxXFx1MjAwMlxcdTIwMDNcXHUyMDA0XFx1MjAwNVxcdTIwMDZcXHUyMDA3XFx1MjAwOFxcdTIwMDlcXHUyMDBhXFx1MjAyZlxcdTIwNWZcXHUzMDAwXXxbQS1aXFx4YzAtXFx4ZDZcXHhkOC1cXHhkZV0oPzpbYS16XFx4ZGYtXFx4ZjZcXHhmOC1cXHhmZl18W15cXHVkODAwLVxcdWRmZmZcXHhhY1xceGIxXFx4ZDdcXHhmN1xceDAwLVxceDJmXFx4M2EtXFx4NDBcXHg1Yi1cXHg2MFxceDdiLVxceGJmXFx1MjAwMC1cXHUyMDZmIFxcdFxceDBiXFxmXFx4YTBcXHVmZWZmXFxuXFxyXFx1MjAyOFxcdTIwMjlcXHUxNjgwXFx1MTgwZVxcdTIwMDBcXHUyMDAxXFx1MjAwMlxcdTIwMDNcXHUyMDA0XFx1MjAwNVxcdTIwMDZcXHUyMDA3XFx1MjAwOFxcdTIwMDlcXHUyMDBhXFx1MjAyZlxcdTIwNWZcXHUzMDAwXFxkK1xcdTI3MDAtXFx1MjdiZmEtelxceGRmLVxceGY2XFx4ZjgtXFx4ZmZBLVpcXHhjMC1cXHhkNlxceGQ4LVxceGRlXSl8JCl8W0EtWlxceGMwLVxceGQ2XFx4ZDgtXFx4ZGVdPyg/OlthLXpcXHhkZi1cXHhmNlxceGY4LVxceGZmXXxbXlxcdWQ4MDAtXFx1ZGZmZlxceGFjXFx4YjFcXHhkN1xceGY3XFx4MDAtXFx4MmZcXHgzYS1cXHg0MFxceDViLVxceDYwXFx4N2ItXFx4YmZcXHUyMDAwLVxcdTIwNmYgXFx0XFx4MGJcXGZcXHhhMFxcdWZlZmZcXG5cXHJcXHUyMDI4XFx1MjAyOVxcdTE2ODBcXHUxODBlXFx1MjAwMFxcdTIwMDFcXHUyMDAyXFx1MjAwM1xcdTIwMDRcXHUyMDA1XFx1MjAwNlxcdTIwMDdcXHUyMDA4XFx1MjAwOVxcdTIwMGFcXHUyMDJmXFx1MjA1ZlxcdTMwMDBcXGQrXFx1MjcwMC1cXHUyN2JmYS16XFx4ZGYtXFx4ZjZcXHhmOC1cXHhmZkEtWlxceGMwLVxceGQ2XFx4ZDgtXFx4ZGVdKSsoPzpbJ+KAmV0oPzpkfGxsfG18cmV8c3x0fHZlKSk/fFtBLVpcXHhjMC1cXHhkNlxceGQ4LVxceGRlXSsoPzpbJ+KAmV0oPzpEfExMfE18UkV8U3xUfFZFKSk/fFxcZCooPzoxU1R8Mk5EfDNSRHwoPyFbMTIzXSlcXGRUSCkoPz1cXGJ8W2Etel9dKXxcXGQqKD86MXN0fDJuZHwzcmR8KD8hWzEyM10pXFxkdGgpKD89XFxifFtBLVpfXSl8XFxkK3woPzpbXFx1MjcwMC1cXHUyN2JmXXwoPzpcXHVkODNjW1xcdWRkZTYtXFx1ZGRmZl0pezJ9fFtcXHVkODAwLVxcdWRiZmZdW1xcdWRjMDAtXFx1ZGZmZl0pW1xcdWZlMGVcXHVmZTBmXT8oPzpbXFx1MDMwMC1cXHUwMzZmXFx1ZmUyMC1cXHVmZTJmXFx1MjBkMC1cXHUyMGZmXXxcXHVkODNjW1xcdWRmZmItXFx1ZGZmZl0pPyg/OlxcdTIwMGQoPzpbXlxcdWQ4MDAtXFx1ZGZmZl18KD86XFx1ZDgzY1tcXHVkZGU2LVxcdWRkZmZdKXsyfXxbXFx1ZDgwMC1cXHVkYmZmXVtcXHVkYzAwLVxcdWRmZmZdKVtcXHVmZTBlXFx1ZmUwZl0/KD86W1xcdTAzMDAtXFx1MDM2ZlxcdWZlMjAtXFx1ZmUyZlxcdTIwZDAtXFx1MjBmZl18XFx1ZDgzY1tcXHVkZmZiLVxcdWRmZmZdKT8pKi9nXG5cbmNvbnN0IHdvcmRzID0gKHN0cikgPT4gc3RyLm1hdGNoKHJlV29yZHMpIHx8IFtdXG5cbmNvbnN0IHVwcGVyRmlyc3QgPSAoc3RyKSA9PiBzdHJbMF0udG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKVxuXG5jb25zdCBqb2luID0gKHN0ciwgZCkgPT4gd29yZHMoc3RyKS5qb2luKGQpLnRvTG93ZXJDYXNlKClcblxuY29uc3QgY2FtZWxDYXNlID0gKHN0cikgPT5cbiAgd29yZHMoc3RyKS5yZWR1Y2UoXG4gICAgKGFjYywgbmV4dCkgPT5cbiAgICAgIGAke2FjY30ke1xuICAgICAgICAhYWNjXG4gICAgICAgICAgPyBuZXh0LnRvTG93ZXJDYXNlKClcbiAgICAgICAgICA6IG5leHRbMF0udG9VcHBlckNhc2UoKSArIG5leHQuc2xpY2UoMSkudG9Mb3dlckNhc2UoKVxuICAgICAgfWAsXG4gICAgJycsXG4gIClcblxuY29uc3QgcGFzY2FsQ2FzZSA9IChzdHIpID0+IHVwcGVyRmlyc3QoY2FtZWxDYXNlKHN0cikpXG5cbmNvbnN0IHNuYWtlQ2FzZSA9IChzdHIpID0+IGpvaW4oc3RyLCAnXycpXG5cbmNvbnN0IGtlYmFiQ2FzZSA9IChzdHIpID0+IGpvaW4oc3RyLCAnLScpXG5cbmNvbnN0IHNlbnRlbmNlQ2FzZSA9IChzdHIpID0+IHVwcGVyRmlyc3Qoam9pbihzdHIsICcgJykpXG5cbmNvbnN0IHRpdGxlQ2FzZSA9IChzdHIpID0+IHdvcmRzKHN0cikubWFwKHVwcGVyRmlyc3QpLmpvaW4oJyAnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgd29yZHMsXG4gIHVwcGVyRmlyc3QsXG4gIGNhbWVsQ2FzZSxcbiAgcGFzY2FsQ2FzZSxcbiAgc25ha2VDYXNlLFxuICBrZWJhYkNhc2UsXG4gIHNlbnRlbmNlQ2FzZSxcbiAgdGl0bGVDYXNlLFxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tiny-case/index.js\n");

/***/ })

};
;