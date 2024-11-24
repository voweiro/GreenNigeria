import React, { useState } from "react";
import strategyIcon from "../../assets/icons/service-icon1.png";
import fundingIcon from "../../assets/icons/service-icon2.png";
import techIcon from "../../assets/icons/service-icon3.png";
import hori from "../../assets/image/Horizontal Divider.png";
import strategyImage from "../../assets/image/finding.png";
import fundingImage from "../../assets/image/image_5.png";
import techImage from "../../assets/image/image_3.png";
import backgroundImage from "../../assets/image/Services.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: strategyIcon,
      title: "Strategy and Implementation",
      description:
        "We provide tailored strategies to enhance energy, carbon, and water performance.",
      image: strategyImage,
    },
    {
      icon: fundingIcon,
      title: "Funding and Financing",
      description:
        "Our team specializes in unlocking funding opportunities for green economy projects.",
      image: fundingImage,
    },
    {
      icon: techIcon,
      title: "Technologies and Policies",
      description:
        "We bring cutting-edge renewable energy technologies and policy expertise to the table.",
      image: techImage,
    },
    {
      icon: strategyIcon,
      title: "Innovation Solutions",
      description: "Driving innovative solutions to sustainable challenges.",
      image: fundingImage,
    },
    {
      icon: fundingIcon,
      title: "Sustainable Operations",
      description: "Enhancing operational sustainability with tailored plans.",
      image: techImage,
    },
    {
      icon: techIcon,
      title: "Eco-Friendly Practices",
      description: "Promoting green practices across various industries.",
      image: strategyImage,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerPage = 3;

  const handleNext = () => {
    if (currentIndex + cardsPerPage < services.length) {
      setCurrentIndex((prevIndex) => prevIndex + cardsPerPage);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - cardsPerPage);
    }
  };

  return (
    <div
      className="w-full px-4 py-10 bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="flex flex-col md:flex-row w-[80%] justify-between mx-auto">
        <div className="text-center md:text-left w-full md:w-[50%]">
          <h2 className="font-albert font-[600] text-[16px] text-[#49AF45] mb-4">
            OUR SERVICES
          </h2>
          <h2 className="mb-8 text-3xl font-bold text-[#001819] md:text-4xl lg:text-[46px] font-albert">
            We Drive Green Growth <br /> Through Our Expert Services
          </h2>
        </div>

        {/* Navigation Arrows (Visible on Large Screens) */}
        <div className="hidden md:flex items-center justify-center mb-6 space-x-4">
          <button
            className={`${
              currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
            } bg-gray-200 hover:bg-gray-300 text-black p-4`}
            onClick={handlePrev}
            disabled={currentIndex === 0}
          >
            <FaArrowLeft className="font-[500]" />
          </button>
          <button
            className={`${
              currentIndex + cardsPerPage >= services.length
                ? "opacity-50 cursor-not-allowed"
                : ""
            } bg-[#49AF45] hover:bg-green-600 text-white p-4`}
            onClick={handleNext}
            disabled={currentIndex + cardsPerPage >= services.length}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>

      <div className="relative flex items-center justify-center">
        {/* Cards Section */}
        <div className="w-full overflow-x-auto md:w-[80%] px-4">
          <div
            className="flex space-x-6 transition-transform duration-500"
            style={{
              transform: `translateX(-${
                (currentIndex / services.length) * 100
              }%)`,
            }}
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex flex-col items-center bg-[#F7F6EE] rounded-lg shadow-md mx-2 p-6 w-[300px] lg:w-[30%]"
              >
                <img
                  src={service.icon}
                  alt={service.title}
                  className="mb-4 w-[89px] h-[89px]"
                />
                <h3 className="mb-2 font-[600] text-[26px] font-albert">
                  {service.title}
                </h3>
                <img src={hori} alt="" className="mb-5 h-[2px] w-[56px]" />
                <p className="mb-4 font-albert font-[400] text-[16px] text-[#868681] w-[80%]">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
