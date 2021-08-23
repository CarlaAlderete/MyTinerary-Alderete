import Header from "./Header"

const HeroPag = ({photo})=>{
    return(
        <div className='heroCities' style={{backgroundImage:`url("/assets/${photo}")`,}}>
            <Header/>
            <div className='herocitiesLogo'>
                <img src='/assets/logo.png' alt='logo'/>
            </div>
        </div>
    )
}
export default HeroPag