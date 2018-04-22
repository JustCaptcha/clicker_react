import React, { Component } from 'react'
import './index.css'
import { Button } from 'semantic-ui-react'
import store from '../../../../store'

export class Actions extends Component {
  render() {
    return (
      Object.keys(this.props.list).map(key =>
          <div className="Actions__item" key={key}>
              <Button onClick={() => this.act(this.props.list[key].action)}>
                  {this.props.list[key].title}</Button>
          </div>
      )
    )
  }

  act(action) {
      store.dispatch(action)
  }
}

export default Actions
