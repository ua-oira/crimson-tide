import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { SmFooter } from '../src/index'
import { withInfo } from '@storybook/addon-info'



storiesOf('SmFooter', module).add(
  'Default',
  withInfo(`
      A minimal white footer. Links open new tabs or maps, or obfuscated contact methods (i.e. email.)
      ~~~js
      <SmFooter />
      ~~~
    
    `)(() => <SmFooter />)
)
