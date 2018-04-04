import React, { Component } from 'react'
import './Navbar.css'
import { Header } from 'semantic-ui-react'
import CookiePanel from '../../containers/CookiePanel/'

class Navbar extends Component {

    render() {
        return(
            <div className='Navbar'>
            <Header as='h4'>Clicker-react</Header>
            <CookiePanel />
            <Version />
            </div>
        )
    }
}

function Version() {
    return(
        <div className='Version'>Ver - 0.0.1</div>
    )
}

export default Navbar