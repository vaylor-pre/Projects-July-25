import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaApple,
  FaGooglePlay,
} from "react-icons/fa";

const Footer: React.FC = () => {
  const downloadButtons = [
    {
      icon: <FaApple className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-white" />,
      label: "Download on the App Store",
    },
    {
      icon: (
        <FaGooglePlay className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-blue-400" />
      ),
      label: "Get it on Google Play",
    },
  ];

  const footerLinks = [
    {
      title: "Explore",
      links: [
        "About Us",
        "Individual Investment",
        "Institutional Investment",
        "Tools & Resources",
      ],
    },
    {
      title: "Helpful Links",
      links: ["Support", "Privacy Policy", "Terms and Conditions"],
    },
    {
      title: "Our Services",
      links: [
        "Unit Trust Funds",
        "Private Wealth Management",
        "Institutional Investment Solutions",
      ],
    },
  ];

  return (
    <footer>
      {/* Hero Section */}
      <div className="relative w-full h-[300px] sm:h-[350px]">
        <img
          src="imagen/bottom1.png"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 sm:space-y-6 px-4 lg:hidden">
          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white text-center">
            Innovation that feels personal
          </h1>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row mt-4 sm:mt-8 gap-3 sm:gap-4 w-full max-w-md sm:max-w-none">
            {downloadButtons.map(({ icon, label }, index) => (
              <div
                key={index}
                className="bg-black rounded-md flex cursor-pointer items-center px-3 sm:px-4 py-2 justify-center sm:justify-start"
              >
                {icon}
                <h3 className="text-white font-semibold text-sm sm:text-lg">
                  {label}
                </h3>
              </div>
            ))}
          </div>

          {/* Invest Now Button */}
          <div className="bg-deepBlue items-center justify-center px-6 sm:px-4 py-2 hover:bg-blue-400 cursor-pointer text-white rounded-md mt-4 sm:mt-8 font-bold text-lg sm:text-2xl">
            INVEST NOW
          </div>
        </div>

        <div className="absolute inset-0 lg:flex hidden flex-col items-center justify-center space-y-6 px-4">
          <h1 className="font-bold text-6xl text-white text-center">
            Innovation that feels personal
          </h1>

          <div className="flex flex-row mt-8 gap-4">
            {downloadButtons.map(({ icon, label }, index) => (
              <div
                key={index}
                className="bg-black rounded-md flex cursor-pointer items-center px-4 py-2"
              >
                {icon}
                <h3 className="text-white font-semibold text-lg">{label}</h3>
              </div>
            ))}
          </div>

          <div className="bg-deepBlue items-center justify-center px-4 py-2 hover:bg-blue-400 cursor-pointer text-white rounded-md mt-8 font-bold text-2xl">
            INVEST NOW
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:justify-between max-w-[1200px] mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6 lg:space-y-0">
        {/* Logo */}
        <div className="flex justify-center lg:justify-start">
          <img src="imagen/nabo-logo.png" alt="" className="h-20 sm:h-35" />
        </div>

        {/* Footer Links - Mobile: Stack, Desktop: Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 flex-1 lg:max-w-2xl">
          {footerLinks.map((section, idx) => (
            <div key={idx} className="flex flex-col">
              <h3 className="text-lg sm:text-xl text-deepBlue font-bold mb-2">
                {section.title}
              </h3>
              {section.links.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="mt-1 sm:mt-2 hover:text-sky-400 text-sm sm:text-base"
                >
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div className="flex flex-col lg:mt-4">
          <h3 className="text-lg sm:text-xl text-deepBlue font-bold mb-2">
            Contact Us
          </h3>

          <div className="flex items-center space-x-3 mb-2">
            <FaPhoneAlt className="text-deepBlue text-sm sm:text-base" />
            <a href="#" className="text-sm sm:text-base  hover:text-sky-400">
              +254 709 902 700
            </a>
          </div>

          <div className="flex items-center space-x-3 mb-6">
            <FaEnvelope className="text-deepBlue text-sm sm:text-base" />
            <a
              href="#"
              className="underline text-sm sm:text-base hover:text-sky-400"
            >
              invest@nabocapital.com
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex flex-row justify-center lg:justify-between gap-4 lg:gap-2 h-auto max-w-xs lg:w-70">
            <a href="#" className="text-[#1877F2] hover:text-blue-700 text-2xl">
              <FaFacebookF />
            </a>
            <a href="#" className="text-[#1DA1F2] hover:text-blue-400 text-2xl">
              <FaTwitter />
            </a>
            <a href="#" className="text-[#C13584] hover:text-pink-500 text-2xl">
              <FaInstagram />
            </a>
            <a href="#" className="text-[#0A66C2] hover:text-blue-600 text-2xl">
              <FaLinkedinIn />
            </a>
            <a href="#" className="text-[#FF0000] hover:text-red-600 text-2xl">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t-2 border-deepBlue mx-4 sm:mx-6"></div>

      {/* Bottom Section */}
      <div className="flex flex-col sm:flex-row sm:justify-between mt-4 items-center px-4 sm:px-6 space-y-4 sm:space-y-0">
        <div className="text-center sm:text-left">
          <h3 className="text-lg sm:text-xl font-semibold">
            &copy; 2025 Nabo Capital. All Rights Reserved
          </h3>
        </div>
        <div className="flex flex-row gap-4 sm:gap-6">
          {["FAQs", "Feedback"].map((item, idx) => (
            <a
              key={idx}
              href="#"
              className="text-lg sm:text-xl font-semibold hover:text-sky-400"
            >
              {item}
            </a>
          ))}
        </div>
      </div>

      {/* Disclaimer */}
      <div className="mt-6 sm:mt-8 mb-6 px-4 sm:px-6">
        <p className="text-deepBlue text-sm sm:text-base leading-relaxed">
          <span className="font-bold text-deepBlue">
            Nabo Capital Limited is regulated by the Capital Markets Authority.
          </span>{" "}
          CMA does not take responsibility for the financial soundness of the
          scheme or for the correctness of any statements made or opinions
          expressed. Income from investments may increase or decrease. The
          effective annual yield is net of fees and gross of withholding tax.
          Past performance does not guarantee future results. In certain
          circumstances, investors right to redeem investments may be suspended.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
