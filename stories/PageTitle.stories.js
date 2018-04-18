import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { PageTitle } from '../src/index'
import { withInfo } from '@storybook/addon-info'

storiesOf('PageTitle', module).add(
  'PageTitle',
  withInfo(`
      
      
      ~~~js
      <PageTitle 
        name="Contact"
        description="foo"
        keywords="bar"
        image="baz"
        site="OIRA"
      /> 
      ~~~
    
    `)(() => (
    <PageTitle
      name="Title, h1, hr, & meta"
      description="foo"
      keywords="bar"
      image="baz"
      site="OIRA"
    />
  ))
)
