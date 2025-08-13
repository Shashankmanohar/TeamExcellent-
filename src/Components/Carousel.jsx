import React, { useState, useEffect } from 'react'
import Banner1 from '../assets/Banner_1.webp'
import Banner2 from '../assets/Banner_2.webp'
import Banner3 from '../assets/Banner_3.webp'

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides = [
    {
      id: 1,
      image: Banner1
    },
    {
      id: 2,
      image: Banner2
    },
    {
      id: 3,
      image: Banner3
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [slides.length])

  const goToSlide = (index) => setCurrentSlide(index)
  const goToPrevious = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  const goToNext = () => setCurrentSlide((prev) => (prev + 1) % slides.length)

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
             <div className="relative w-full h-[120px] md:h-[250px] overflow-hidden rounded-lg shadow-lg">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
                     <div 
             className="w-full h-full bg-cover bg-center"
             style={{ backgroundImage: `url(${slide.image})` }}
           >
           </div>
        </div>
      ))}

                           <button
          onClick={goToPrevious}
          className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-[#5B2D7CFF] bg-opacity-50 hover:bg-opacity-75 text-white p-1 md:p-3 rounded-full"
        >
          <svg className="w-3 h-3 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={goToNext}
          className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-[#5B2D7CFF] bg-opacity-50 hover:bg-opacity-75 text-white p-1 md:p-3 rounded-full"
        >
          <svg className="w-3 h-3 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

             <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
         {slides.map((_, index) => (
           <button
             key={index}
             onClick={() => goToSlide(index)}
             className={`w-3 h-3 rounded-full transition-all ${
               index === currentSlide ? 'bg-white scale-125' : 'bg-white bg-opacity-50'
             }`}
           />
         ))}
       </div>
      </div>
    </div>
  )
} 