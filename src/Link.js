import React from 'react'
import Obfuscate from 'react-obfuscate'

const Link = ({ as: Element = 'a', children, to, ...others }) => {
  const phone = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(to)
  const email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    to
  )
  const map = /^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?),\s*[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/.test(
    to
  )

  if (Element) {
    return (
      <Element href={to} {...others}>
        {children}
      </Element>
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
  } else {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer" {...others}>
        {children}
      </a>
    )
  }
}

export default Link
