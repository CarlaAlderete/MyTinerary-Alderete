import {Component} from "react"
import {Link} from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import {connect} from "react-redux"
import userActions from "../redux/actions/userActions"
import GoogleLogin from 'react-google-login'

class SingIn extends Component{
    state={
        data:{mail:'', password:''},
        sign:false,
        error:''
    }
    componentDidMount(){
        window.scroll(0, 0)
        document.title='Mytinerary - Sing In'
    }
  
    render(){
        const addDataUserHandler=(e)=>{
            this.setState({data:{...this.state.data,[e.target.name]: e.target.value}})
        }
    
        const signInUserHandler=()=>{
            if(!this.state.data.mail || !this.state.data.password){
                this.setState({error:'*Data is missing, fill in all data'})
            }else{
                this.props.singInUser(this.state.data)
                .then(res=>{
                    if(!res.success){
                        this.setState({error:'*'+res.res})
                    }
                })
            }
        }
        const responseGoogle=res=>{
            let dataGoogle={
                mail: res.profileObj.email.toLowerCase(),
                password: res.profileObj.googleId,
                flagGoogle:true
            }
            this.props.singInUser(dataGoogle)
                .then(res=>{
                    if(!res.success){
                        this.setState({error:'*'+res.res})
                    }
                })
        }
        return(
            <div className='mainform' style={{backgroundImage:`url("/assets/fondoerror.jpg")`}}>
                <Header/>
                <div className='mainSing'>
                    <div className='cardForm'>  
                        <h2>Singn In with your account!</h2>
                        <p>Don't have an account? <Link to='/signup'>Sign Up</Link></p>
                        <h4>{this.state.error}</h4>
                        <input type='email' value={this.state.data.mail} placeholder='E-mail' name='mail' onChange={addDataUserHandler}/>
                        <input type='password' value={this.state.data.password} placeholder='Password' name='password' onChange={addDataUserHandler}/>
                        <button onClick={signInUserHandler}>Sign In</button>
                        <GoogleLogin
                            clientId="352346524724-udc9tro8j6e2g1qlqdf25suduuult5hm.apps.googleusercontent.com"
                            buttonText="Sing in with Google"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                        />
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