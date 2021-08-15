import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter, Route, Switch,Redirect} from 'react-router-dom';
import Home from './pages/Home';
import Cities from './pages/Cities'
import Pag404 from './pages/Pag404'
import City from './pages/City'
import {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () =>{
  useEffect(() =>{
    AOS.init({duration: 2600});
},[])

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/cities' component={Cities}/>
        <Route path='/itinerary/:id' component={City}/>
        <Route path='/Error404' component={Pag404}/>
        <Redirect to='/Error404'/>
      </Switch>
    </BrowserRouter>
  )
}
export default App;
