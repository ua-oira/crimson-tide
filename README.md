# crimson-tide

[![Coverage Status](https://coveralls.io/repos/github/ua-oira/crimson-tide/badge.svg?branch=master)](https://coveralls.io/github/ua-oira/crimson-tide?branch=master)
[![Build Status](https://travis-ci.org/ua-oira/crimson-tide.svg)](https://travis-ci.org/ua-oira/crimson-tide)
[![npm package version](https://badge.fury.io/js/crimson-tide.svg)](https://www.npmjs.com/package/crimson-tide)
[![npm downloads](https://img.shields.io/npm/dm/crimson-tide.svg)](https://www.npmjs.com/package/crimson-tide)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://prettier.io)

Reusable React components for The University of Alabama 🐘

Mostly abandoned.

## Docs
View storybook at [crimson-tide.netlify.com](http://crimson-tide.netlify.com)

## install
~~~bash
npm i crimson-tide
~~~

## Usage
~~~jsx
import { Nav, Main, SmFooter, ChimeIn, OiraStyles } from 'crimson-tide'

const NavLinks = [
  { title: 'Planning Group', path: '/planning-group' },
  { title: 'Steering Committee', path: '/steering-committee' },
  { title: 'FAQ', path: '/faq' },
  { title: 'Resources', path: '/resources' },
]

const TemplateWrapper = ({ children }) => (
  <div className="react-root">
    <Nav image={ChimeIn} links={NavLinks} />
    <Main>{children()}</Main>
    <SmFooter />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

~~~