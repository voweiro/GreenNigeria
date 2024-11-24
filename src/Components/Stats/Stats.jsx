import teamIcon from "../../assets/icons/team-icon.png"; // Replace with your actual icons
import worksIcon from "../../assets/icons/works-icon.png";
import awardsIcon from "../../assets/icons/awards-icon.png";
import ratingsIcon from "../../assets/icons/ratings-icon.png";

import background from "../../assets/image/mmain.jpeg";

const StatsAndProcess = () => {
  return (
    <section>
      {/* Stats Section */}
      <div
        className="px-6 py-12 text-white  lg:px-20 w-full h-[467.19px]"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="container grid grid-cols-2 gap-6 mx-auto mt-16 text-center md:grid-cols-4">
          {/* Stat Item */}
          <div className="font-bold text-[46px] font-albert">
            <img
              src={teamIcon}
              alt="Team Icon"
              className="mx-auto mb-4 w-[113px] h-[113px]"
            />
            <h3 className="">100+</h3>
            <p className="text-[20px] font-[500]">Team Members</p>
          </div>
          <div className="font-bold text-[46px] font-albert">
            <img
              src={worksIcon}
              alt="Works Icon"
              className="w-[113px] h-[113px] mx-auto mb-4 "
            />
            <h3 className="">960+</h3>
            <p className="text-[20px] font-[500]">Completed Works</p>
          </div>
          <div className="font-bold text-[46px] font-albert">
            <img
              src={awardsIcon}
              alt="Awards Icon"
              className="w-[113px] h-[113px] mx-auto mb-4 "
            />
            <h3 className="">38</h3>
            <p className="text-[20px] font-[500]">Awards Won</p>
          </div>
          <div className="font-bold text-[46px] font-albert">
            <img
              src={ratingsIcon}
              alt="Ratings Icon"
              className="w-[113px] h-[113px] mx-auto mb-4 "
            />
            <h3 className="">4.7</h3>
            <p className="text-[20px] font-[500]">Avg Ratings</p>
          </div>
        </div>
      </div>

      {/* Process Section */}
      
    </section>
  );
};

export default StatsAndProcess;
