import React from 'react'
import {NavLink, Link} from 'react-router-dom'
import {useState} from 'react'

const Header = () =>{
    const [sign,setSign] = useState(false)
    const login =()=>{
        setSign(!sign)    
    }
    return(
        <header>
            <nav>
                <div>
                    <NavLink exact to='/'>HOME</NavLink>
                    <NavLink to='/cities'>CITIES</NavLink>
                </div>
                <div>
                    {sign && <Link to='/signin'>SIGN IN</Link>}
                    {sign && <Link to='/signup'>SIGN UP</Link>}
                    <div className='iconUser' onClick={login} style={{backgroundImage:`url("/assets/iconuser.png")`}}></div>
                </div>
            </nav>
        </header>
    )
}
export default Header