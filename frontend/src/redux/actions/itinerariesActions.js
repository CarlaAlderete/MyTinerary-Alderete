import axios from 'axios'

const itinerariesActions ={
    getItineraries:(cityId)=>{
        return async(dispatch,getStates)=>{
            try{
                let res = await axios.get(`http://localhost:4000/api/itineraries/${cityId}`)
                if(res.data.success){
                    let info = res.data.res
                    dispatch({type:'GET_ALL_ITINERARIES', payload:info})
                }else{
                    throw new Error()
                }
            }catch(err){
                dispatch({type:'GET_ALL_ITINERARIES', payload:[]})
            }
        }
    },
    getActivitiesByItinerary:(itineraryId)=>{
        return async()=>{
            try{
                let res= await axios.get(`http://localhost:4000/api/activities/${itineraryId}`)
                if(res.data.success){
                    return({success:true, res:res.data.res})
                }else{
                    throw new Error()
                }
            }catch(err){
                return({success:false, res:err.message})
            }
        }
    },
    changeOneItineraryLike:(id,user)=>{
        return async(dispatch,getStates)=>{
            try{
                let res = await axios.put(`http://localhost:4000/api/itineraries/${id}`, {
                    headers: {
                        Authorization: 'Bearer '+ user
                    }
                })
                return ({success:true, res:res})
            }catch(err){
                return ({success:false, res:err.message})
            }
        }
    }
}
export default itinerariesActions