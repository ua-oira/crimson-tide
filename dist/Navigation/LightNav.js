'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  border-bottom: 1px solid hsla(0, 0%, 0%, 0.2);\n  background: HSLA(0, 0%, 100%, 0.96);\n  color: black;\n'], ['\n  border-bottom: 1px solid hsla(0, 0%, 0%, 0.2);\n  background: HSLA(0, 0%, 100%, 0.96);\n  color: black;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: inline-block;\n  width: 328px;\n  height: 80px;\n  border-bottom: none;\n  background-color: blue;\n  background: url(', ');\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n  text-indent: -9999px;\n  z-index: 3;\n  @media print {\n    * {\n      -webkit-print-color-adjust: exact;\n    }\n  }\n'], ['\n  display: inline-block;\n  width: 328px;\n  height: 80px;\n  border-bottom: none;\n  background-color: blue;\n  background: url(', ');\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n  text-indent: -9999px;\n  z-index: 3;\n  @media print {\n    * {\n      -webkit-print-color-adjust: exact;\n    }\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  font-size: 0.88em;\n  line-height: 0.88em;\n  display: flex;\n  color: black;\n  flex-flow: row wrap;\n  margin: 0 auto;\n  width: 100%;\n  padding: 0 1.0875rem;\n  max-width: ', ';\n  justify-content: space-between;\n  align-items: center;\n  @media (max-width: 810px) {\n    flex-flow: column;\n  }\n  @media print {\n    flex-flow: row;\n  }\n'], ['\n  font-size: 0.88em;\n  line-height: 0.88em;\n  display: flex;\n  color: black;\n  flex-flow: row wrap;\n  margin: 0 auto;\n  width: 100%;\n  padding: 0 1.0875rem;\n  max-width: ', ';\n  justify-content: space-between;\n  align-items: center;\n  @media (max-width: 810px) {\n    flex-flow: column;\n  }\n  @media print {\n    flex-flow: row;\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  float: left;\n  @media print {\n    -webkit-print-color-adjust: exact;\n  }\n'], ['\n  float: left;\n  @media print {\n    -webkit-print-color-adjust: exact;\n  }\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  text-align: right;\n  color: hsla(0, 0%, 0%, 0.2);\n  cursor: default;\n  float: Right;\n  // padding-bottom: 1em;\n  @media (max-width: 810px) {\n    text-align: center;\n    margin-bottom: 1em;\n  }\n  @media print {\n    display: none;\n  }\n'], ['\n  text-align: right;\n  color: hsla(0, 0%, 0%, 0.2);\n  cursor: default;\n  float: Right;\n  // padding-bottom: 1em;\n  @media (max-width: 810px) {\n    text-align: center;\n    margin-bottom: 1em;\n  }\n  @media print {\n    display: none;\n  }\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  font-size: 12px;\n  line-height: 12px;\n  font-family: \'Space Mono\', monospace;\n'], ['\n  font-size: 12px;\n  line-height: 12px;\n  font-family: \'Space Mono\', monospace;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactHeadroom = require('react-headroom');

var _reactHeadroom2 = _interopRequireDefault(_reactHeadroom);

var _oiraLogo = require('../logos/oira-logo.svg');

var _oiraLogo2 = _interopRequireDefault(_oiraLogo);

var _Link = require('../Link');

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LightNav = function (_React$Component) {
  _inherits(LightNav, _React$Component);

  function LightNav() {
    _classCallCheck(this, LightNav);

    return _possibleConstructorReturn(this, (LightNav.__proto__ || Object.getPrototypeOf(LightNav)).apply(this, arguments));
  }

  _createClass(LightNav, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'nav',
        null,
        _react2.default.createElement(
          _reactHeadroom2.default,
          null,
          _react2.default.createElement(
            PageWidth,
            null,
            _react2.default.createElement(
              ContentWidth,
              { maxWidth: this.props.maxWidth },
              _react2.default.createElement(
                Left,
                null,
                _react2.default.createElement(Logo, { image: this.props.image, to: '/', title: 'Home' })
              ),
              _react2.default.createElement(
                Right,
                null,
                this.props.children
              )
            )
          )
        )
      );
    }
  }]);

  return LightNav;
}(_react2.default.Component);

exports.default = LightNav;


var PageWidth = _styledComponents2.default.header(_templateObject);
var Logo = (0, _styledComponents2.default)(_Link2.default)(_templateObject2, function (props) {
  return props.image || _oiraLogo2.default;
});
var ContentWidth = _styledComponents2.default.div(_templateObject3, function (props) {
  return props.maxWidth || '960px';
});
var Left = _styledComponents2.default.div(_templateObject4);
var Right = _styledComponents2.default.div(_templateObject5);

var Contact = _styledComponents2.default.p(_templateObject6);