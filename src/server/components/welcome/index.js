"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _welcome = require("./welcome");

var _welcome2 = _interopRequireDefault(_welcome);

var _generateStar = require("./generate-star");

var _generateStar2 = _interopRequireDefault(_generateStar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  "container": "_96dc5943",
  "space": "_52c11150"
};

var Welcome = function (_Component) {
  _inherits(Welcome, _Component);

  function Welcome() {
    _classCallCheck(this, Welcome);

    return _possibleConstructorReturn(this, (Welcome.__proto__ || Object.getPrototypeOf(Welcome)).apply(this, arguments));
  }

  _createClass(Welcome, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var canvas = document.getElementById("space");
      var context = canvas.getContext("2d");

      var onresize = function onresize() {
        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;
      };
      onresize();

      for (var i = 0; i < 500; i++) {
        (0, _generateStar2.default)(canvas, context, 3);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "div",
          { className: styles.container },
          _react2.default.createElement(
            "h1",
            null,
            "Universe"
          ),
          _react2.default.createElement(
            "p",
            null,
            _welcome2.default,
            _react2.default.createElement(
              "span",
              null,
              "- Douglas Adams"
            )
          )
        ),
        _react2.default.createElement("canvas", { id: "space", className: styles.space })
      );
    }
  }]);

  return Welcome;
}(_react.Component);

exports.default = Welcome;