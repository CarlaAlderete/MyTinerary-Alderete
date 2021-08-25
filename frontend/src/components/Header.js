import React from 'react'
import {NavLink, Link} from 'react-router-dom'
import {useState} from 'react'
import {connect} from 'react-redux'

const Header = (props) =>{
    const [sign,setSign] = useState(false)
    const {user}=props
    const login =()=>{
        setSign(!sign)    
    }
const userNull= <div>
                    {sign && <Link to='/signin' onClick={login}>SIGN IN</Link>}
                    {sign && <Link to='/signup' onClick={login}>SIGN UP</Link>}
                    <div className='iconUser' onClick={login} style={{backgroundImage:`url("/assets/iconuser.png")`}}></div>
                </div>
const userSignIn=<div>
                    {sign && <p onClick={login}>SIGN OUT</p>}
                    {!sign && <p>HI {user.name.toUpperCase()}</p>}
                    <div className='iconUser' onClick={login} style={{backgroundImage:`url("${user.photo}")`}}></div>
                </div>
    return(
        <header>
            <nav>
                <div>
                    <NavLink exact to='/'>HOME</NavLink>
                    <NavLink to='/cities'>CITIES</NavLink>
                </div>
                {!user.name ? userNull : userSignIn}
            </nav>
        </header>
    )
}
const mapStateToProps =(state)=>{
    return{
        user:state.user.user
    }
}
export default connect(mapStateToProps)(Header)