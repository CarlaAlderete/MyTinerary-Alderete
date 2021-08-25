const userReducer = (state={countries:[], user:{name:'',photo:''}},action) =>{
    switch(action.type){
        case'GET_COUNTRIES':
        return{
            ...state,
            countries:action.payload
        }
        case'ADD_NEW_USER':
        return{
            ...state,
            user:action.payload
        }
        case'SIGN_IN_USER':
        return{
            ...state,
            user:action.payload
        }
        default: return state
    }
}
export default userReducer