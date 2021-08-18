import { useState, useEffect } from "react"
import axios from 'axios'

const Itinerary = () =>{
    const[itineraries, setItineraries]= useState([])
    useEffect(()=>{
        axios.get('http://localhost:4000/api/itineraries')
        .then(res=>setItineraries(res.data.res))
        .catch(err=> console.log(err))
    },[])

    // const itinerary=itineraries.map((obj,index)=>{
    //     return(
            
    //     )
    // })
    return(
        <>
            {/* {itinerary} */}
            <h1>cosa</h1>
        </>
    )
}
export default Itinerary