import React from 'react'
import Helmet from 'react-helmet'

const PageTitle = props => (
  <div>
    <Helmet>
      <title>{`${props.name} ${props.site ? ` | ${props.site}` : ''}`}</title>
      <meta name="description" content={props.description} />
      <meta name="keywords" content={props.keywords} />
      <meta property="og:title" content={props.name} />
      <meta property="og:image" content={props.image} />
      <meta property="og:description" content={props.description} />
    </Helmet>
    {props.noHeader ? null : (
      <div>
        <h1>{props.name}</h1>
        <hr />
      </div>
    )}
  </div>
)

export default PageTitle

// EXAMPLE:
{
  /* 
  <PageTitle 
    name="Contact"
    description="foo"
    keywords="bar"
    image="baz"
    site="OIRA"
  /> 
*/
}
