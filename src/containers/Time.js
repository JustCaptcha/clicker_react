import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { timeInc } from '../store/actions/global'

export class Time extends Component {
  componentDidMount() {
    this.interval = setInterval(() => this.props.timeInc(), 1000)
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return (
      <div>
        <p>Time: {this.props.global.time_seconds} seconds</p>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    global: state.global
  }
}

function matchDispatchToProps (dispatch) {
  return bindActionCreators({timeInc: timeInc}, dispatch)
}

/* const mapDispatchToProps = (dispatch) => ({
  timeInc: timeInc => dispatch(timeInc)
}) */

export default connect(mapStateToProps, matchDispatchToProps)(Time)
