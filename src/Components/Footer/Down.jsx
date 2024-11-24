import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import bgImage from "../../assets/image/footerbgg.jpeg";

function Down() {
  return (
    <div
      className="text-white bg-center bg-no-repeat bg-cover h-[18vh] md:h-[15vh] xl:h-[152px]"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="flex flex-col items-center justify-evenly h-full px-4 mx-auto space-y-4 md:flex-row md:space-y-0 md:w-[90%]">
        {/* Left Section */}
        <div className="text-center md:text-left">
          <h2 className="text-[20px] font-bold md:text-[28px] lg:text-[32px] font-albert">
            Stay Connected With Us
          </h2>
        </div>

        {/* Right Section */}
        <div className="flex flex-wrap items-center  justify-center md:space-y-0 md:space-x-4">
          <span className="text-[14px] font-semibold whitespace-nowrap md:text-[16px] lg:text-[18px]">
            • FOLLOW US :
          </span>
          <div className="flex justify-center">
          <a
            href="#"
            className="flex ml-5 items-center justify-center w-8 h-8 text-white transition duration-200 border border-white rounded-full hover:bg-gray-200 hover:text-[#49AF45] md:w-10 md:h-10"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="flex  ml-5 items-center justify-center w-8 h-8 text-white transition duration-200 border border-white rounded-full hover:bg-gray-200 hover:text-[#49AF45] md:w-10 md:h-10"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="flex  ml-5 items-center justify-center w-8 h-8 text-white transition duration-200 border border-white rounded-full hover:bg-gray-200 hover:text-[#49AF45] md:w-10 md:h-10"
          >
            <FaLinkedinIn />
          </a>

          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Down;
