import React from "react";
import type { PurposeCardProps } from "../utils/types";
import TestimonialCarousel from "./carousel";

const PurposeCard: React.FC<PurposeCardProps> = ({
  image,
  title,
  description,
  buttonMargin = "mt-4",
}) => (
  <div className="flex flex-col text-center rounded-md bg-gray-200 shadow-sm overflow-hidden">
    <img src={image} alt="" className="h-52 w-full object-cover" />
    <div className="p-4">
      <h1 className="text-deepBlue text-xl sm:text-2xl font-bold mt-2">
        {title}
      </h1>
      <h2 className="text-deepBlue mt-2 text-sm sm:text-base">{description}</h2>
      <button
        className={`font-medium text-deepBlue border-2 border-deepBlue rounded-full bg-white ${buttonMargin} px-6 py-2 mt-4 hover:bg-blue-50 transition-colors`}
      >
        Explore More
      </button>
    </div>
  </div>
);

const PurposeSection: React.FC = () => {
  const cards = [
    {
      image: "imagen/item1.png",
      title: "Afford the life I want",
      description:
        "Whether you are building wealth, securing your future or planning for a milestone, intentional saving sets the foundation for financial freedom.",
    },
    {
      image: "imagen/item2.png",
      title: "Afford school for my kids.",
      description:
        "We will help you build a smart savings plan for education, without the stress.",
      buttonMargin: "mt-6",
    },
    {
      image: "imagen/item3.png",
      title: "Travel the world.",
      description:
        "Explore the world without financial worries. Save intentionally for unforgettable memories.",
      buttonMargin: "mt-6",
    },
    {
      image: "imagen/item4.png",
      title: "Retire Comfortably.",
      description:
        "Retire on your terms. Build a financial cushion that lets you enjoy life’s golden years with peace and pride.",
      buttonMargin: "mt-6",
    },
  ];

  return (
    <div className="px-4 sm:px-6 md:px-12">
      {/* Section Heading */}
      <div className="text-center mt-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-deepBlue">
          Money isn’t the goal.{" "}
          <span className="text-blue-500">Purpose is.</span>
        </h1>
        <h1 className="text-2xl sm:text-4xl mt-4 text-gray-800 font-semibold">
          What do you want your money to do for you?
        </h1>
      </div>

      {/* Sub-heading */}
      <h3 className="mt-12 text-xl sm:text-2xl font-medium text-gray-800">
        I want to….
      </h3>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {cards.map((card, idx) => (
          <PurposeCard key={idx} {...card} />
        ))}
      </div>

      <div className="bg-deepBlue rounded-lg flex flex-col lg:flex-row items-center mt-20 p-6 gap-6">
        <div className="lg:w-2/3 flex flex-col justify-between text-white">
          <h1 className="text-3xl sm:text-4xl font-bold mt-4">
            Why This Is For You
          </h1>
          <h2 className="text-lg sm:text-2xl mt-6">
            At Nabo Capital, we invest with purpose. In this video, Pius
            Muchiri, our CEO, explains how we tailor our investment solutions to
            meet your unique goals, whether you are an individual or an
            institution.
          </h2>
          <button className="text-deepBlue bg-sky-400 rounded-full font-bold px-6 py-2 text-lg mt-6 w-fit">
            Watch Video
          </button>
        </div>
        <div className="lg:w-1/3 w-full">
          <img
            src="imagen/photo1.png"
            alt=""
            className="rounded-lg object-cover w-full h-full max-h-108"
          />
        </div>
      </div>

      {/* Testimonial Heading */}
      <div className="mt-20 text-center">
        <h1 className="text-3xl sm:text-5xl text-deepBlue font-bold">
          What Our Investors Have to Say...
        </h1>
        <h3 className="text-xl sm:text-3xl font-semibold text-deepBlue mt-6">
          Hear from investors who have trusted us with their global investment
          journey.
        </h3>
      </div>

      {/* Testimonial Carousel */}
      <TestimonialCarousel />
    </div>
  );
};

export default PurposeSection;
