import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Obfuscate from 'react-obfuscate'
import LogoImage from './gdgd.svg'

const SmFooter = props => {
  let date = new Date()
  let year = date.getFullYear()
  return (
    <ColorWrapper>
      <LowFooter>
        <LeftSide>
          <Styleda href="http://ua.edu">
            © {year} The University of Alabama
          </Styleda>
        </LeftSide>
        <RightSide>
          <Styleda
            href="http://maps.apple.com/?q=33.2084338+-87.5472800"
            title="Building Name and Address"
          >
            {'East Annex'}
          </Styleda>
          {' | '}
          <Styledo tel="205-348-7200" title="Telephone Number">
            {'205-348-7200'}
          </Styledo>
          {' | '}
          <Styleda href="http://oira.ua.edu/new/contact/" title="Contact">
            {'OIRA Contact'}
          </Styleda>
        </RightSide>
      </LowFooter>
    </ColorWrapper>
  )
}


export default SmFooter

export const ColorWrapper = styled.div`
  position: relative;
  right: 0;
  bottom: 0;
  left: 0;
  border-top: 1px solid #eee;
  color: black;
  padding-top: 0.5em;
  @media print {
    display: none;
  }
`
export const Logo = styled(Link)`
  display: inline-block;
  width: 328px;
  height: 80px;
  border-bottom: none;
  background: url(${LogoImage});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  text-indent: -9999px;
  z-index: 3;
`
export const LowFooter = styled.footer`
  font-size: 0.88em;
  line-height: 0.88em;
  display: flex;
  color: black;
  flex-flow: row wrap;
  margin: 0 auto;
  width: 100%;
  padding: 20px 1.0875rem;
  max-width: 960px;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    flex-flow: column;
  }
`

export const LeftSide = styled.div`
  float: left;
`
export const RightSide = styled.div`
  text-align: right;
  float: Right;
  @media (max-width: 768px) {
    text-align: center;
  }
`
export const Copyright = styled.p`
  border-bottom: none;
  line-height: 19px;
  margin-bottom: 6px;
  justify: right;
`
export const Contact = styled.p`
  font-size: 12px;
  line-height: 12px;
  font-family: 'Space Mono', monospace;
`
export const StyledLink = styled(Link)`
  color: black;
  font-size: 1.1em;
  text-decoration: none;
  &:hover {
    color: #990000;
  }
  &:active {
    font-weight: bold;
  }
  @media (max-width: 768px) {
    line-height: 1.5em;
  }
`
const Styleda = styled.a`
  color: black;
  font-size: 1.1em;
  text-decoration: none;
  &:hover {
    color: #990000;
  }
  &:active {
    font-weight: bold;
  }
  @media (max-width: 768px) {
    line-height: 1.5em;
  }
`
const Styledo = styled(Obfuscate)`
  color: black;
  font-size: 1.1em;
  text-decoration: none;
  &:hover {
    color: #990000;
  }
  &:active {
    font-weight: bold;
  }
  @media (max-width: 768px) {
    line-height: 1.5em;
  }
`
