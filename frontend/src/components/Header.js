import React from 'react'
import {NavLink, Link} from 'react-router-dom'
import {useState} from 'react'
import {connect} from 'react-redux'
import userActions from '../redux/actions/userActions'
import citiesActions from '../redux/actions/citiesActions'

const Header = (props) =>{
    const [sign,setSign] = useState(false)
    const {user, singOut,deleteCities}=props
    const loginHandler =()=>{
        setSign(!sign)    
    }
    const singOutHandler=()=>{
        singOut()
        loginHandler()
        deleteCities()//borrar de las props y de las 
    }
 
    const userNull= <div>
                        {sign && <Link to='/signin' onClick={loginHandler}>SIGN IN</Link>}
                        {sign && <Link to='/signup' onClick={loginHandler}>SIGN UP</Link>}
                        <div className='iconUser' onClick={loginHandler} style={{backgroundImage:`url("/assets/iconuser.png")`}}></div>
                    </div>
    const userSignIn=<div>
                        {sign && <p onClick={singOutHandler}>SIGN OUT</p>}
                        {!sign  && <p onClick={loginHandler}>HI! {user.name.toUpperCase()}</p>}
                        <div className='iconUser' onClick={loginHandler} style={{backgroundImage:`url("${user.photo}")`}}></div>
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
const mapDispatchToProps={
    singOut:userActions.singOut,
    deleteCities:citiesActions.deleteCities // borrar

}
export default connect(mapStateToProps, mapDispatchToProps)(Header)