import React, { Component } from 'react'
import Actions from './Actions/'
import Research from './Research'
import { Button, Card, Tab } from 'semantic-ui-react'
import './index.css'
// import { Button } from '../../../containers/Button';

export class MiddleSide extends Component {
  render() {
    return (
      <Card id='MiddleSide'>
        {/* <MiddleNavbar /> */}
        <Tab menu={{secondary: true, pointing: true}} panes={panes}></Tab>
      </Card>
    )
  }
}
let panes = [
  { menuItem: 'Actions', render: () => 
  <Tab.Pane attached={false}>
  <Actions />
  </Tab.Pane> },
  { menuItem: 'Buildings', render: () => <Tab.Pane attached={false}>
  Tab 2 Content
  </Tab.Pane> },
  { menuItem: 'Stats', render: () => <Tab.Pane attached={false}>
  Tab 3 Content
  </Tab.Pane> },
  
]


export default MiddleSide
