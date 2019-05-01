import React from 'react'
import styled from 'styled-components'
import Headroom from 'react-headroom'

import LogoImage from '../logos/oira-logo.svg'
import Link from '../Link'

class LightNav extends React.Component {
  render() {
    return (
      <nav>
        <Headroom>
          <PageWidth>
            <ContentWidth maxWidth={this.props.maxWidth}>
              <Left>
                <Logo image={this.props.image} to="/" title="Home" />
              </Left>
              <Right>{this.props.children}</Right>
            </ContentWidth>
          </PageWidth>
        </Headroom>
      </nav>
    )
  }
}

export default LightNav

const PageWidth = styled.header`
  border-bottom: 1px solid hsla(0, 0%, 0%, 0.2);
  background: HSLA(0, 0%, 100%, 0.96);
  color: black;
`
const Logo = styled(Link)`
  display: inline-block;
  width: 328px;
  height: 80px;
  border-bottom: none;
  background-color: blue;
  background: url(${props => props.image || LogoImage});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  text-indent: -9999px;
  z-index: 3;
  @media print {
    * {
      -webkit-print-color-adjust: exact;
      color-adjust: exact !important;
    }
  }
`
const ContentWidth = styled.div`
  font-size: 0.88em;
  line-height: 0.88em;
  display: flex;
  color: black;
  flex-flow: row wrap;
  margin: 0 auto;
  width: 100%;
  padding: 0 1.0875rem;
  max-width: ${props => props.maxWidth || '960px'};
  justify-content: space-between;
  align-items: center;
  @media (max-width: 810px) {
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
    color-adjust: exact !important;
  }
`
const Right = styled.div`
  text-align: right;
  color: hsla(0, 0%, 0%, 0.2);
  cursor: default;
  float: Right;
  // padding-bottom: 1em;
  @media (max-width: 810px) {
    text-align: center;
    margin-bottom: 1em;
  }
  @media print {
    display: none;
  }
`

const Contact = styled.p`
  font-size: 12px;
  line-height: 12px;
  font-family: 'Space Mono', monospace;
`
