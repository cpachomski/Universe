"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
    "test": "_08751c9d"
};

exports.default = function () {
    return _react2.default.createElement(
        "h1",
        { className: styles.test },
        "SSR IS WORKING"
    );
};