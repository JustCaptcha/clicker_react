import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { woodInc } from '../store/actions'

export class Button extends Component {
  render() {
    let message = null
    if (this.props.resources.buildings.tower.show) {
      message = <button>{this.props.resources.buildings.tower.title}</button>
    }
    return (
      <div>
        <button onClick={ () => this.props.woodInc(this.props.resources.wood)}>Add</button>
        {message}
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
