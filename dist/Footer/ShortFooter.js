'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  border-top: 1px solid #eee;\n  color: black;\n  padding-top: 0.5em;\n  @media print {\n    display: none;\n  }\n'], ['\n  position: relative;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  border-top: 1px solid #eee;\n  color: black;\n  padding-top: 0.5em;\n  @media print {\n    display: none;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  font-size: 0.88em;\n  line-height: 0.88em;\n  display: flex;\n  color: black;\n  flex-flow: row wrap;\n  margin: 0 auto;\n  width: 100%;\n  padding: 20px 1.0875rem;\n  max-width: ', ';\n  justify-content: space-between;\n  align-items: center;\n  @media (max-width: 768px) {\n    flex-flow: column;\n  }\n'], ['\n  font-size: 0.88em;\n  line-height: 0.88em;\n  display: flex;\n  color: black;\n  flex-flow: row wrap;\n  margin: 0 auto;\n  width: 100%;\n  padding: 20px 1.0875rem;\n  max-width: ', ';\n  justify-content: space-between;\n  align-items: center;\n  @media (max-width: 768px) {\n    flex-flow: column;\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  float: left;\n'], ['\n  float: left;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  text-align: right;\n  color: hsla(0, 0%, 0%, 0.2);\n  float: Right;\n  @media (max-width: 768px) {\n    text-align: center;\n  }\n'], ['\n  text-align: right;\n  color: hsla(0, 0%, 0%, 0.2);\n  float: Right;\n  @media (max-width: 768px) {\n    text-align: center;\n  }\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  border-bottom: none;\n  line-height: 19px;\n  margin-bottom: 6px;\n  justify: right;\n'], ['\n  border-bottom: none;\n  line-height: 19px;\n  margin-bottom: 6px;\n  justify: right;\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  font-size: 12px;\n  line-height: 12px;\n  font-family: \'Space Mono\', monospace;\n'], ['\n  font-size: 12px;\n  line-height: 12px;\n  font-family: \'Space Mono\', monospace;\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  color: black;\n  padding-left: 5px;\n  padding-right: 5px;\n  text-decoration: none;\n  &:last-child {\n    padding-right: 0;\n  }\n  &:hover {\n    color: #990000;\n  }\n  &:active {\n    font-weight: bold;\n  }\n  @media (max-width: 768px) {\n    line-height: 1.5em;\n  }\n'], ['\n  color: black;\n  padding-left: 5px;\n  padding-right: 5px;\n  text-decoration: none;\n  &:last-child {\n    padding-right: 0;\n  }\n  &:hover {\n    color: #990000;\n  }\n  &:active {\n    font-weight: bold;\n  }\n  @media (max-width: 768px) {\n    line-height: 1.5em;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Link = require('../Link.js');

var _Link2 = _interopRequireDefault(_Link);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactObfuscate = require('react-obfuscate');

var _reactObfuscate2 = _interopRequireDefault(_reactObfuscate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SmFooter = function SmFooter(props) {
  var date = new Date();
  var year = date.getFullYear();
  return _react2.default.createElement(
    ColorWrapper,
    null,
    _react2.default.createElement(
      ContentWidth,
      { maxWidth: undefined.props.maxWidth },
      _react2.default.createElement(
        LeftSide,
        null,
        _react2.default.createElement(
          StyledLink,
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
          StyledLink,
          { to: '33.2084338,-87.5472800' },
          'East Annex'
        ),
        '|',
        _react2.default.createElement(StyledLink, { to: '205-348-7200' }),
        '|',
        _react2.default.createElement(
          StyledLink,
          { to: '/contact/' },
          'OIRA Contact'
        )
      )
    )
  );
};

exports.default = SmFooter;


var ColorWrapper = _styledComponents2.default.div(_templateObject);
var ContentWidth = _styledComponents2.default.footer(_templateObject2, function (props) {
  return props.maxWidth || '960px';
});

var LeftSide = _styledComponents2.default.div(_templateObject3);
var RightSide = _styledComponents2.default.div(_templateObject4);
var Copyright = _styledComponents2.default.p(_templateObject5);
var Contact = _styledComponents2.default.p(_templateObject6);

var StyledLink = (0, _styledComponents2.default)(_Link2.default)(_templateObject7);