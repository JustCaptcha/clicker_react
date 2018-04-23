import {connect} from 'react-redux';
import React, { Component } from 'react'
import './index.css'
import Actions from '../../components/Main/MiddleSide/Actions/index'
import Buildings from '../../components/Main/MiddleSide/Buildings/index'
import { Card, Tab } from 'semantic-ui-react'

class MiddleSide extends Component {
    panes = [
        { menuItem: 'Actions', render: () =>
            <Tab.Pane attached={false}>
                <Actions list={this.props.actions} />
            </Tab.Pane> },
        { menuItem: 'Buildings', render: () => 
            <Tab.Pane attached={false}>
                <Buildings list = {this.props.buildings} />
            </Tab.Pane> },
        { menuItem: 'Stats', render: () => 
            <Tab.Pane attached={false}>
                Tab 3 Content
            </Tab.Pane> },

    ];

    render() {
        return (
            <Card id='MiddleSide'>
                {/* <MiddleNavbar /> */}
                <Tab menu={{secondary: true, pointing: true}} panes={this.panes}></Tab>
            </Card>
        )
    }
}

function mapStateToProps(state) {
    return {
        actions: state.actions,
        buildings: state.buildings
    };
}

export default connect(mapStateToProps)(MiddleSide);