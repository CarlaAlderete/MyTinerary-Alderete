import React from 'react'
import {NavLink} from 'react-router-dom'
const Header = () =>{
    return(
        <header>
            <nav>
                <NavLink exact to='/'>HOME</NavLink>
                <NavLink to='/cities'>CITIES</NavLink>
            </nav>
        </header>
    )
}
export default Header