import React, { Component } from 'react'
import MapGL from 'react-map-gl'
import { fromJS } from 'immutable'
import { nest } from 'd3-collection'

import ControlPanel from './control-panel'
import { defaultMapStyle, dataLayer } from './map-style.js'
import { updatePercentiles, getSchoolContribution } from './utils'
import './mapStyles.css'

const windowGlobal = typeof window !== 'undefined' && window
export default class AcheMap extends Component {
  state = {
    mapStyle: defaultMapStyle,
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
      height: 500,
    },
  }

  componentDidMount() {
    windowGlobal.addEventListener('resize', this._resize)
    this._resize()

    Promise.all([
      fetch(this.props.data).then(d => d.json()),
      fetch(this.props.geoData).then(d => d.json()),
    ])
      .then(data => this._loadData(data[0], data[1]))
      .catch(e => console.log('data fetch error', e))
  }

  componentWillUnmount() {
    windowGlobal.removeEventListener('resize', this._resize)
  }

  _resize = () => {
    this.setState({
      viewport: {
        ...this.state.viewport,
        width: this.props.width || windowGlobal.innerWidth,
        height: this.props.height || windowGlobal.innerHeight,
      },
    })
  }

  _loadData = (geo, students) => {
    const { school } = this.state
    const year = students.slice(-1)[0]['Fall Term']
    const nested = nest()
      .key(d => d['Fall Term'])
      .key(d => d.County)
      .object(students)

    updatePercentiles(geo, school, f =>
      getSchoolContribution(nested, year, school, f.properties.name)
    )

    const mapStyle = defaultMapStyle
      // Add geojson source to map
      .setIn(['sources', 'ACHE'], fromJS({ type: 'geojson', data: geo }))
      // Add point layer to map
      .set('layers', defaultMapStyle.get('layers').push(dataLayer))

    this.setState({ year, data: geo, mapStyle, students: nested })
  }

  _updateSettings = (name, value) => {
    const { data, mapStyle, students, school, year } = this.state
    const updateArgs = [students, year, school]
    const stateUpdate = {}

    if (name === 'year') {
      stateUpdate.year = parseInt(value)
      updateArgs[1] = parseInt(value)
    }
    if (name === 'school') {
      stateUpdate.school = value
      updateArgs[2] = value
    }

    if (data) {
      updatePercentiles(data, updateArgs[2], f =>
        getSchoolContribution.apply(null, [...updateArgs, f.properties.name])
      )
      const newMapStyle = mapStyle.setIn(
        ['sources', 'ACHE', 'data'],
        fromJS(data)
      )
      this.setState({ mapStyle: newMapStyle, ...stateUpdate })
    }
  }

  _onViewportChange = viewport => this.setState({ viewport })

  _onHover = (isClick, event) => {
    // if no longer in hover mode, discard hover events
    if (!this.state.hover && !isClick) return

    const {
      features,
      srcEvent: { offsetX, offsetY },
    } = event
    const hoveredFeature = features && features.find(f => f.layer.id === 'data')
    const name = hoveredFeature && hoveredFeature.properties.name

    this.setState({
      name,
      x: offsetX,
      y: offsetY,
      // if in hover mode and user clicks, toggle into click mode
      hover: this.state.hover ? !isClick : isClick, //hover ? !isClick : isClick
    })
  }

  _renderTooltip() {
    const { name, year, x, y } = this.state
    const hoveredData = name ? this.state.students[year][name][0] : null

    return (
      hoveredData && (
        <div className="tooltip" style={{ left: x, top: y }}>
          <div>{hoveredData.County}</div>
          <div>
            {this.state.school} Distribution:{' '}
            {(hoveredData.value || 0).toFixed(2) + '%'}
          </div>
        </div>
      )
    )
  }

  render() {
    const { viewport, mapStyle } = this.state

    return (
      <div>
        <MapGL
          {...viewport}
          doubleClickZoom={false}
          mapStyle={mapStyle}
          onViewportChange={this._onViewportChange}
          mapboxApiAccessToken={this.props.mapbox}
          onHover={(...args) => this._onHover(false, ...args)}
          onClick={(...args) => this._onHover(true, ...args)}
        >
          {this._renderTooltip()}
        </MapGL>

        <ControlPanel
          containerComponent={this.props.containerComponent}
          settings={this.state}
          onClick={this._updateSettings}
          onChange={this._updateSettings}
        />
        <div
          style={{
            position: 'absolute',
            right: 0,
            lineHeight: 0,
            bottom: 0,
            fontSize: '.8em',
            color: 'white',
            mixBlendMode: 'difference',
            padding: '1px 10px',
          }}
        >
          <p>
            <a style={{ color: 'inherit' }} href="http://oira.ua.edu/">
              Good Data, Good Decisions
            </a>
          </p>
        </div>
      </div>
    )
  }
}
