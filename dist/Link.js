'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactObfuscate = require('react-obfuscate');

var _reactObfuscate2 = _interopRequireDefault(_reactObfuscate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Link = function Link(_ref) {
  var _ref$as = _ref.as,
      Element = _ref$as === undefined ? 'a' : _ref$as,
      children = _ref.children,
      to = _ref.to,
      others = _objectWithoutProperties(_ref, ['as', 'children', 'to']);

  var phone = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(to);
  var email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(to);
  var map = /^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?),\s*[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/.test(to);

  if (Element) {
    return _react2.default.createElement(
      Element,
      _extends({ href: to }, others),
      children
    );
  } else if (phone) {
    return _react2.default.createElement(
      _reactObfuscate2.default,
      _extends({ tel: to }, others),
      children
    );
  } else if (email) {
    return _react2.default.createElement(_reactObfuscate2.default, _extends({ email: to }, others));
  } else if (map) {
    return _react2.default.createElement(
      'a',
      _extends({
        href: 'http://maps.apple.com/?q=' + to,
        title: 'Map coordinates'
      }, others),
      children
    );
  } else {
    return _react2.default.createElement(
      'a',
      _extends({ href: to, target: '_blank', rel: 'noopener noreferrer' }, others),
      children
    );
  }
};

exports.default = Link;