import { Component } from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"

class SingUp extends Component{
    render(){
        return(
            <>
            <Header/>
            <div>
                <h2>Join to our World of Adventures!</h2>
                <div>
                    <p>Already have an account?</p>
                    <Link to='/signin'>Sign In</Link>
                </div>
                

            </div>
            <Footer/>
            </>
        )
    }
}
export default SingUp