import React from 'react'
import {Link} from 'react-router-dom'

export default class Pag404 extends React.Component{
    render(){
        return(
            <div className='error'style={{backgroundImage:`url("/assets/error.png")`}}>
                <Link to='/'><button>MyTinerary</button></Link>
            </div>
        )
    }
}
