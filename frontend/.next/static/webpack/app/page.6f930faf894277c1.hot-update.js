"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/components/LoadData/LoadData.tsx":
/*!**********************************************!*\
  !*** ./app/components/LoadData/LoadData.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst LoadData = ()=>{\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            try {\n                const response = await fetch(\"http://localhost:5000/\");\n                const jsonData = await response.json();\n                setData(jsonData);\n            } catch (error) {\n                console.error(\"Error fetching data:\", error);\n            }\n        };\n    // fetchData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: data && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            children: Object.entries(data).map((param)=>{\n                let [key, value] = param;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: \"\".concat(key)\n                }, key, false, {\n                    fileName: \"/home/taiveyonshaw/dev/sound-localization-app/frontend/app/components/LoadData/LoadData.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 13\n                }, undefined);\n            })\n        }, void 0, false, {\n            fileName: \"/home/taiveyonshaw/dev/sound-localization-app/frontend/app/components/LoadData/LoadData.tsx\",\n            lineNumber: 28,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/taiveyonshaw/dev/sound-localization-app/frontend/app/components/LoadData/LoadData.tsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, undefined);\n};\n_s(LoadData, \"fQZRxy/+nAZ7NLS1X4dVhrlp8Go=\");\n_c = LoadData;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoadData);\nvar _c;\n$RefreshReg$(_c, \"LoadData\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0xvYWREYXRhL0xvYWREYXRhLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDbUQ7QUFNbkQsTUFBTUcsV0FBcUI7O0lBQ3pCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHSiwrQ0FBUUEsQ0FBYztJQUU5Q0MsZ0RBQVNBLENBQUM7UUFDUixNQUFNSSxZQUFZO1lBQ2hCLElBQUk7Z0JBQ0YsTUFBTUMsV0FBVyxNQUFNQyxNQUFNO2dCQUM3QixNQUFNQyxXQUFpQixNQUFNRixTQUFTRyxJQUFJO2dCQUMxQ0wsUUFBUUk7WUFDVixFQUFFLE9BQU9FLE9BQU87Z0JBQ2RDLFFBQVFELEtBQUssQ0FBQyx3QkFBd0JBO1lBQ3hDO1FBQ0Y7SUFFQSxlQUFlO0lBQ2pCLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDRTtrQkFDRVQsc0JBQ0MsOERBQUNVO3NCQUNFQyxPQUFPQyxPQUFPLENBQUNaLE1BQU1hLEdBQUcsQ0FBQztvQkFBQyxDQUFDQyxLQUFLQyxNQUFNO3FDQUNyQyw4REFBQ0M7OEJBQWMsR0FBTyxPQUFKRjttQkFBVEE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNckI7R0E1Qk1mO0tBQUFBO0FBOEJOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL0xvYWREYXRhL0xvYWREYXRhLnRzeD8yMzJhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuaW50ZXJmYWNlIERhdGEge1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmNvbnN0IExvYWREYXRhOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGU8RGF0YSB8IG51bGw+KG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9cIik7XG4gICAgICAgIGNvbnN0IGpzb25EYXRhOiBEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBzZXREYXRhKGpzb25EYXRhKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBkYXRhOlwiLCBlcnJvcik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIGZldGNoRGF0YSgpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAge2RhdGEgJiYgKFxuICAgICAgICA8dWw+XG4gICAgICAgICAge09iamVjdC5lbnRyaWVzKGRhdGEpLm1hcCgoW2tleSwgdmFsdWVdKSA9PiAoXG4gICAgICAgICAgICA8bGkga2V5PXtrZXl9PntgJHtrZXl9YH08L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExvYWREYXRhO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJMb2FkRGF0YSIsImRhdGEiLCJzZXREYXRhIiwiZmV0Y2hEYXRhIiwicmVzcG9uc2UiLCJmZXRjaCIsImpzb25EYXRhIiwianNvbiIsImVycm9yIiwiY29uc29sZSIsImRpdiIsInVsIiwiT2JqZWN0IiwiZW50cmllcyIsIm1hcCIsImtleSIsInZhbHVlIiwibGkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/LoadData/LoadData.tsx\n"));

/***/ })

});