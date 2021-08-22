import {useState, useEffect} from "react"
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import citiesActions from "../redux/actions/citiesActions"

const CardCity = (props) =>{
    const [loading, setLoading] = useState({condition:true, text:'Loading...', back:''})
    useEffect(()=>{
        if(!props.newcities.length){
            props.getCities()
            .then(res=>{
                if(res.success){
                    setLoading({...loading, condition:false})
                }else{
                    setLoading({...loading, text:'Oop! '+res.res, back:'Back to Home'})
            }
        })
        }else{
            setLoading({...loading, condition:false})
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const chooseCityHandler = (e) => {props.filterCities(e.target.value)};

    const city = props.newcities.map((obj, index) =>{
        return(
            <Link to={`/itinerary/${obj._id}`} key={index}>
                <div className={`item${index}`} data-aos="zoom-in-up" style={{backgroundImage:`url("/assets/${obj.photo}")`}}>
                    <h3>{`${obj.city.toUpperCase()} - ${obj.country.toUpperCase()}`}</h3>
                </div>
            </Link>
        )  
    });
    
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
            <input type='text' placeholder='Search for a city' onChange={chooseCityHandler}/>
            <div className='citiesGr'>
                {!city.length ? <h1>Sorry, there are no hits.</h1> : city}
            </div>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return {
        newcities : state.cities.filteredCity
    }
}

const mapDispatchToProps ={
    getCities:citiesActions.getAllCities,
    filterCities:citiesActions.filterCities
}

export default connect(mapStateToProps, mapDispatchToProps)(CardCity)