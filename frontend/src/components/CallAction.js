import {Link} from 'react-router-dom'

const CallAction = () =>{
    return (
        <div className='callAction'>
            <h3>Where do you fit in?</h3>
            <div className='callActionP'>
                <p>Join now, share your favorite places and help keep cities up-to-date for everyone.</p>
            </div>
            <Link to='/cities'><button data-aos="zoom-in">Click here</button></Link>
        </div>
    )
    
}

export default CallAction
