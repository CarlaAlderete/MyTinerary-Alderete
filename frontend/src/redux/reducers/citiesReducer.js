const citiesReducer = (state ={cities:[],filteredCity:[],city:{}}, action) => {
    switch(action.type){
        case'GET_ALL_CITIES':
            return{
                ...state,
                cities:action.payload,
                filteredCity:action.payload
            }
        case'FILTER_CITIES':
            return{
                ...state,
                filteredCity:state.cities.filter(obj => obj.city.toLowerCase().replace(/\s+/g, '').startsWith(action.payload.toLowerCase().replace(/\s+/g, '')))
            }
        case'GET_ONE_CITY':
            return{
                ...state,
                city:state.cities.find(obj => obj._id === action.payload)
            }
        case'TAKE_ONE_CITY':
            return{
                ...state,
                city:action.payload
            }
        case'DELETE_CITIES'://borrar
            return{
                ...state,
                cities:action.payload
            }
        default:
            return state 
    } 
}
export default citiesReducer