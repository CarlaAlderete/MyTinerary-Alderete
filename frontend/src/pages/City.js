import { Component } from "react"
import {Link} from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import axios from 'axios'

export default class City extends Component{
    state = {city: {}}

    componentDidMount() {
        window.scroll(0, 0)
        axios.get(`http://localhost:4000/api/cities/${this.props.match.params.id}`)
        .then(res => this.setState({city:res.data.res}))
        .catch(err=> alert(err.message))
    };

    render(){
        return(
            <>
            <div className='cityFoto' style={{backgroundImage:`url("/assets/${this.state.city.photo}")`,}}>
                <Header/>
                <div className='herocitiesLogo'></div>
            </div>
            <div className='cityOnly'>
                <h1>{this.state.city.city}</h1>
                <div className='descrGr'>
                    <p data-aos="fade-right">{this.state.city.description}</p>
                    <div className='descr' data-aos="fade-left" style={{backgroundImage:`url("/assets/${this.state.city.photoDescription}")`,}}></div>
                </div>
                <Link to='/cities'>
                    <button>Back</button>
                </Link>
            </div>
            <Footer/>
            </>
        )
    }
}