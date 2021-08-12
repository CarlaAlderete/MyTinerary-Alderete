import { Component } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default class City extends Component{
    componentDidMount() {
        window.scroll(0, 0)
    };
    
    render(){
        return(
            <>
            <Header/>
            <h1>city</h1>
            <Footer/>
            </>
        )
    }
}