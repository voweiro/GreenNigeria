import { FaSearch, FaBars } from "react-icons/fa";
import logo from "../../assets/image/Green_Clean logo.png";
import logoTwo from "../../assets/image/Green_Cleanside.png";
import { useState } from "react"; // Use state to manage the mobile menu visibility
import Top from "./Top";

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for managing mobile menu visibility

  // Toggle menu visibility on mobile
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full">
      <Top />
      <div className="w-full bg-transparent border-t border-b border-[#868681]">
        {/* Container for all navigation elements */}
        <div className="mx-auto w-[88%] flex items-center justify-between py-5 text-white">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Green Clean Logo" className="h-10" />
            <img
              src={logoTwo}
              alt="Green Clean Logo"
              className="hidden h-10 lg:block"
            />
          </div>

          {/* Desktop and Tablet Navigation Links */}
          <div className="hidden md:flex space-x-6 lg:space-x-11 font-medium text-[14px] lg:text-[16px] font-albert">
            <a href="#" className="text-white hover:text-[#49AF45]">
              Home
            </a>
            <a href="#" className="text-white hover:text-[#49AF45]">
              About
            </a>
            <a href="#" className="text-white hover:text-[#49AF45]">
              Services
            </a>
            <a href="#" className="text-white hover:text-[#49AF45]">
              Our Impact
            </a>
            <a href="#" className="text-white hover:text-[#49AF45]">
              Events
            </a>
            <a href="#" className="text-white hover:text-[#49AF45]">
              Get Involved
            </a>
          </div>

          {/* Search Icon and Contact Button */}
          <div className="flex items-center space-x-4 md:space-x-6">
            <FaSearch className="text-white cursor-pointer hover:text-green-500" />
            <button className="px-4 py-2 text-white bg-[#49AF45] rounded-md hover:bg-[#30862d] font-albert text-sm md:text-base focus:outline-none">
              Contact Us
            </button>
          </div>

          {/* Mobile Hamburger Icon */}
          <div className="flex items-center md:hidden">
            <FaBars className="text-white cursor-pointer" onClick={toggleMenu} />
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="py-3 space-y-4 text-center text-black bg-white md:hidden">
            <a href="#" className="block text-[#49AF45]">
              Home
            </a>
            <a href="#" className="block text-[#49AF45]">
              About
            </a>
            <a href="#" className="block text-[#49AF45]">
              Services
            </a>
            <a href="#" className="block text-[#49AF45]">
              Our Impact
            </a>
            <a href="#" className="block text-[#49AF45]">
              Events
            </a>
            <a href="#" className="block text-[#49AF45]">
              Get Involved
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navigation;
