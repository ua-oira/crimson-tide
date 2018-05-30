import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import withState from 'recompose/withState'

const Tab = ({ render }) => render()

const Tabs = withState('tab', 'updateTab')(
  ({ children, tab, activeTab, updateTab, onUpdate }) => {
    // if activeTab passed, use that instead of state
    const activeChild = activeTab
      ? children.filter(c => c.props.title == activeTab)[0]
        : tab
          ? children.filter(c => c.props.title == tab)[0]
          : children[0]

    return (
      <Styles>
        <ul className="nav nav-tabs">
          {children.map((childTab, j) => (
            <li
              key={j}
              className={childTab === activeChild ? 'active' : 'inactive'}
            >
              <a
                role="button"
                onClick={() =>
                  (onUpdate ? onUpdate(childTab.props.title) : null) ||
                  updateTab(childTab.props.title)
                }
              >
                {childTab.props.title}
              </a>
            </li>
          ))}
        </ul>
        {activeChild}
      </Styles>
    )
  }
)

export { Tabs, Tab }

const Styles = styled.div`
  .input-block-level {
    display: block;
    width: 100%;
    min-height: 30px;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .nav {
    margin-left: 0;
    margin-bottom: 20px;
    list-style: none;
  }
  .nav > li > a {
    display: block;
  }
  .nav > li > a:hover,
  .nav > li > a:focus {
    text-decoration: none;
    background-color: #eeeeee;
  }
  .nav > li > a > img {
    max-width: none;
  }

  .nav-tabs,
  .nav-pills {
    *zoom: 1;
  }
  .nav-tabs:before,
  .nav-tabs:after {
    display: table;
    content: '';
    line-height: 0;
  }
  .nav-tabs:after {
    clear: both;
  }
  .nav-tabs > li {
    float: left;
  }
  .nav-tabs > li > a {
    padding-right: 12px;
    padding-left: 12px;
    margin-right: 2px;
    line-height: 14px;
  }
  .nav-tabs {
    border-bottom: 1px solid #ddd;
    cursor: pointer;
  }
  .nav-tabs > li {
    margin-bottom: -1px;
  }
  .nav-tabs > li > a {
    padding-top: 8px;
    padding-bottom: 8px;
    line-height: 20px;
    border: 1px solid transparent;
    border-radius: 4px 4px 0 0;
  }
  .nav-tabs > li > a:hover,
  .nav-tabs > li > a:focus {
    border-color: #eeeeee #eeeeee #dddddd;
  }
  .nav-tabs > .active > a,
  .nav-tabs > .active > a:hover,
  .nav-tabs > .active > a:focus {
    color: #555555;
    background-color: #ffffff;
    border: 1px solid #ddd;
    border-bottom-color: transparent;
    cursor: default;
  }

  .nav-tabs.nav-stacked {
    border-bottom: 0;
  }
  .nav-tabs.nav-stacked > li > a {
    border: 1px solid #ddd;
    border-radius: 0;
  }
  .nav-tabs.nav-stacked > li:first-child > a {
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
  }
  .nav-tabs.nav-stacked > li:last-child > a {
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  .nav-tabs.nav-stacked > li > a:hover,
  .nav-tabs.nav-stacked > li > a:focus {
    border-color: #ddd;
    z-index: 2;
  }

  .nav-tabs .dropdown-menu {
    border-radius: 0 0 6px 6px;
  }

  .nav-tabs .open .dropdown-toggle,
  .nav-pills .open .dropdown-toggle,
  .nav > li.dropdown.open.active > a:hover,
  .nav > li.dropdown.open.active > a:focus {
    color: #ffffff;
    background-color: #999999;
    border-color: #999999;
  }
  .nav li.dropdown.open .caret,
  .nav li.dropdown.open.active .caret,
  .nav li.dropdown.open a:hover .caret,
  .nav li.dropdown.open a:focus .caret {
    border-top-color: #ffffff;
    border-bottom-color: #ffffff;
    opacity: 1;
    filter: alpha(opacity=100);
  }
  .tabs-stacked .open > a:hover,
  .tabs-stacked .open > a:focus {
    border-color: #999999;
  }
  .tabbable {
    *zoom: 1;
  }
  .tabbable:before,
  .tabbable:after {
    display: table;
    content: '';
    line-height: 0;
  }
  .tabbable:after {
    clear: both;
  }
  .tab-content {
    overflow: auto;
  }
  .tabs-below > .nav-tabs,
  .tabs-right > .nav-tabs,
  .tabs-left > .nav-tabs {
    border-bottom: 0;
  }
  .tab-content > .tab-pane,
  .pill-content > .pill-pane {
    display: none;
  }
  .tab-content > .active,
  .pill-content > .active {
    display: block;
  }
  .tabs-below > .nav-tabs {
    border-top: 1px solid #ddd;
  }
  .tabs-below > .nav-tabs > li {
    margin-top: -1px;
    margin-bottom: 0;
  }
  .tabs-below > .nav-tabs > li > a {
    border-radius: 0 0 4px 4px;
  }
  .tabs-below > .nav-tabs > li > a:hover,
  .tabs-below > .nav-tabs > li > a:focus {
    border-bottom-color: transparent;
    border-top-color: #ddd;
  }
  .tabs-below > .nav-tabs > .active > a,
  .tabs-below > .nav-tabs > .active > a:hover,
  .tabs-below > .nav-tabs > .active > a:focus {
    border-color: transparent #ddd #ddd #ddd;
  }
  .tabs-left > .nav-tabs > li,
  .tabs-right > .nav-tabs > li {
    float: none;
  }
  .tabs-left > .nav-tabs > li > a,
  .tabs-right > .nav-tabs > li > a {
    min-width: 74px;
    margin-right: 0;
    margin-bottom: 3px;
  }
  .tabs-left > .nav-tabs {
    float: left;
    margin-right: 19px;
    border-right: 1px solid #ddd;
  }
  .tabs-left > .nav-tabs > li > a {
    margin-right: -1px;
    border-radius: 4px 0 0 4px;
  }
  .tabs-left > .nav-tabs > li > a:hover,
  .tabs-left > .nav-tabs > li > a:focus {
    border-color: #eeeeee #dddddd #eeeeee #eeeeee;
  }
  .tabs-left > .nav-tabs .active > a,
  .tabs-left > .nav-tabs .active > a:hover,
  .tabs-left > .nav-tabs .active > a:focus {
    border-color: #ddd transparent #ddd #ddd;
    *border-right-color: #ffffff;
  }
  .tabs-right > .nav-tabs {
    float: right;
    margin-left: 19px;
    border-left: 1px solid #ddd;
  }
  .tabs-right > .nav-tabs > li > a {
    margin-left: -1px;
    border-radius: 0 4px 4px 0;
  }
  .tabs-right > .nav-tabs > li > a:hover,
  .tabs-right > .nav-tabs > li > a:focus {
    border-color: #eeeeee #eeeeee #eeeeee #dddddd;
  }
  .tabs-right > .nav-tabs .active > a,
  .tabs-right > .nav-tabs .active > a:hover,
  .tabs-right > .nav-tabs .active > a:focus {
    border-color: #ddd #ddd #ddd transparent;
    *border-left-color: #ffffff;
  }
  .nav > .disabled > a {
    color: #999999;
  }
  .nav > .disabled > a:hover,
  .nav > .disabled > a:focus {
    text-decoration: none;
    background-color: transparent;
    cursor: default;
  }
`
