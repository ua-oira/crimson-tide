import React from 'react'
import Helmet from 'react-helmet'

const PageTitle = props => (
  <div>
    <Helmet
      title={`${props.name || ''} | ALAIR`}
      meta={[
        {
          name: 'description',
          content:
            props.description ||
            `${
              props.name
            } at the Office of Institutional Research and Assessment of The University of Alabama`,
        },
        {
          name: 'keywords',
          content:
            props.keywords ||
            `${
              props.keywords
            }, OIRA, The University of Alabama, AIR, SAIR, ALAIR`,
        },
      ]}
    />
    {props.noHeader ? null : (
      <header>
        <h1>{props.name}</h1>
        <hr />
      </header>
    )}
  </div>
)

export default PageTitle

// EXAMPLE:
// <PageTitle description="" keywords="" name="Contact" keywords="foo, bar, baz" />
