import {Component} from "react"
import {Link} from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import axios from "axios"


class SingIn extends Component{
    state={
        data:{mail:'', password:''}
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
        const signInUserHandler=()=>{
            axios.post('http://localhost:4000/api/user/signin', this.state.data)
            .then(res=>{
                if(res.data.success){
                    alert('sign in ok')
                    this.setState({data:{mail:'', password:''}})
                }else{
                    alert(res.data.res)
                }
            })
            .catch(err=>console.log(err))
        }

        return(
            <div className='mainform' style={{backgroundImage:`url("/assets/fondoerror.jpg")`}}>
                <Header/>
                <div className='mainSing'>
                    <div className='cardForm'>   
                        <h2>Singn In with your account!</h2>
                        <p>Don't have an account? <Link to='/signup'>Sign Up</Link></p>
                        <div className='formsignup'>
                            <input type='email' value={this.state.data.mail} placeholder='E-mail' name='mail' onChange={addDataUserHandler}/>
                            <input type='password' value={this.state.data.password} placeholder='Password' name='password' onChange={addDataUserHandler}/>
                        </div>
                        <button onClick={signInUserHandler}>Sing In</button>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
export default SingIn