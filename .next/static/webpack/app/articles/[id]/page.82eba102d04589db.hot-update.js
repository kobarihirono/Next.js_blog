"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/articles/[id]/page",{

/***/ "(app-pages-browser)/./src/app/components/DeleteButton.tsx":
/*!*********************************************!*\
  !*** ./src/app/components/DeleteButton.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst DeleteButton = (param)=>{\n    let { id } = param;\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const handleDelete = async ()=>{\n        // await deleteArticle(id);\n        const API_URL = \"http://localhost:3000\";\n        const res = await fetch(\"\".concat(API_URL, \"/api\"), {\n            cache: \"no-store\"\n        });\n        router.push(\"/\");\n        router.refresh();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-red-500 hover:bg-red-600 rounded-md py-2 px-5 inline cursor-pointer\",\n        onClick: handleDelete,\n        children: \"削除\"\n    }, void 0, false, {\n        fileName: \"/Users/kobarihirono/Desktop/study/Next.js_blog/src/app/components/DeleteButton.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n_s(DeleteButton, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = DeleteButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DeleteButton);\nvar _c;\n$RefreshReg$(_c, \"DeleteButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9EZWxldGVCdXR0b24udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDMEI7QUFFa0I7QUFNNUMsTUFBTUUsZUFBZTtRQUFDLEVBQUVDLEVBQUUsRUFBcUI7O0lBQzdDLE1BQU1DLFNBQVNILDBEQUFTQTtJQUV4QixNQUFNSSxlQUFlO1FBQ25CLDJCQUEyQjtRQUV6QixNQUFNQyxVQUFVQyx1QkFBK0I7UUFDbkQsTUFBTUcsTUFBTSxNQUFNQyxNQUFNLEdBQVcsT0FBUkwsU0FBUSxTQUFPO1lBQUVNLE9BQU87UUFBVztRQUc1RFIsT0FBT1MsSUFBSSxDQUFDO1FBQ1pULE9BQU9VLE9BQU87SUFDaEI7SUFDQSxxQkFDRSw4REFBQ0M7UUFDQ0MsV0FBVTtRQUNWQyxTQUFTWjtrQkFDVjs7Ozs7O0FBSUw7R0FyQk1IOztRQUNXRCxzREFBU0E7OztLQURwQkM7QUF1Qk4sK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL0RlbGV0ZUJ1dHRvbi50c3g/OGM4OCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGRlbGV0ZUFydGljbGUgfSBmcm9tIFwiQC9ibG9nQVBJXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5cbnR5cGUgRGVsZXRlQnV0dG9uUHJvcHMgPSB7XG4gIGlkOiBzdHJpbmc7XG59O1xuXG5jb25zdCBEZWxldGVCdXR0b24gPSAoeyBpZCB9OiBEZWxldGVCdXR0b25Qcm9wcykgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBoYW5kbGVEZWxldGUgPSBhc3luYyAoKSA9PiB7XG4gICAgLy8gYXdhaXQgZGVsZXRlQXJ0aWNsZShpZCk7XG5cbiAgICAgIGNvbnN0IEFQSV9VUkwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMO1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtBUElfVVJMfS9hcGlgLCB7IGNhY2hlOiBcIm5vLXN0b3JlXCIgfSk7XG5cblxuICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcbiAgICByb3V0ZXIucmVmcmVzaCgpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT1cImJnLXJlZC01MDAgaG92ZXI6YmctcmVkLTYwMCByb3VuZGVkLW1kIHB5LTIgcHgtNSBpbmxpbmUgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgb25DbGljaz17aGFuZGxlRGVsZXRlfVxuICAgID5cbiAgICAgIOWJiumZpFxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRGVsZXRlQnV0dG9uO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUm91dGVyIiwiRGVsZXRlQnV0dG9uIiwiaWQiLCJyb3V0ZXIiLCJoYW5kbGVEZWxldGUiLCJBUElfVVJMIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSV9VUkwiLCJyZXMiLCJmZXRjaCIsImNhY2hlIiwicHVzaCIsInJlZnJlc2giLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/DeleteButton.tsx\n"));

/***/ })

});