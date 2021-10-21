import axios from 'axios'

const userActions ={
    postNewUser:(data)=>{
        return async(dispatch, getState)=>{
            try{
                let res = await axios.post('https://mytinerary-ca.herokuapp.com/api/user/signup', data)
                if(res.data.success){
                    dispatch({type:'SIGN_IN_USER', payload:res.data.res})
                    return({success:true})
                }else{
                    return({success:false, res:res.data.res})
                }
            }catch(err){
                return({success:false, res:'Oops! There is an error, try again later'})
            }
        }
    },
    singInUser:(data)=>{
        return async(dispatch, getState)=>{
            try{
                let res = await axios.post('https://mytinerary-ca.herokuapp.com/api/user/signin', data)
                if(res.data.success){
                    dispatch({type:'SIGN_IN_USER', payload:res.data.res})
                    return({success:true})
                }else{
                    return({success:false, res:res.data.res})
                }
            }catch(err){
                return({success:false, res:'Oops! There is an error, try again later'})
            }
        }
    },
    singOut:()=>{
       return(dispatch, getState)=>{
           dispatch({type:'SIGN_OUT_USER'})
       }
    },
    forcedSignIn:(data)=>{
        return async(dispatch,getState)=>{
            try{
                let res = await axios.get('https://mytinerary-ca.herokuapp.com/api/user/signin',{
                    headers:{
                        Authorization: 'Bearer '+ data
                    }
                })
                dispatch({type:'SIGN_IN_USER',payload:{name:res.data.name, photo:res.data.photo, id:res.data.id, token:data}})
            }catch(err){
                dispatch({type:'SIGN_OUT_USER'})
            }
            
        }
    }
}
export default userActions