import Header from "../components/Header"
import Footer from "../components/Footer"
import CardCity from "../components/CardCity"
import {Component} from "react"

export default class Cities extends Component{
    componentDidMount() {
       window.scroll(0, 0)
    }
    render(){
        return(
            <div className='cities' style={{backgroundImage:`url("/assets/fondomain2.png")`}}>
                <div className='heroCities' style={{backgroundImage:`url("/assets/tres.jpg")`}}>
                    <Header/>
                    <div className='herocitiesLogo'>
                        <img src='./assets/logo.png' alt='logo'/>
                    </div>
                </div>
                <CardCity/>
                <Footer/>
            </div>
        )
    }
}