import { Component } from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Swal from 'sweetalert2'
import axios from "axios"

class SingUp extends Component{
    state={
        country:[],
        data:{name:'',lastName:'',mail:'',password:'',src:'',country:''}
    }
    componentDidMount(){
        window.scroll(0, 0)
        document.title='Mytinerary - SingUp'
        axios.get('https://restcountries.eu/rest/v2/all?fields=name')
        .then(res =>this.setState({country:res.data}))
        .catch(err => console.log(err))
    }
  
    render(){
        let opCountry = this.state.country.map((obj, index) => <option key={index} value={obj.name}>{obj.name}</option>)
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
        const addNewUserHandler=()=>{
            if(Object.values(this.state.data).some((value)=> value === '')){
                message('Missing data')
            }else{
                axios.post('http://localhost:4000/api/user/signup', this.state.data)
                .then(res=>{
                    if(res.data.success){
                        message('User created')
                        this.setState({data:{}})
                    }else{
                        message(res.data.res)
                    }
                })
                .catch(()=>message('Oops! There is an error, try again later'))
            }
        }

        return(
            <div className='mainform' style={{backgroundImage:`url("/assets/fondoerror.jpg")`}}>
                <Header/>
                <div className='mainSing'>
                    <div className='cardForm'>
                        <h2>Join to our World of Adventures!</h2>
                        <p>Already have an account? <Link to='/signin'>Sign In</Link></p>
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
export default SingUp