import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import bgImage from "../../assets/image/footerbgg.jpeg";

function Down() {
  return (
    <div
      className="text-white bg-center bg-no-repeat bg-cover h-[12vh] md:h-[15vh] xl:h-[18vh]"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="flex flex-col items-center justify-between h-full px-4  mx-auto space-y-4 md:flex-row md:w-[90%]">
        {/* Left Section */}
        <div className="text-[24px] font-bold text-center md:text-left md:text-[32px] font-albert ">
          <h2>Stay Connected With Us</h2>
        </div>

        {/* Right Section */}
        <div className="flex items-center justify-center space-x-4 text-[14px] font-semibold md:text-[18px] ">
         
          <span className="whitespace-nowrap">• FOLLOW US :</span>
          <a
            href="#"
            className="flex items-center justify-center w-8 h-8 text-white transition duration-200 border border-white rounded-full hover:bg-gray-200 hover:text-[#49AF45] md:w-10 md:h-10"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="flex items-center justify-center w-8 h-8 text-white transition duration-200 border border-white rounded-full hover:bg-gray-200 hover:text-[#49AF45] md:w-10 md:h-10"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="flex items-center justify-center w-8 h-8 text-white transition duration-200 border border-white rounded-full hover:bg-gray-200 hover:text-[#49AF45] md:w-10 md:h-10"
          >
            <FaLinkedinIn />
          </a>
          </div>
        </div>
      </div>
    
  );
}

export default Down;
