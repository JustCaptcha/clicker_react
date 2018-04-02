import React, { Component } from 'react'
import Cookies from 'js-cookie'
import './index.css'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { saveCookies, deleteCookies } from '../../store/actions/cookies'

import { Button } from 'semantic-ui-react'

export class CookiePanel extends Component {
  render() {
    return (
      <div>
        <p className="CookiePanel">Cookie panel</p>
        <Button size='mini' onClick={this.props.saveCookies}>Save</Button>
        <Button size='mini' onClick={this.getCookies}>Get</Button>
        <Button size='mini' onClick={this.props.deleteCookies}>Delete</Button>
      </div>
    )
  }
  getCookies() {
    console.log('GET')
    alert('Time: ' + Cookies.get('global_time_seconds'))
  }
/*   deleteCookies() {
    console.log('DELETE')
    Cookies.remove('userState')
  } */
}

function mapStateToProps (state) {
  return {
    cookies: state.cookies
  }
}

function matchDispatchToProps (dispatch) {
  return bindActionCreators({saveCookies: saveCookies, deleteCookies: deleteCookies}, dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps)(CookiePanel)