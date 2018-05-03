import React from 'react'
import GatsbyLink from 'gatsby-link'
import Obfuscate from 'react-obfuscate'

const Link = ({ children, to, ...others }) => {
  const internal = /^\/(?!\/)/.test(to)
  const phone = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(to)
  const email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    to
  )
  const map = /^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?),\s*[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/.test(
    to
  )

  if (internal) {
    return (
      <GatsbyLink to={to} {...others}>
        {children}
      </GatsbyLink>
    )
  } else if (phone) {
    return (
      <Obfuscate tel={to} {...others}>
        {children}
      </Obfuscate>
    )
  } else if (email) {
    return <Obfuscate email={to} {...others} />
  } else if (map) {
    return (
      <a
        href={'http://maps.apple.com/?q=' + to}
        title="Map coordinates"
        {...others}
      >
        {children}
      </a>
    )
  }
  return (
    <a href={to} target="_blank" rel="noopener" {...others}>
      {children}
    </a>
  )
}

export default Link
