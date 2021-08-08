import {Link} from 'react-router-dom'

const Pag404 = () =>{
    return(
        <div className='error'style={{backgroundImage:`url("/assets/error.png")`}}>
            <Link to='/'><button>MyTinerary</button></Link>
        </div>
    )
}

export default Pag404