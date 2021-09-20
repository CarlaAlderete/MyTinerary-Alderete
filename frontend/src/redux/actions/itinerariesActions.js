import axios from 'axios'

const itinerariesActions ={
    getItineraries:(cityId)=>{
        return async(dispatch,getStates)=>{
            try{
                let res = await axios.get(`https://mytinerary-ca.herokuapp.com/api/itineraries/${cityId}`)
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
                let res= await axios.get(`https://mytinerary-ca.herokuapp.com/api/activities/${itineraryId}`)
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
        return async()=>{
            try{
                let res = await axios.put(`https://mytinerary-ca.herokuapp.com/api/itineraries/${id}`,{}, {
                    headers: {
                        Authorization: 'Bearer '+ user
                    }
                })
                return ({success:true, res:res.data.res.like})
            }catch(err){
                return ({success:false, res:err.message})
            }
        }
    },
    addComment:(user,itineraryId,text)=>{
        return async()=>{
            try{
                let res = await axios.post(`https://mytinerary-ca.herokuapp.com/api/itinerary/comment/${itineraryId}`,{text}, {
                    headers: {
                        Authorization: 'Bearer '+ user
                    }
                })
                return ({success:true, res:res.data.res})
            }catch(err){
                return ({success:false, res:err.message})
            }
        }
    },
    editComment:(comentId, user, text)=>{
        return async()=>{
            try{
                let res = await axios.put(`https://mytinerary-ca.herokuapp.com/api/itinerary/comment/${comentId}`,{text},{
                    headers: {
                    Authorization: 'Bearer '+ user
                }
            })
                return ({success:true, res:res.data.res})
            }catch(err){
                return({success:false, res:err.message})
            }
        }
    },
    getComments:(itineraryId)=>{
        return async()=>{
            try{
                let res = await axios.get(`https://mytinerary-ca.herokuapp.com/api/itinerary/${itineraryId}`)
                return ({success:true, res:res.data.res.comments})
            }catch(err){
                return({success:false, res:err.message})
            }
        }
    }
}
export default itinerariesActions