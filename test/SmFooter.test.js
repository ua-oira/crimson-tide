import React from 'react'
import SmFooter from '../src/SmFooter'

test('Render SmFooter', () => {
  const wrapper = shallow(<SmFooter />)
  expect(wrapper).toMatchSnapshot()
})
