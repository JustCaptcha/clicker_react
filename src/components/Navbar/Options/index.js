import React, { Component } from 'react'
import Cookies from 'js-cookie'
import './index.css'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { saveCookies, deleteCookies } from '../../../store/actions/cookies'

export class Options extends Component {
  render() {
    return (
      <div>
        <p className="Cookie_panel">Cookie panel</p>
        <button onClick={this.props.saveCookies}>Save</button>
        <button onClick={this.getCookies}>Get</button>
        <button onClick={this.props.deleteCookies}>Delete</button>
      </div>
    )
  }
  getCookies() {
    console.log('GET')
    alert(Cookies.get('userState'))
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
export default connect(mapStateToProps, matchDispatchToProps)(Options)