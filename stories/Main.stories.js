import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { Main } from '../src/index'
import { withInfo } from '@storybook/addon-info'

storiesOf('Main', module).add(
  'Default',
  withInfo(`
      Main content wrapper.
      #### Default Styles
      ~~~js
        margin:  '1em auto 1em auto',
        maxWidth: 960,
        minHeight: 500,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0
      ~~~
    
    `)(() => (
    <Main>
      <h1>Wow</h1>
      <p>This is soooo great.</p>
    </Main>
  ))
)
