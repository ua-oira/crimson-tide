import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withInfo } from '@storybook/addon-info'
import StoryRouter from 'storybook-react-router'

import { Nav, ChimeIn, NavLink } from '../../src/index'

const NavLinks = [
  { title: 'Planning Group', path: '/planning-group' },
  { title: 'Steering Committee', path: '/steering-committee' },
  { title: 'FAQ', path: '/faq' },
  { title: 'Resources', path: '/resources' },
]

storiesOf('Navigation', module)
  .addDecorator(StoryRouter())
  .add(
    'Nav',
    withInfo(`
      - A basic navbar. 
      - Great for quick site spin-up. 
      
      ## Usage
      
      ~~~js
      import { Nav, ChimeIn, NavLink } from '../../src/index'

      <Nav background="rebeccapurple" image={ChimeIn}>
        <NavLink color="rebeccapurple" to="/LINK1">
          LINK1
        </NavLink>
        <NavLink color="rebeccapurple" to="/LINK2">
          LINK2
        </NavLink>
        <NavLink color="rebeccapurple" to="/LINK3">
          LINK3
        </NavLink>
      </Nav>
      ~~~
    
    `)(() => (
      <Nav background="rebeccapurple" image={ChimeIn}>
        <NavLink color="rebeccapurple" to="/LINK1">
          LINK1
        </NavLink>
        <NavLink color="rebeccapurple" to="/LINK2">
          LINK2
        </NavLink>
        <NavLink color="rebeccapurple" to="/LINK3">
          LINK3
        </NavLink>
      </Nav>
    ))
  )
