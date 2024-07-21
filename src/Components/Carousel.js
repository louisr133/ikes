import React, { useState, useEffect } from 'react';
import '../Styles/Carousel.css';

const Carousel = ({ images, autoScrollInterval = 3000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            goToNext();
        }, autoScrollInterval);

        return () => clearInterval(interval);
    }, [currentIndex]);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="carousel">
            <div className="carousel-inner" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((image, index) => (
                    <div className="carousel-item" key={index}>
                        <div className="image-container">
                            <img src={image} alt={`Slide ${index}`} className="main-image" />
                            <img src={image} alt={`Slide ${index} blurred`} className="blurred-background" />
                        </div>
                    </div>
                ))}
            </div>
            <button className="carousel-button left" onClick={goToPrevious}>❮</button>
            <button className="carousel-button right" onClick={goToNext}>❯</button>
            <div className="carousel-thumbnails">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Thumbnail ${index}`}
                        className={`thumbnail ${currentIndex === index ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
