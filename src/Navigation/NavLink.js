import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Link from '../Link.js'

const NavLink = styled(Link)`
  color: white !important;
  font-size: 16px;
  font-weight: 500;
  padding: 100px 14px;
  text-decoration: none;
  &:hover {
    color: ${props => props.color} !important;
    background: #fff;
    transition: all 0.2s ease-in-out;
  }
  &:active,
  &:visited {
    font-weight: bold;
    text-decoration: none !important;
    color: #fff !important;
  }
  @media (max-width: 800px) {
    padding: 40px 14px;
    margin-right: 0px;
    margin-bottom: 1em;
    font-size: 10vw;
    line-height: 30px;
    &:hover {
      color: white !important;
      background: none;
      transition: all 0.2s ease-in-out;
      text-decoration: none;
    }
  }
`

export default NavLink

NavLink.propTypes = {
  color: PropTypes.string,
}

NavLink.defaultProps = {
  color: '#000',
}
