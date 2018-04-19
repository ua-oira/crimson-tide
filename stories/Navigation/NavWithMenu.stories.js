import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withInfo } from '@storybook/addon-info'
import StoryRouter from 'storybook-react-router'

import { NavWithMenu, ALAIR } from '../../src/index'

const NavLinks = [
  { title: 'Planning Group', path: '/planning-group' },
  { title: 'Steering Committee', path: '/steering-committee' },
  { title: 'FAQ', path: '/faq' },
  { title: 'Resources', path: '/resources' },
]

storiesOf('Navigation', module)
  .addDecorator(StoryRouter())
  .add(
    'NavWithMenu',
    withInfo(`
      
      ~~~js
      
      ~~~
    
    `)(() => (
      <NavWithMenu image={ALAIR} background="linear-gradient(to right, #2196f3, #f44336)"/>
    ))
  )

  