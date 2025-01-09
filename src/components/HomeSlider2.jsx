import React, { useState, useEffect } from "react";
import imaghome from "../assets/images/Rectangle 884.png";
import imgside from "../assets/images/Rectangle 885.png";

const HomeSlider2 = () => {
  const slides = [
    { id: 1, image: imaghome },
    { id: 2, image: "https://photographylife.com/wp-content/uploads/2023/05/Nikon-Z8-Official-Samples-00002.jpg" },
    { id: 3, image: "https://media.gettyimages.com/id/155279804/photo/abstract-swirl-pattern-of-rainbow-color-spectrum.jpg?s=612x612&w=gi&k=20&c=pULdZiwt7b-Zjbb3nAjibOIgx0Vx22jEu-BTRUYDuXY=" },
    { id: 4, image: "https://img.photographyblog.com/reviews/kodak_pixpro_fz201/photos/kodak_pixpro_fz201_01.jpg" },
    { id: 5, image: "data:image/jpeg;base64,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" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const autoplayInterval = 3000; // 3 seconds

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, autoplayInterval);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div id="centered" className="relative w-full md:h-[500px] h-[300px] overflow-hidden">
      {/* Carousel Container */}
      <div className="carousel relative flex justify-center items-center h-full">
        {slides.map((slide, index) => {
          const isActive = index === currentIndex;
          const isPrev = index === (currentIndex - 1 + slides.length) % slides.length;
          const isNext = index === (currentIndex + 1) % slides.length;

          return (
            <div
              key={slide.id}
              className={`absolute transition-all duration-500 ease-in-out ${
                isActive
                  ? "md:h-[600px] h-[300px] w-10/12 md:w-9/12 z-10 scale-105 opacity-100"
                  : isPrev || isNext
                  ? "h-80 w-8/12 z-5 scale-95 opacity-75"
                  : "h-64 w-6/12 z-0 scale-90 opacity-50"
              }`}
              style={{
                left: isActive
                  ? "50%"
                  : isPrev
                  ? "20%"
                  : isNext
                  ? "80%"
                  : "-100%",
                transform: "translateX(-50%)",
              }}
            >
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="h-full w-full object-cover rounded-lg shadow-md"
              />
            </div>
          );
        })}
      </div>

      {/* Previous Button */}
      <button
        type="button"
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20"
      >
        <span className="bg-white flex items-center justify-center w-10 h-10 rounded-full shadow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </span>
        <span className="sr-only">Previous</span>
      </button>

      {/* Next Button */}
      <button
        type="button"
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20"
      >
        <span className="bg-white flex items-center justify-center w-10 h-10 rounded-full shadow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </span>
        <span className="sr-only">Next</span>
      </button>
    </div>
  );
};

export default HomeSlider2;
