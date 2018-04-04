import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { CreditsInc } from '../store/actions'

import { Button } from 'semantic-ui-react'
export class ButtonMy extends Component {
  constructor(props) {
    super(props)
    let credits = this.props.resources.credits
  }
  render() {
    return (
      <div>
        <Button onClick={ () => this.props.CreditsInc(this.credits)}>Add</Button>
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
    return bindActionCreators({CreditsInc: CreditsInc}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(ButtonMy)
