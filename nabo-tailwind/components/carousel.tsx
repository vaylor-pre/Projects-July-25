import React, { useState, useEffect } from "react";
import type { Testimonial } from "../utils/types";

const testimonials: Testimonial[] = [
  {
    image: "imagen/photo2.png",
    quote:
      "The thing I love about Nabo is that you are not just interested in my money; you are interested in my mind, and my purpose.",
    name: "Coach Eileen",
    title: "Long-term Investor",
  },
  {
    image: "imagen/photo4.png",
    quote:
      "Nabo helped me realize my financial goals without stress. They walked the journey with me.",
    name: "James Kariuki",
    title: "Entrepreneur",
  },
  {
    image: "imagen/photo3.png",
    quote:
      "Investing with Nabo has been the best decision for my retirement plans. Transparent and reliable!",
    name: "Grace Mwende",
    title: "Retiree",
  },
];

const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const testimonial = testimonials[currentIndex];

  return (
    <div className="w-full px-4">
      <div className="flex flex-col md:flex-row items-stretch mt-6 rounded-3xl bg-gray-200 transition-all duration-700 ease-in-out">
        <div className="w-full md:w-1/3">
          <img
            src={testimonial.image}
            alt=""
            className="rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none w-[450px] h-[300px] object-cover"
          />
        </div>

        <div className="w-full md:w-2/3 flex flex-col items-stretch px-6 py-8 text-center md:text-left">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold italic text-deepBlue mt-4">
            “{testimonial.quote}”
          </h3>
          <h3 className="text-lg md:text-2xl lg:text-3xl text-deepBlue mt-6 font-bold">
            {testimonial.name}
          </h3>
          <h3 className="text-base md:text-xl lg:text-2xl text-deepBlue font-semibold">
            {testimonial.title}
          </h3>
        </div>
      </div>

      <div className="flex items-center justify-center mt-6 gap-3">
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              currentIndex === index ? "bg-skyAccent" : "bg-gray-400"
            }`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="flex justify-center gap-12 mt-6 mb-12 lg:hidden">
        {["Vector (11)", "Vector (12)"].map((vector, idx) => (
          <div key={idx} className="relative h-12 w-12 md:h-20 md:w-20">
            <img
              src="imagen/Ellipse 9.png"
              alt=""
              className="absolute inset-0 z-0 cursor-pointer"
              onClick={idx === 0 ? prevSlide : nextSlide}
            />
            <img
              src={`imagen/${vector}.png`}
              alt=""
              className="absolute h-6 w-6 inset-0 m-auto z-10 cursor-pointer"
              onClick={idx === 0 ? prevSlide : nextSlide}
            />
          </div>
        ))}
      </div>

      {/* Desktop Navigation Arrows */}
      <div className="hidden lg:flex flex-row mt-8 mb-16 gap-200 items-center justify-center">
        {["Vector (11)", "Vector (12)"].map((vector, idx) => (
          <div key={idx} className="relative h-20 w-20">
            <img
              src="imagen/Ellipse 9.png"
              alt=""
              className="absolute inset-0 z-0 cursor-pointer"
              onClick={idx === 0 ? prevSlide : nextSlide}
            />
            <img
              src={`imagen/${vector}.png`}
              alt=""
              className="absolute inset-0 m-auto z-10 cursor-pointer"
              onClick={idx === 0 ? prevSlide : nextSlide}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
