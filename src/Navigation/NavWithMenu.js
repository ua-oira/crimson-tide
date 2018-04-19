import React from 'react'
import styled from 'styled-components'
import Headroom from 'react-headroom'
import Link from '../Link.js'
import LogoImage from '../logos/alair-logo.svg'
import MenuIcon from './menu-arrow.svg'

export default class NavWithMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menu: false,
    }
  }

  toggle = () => {
    this.setState(prevState => ({
      menu: !prevState.menu,
    }))
  }

  close = item => () => {
    this.setState({
      menu: false,
    })
  }

  render() {
    const { menu } = this.state
    const closeMenu = this.close('menu')

    return (
      <ColorWrapper background={this.props.background}>
        <Header>
          <Logo img={this.props.image} to="/" onClick={closeMenu} />
          <Toggle onClick={this.toggle} active={menu} />
          <Navigation
            role="navigation"
            style={{ top: menu ? 0 : '-100vh' }}
            background={this.props.background}
          >
            <NavigationLink
              hoveredTextColor={this.props.background}
              to="/resources"
              onClick={closeMenu}
            >
              Resources
            </NavigationLink>
          </Navigation>
        </Header>
      </ColorWrapper>
    )
  }
}

// NICELY PACKAGED

const ColorWrapper = styled.nav`
  background: ${props => props.background};
`
const Header = styled.div`
  display: flex;
  padding: 0px 1.0875rem;
  max-width: 960px;
  justify-content: space-between;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  z-index: 2000;
`
const Navigation = styled.div`
  @media (max-width: 800px) {
    position: absolute;
    top: -100vh;
    left: 0;
    background: ${props => props.background};
    width: 100%;
    height: 100vh;
    overflow-y: hidden;
    transition: all 0.3s ease;
    display: flex;
    z-index: 4000;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }
`

// HAS DEPENDENCIES
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
  z-index: 3000;
  @media print {
    * {
      -webkit-print-color-adjust: exact;
    }
  }
`

const Arrow = styled.div`
  display: none;
  width: 25px;
  height: 25px;
  z-index: 5000;
  background: url(${MenuIcon});
  background-repeat: no-repeat;
  @media (max-width: 800px) {
    display: inline;
  }
`

const Toggle = ({ onClick, active }) => (
  <Arrow
    onClick={onClick}
    style={{ transform: active ? 'rotate(45deg)' : 'rotate(0deg)' }}
  />
)

const NavigationLink = styled(Link)`
  color: white !important;
  font-size: 16px;
  font-weight: 500;
  padding: 100% 14px;
  text-decoration: none;
  &:hover {
    color: #2196f3 !important;
    background: #fff;
    transition: all 0.2s ease-in-out;
  }
  &:active,
  visited {
    font-weight: bold;
    text-decoration: none !important;
    color: #fff !important;
  }
  @media (max-width: 800px) {
    margin-right: 0px;
    margin-bottom: 1em;
    font-size: 10vw;
    line-height: 30px;
    &:hover {
      color: ${props => props.hoveredTextColor} !important;
      background: none;
      transition: all 0.2s ease-in-out;
      text-decoration: none;
    }
  }
`
