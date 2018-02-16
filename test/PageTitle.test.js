import React from 'react'
import PageTitle from '../src/PageTitle'
import Helmet from 'react-helmet'

test('render a document title', () => {
  const wrapper = shallow(
    <PageTitle name="Wow" />
  );
  console.log(wrapper.find(Helmet))
  // expect(wrapper.find(Helmet)).to.have.length(1);
  expect(wrapper.find(Helmet).prop('title')).toEqual('Wow')
});

