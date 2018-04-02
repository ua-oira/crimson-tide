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
    _react2.default.createElement(
      _reactHelmet2.default,
      null,
      _react2.default.createElement(
        'title',
        null,
        props.name + ' ' + (props.site ? ' | ' + props.site : '')
      ),
      _react2.default.createElement('meta', { name: 'description', content: props.description }),
      _react2.default.createElement('meta', { name: 'keywords', content: props.keywords }),
      _react2.default.createElement('meta', { property: 'og:title', content: props.name }),
      _react2.default.createElement('meta', { property: 'og:image', content: props.image }),
      _react2.default.createElement('meta', { property: 'og:description', content: props.description })
    ),
    !props.noHeader && _react2.default.createElement(
      'div',
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

{
  /* 
  <PageTitle 
    name="Contact"
    description="foo"
    keywords="bar"
    image="baz"
    site="OIRA"
  /> 
  */
}