import PropTypes from 'prop-types';
import '../Slider/slider.css'
function SliderContent({ activeIndex, sliderImage }) {
  return (
    <section>
      {sliderImage.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <img className="slide-image" src={slide.urls} alt="" />
          <h3 className="slide-text">
          {slide.description}{' '} <br />
            {slide.additionalText && (
              <span className="additional-text">{slide.additionalText}</span>
            )} <br />
            {slide.additionalText2 && (
              <span className="additional-text2">{slide.additionalText2}</span>
            )}
          </h3>
        </div>
      ))}
    </section>
  );
}

SliderContent.propTypes = {
  activeIndex: PropTypes.number.isRequired,
  sliderImage: PropTypes.arrayOf(
    PropTypes.shape({
      urls: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SliderContent;
