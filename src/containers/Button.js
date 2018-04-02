import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { woodInc } from '../store/actions'

import { Button } from 'semantic-ui-react'
export class ButtonMy extends Component {
  render() {
    return (
      <div>
        <Button onClick={ () => this.props.woodInc(this.props.resources.wood)}>Add</Button>
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

export default connect(mapStateToProps, matchDispatchToProps)(ButtonMy)
