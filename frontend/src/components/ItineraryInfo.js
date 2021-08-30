const ItineraryInfo =()=>{

    return (
        <h2>Under Construction</h2>
    )
}
export default ItineraryInfo 

// import {useEffect,useState} from 'react'
// import {connect} from 'react-redux'
// import itinerariesActions from '../redux/actions/itinerariesActions'

// const ItineraryInfo =({itineraryId,getActivitiesByItinerary})=>{
//     const [activities, setActivities] = useState([])
//     const [loading, setLoading] = useState(true)

//     useEffect(()=>{
//         getActivitiesByItinerary(itineraryId)
//         .then(res=>{
//             if(res.success){
//                 setActivities(res.res)
//                 setLoading(false)
//             }else{
//                 console.log(res)
//             }
//         })
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//     },[])

//     let activity=activities.map((obj, index)=>{
//         return(
//             <div className='activity' key={index} style={{backgroundImage:`url("${obj.src}")`}}>
//                 <div>
//                     <h4>{obj.name}</h4>
//                     <p>{obj.description}</p>
//                 </div>
//             </div>
//         )
//     })

// if(loading){
//     return <img  className='loading' src='/assets/loading.gif' alt='loading...'/>
// }
// return (
//     <div className='activities'>
//         {!activities.length ? <h2>There are not activity yet!</h2> : activity}
//     </div>
// )
// }
// const mapDispatcToProps={
//     getActivitiesByItinerary:itinerariesActions.getActivitiesByItinerary
// }
// export default connect(null, mapDispatcToProps)(ItineraryInfo) 