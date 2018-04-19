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
      <ColorWrapper>
        <Header>
          <Logo to="/" onClick={closeMenu} />
          <Toggle onClick={this.toggle} active={menu} />
          <Navigation role="navigation" style={{ top: menu ? 0 : '-100vh' }}>
            {/* <NavigationLink to="/conference/" onClick={closeMenu}>
              Conference
            </NavigationLink> */}
            <NavigationLink to="/resources" onClick={closeMenu}>
              Resources
            </NavigationLink>
            <NavigationLink to="/forms" onClick={closeMenu}>
              Forms/Links
            </NavigationLink>
            <NavigationLink to="/jobs" onClick={closeMenu}>
              Jobs
            </NavigationLink>
            <NavigationLink to="/leadership" onClick={closeMenu}>
              Leadership
            </NavigationLink>
          </Navigation>
        </Header>
      </ColorWrapper>
    )
  }
}

// NICELY PACKAGED

const ColorWrapper = styled.nav`
  background: linear-gradient(225deg, #07588a, #39cccc);
`
const Header = styled.div`
  display: flex;
  padding: 5px 32px;
  max-width: 1000px;
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
    background: linear-gradient(-225deg, #07588a, #39cccc);
    width: 100%;
    height: 100vh;
    overflow-y: hidden;
    transition: all 0.3s ease;
    display: flex;
    z-index: 1000;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }
`

// HAS DEPENDENCIES
const Logo = styled(Link)`
  display: inline-block;
  width: 228px;
  height: 80px;
  background: url(${LogoImage});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  text-indent: -9999px;
  z-index: 3;
  @media (max-width: 800px) {
    width: 152px;
    height: 60px;
  }
`

const Arrow = styled.div`
  display: none;
  width: 25px;
  height: 25px;
  z-index: 3000;
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

const StyledLink = styled(Link)`
  color: #dd1d64;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`
const NavigationLink = styled(StyledLink)`
  padding-bottom: 5px;
  color: white !important;
  margin-right: 40px;
  text-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  text-decoration: none;
  border-bottom: solid 4px rgba(255, 255, 255, 0);
  transition: all 175ms cubic-bezier(0.65, 0.05, 0.36, 1);
  &:hover,
  &:focus,
  &:active {
    text-decoration: none;
    padding-bottom: 4px;
    border-bottom: 4px solid white;
    cursor: pointer;
    &:after {
      width: 100%;
    }
  }
  &:last-child {
    margin-right: 0px;
  }
  @media (max-width: 800px) {
    margin-right: 0px;
    margin-bottom: 1em;
    font-size: 10vw;
    line-height: 30px;
  }
`
