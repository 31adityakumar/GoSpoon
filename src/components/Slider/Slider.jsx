import  { useEffect, useState } from "react";

import SliderContent from "./SliderContent";
import Dots from "../Corousel/Dots";
import Arrows from "../Corousel/Arrows";
import landingSlider from "./landingSlider";
import "./slider.css";

const len = landingSlider.length - 1;

function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="slider-container">
      <SliderContent activeIndex={activeIndex} sliderImage={landingSlider} />
      <Arrows
        prevSlide={() =>
          setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
        }
        nextSlide={() =>
          setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
        }
      />
      <Dots
        activeIndex={activeIndex}
        landingSlider={landingSlider}
        onclick={(activeIndex) => setActiveIndex(activeIndex)}
      />
    </div>
  );
}

Slider.propTypes = {
  
};

export default Slider;
