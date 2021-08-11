import Header from "../components/Header"
import Footer from "../components/Footer"
import {Component} from "react"

const newcities = [
    { foto:'copenhagen.jpg',city: 'Copenhagen', country:'Denmark'},
    { foto:'Boracay.jpg', city: 'Boracay', country:'Philippines'},
    { foto:'Rio.jpg', city: 'Rio de Janeiro', country:'Brazil'},
    { foto:'Reykjavik.jpg',city: 'Reykjavik', country:'Iceland'},
    { foto:'amsterdam.jpg',city: 'Amsterdam', country:'Netherlands'},
    { foto:'londres.jpg',city: 'London', country:'United Kingdom'},
    { foto:'Mykonos.jpg',city: 'Mykonos', country:'Greece'},
    { foto:'toronto.jpg',city: 'Toronto', country:'Canada'},
    { foto:'telaviv.jpg',city: 'Tel aviv', country:'Israel'},
    { foto:'losangeles.jpg',city: 'Los Angeles', country:'United States'},
    { foto:'ny.jpg',city: 'New York', country:'United States'},
    { foto:'sanfrancisco.jpg',city: 'San Francisco',country:'United States'}
];
const city =newcities.map((obj, index) =>{
    return(
        <div className={`item${index}`} data-aos="zoom-in-up" key={index} style={{backgroundImage:`url("/assets/${obj.foto}")`}}>
            <h3>{obj.city}</h3>
            <p>{obj.country}</p>
        </div> 
    )
});
export default class Cities extends Component{
    
    render(){
        return(
            <>
            <div className='cities' style={{backgroundImage:`url("/assets/fondomain2.png")`}}>
                <div className='heroCities' style={{backgroundImage:`url("/assets/tres.jpg")`}}>
                    <Header/>
                    <div className='herocitiesLogo'>
                        <img src='./assets/logo.png' alt='logo'/>
                    </div>
                </div>
                <div className='mainCities'>
                    <div className='citiesGr'>
                        {city}
                    </div>
                </div>
                <Footer/>
            </div>
            </>
        )
    }
}