import { useState } from "react";
import Link from "next/link";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faFacebook, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { faBars, faTimes, faSearch } from '@fortawesome/free-solid-svg-icons';


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  const menuItems = [
    { name: "Academics", href: "/academics" },
    { name: "Research", href: "/research" },
    { name: "Activities", href: "/activities" },
    { name: "Training", href: "/training" },
    { name: "Placement", href: "/placement" },
    { name: "Best Practices", href: "/best-practices" },
    { name: "Facilities", href: "/facilities" },
    { name: "Admission", href: "/admission" },
  ];

  const topBarMenu = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Alumni", href: "/alumni" },
    { name: "Grievance", href: "/grievance" },
    { name: "E-Governance", href: "https://ais.tat.ac.in/ais/" },
    { name: "Careers", href: "/career" },
  ];



  return (
    <div className="fixed top-0 left-0 w-full z-50 shadow-md bg-white">
      {/* Top Bar */}
      <div className="bg-gray-100 py-2 px-4">
        <div className="container mx-auto flex flex-wrap justify-center md:justify-between items-center gap-3 text-sm text-center md:text-left">

          {/* Social Media Icons */}
          <div className="flex space-x-3 text-gray-600">
            <a href="https://www.facebook.com/tridentcollege/" className="hover:text-blue-500" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://www.instagram.com/trident_tat/" className="hover:text-pink-500" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.linkedin.com/school/trident-academy-of-technology-tat-bhubaneswar/posts/" className="hover:text-blue-700" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://www.youtube.com/@trident_tat" className="hover:text-red-500" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a href="https://x.com/Trident_tat" className="hover:text-blue-400" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
          </div>

          {/* Search Bar - Stays Centered */}
          <div className="relative w-full sm:w-auto">
            <input
              type="text"
              placeholder="Search..."
              className="bg-white border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring focus:ring-blue-300 w-full sm:w-auto"
            />
            <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-500">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>

          {/* Contact Information - Stays Centered */}
          <div className="flex flex-wrap justify-center md:justify-end gap-x-3 gap-y-2 text-gray-600">
            <div className="flex items-center space-x-2">
              <FaPhoneAlt />
              <span className="font-medium">0674-3530517, 9861191195</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaEnvelope />
              <span className="font-medium">info@trident.ac.in</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt />
              <span className="font-medium">Bhubaneswar, India</span>
            </div>
          </div>

          {/* Top Bar Menu - Centered in Mobile, Right-Aligned in Desktop */}
          <div className="flex items-center justify-center md:justify-end space-x-0.5 sm:space-x-1 font-semibold">
            {topBarMenu.map((item, index) => (
              <div key={item.name} className="flex items-center">
                <Link href={item.href}>
                  <button className="px-0.5 sm:px-1 py-0.5 text-[10px] sm:text-xs md:text-sm bg-transparent text-black border border-transparent hover:border-blue-500 hover:text-blue-500 rounded-md transition-all duration-200">
                    {item.name}
                  </button>
                </Link>
                {index !== topBarMenu.length - 1 && <span className="text-gray-400 px-0.5 sm:px-1">|</span>}
              </div>
            ))}
          </div>

        </div>
      </div>
      {/* Main Navbar */}
      <nav className="flex bg-white border-b border-gray-300">
        <div className="bg-white text-[#002147] flex items-center py-2 px-4 md:px-10">
          <Link href="/">
            <div className="flex items-center cursor-pointer space-x-4">
              {/* Responsive Logo */}
              <img src="/logo.png" alt="Trident Logo" className="h-14 md:h-20" />

              {/* Text Section */}
              <div className="text-left leading-tight">
                <h1 className="text-md md:text-md font-semibold">TRIDENT</h1>
                <h1 className="text-md md:text-md font-semibold">ACADEMY</h1>
                <h1 className="text-md md:text-md font-semibold">OF TECHNOLOGY</h1>
              </div>
            </div>
          </Link>
        </div>

        <div className="bg-[#002147] text-white flex-1">
          <div className="flex items-center justify-between max-w-screen-xl mx-auto px-5 relative mt-7">
            {/* Mobile Menu Button */}
            <button
              className="text-white text-3xl md:hidden px-2 ml-auto mb-4"
              onClick={toggleMenu}
            >
              <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
            </button>

            {/* Desktop Menu with Less Gap */}
            <ul className="hidden md:flex space-x-2 uppercase text-sm md:text-base font-semibold ml-auto">
              {menuItems.map((item) => (
                <li key={item.name} className="hover:text-gray-300 cursor-pointer">
                  <Link href={item.href}>
                    <button className="bg-transparent text-white hover:text-gray-300 px-2 py-1 md:px-2.5 md:py-1.5 font-semibold uppercase transition-all duration-200">
                      {item.name}
                    </button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {isMenuOpen && (
            <div className="absolute top-full left-0 w-full bg-[#002147] text-white shadow-lg transition-all duration-300 ease-in-out z-50">
              <ul className="flex flex-col space-y-1 p-3">
                {menuItems.map((item) => (
                  <li key={item.name} className="w-full">
                    <Link href={item.href}>
                      <button
                        className="block w-full bg-white text-[#002147] hover:bg-gray-100 font-bold text-md py-2 px-4 rounded-lg shadow-md transition-all duration-300 ease-in-out"
                        onClick={handleMenuItemClick}
                      >
                        {item.name}
                      </button>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>


      </nav>
    </div>
  );
}
