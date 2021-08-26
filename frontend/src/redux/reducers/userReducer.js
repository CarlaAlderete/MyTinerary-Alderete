const userReducer = (state={countries:[], user:{name:'',photo:'',token:''}},action) =>{
    switch(action.type){
        case'GET_COUNTRIES':
        return{
            ...state,
            countries:action.payload
        }
        case'SIGN_IN_USER':
        localStorage.setItem('data',JSON.stringify(action.payload))
        // localStorage.setItem('token',action.payload.token)
        return{
            ...state,
            user:action.payload
        }
        case'SIGN_OUT_USER':
        localStorage.removeItem('data')
        // localStorage.removeItem('token',action.payload.token)
        return{
            ...state,
            user:action.payload
        }
        case'SIGN_IN':
        return{
            ...state,
            user:action.payload
        }
        default: return state
    }
}
export default userReducer