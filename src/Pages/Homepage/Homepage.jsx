import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar"
import Order from "../../components/Order/Order";
import Slider from "../../components/Slider/Slider";

const Homepage = () => {
    return(
        <div className="home">
            <Navbar/>
            <Slider/>
            <Order/>
            <Footer/>
        </div>
    )
}

export default Homepage