import { Component } from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import userActions from '../redux/actions/userActions'
import {connect} from 'react-redux'
import GoogleLogin from 'react-google-login'

class SingUp extends Component{
    state={
        country:[],
        data:{name:'',lastName:'',mail:'',password:'',src:'',country:'', verifyPassword:null},
        errorfront:'',
        error:[],
        message:{},
        verifyPassword: null
    }
    componentDidMount(){
        window.scroll(0, 0)
        document.title='Mytinerary - SingUp'
        this.props.getcountries()
        .then(res=> 
            this.setState({country:res.res}))
    }
    render(){
        let opCountry = this.state.country.map((obj, index) => <option key={index} value={obj.name}>{obj.name}</option>)
        const addDataUserHandler=(e)=>{
            if(e.target.name === 'name' || e.target.name === 'lastName'){
                this.setState({data:{...this.state.data,[e.target.name]: e.target.value.charAt(0).toUpperCase()+e.target.value.slice(1)}})
            }else{
                this.setState({data:{...this.state.data,[e.target.name]: e.target.value}})
            }
        }
        const addNewUserHandler=()=>{
            this.setState({message:{}})
            if(Object.values(this.state.data).some((value) => !value)){
                this.setState({errorfront:'*Data is missing, fill in all data'})
            }else if(!this.state.data.mail.includes('@')){
                this.setState({errorfront:'*Mail no valid'})
            }else if(this.state.verifyPassword){
                this.setState({errorfront:''})
            }else{
                this.setState({errorfront:''})
                this.props.postNewUser(this.state.data)
                .then(res=>{
                    if(!res.success){
                        if(res.res === "Mail is being used with another account"){
                            this.setState({errorfront:res.res})
                        }else{
                            res.res.map(obj=>this.setState({message:{...this.state.message,[obj.path[0]]: obj.message}}))
                        }  
                    }
                })
            }
        }
        const responseGoogle= res =>{
            let userGoogle ={
                name: res.profileObj.givenName,
                lastName: res.profileObj.familyName,
                mail: res.profileObj.email,
                password: res.profileObj.googleId,
                src: res.profileObj.imageUrl,
                country: 'null',
                google: true
            }
            this.props.postNewUser(userGoogle)
            .then(res=>{
                if(!res.success){
                    if(res.res === "Mail is being used with another account"){
                        this.setState({errorfront:res.res})
                    }else{
                        res.res.map(obj=>this.setState((state)=>({
                        message:{...this.state.message,[obj.path[0]]: obj.message}})))
                    }  
                }
            })
        }
        const verifyPasswordHandler= (e)=>{
            this.setState({errorfront:''})
            e.target.value !== this.state.data.password ? this.setState({verifyPassword:true}) : this.setState({verifyPassword: null}) 
        }
        return(
            <div className='mainform' style={{backgroundImage:`url("/assets/fondoerror.jpg")`}}>
                <Header/>
                <div className='mainSing'>
                    <div className='cardForm'>
                        <h2>Sign up! It is fast and easy.</h2>
                        <p>Already have an account? <Link to='/signin'>Sign In</Link></p>
                        <h4>{this.state.errorfront}</h4>
                        {this.state.message.name && <p className='inputError'>{this.state.message.name}</p>}
                        <input type='text' placeholder='First Name' className={this.state.message.name && 'borderError'} name='name' onChange={addDataUserHandler}/>
                        {this.state.message.lastName && <p className='inputError'>{this.state.message.lastName}</p>}
                        <input type='text' placeholder='Last Name' className={this.state.message.lastName && 'borderError'} name='lastName' onChange={addDataUserHandler}/>
                        {this.state.message.mail && <p className='inputError'>{this.state.message.mail}</p>}
                        <input type='email' placeholder='E-mail' className={this.state.message.mail && 'borderError'} name='mail' onChange={addDataUserHandler}/>
                        {this.state.message.password && <p className='inputError'>{this.state.message.password}</p>}
                        {this.state.verifyPassword && <p className='inputError'>Passwords does not match</p>}
                        <input type='password' placeholder='Password at least 5 characters' className={this.state.message.password || this.state.verifyPassword  && 'borderError'} name='password' onChange={addDataUserHandler}/>
                        {this.state.verifyPassword && <p className='inputError'>Passwords does not match</p>}
                        <input type='password' placeholder='Repeat Password' className={this.state.verifyPassword && 'borderError'} name='verifyPassword' onChange={addDataUserHandler} onBlur={verifyPasswordHandler} />
                        {this.state.message.src && <p className='inputError'>{this.state.message.src}</p>}
                        <input type='url' placeholder='Url' className={this.state.message.src && 'borderError'} name='src' onChange={addDataUserHandler}/>
                        <select name='country' required onChange={addDataUserHandler}>
                            <option>Country</option>
                            {opCountry}
                        </select>
                        <button onClick={addNewUserHandler}>Sign Up</button>
                        <GoogleLogin
                            clientId="352346524724-udc9tro8j6e2g1qlqdf25suduuult5hm.apps.googleusercontent.com"
                            buttonText="Sing Up with Google"
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
const mapStateToProps=(state)=>{
    return{
        countries:state.user.countries,
    }
}
const mapDispatchToProps={
    getcountries:userActions.getcountries,
    postNewUser:userActions.postNewUser
}
export default connect(mapStateToProps, mapDispatchToProps)(SingUp)