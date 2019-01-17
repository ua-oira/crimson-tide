'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  background: ', ';\n  overflow: hidden;\n'], ['\n  background: ', ';\n  overflow: hidden;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: flex;\n  padding: 0px 1.0875rem;\n  max-width: ', ';\n  justify-content: space-between;\n  margin: 0 auto;\n  justify-content: space-between;\n  align-items: center;\n  z-index: 2000;\n'], ['\n  display: flex;\n  padding: 0px 1.0875rem;\n  max-width: ', ';\n  justify-content: space-between;\n  margin: 0 auto;\n  justify-content: space-between;\n  align-items: center;\n  z-index: 2000;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  @media (max-width: 800px) {\n    position: absolute;\n    top: -100vh;\n    left: 0;\n    background: ', ';\n    width: 100%;\n    height: 100vh;\n    overflow-y: hidden;\n    transition: all 0.3s ease;\n    display: flex;\n    z-index: 4000;\n    flex-flow: column;\n    justify-content: center;\n    align-items: center;\n  }\n'], ['\n  @media (max-width: 800px) {\n    position: absolute;\n    top: -100vh;\n    left: 0;\n    background: ', ';\n    width: 100%;\n    height: 100vh;\n    overflow-y: hidden;\n    transition: all 0.3s ease;\n    display: flex;\n    z-index: 4000;\n    flex-flow: column;\n    justify-content: center;\n    align-items: center;\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  display: inline-block;\n  margin: 0.8em 0;\n  width: 200px;\n  height: 70px;\n  border-bottom: none;\n  background: url(', ');\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n  text-indent: -9999px;\n  z-index: 3000;\n  @media print {\n    * {\n      -webkit-print-color-adjust: exact;\n    }\n  }\n'], ['\n  display: inline-block;\n  margin: 0.8em 0;\n  width: 200px;\n  height: 70px;\n  border-bottom: none;\n  background: url(', ');\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n  text-indent: -9999px;\n  z-index: 3000;\n  @media print {\n    * {\n      -webkit-print-color-adjust: exact;\n    }\n  }\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  display: none;\n  width: 25px;\n  height: 25px;\n  z-index: 5000;\n  background: url(', ');\n  background-repeat: no-repeat;\n  @media (max-width: 800px) {\n    display: inline;\n  }\n'], ['\n  display: none;\n  width: 25px;\n  height: 25px;\n  z-index: 5000;\n  background: url(', ');\n  background-repeat: no-repeat;\n  @media (max-width: 800px) {\n    display: inline;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactHeadroom = require('react-headroom');

var _reactHeadroom2 = _interopRequireDefault(_reactHeadroom);

var _NavLink = require('./NavLink');

var _NavLink2 = _interopRequireDefault(_NavLink);

var _Link = require('../Link.js');

var _Link2 = _interopRequireDefault(_Link);

var _alairLogo = require('../logos/alair-logo.svg');

var _alairLogo2 = _interopRequireDefault(_alairLogo);

var _menuArrow = require('./menu-arrow.svg');

var _menuArrow2 = _interopRequireDefault(_menuArrow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NavWithMenu = function (_React$Component) {
  _inherits(NavWithMenu, _React$Component);

  function NavWithMenu(props) {
    _classCallCheck(this, NavWithMenu);

    var _this = _possibleConstructorReturn(this, (NavWithMenu.__proto__ || Object.getPrototypeOf(NavWithMenu)).call(this, props));

    _this.toggle = function () {
      _this.setState(function (prevState) {
        return {
          menu: !prevState.menu
        };
      });
    };

    _this.close = function (item) {
      return function () {
        _this.setState({
          menu: false
        });
      };
    };

    _this.state = {
      menu: false
    };
    return _this;
  }

  _createClass(NavWithMenu, [{
    key: 'render',
    value: function render() {
      var menu = this.state.menu;

      var closeMenu = this.close('menu');

      return _react2.default.createElement(
        ColorWrapper,
        { background: this.props.background },
        _react2.default.createElement(
          Header,
          { maxWidth: this.props.maxWidth },
          _react2.default.createElement(Logo, { img: this.props.image, to: '/', onClick: closeMenu }),
          _react2.default.createElement(Toggle, { onClick: this.toggle, active: menu }),
          _react2.default.createElement(
            Navigation,
            {
              role: 'navigation',
              style: { top: menu ? 0 : '-100vh' },
              background: this.props.background
            },
            this.props.children
          )
        )
      );
    }
  }]);

  return NavWithMenu;
}(_react2.default.Component);

exports.default = NavWithMenu;


var ColorWrapper = _styledComponents2.default.nav(_templateObject, function (props) {
  return props.background;
});
var Header = _styledComponents2.default.div(_templateObject2, function (props) {
  return props.maxWidth || '960px';
});
var Navigation = _styledComponents2.default.div(_templateObject3, function (props) {
  return props.background;
});

// HAS DEPENDENCIES
var Logo = (0, _styledComponents2.default)(_Link2.default)(_templateObject4, function (props) {
  return props.img;
});

var Arrow = _styledComponents2.default.div(_templateObject5, _menuArrow2.default);

var Toggle = function Toggle(_ref) {
  var onClick = _ref.onClick,
      active = _ref.active;
  return _react2.default.createElement(Arrow, {
    onClick: onClick,
    style: { transform: active ? 'rotate(45deg)' : 'rotate(0deg)' }
  });
};