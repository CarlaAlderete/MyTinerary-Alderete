import axios from 'axios'

const itinerariesActions ={
    getAllItineraries:()=>{
        return async(dispatch,getStates)=>{
            let res = await axios.get('http://localhost:4000/api/itineraries')
            let info = res.data.res
            dispatch({type:'GET_ALL_ITINERARIES', payload:info})
        }
    }
}
export default itinerariesActions