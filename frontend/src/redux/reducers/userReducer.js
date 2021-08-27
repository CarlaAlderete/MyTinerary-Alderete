const userReducer = (state={user:{name:'',photo:'',token:''}},action) =>{
    switch(action.type){
        case'GET_COUNTRIES':
        return state
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
            user:{name:'', photo:'', token:''}
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