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
        return async()=>{
            try{
                let res = await axios.put(`http://localhost:4000/api/itineraries/${id}`,{}, {
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
                let res = await axios.post(`http://localhost:4000/api/itinerary/comment/${itineraryId}`,{text}, {
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
    deleteComment:(comentId, user)=>{
        return async()=>{
            try{
                let res = await axios.put(`http://localhost:4000/api/itinerary/comment/${comentId}`, {},{
                    headers: {
                        Authorization: 'Bearer '+ user
                    }  
                })
                return({success:true, res:res.data.res})
            }catch(err){
                return({success:false, res:err}) 
            }
        }
    },
    editComment:()=>{
        return()=>{

        }
    }
}
export default itinerariesActions