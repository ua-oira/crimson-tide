import React from 'react'
import styled from 'styled-components'

export const Main = styled.main.attrs({
  margin: props => props.margin || '1em auto 1em auto',
  maxWidth: props => props.maxWidth || '960px',
  minHeight: props => props.minHeight || '500px',
  padding: props => props.padding || '0px 1.0875rem 1.45rem',
})`
  margin: ${props => props.margin};
  max-width: ${props => props.maxWidth};
  min-height: ${props => props.minHeight};
  padding: ${props => props.padding};
`
