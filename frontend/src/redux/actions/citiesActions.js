import axios from 'axios'

const citiesActions = {
    getAllCities:()=>{
        return async(dispatch,getStates)=>{
            let res = await axios.get('http://localhost:4000/api/cities')
            let info = res.data.res
            dispatch({type:'GET_ALL_CITIES', payload:info})
        }
    },
    filterCities:(value)=>{
        return(dispatch, getStates)=>{
            dispatch({type:'FILTER_CITIES',payload: value})
        }
    },
    getOneCity:(id)=>{
        return(dispatch,getState)=>{
            dispatch({type:'GET_ONE_CITY', payload:id})
        }
    }
}
export default citiesActions