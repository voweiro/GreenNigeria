import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import logo from "../../assets/image/Green_Clean logo.png";
import logoTwo from "../../assets/image/Green_Cleanside.png";

function Footer() {
  return (
    <div className="py-10 text-white bg-transparent">
      <div className="px-6 mx-auto mt-16 w-[95%] lg:w-[90%]">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12 lg:grid-cols-3"> {/* Grid layout on tablet and above */}
          {/* Left Section */}
          <div className="w-full">
            <div className="flex items-center space-x-3">
              <img
                src={logo}
                alt="Green Clean Logo"
                className="h6px] w-[48px]"
              />
              <img
                src={logoTwo}
                alt="Green Clean Logo"
                className="h-[36px] w-[176px] lg:block"
              />
            </div>
            <p className="mt-5 mb-6 text-[14px] leading-6 font-albert font-[400] text-[#868681] md:text-[16px] md:w-[250px]">
              Driving innovation in renewable energy, climate change resilience, and the green economy.
            </p>
            <div className="flex items-center space-x-3 text-[14px] md:text-[16px] font-albert font-[400]">
              <FaPhoneAlt className="text-[#49AF45] w-[16px] h-[16px]" />
              <span>+234 803 447 4677</span>
            </div>
            <div className="flex items-center my-4 space-x-3 text-[14px] md:text-[16px] font-albert font-[400]">
              <FaEnvelope className="text-[#49AF45] w-[16px] h-[16px]" />
              <span>contact@greenclean.com.ng</span>
            </div>
            <div className="flex items-center space-x-3 text-[14px] md:text-[16px] font-albert font-[400]">
              <FaMapMarkerAlt className="text-[#49AF45] w-[16px] h-[16px]" />
              <span>17 Libreville Crescent, Abuja, Nigeria</span>
            </div>
          </div>

          {/* Center Section */}
          <div className="w-full">
            <h3 className="mb-4 text-[20px] font-albert font-[600] md:text-[24px]">
              Quick Links
            </h3>
            <ul className="space-y-2 text-[14px] leading-6 font-albert font-[400] md:text-[16px]">
              <li>
                <a
                  href="#"
                  className="flex items-center space-x-2 hover:text-green-500"
                >
                  <span className="font-extrabold">›</span>
                  <span>About Us</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center space-x-2 hover:text-green-500"
                >
                  <span className="font-extrabold">›</span>
                  <span>Services</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center space-x-2 hover:text-green-500"
                >
                  <span className="font-extrabold">›</span>
                  <span>Contact</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center space-x-2 hover:text-green-500"
                >
                  <span className="font-extrabold">›</span>
                  <span>FAQ</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center space-x-2 hover:text-green-500"
                >
                  <span className="font-extrabold">›</span>
                  <span>Privacy Policy</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Right Section */}
          <div className="w-full">
            <h3 className="mb-5 text-[20px] font-albert font-[600] md:text-[24px]">
              Newsletter
            </h3>
            <p className="mb-5 text-[14px] text-[#868681] font-albert font-[400] md:text-[16px]">
              Subscribe to our Newsletter
            </p>
            <form>
              <input
                type="email"
                placeholder="Enter email address"
                className="w-full px-4 py-2 mb-4 text-white rounded-md md:w-[306px] md:h-[60px] bg-transparent border-[1px] border-[#868681] focus:outline-dashed"
              />
              <button
                type="submit"
                className="w-full px-6 py-2 text-white bg-[#49AF45] rounded-md md:w-[306px] md:h-[60px] hover:bg-[#30862d]"
              >
                SUBSCRIBE NOW
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className=" pt-4 mt-8 lg:pt-8 lg:mt-16 text-center border-t border-gray-600 text-[14px] font-albert font-[400] md:text-[16px]  ">
          © 2024 Green Clean Innovation Hub. All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default Footer;
