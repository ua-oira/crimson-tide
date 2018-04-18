import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withInfo } from '@storybook/addon-info'

import { Tabs, Tab } from '../src/index'



storiesOf('Tabs', module).add(
  'Default',
  withInfo(`
      A minimal white footer. Links open new tabs or maps, or obfuscated contact methods (i.e. email.)
      ~~~js
      <Tabs>
          <Tab
            title="Division/College/School"
            render={() => (
              <p>Wow</p>
            )}
          />

          <Tab
            title="Job Category"
            render={() => (
              <p>Neat</p>
            )}
          />
        </Tabs>
      ~~~
    
    `)(() => (
      <Tabs>
          <Tab
            title="Tab One"
            render={() => (
              <div>
                <h1>First Tab</h1>
                <p>Wow</p>
              </div>
            )}
          />

          <Tab
            title="Tab Two"
            render={() => (
              <div>
                <h1>Second Tab</h1>
                <p>Neat</p>
              </div>
            )}
          />
        </Tabs>
    ))
)
