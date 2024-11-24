import React from 'react'
import sustainableIcon from "../../assets/icons/sustainable-icon.png";
import renewableIcon from "../../assets/icons/renewable-icon.png";
import freshEnvIcon from "../../assets/icons/fresh-env-icon.png";
import arrowImage from "../../assets/image/arrow1.png"; // Replace with your arrow image path
import arrowImage2 from "../../assets/image/arrow2.png";

function Process() {
  return (
    <div className="bg-[#F6F6EE] py-12 px-6 lg:px-20 w-full h-[838.8px]">
        <div className="container mx-auto text-center">
          <p className="mb-2 uppercase text-[16px] font-[600] text-center font-albert text-[#49AF45] ">
            Our Working Process
          </p>
          <h2 className="mb-12 text-3xl  text-[#001819] lg:text-[46px] text-[16px] font-[700] font-albert">
            Transforming Ideas Into Sustainable Realities
          </h2>

          <div className="flex flex-col items-center justify-center md:flex-row md:gap-8">
            {/* Process Item 1 */}
            <div className="text-center">
              <img
                src={sustainableIcon}
                alt="Sustainable Solutions Icon"
                className="mx-auto mb-6 w-[180px] h-[207px]"
              />
              <h3 className="text-[24px] font-albert font-bold mb-4 text-[#001819]">
                Sustainable Solutions
              </h3>
              <p className="text-gray-700 font-albert font-bold text-[16px]">
                We develop tailored strategies to address climate challenges,
                improve energy efficiency, and ensure a low-carbon,
                climate-resilient future.
              </p>
            </div>

            {/* Arrow 1 */}
            <div className="hidden md:block">
              <img
                src={arrowImage}
                alt="Arrow"
                className="w-[416px] mx-auto h-[40px]"
              />
            </div>

            {/* Process Item 2 */}
            <div className="text-center">
              <img
                src={renewableIcon}
                alt="Renewable Energy Icon"
                className="w-[180px] h-[207px] mx-auto mb-6 "
              />
              <h3 className="text-[24px] font-bold text-black mb-4">
                Renewable Energy
              </h3>
              <p className="text-gray-700 font-albert font-bold text-[16px]">
                Our focus on renewable energy ensures the implementation of
                cutting-edge solutions like solar, wind, and bioenergy to drive
                clean, green growth.
              </p>
            </div>

            {/* Arrow 2 */}
            <div className="hidden md:block">
              <img
                src={arrowImage2}
                alt="Arrow"
                className="w-[416px] mx-auto h-[40px] top-80"
              />
            </div>

            {/* Process Item 3 */}
            <div className="text-center">
              <img
                src={freshEnvIcon}
                alt="Fresh Environment Icon"
                className="mx-auto mb-6 w-[180px] h-[207px]"
              />
              <h3 className="text-[24px] font-bold text-black mb-4">
                A Fresh Environment
              </h3>
              <p className="text-gray-700 font-albert font-bold text-[16px]">
                By prioritizing environmental protection and restoration, we
                work to create healthier, cleaner ecosystems that benefit both
                people and the planet.
              </p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Process