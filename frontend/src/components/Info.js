import {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Info = () =>{
    useEffect(() =>{
        AOS.init({duration: 2500});
    },)
    return(
        <div className='contenido'>
            <div className='cardGr'>
                <div className='card' data-aos="fade-right" style={{backgroundImage:`url("/assets/remo.jpg")`}}></div>
                <div className='cardInfo' data-aos="fade-left">
                    <h3>Why us?</h3>
                    <p>A short-term rental service by and for gay travelers is needed to help provide a comfortable and safe experience.</p>
                </div>
            </div>
            <div className='cardGr'>
                <div className='cardInfo' data-aos="fade-right">
                    <h3>The best destinations </h3>
                    <p>We have information on all the selected destinations with the best activities for your satisfaction</p>
                </div>
                <div className='card' data-aos="fade-left" style={{backgroundImage:`url("/assets/hotel.jpg")`}}></div>
            </div>
            <div className='cardGr'>
                <div className='card' data-aos="fade-right" style={{backgroundImage:`url("/assets/party.jpg")`}}></div>
                <div className='cardInfo' data-aos="fade-left">
                    <h3>Dates and activities</h3>
                    <p>We have updated all the activities of the LGBTQ + community in each city and the LGBTQ + pride marches so you can live a different experience</p>
                </div>
            </div>
        </div>
    )
}

export default Info