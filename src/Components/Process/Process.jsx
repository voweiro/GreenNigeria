import React from "react";
import sustainableIcon from "../../assets/icons/sustainable-icon.png";
import renewableIcon from "../../assets/icons/renewable-icon.png";
import freshEnvIcon from "../../assets/icons/fresh-env-icon.png";
import arrowImage from "../../assets/image/arrow1.png";
import arrowImage2 from "../../assets/image/arrow2.png";

function Process() {
  return (
    <div className="bg-[#F6F6EE] py-12 px-6 lg:px-20 w-full">
      <div className="container mx-auto text-center">
        <p className="mb-7 uppercase text-[16px] font-[600] font-albert text-[#49AF45] mt-16">
          Our Working Process
        </p>
        <h2 className="mb-20 text-2xl lg:text-[36px] xl:text-[46px] text-[#001819] font-[700] font-albert">
          Transforming Ideas Into Sustainable Realities
        </h2>

        <div className="flex flex-col items-center justify-center lg:flex-row lg:gap-10 xl:gap-12">
          {/* Process Item 1 */}
          <div className="flex flex-col items-center mb-12 lg:mb-0 lg:w-1/3">
          <div className="inset-1 border-2 border-dashed border-[#49AF45] rounded-full w-[200px] h-[200px] flex items-center justify-center mb-5">
              <img
                src={sustainableIcon}
                alt="Sustainable Solutions Icon"
                className="mb-6 w-[150px] h-[173px] md:w-[180px] md:h-[207px] lg:w-[180px] lg:h-[207px]"
              />
            </div>
            <h3 className="text-[18px] md:text-[20px] lg:text-[24px] font-albert font-bold mb-4 text-[#001819]">
              Sustainable Solutions
            </h3>
            <p className="text-[#868681] font-albert font-[400] text-[14px] md:text-[16px] px-4 lg:px-0 w-full max-w-[300px] leading-8">
              We develop tailored strategies to address climate challenges,
              improve energy efficiency, and ensure a low-carbon,
              climate-resilient future.
            </p>
          </div>

          {/* Arrow 1 */}
          <div className="flex flex-col items-center justify-center mb-12 md:mb-0">
            {/* Mobile: Directional Text */}
            <div className="block text-[#49AF45] text-[107px] font-bold lg:hidden">
              ↓
            </div>
            {/* Desktop: Arrow Image */}
            <div className="hidden lg:block mt-[-200px]">
              <img
                src={arrowImage}
                alt="Arrow"
                className="w-[250px] lg:w-[300px] h-[24px] lg:h-[40px]"
              />
            </div>
          </div>

          {/* Process Item 2 */}
          <div className="flex flex-col items-center mb-12 lg:mb-0 lg:w-1/3">
          <div className="inset-1 border-2 border-dashed border-[#49AF45] rounded-full w-[200px] h-[200px] flex items-center justify-center mb-5">
              <img
                src={renewableIcon}
                alt="Sustainable Solutions Icon"
                className="mb-6 w-[150px] h-[173px] md:w-[180px] md:h-[207px] lg:w-[180px] lg:h-[207px]"
              />
            </div>
            <h3 className="text-[18px] md:text-[20px] lg:text-[24px] font-albert font-bold mb-4 text-[#001819]">
              Renewable Energy
            </h3>
            <p className="text-[#868681] font-albert font-[400] text-[14px] md:text-[16px] px-4 lg:px-0 w-full max-w-[300px] leading-8">
              Our focus on renewable energy ensures the implementation of
              cutting-edge solutions like solar, wind, and bioenergy to drive
              clean, green growth.
            </p>
          </div>

          {/* Arrow 2 */}
          <div className="flex flex-col items-center justify-center mb-12 md:mb-0">
            {/* Mobile: Directional Text */}
            <div className="block text-[#49AF45] text-[107px] font-bold lg:hidden">
              ↓
            </div>
            {/* Desktop: Arrow Image */}
            <div className="hidden lg:block mt-[-200px]">
              <img
                src={arrowImage2}
                alt="Arrow"
                className="w-[250px] lg:w-[300px] h-[24px] lg:h-[40px]"
              />
            </div>
          </div>

          {/* Process Item 3 */}
          <div className="flex flex-col items-center lg:w-1/3">
          <div className="inset-1 border-2 border-dashed border-[#49AF45] rounded-full w-[200px] h-[200px] flex items-center justify-center mb-5">
              <img
                src={freshEnvIcon}
                alt="Sustainable Solutions Icon"
                className="mb-6 w-[150px] h-[173px] md:w-[180px] md:h-[207px] lg:w-[180px] lg:h-[207px]"
              />
            </div>
            <h3 className="text-[18px] md:text-[20px] lg:text-[24px] font-albert font-bold mb-4 text-[#001819]">
              A Fresh Environment
            </h3>
            <p className="text-[#868681] font-albert font-[400] text-[14px] md:text-[16px] px-4 lg:px-0 w-full max-w-[300px] leading-8">
              By prioritizing environmental protection and restoration, we work
              to create healthier, cleaner ecosystems that benefit both people
              and the planet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Process;