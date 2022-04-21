"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useMobileNav = exports.EM = void 0;

var _reactNative = require("react-native");

const EM = 16;
exports.EM = EM;
const useMobileNav = _reactNative.Platform.OS !== 'web';
exports.useMobileNav = useMobileNav;
//# sourceMappingURL=index.js.map