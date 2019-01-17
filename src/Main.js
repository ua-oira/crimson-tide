import React from 'react'
import styled from 'styled-components'

const Main = props => (
  <main>
    <div
      style={{
        margin: '1em auto',
        maxWidth: props.maxWidth || 960,
        minHeight: 500,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {props.children}
    </div>
  </main>
)
export default Main
