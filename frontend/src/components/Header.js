import React from 'react'
import {NavLink} from 'react-router-dom'
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
                    {sign && <p>LOG IN</p>}
                    {sign && <p>SIGN UP</p>}
                    <svg onClick={login} xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                        <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                    </svg>
                </div>
            </nav>
        </header>
    )
}
export default Header