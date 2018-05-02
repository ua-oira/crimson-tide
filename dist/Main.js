'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Main = function Main(props) {
  return _react2.default.createElement(
    'main',
    null,
    _react2.default.createElement(
      'div',
      {
        style: {
          margin: ' 1em auto 1em auto',
          maxWidth: 960,
          minHeight: 500,
          padding: '0px 1.0875rem 1.45rem',
          paddingTop: 0
        }
      },
      props.children
    )
  );
};
exports.default = Main;