import React, { useState, useEffect } from "react";
import Banner1 from "../assets/Banner_1.webp";
import Banner2 from "../assets/Banner_2.webp";
import Banner3 from "../assets/Banner_3.webp";

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { id: 1, image: Banner1, alt: "Promotional Banner 1" },
    { id: 2, image: Banner2, alt: "Promotional Banner 2" },
    { id: 3, image: Banner3, alt: "Promotional Banner 3" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => setCurrentSlide(index);
  const goToPrevious = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const goToNext = () =>
    setCurrentSlide((prev) => (prev + 1) % slides.length);

  return (
    <div className="max-w-7xl mx-auto px-2 py-4 sm:px-4  mt-30 sm:py-6">
      {/* ====== Heading Section ====== */}
      <div className="text-center mt-8 mb-6">
        <h1 className="text-4xl sm:text-6xl font-bold text-[#522871]">
          Team Excellent
        </h1>
        <div className="w-40 h-1 bg-purple-600 mx-auto mt-2 rounded"></div>
        <p className="text-gray-700 mt-2 text-sm sm:text-base">
          Shaping Young Minds for{" "}
          <span className=" text-[#b72e2f] font-semibold">IIT-JEE <span className="text-[#522871]">&</span> NEET</span>{" "}
          Success
        </p>
      </div>

      {/* ====== Carousel Section ====== */}
      <div
        className="relative w-full 
        h-[100px] sm:h-[120px] md:h-[150px] lg:h-[290px] xl:h-[320px] 
        overflow-hidden rounded-lg shadow-md"
      >
        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        {/* Prev button */}
        <button
          onClick={goToPrevious}
          aria-label="Previous Slide"
          className="absolute left-1 sm:left-2 md:left-4 top-1/2 transform -translate-y-1/2 
          bg-[#5B2D7C] bg-opacity-50 hover:bg-opacity-75 text-white 
          p-1 sm:p-2 md:p-3 rounded-full"
        >
          <svg
            className="w-2 h-2 sm:w-4 sm:h-4 md:w-6 md:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Next button */}
        <button
          onClick={goToNext}
          aria-label="Next Slide"
          className="absolute right-1 sm:right-2 md:right-4 top-1/2 transform -translate-y-1/2 
          bg-[#5B2D7C] bg-opacity-50 hover:bg-opacity-75 text-white 
          p-1 sm:p-2 md:p-3 rounded-full"
        >
          <svg
            className="w-2 h-2 sm:w-4 sm:h-4 md:w-6 md:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Dots */}
        <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentSlide}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
                index === currentSlide
                  ? "bg-white scale-110"
                  : "bg-white bg-opacity-50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
