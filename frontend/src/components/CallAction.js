import {Link} from 'react-router-dom'

const CallAction = () =>{
    return (
        <div className='callActionTotal'>
            <img src='/assets/download.gif' alt='gif'/>
            <div className='callAction'>
                <h3>Where do you fit in?</h3>
                <p>Join now, share your favorite places and help keep cities up-to-date for everyone.</p>
                <Link to='/cities'><button data-aos="zoom-in">Click here</button></Link>
            </div>
            <img src='/assets/Transvida.gif' alt='gif'/>
        </div>
    )
}
export default CallAction
