import "./Footer.css";
import Data from "../../assets/Data/Data.json";
const Footer = () => {
  return (
    <>
      {Data.map((data) => {
        return (
          <div className="main" key={data.id}>
            <div className="firstbox">
              <img className="logo" src={data.logo} alt="logo" />
            </div>
            <div className="secondbox">
              <p>FOLLOW US </p>
              <div className="innersecond">
                <a href="/">
                  <img className="wp" src={data.fb} alt="logo" />
                </a>
                <a href="https://instagram.com/gospoon_?igshid=OGQ5ZDc2ODk2ZA==" target="blank">
                  <img className="ig" src={data.ig} alt="logo" />
                </a>
                <a href="/">
                  <img className="wp" src={data.twitter} alt="logo" />
                </a>
              </div>
            </div>
            <div className="thirdbox">
              <p>CONTACT US</p>
              <a href="https://wa.me/message/OR7YNT2KJVPIF1" target="blank">
                <img className="wp" src={data.wapp} alt="logo" />
              </a>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Footer;
