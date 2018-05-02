import React from 'react'
import Link from '../Link.js'
import styled from 'styled-components'
import Obfuscate from 'react-obfuscate'

import { GDGD } from '../../src/index'

class Footer extends React.Component {
  render() {
    let date = new Date()
    let year = date.getFullYear()
    return (
      <footer>
        <PageWidth>
          <ContentWidth>
            <LeftSide>
              <Logo
                img={this.props.image}
                to="/"
                title="The Office of Institutional Research and Assessement"
              />
            </LeftSide>
            <RightSide>
              <Copyright>© {year} The University of Alabama</Copyright>
              <StyledAnchor
                href="http://maps.apple.com/?q=33.2084338+-87.5472800"
                title="Building Name and Address"
              >
                {'East Annex'}
              </StyledAnchor>
              {' | '}
              <StyledObfuscatedLink tel="205-348-7200" title="Telephone Number">
                {'205-348-7200'}
              </StyledObfuscatedLink>
              {' | '}
              <StyledLink to="/contact/">{'OIRA Contact'}</StyledLink>
            </RightSide>
          </ContentWidth>
        </PageWidth>
      </footer>
    )
  }
}

export default Footer

export const PageWidth = styled.div`
  border-top: 1px solid hsla(0, 0%, 0%, 0.2);
  position: relative;
  right: 0;
  bottom: 0;
  left: 0;
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
  background-color: blue;
  background: url(${props => props.img || GDGD});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  text-indent: -9999px;
  z-index: 3;
`
export const ContentWidth = styled.div`
  font-size: 0.88em;
  line-height: 0.88em;
  display: flex;
  color: black;
  flex-flow: row wrap;
  margin: 0 auto;
  width: 100%;
  padding: 0 1.0875rem;
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
  cursor: default;
  color: hsla(0, 0%, 0%, 0.2);
  float: Right;
  @media (max-width: 768px) {
    text-align: center;
  }
`
export const Copyright = styled.p`
  border-bottom: none;
  color: black;
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
  text-decoration: none;
  &:hover {
    color: #990000;
  }
  &:active {
    font-weight: bold;
  }
`
const StyledAnchor = styled.a`
  color: black;
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
const StyledObfuscatedLink = styled(Obfuscate)`
  color: black;
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
