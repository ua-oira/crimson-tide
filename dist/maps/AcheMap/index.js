'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactMapGl = require('react-map-gl');

var _reactMapGl2 = _interopRequireDefault(_reactMapGl);

var _immutable = require('immutable');

var _d3Collection = require('d3-collection');

var _controlPanel = require('./control-panel');

var _controlPanel2 = _interopRequireDefault(_controlPanel);

var _mapStyle = require('./map-style.js');

var _utils = require('./utils');

require('./mapStyles.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var windowGlobal = typeof window !== 'undefined' && window;

var AcheMap = function (_Component) {
  _inherits(AcheMap, _Component);

  function AcheMap() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AcheMap);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AcheMap.__proto__ || Object.getPrototypeOf(AcheMap)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      mapStyle: _mapStyle.defaultMapStyle,
      year: null,
      school: 'UA',
      students: [],
      // selected county
      name: null,
      data: null,
      hover: true,
      viewport: {
        latitude: 40,
        longitude: -90,
        zoom: 3.5,
        bearing: 0,
        pitch: 0,
        width: 500,
        height: 500
      }
    }, _this._resize = function () {
      _this.setState({
        viewport: _extends({}, _this.state.viewport, {
          width: _this.props.width || windowGlobal.innerWidth,
          height: _this.props.height || windowGlobal.innerHeight
        })
      });
    }, _this._loadData = function (geo, students) {
      var school = _this.state.school;

      var year = students.slice(-1)[0]['Fall Term'];
      var nested = (0, _d3Collection.nest)().key(function (d) {
        return d['Fall Term'];
      }).key(function (d) {
        return d.County;
      }).object(students);

      (0, _utils.updatePercentiles)(geo, school, function (f) {
        return (0, _utils.getSchoolContribution)(nested, year, school, f.properties.name);
      });

      var mapStyle = _mapStyle.defaultMapStyle
      // Add geojson source to map
      .setIn(['sources', 'ACHE'], (0, _immutable.fromJS)({ type: 'geojson', data: geo }))
      // Add point layer to map
      .set('layers', _mapStyle.defaultMapStyle.get('layers').push(_mapStyle.dataLayer));

      _this.setState({ year: year, data: geo, mapStyle: mapStyle, students: nested });
    }, _this._updateSettings = function (name, value) {
      var _this$state = _this.state,
          data = _this$state.data,
          mapStyle = _this$state.mapStyle,
          students = _this$state.students,
          school = _this$state.school,
          year = _this$state.year;

      var updateArgs = [students, year, school];
      var stateUpdate = {};

      if (name === 'year') {
        stateUpdate.year = parseInt(value);
        updateArgs[1] = parseInt(value);
      }
      if (name === 'school') {
        stateUpdate.school = value;
        updateArgs[2] = value;
      }

      if (data) {
        (0, _utils.updatePercentiles)(data, updateArgs[2], function (f) {
          return _utils.getSchoolContribution.apply(null, [].concat(updateArgs, [f.properties.name]));
        });
        var newMapStyle = mapStyle.setIn(['sources', 'ACHE', 'data'], (0, _immutable.fromJS)(data));
        _this.setState(_extends({ mapStyle: newMapStyle }, stateUpdate));
      }
    }, _this._onViewportChange = function (viewport) {
      return _this.setState({ viewport: viewport });
    }, _this._onHover = function (isClick, event) {
      // if no longer in hover mode, discard hover events
      if (!_this.state.hover && !isClick) return;

      var features = event.features,
          _event$srcEvent = event.srcEvent,
          offsetX = _event$srcEvent.offsetX,
          offsetY = _event$srcEvent.offsetY;

      var hoveredFeature = features && features.find(function (f) {
        return f.layer.id === 'data';
      });
      var name = hoveredFeature && hoveredFeature.properties.name;

      _this.setState({
        name: name,
        x: offsetX,
        y: offsetY,
        // if in hover mode and user clicks, toggle into click mode
        hover: _this.state.hover ? !isClick : isClick //hover ? !isClick : isClick
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AcheMap, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      windowGlobal.addEventListener('resize', this._resize);
      this._resize();

      Promise.all([fetch(this.props.data).then(function (d) {
        return d.json();
      }), fetch(this.props.geoData).then(function (d) {
        return d.json();
      })]).then(function (data) {
        return _this2._loadData(data[0], data[1]);
      }).catch(function (e) {
        return console.log('data fetch error', e);
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      windowGlobal.removeEventListener('resize', this._resize);
    }
  }, {
    key: '_renderTooltip',
    value: function _renderTooltip() {
      var _state = this.state,
          name = _state.name,
          year = _state.year,
          x = _state.x,
          y = _state.y;

      var hoveredData = name ? this.state.students[year][name][0] : null;

      return hoveredData && _react2.default.createElement(
        'div',
        { className: 'tooltip', style: { left: x, top: y } },
        _react2.default.createElement(
          'div',
          null,
          hoveredData.County
        ),
        _react2.default.createElement(
          'div',
          null,
          this.state.school,
          ' Distribution:',
          ' ',
          (hoveredData.value || 0).toFixed(2) + '%'
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _state2 = this.state,
          viewport = _state2.viewport,
          mapStyle = _state2.mapStyle;


      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactMapGl2.default,
          _extends({}, viewport, {
            doubleClickZoom: false,
            mapStyle: mapStyle,
            onViewportChange: this._onViewportChange,
            mapboxApiAccessToken: this.props.mapbox,
            onHover: function onHover() {
              for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
              }

              return _this3._onHover.apply(_this3, [false].concat(args));
            },
            onClick: function onClick() {
              for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                args[_key3] = arguments[_key3];
              }

              return _this3._onHover.apply(_this3, [true].concat(args));
            }
          }),
          this._renderTooltip()
        ),
        _react2.default.createElement(_controlPanel2.default, {
          containerComponent: this.props.containerComponent,
          settings: this.state,
          onClick: this._updateSettings,
          onChange: this._updateSettings
        }),
        _react2.default.createElement(
          'div',
          {
            style: {
              position: 'absolute',
              right: 0,
              lineHeight: 0,
              bottom: 0,
              fontSize: '.8em',
              color: 'white',
              mixBlendMode: 'difference',
              padding: '1px 10px'
            }
          },
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement(
              'a',
              { style: { color: 'inherit' }, href: 'http://oira.ua.edu/' },
              'Good Data, Good Decisions'
            )
          )
        )
      );
    }
  }]);

  return AcheMap;
}(_react.Component);

exports.default = AcheMap;