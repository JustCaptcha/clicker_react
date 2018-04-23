import React, { Component } from 'react'
import './index.css'
import { Button } from 'semantic-ui-react'
import store from '../../../../store'

export class Actions extends Component {
  render() {
    return (
      Object.keys(this.props.list).map(key =>
          <div className='Actions__item' key={key}>
              <Button onClick={() => this.act(key)}>
                  {this.props.list[key].title}</Button>
              <div className='Actions__progress' style={{width: this.props.list[key].completeValue * 50 + '%'}}></div>
          </div>
      )
    )
  }

  act(key) {
      store.dispatch({
          type: 'ACTIVATE_ACTION',
          payload: {
              key,
              time: Date.now()
          }
      })
  }
}

export default Actions
