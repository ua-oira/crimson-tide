import React from 'react'
import Link from '../Link.js'
import styled from 'styled-components'
import Obfuscate from 'react-obfuscate'

const SmFooter = props => {
  let date = new Date()
  let year = date.getFullYear()
  return (
    <ColorWrapper>
      <ContentWidth maxWidth={this.props.maxWidth}>
        <LeftSide>
          <StyledLink href="http://ua.edu">
            © {year} The University of Alabama
          </StyledLink>
        </LeftSide>
        <RightSide>
          <StyledLink to="33.2084338,-87.5472800">{'East Annex'}</StyledLink>
          {'|'}
          <StyledLink to="205-348-7200" />
          {'|'}
          <StyledLink to="/contact/">{'OIRA Contact'}</StyledLink>
        </RightSide>
      </ContentWidth>
    </ColorWrapper>
  )
}

export default SmFooter

const ColorWrapper = styled.div`
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
const ContentWidth = styled.footer`
  font-size: 0.88em;
  line-height: 0.88em;
  display: flex;
  color: black;
  flex-flow: row wrap;
  margin: 0 auto;
  width: 100%;
  padding: 20px 1.0875rem;
  max-width: ${props => props.maxWidth || '960px'};
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    flex-flow: column;
  }
`

const LeftSide = styled.div`
  float: left;
`
const RightSide = styled.div`
  text-align: right;
  color: hsla(0, 0%, 0%, 0.2);
  float: Right;
  @media (max-width: 768px) {
    text-align: center;
  }
`
const Copyright = styled.p`
  border-bottom: none;
  line-height: 19px;
  margin-bottom: 6px;
  justify: right;
`
const Contact = styled.p`
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
