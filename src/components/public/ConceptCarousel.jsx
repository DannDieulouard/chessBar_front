import { useState } from 'react';
import "../public/css/carousel.css";
import img_concept1 from '../../components/public/images/concept/concept1.png';
import img_concept2 from '../../components/public/images/concept/concept2.png';
import img_concept3 from '../../components/public/images/concept/concept3.png';

const images = [
  img_concept1,
  img_concept2,
  img_concept3
];

const ConceptCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
    <div className="carousel">
        <button className="previous" onClick={prevSlide}></button>
        <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
        <button className="next" onClick={nextSlide}></button>
    </div>
    );
};

export default ConceptCarousel;
