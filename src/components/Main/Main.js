import React, { Component } from 'react'
import './Main.css'
import LeftSide from './LeftSide'
import MiddleSide from './MiddleSide'
import RightSide from './RightSide'

class Main extends Component {
    render() {
        return(
            <div className='Main'>
                <LeftSide />
                <MiddleSide />
                <RightSide />
            </div>
        )
    }
}

export default Main