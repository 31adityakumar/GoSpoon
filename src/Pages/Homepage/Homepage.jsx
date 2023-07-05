import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar/Navbar"
import Slider from "../../components/Slider";

const Homepage = () => {
    return(
        <div className="home">
            <Navbar/>
            <Slider/>
            <Footer/>
        </div>
    )
}

export default Homepage;