import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import {BrowserRouter, Route, Switch,Redirect} from 'react-router-dom'
import Home from './pages/Home'
import Cities from './pages/Cities'
import Pag404 from './pages/Pag404'
import SignIn from './pages/SignIn'
import SingUp from './pages/SingUp'
import City from './pages/City'
import {useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {connect} from 'react-redux'
import userActions from './redux/actions/userActions'

const App = ({tokenUser, forcedSignIn}) =>{
  useEffect(() =>{
    AOS.init({duration: 2600})
    if(localStorage.getItem('token')){
      forcedSignIn(localStorage.getItem('name'),localStorage.getItem('photo'),localStorage.getItem('token'))
    }
},[])
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/cities' component={Cities}/>
        <Route path='/itinerary/:id' component={City}/>
        <Route path='/Error404' component={Pag404}/>
        {!tokenUser &&<Route path='/signin' component={SignIn}/>}
        {!tokenUser && <Route path='/signup' component={SingUp}/>}
        {!tokenUser && <Redirect to='/Error404'/>}
        {tokenUser && <Redirect to='/'/>}
      </Switch>
    </BrowserRouter>
  )
}
const mapStateToProps=(state)=>{
  return{
    tokenUser:state.user.user.token
  }
}
const mapDispatchToProps={
  forcedSignIn:userActions.forcedSignIn
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
