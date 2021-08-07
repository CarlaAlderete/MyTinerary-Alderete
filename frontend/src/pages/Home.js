import Hero from '../components/Hero'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Info from '../components/Info'
import CallAction from '../components/CallAction'
import MyCarousel from '../components/MyCarousel'


const Home = () =>{
    return(
        <>
        <Header/>
        <Hero />
        <Info/>
        <MyCarousel/>
        <CallAction/>
        <Footer/>
        </>
    )
}

export default Home