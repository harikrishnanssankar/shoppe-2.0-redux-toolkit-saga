import Banner from "../components/Banner/Banner"
import Header from "../components/Header/Header"
import ProductList from "../components/ProductList/ProductList"
import './Home.css'

const Home = () => {
    return (
        <div id='home' className='home__container' >
            <Header/>
            <Banner/>    
            <ProductList/>      
        </div>

    )
}

export default Home
