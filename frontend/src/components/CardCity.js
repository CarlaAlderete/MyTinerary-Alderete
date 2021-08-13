import { useState, useEffect } from "react";
import {Link} from 'react-router-dom'
import axios from 'axios'

const CardCity = () =>{
    const [newcities, setNewCities] = useState([])
    const [filteredCity, setFilteredCity] = useState('')
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        axios.get('http://localhost:4000/api/cities')
        .then(res => {
            setNewCities(res.data.res)
            setLoading(false)
        })
    },[])

    const filterCityHandler = (e) => {
        setFilteredCity(e.target.value.toLowerCase().trim().replace(/\s+/g, ''))
    };
    const city =newcities.map((obj, index) =>{
        return(
            obj.city.startsWith(filteredCity) &&
            <Link to={`/itinerary/${obj._id}`} key={index}>
                <div className={`item${index}`} data-aos="zoom-in-up" style={{backgroundImage:`url("/assets/${obj.photo}")`}}>
                    <h3>{obj.city.toUpperCase()}</h3>
                    <p>{obj.country.toUpperCase()}</p>
                </div>
            </Link>
        )  
    });
    const emptyCity = (value) => {
        return typeof value === 'boolean'
    }
    if(loading){
        return <h1>Loading...</h1>
    }
    return(
        <div className='mainCities'>
            <h2>Destinations</h2>
            <p>In our tours we try to show you the best of each area for our clients in a unique LGTBIQ+ experience.</p>
            <input type='text' placeholder='search' onChange={filterCityHandler}/>
            <div className='citiesGr'>
                {city.every(emptyCity) ? <h1>Sorry, there are no hits.</h1> : city}
            </div>
        </div>
    )
}

export default CardCity