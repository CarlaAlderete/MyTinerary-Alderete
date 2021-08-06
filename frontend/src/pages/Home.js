import Hero from '../components/Hero'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Info from '../components/Info'
import MyCarousel from '../components/MyCarousel'


const Home = () =>{
    return(
        <>
        <Header/>
        <Hero />
        <Info/>
        <MyCarousel/>
        <Footer/>
        </>
    )
}

export default Home