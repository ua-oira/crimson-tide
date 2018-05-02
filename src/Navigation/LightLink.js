import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Link from '../Link.js'

const LightLink = styled(Link)`
  color: black;
  font-size: 1.1em;
  text-decoration: none;
  &:hover {
    color: #990000;
  }
  &:active {
    font-weight: bold;
  }
  @media (max-width: 810px) {
    line-height: 1.5em;
  }
`

export default LightLink
