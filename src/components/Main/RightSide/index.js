import React, { Component } from 'react'
import './index.css'
import Time from '../../../containers/Time'

export class RightSide extends Component {
  render() {
    return (
      <div className='RightSide'>
        <Time />
      </div>
    )
  }
}

export default RightSide
