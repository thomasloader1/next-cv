"use client";
import React, { useState } from "react";

interface HorinzontalPaginatorProps {
  slides: React.ReactNode[];
}

const HorinzontalPaginator: React.FC<HorinzontalPaginatorProps> = ({
  slides,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className="grid grid-cols-2 grid-rows-[1fr_auto]">
      <div className="col-span-2 p-2 xl:p-16 flex items-center">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`transform transition-opacity duration-300 ${
              index !== currentIndex && "hidden"
            }`}
          >
            {slide}
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="px-4 py-2 m-2 text-white bg-blue-500 rounded"
      >
        Previous
      </button>
      <button
        onClick={nextSlide}
        className="px-4 py-2 m-2 text-white bg-blue-500 rounded"
      >
        Next
      </button>
    </div>
  );
};

export default HorinzontalPaginator;
