import { useState, useEffect } from "react";
import {Link} from 'react-router-dom'
import axios from 'axios'

const CardCity = () =>{
    const [newcities, setNewCities] = useState([])
    const [filteredCity, setFilteredCity] = useState('')
    const [loading, setLoading] = useState({condition: true, text: 'Loading..', back: ''})

    useEffect(()=>{
        axios.get('http://localhost:4000/api/cities')
        .then(res => {
            if(res.data.success){
            setNewCities(res.data.res)
            setLoading({condition: false})
        }else{
            setLoading({text: 'No information to show', back: 'Back Home'})}
    })
        .catch(err=> setLoading({condition: true, text: err.message, back: 'Back Home'}))
    },[])

    const filterCityHandler = (e) => setFilteredCity(e.target.value.toLowerCase().trim().replace(/\s+/g, ''));

    const city = newcities.map((obj, index) =>{
        return(
            (obj.city).toLowerCase().replace(/\s+/g, '').startsWith(filteredCity) &&
            <Link to={`/itinerary/${obj._id}`} key={index}>
                <div className={`item${index}`} data-aos="zoom-in-up" style={{backgroundImage:`url("/assets/${obj.photo}")`}}>
                    <h3>{`${obj.city.toUpperCase()} - ${obj.country.toUpperCase()}`}</h3>
                </div>
            </Link>
        )  
    });

    const emptyCity = (value) => {
        return typeof value === 'boolean'
    }

    // const city = newcities.filter(obj => !filteredCity ? obj : obj.city.toLowerCase().replace(/\s+/g, '').startsWith(filteredCity)).map((obj, index)=>{
    //     return(
    //         <Link to={`/itinerary/${obj._id}`} key={index}>
    //             <div className={`item${index}`} data-aos="zoom-in-up" style={{backgroundImage:`url("/assets/${obj.photo}")`}}>
    //                 <h3>{`${obj.city.toUpperCase()} - ${obj.country.toUpperCase()}`}</h3>
    //             </div>
    //          </Link>
    //     )
    // })
    
    if(loading.condition){
        return (
            <div className='mainCities'>
            <h1>{loading.text}</h1>
            <Link to='/'>{loading.back}</Link>
            </div>
            )
        }
    return(
        <div className='mainCities'>
            <h2>Destinations</h2>
            <p>In our tours we try to show you the best of each area for our clients in a unique LGTBIQ+ experience.</p>
            <input type='text' placeholder='Search for a city' onChange={filterCityHandler}/>
            <div className='citiesGr'>
                {city.every(emptyCity) ? <h1>Sorry, there are no hits.</h1> : city}
                {/* {city.length == 0 ? <h1>Sorry, there are no hits.</h1> : city} */}
            </div>
        </div>
    )
}

export default CardCity