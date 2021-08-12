import { Component } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import axios from 'axios'

export default class City extends Component{
    state = {city: []}
    componentDidMount() {
        window.scroll(0, 0)
        // axios.get(`http://localhost:4000/api/city/${}`)
        // .then(res => this.setState({city:res.data.res}))
        // console.log(this.state.city)
    };
    render(){
        return(
            <>
            <Header/>
            {this.state.city.map(obj =><h1>hola</h1>)}
            <Footer/>
            </>
        )
    }
}