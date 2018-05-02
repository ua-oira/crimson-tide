'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _gatsbyLink = require('gatsby-link');

var _gatsbyLink2 = _interopRequireDefault(_gatsbyLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Link = function Link(_ref) {
  var children = _ref.children,
      to = _ref.to,
      others = _objectWithoutProperties(_ref, ['children', 'to']);

  var internal = /^\/(?!\/)/.test(to);

  if (internal) {
    return _react2.default.createElement(
      _gatsbyLink2.default,
      _extends({ to: to }, others),
      children
    );
  }
  return _react2.default.createElement(
    'a',
    _extends({ href: to, target: '_blank', rel: 'noopener' }, others),
    children
  );
};

exports.default = Link;