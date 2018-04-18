import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { Main } from '../src/index'
import { withInfo } from '@storybook/addon-info'

storiesOf('Main Wrapper', module).add(
  'Main',
  withInfo(`
      Main content wrapper.
      ### Usage
      ~~~js
        import { Main } from 'crimson-tide'

        <Main>{children}</Main>
      ~~~

      ### Built In Styles
      ~~~js
        margin:  '1em auto',
        maxWidth: 960,
        minHeight: 500,
        padding: '0px 1.0875rem 1.45rem',
    
    `)(() => (
    <Main>
      <h1>A Wrapper</h1>
      <p>Wraps main contents in {'<main>'} tags and adds margin, max-width, min-height, and padding.</p>
      <p>The content inside the {'<main>'} element should be unique to the document. It should not contain any content that is repeated across documents such as sidebars, navigation links, copyright information, site logos, and search forms.</p>
      <p>Note: There must not be more than one {'<main>'} element in a document. The {'<main>'} element must NOT be a descendant of an {'<article>'}, {'<aside>'}, {'<footer>'}, {'<header>'}, or {'<nav>'} element.</p>
    </Main>
  ))
)
