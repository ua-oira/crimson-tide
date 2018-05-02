'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  color: black;\n  font-size: 1.1em;\n  text-decoration: none;\n  &:hover {\n    color: #990000;\n  }\n  &:active {\n    font-weight: bold;\n  }\n  @media (max-width: 810px) {\n    line-height: 1.5em;\n  }\n'], ['\n  color: black;\n  font-size: 1.1em;\n  text-decoration: none;\n  &:hover {\n    color: #990000;\n  }\n  &:active {\n    font-weight: bold;\n  }\n  @media (max-width: 810px) {\n    line-height: 1.5em;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Link = require('../Link.js');

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var LightLink = (0, _styledComponents2.default)(_Link2.default)(_templateObject);

exports.default = LightLink;