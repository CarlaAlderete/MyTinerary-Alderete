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
        error:''
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
            if(Object.values(this.state.data).some((value)=> value === '')){
                this.setState({error:'*Data is missing, fill in all data'})
            }else if(!this.state.data.mail.includes('@')){
                this.setState({error:'*Mail no valid'})
            }else{
                this.props.postNewUser(this.state.data)
                .then(res=>{
                    if(!res.success){
                        this.setState({error:'*'+res.res})
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
                        <h4>{this.state.error}</h4>
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