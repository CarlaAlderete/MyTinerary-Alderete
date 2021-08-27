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
    // this.state.error.map(obj=>{this.setState((state)=>({
    //     message:{...this.state.message,[obj.path[0]]: obj.message}}))})  
    // console.log(this.state.message)

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
                        this.setState({error:res.res})
                    }
                })
            }
        }
        const message = this.state.error.map((obj, index)=><p key={index}>{obj.path[0]}-{obj.message}</p>)
        
        return(
            <div className='mainform' style={{backgroundImage:`url("/assets/fondoerror.jpg")`}}>
                <Header/>
                <div className='mainSing'>
                    <div className='cardForm'>
                        <h2>Sign up! It is fast and easy.</h2>
                        <p>Already have an account? <Link to='/signin'>Sign In</Link></p>
                        <h4>{this.state.errorfront}</h4>
                        <input type='text' placeholder='Name' name='name' onChange={addDataUserHandler}/>
                        <input type='text' placeholder='Last Name' name='lastName' onChange={addDataUserHandler}/>
                        <input type='email' placeholder='E-mail' name='mail' onChange={addDataUserHandler}/>
                        <input type='password' placeholder='Password' name='password' onChange={addDataUserHandler}/>
                        <input type='url' placeholder='Url' name='src' onChange={addDataUserHandler}/>
                        <select name='country' required onChange={addDataUserHandler}>
                            <option>Country</option>
                            {opCountry}
                        </select>
                        <button onClick={addNewUserHandler}>Sing Up</button>
                        {message}
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