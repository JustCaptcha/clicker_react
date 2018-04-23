import React, {Component} from 'react'
import {connect} from 'react-redux'

export class StatsRes extends Component {
    render() {
        return (
            <div>
                <div>credits: {(this.props.resources.credits).toFixed(7)}</div>
                <div>electricity: {(this.props.resources.electricity)}</div>
                <div>raw metal: {(this.props.resources.rawMetal)}</div>
                <div>raw copper: {(this.props.resources.rawCopper)}</div>
                <div>raw gold: {(this.props.resources.rawGold)}</div>
                <div>metal: {(this.props.resources.metal)}</div>
                <div>copper: {(this.props.resources.copper)}</div>
                <div>gold: {(this.props.resources.gold)}</div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        resources: state.resources,
        test: state.test,
    }
}

export default connect(mapStateToProps)(StatsRes)
