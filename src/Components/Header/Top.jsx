import {
    FaEnvelope,
    FaFacebookF,
    FaLinkedinIn,
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaTwitter,
  } from "react-icons/fa";
  
  function Top() {
    return (
      <div className="w-screen py-2 font-semibold text-white bg-transparent font-albert">
        <div className="flex flex-wrap items-center justify-between px-6 mx-auto text-sm w-[90%] ">
          {/* Location */}
          <div className="flex items-center space-x-2 text-base">
            <FaMapMarkerAlt className="text-[#49AF45] " />
            <span>17 Libreville Crescent, Abuja, Nigeria</span>
          </div>
  
          {/* Email */}
          <div className="flex items-center space-x-2 text-base">
            <FaEnvelope className="text-[#49AF45]" />
            <span>contact@greencleanhub.com</span>
          </div>
  
          {/* Phone */}
          <div className="flex items-center space-x-2 text-base">
            <FaPhoneAlt className="text-[#49AF45]" />
            <span>+234 803 447 4677</span>
          </div>
  
          {/* Social Icons */}
          <div className="flex space-x-4 text-base">
            <a href="#" className="text-white hover:text-[#49AF45]">
              <FaFacebookF />
            </a>
            <a href="#" className="text-white hover:text-[#49AF45]">
              <FaTwitter />
            </a>
            <a href="#" className="text-white hover:text-[#49AF45]">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    );
  }
  
  export default Top;
  