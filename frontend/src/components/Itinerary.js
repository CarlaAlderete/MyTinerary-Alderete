import {useState} from "react"
import ItineraryInfo from './ItineraryInfo'

const Itinerary = ({itinerary}) =>{
    const {name, photo, user, description, info,hashtag}=itinerary
    const [view, setView] = useState ({condition: false, text:'View More'})
    
    const viewInfoHandler = ()=>{
        !view.condition ? setView({condition: true, text:'View Less'}) : setView({condition: false,text:'View More'})
    }
    const twitter = hashtag.map((obj,index) => <a key={index} href='https://twitter.com' target='_blank' rel='noreferrer'>#{obj} </a>)
    return(
        <div className='itineratyGr'>
            <div className='itinerary'>
                <div className='photoItinerary' style={{backgroundImage:`url("/assets/${photo}")`}}></div>
                <div className='infoItinerary'>
                    <div className='info'>
                        <h3>{name}</h3>
                        <p>🤍{info.like}</p>
                    </div>
                    <div className='info'>
                        <div className='user'>
                            <div className='photouser' style={{backgroundImage:`url("/assets/${user.photo}")`}}></div>
                            <p>{user.name}</p>
                        </div>
                        <div>
                            <p>Price:{' 💵'.repeat(parseInt(info.price))}</p>
                            <p>Time:{'🕗 '+info.time+'hrs'}</p>
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