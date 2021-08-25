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
                    dispatch({type:'ADD_NEW_USER', payload:{name:res.data.res.name, photo:res.data.res.src}})
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
                    dispatch({type:'SIGN_IN_USER', payload:{name:res.data.res.name, photo:res.data.res.src}})
                    return({success:true})
                }else{
                    return({success:false, res:res.data.res})
                }
            }catch(err){
                return({success:false, res:'Oops! There is an error, try again later'})
            }
        }
    }
}
export default userActions