import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withInfo } from '@storybook/addon-info'

import Gorgas from './story-images/gorgaslibrary01_1920.jpg'
import EA from './story-images/east-annex.jpg'
import KC from './story-images/kuffel-coliseum.jpg'
import { Card, Cards } from '../src/index'



storiesOf('Cards', module).add(
  'Default',
  withInfo(`
      Easy Cards
      ~~~js
      <Cards>
        <Card
          image={Gorgas}
          title="Gorgas Library"
          text="Gorgas Library supports teaching and research needs in humanities, social sciences, and government information as the campus’ main library."
        >
        <small>Wow</small>
        </Card>
        <Card
          image={EA}
          title="East Annex"
          text="Well, here's one thing you can be sure of, mister: leave any bigotry in your quarters. There's no room for it on the bridge."
          action="Visit OIRA →"
        >
        </Card>
      </Cards>
    ))
      ~~~
    
    `)(() => (
      <Cards>
        <Card
          image={Gorgas}
          title="Gorgas Library"
          link="https://www.lib.ua.edu/libraries/gorgas/"
          text="Gorgas Library supports teaching and research needs in humanities, social sciences, and government information as the campus’ main library."
        >
        <small>Wow</small>
        </Card>
        <Card
          image={EA}
          title="East Annex"
          link="http://oira.ua.edu"
          text="Well, here's one thing you can be sure of, mister: leave any bigotry in your quarters. There's no room for it on the bridge."
          action="Visit OIRA →"
        >
        </Card>
        <Card
          image={KC}
          title="Kuffel Coliseum"
          link="http://oira.ua.edu"
          text="Fight to the data in America's premier subterranean institutional research workspace."
        >
        <p>"Should be fun!" -Lorne Kuffel</p>
        </Card>
        <Card
          title="Example Four"
          link="http://oira.ua.edu"
          text="No image, no children"
        >
        </Card>
        <Card
          
        >
        <p><strong>Example Five:</strong> no image, no title, no text, only children 😐</p>
        </Card>
        <Card
          image={KC}
          title="Example Six"
          text="Less text height than top row cards"
        >
        <p>No link</p>
        </Card>
        <Card
          image={Gorgas}
          title="Example Seven"
          text="New Grid Row, New Sizing"
          link="http://oira.ua.edu"
          
        >
        </Card>
      </Cards>
    ))
)

