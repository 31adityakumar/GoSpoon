import "./Footer.css";
import Data from "../../assets/Data/Data.json";
const Footer = () => {
  return (
    <>
      {Data.map((data) => {
        return (
          <div className="main" key={data.id}>
            <div className="firstbox">
              <img className="wp" src={data.logo} alt="logo" />
            </div>
            <div className="secondbox">
              <p>FOLLOW US </p>
              <div className="innersecond">
                <img className="wp" src={data.fb} alt="logo" />
                <img className="ig" src={data.ig} alt="logo" />
                <img className="wp" src={data.twitter} alt="logo" />
              </div>
            </div>
            <div className="thirdbox">
              <p>CONTACT US</p>
              <img className="wp" src={data.wapp} alt="logo" />
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Footer;
