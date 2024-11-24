import { FaSearch, FaBars, FaTimes } from "react-icons/fa"; // Import the FaTimes icon
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
              className="h-10 lg:block"
            />
          </div>

          {/* Desktop and Tablet Navigation Links */}
          <div className="hidden md:hidden  lg:space-x-14 font-medium text-[14px] lg:text-[16px] font-albert lg:block lg:ml-[250px]">
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
            <FaSearch className="text-white cursor-pointer hover:text-green-500 md:ml-[330px]" />
            <button className="px-4 py-2 text-white bg-[#49AF45] rounded-md hover:bg-[#30862d] font-albert text-sm md:text-base focus:outline-none hidden lg:block ">
              Contact Us
            </button>
          </div>

          {/* Mobile Hamburger Icon */}
          <div className="flex items-center md:block lg:hidden">
            {/* Conditionally render FaBars or FaTimes */}
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

        {/* Mobile Dropdown Menu (Overlays above the page content) */}
        {isMenuOpen && (
          <div className="absolute top-[115px] left-0 right-0 bg-white bg-opacity-90 z-50 py-3 space-y-4 text-center text-black md:top-[147px]">
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
            <button className="px-4 py-2 text-white bg-[#49AF45] rounded-md hover:bg-[#30862d] font-albert text-sm md:text-base focus:outline-none lg:hidden">
              Contact Us
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navigation;
