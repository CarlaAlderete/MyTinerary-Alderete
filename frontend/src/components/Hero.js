const Hero = () => {
    return (
        <>
        <div className='logo'>
            <img src='./assets/logo.png'></img>
            <p>Find your perfect trip, designed by insiders who know and love their cities!</p>
        </div>
        <video muted autoPlay loop className='video'>
            <source src='./assets/videoHero.mp4' type='video/mp4'/>
        </video>
        </>
    )

}

export default Hero