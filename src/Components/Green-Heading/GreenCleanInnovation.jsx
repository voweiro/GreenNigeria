import React from "react";
import plantImage from "../../assets/image/greenPlant.png"; // Update the path to your image

const GreenCleanInnovation = () => {
  return (
    <div className="bg-[#F9F9F9] py-16 px-6 lg:px-20 flex flex-col lg:flex-row items-center">
      {/* Text Section */}
      <div className="lg:w-1/2 text-left">
        <h4 className="text-green-500 font-semibold text-lg mb-2">
          WHY GREEN CLEAN INNOVATION HUB?
        </h4>
        <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
          Building A Greener Future <br /> And Safer Environment
        </h2>
        <p className="text-gray-600 mb-6">
          With a team of seasoned professionals, and a commitment to innovative
          and tailored solutions, we deliver sustainable, impactful, and
          practical approaches to tackle the challenges of climate change and
          the green economy.
        </p>

        {/* List Items */}
        <ul className="space-y-4">
          <li className="flex items-start">
            <span className="text-green-500 text-2xl mr-3">✔</span>
            <p className="text-gray-800">
              Expertise in the green economy and climate change sectors.
            </p>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 text-2xl mr-3">✔</span>
            <p className="text-gray-800">
              Global network with key industry players.
            </p>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 text-2xl mr-3">✔</span>
            <p className="text-gray-800">
              Tailored solutions for unique environmental challenges.
            </p>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 text-2xl mr-3">✔</span>
            <p className="text-gray-800">
              Proven track record of impactful and sustainable projects.
            </p>
          </li>
        </ul>
      </div>

      {/* Image Section */}
      <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center relative">
        <img
          src={plantImage}
          alt="Plant in hands"
          className="w-3/4 lg:w-2/3 rounded-lg shadow-lg"
        />
        <div className="absolute top-5 left-8 bg-green-500 text-white font-bold text-sm px-3 py-2 rounded-full shadow-md">
          SAVE THE PLANET <br />
          <span className="text-xs">GO GREEN</span>
        </div>
      </div>
    </div>
  );
};

export default GreenCleanInnovation;
