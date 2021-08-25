import {Component} from "react"
import {Link} from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import axios from "axios"
import Swal from 'sweetalert2'


class SingIn extends Component{
    state={
        data:{mail:'', password:''},
        sign:false
    }
    componentDidMount(){
        window.scroll(0, 0)
        document.title='Mytinerary - Sing In'
    }
  
    render(){
        const addDataUserHandler=(e)=>{
            this.setState((state)=>({
                data:{...this.state.data,[e.target.name]: e.target.value}}))
        }
        const message = (text) =>{
            return(
                Swal.fire({
                    title: text,
                    width: 400,
                    padding: '1em',
                    background: 'url(/assets/fondomain2.png)',
                })
            )
        }
        const signInUserHandler=()=>{
            if(!this.state.data.mail || !this.state.data.password){
                message('Missing data')
            }else{
                axios.post('http://localhost:4000/api/user/signin', this.state.data)
                .then(res=>{
                    if(res.data.success){
                        message('Sing in ok')
                        this.setState({data:{mail:'', password:''}})
                    }else{
                        message(res.data.res)
                    }
                })
                .catch(()=>{
                    message('Oops! There is an error, try again later')
                })
            }
        }
        return(
            <div className='mainform' style={{backgroundImage:`url("/assets/fondoerror.jpg")`}}>
                <Header/>
                <div className='mainSing'>
                    <div className='cardForm'>  
                        <h2>Singn In with your account!</h2>
                        <p>Don't have an account? <Link to='/signup'>Sign Up</Link></p>
                        <input type='email' value={this.state.data.mail} placeholder='E-mail' name='mail' onChange={addDataUserHandler}/>
                        <input type='password' value={this.state.data.password} placeholder='Password' name='password' onChange={addDataUserHandler}/>
                        <button onClick={signInUserHandler}>Sing In</button>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
export default SingIn