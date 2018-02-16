'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledLink = exports.Contact = exports.Copyright = exports.RightSide = exports.LeftSide = exports.LowFooter = exports.Logo = exports.ColorWrapper = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  border-top: 1px solid #eee;\n  color: black;\n  padding-top: 0.5em;\n  @media print {\n    display: none;\n  }\n'], ['\n  position: relative;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  border-top: 1px solid #eee;\n  color: black;\n  padding-top: 0.5em;\n  @media print {\n    display: none;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: inline-block;\n  width: 328px;\n  height: 80px;\n  border-bottom: none;\n  background: url(', ');\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n  text-indent: -9999px;\n  z-index: 3;\n'], ['\n  display: inline-block;\n  width: 328px;\n  height: 80px;\n  border-bottom: none;\n  background: url(', ');\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n  text-indent: -9999px;\n  z-index: 3;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  font-size: 0.88em;\n  line-height: 0.88em;\n  display: flex;\n  color: black;\n  flex-flow: row wrap;\n  margin: 0 auto;\n  width: 100%;\n  padding: 20px 1.0875rem;\n  max-width: 960px;\n  justify-content: space-between;\n  align-items: center;\n  @media (max-width: 768px) {\n    flex-flow: column;\n  }\n'], ['\n  font-size: 0.88em;\n  line-height: 0.88em;\n  display: flex;\n  color: black;\n  flex-flow: row wrap;\n  margin: 0 auto;\n  width: 100%;\n  padding: 20px 1.0875rem;\n  max-width: 960px;\n  justify-content: space-between;\n  align-items: center;\n  @media (max-width: 768px) {\n    flex-flow: column;\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  float: left;\n'], ['\n  float: left;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  text-align: right;\n  float: Right;\n  @media (max-width: 768px) {\n    text-align: center;\n  }\n'], ['\n  text-align: right;\n  float: Right;\n  @media (max-width: 768px) {\n    text-align: center;\n  }\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  border-bottom: none;\n  line-height: 19px;\n  margin-bottom: 6px;\n  justify: right;\n'], ['\n  border-bottom: none;\n  line-height: 19px;\n  margin-bottom: 6px;\n  justify: right;\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  font-size: 12px;\n  line-height: 12px;\n  font-family: \'Space Mono\', monospace;\n'], ['\n  font-size: 12px;\n  line-height: 12px;\n  font-family: \'Space Mono\', monospace;\n']),
    _templateObject8 = _taggedTemplateLiteral(['\n  color: black;\n  font-size: 1.1em;\n  text-decoration: none;\n  &:hover {\n    color: #990000;\n  }\n  &:active {\n    font-weight: bold;\n  }\n  @media (max-width: 768px) {\n    line-height: 1.5em;\n  }\n'], ['\n  color: black;\n  font-size: 1.1em;\n  text-decoration: none;\n  &:hover {\n    color: #990000;\n  }\n  &:active {\n    font-weight: bold;\n  }\n  @media (max-width: 768px) {\n    line-height: 1.5em;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _gatsbyLink = require('gatsby-link');

var _gatsbyLink2 = _interopRequireDefault(_gatsbyLink);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactObfuscate = require('react-obfuscate');

var _reactObfuscate2 = _interopRequireDefault(_reactObfuscate);

var _gdgd = require('./gdgd.svg');

var _gdgd2 = _interopRequireDefault(_gdgd);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SmFooter = function SmFooter(props) {
  var date = new Date();
  var year = date.getFullYear();
  return _react2.default.createElement(
    ColorWrapper,
    null,
    _react2.default.createElement(
      LowFooter,
      null,
      _react2.default.createElement(
        LeftSide,
        null,
        _react2.default.createElement(
          Styleda,
          { href: 'http://ua.edu' },
          '\xA9 ',
          year,
          ' The University of Alabama'
        )
      ),
      _react2.default.createElement(
        RightSide,
        null,
        _react2.default.createElement(
          Styleda,
          {
            href: 'http://maps.apple.com/?q=33.2084338+-87.5472800',
            title: 'Building Name and Address'
          },
          'East Annex'
        ),
        ' | ',
        _react2.default.createElement(
          Styledo,
          { tel: '205-348-7200', title: 'Telephone Number' },
          '205-348-7200'
        ),
        ' | ',
        _react2.default.createElement(
          Styleda,
          { href: 'http://oira.ua.edu/new/contact/', title: 'Contact' },
          'OIRA Contact'
        )
      )
    )
  );
};

exports.default = SmFooter;
var ColorWrapper = exports.ColorWrapper = _styledComponents2.default.div(_templateObject);
var Logo = exports.Logo = (0, _styledComponents2.default)(_gatsbyLink2.default)(_templateObject2, _gdgd2.default);
var LowFooter = exports.LowFooter = _styledComponents2.default.footer(_templateObject3);

var LeftSide = exports.LeftSide = _styledComponents2.default.div(_templateObject4);
var RightSide = exports.RightSide = _styledComponents2.default.div(_templateObject5);
var Copyright = exports.Copyright = _styledComponents2.default.p(_templateObject6);
var Contact = exports.Contact = _styledComponents2.default.p(_templateObject7);
var StyledLink = exports.StyledLink = (0, _styledComponents2.default)(_gatsbyLink2.default)(_templateObject8);
var Styleda = _styledComponents2.default.a(_templateObject8);
var Styledo = (0, _styledComponents2.default)(_reactObfuscate2.default)(_templateObject8);