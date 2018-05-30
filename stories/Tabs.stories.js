import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withInfo } from '@storybook/addon-info'

import { Tabs, Tab } from '../src/index'



storiesOf('Tabs', module).add(
  'Default',
  withInfo(`
      Tabs render conditional content
      ~~~js
      <Tabs>
        <Tab
          title="Tab One"
          render={() => (
            <div>
              <h2>First Tab</h2>
              <p>Wow</p>
            </div>
          )}
        />

        <Tab
          title="Tab Two"
          render={() => (
            <div>
              <h2>Second Tab</h2>
              <p>Neat</p>
            </div>
          )}
        />
      </Tabs>
      ~~~
    
    `)(() => (
      <Tabs>
        <Tab
          title="Tab One"
          render={() => (
            <div>
              <h2>First Tab</h2>
              <p>Wow</p>
            </div>
          )}
        />

        <Tab
          title="Tab Two"
          render={() => (
            <div>
              <h2>Second Tab</h2>
              <p>Neat</p>
            </div>
          )}
        />
      </Tabs>
    ))
).add(
  'Controlled',
  withInfo(`
      Tabs may be controlled by passing props activeTab, onUpdate 
      ~~~js
      class MyTabController extends React.Component {
        state = { active: 'Gamma' }
        
        setTab = newTab => this.setState({ active: newTab })    
        
        render () {
          const { active } = this.state

          return (
            <Tabs
              activeTab={active}
              onUpdate={this.setTab}
            >
              <Tab
                title="Alpha"
                render={() => (
                  <div>
                    <h2>Alpha Quadrant</h2>
                    <p>Foo</p>
                  </div>
                )}
              />

              <Tab
                title="Gamma"
                render={() => (
                  <div>
                    <h2>Gamma Quadrant</h2>
                    <p>Bar</p>
                  </div>
                )}
              />
            </Tabs>
          )
        }
      }
      ~~~
    
    `)(() => {
      class MyTabController extends React.Component {
        state = { active: 'Gamma' }
        
        setTab = newTab => this.setState({ active: newTab })    
        
        render () {
          const { active } = this.state

          return (
            <Tabs
              activeTab={active}
              onUpdate={this.setTab}
            >
              <Tab
                title="Alpha"
                render={() => (
                  <div>
                    <h2>Alpha Quadrant</h2>
                    <p>Foo</p>
                  </div>
                )}
              />

              <Tab
                title="Gamma"
                render={() => (
                  <div>
                    <h2>Gamma Quadrant</h2>
                    <p>Bar</p>
                  </div>
                )}
              />
            </Tabs>
          )
        }
      }

      return <MyTabController />
    })
)
