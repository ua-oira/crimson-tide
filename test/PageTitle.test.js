import React from 'react'
import PageTitle from '../src/PageTitle'
import Helmet from 'react-helmet'

describe('PageTitle', () => {
  
  // test('renders the document title via Helmet', () => {
  //   const wrapper = shallow(
  //     <PageTitle name="Amazing Page" />
  //   );
  //   console.log(wrapper.find(Helmet))
  //   expect(wrapper.find(Helmet).length).toBe(1);
  //   expect(wrapper.find(Helmet).prop('title')).toEqual('Amazing Page')
  // });

  // test('renders the document title via Helmet', () => {
  //   const wrapper = shallow(
  //     <PageTitle name="Amazing Page" />
  //   );
  //   console.log(wrapper.find(Helmet))
  //   expect(wrapper.find(Helmet).length).toBe(1);
  //   expect(wrapper.find(Helmet).prop('title')).toEqual('Amazing Page')
  // });

  test('Render PageTitle with all props', () => {
    const wrapper = shallow(
      <PageTitle 
        name="Contact"
        description="foo"
        keywords="bar"
        image="baz"
        site="OIRA"
  /> 
    )
    expect(wrapper).toMatchSnapshot()
  })

  test('Render PageTitle with noHeader and no site prop', () => {
    const wrapper = shallow(
      <PageTitle 
        name="Contact"
        description="foo"
        keywords="bar"
        image="baz"
  /> 
    )
    expect(wrapper).toMatchSnapshot()
  })

})



