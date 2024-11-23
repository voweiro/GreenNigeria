import React from "react";
import plantImage from "../../assets/image/greenPlant.png";
import save from "../../assets/image/savees.png"
import greendot from "../../assets/image/greendot.png"
import { FaCheck } from "react-icons/fa";

const GreenCleanInnovation = () => {
  return (
    <div className="bg-[#F6F6EE] py-16 flex items-center justify-center w-full">
      <div className="w-[90%] mx-auto flex flex-col lg:flex-row lg:items-center gap-10 lg:ml-[150px] ">
        {/* Text Section */}
        <div className="text-center lg:w-[45%] lg:text-left">
          <h4 className="text-sm   mb-7 md:text-base lg:text-[16px] font-albert font-[600] text-[#49AF45]">
            WHY GREEN CLEAN INNOVATION HUB?
          </h4>
          <h2 className="mb-6 text-2xl   md:text-3xl lg:text-[46px] font-albert font-[700]  text-[#001819]">
            Building A Greener Future <br /> 
            <span className="leading-[1.4]">And Safer Environment</span>
          </h2>
          <p className="mb-6 font-albert font-[400] text-[16px] text-[#868681]">
            With a team of seasoned professionals, and a commitment to innovative
            and tailored solutions, we deliver sustainable, impactful, and
            practical approaches to tackle the challenges of climate change and
            the green economy.
          </p>

          {/* List Items */}
          <ul className="space-y-4">
            {[
              "Expertise in the green economy and climate change sectors.",
              "Global network with key industry players.",
              "Tailored solutions for unique environmental challenges.",
              "Proven track record of impactful and sustainable projects.",
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-center justify-center gap-3 lg:justify-start"
              >
                {/* Green Circle Icon */}
                <div className="flex items-center justify-center flex-shrink-0 w-6 h-6 rounded-full bg-[#47AD49]">
                  <FaCheck className="font-bold text-white font-albert"/>
                </div>
                {/* Text */}
                <p className="md:text-base font-albert font-[500] text-[18px] leading-10">{item}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Image Section */}
        <div className="relative flex justify-center lg:w-[45%]">
           
          <div className="relative ">
            <img
              src={plantImage}
              alt="Plant in hands"
              className="lg:w-[616px] lg:h-[617px] "
            />
            <div className="absolute px-4 py-2 text-sm font-bold -bottom-10 lg:-right-16 ">
            <img src={greendot} alt=""
            className="w-[124px] h-[125px] hidden lg:block" />
            </div>
            <div className="absolute -top-4 -left-4  font-bold text-sm px-4 py-2 rotate-[-10deg]">
            <img src={save}
            className="w-full" alt="" />
            </div>
          </div>
        </div>
        </div>
      </div>
  );
};

export default GreenCleanInnovation;
