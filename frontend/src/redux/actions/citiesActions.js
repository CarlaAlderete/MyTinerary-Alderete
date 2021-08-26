import axios from 'axios'

const citiesActions = {
    getAllCities:(userToken)=>{
        return async(dispatch,getStates)=>{
            try{
                let res = await axios.get('http://localhost:4000/api/cities', {
                    headers: {
                        Authorization:'Bearer ' + userToken,
                    }
                })
                if(res.data.success){
                    let info = res.data.res
                    dispatch({type:'GET_ALL_CITIES', payload:info})
                    return({success:true})
                }else{
                    throw new Error()
                }
            }catch(err){
                return({success:false, res: err.message})
            }
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
    },
    takeOneCity:(id)=>{
        return async(dispatch,getStates)=>{
            try{
                let res = await axios.get(`http://localhost:4000/api/city/${id}`)
                if(res.data.success){
                    let info = res.data.res
                    dispatch({type:'TAKE_ONE_CITY', payload:info})
                    return({success:true})
                }else{
                    throw new Error()
                } 
            }catch(err){
                return({success:false, res: err.message})
            }
        }
    }
}
export default citiesActions