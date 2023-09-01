"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/contact",{

/***/ "./src/components/CONTACTc.js":
/*!************************************!*\
  !*** ./src/components/CONTACTc.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/data/header */ \"./src/data/header.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Header_NavItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Header/NavItem */ \"./src/components/Header/NavItem.js\");\n/* harmony import */ var _MainFooter_FooterSeven__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MainFooter/FooterSeven */ \"./src/components/MainFooter/FooterSeven.js\");\n/* harmony import */ var _ContactSection_ContactSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ContactSection/ContactSection */ \"./src/components/ContactSection/ContactSection.js\");\n/* harmony import */ var _BannerSection_PageBanner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./BannerSection/PageBanner */ \"./src/components/BannerSection/PageBanner.js\");\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar navItems = _data_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"].navItems;\nfunction CONTACTc() {\n    var _this1 = this;\n    _s();\n    var logo7 = _data_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"].logo7;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var paperMenu = {\n            $window: document.querySelector(\"#paper-window\"),\n            $paperFront: document.querySelector(\"#paper-front\"),\n            $hamburger: document.querySelector(\".hamburger\"),\n            offset: 1800,\n            pageHeight: document.querySelector(\"#paper-front\").offsetHeight,\n            open: function open() {\n                this.$window.classList.add(\"tilt\");\n                this.$hamburger.removeEventListener(\"click\", this.open.bind(this));\n                document.querySelector(\"#container\").addEventListener(\"click\", this.close.bind(this));\n                this.hamburgerFix(true);\n                console.log(\"opening...\");\n            },\n            close: function close() {\n                this.$window.classList.remove(\"tilt\");\n                document.querySelector(\"#container\").removeEventListener(\"click\", this.close.bind(this));\n                this.$hamburger.addEventListener(\"click\", this.open.bind(this));\n                this.hamburgerFix(false);\n                console.log(\"closing...\");\n            },\n            updateTransformOrigin: function updateTransformOrigin() {\n                var scrollTop = this.$window.scrollTop || document.documentElement.scrollTop;\n                var equation = (scrollTop + this.offset) / this.pageHeight * 100;\n                this.$paperFront.style.transformOrigin = \"left \".concat(equation, \"%\");\n            },\n            //hamburger icon fix to keep its position\n            hamburgerFix: function hamburgerFix(opening) {\n                if (opening) {\n                    this.$hamburger.style.position = \"absolute\";\n                    this.$hamburger.style.top = this.$window.scrollTop + 30 + \"px\";\n                } else {\n                    var _this = this;\n                    setTimeout(function() {\n                        _this.$hamburger.style.position = \"fixed\";\n                        _this.$hamburger.style.top = \"30px\";\n                    }, 300);\n                }\n            },\n            bindEvents: function bindEvents() {\n                this.$hamburger.addEventListener(\"click\", this.open.bind(this));\n                document.querySelector(\".close\").addEventListener(\"click\", this.close.bind(this));\n                this.$window.addEventListener(\"scroll\", this.updateTransformOrigin.bind(this));\n            },\n            init: function init() {\n                this.bindEvents();\n                this.updateTransformOrigin();\n            }\n        };\n        paperMenu.init();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"paper-back\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                    className: \"main-menu navbar-expand-md navbar-light\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"close\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\mirxa\\\\OneDrive\\\\Desktop\\\\Majeticslive2\\\\src\\\\components\\\\CONTACTc.js\",\n                            lineNumber: 78,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"collapse navbar-collapse show clearfix\",\n                            id: \"navbarSupportedContent\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: \"navigation clearfix\",\n                                children: navItems.map(function(navItem) {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header_NavItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        navItem: navItem\n                                    }, navItem.id, false, {\n                                        fileName: \"C:\\\\Users\\\\mirxa\\\\OneDrive\\\\Desktop\\\\Majeticslive2\\\\src\\\\components\\\\CONTACTc.js\",\n                                        lineNumber: 85,\n                                        columnNumber: 19\n                                    }, _this1);\n                                })\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\mirxa\\\\OneDrive\\\\Desktop\\\\Majeticslive2\\\\src\\\\components\\\\CONTACTc.js\",\n                                lineNumber: 83,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\mirxa\\\\OneDrive\\\\Desktop\\\\Majeticslive2\\\\src\\\\components\\\\CONTACTc.js\",\n                            lineNumber: 79,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\mirxa\\\\OneDrive\\\\Desktop\\\\Majeticslive2\\\\src\\\\components\\\\CONTACTc.js\",\n                    lineNumber: 77,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mirxa\\\\OneDrive\\\\Desktop\\\\Majeticslive2\\\\src\\\\components\\\\CONTACTc.js\",\n                lineNumber: 72,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"paper-window\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    id: \"paper-front\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            href: \"/\",\n                            className: \"nav-logoa\",\n                            passHref: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.Image, {\n                                className: \"nav-logo1\",\n                                src: logo7.src,\n                                alt: \"\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\mirxa\\\\OneDrive\\\\Desktop\\\\Majeticslive2\\\\src\\\\components\\\\CONTACTc.js\",\n                                lineNumber: 96,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\mirxa\\\\OneDrive\\\\Desktop\\\\Majeticslive2\\\\src\\\\components\\\\CONTACTc.js\",\n                            lineNumber: 94,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"hamburger\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\mirxa\\\\OneDrive\\\\Desktop\\\\Majeticslive2\\\\src\\\\components\\\\CONTACTc.js\",\n                                lineNumber: 100,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\mirxa\\\\OneDrive\\\\Desktop\\\\Majeticslive2\\\\src\\\\components\\\\CONTACTc.js\",\n                            lineNumber: 99,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            id: \"container\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BannerSection_PageBanner__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                        title: \"Contact\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\mirxa\\\\OneDrive\\\\Desktop\\\\Majeticslive2\\\\src\\\\components\\\\CONTACTc.js\",\n                                        lineNumber: 106,\n                                        columnNumber: 25\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\mirxa\\\\OneDrive\\\\Desktop\\\\Majeticslive2\\\\src\\\\components\\\\CONTACTc.js\",\n                                    lineNumber: 104,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ContactSection_ContactSection__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                    map: true,\n                                    form: true\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\mirxa\\\\OneDrive\\\\Desktop\\\\Majeticslive2\\\\src\\\\components\\\\CONTACTc.js\",\n                                    lineNumber: 118,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\mirxa\\\\OneDrive\\\\Desktop\\\\Majeticslive2\\\\src\\\\components\\\\CONTACTc.js\",\n                                    lineNumber: 120,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MainFooter_FooterSeven__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\mirxa\\\\OneDrive\\\\Desktop\\\\Majeticslive2\\\\src\\\\components\\\\CONTACTc.js\",\n                                    lineNumber: 121,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\mirxa\\\\OneDrive\\\\Desktop\\\\Majeticslive2\\\\src\\\\components\\\\CONTACTc.js\",\n                                    lineNumber: 123,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\mirxa\\\\OneDrive\\\\Desktop\\\\Majeticslive2\\\\src\\\\components\\\\CONTACTc.js\",\n                                    lineNumber: 124,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\mirxa\\\\OneDrive\\\\Desktop\\\\Majeticslive2\\\\src\\\\components\\\\CONTACTc.js\",\n                            lineNumber: 102,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\mirxa\\\\OneDrive\\\\Desktop\\\\Majeticslive2\\\\src\\\\components\\\\CONTACTc.js\",\n                    lineNumber: 93,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mirxa\\\\OneDrive\\\\Desktop\\\\Majeticslive2\\\\src\\\\components\\\\CONTACTc.js\",\n                lineNumber: 92,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(CONTACTc, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = CONTACTc;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CONTACTc);\nvar _c;\n$RefreshReg$(_c, \"CONTACTc\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVc7Ozs7d0NBQUU7OENBRWQsOERBQUNrRCxTQUFPOzs7O3dDQUFHOzhDQUNYLDhEQUFDQSxTQUFPOzs7O3dDQUFHOzs7Ozs7Z0NBQ1Q7Ozs7Ozt3QkFDSjs7Ozs7b0JBQ0o7O29CQUNQLENBQ0w7Q0FDTDtHQXBIUTlDLFFBQVE7QUFBUkEsS0FBQUEsUUFBUTtBQXNIakIsK0RBQWVBLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9DT05UQUNUYy5qcz82OGY5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBoZWFkZXJEYXRhIGZyb20gXCJAL2RhdGEvaGVhZGVyXCI7XHJcbmltcG9ydCB7IEltYWdlIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgTmF2SXRlbSBmcm9tICcuL0hlYWRlci9OYXZJdGVtJztcclxuXHJcbmltcG9ydCBGb290ZXJTZXZlbiBmcm9tICcuL01haW5Gb290ZXIvRm9vdGVyU2V2ZW4nO1xyXG5pbXBvcnQgQ29udGFjdFNlY3Rpb24gZnJvbSAnLi9Db250YWN0U2VjdGlvbi9Db250YWN0U2VjdGlvbic7XHJcbmltcG9ydCBQYWdlQmFubmVyIGZyb20gJy4vQmFubmVyU2VjdGlvbi9QYWdlQmFubmVyJztcclxuXHJcblxyXG5jb25zdCB7IG5hdkl0ZW1zLCB9ID0gaGVhZGVyRGF0YTtcclxuXHJcbmZ1bmN0aW9uIENPTlRBQ1RjKCkge1xyXG4gICAgY29uc3QgeyBsb2dvNyB9ID0gaGVhZGVyRGF0YTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcGFwZXJNZW51ID0ge1xyXG4gICAgICAgICAgICAkd2luZG93OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGFwZXItd2luZG93JyksXHJcbiAgICAgICAgICAgICRwYXBlckZyb250OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGFwZXItZnJvbnQnKSxcclxuICAgICAgICAgICAgJGhhbWJ1cmdlcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhhbWJ1cmdlcicpLFxyXG4gICAgICAgICAgICBvZmZzZXQ6IDE4MDAsXHJcbiAgICAgICAgICAgIHBhZ2VIZWlnaHQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwYXBlci1mcm9udCcpLm9mZnNldEhlaWdodCxcclxuXHJcbiAgICAgICAgICAgIG9wZW46IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJHdpbmRvdy5jbGFzc0xpc3QuYWRkKCd0aWx0Jyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRoYW1idXJnZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9wZW4uYmluZCh0aGlzKSk7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFpbmVyJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsb3NlLmJpbmQodGhpcykpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oYW1idXJnZXJGaXgodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnb3BlbmluZy4uLicpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjbG9zZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kd2luZG93LmNsYXNzTGlzdC5yZW1vdmUoJ3RpbHQnKTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWluZXInKS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xvc2UuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRoYW1idXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9wZW4uYmluZCh0aGlzKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhbWJ1cmdlckZpeChmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY2xvc2luZy4uLicpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB1cGRhdGVUcmFuc2Zvcm1PcmlnaW46IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNjcm9sbFRvcCA9IHRoaXMuJHdpbmRvdy5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVxdWF0aW9uID0gKHNjcm9sbFRvcCArIHRoaXMub2Zmc2V0KSAvIHRoaXMucGFnZUhlaWdodCAqIDEwMDtcclxuICAgICAgICAgICAgICAgIHRoaXMuJHBhcGVyRnJvbnQuc3R5bGUudHJhbnNmb3JtT3JpZ2luID0gYGxlZnQgJHtlcXVhdGlvbn0lYDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLy9oYW1idXJnZXIgaWNvbiBmaXggdG8ga2VlcCBpdHMgcG9zaXRpb25cclxuICAgICAgICAgICAgaGFtYnVyZ2VyRml4OiBmdW5jdGlvbiAob3BlbmluZykge1xyXG4gICAgICAgICAgICAgICAgaWYgKG9wZW5pbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRoYW1idXJnZXIuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGhhbWJ1cmdlci5zdHlsZS50b3AgPSB0aGlzLiR3aW5kb3cuc2Nyb2xsVG9wICsgMzAgKyAncHgnO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kaGFtYnVyZ2VyLnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kaGFtYnVyZ2VyLnN0eWxlLnRvcCA9ICczMHB4JztcclxuICAgICAgICAgICAgICAgICAgICB9LCAzMDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBiaW5kRXZlbnRzOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRoYW1idXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9wZW4uYmluZCh0aGlzKSk7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xvc2UuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy51cGRhdGVUcmFuc2Zvcm1PcmlnaW4uYmluZCh0aGlzKSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVUcmFuc2Zvcm1PcmlnaW4oKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBwYXBlck1lbnUuaW5pdCgpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJwYXBlci1iYWNrXCI+XHJcblxyXG5cclxuICAgICAgICAgXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJtYWluLW1lbnUgbmF2YmFyLWV4cGFuZC1tZCBuYXZiYXItbGlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsb3NlXCIgLz5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZSBzaG93IGNsZWFyZml4XCJcclxuICAgICAgICAgICAgICBpZD1cIm5hdmJhclN1cHBvcnRlZENvbnRlbnRcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmlnYXRpb24gY2xlYXJmaXhcIj5cclxuICAgICAgICAgICAgICAgIHtuYXZJdGVtcy5tYXAoKG5hdkl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgICAgPE5hdkl0ZW0gbmF2SXRlbT17bmF2SXRlbX0ga2V5PXtuYXZJdGVtLmlkfSAvPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBpZD1cInBhcGVyLXdpbmRvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInBhcGVyLWZyb250XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9J25hdi1sb2dvYScgcGFzc0hyZWY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPVwibmF2LWxvZ28xXCIgc3JjPXtsb2dvNy5zcmN9IGFsdD1cIlwiIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbWJ1cmdlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJjb250YWluZXJcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uID5cclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UGFnZUJhbm5lciB0aXRsZT1cIkNvbnRhY3RcIiAvPlxyXG4gICAgXHJcbiAgXHJcbiAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICBcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRhY3RTZWN0aW9uIG1hcCBmb3JtIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9vdGVyU2V2ZW4vPlxyXG4gICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ09OVEFDVGM7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsImhlYWRlckRhdGEiLCJJbWFnZSIsIkxpbmsiLCJOYXZJdGVtIiwiRm9vdGVyU2V2ZW4iLCJDb250YWN0U2VjdGlvbiIsIlBhZ2VCYW5uZXIiLCJuYXZJdGVtcyIsIkNPTlRBQ1RjIiwibG9nbzciLCJwYXBlck1lbnUiLCIkd2luZG93IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiJHBhcGVyRnJvbnQiLCIkaGFtYnVyZ2VyIiwib2Zmc2V0IiwicGFnZUhlaWdodCIsIm9mZnNldEhlaWdodCIsIm9wZW4iLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYmluZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbG9zZSIsImhhbWJ1cmdlckZpeCIsImNvbnNvbGUiLCJsb2ciLCJyZW1vdmUiLCJ1cGRhdGVUcmFuc2Zvcm1PcmlnaW4iLCJzY3JvbGxUb3AiLCJkb2N1bWVudEVsZW1lbnQiLCJlcXVhdGlvbiIsInN0eWxlIiwidHJhbnNmb3JtT3JpZ2luIiwib3BlbmluZyIsInBvc2l0aW9uIiwidG9wIiwic2V0VGltZW91dCIsImJpbmRFdmVudHMiLCJpbml0IiwiZGl2IiwiaWQiLCJuYXYiLCJjbGFzc05hbWUiLCJ1bCIsIm1hcCIsIm5hdkl0ZW0iLCJocmVmIiwicGFzc0hyZWYiLCJzcmMiLCJhbHQiLCJzcGFuIiwic2VjdGlvbiIsInRpdGxlIiwiZm9ybSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/CONTACTc.js\n");

/***/ }),

/***/ "./src/pages/contact.js":
/*!******************************!*\
  !*** ./src/pages/contact.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_CONTACTc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/CONTACTc */ \"./src/components/CONTACTc.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\nvar Contact = function() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CONTACTc__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n        fileName: \"C:\\\\Users\\\\mirxa\\\\OneDrive\\\\Desktop\\\\Majeticslive2\\\\src\\\\pages\\\\contact.js\",\n        lineNumber: 7,\n        columnNumber: 4\n    }, _this);\n};\n_c = Contact;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Contact);\nvar _c;\n$RefreshReg$(_c, \"Contact\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvY29udGFjdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTs7QUFBNkM7QUFDbkI7QUFFMUIsSUFBTUUsT0FBTyxHQUFHLFdBQU07SUFDcEIscUJBQ0MsOERBQUNGLDREQUFROzs7O2FBQUUsQ0FDVjtDQUNIO0FBSktFLEtBQUFBLE9BQU87QUFNYiwrREFBZUEsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9jb250YWN0LmpzP2E1ZGEiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgQ09OVEFDVGMgZnJvbSBcIkAvY29tcG9uZW50cy9DT05UQUNUY1wiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBDb250YWN0ID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgPENPTlRBQ1RjLz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhY3Q7XG4iXSwibmFtZXMiOlsiQ09OVEFDVGMiLCJSZWFjdCIsIkNvbnRhY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/contact.js\n");

/***/ })

});