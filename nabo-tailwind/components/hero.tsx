import React, { useState } from "react";
import HeroSection from "./herobanner";

const navLinks = [
  "Individual",
  "Institutional",
  "Advisory",
  "About Us",
  "Investor's Companion",
  "Calculator",
];

const HeroPage: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Navigation Bar */}
      <nav className="flex items-center justify-between h-20 px-6 relative">
        <img src="imagen/nabo-logo.png" alt="Logo" className="w-auto h-12" />

        <div className="hidden md:flex flex-1 justify-between items-center">
          <div className="flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="font-medium text-deepBlue hover:text-blue-600"
              >
                {link}
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-6">
            <a
              href="#"
              className="font-medium px-4 py-2 bg-skyAccent hover:bg-blue-400 rounded-full flex items-center text-white"
            >
              I want to...
            </a>
            <a
              href="#"
              className="font-medium text-deepBlue border-2 border-deepBlue rounded-full px-4 py-2 hover:bg-blue-50 transition-colors"
            >
              Log In
            </a>
            <a
              href="#"
              className="bg-deepBlue text-white px-4 py-2 rounded-full hover:bg-blue-900 transition-colors"
            >
              Open an Account
            </a>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <button
          id="menu-btn"
          className="block md:hidden focus:outline-none z-50 relative"
          onClick={toggleMenu}
        >
          <span className="block w-6 h-0.5 bg-black mb-1"></span>
          <span className="block w-6 h-0.5 bg-black mb-1"></span>
          <span className="block w-6 h-0.5 bg-black"></span>
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            id="menu"
            className="absolute top-20 left-6 right-6 bg-white drop-shadow-md z-40 flex flex-col items-center space-y-6 py-8 font-bold md:hidden"
          >
            {navLinks.map((link) => (
              <a key={link} href="#" className="text-deepBlue">
                {link}
              </a>
            ))}
            <a href="#" className="text-deepBlue">
              Log In
            </a>
            <a href="#" className="text-deepBlue">
              Open an Account
            </a>
          </div>
        )}
      </nav>

      <div className="border-2 border-deepBlue"></div>

      {/* Stats Bar */}
      <div className="bg-gray-100 py-3 px-6 h-12 text-sm overflow-hidden relative">
        <div className="whitespace-nowrap animate-marquee flex space-x-16">
          <div>
            <span className="font-semibold">Current Treasury Bond Rate:</span>{" "}
            11.25%
          </div>
          <div>
            <span className="font-semibold">Money Market Fund:</span> 9.8%
          </div>
          <div>
            <span className="font-semibold">Inflation Rate:</span> 6.3%
          </div>
          <div className="text-deepBlue">Updated May 14, 2025</div>

          {/* Duplicate for seamless loop */}
          <div>
            <span className="font-semibold">Current Treasury Bond Rate:</span>{" "}
            11.25%
          </div>
          <div>
            <span className="font-semibold">Money Market Fund:</span> 9.8%
          </div>
          <div>
            <span className="font-semibold">Inflation Rate:</span> 6.3%
          </div>
          <div className="text-deepBlue">Updated May 14, 2025</div>
        </div>
      </div>

      <div className="border-2 border-deepBlue"></div>

      <HeroSection />

      {/* Call to Action */}
      <div className="flex flex-col items-center justify-center bg-deepBlue px-4 text-center">
        <button className="bg-skyAccent hover:bg-sky-500 py-4 px-6 rounded-2xl mt-8 mb-6 text-white text-2xl font-bold">
          Start Investing With Purpose
        </button>
        <h1 className="text-white text-3xl font-bold mb-6">
          Investing for everything it's worth.
        </h1>
        <h3 className="text-white">
          Whether you are saving for smaller moments or the big ones....
        </h3>
        <h3 className="text-white mb-12">we are here for you.</h3>
      </div>
    </div>
  );
};

export default HeroPage;
