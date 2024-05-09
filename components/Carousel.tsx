"use client";

import Image from "next/image";
import React, { useState } from "react";

interface CarouselProps {
  slides: Slide[];
}

interface Slide {
  src: string;
  text: string;
  name: string;
  country: string;
}

const Carousel = ({ slides }: CarouselProps) => {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  const handlePrev = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  return (
    <div className="relative w-full h-[400px] max-w-[400px] overflow-hidden rounded-2xl">
      <div
        className="flex transition duration-300 ease-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className="relative h-full min-h-fit w-full flex-shrink-0"
          >
            <Image
              src={slide.src}
              alt={`Slideshow image ${i + 1}`}
              fill
              className="object-cover min-h-[400px]"
            />
            <div className="absolute left-0 top-44 flex h-96 w-full flex-col gap-2 bg-gray-800/[0.6] p-4 text-white lg:gap-4">
              <p>{slide.text}</p>
              <div className="flex justify-between">
                <h1 className="text-xl font-semibold">{slide.name}</h1>
                <div className="hidden lg:flex">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <Image
                        key={i}
                        width={50}
                        height={50}
                        src="/assets/icons/star.svg"
                        className="h-5 w-5"
                        alt=""
                      />
                    ))}
                </div>
              </div>
              <h2>{slide.country}</h2>
            </div>
          </div>
        ))}
      </div>
      <Image
        onClick={handlePrev}
        className="absolute bottom-5 right-16 h-7 w-7 rounded-full border p-1 hover:cursor-pointer"
        src="/assets/icons/arrow_back.svg"
        alt="Previous slide button"
        width={24}
        height={24}
      />
      <Image
        onClick={handleNext}
        className="absolute bottom-5 right-5 h-7 w-7 rounded-full border p-1 hover:cursor-pointer"
        src="/assets/icons/arrow_forward.svg"
        alt="Next slide button"
        width={24}
        height={24}
      />
    </div>
  );
};

export default Carousel;
