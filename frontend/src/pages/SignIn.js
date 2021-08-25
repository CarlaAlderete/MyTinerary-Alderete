import {Component} from "react"
import {Link} from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import {connect} from "react-redux"
import userActions from "../redux/actions/userActions"
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
                this.props.singInUser(this.state.data)
                .then(res=>{
                    if(res.success){
                        message('Sing in ok')
                    }else{
                        message(res.res)
                    }
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
const mapDispatchToProps={
    singInUser:userActions.singInUser
}
export default connect(null, mapDispatchToProps)(SingIn)