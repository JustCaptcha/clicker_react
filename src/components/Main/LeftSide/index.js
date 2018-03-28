import React, { Component } from 'react'
import './index.css'
import Stats from './Stats'

export class LeftSide extends Component {
  render() {
    return (
      <div className='LeftSide'>
        <Stats />
      </div>
    )
  }
}

export default LeftSide
