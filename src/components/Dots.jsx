import PropTypes from 'prop-types';

function Dots({ activeIndex, onclick, landingSlider }) {
  return (
    <div className="all-dots">
      {landingSlider.map((slide, index) => (
        <span
          key={index}
          className={`${activeIndex === index ? "dot active-dot" : "dot"}`}
          onClick={() => onclick(index)}
        ></span>
      ))}
    </div>
  );
}

Dots.propTypes = {
  activeIndex: PropTypes.number.isRequired,
  onclick: PropTypes.func.isRequired,
  landingSlider: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Dots;
