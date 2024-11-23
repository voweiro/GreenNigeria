import React, { useState } from "react";
import strategyIcon from "../../assets/icons/service-icon1.png";
import fundingIcon from "../../assets/icons/service-icon2.png";
import techIcon from "../../assets/icons/service-icon3.png";

import strategyImage from "../../assets/image/finding.png";
import fundingImage from "../../assets/image/image_5.png";
import techImage from "../../assets/image/image_3.png";
import backgroundImage from "../../assets/image/Services.png";

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
    {
        icon: strategyIcon,
        title: "Innovation Solutions",
        description: "Driving innovative solutions to sustainable challenges.",
        image: fundingImage,
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
      className="px-4 py-10 bg-center bg-no-repeat bg-cover services-section"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <h2 className="font-albert font-[600] text-[16px] text-[#49AF45] text-center">OUR SERVICES</h2>
      <h2 className="mb-8 text-3xl font-bold text-center text-[#001819] md:text-4xl lg:text-[46px] font-albert">
        We Drive Green Growth Through Our Expert Services
      </h2>

      {/* Navigation Arrows Centered */}
      <div className="flex items-center justify-center mb-6 space-x-4">
        <button
          className={`${
            currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
          } bg-gray-200 hover:bg-gray-300 text-black rounded-full p-2`}
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          &#8592;
        </button>
        <button
          className={`${
            currentIndex + cardsPerPage >= services.length
              ? "opacity-50 cursor-not-allowed"
              : ""
          } bg-green-500 hover:bg-green-600 text-white rounded-full p-2`}
          onClick={handleNext}
          disabled={currentIndex + cardsPerPage >= services.length}
        >
          &#8594;
        </button>
      </div>

      <div className="relative flex items-center justify-center">
        {/* Cards Section */}
        <div className="flex w-full max-w-5xl overflow-hidden">
          <div
            className="flex space-x-6 transition-transform duration-500 transform"
            style={{
              transform: `translateX(-${(currentIndex / services.length) * 100}%)`,
            }}
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md lg:w-1/3 w-[320px]"
                style={{
                  display:
                    index >= currentIndex && index < currentIndex + cardsPerPage
                      ? "block"
                      : "none",
                }}
              >
                <img
                  src={service.icon}
                  alt={service.title}
                  className="mb-4 w-14 h-14"
                />
                <h3 className="mb-2 text-lg font-semibold">{service.title}</h3>
                <p className="mb-4 text-sm text-center text-gray-600">
                  {service.description}
                </p>
                <img
                  src={service.image}
                  alt={`${service.title} visual`}
                  className="object-cover w-full h-40 rounded-md"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
