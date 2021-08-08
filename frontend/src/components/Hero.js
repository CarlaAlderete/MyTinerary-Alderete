import {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
    useEffect(() =>{
        AOS.init({duration: 2500});
    },)
    return (
        <>
        <div className='logo'>
            <div className='logoCh' data-aos="flip-right">
                <img src='./assets/logo.png'></img>
                <p>Find your perfect trip, designed by insiders who know and love their cities!</p>
            </div>
        </div>
        <video muted autoPlay loop className='video'>
            <source src='./assets/videoHero.mp4' type='video/mp4'/>
        </video>
        </>
    )

}

export default Hero