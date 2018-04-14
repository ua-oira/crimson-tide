import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'


const StyledLink = styled(Link)`
  color: white !important;
  font-size: 16px;
  font-weight: 500;
  padding: 42px 14px;
  text-decoration: none;
  line-height: 20px;
  &:hover {
    color: #900 !important;
    background: #fff;
    transition: all 0.2s ease-in-out;
  }
  &:active,
  visited {
    font-weight: bold;
    text-decoration: none !important;
    color: #fff !important;
  }
  @media (max-width: 768px) {
    line-height: 1.5em;
    &:hover {
      color: #fff !important;
      background: none;
      transition: all 0.2s ease-in-out;
      text-decoration: none;
    }
  }
`
export default StyledLink