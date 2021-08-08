import Hero from '../components/Hero'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Info from '../components/Info'
import CallAction from '../components/CallAction'
import MyCarousel from '../components/MyCarousel'
import React from 'react'

export default class Home extends React.Component{
    render(){
        return(
            <>
            <Header/>
            <Hero />
            <Info/>
            <div className='carouselFondo'style={{backgroundImage:`url("/assets/fondo2.png")`,}}>
                <MyCarousel/>
            </div>
            <CallAction/>
            <Footer/>
            </>
        )
    }
}