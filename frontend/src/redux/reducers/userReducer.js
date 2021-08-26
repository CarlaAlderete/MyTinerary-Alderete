const userReducer = (state={countries:[], user:{name:'',photo:'',token:''}},action) =>{
    switch(action.type){
        case'GET_COUNTRIES':
        return{
            ...state,
            countries:action.payload
        }
        case'SIGN_IN_USER':
        localStorage.setItem('name',action.payload.name)
        localStorage.setItem('photo',action.payload.photo)
        localStorage.setItem('token',action.payload.token)
        return{
            ...state,
            user:action.payload
        }
        case'SIGN_OUT_USER':
        localStorage.removeItem('name')
        localStorage.removeItem('photo')
        localStorage.removeItem('token')
        return{
            ...state,
            user:action.payload
        }
        default: return state
    }
}
export default userReducer