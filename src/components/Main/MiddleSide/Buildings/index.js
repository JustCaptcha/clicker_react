import React, { Component } from 'react'
import './index.css'
import {Button} from 'semantic-ui-react'
import store from '../../../../store'

export default class Buildings extends Component {
  render() {
    return (
      Object.keys(this.props.list).map(key => 
        <div className='Buildings__item' key={key}>
          <Button onClick={() => this.act(key)}>
          {this.props.list[key].title}</Button>
        </div>
      )
    )
  }

  act(key) {
    store.dispatch({
        type: 'BUILDINGS_ACTION',
        payload: {
            key,
            time: Date.now()
        }
    })
  }
}
