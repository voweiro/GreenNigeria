
import teamIcon from "../../assets/icons/team-icon.png"; // Replace with your actual icons
import worksIcon from "../../assets/icons/works-icon.png";
import awardsIcon from "../../assets/icons/awards-icon.png";
import ratingsIcon from "../../assets/icons/ratings-icon.png";
import sustainableIcon from "../../assets/icons/sustainable-icon.png";
import renewableIcon from "../../assets/icons/renewable-icon.png";
import freshEnvIcon from "../../assets/icons/fresh-env-icon.png";
import arrowImage from "../../assets/image/arrow1.png"; // Replace with your arrow image path
import arrowImage2 from "../../assets/image/arrow2.png";
const StatsAndProcess = () => {
  return (
    <section>
      {/* Stats Section */}
      <div className="bg-green-700 text-white py-12 px-6 lg:px-20">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {/* Stat Item */}
          <div>
            <img src={teamIcon} alt="Team Icon" className="mx-auto w-16 mb-4" />
            <h3 className="text-2xl font-bold">100+</h3>
            <p className="text-lg">Team Members</p>
          </div>
          <div>
            <img src={worksIcon} alt="Works Icon" className="mx-auto w-16 mb-4" />
            <h3 className="text-2xl font-bold">960+</h3>
            <p className="text-lg">Completed Works</p>
          </div>
          <div>
            <img src={awardsIcon} alt="Awards Icon" className="mx-auto w-16 mb-4" />
            <h3 className="text-2xl font-bold">38</h3>
            <p className="text-lg">Awards Won</p>
          </div>
          <div>
            <img src={ratingsIcon} alt="Ratings Icon" className="mx-auto w-16 mb-4" />
            <h3 className="text-2xl font-bold">4.7</h3>
            <p className="text-lg">Avg Ratings</p>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-[#f3fdf5] py-12 px-6 lg:px-20">
        <div className="container mx-auto text-center">
          <p className="text-green-700 font-medium uppercase mb-2">
            Our Working Process
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-green-800 mb-12">
            Transforming Ideas Into Sustainable Realities
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center md:gap-8">
            {/* Process Item 1 */}
            <div className="text-center">
              <img
                src={sustainableIcon}
                alt="Sustainable Solutions Icon"
                className="mx-auto w-20 mb-6"
              />
              <h3 className="text-[24px] font-albert font-bold text-black  mb-4">
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
              <img src={arrowImage} alt="Arrow" className="w-full h-20 mx-auto" />
            </div>

            {/* Process Item 2 */}
            <div className="text-center">
              <img
                src={renewableIcon}
                alt="Renewable Energy Icon"
                className="mx-auto w-20 mb-6"
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
              <img src={arrowImage2} alt="Arrow" className="w-full h-20 mx-auto top-80" />
            </div>

            {/* Process Item 3 */}
            <div className="text-center">
              <img
                src={freshEnvIcon}
                alt="Fresh Environment Icon"
                className="mx-auto w-20 mb-6"
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
    </section>
  );
};

export default StatsAndProcess;
