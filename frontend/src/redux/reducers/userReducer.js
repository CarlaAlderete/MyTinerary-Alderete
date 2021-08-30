const userReducer = (state={user:{name:'',photo:'',token:'',id:''}},action) =>{
    switch(action.type){
        case'SIGN_IN_USER':
        localStorage.setItem('token',action.payload.token)
        return{
            ...state,
            user:action.payload
        }
        case'SIGN_OUT_USER':
        localStorage.removeItem('token')
        return{
            ...state,
            user:{name:'', photo:'', token:'',id:''}
        }
        case'FORCED_SIGN_IN':
        return{
            ...state,
            user:action.payload
        }
        default: return state
    }
}
export default userReducer