import React, { Component } from 'react'
import './Navbar.css'
import Options from '../../containers/Options/'

class Navbar extends Component {

    render() {
        return(
            <div className='Navbar'>
            <Options />
            </div>
        )
    }
}

export default Navbar