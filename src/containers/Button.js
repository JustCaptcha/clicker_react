import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { woodInc } from '../store/actions'

export class Button extends Component {
  render() {
    return (
      <div>
        <button onClick={ () => this.props.woodInc(this.props.resources.wood)}>Add</button>
      </div>
    )
  }
}

function mapStateToProps (state) {
    return {
        resources: state.resources,
    }
}

function matchDispatchToProps (dispatch) {
    return bindActionCreators({woodInc: woodInc}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Button)
