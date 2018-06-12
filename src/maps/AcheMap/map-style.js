import { fromJS } from 'immutable'
import MAP_STYLE from './map-styles-bw.json'
import 'mapbox-gl/dist/mapbox-gl.css'

// For more information on data-driven styles, see https://www.mapbox.com/help/gl-dds-ref/
export const dataLayer = fromJS({
  id: 'data',
  source: 'ACHE',
  type: 'fill',
  interactive: true,
  paint: {
    'fill-color': {
      property: 'percentile',
      stops: [
        // UA: values 0-9
        [0, 'RGBA(90, 90, 90, .03)'],
        [1, 'RGBA(153, 0, 0, .10)'],
        [2, 'RGBA(153, 0, 0, .20)'],
        [3, 'RGBA(153, 0, 0, .30)'],
        [4, 'RGBA(153, 0, 0, .40)'],
        [5, 'RGBA(153, 0, 0, .50)'],
        [6, 'RGBA(153, 0, 0, .60)'],
        [7, 'RGBA(153, 0, 0, .70)'],
        [8, 'RGBA(153, 0, 0, .80)'],
        [9, 'RGBA(153, 0, 0, .90)'],
        // Other: 10-19
        [10, 'RGBA(90, 90, 90, .03)'],
        [11, 'RGBA(30, 107, 82, .10)'],
        [12, 'RGBA(30, 107, 82, .20)'],
        [13, 'RGBA(30, 107, 82, .30)'],
        [14, 'RGBA(30, 107, 82, .40)'],
        [15, 'RGBA(30, 107, 82, .50)'],
        [16, 'RGBA(30, 107, 82, .60)'],
        [17, 'RGBA(30, 107, 82, .70)'],
        [18, 'RGBA(30, 107, 82, .80)'],
        [19, 'RGBA(30, 107, 82, .90)'],
      ],
    },
    // 'fill-opacity': 0.8,
  },
})

export const defaultMapStyle = fromJS(MAP_STYLE)
