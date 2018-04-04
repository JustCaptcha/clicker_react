import React, { Component } from 'react'
import { connect } from 'react-redux'

export class StatsRes extends Component {
  render() {
    return (
      <div>
        <div>credits: {(this.props.resources.credits).toFixed(7)}</div>
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
