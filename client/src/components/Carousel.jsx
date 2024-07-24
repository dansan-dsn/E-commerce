import React, { useEffect, useState } from "react";
import image1 from "../assets/images/b1.jpg";
import image2 from "../assets/images/back1.jpg";
import image3 from "../assets/images/back2.jpg";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const images = [image1, image2, image3, image1, image1];

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => nextSlide(), 2000);
      return () => clearInterval(interval);
    }
  }, [isPaused, currentIndex]);

  return (
    <div
      className="relative w-full max-full mx-auto overflow-hidden mt-3 bg-gray-200"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="flex transition-transform duration-500 ease-in-out transform "
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            // alt={`Slide ${index}`}
            alt={`Slide ${index}`}
            className="w-full h-72 flex-shrink-0 p-3 rounded-3xl object-cover"
            loading="lazy"
          />
        ))}
      </div>
      <button
        className="absolute top-1/2 left-0 transfrom -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        onClick={prevSlide}
      >
        &#10094;
      </button>
      <button
        className="absolute top-1/2 right-0 transfrom -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        onClick={nextSlide}
      >
        &#10095;
      </button>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-4">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 mx-1 rounded-full ${
              currentIndex === index ? "bg-blue-500" : "bg-gray-300"
            }`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
