import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { Link } from '../../../src/index'
import { withInfo } from '@storybook/addon-info'
import StoryRouter from 'storybook-react-router'
import StateMap from '../../../src/maps/AcheMap'
import "babel-polyfill"


const MAPBOX_TOKEN =
  ''

storiesOf('Map', module)
.addDecorator(StoryRouter())
.add(
  'AcheMap',
  withInfo(`
      
      
      ~~~js
      <StateMap 
        mapbox={MAPBOX_TOKEN}
        data={TheData}
        geoData={OtherData}
      />
      ~~~
    
    `)(() => (
      <div>
        <StateMap 
          mapbox={MAPBOX_TOKEN}
          data={"http://oira.ua.edu/maps/undergraduates-from-alabama-by-state/data/us.json"}
          geoData="http://oira.ua.edu/maps/undergraduates-from-alabama-by-state/data/usindata.json"
        />
      </div>
    ))
)
