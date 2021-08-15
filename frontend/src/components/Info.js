const info = [
    { foto:'remo.jpg',h3: 'Why us?', text:'A short-term rental service by and for gay travelers is needed to help provide a comfortable and safe experience', id: 'par'},
      { foto:'hotel.jpg', h3: 'The best destinations', text:'We have information on all the selected destinations with the best activities for your satisfaction', id: 'impar'},
      { foto:'party.jpg', h3: 'Dates and activities', text:'We have updated all the activities of the LGBTIQ + community in each city and the LGBTIQ + pride marches so you can live a different experience', id: 'par'},
];

const Info = () =>{
    const infoContenido =info.map((obj, index) =>{
        return(
            <div className='cardGr' key={index}>
                <div className='card' id={obj.id} data-aos="fade-right" style={{backgroundImage:`url("/assets/${obj.foto}")`}}></div>
                    <div className='cardInfo' data-aos="fade-left">
                        <h3>{obj.h3}</h3>
                    <p>{obj.text}</p>
                </div>
            </div> 
        )
    });

    return(
        <div className='contenido' style={{backgroundImage:`url("/assets/fondomain2.png")`,}}>
            {infoContenido}
        </div>   
    )
}

export default Info