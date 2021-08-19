import {useState} from "react"
import ItineraryInfo from './ItineraryInfo'

const Itinerary = (props) =>{
    const {name, photo, user, description, info,hashtag}= props.itinerary
    const [view, setView] = useState ({condition: false, text:'Read More'})
    const [heart, setHeart] = useState ({condition:false, text:'🤍'})

    const viewInfoHandler = ()=>{
        !view.condition ? setView({condition: true, text:'Read Less'}) : setView({condition: false,text:'Read More'})
    }
    const heartHandler = ()=>{
        !heart.condition ? setHeart({condition: true, text:'❤️'}) : setHeart({condition: false,text:'🤍'})
    }
    console.log(props.itinerary)
    const twitter = hashtag.map((obj,index) => <a key={index} href='' target='_blank' rel='noreferrer'>#{obj} </a>)
    return(
        <div className='itineratyGr'>
            <div className='itinerary'>
                <div className='photoItinerary' style={{backgroundImage:`url("/assets/${photo}")`}}></div>
                <div className='infoItinerary'>
                    <div className='info'>
                        <h3>{name}</h3>
                        <p onClick={heartHandler}>{heart.text}</p>
                    </div>
                    <div className='info'>
                        <div className='user'>
                            <div className='photouser' style={{backgroundImage:`url("/assets/${user.photo}")`}}></div>
                            <p>{user.name}</p>
                        </div>
                        <div>
                            <p>Price:{' 💵'.repeat(parseInt(info.price))}</p>
                            <p>Time:{'⌚ '+info.time+'hrs'}</p>
                        </div>
                    </div>
                    <p>{description}</p>
                    {twitter}
                </div>
            </div>
        {view.condition && <ItineraryInfo/>}
        <button onClick={viewInfoHandler}>{view.text}</button>
        </div>
    )
}
export default Itinerary