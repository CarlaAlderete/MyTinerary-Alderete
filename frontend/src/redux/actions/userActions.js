import axios from 'axios'

const userActions ={
    getcountries:()=>{
        return async(dispatch,getState)=>{
            try{
                let country = await axios.get('https://restcountries.eu/rest/v2/all?fields=name')
                dispatch({type:'GET_COUNTRIES', payload:country.data})
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
           dispatch({type:'SIGN_OUT_USER', payload:{name:'', photo:'', token:''}})
       }
    },
    forcedSignIn:(data)=>{
        return(dispatch,getState)=>{
            dispatch({type:'SIGN_IN', payload:data})
        }
    }
}
export default userActions