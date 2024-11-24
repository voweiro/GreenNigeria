import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/image/Green_Clean logo.png";
import logoTwo from "../../assets/image/Green_Cleanside.png";
import { useState } from "react";
import Top from "./Top";

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full">
      <Top />
      <div className="w-full bg-transparent border-t border-b border-[#868681]">
        {/* Container for all navigation elements */}
        <div className="mx-auto w-[90%]  flex items-center justify-between py-5 text-white lg:w-[85%] 2xl:w-[80%]">
          {/* Logo Section */}
          <div className="flex items-center space-x-3 ">
            <img src={logo} alt="Green Clean Logo" className="h-[46px]  w-[56px]" />
            <img
              src={logoTwo}
              alt="Green Clean Logo"
              className="h-[36px] w-[176px] lg:block hidden"
            />
          </div>

          {/* Desktop and Tablet Navigation Links */}
          <div className="hidden lg:flex lg:space-x-4 xl:space-x-10 font-medium text-sm lg:text-base 2xl:text-lg font-albert">
            <a href="#" className="hover:text-[#49AF45]">
              Home
            </a>
            <a href="#" className="hover:text-[#49AF45]">
              About
            </a>
            <a href="#" className="hover:text-[#49AF45]">
              Services
            </a>
            <a href="#" className="hover:text-[#49AF45]">
              Our Impact
            </a>
            <a href="#" className="hover:text-[#49AF45]">
              Events
            </a>
            <a href="#" className="hover:text-[#49AF45]">
              Get Involved
            </a>
          </div>

          {/* Search Icon and Contact Button */}
          <div className="flex items-center space-x-4 lg:space-x-6">
            <FaSearch className="text-white cursor-pointer hover:text-green-500" />
            <button className="hidden lg:block px-4 py-2 bg-[#49AF45] text-white rounded-md hover:bg-[#30862d] font-albert">
              Contact Us
            </button>
          </div>

          {/* Mobile Hamburger Icon */}
          <div className="lg:hidden">
            {isMenuOpen ? (
              <FaTimes
                className="text-2xl text-white cursor-pointer"
                onClick={toggleMenu}
              />
            ) : (
              <FaBars
                className="text-2xl text-white cursor-pointer"
                onClick={toggleMenu}
              />
            )}
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="absolute top-[115px] left-0 right-0 bg-white bg-opacity-90 z-50 py-3 space-y-4 text-center text-black">
            <a href="#" className="block">
              Home
            </a>
            <a href="#" className="block">
              About
            </a>
            <a href="#" className="block">
              Services
            </a>
            <a href="#" className="block">
              Our Impact
            </a>
            <a href="#" className="block">
              Events
            </a>
            <a href="#" className="block">
              Get Involved
            </a>
            <button className="px-4 py-2 bg-[#49AF45] text-white rounded-md hover:bg-[#30862d]">
              Contact Us
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navigation;