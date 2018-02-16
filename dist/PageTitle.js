'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = require('react-helmet');

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PageTitle = function PageTitle(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_reactHelmet2.default, {
      title: (props.name || '') + ' | ALAIR',
      meta: [{
        name: 'description',
        content: props.description || props.name + ' at the Office of Institutional Research and Assessment of The University of Alabama'
      }, {
        name: 'keywords',
        content: props.keywords || props.keywords + ', OIRA, The University of Alabama, AIR, SAIR, ALAIR'
      }]
    }),
    props.noHeader ? null : _react2.default.createElement(
      'header',
      null,
      _react2.default.createElement(
        'h1',
        null,
        props.name
      ),
      _react2.default.createElement('hr', null)
    )
  );
};

exports.default = PageTitle;

// EXAMPLE:
// <PageTitle description="" keywords="" name="Contact" keywords="foo, bar, baz" />