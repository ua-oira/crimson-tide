import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withInfo } from '@storybook/addon-info'
import StoryRouter from 'storybook-react-router'

import { NavWithMenu } from '../../src/index'

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
      - A basic navbar. 
      - Great for quick site spin-up. 
      - Add nav links via array of objects to the links attribute.
      
      ## Usage
      
      ~~~js
      import { Nav, ChimeIn } from 'crimson-tide'

      const NavLinks = [
        { title: 'Planning Group', path: '/planning-group' },
        { title: 'Steering Committee', path: '/steering-committee' },
        { title: 'FAQ', path: '/faq' },
        { title: 'Resources', path: '/resources' },
      ]

      <Nav image={ChimeIn} links={NavLinks} />
      ~~~
    
    `)(() => (
      <NavWithMenu />
    ))
  )

  