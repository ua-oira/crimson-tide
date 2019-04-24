import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { Link } from '../src/index'
import { withInfo } from '@storybook/addon-info'
import StoryRouter from 'storybook-react-router'




storiesOf('Link', module)
.addDecorator(StoryRouter())
.add(
  'Link',
  withInfo(`
      
      
      ~~~js
      <Link />
      ~~~
    
    `)(() => (
      <div>
        <Link to="http://coston.io">Regular link, opens new tab</Link><br/>
        <Link to="305-205-4353">Children not rendered</Link><br/>
        <Link to="hello@ua.edu">Children not rendered</Link><br/>
        <Link to="33.2084338,-87.5472800">Map to East Annex</Link><br/>
        <Link as={"button"} to="/Boom">custom component link</Link><br/>
      </div>
    ))
)
