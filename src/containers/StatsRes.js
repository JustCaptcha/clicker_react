import React, { Component } from 'react'
import { connect } from 'react-redux'

export class StatsRes extends Component {
  
  render() {
    return (
      <div>
        <div>wood: {this.props.resources.wood}</div>
      </div>
    )
  }
}

function mapStateToProps (state) {
    return {
        resources: state.resources,
        test: state.test,
    }
}

export default connect(mapStateToProps)(StatsRes)
