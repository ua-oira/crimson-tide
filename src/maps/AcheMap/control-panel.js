import React, { PureComponent } from 'react'
import { descending } from 'd3-array'

const defaultContainer = ({ children }) => (
  <div className="control-panel">{children}</div>
)

const getSortedSchools = data => {
  const keys = Object.keys(data).filter(
    k => ['Fall Term', 'Total', 'County', 'value'].indexOf(k) === -1
  )
  const entries = keys
    .map(k => ({ key: k, val: data[k] }))
    .sort((a, b) => descending(a.val, b.val))
  return entries //.slice(0,10)
}

export default class ControlPanel extends PureComponent {
  render() {
    const Container = this.props.containerComponent || defaultContainer
    const { settings } = this.props
    const { students, year, name, school } = settings
    const data = students && year && name ? students[year][name][0] : null
    const sortedSchools = data && getSortedSchools(data)

    return (
      <Container>
        <h1 style={{ fontSize: '1.3em' }}>
          ACHE Sources of Undergraduates from Alabama by State
        </h1>
        <hr />

        <div key={name} className="input">
          <label>{settings.year}</label>
          <span
            onClick={evt =>
              this.props.onChange(
                'year',
                (evt.target.value =
                  settings.year > 2004 ? settings.year - 1 : settings.year + 15)
              )
            }
            className="range-controls"
          >
            -
          </span>
          <input
            className="mapInput"
            type="range"
            value={settings.year || ''}
            min={2004}
            max={2017}
            step={1}
            onChange={evt => this.props.onChange('year', evt.target.value)}
          />
          <span
            className="range-controls"
            onClick={evt =>
              this.props.onChange(
                'year',
                (evt.target.value =
                  settings.year < 2017 ? settings.year + 1 : settings.year - 15)
              )
            }
          >
            +
          </span>
        </div>
        <hr />
        {sortedSchools && (
          <div>
            <h3 style={{ fontSize: '1.2em' }}>
              <span>{name}</span>
              <span style={{ float: 'right' }}>{data.Total} Students</span>
            </h3>
            <ul>
              {sortedSchools.map(({ key, val }) => (
                <li
                  onClick={evt => this.props.onClick('school', key)}
                  style={{
                    color:
                      key === school
                        ? key === 'UA'
                          ? '#990000'
                          : '#1E6B52'
                        : 'inherit',
                    fontWeight: key === school ? '900' : 'inherit',
                    //fontSize: key === school ? '1.01rem' : 'inherit',
                    position: 'relative',
                    cursor: 'pointer',
                    marginBottom: 0,
                  }}
                  key={key}
                >
                  <span
                    style={{
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      width: 100,
                    }}
                  >
                    {key} - {(val || 0).toLocaleString()}
                  </span>
                  <span
                    style={{
                      position: 'absolute',
                      left: 100,
                      top: 4,
                      width: 200,
                    }}
                  >
                    <svg width="160" height="20">
                      <rect
                        height="20"
                        width={Math.round((val / sortedSchools[0].val) * 180)}
                        fill={
                          key === school
                            ? key === 'UA'
                              ? '#990000'
                              : '#1E6B52'
                            : '#6b6b76'
                        }
                      />
                    </svg>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Container>
    )
  }
}
