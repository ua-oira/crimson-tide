import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withInfo } from '@storybook/addon-info'
import StoryRouter from 'storybook-react-router'

import { LightNav, LightLink } from '../../src/index'

const LightLinks = [
  { title: 'Planning Group', path: '/planning-group' },
  { title: 'Steering Committee', path: '/steering-committee' },
  { title: 'FAQ', path: '/faq' },
  { title: 'Resources', path: '/resources' },
]

storiesOf('Navigation', module)
  .addDecorator(StoryRouter())
  .add(
    'LightNav',
    withInfo(`
      - A basic navbar. 
      - Great for quick site spin-up. 
      - Add nav links via array of objects to the links attribute.
      
      ## Usage
      
      ~~~js
      import { Nav, ChimeIn } from 'crimson-tide'


      <Nav image={ChimeIn}/>
      ~~~
    
    `)(() => (
      <LightNav>
        <LightLink to="/mission/">{'Mission'}</LightLink>
        {' | '}
        <LightLink to="/reports/">{'Reports'}</LightLink>
        {' | '}
        <LightLink to="http://oira.ua.edu/factbook">{'Factbook'}</LightLink>
        {' | '}
        <LightLink to="/requests/">{'Requests'}</LightLink>
        {' | '}
        <LightLink to="/staff/">{'Staff'}</LightLink>
        {' | '}
        <LightLink to="/resources/">{'Resources'}</LightLink>
      </LightNav>
    ))
  )
