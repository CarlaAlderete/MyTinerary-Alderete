import Hero from '../components/Hero'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Info from '../components/Info'
import CallAction from '../components/CallAction'
import MyCarousel from '../components/MyCarousel'
import React from 'react'

export default class Home extends React.Component{
    componentDidMount(){
        window.scroll(0, 0)
        document.title='Mytinerary - Home'
    }
    render(){
        return(
            <>
            <Header/>
            <Hero />
            <div className='homeDiv' style={{backgroundImage:`url("/assets/fondomain2.png")`,}}>
                <Info/>
                <div className='carouselFondo'style={{backgroundImage:`url("/assets/fondo2.png")`,}}>
                    <MyCarousel/>
                </div>
                <CallAction/>
            </div>
            <Footer/>
            </>
        )
    }
}