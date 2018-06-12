'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _d3Array = require('d3-array');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultContainer = function defaultContainer(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    'div',
    { className: 'control-panel' },
    children
  );
};

var getSortedSchools = function getSortedSchools(data) {
  var keys = Object.keys(data).filter(function (k) {
    return ['Fall Term', 'Total', 'County', 'value'].indexOf(k) === -1;
  });
  var entries = keys.map(function (k) {
    return { key: k, val: data[k] };
  }).sort(function (a, b) {
    return (0, _d3Array.descending)(a.val, b.val);
  });
  return entries; //.slice(0,10)
};

var ControlPanel = function (_PureComponent) {
  _inherits(ControlPanel, _PureComponent);

  function ControlPanel() {
    _classCallCheck(this, ControlPanel);

    return _possibleConstructorReturn(this, (ControlPanel.__proto__ || Object.getPrototypeOf(ControlPanel)).apply(this, arguments));
  }

  _createClass(ControlPanel, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var Container = this.props.containerComponent || defaultContainer;
      var settings = this.props.settings;
      var students = settings.students,
          year = settings.year,
          name = settings.name,
          school = settings.school;

      var data = students && year && name ? students[year][name][0] : null;
      var sortedSchools = data && getSortedSchools(data);

      return _react2.default.createElement(
        Container,
        null,
        _react2.default.createElement(
          'h1',
          { style: { fontSize: '1.3em' } },
          'ACHE Sources of Undergraduates from Alabama by State'
        ),
        _react2.default.createElement('hr', null),
        _react2.default.createElement(
          'div',
          { key: name, className: 'input' },
          _react2.default.createElement(
            'label',
            null,
            settings.year
          ),
          _react2.default.createElement(
            'span',
            {
              onClick: function onClick(evt) {
                return _this2.props.onChange('year', evt.target.value = settings.year > 2004 ? settings.year - 1 : settings.year + 15);
              },
              className: 'range-controls'
            },
            '-'
          ),
          _react2.default.createElement('input', {
            className: 'mapInput',
            type: 'range',
            value: settings.year || '',
            min: 2004,
            max: 2017,
            step: 1,
            onChange: function onChange(evt) {
              return _this2.props.onChange('year', evt.target.value);
            }
          }),
          _react2.default.createElement(
            'span',
            {
              className: 'range-controls',
              onClick: function onClick(evt) {
                return _this2.props.onChange('year', evt.target.value = settings.year < 2017 ? settings.year + 1 : settings.year - 15);
              }
            },
            '+'
          )
        ),
        _react2.default.createElement('hr', null),
        sortedSchools && _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'h3',
            { style: { fontSize: '1.2em' } },
            _react2.default.createElement(
              'span',
              null,
              name
            ),
            _react2.default.createElement(
              'span',
              { style: { float: 'right' } },
              data.Total,
              ' Students'
            )
          ),
          _react2.default.createElement(
            'ul',
            null,
            sortedSchools.map(function (_ref2) {
              var key = _ref2.key,
                  val = _ref2.val;
              return _react2.default.createElement(
                'li',
                {
                  onClick: function onClick(evt) {
                    return _this2.props.onClick('school', key);
                  },
                  style: {
                    color: key === school ? key === 'UA' ? '#990000' : '#1E6B52' : 'inherit',
                    fontWeight: key === school ? '900' : 'inherit',
                    //fontSize: key === school ? '1.01rem' : 'inherit',
                    position: 'relative',
                    cursor: 'pointer',
                    marginBottom: 0
                  },
                  key: key
                },
                _react2.default.createElement(
                  'span',
                  {
                    style: {
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      width: 100
                    }
                  },
                  key,
                  ' - ',
                  (val || 0).toLocaleString()
                ),
                _react2.default.createElement(
                  'span',
                  {
                    style: {
                      position: 'absolute',
                      left: 100,
                      top: 4,
                      width: 200
                    }
                  },
                  _react2.default.createElement(
                    'svg',
                    { width: '160', height: '20' },
                    _react2.default.createElement('rect', {
                      height: '20',
                      width: Math.round(val / sortedSchools[0].val * 180),
                      fill: key === school ? key === 'UA' ? '#990000' : '#1E6B52' : '#6b6b76'
                    })
                  )
                )
              );
            })
          )
        )
      );
    }
  }]);

  return ControlPanel;
}(_react.PureComponent);

exports.default = ControlPanel;