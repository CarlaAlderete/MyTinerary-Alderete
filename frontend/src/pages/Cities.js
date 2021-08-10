import Header from "../components/Header"
import Footer from "../components/Footer"
import {Component} from "react"

const newcities = [
    [{ foto:'copenhagen.jpg',city: 'Copenhagen'},
      { foto:'Boracay.jpg', city: 'Boracay'},
      { foto:'Rio.jpg', city: 'Rio de Janeiro'},
      { foto:'Reykjavik.jpg',city: 'Reykjavik'}],
    [{ foto:'amsterdam.jpg',city: 'Amsterdam'},
      { foto:'londres.jpg',city: 'London'},
      { foto:'Mykonos.jpg',city: 'Mykonos'},
      { foto:'toronto.jpg',city: 'Toronto'}],
    [{ foto:'telaviv.jpg',city: 'Tel aviv'},
      { foto:'losangeles.jpg',city: 'Los Angeles'},
      { foto:'ny.jpg',city: 'New York'},
      { foto:'sanfrancisco.jpg',city: 'San Francisco'}]
];

export default class Cities extends Component{
    render(){
        return(
            <div className='cities'>
                <Header/>
                <div className='mainCities'>
                    <h1>Oops!</h1>
                    <p>We still working</p>
                </div>
                <Footer/>
            </div>
        )
    }
}