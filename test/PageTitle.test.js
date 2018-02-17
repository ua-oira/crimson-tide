import React from 'react'
import PageTitle from '../src/PageTitle'
import Helmet from 'react-helmet'

describe('PageTitle', () => {
  
  test('renders the document title via Helmet', () => {
    const wrapper = shallow(
      <PageTitle name="Amazing Page" />
    );
    console.log(wrapper.find(Helmet))
    expect(wrapper.find(Helmet).length).toBe(1);
    expect(wrapper.find(Helmet).prop('title')).toEqual('Amazing Page')
  });

  test('renders the document title via Helmet', () => {
    const wrapper = shallow(
      <PageTitle name="Amazing Page" />
    );
    console.log(wrapper.find(Helmet))
    expect(wrapper.find(Helmet).length).toBe(1);
    expect(wrapper.find(Helmet).prop('title')).toEqual('Amazing Page')
  });

})



