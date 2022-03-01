import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withInfo } from '@storybook/addon-info'

import { ChimeIn, ChimeIn5, GDGD, OIRALogo } from '../../src/index'

const BG = { backgroundImage: 'linear-gradient(to right, #7474bf, #348ac7)' }

storiesOf('Logos', module).add(
  'ChimeIn',
  withInfo(`
      
      ~~~js
      {ChimeIn}
      ~~~
    
    `)(() => <img style={BG} src={ChimeIn} />)
)

storiesOf('Logos', module).add(
  'ChimeIn5',
  withInfo(`
      
      ~~~js
      {ChimeIn5}
      ~~~
    
    `)(() => <img style={BG} src={ChimeIn5} />)
)

storiesOf('Logos', module).add(
  'Good Data, Good Decisions',
  withInfo(`
      
      ~~~js
      {GDGD}
      ~~~
    
    `)(() => <img style={BG} src={GDGD} />)
)

storiesOf('Logos', module).add(
  'OIRA Logo',
  withInfo(`
      
      ~~~js
      {OIRALogo}
      ~~~
    
    `)(() => <img style={BG} src={OIRALogo} />)
)
