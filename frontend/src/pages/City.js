import { Component } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import axios from 'axios'

export default class City extends Component{
    state = {city: {}}
    
    componentDidMount() {
        window.scroll(0, 0)
        axios.get(`http://localhost:4000/api/cities/${this.props.match.params.id}`)
        .then(res => this.setState({city:res.data.res}))
    };
    
    render(){
        return(
            <>
            <div className='cityFoto' style={{backgroundImage:`url("/assets/${this.state.city.photo}")`,}}>
                <Header/>
                <div className='herocitiesLogo'></div>
            </div>
            <h1>{this.state.city.city}</h1>
            <Footer/>
            </>
        )
    }
}