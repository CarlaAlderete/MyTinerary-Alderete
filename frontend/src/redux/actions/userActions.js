import axios from 'axios'

const userActions ={
    getcountries:()=>{
        return async()=>{
            try{
                let country = await axios.get('https://restcountries.eu/rest/v2/all?fields=name')
                return({res:country.data})
            }catch(err){
                console.log(err)
            }
        }
    },
    postNewUser:(data)=>{
        return async(dispatch, getState)=>{
            try{
                let res = await axios.post('http://localhost:4000/api/user/signup', data)
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
                let res = await axios.post('http://localhost:4000/api/user/signin', data)
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
                let res = await axios.get('http://localhost:4000/api/user/signin',{
                    headers:{
                        Authorization: 'Bearer '+ data
                    }
                })
                dispatch({type:'SIGN_IN_USER',payload:{name:res.data.name, photo:res.data.photo, token:data}})
            }catch(err){
                dispatch({type:'SIGN_OUT_USER'})
            }
            
        }
    }
}
export default userActions