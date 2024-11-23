import React from "react";
import plantImage from "../../assets/image/greenPlant.png";

const GreenCleanInnovation = () => {
  return (
    <div className="bg-[#F9F9F9] py-16 px-6 lg:px-20 flex flex-col lg:flex-row items-center">
      {/* Text Section */}
      <div className="text-left lg:w-1/2">
        <h4 className="mb-2 text-sm font-semibold text-green-500 md:text-base lg:text-lg">
          WHY GREEN CLEAN INNOVATION HUB?
        </h4>
        <h2 className="mb-6 text-2xl font-bold leading-snug text-black md:text-3xl lg:text-4xl">
          Building A Greener Future <br /> And Safer Environment
        </h2>
        <p className="mb-6 text-sm text-gray-600 md:text-base">
          With a team of seasoned professionals, and a commitment to innovative
          and tailored solutions, we deliver sustainable, impactful, and
          practical approaches to tackle the challenges of climate change and
          the green economy.
        </p>

        {/* List Items */}
        <ul className="space-y-4">
          <li className="flex items-start">
            <span className="mr-3 text-xl text-green-500 md:text-2xl">✔</span>
            <p className="text-sm text-gray-800 md:text-base">
              Expertise in the green economy and climate change sectors.
            </p>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-xl text-green-500 md:text-2xl">✔</span>
            <p className="text-sm text-gray-800 md:text-base">
              Global network with key industry players.
            </p>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-xl text-green-500 md:text-2xl">✔</span>
            <p className="text-sm text-gray-800 md:text-base">
              Tailored solutions for unique environmental challenges.
            </p>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-xl text-green-500 md:text-2xl">✔</span>
            <p className="text-sm text-gray-800 md:text-base">
              Proven track record of impactful and sustainable projects.
            </p>
          </li>
        </ul>
      </div>

      {/* Image Section */}
      <div className="relative flex justify-center mt-10 lg:w-1/2 lg:mt-0">
        <img
          src={plantImage}
          alt="Plant in hands"
          className="w-full rounded-lg shadow-lg md:w-3/4 lg:w-2/3"
        />
        <div className="absolute px-3 py-2 text-xs font-bold text-white bg-green-500 rounded-full shadow-md top-5 left-8 md:text-sm">
          SAVE THE PLANET <br />
          <span className="text-[10px] md:text-xs">GO GREEN</span>
        </div>
      </div>
    </div>
  );
};

export default GreenCleanInnovation;