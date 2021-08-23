import Footer from "../components/Footer"
import HeroPag from "../components/HeroPag"
import CardCity from "../components/CardCity"
import {Component} from "react"

export default class Cities extends Component{
    componentDidMount() {
       window.scroll(0, 0)
       document.title='Mytinerary - Cities'
    }
    render(){
        return(
            <div className='cities' style={{backgroundImage:`url("/assets/fondomain2.png")`}}>
                <HeroPag photo={'tres.jpg'}/>
                <CardCity/>
                <Footer/>
            </div>
        )
    }
}