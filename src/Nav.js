import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { array, string } from 'prop-types'

const Nav = props => (
  <FullWidthHeader>
    <Content>
      <Left>
        <Logo img={props.image} to="/" title="Home" />
      </Left>
      <Right>
        {props.links.map((link, i) => (
          <StyledLink key={i} to={link.path}>
            {link.title}
          </StyledLink>
        ))}
      </Right>
    </Content>
  </FullWidthHeader>
)

Nav.propTypes = {
  links: array,
  img: string,
}

export default Nav

const FullWidthHeader = styled.header`
  background: #900;
  color: black;
`
const Logo = styled(Link)`
  display: inline-block;
  margin: 1em 0;
  width: 200px;
  height: 70px;
  border-bottom: none;
  background: url(${props => props.img});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  text-indent: -9999px;
  z-index: 3;
  @media print {
    * {
      -webkit-print-color-adjust: exact;
    }
  }
`
const Content = styled.div`
  font-size: 0.88em;
  line-height: 0.88em;
  display: flex;
  color: black;
  flex-flow: row wrap;
  margin: 0 auto;
  width: 100%;
  padding: 0px 1.0875rem;
  max-width: 960px;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    flex-flow: column;
  }
  @media print {
    flex-flow: row;
  }
`
const Left = styled.div`
  float: left;
  @media print {
    -webkit-print-color-adjust: exact;
  }
`
const Right = styled.div`
  text-align: right;
  float: Right;
  @media (max-width: 768px) {
    text-align: center;
  }
  @media print {
    display: none;
  }
`
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
