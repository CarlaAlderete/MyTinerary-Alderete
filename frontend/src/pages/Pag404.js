import {Component} from 'react'
import {Link} from 'react-router-dom'

export default class Pag404 extends Component{
    render(){
        return(
            <div className='error404'>
                <img src="/assets/error.png" alt='error'/>
                <h2>We are sorry</h2>
                <p>We don´t find the web you are looking for.</p>
                <Link to='/'><button>MyTinerary</button></Link>
            </div>
        )
    }
}
