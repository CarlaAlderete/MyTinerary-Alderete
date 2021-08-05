import React from 'react'
import {NavLink} from 'react-router-dom'
const Header = () =>{
    return(
        <header>
            <NavLink exact to='/'>HOME</NavLink>
            <NavLink to='/cities'>CITIES</NavLink>
        </header>
    )
}
export default Header