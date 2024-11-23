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
      <div className="flex flex-wrap items-center justify-between px-6 mx-auto w-[90%]">
        {/* Location */}
        <div className="flex items-center space-x-2 text-sm md:text-base">
          <FaMapMarkerAlt className="text-[#49AF45]" />
         
          <span className="hidden sm:inline">17 Libreville Crescent, Abuja, Nigeria</span>
        </div>

        {/* Email */}
        <div className="flex items-center space-x-2 text-sm md:text-base">
          <FaEnvelope className="text-[#49AF45]" />
          {/* Show the email only on larger screens */}
          <span className="hidden sm:inline">contact@greencleanhub.com</span>
        </div>

        {/* Phone */}
        <div className="flex items-center space-x-2 text-sm md:text-base">
          <FaPhoneAlt className="text-[#49AF45]" />
          {/* Show the phone number only on larger screens */}
          <span className="hidden sm:inline">+234 803 447 4677</span>
        </div>

        {/* Social Icons */}
        <div className="flex items-center space-x-4 text-base">
          <a
            href="#"
            className="flex items-center justify-center text-white transition-colors duration-200 hover:text-[#49AF45]"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="flex items-center justify-center text-white transition-colors duration-200 hover:text-[#49AF45]"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="flex items-center justify-center text-white transition-colors duration-200 hover:text-[#49AF45]"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Top;
