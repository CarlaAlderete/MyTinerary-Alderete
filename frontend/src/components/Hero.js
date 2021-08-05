import videoHero from '../assets/videoHero.mp4';
import logo from '../assets/logo.png'

const Hero = () => {
    return (
        <>
        <div className='logo'>
            <img src={logo}></img>
            <p>Find your perfect trip,designed by insiders who know and love their cities!"</p>
        </div>
        <video loop muted autoPlay className='video'>
            <source src={videoHero} type='video/mp4'/>
        </video>
        </>
    )

}

export default Hero