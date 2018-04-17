'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  background: #900;\n  color: black;\n'], ['\n  background: #900;\n  color: black;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: inline-block;\n  margin: 1em 0;\n  width: 200px;\n  height: 70px;\n  border-bottom: none;\n  background: url(', ');\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n  text-indent: -9999px;\n  z-index: 3;\n  @media print {\n    * {\n      -webkit-print-color-adjust: exact;\n    }\n  }\n'], ['\n  display: inline-block;\n  margin: 1em 0;\n  width: 200px;\n  height: 70px;\n  border-bottom: none;\n  background: url(', ');\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n  text-indent: -9999px;\n  z-index: 3;\n  @media print {\n    * {\n      -webkit-print-color-adjust: exact;\n    }\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  font-size: 0.88em;\n  line-height: 0.88em;\n  display: flex;\n  color: black;\n  flex-flow: row wrap;\n  margin: 0 auto;\n  width: 100%;\n  padding: 0px 1.0875rem;\n  max-width: 960px;\n  justify-content: space-between;\n  align-items: center;\n  @media (max-width: 768px) {\n    flex-flow: column;\n  }\n  @media print {\n    flex-flow: row;\n  }\n'], ['\n  font-size: 0.88em;\n  line-height: 0.88em;\n  display: flex;\n  color: black;\n  flex-flow: row wrap;\n  margin: 0 auto;\n  width: 100%;\n  padding: 0px 1.0875rem;\n  max-width: 960px;\n  justify-content: space-between;\n  align-items: center;\n  @media (max-width: 768px) {\n    flex-flow: column;\n  }\n  @media print {\n    flex-flow: row;\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  float: left;\n  @media print {\n    -webkit-print-color-adjust: exact;\n  }\n'], ['\n  float: left;\n  @media print {\n    -webkit-print-color-adjust: exact;\n  }\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  text-align: right;\n  float: Right;\n  @media (max-width: 768px) {\n    text-align: center;\n  }\n  @media print {\n    display: none;\n  }\n'], ['\n  text-align: right;\n  float: Right;\n  @media (max-width: 768px) {\n    text-align: center;\n  }\n  @media print {\n    display: none;\n  }\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  color: white !important;\n  font-size: 16px;\n  font-weight: 500;\n  padding: 42px 14px;\n  text-decoration: none;\n  line-height: 20px;\n  &:hover {\n    color: #900 !important;\n    background: #fff;\n    transition: all 0.2s ease-in-out;\n  }\n  &:active,\n  visited {\n    font-weight: bold;\n    text-decoration: none !important;\n    color: #fff !important;\n  }\n  @media (max-width: 768px) {\n    line-height: 1.5em;\n    &:hover {\n      color: #fff !important;\n      background: none;\n      transition: all 0.2s ease-in-out;\n      text-decoration: none;\n    }\n  }\n'], ['\n  color: white !important;\n  font-size: 16px;\n  font-weight: 500;\n  padding: 42px 14px;\n  text-decoration: none;\n  line-height: 20px;\n  &:hover {\n    color: #900 !important;\n    background: #fff;\n    transition: all 0.2s ease-in-out;\n  }\n  &:active,\n  visited {\n    font-weight: bold;\n    text-decoration: none !important;\n    color: #fff !important;\n  }\n  @media (max-width: 768px) {\n    line-height: 1.5em;\n    &:hover {\n      color: #fff !important;\n      background: none;\n      transition: all 0.2s ease-in-out;\n      text-decoration: none;\n    }\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _gatsbyLink = require('gatsby-link');

var _gatsbyLink2 = _interopRequireDefault(_gatsbyLink);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = require('prop-types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Nav = function Nav(props) {
  return _react2.default.createElement(
    FullWidthHeader,
    null,
    _react2.default.createElement(
      Content,
      null,
      _react2.default.createElement(
        Left,
        null,
        props.gatsbyLogo && _react2.default.createElement(GatsbyLogo, { img: props.image, to: '/', title: 'Home' }),
        props.Logo && _react2.default.createElement(Logo, { img: props.image, href: '/', title: 'Home' })
      ),
      _react2.default.createElement(
        Right,
        null,
        props.links && props.links.map(function (link, i) {
          return _react2.default.createElement(
            StyledLink,
            { key: i, to: link.path },
            link.title
          );
        }),
        props.children
      )
    )
  );
};

Nav.propTypes = {
  links: _propTypes.array,
  img: _propTypes.string
};

exports.default = Nav;


{
  /* USAGE✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨
   import { Nav, ChimeIn } from 'crimson-tide'
   const NavLinks = [
    { title: 'Planning Group', path: '/planning-group' },
    { title: 'Steering Committee', path: '/steering-committee' }
  ]
  <Nav image={ChimeIn} links={NavLinks} />
   ✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨ */
}

var FullWidthHeader = _styledComponents2.default.header(_templateObject);
var Logo = _styledComponents2.default.a(_templateObject2, function (props) {
  return props.img;
});
var GatsbyLogo = (0, _styledComponents2.default)(_gatsbyLink2.default)(_templateObject2, function (props) {
  return props.img;
});
var Content = _styledComponents2.default.div(_templateObject3);
var Left = _styledComponents2.default.div(_templateObject4);
var Right = _styledComponents2.default.div(_templateObject5);
var StyledLink = (0, _styledComponents2.default)(_gatsbyLink2.default)(_templateObject6);