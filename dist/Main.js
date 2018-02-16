'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  margin: ', ';\n  max-width: ', ';\n  min-height: ', ';\n  padding: ', ';\n'], ['\n  margin: ', ';\n  max-width: ', ';\n  min-height: ', ';\n  padding: ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Main = _styledComponents2.default.main.attrs({
  margin: function margin(props) {
    return props.margin || '1em auto 1em auto';
  },
  maxWidth: function maxWidth(props) {
    return props.maxWidth || '960px';
  },
  minHeight: function minHeight(props) {
    return props.minHeight || '500px';
  },
  padding: function padding(props) {
    return props.padding || '0px 1.0875rem 1.45rem';
  }
})(_templateObject, function (props) {
  return props.margin;
}, function (props) {
  return props.maxWidth;
}, function (props) {
  return props.minHeight;
}, function (props) {
  return props.padding;
});
exports.default = Main;