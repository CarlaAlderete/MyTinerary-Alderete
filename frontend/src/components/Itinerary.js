import {useState} from 'react'
import ItineraryInfo from './ItineraryInfo'
import { connect } from 'react-redux'
import itinerariesActions from '../redux/actions/itinerariesActions'

const Itinerary = ({itinerary,usertoken,changeOneItineraryLike}) =>{
    const {name, photo, user, description, info, like, _id}=itinerary
    const [view, setView] = useState ({condition: false, text:'View More'})
    const [likeIcon, setLikeIcon] = useState ('🤍')

    const viewInfoHandler = ()=>{
        !view.condition ? setView({condition: true, text:'View Less'}) : setView({condition: false, text:'View More'})
    }
    const twitter = info.hashtag.map(obj => <a key={obj} href='https://twitter.com' target='_blank' rel='noreferrer'>#{obj} </a>)

    const icon = [...Array(parseInt(info.price))].map((obj, index) => <img src='/assets/money.png' alt='money' key={index}/>)
    // const pushLikeHandler=()=>{
    //     if(usertoken){
    //         console.log('estoy antes de mandar '+ _id)
    //         console.log('estoy antes de mandar'+ usertoken)
    //         setLikeIcon('❤️')
    //         changeOneItineraryLike(_id, usertoken)
    //         .then(res=>console.log(res))
    //     }else{
    //         alert('no podes')
    //     }
    // }
    return(
        <div className='itineratyGr'>
            <div className='itinerary'>
                <div className='photoItinerary' style={{backgroundImage:`url("/assets/${photo}")`}}></div>
                <div className='infoItinerary'>
                    <div className='info'>
                        <h3>{name}</h3>
                        <p>{likeIcon}{like.length}</p>
                        {/* ]<p onClick={pushLikeHandler}>{likeIcon}{like.length}</p> */}
                    </div>
                    <div className='info'>
                        <div className='user'>
                            <div className='photouser' style={{backgroundImage:`url("/assets/${user.photo}")`}}></div>
                            <p>{user.name}</p>
                        </div>
                        <div>
                            <div className='icon'>
                                <p>Price:</p>
                                {icon}
                            </div>
                            <p>Time:{' 🕗'+info.time+'hrs'}</p>
                        </div>
                    </div>
                    <p>{description}</p>
                    {twitter}
                </div>
            </div>
        {/* {view.condition && <ItineraryInfo/>} */}
        {view.condition && <ItineraryInfo itineraryId={_id}/>}
        <button onClick={viewInfoHandler}>{view.text}</button>
        </div>
    )
}
const mapStateToProps= (state)=>{
    return{
        usertoken:state.user.user.token
    }
}
const mapDispatchToProps={
    changeOneItineraryLike:itinerariesActions.changeOneItineraryLike
}
export default connect(mapStateToProps, mapDispatchToProps)(Itinerary)