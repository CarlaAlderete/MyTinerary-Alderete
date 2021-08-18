import { Component } from "react"
import {Link} from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Itinerary from "../components/Itinerary"
import axios from 'axios'

export default class City extends Component{
    state = {
            city: {},
            loading: true,
            title: 'Loading...',
            error: '',
            back: '',
            src:''
        }
    componentDidMount() {
        window.scroll(0, 0)
        axios.get(`http://localhost:4000/api/city/${this.props.match.params.id}`)
        .then(res => {
            if(res.data.success){
                this.setState({city:res.data.res, loading:false})
            }else{
                this.setState({title:'No information to show', error:`Error: ${res.data.res}`, back:'Back to the Cities'})}
        })
        .catch(err=> this.setState({title:'No information to show', error:err.message, back:'Back to the Cities'}))
    };

    render(){
        if(this.state.loading){
            return(
                <div className='errorInfo' style={{backgroundImage:`url("/assets/fondoerror.jpg")`}}>
                <div className='error'>
                    <h1>{this.state.title}</h1>
                    <p>{this.state.error}</p>
                    <Link to='/cities'>{this.state.back}</Link>
                </div>
                </div>
            )
        }
        return(
            <div className='cityAll'>
            <div className='cityFoto' style={{backgroundImage:`url("/assets/${this.state.city.photo}")`,}}>
                <Header/>
                <div className='herocitiesLogo'></div>
            </div>
            <div className='cityOnly' style={{backgroundImage:`url("/assets/fondomain2.png")`,}}>
                <h1>{this.state.city.city}</h1>
                <div className='descrGr'>
                    <p data-aos="fade-right">{this.state.city.description}</p>
                    <div className='descr' data-aos="fade-left" style={{backgroundImage:`url("/assets/${this.state.city.photoDescription}")`,}}></div>
                </div>
                <Itinerary/>
                <Link to='/cities'>
                    <button>Back to the Cities</button>
                </Link>
            </div>
            <Footer/>
            </div>
        )
    }
}