'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  color: white !important;\n  font-size: 16px;\n  font-weight: 500;\n  padding: 100px 14px;\n  text-decoration: none;\n  &:hover {\n    color: ', ' !important;\n    background: #fff;\n    transition: all 0.2s ease-in-out;\n  }\n  &:active,\n  &:visited {\n    font-weight: bold;\n    text-decoration: none !important;\n    color: #fff !important;\n  }\n  @media (max-width: 800px) {\n    padding: 40px 14px;\n    margin-right: 0px;\n    margin-bottom: 1em;\n    font-size: 10vw;\n    line-height: 30px;\n    &:hover {\n      color: white !important;\n      background: none;\n      transition: all 0.2s ease-in-out;\n      text-decoration: none;\n    }\n  }\n'], ['\n  color: white !important;\n  font-size: 16px;\n  font-weight: 500;\n  padding: 100px 14px;\n  text-decoration: none;\n  &:hover {\n    color: ', ' !important;\n    background: #fff;\n    transition: all 0.2s ease-in-out;\n  }\n  &:active,\n  &:visited {\n    font-weight: bold;\n    text-decoration: none !important;\n    color: #fff !important;\n  }\n  @media (max-width: 800px) {\n    padding: 40px 14px;\n    margin-right: 0px;\n    margin-bottom: 1em;\n    font-size: 10vw;\n    line-height: 30px;\n    &:hover {\n      color: white !important;\n      background: none;\n      transition: all 0.2s ease-in-out;\n      text-decoration: none;\n    }\n  }\n']);

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

var NavLink = (0, _styledComponents2.default)(_Link2.default)(_templateObject, function (props) {
  return props.color;
});

exports.default = NavLink;


NavLink.propTypes = {
  color: _propTypes2.default.string
};

NavLink.defaultProps = {
  color: '#000'
};