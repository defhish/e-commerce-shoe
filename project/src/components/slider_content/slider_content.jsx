import { useState } from 'react';
import "./slider_content.css";

const ImageSlider = ({ slides }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const goToNextSlide = () => {
    const newIndex = (currentSlideIndex + 1) % slides.length;
    setCurrentSlideIndex(newIndex);
  };

  const goToPreviousSlide = () => {
    const newIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    setCurrentSlideIndex(newIndex);
  };

  return (
    <div className="image-slider">
     
    <div className="left active">
      <span className='title'>{slides[currentSlideIndex].title}</span>
      <p className="subtitle">{slides[currentSlideIndex].subtitle}</p>
      <h3 className='decscription'>{slides[currentSlideIndex].description}</h3>
      <button onClick={goToPreviousSlide} className='prev'><i>&#8592;</i></button>
      <a href="#" className='btn'>Add To Card</a>
    </div>

    <div className="right">
      <div className="slide">
        <img src={slides[currentSlideIndex].url} alt={slides[currentSlideIndex].description} className='shoe'/>
        <button onClick={goToNextSlide} className='next'><i>&#8594;</i></button>
      </div>
    </div>
      
    </div>
  );
};

export default ImageSlider;
