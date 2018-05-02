import React from 'react'
import GatsbyLink from 'gatsby-link'

const Link = ({ children, to, ...others }) => {
  const internal = /^\/(?!\/)/.test(to)

  if (internal) {
    return (
      <GatsbyLink to={to} {...others}>
        {children}
      </GatsbyLink>
    )
  }
  return (
    <a href={to} target="_blank" rel="noopener" {...others}>
      {children}
    </a>
  )
}

export default Link
