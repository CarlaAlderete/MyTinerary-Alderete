import {useState, useEffect} from 'react'
import ItineraryInfo from './ItineraryInfo'
import { connect } from 'react-redux'
import itinerariesActions from '../redux/actions/itinerariesActions'
import { set } from 'mongoose'

const Itinerary = ({itinerary,userId,usertoken,changeOneItineraryLike}) =>{
    const {name, photo, user, description, info, like, _id}=itinerary
    const [view, setView] = useState ({condition: false, text:'View More'})
    const [likeIcon, setLikeIcon] = useState ({cant:like.length, text:''})

    const viewInfoHandler = ()=>{
        !view.condition ? setView({condition: true, text:'View Less'}) : setView({condition: false, text:'View More'})
    }
    const twitter = info.hashtag.map(obj => <a key={obj} href='https://twitter.com' target='_blank' rel='noreferrer'>#{obj} </a>)

    const icon = [...Array(parseInt(info.price))].map((obj, index) => <img src='/assets/money.png' alt='money' key={index}/>)
    const pushLikeHandler=()=>{
        if(usertoken){
            changeOneItineraryLike(_id, usertoken)
            .then(res=>{
                likeIcon.text === '🤍' ? setLikeIcon({cant:res.res.length, text:'❤️'}) : setLikeIcon({cant:res.res.length, text:'🤍'})
            })
        }else{
            alert('no podes')
        }
    }
    useEffect(()=>{
        like.includes(userId) ? setLikeIcon({...likeIcon, text:'❤️'}) : setLikeIcon({...likeIcon, text:'🤍'})
    },[userId])

    return(
        <div className='itineratyGr'>
            <div className='itinerary'>
                <div className='photoItinerary' style={{backgroundImage:`url("/assets/${photo}")`}}></div>
                <div className='infoItinerary'>
                    <div className='info'>
                        <h3>{name}</h3>
                        <p onClick={pushLikeHandler}>{likeIcon.text}{likeIcon.cant}</p>
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
        {view.condition && <ItineraryInfo itineraryId={_id}/>}
        <button onClick={viewInfoHandler}>{view.text}</button>
        </div>
    )
}
const mapStateToProps= (state)=>{
    return{
        usertoken:state.user.user.token,
        userId:state.user.user.id
    }
}
const mapDispatchToProps={
    changeOneItineraryLike:itinerariesActions.changeOneItineraryLike
}
export default connect(mapStateToProps, mapDispatchToProps)(Itinerary)