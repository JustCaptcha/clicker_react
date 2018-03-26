import React, { Component } from 'react'
import Cookies from 'js-cookie'
import './index.css'
// import { Button } from '../../../containers/Button';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { saveCookies } from '../../../store/actions/cookies'

/* export class Options extends Component {
  render() {
    return (
      <div>
        <button onClick={this.saveCookies}>Options</button>
        <button onClick={this.getCookies}>Get</button>
        <button onClick={this.deleteCookies}>Delete</button>
      </div>
    )
  }
  saveCookies() {
    console.log('SAVE')
    Cookies.set('Alberto', 'Cool!');
  }
  getCookies() {
    console.log('GET')
    alert(Cookies.get('Alberto'))
  }
  deleteCookies() {
    console.log('DELETE')
    Cookies.remove('Alberto')
  }
}

export default Options */

export class Options extends Component {
  render() {
    return (
      <div>
        <p className="Cookie_panel">Cookie panel</p>
        <button onClick={this.props.saveCookies}>Save</button>
        <button onClick={this.getCookies}>Get</button>
        <button onClick={this.deleteCookies}>Delete</button>
      </div>
    )
  }
/*   saveCookies() {
    console.log('SAVE')
    Cookies.set('Alberto', 'Cool!');
  } */
  getCookies() {
    console.log('GET')
    alert(Cookies.get('userState'))
  }
  deleteCookies() {
    console.log('DELETE')
    Cookies.remove('userState')
  }
}

function mapStateToProps (state) {
  return {
    cookies: state.cookies
  }
}

function matchDispatchToProps (dispatch) {
  return bindActionCreators({saveCookies: saveCookies}, dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps)(Options)