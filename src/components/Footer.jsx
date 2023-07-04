import "./Footer.css";
import imagefb from '../assets/fb.png';
import imageig from '../assets/ig.png';
import imagewp from '../assets/wapp.png';
import imagetw from '../assets/twitter.png';
import imagelogo from '../../public/Logo.jpg';

const Footer = () => {
  return (
    <>
    <div className="main">
        <div className="firstbox">
        <img className="wp" src={imagelogo} alt="logo" />
        </div>
        <div className="secondbox">
            <p>FOLLOW US </p>
            <div className="innersecond">
        <img  className="wp" src={imagefb} alt="logo" />
        <img  className="ig" src={imageig} alt="logo" />
        <img  className="wp" src={imagetw} alt="logo" />
        </div>
        </div>
        <div className="thirdbox">   
             <p>CONTACT US</p>
        <img className="wp" src={imagewp} alt="logo" />
        </div>
    </div>
    
    
    </>
  )
}

export default Footer