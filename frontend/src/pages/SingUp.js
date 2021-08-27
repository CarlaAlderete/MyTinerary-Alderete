import { Component } from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import userActions from '../redux/actions/userActions'
import {connect} from 'react-redux'

class SingUp extends Component{
    state={
        country:[],
        data:{name:'',lastName:'',mail:'',password:'',src:'',country:''},
        errorfront:'',
        error:[],
        message:{}
    }
    componentDidMount(){
        window.scroll(0, 0)
        document.title='Mytinerary - SingUp'
        this.props.getcountries()
    }
    
    render(){
        let opCountry = this.props.countries.map((obj, index) => <option key={index} value={obj.name}>{obj.name}</option>)
        const addDataUserHandler=(e)=>{
            this.setState((state)=>({
                data:{...this.state.data,[e.target.name]: e.target.value}}))
        }
        const addNewUserHandler=()=>{
            if(Object.values(this.state.data).some((value)=> !value)){
                this.setState({errorfront:'*Data is missing, fill in all data'})
            }else if(!this.state.data.mail.includes('@')){
                this.setState({errorfront:'*Mail no valid'})
            }else{
                this.setState({errorfront:''})
                this.props.postNewUser(this.state.data)
                .then(res=>{
                    if(!res.success){
                        console.log(res)
                        if(res.res === "Mail is being used with another account"){
                            this.setState({errorfront:res.res})
                        }else{
                            res.res.map(obj=>this.setState((state)=>({
                            message:{...this.state.message,[obj.path[0]]: obj.message}})))
                        }  
                    }
                })
            }
        }
        
        return(
            <div className='mainform' style={{backgroundImage:`url("/assets/fondoerror.jpg")`}}>
                <Header/>
                <div className='mainSing'>
                    <div className='cardForm'>
                        <h2>Sign up! It is fast and easy.</h2>
                        <p>Already have an account? <Link to='/signin'>Sign In</Link></p>
                        <h4>{this.state.errorfront}</h4>
                        {this.state.message.name && <p className='inputError'>Name-{this.state.message.name}</p>}
                        <input type='text' placeholder='Name' className={this.state.message.name && 'borderError'} name='name' onChange={addDataUserHandler}/>
                        {this.state.message.lastName && <p className='inputError'>Name-{this.state.message.lastName}</p>}
                        <input type='text' placeholder='Last Name' className={this.state.message.lastName && 'borderError'} name='lastName' onChange={addDataUserHandler}/>
                        {this.state.message.mail && <p className='inputError'>E-mail-{this.state.message.mail}</p>}
                        <input type='email' placeholder='E-mail' className={this.state.message.mail && 'borderError'} name='mail' onChange={addDataUserHandler}/>
                        {this.state.message.password && <p className='inputError'>Password-{this.state.message.password}</p>}
                        <input type='password' placeholder='Password' className={this.state.message.password && 'borderError'} name='password' onChange={addDataUserHandler}/>
                        {this.state.message.src && <p className='inputError'>URL-{this.state.message.src}</p>}
                        <input type='url' placeholder='Url' name='src' onChange={addDataUserHandler}/>
                        <select name='country' required onChange={addDataUserHandler}>
                            <option>Country</option>
                            {opCountry}
                        </select>
                        <button onClick={addNewUserHandler}>Sign Up</button>
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