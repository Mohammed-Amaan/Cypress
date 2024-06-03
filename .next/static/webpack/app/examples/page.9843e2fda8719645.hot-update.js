"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/examples/page",{

/***/ "(app-pages-browser)/./app/components/GrudgeList.jsx":
/*!***************************************!*\
  !*** ./app/components/GrudgeList.jsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GrudgeList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/TextField/TextField.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction grudgeReducer(state, action) {\n    console.log({\n        state,\n        action\n    });\n    if (action.type === \"ADD\") {\n        return [\n            ...state,\n            action.payload\n        ];\n    }\n    if (action.type === \"REMOVE\") {\n        return state.filter((grudge)=>grudge.id !== action.payload.id);\n    }\n    if (action.type === \"CLEAR\") {\n        return [];\n    }\n    return [];\n}\nfunction GrudgeList() {\n    _s();\n    const [grudges, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(grudgeReducer, []);\n    const [inputValue, setInputValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    console.log({\n        grudges\n    });\n    const title = grudges.length > 0 ? \"Grudges\" : \"Add Some Grudges\";\n    function deleteGrudge(grudge) {\n        dispatch({\n            type: \"REMOVE\",\n            payload: grudge\n        });\n    }\n    function clearGrudges() {\n        dispatch({\n            type: \"CLEAR\"\n        });\n    }\n    function addGrudge() {\n        if (!inputValue) return;\n        dispatch({\n            type: \"ADD\",\n            payload: {\n                text: inputValue,\n                id: Math.random()\n            }\n        });\n        setInputValue(\"\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            margin: \"20px\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                style: {\n                    margin: \"20px 0px\"\n                },\n                children: title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\amaan\\\\OneDrive\\\\Desktop\\\\cypress\\\\cypress-course\\\\app\\\\components\\\\GrudgeList.jsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    label: \"Add Grudge\",\n                    variant: \"filled\",\n                    value: inputValue,\n                    onChange: (e)=>setInputValue(e.target.value),\n                    style: {\n                        backgroundColor: \"white\"\n                    },\n                    \"data-test\": \"grudge-input\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\amaan\\\\OneDrive\\\\Desktop\\\\cypress\\\\cypress-course\\\\app\\\\components\\\\GrudgeList.jsx\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\amaan\\\\OneDrive\\\\Desktop\\\\cypress\\\\cypress-course\\\\app\\\\components\\\\GrudgeList.jsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                \"data-test\": \"grudge-button\",\n                onClick: addGrudge,\n                children: \"Add Grudge\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\amaan\\\\OneDrive\\\\Desktop\\\\cypress\\\\cypress-course\\\\app\\\\components\\\\GrudgeList.jsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                \"data-test\": \"grudge-list\",\n                style: {\n                    color: \"white\",\n                    listStyleType: \"none\"\n                },\n                children: grudges.length > 0 && grudges.map((g)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: g.text\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\amaan\\\\OneDrive\\\\Desktop\\\\cypress\\\\cypress-course\\\\app\\\\components\\\\GrudgeList.jsx\",\n                                lineNumber: 65,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                onClick: ()=>deleteGrudge(g),\n                                children: \"X\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\amaan\\\\OneDrive\\\\Desktop\\\\cypress\\\\cypress-course\\\\app\\\\components\\\\GrudgeList.jsx\",\n                                lineNumber: 66,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, g.id, true, {\n                        fileName: \"C:\\\\Users\\\\amaan\\\\OneDrive\\\\Desktop\\\\cypress\\\\cypress-course\\\\app\\\\components\\\\GrudgeList.jsx\",\n                        lineNumber: 64,\n                        columnNumber: 15\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\amaan\\\\OneDrive\\\\Desktop\\\\cypress\\\\cypress-course\\\\app\\\\components\\\\GrudgeList.jsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this),\n            grudges.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                onClick: clearGrudges,\n                children: \"Clear\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\amaan\\\\OneDrive\\\\Desktop\\\\cypress\\\\cypress-course\\\\app\\\\components\\\\GrudgeList.jsx\",\n                lineNumber: 71,\n                columnNumber: 30\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\amaan\\\\OneDrive\\\\Desktop\\\\cypress\\\\cypress-course\\\\app\\\\components\\\\GrudgeList.jsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, this);\n}\n_s(GrudgeList, \"7bZ76EPfWQW4K05HVV/zOFFqYv0=\");\n_c = GrudgeList;\nvar _c;\n$RefreshReg$(_c, \"GrudgeList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0dydWRnZUxpc3QuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ2tEO0FBQ0w7QUFFN0MsU0FBU0ksY0FBY0MsS0FBSyxFQUFFQyxNQUFNO0lBQ2xDQyxRQUFRQyxHQUFHLENBQUM7UUFBRUg7UUFBT0M7SUFBTztJQUM1QixJQUFJQSxPQUFPRyxJQUFJLEtBQUssT0FBTztRQUN6QixPQUFPO2VBQUlKO1lBQU9DLE9BQU9JLE9BQU87U0FBQztJQUNuQztJQUNBLElBQUlKLE9BQU9HLElBQUksS0FBSyxVQUFVO1FBQzVCLE9BQU9KLE1BQU1NLE1BQU0sQ0FBQyxDQUFDQyxTQUFXQSxPQUFPQyxFQUFFLEtBQUtQLE9BQU9JLE9BQU8sQ0FBQ0csRUFBRTtJQUNqRTtJQUNBLElBQUlQLE9BQU9HLElBQUksS0FBSyxTQUFTO1FBQzNCLE9BQU8sRUFBRTtJQUNYO0lBQ0EsT0FBTyxFQUFFO0FBQ1g7QUFFZSxTQUFTSzs7SUFDdEIsTUFBTSxDQUFDQyxTQUFTQyxTQUFTLEdBQUdkLGlEQUFVQSxDQUFDRSxlQUFlLEVBQUU7SUFDeEQsTUFBTSxDQUFDYSxZQUFZQyxjQUFjLEdBQUdmLCtDQUFRQSxDQUFDO0lBRTdDSSxRQUFRQyxHQUFHLENBQUM7UUFBRU87SUFBUTtJQUV0QixNQUFNSSxRQUFRSixRQUFRSyxNQUFNLEdBQUcsSUFBSSxZQUFZO0lBRS9DLFNBQVNDLGFBQWFULE1BQU07UUFDMUJJLFNBQVM7WUFBRVAsTUFBTTtZQUFVQyxTQUFTRTtRQUFPO0lBQzdDO0lBRUEsU0FBU1U7UUFDUE4sU0FBUztZQUFFUCxNQUFNO1FBQVE7SUFDM0I7SUFFQSxTQUFTYztRQUNQLElBQUksQ0FBQ04sWUFBWTtRQUNqQkQsU0FBUztZQUFFUCxNQUFNO1lBQU9DLFNBQVM7Z0JBQUVjLE1BQU1QO2dCQUFZSixJQUFJWSxLQUFLQyxNQUFNO1lBQUc7UUFBRTtRQUN6RVIsY0FBYztJQUNoQjtJQUVBLHFCQUNFLDhEQUFDUztRQUFJQyxPQUFPO1lBQUVDLFFBQVE7UUFBTzs7MEJBQzNCLDhEQUFDQztnQkFBR0YsT0FBTztvQkFBRUMsUUFBUTtnQkFBVzswQkFBSVY7Ozs7OzswQkFDcEMsOERBQUNROzBCQUNDLDRFQUFDMUIscURBQVNBO29CQUNSOEIsT0FBTTtvQkFDTkMsU0FBUTtvQkFDUkMsT0FBT2hCO29CQUNQaUIsVUFBVSxDQUFDQyxJQUFNakIsY0FBY2lCLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSztvQkFDN0NMLE9BQU87d0JBQUVTLGlCQUFpQjtvQkFBUTtvQkFDbENDLGFBQVU7Ozs7Ozs7Ozs7OzBCQUdkLDhEQUFDdEMscURBQU1BO2dCQUFDc0MsYUFBVTtnQkFBZ0JDLFNBQVNoQjswQkFBVzs7Ozs7OzBCQUd0RCw4REFBQ2lCO2dCQUNDRixhQUFVO2dCQUNWVixPQUFPO29CQUFFYSxPQUFPO29CQUFTQyxlQUFlO2dCQUFPOzBCQUU5QzNCLFFBQVFLLE1BQU0sR0FBRyxLQUNoQkwsUUFBUTRCLEdBQUcsQ0FBQyxDQUFDQztvQkFDWCxxQkFDRSw4REFBQ0M7OzBDQUNDLDhEQUFDQzswQ0FBTUYsRUFBRXBCLElBQUk7Ozs7OzswQ0FDYiw4REFBQ3hCLHFEQUFNQTtnQ0FBQ3VDLFNBQVMsSUFBTWxCLGFBQWF1QjswQ0FBSTs7Ozs7Ozt1QkFGakNBLEVBQUUvQixFQUFFOzs7OztnQkFLakI7Ozs7OztZQUVIRSxRQUFRSyxNQUFNLEdBQUcsbUJBQUssOERBQUNwQixxREFBTUE7Z0JBQUN1QyxTQUFTakI7MEJBQWM7Ozs7Ozs7Ozs7OztBQUc1RDtHQXZEd0JSO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL0dydWRnZUxpc3QuanN4P2Y1MGEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCB7IEJ1dHRvbiwgVGV4dEZpZWxkIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgdXNlUmVkdWNlciwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIGdydWRnZVJlZHVjZXIoc3RhdGUsIGFjdGlvbikge1xyXG4gIGNvbnNvbGUubG9nKHsgc3RhdGUsIGFjdGlvbiB9KTtcclxuICBpZiAoYWN0aW9uLnR5cGUgPT09IFwiQUREXCIpIHtcclxuICAgIHJldHVybiBbLi4uc3RhdGUsIGFjdGlvbi5wYXlsb2FkXTtcclxuICB9XHJcbiAgaWYgKGFjdGlvbi50eXBlID09PSBcIlJFTU9WRVwiKSB7XHJcbiAgICByZXR1cm4gc3RhdGUuZmlsdGVyKChncnVkZ2UpID0+IGdydWRnZS5pZCAhPT0gYWN0aW9uLnBheWxvYWQuaWQpO1xyXG4gIH1cclxuICBpZiAoYWN0aW9uLnR5cGUgPT09IFwiQ0xFQVJcIikge1xyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH1cclxuICByZXR1cm4gW107XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdydWRnZUxpc3QoKSB7XHJcbiAgY29uc3QgW2dydWRnZXMsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIoZ3J1ZGdlUmVkdWNlciwgW10pO1xyXG4gIGNvbnN0IFtpbnB1dFZhbHVlLCBzZXRJbnB1dFZhbHVlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zb2xlLmxvZyh7IGdydWRnZXMgfSk7XHJcblxyXG4gIGNvbnN0IHRpdGxlID0gZ3J1ZGdlcy5sZW5ndGggPiAwID8gXCJHcnVkZ2VzXCIgOiBcIkFkZCBTb21lIEdydWRnZXNcIjtcclxuXHJcbiAgZnVuY3Rpb24gZGVsZXRlR3J1ZGdlKGdydWRnZSkge1xyXG4gICAgZGlzcGF0Y2goeyB0eXBlOiBcIlJFTU9WRVwiLCBwYXlsb2FkOiBncnVkZ2UgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjbGVhckdydWRnZXMoKSB7XHJcbiAgICBkaXNwYXRjaCh7IHR5cGU6IFwiQ0xFQVJcIiB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGFkZEdydWRnZSgpIHtcclxuICAgIGlmICghaW5wdXRWYWx1ZSkgcmV0dXJuO1xyXG4gICAgZGlzcGF0Y2goeyB0eXBlOiBcIkFERFwiLCBwYXlsb2FkOiB7IHRleHQ6IGlucHV0VmFsdWUsIGlkOiBNYXRoLnJhbmRvbSgpIH0gfSk7XHJcbiAgICBzZXRJbnB1dFZhbHVlKFwiXCIpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjIwcHhcIiB9fT5cclxuICAgICAgPGgzIHN0eWxlPXt7IG1hcmdpbjogXCIyMHB4IDBweFwiIH19Pnt0aXRsZX08L2gzPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgIGxhYmVsPVwiQWRkIEdydWRnZVwiXHJcbiAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcclxuICAgICAgICAgIHZhbHVlPXtpbnB1dFZhbHVlfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRJbnB1dFZhbHVlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiIH19XHJcbiAgICAgICAgICBkYXRhLXRlc3Q9XCJncnVkZ2UtaW5wdXRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8QnV0dG9uIGRhdGEtdGVzdD1cImdydWRnZS1idXR0b25cIiBvbkNsaWNrPXthZGRHcnVkZ2V9PlxyXG4gICAgICAgIEFkZCBHcnVkZ2VcclxuICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDx1bFxyXG4gICAgICAgIGRhdGEtdGVzdD1cImdydWRnZS1saXN0XCJcclxuICAgICAgICBzdHlsZT17eyBjb2xvcjogXCJ3aGl0ZVwiLCBsaXN0U3R5bGVUeXBlOiBcIm5vbmVcIiB9fVxyXG4gICAgICA+XHJcbiAgICAgICAge2dydWRnZXMubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgZ3J1ZGdlcy5tYXAoKGcpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8bGkga2V5PXtnLmlkfT5cclxuICAgICAgICAgICAgICAgIDxzcGFuPntnLnRleHR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBkZWxldGVHcnVkZ2UoZyl9Plg8L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICAgIHtncnVkZ2VzLmxlbmd0aCA+IDAgJiYgPEJ1dHRvbiBvbkNsaWNrPXtjbGVhckdydWRnZXN9PkNsZWFyPC9CdXR0b24+fVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiQnV0dG9uIiwiVGV4dEZpZWxkIiwidXNlUmVkdWNlciIsInVzZVN0YXRlIiwiZ3J1ZGdlUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwiY29uc29sZSIsImxvZyIsInR5cGUiLCJwYXlsb2FkIiwiZmlsdGVyIiwiZ3J1ZGdlIiwiaWQiLCJHcnVkZ2VMaXN0IiwiZ3J1ZGdlcyIsImRpc3BhdGNoIiwiaW5wdXRWYWx1ZSIsInNldElucHV0VmFsdWUiLCJ0aXRsZSIsImxlbmd0aCIsImRlbGV0ZUdydWRnZSIsImNsZWFyR3J1ZGdlcyIsImFkZEdydWRnZSIsInRleHQiLCJNYXRoIiwicmFuZG9tIiwiZGl2Iiwic3R5bGUiLCJtYXJnaW4iLCJoMyIsImxhYmVsIiwidmFyaWFudCIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiYmFja2dyb3VuZENvbG9yIiwiZGF0YS10ZXN0Iiwib25DbGljayIsInVsIiwiY29sb3IiLCJsaXN0U3R5bGVUeXBlIiwibWFwIiwiZyIsImxpIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/GrudgeList.jsx\n"));

/***/ })

});