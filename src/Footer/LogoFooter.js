import React from 'react'
import Link from '../Link.js'
import styled from 'styled-components'

import GDGD from '../logos/gdgd.svg'

const LogoFooter = props => {
  let date = new Date()
  let year = date.getFullYear()
  return (
    <footer>
      {props.children}
      <PageWidth>
        <ContentWidth>
          <LeftSide>
            <Logo
              img={props.image}
              to="/"
              title="The Office of Institutional Research and Assessement"
            />
          </LeftSide>
          <RightSide>
            <Copyright>© {year} The University of Alabama</Copyright>
            <StyledLink to="33.2084338,-87.5472800">{'East Annex'}</StyledLink>
            {'|'}
            <StyledLink to="205-348-7200" />
            {'|'}
            <StyledLink to="/contact/">OIRA Contact</StyledLink>
          </RightSide>
        </ContentWidth>
      </PageWidth>
    </footer>
  )
}

export default LogoFooter

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

const StyledLink = styled(Link)`
  color: black;
  padding-left: 5px;
  padding-right: 5px;
  text-decoration: none;
  &:last-child {
    padding-right: 0;
  }
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
