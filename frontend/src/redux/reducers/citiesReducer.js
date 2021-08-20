const citiesReducer = (state ={cities:[],copiaCities:[],city:{}}, action) => {
    switch(action.type){
        case'GET_ALL_CITIES':
            return{
                ...state,
                cities:action.payload,
                copiaCities:action.payload
            }
        case'FILTER_CITIES':
            return{
                ...state,
                copiaCities:state.cities.filter(obj => !action.payload ? obj : obj.city.toLowerCase().replace(/\s+/g, '').startsWith(action.payload.toLowerCase().replace(/\s+/g, '')))
            }
        case'GET_ONE_CITY':
            return{
                ...state,
                city:state.cities.find(obj => obj._id == action.payload)
            }
        default:
            return state 
    } 
}
export default citiesReducer