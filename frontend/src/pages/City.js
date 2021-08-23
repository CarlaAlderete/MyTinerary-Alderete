import {Component} from "react"
import {Link} from "react-router-dom"
import Footer from "../components/Footer"
import Itinerary from "../components/Itinerary"
import HeroPag from "../components/HeroPag"
import {connect} from 'react-redux'
import citiesActions from "../redux/actions/citiesActions"
import itinerariesActions from "../redux/actions/itinerariesActions"

class City extends Component{
    state = {
            loading: true,
            title: 'Loading...',
            error: '',
            back: ''
    }
    componentDidMount() {
        window.scroll(0, 0)
        if(!this.props.newcities.length){
            this.props.takeOneCity(this.props.match.params.id)
            .then(res =>{
                if(!res.success){
                    this.setState({title:'No information to show', error:`Error: ${res.res}`, back:'Back to the Cities'})
                }else{
                    this.props.getItineraries(this.props.match.params.id)
                    .then(()=> this.setState({loading:false}))
                }
            })
        }else{
            this.props.getOneCity(this.props.match.params.id)
            this.props.getItineraries(this.props.match.params.id)
            .then(()=> this.setState({loading:false}))
        }
    };
    render(){
        if(this.state.loading){
            return(
                <div className='errorInfo' style={{backgroundImage:`url("/assets/fondoerror.jpg")`}}>
                    <div className='error'>
                        <h1>{this.state.title}</h1>
                        <p>{this.state.error}</p>
                        <Link to='/cities'>{this.state.back}</Link>
                    </div>
                </div>
            )
        }
        document.title=`Mytinerary - ${this.props.city.city}`
        let itineraries =!this.props.itineraries.length
            ? <div className='nullItineraries' style={{backgroundImage:`url("/assets/fondoerror.jpg")`}}><h2>There are not itinerary yet!</h2></div>
            :this.props.itineraries.map((obj,index) => <Itinerary key={index}itinerary={obj}/>)
        return(
            <div className='cityAll'>
                <HeroPag photo={this.props.city.photo}/>
                <div className='cityOnly' style={{backgroundImage:`url("/assets/fondomain2.png")`,}}>
                    <h1>{this.props.city.city}</h1>
                    <div className='descrGr'>
                        <p data-aos="fade-right">{this.props.city.description}</p>
                        <div className='descr' data-aos="fade-left" style={{backgroundImage:`url("/assets/${this.props.city.photoDescription}")`,}}></div>
                    </div>
                    <h2>Here are some of our Itineraries!</h2>
                    {itineraries}
                    <Link to='/cities'>
                        <button>Back to the Cities</button>
                    </Link>
                </div>
                <Footer/>
            </div>
        )
    }
}
const mapStateToProps= (state)=>{
    return{
        city:state.cities.city,
        newcities : state.cities.cities,
        itineraries: state.itineraries.itineraries
    }
}
const mapDispatchToProps={
    getOneCity:citiesActions.getOneCity,
    takeOneCity:citiesActions.takeOneCity,
    getItineraries:itinerariesActions.getItineraries
}
export default connect(mapStateToProps, mapDispatchToProps)(City)