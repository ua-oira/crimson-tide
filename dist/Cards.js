'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Card = exports.Cards = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  .cards > ul {\n    list-style: none;\n    margin-left: 0;\n  }\n\n  .card + .card {\n    margin-top: 1.5rem;\n  }\n\n  @supports (display: grid) {\n    .cards > ul {\n      display: grid;\n      grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));\n      grid-column-gap: 1.5rem;\n      grid-row-gap: 1.5rem;\n    }\n\n    .card + .card {\n      margin-top: 0;\n    }\n\n    @media (max-width: 400px) {\n      .cards > ul {\n        grid-gap: 4.5rem;\n      }\n    }\n  }\n\n  .card {\n    border: 1px solid;\n    border-radius: 0.25rem;\n    display: flex;\n    flex-direction: column;\n    position: relative;\n  }\n\n  .card .text {\n    padding: 1rem;\n    flex: 1 0 auto;\n    display: flex;\n    flex-direction: column;\n  }\n\n  .card p {\n    max-width: 60ch;\n  }\n\n  .card .img {\n    height: 6.5rem;\n    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 1rem));\n  }\n\n  .card .img img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n\n  .card a {\n    outline: none;\n  }\n\n  .card h2 a {\n    text-decoration: none;\n  }\n\n  .card h2 a::after {\n    content: \'\';\n    position: absolute;\n    left: 0;\n    top: 0;\n    right: 0;\n    bottom: 0;\n  }\n\n  .card h2 a:focus {\n    outline: none;\n    text-decoration: underline;\n  }\n  .card h2:focus-within ~ .cta {\n    box-shadow: 0 0 0 0.125rem;\n  }\n\n  .card:focus-within,\n  .card:hover {\n    border: 1px solid;\n    box-shadow: 0 20px 68px rgba(0, 0, 0, 0.55);\n  }\n\n  .card:focus-within h2 a:focus {\n    text-decoration: none;\n  }\n\n  .card small {\n    display: block;\n  }\n\n  .card small a {\n    position: relative;\n    padding: 0.5rem 0.5rem 0.5rem 0;\n  }\n\n  .card small a:hover,\n  .card small a:focus {\n    font-weight: bold;\n  }\n\n  .card .text > * + * {\n    margin-top: 0.75rem;\n  }\n\n  .card .text > :last-child {\n    margin-top: auto;\n    padding-top: 0.75rem;\n  }\n\n  .cta {\n    padding: 0.75rem;\n    border: 1px solid;\n    border-radius: 0.25rem;\n    text-align: center;\n  }\n'], ['\n  .cards > ul {\n    list-style: none;\n    margin-left: 0;\n  }\n\n  .card + .card {\n    margin-top: 1.5rem;\n  }\n\n  @supports (display: grid) {\n    .cards > ul {\n      display: grid;\n      grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));\n      grid-column-gap: 1.5rem;\n      grid-row-gap: 1.5rem;\n    }\n\n    .card + .card {\n      margin-top: 0;\n    }\n\n    @media (max-width: 400px) {\n      .cards > ul {\n        grid-gap: 4.5rem;\n      }\n    }\n  }\n\n  .card {\n    border: 1px solid;\n    border-radius: 0.25rem;\n    display: flex;\n    flex-direction: column;\n    position: relative;\n  }\n\n  .card .text {\n    padding: 1rem;\n    flex: 1 0 auto;\n    display: flex;\n    flex-direction: column;\n  }\n\n  .card p {\n    max-width: 60ch;\n  }\n\n  .card .img {\n    height: 6.5rem;\n    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 1rem));\n  }\n\n  .card .img img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n\n  .card a {\n    outline: none;\n  }\n\n  .card h2 a {\n    text-decoration: none;\n  }\n\n  .card h2 a::after {\n    content: \'\';\n    position: absolute;\n    left: 0;\n    top: 0;\n    right: 0;\n    bottom: 0;\n  }\n\n  .card h2 a:focus {\n    outline: none;\n    text-decoration: underline;\n  }\n  .card h2:focus-within ~ .cta {\n    box-shadow: 0 0 0 0.125rem;\n  }\n\n  .card:focus-within,\n  .card:hover {\n    border: 1px solid;\n    box-shadow: 0 20px 68px rgba(0, 0, 0, 0.55);\n  }\n\n  .card:focus-within h2 a:focus {\n    text-decoration: none;\n  }\n\n  .card small {\n    display: block;\n  }\n\n  .card small a {\n    position: relative;\n    padding: 0.5rem 0.5rem 0.5rem 0;\n  }\n\n  .card small a:hover,\n  .card small a:focus {\n    font-weight: bold;\n  }\n\n  .card .text > * + * {\n    margin-top: 0.75rem;\n  }\n\n  .card .text > :last-child {\n    margin-top: auto;\n    padding-top: 0.75rem;\n  }\n\n  .cta {\n    padding: 0.75rem;\n    border: 1px solid;\n    border-radius: 0.25rem;\n    text-align: center;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Link = require('./Link.js');

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Cards = function Cards(props) {
  return _react2.default.createElement(
    Deck,
    null,
    _react2.default.createElement(
      'div',
      { className: 'cards' },
      _react2.default.createElement(
        'ul',
        null,
        props.children
      )
    )
  );
};

var Card = function Card(props) {
  var others = _objectWithoutProperties(props, []);

  return _react2.default.createElement(
    'li',
    _extends({ className: 'card' }, others),
    props.image && _react2.default.createElement(
      'div',
      { className: 'img' },
      _react2.default.createElement('img', { src: props.image, alt: '' })
    ),
    _react2.default.createElement(
      'div',
      { className: 'text' },
      _react2.default.createElement(
        'h2',
        null,
        _react2.default.createElement(
          _Link2.default,
          { to: props.link },
          props.title
        )
      ),
      _react2.default.createElement(
        'p',
        null,
        props.text
      ),
      props.children,
      props.action && _react2.default.createElement(
        'span',
        { className: 'cta' },
        props.action
      )
    )
  );
};

exports.Cards = Cards;
exports.Card = Card;


Card.propTypes = {
  image: _propTypes2.default.string,
  link: _propTypes2.default.string,
  title: _propTypes2.default.string,
  text: _propTypes2.default.string,
  action: _propTypes2.default.string,
  children: _propTypes2.default.node
};
Cards.propTypes = {
  children: _propTypes2.default.node.isRequired
};

var Deck = _styledComponents2.default.div(_templateObject);