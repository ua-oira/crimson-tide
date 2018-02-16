import React from 'react'
import Main from '../src/Main'

test('Render Main', () => {
  const wrapper = shallow(<Main>Hello Jest!</Main>)
  expect(wrapper).toMatchSnapshot()
})
