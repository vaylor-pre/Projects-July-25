import React, { useEffect, useState } from "react";

const heroImages = [
  "imagen/hero.png",
  "imagen/hero2.png",
  "imagen/hero3.png",
  "imagen/hero4.png",
  "imagen/hero5.png",
];

const HeroSection: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000); // 6 seconds

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  return (
    <div
      className="relative h-screen bg-cover bg-center transition-all duration-1000 ease-in-out"
      style={{ backgroundImage: `url(${heroImages[currentImageIndex]})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-20 z-0"></div>

      {/* Content */}
      <div className="relative py-20 px-4 z-10">
        <h1 className="text-5xl text-white font-bold mb-6 mt-20 max-w-2xl ml-6">
          Make money while doing what you love
        </h1>
        <h2 className="text-3xl font-semibold mb-4 text-white ml-8">
          Dubai's Calling
        </h2>

        <button className="absolute bottom-4 left-4 bg-deepBlue text-xl font-semibold text-white px-8 py-2 rounded-full hover:bg-blue-700 ml-6">
          Start Investing
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
