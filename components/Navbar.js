import { useState } from 'react';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { name: 'Academics', href: '/academics' },
    { name: 'Research', href: '/research' },
    { name: 'Activities', href: '/activities' },
    { name: 'Training', href: '/training' },
    { name: 'Placement', href: '/placement' },
    { name: 'Best Practices', href: '/best-practices' },
    { name: 'Facilities', href: '/facilities' },
  ];

  const topBarMenu = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Alumni', href: '/alumni' },
    { name: 'Grievance', href: '/grievance' },
    { name: 'E-Governance', href: '/e-governance' },
    { name: 'Careers', href: '/careers' },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50 shadow-md bg-white">
      {/* Top Bar */}
      <div className="bg-white py-2 border-b border-gray-300">
        <div className="container mx-auto flex flex-wrap items-center justify-between px-8">
          {/* Social Media Icons */}
          <div className="flex space-x-6">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-blue-600 hover:text-blue-800 text-xl" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-blue-400 hover:text-blue-600 text-xl" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-pink-500 hover:text-pink-700 text-xl" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-blue-700 hover:text-blue-900 text-xl" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="text-red-600 hover:text-red-800 text-xl" />
            </a>
          </div>



          {/* Contact Info (Phone, Email, Address) */}
          <div className="hidden sm:flex space-x-6 text-sm overflow-x-auto">
            {/* Phone */}
            <div className="flex items-center space-x-2">
              <FaPhoneAlt className="text-gray-600" />
              <span className="font-semibold text-gray-600">+91-9439173220</span>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-gray-600" />
              <span className="font-semibold text-gray-600">info@sacred.foundation</span>
            </div>

            {/* Address */}
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-gray-600" />
              <span className="font-semibold text-gray-600">Bhubaneswar, India</span>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative hidden sm:block">
            <input
              type="text"
              placeholder="Search..."
              className="bg-white border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring focus:ring-blue-300"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-500">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>

          {/* Menu Items in Top Bar */}
          <div className="hidden sm:flex space-x-6 text-sm overflow-x-auto">
            {topBarMenu.map((item) => (
              <div key={item.name} className="cursor-pointer">
                <Link href={item.href}>
                  <span className="font-semibold text-gray-600 hover:text-blue-600">{item.name}</span>
                </Link>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Main Navbar */}
      <nav className="flex bg-white">
        {/* Left Side - White Background */}
        <div className="bg-white text-[#002147] flex items-center py-2 px-8">
          <Link href="/">
            <div className="flex items-center cursor-pointer">
              <img
                src="/logo.png" // Replace with your logo path
                alt="Trident Logo"
                className="h-20 mr-4"
              />
              <div>
                <h1 className="text-lg font-bold leading-tight">TRIDENT</h1>
                <h1 className="text-lg font-bold leading-tight">ACADEMY</h1>
                <h1 className="text-lg font-bold leading-tight">OF TECHNOLOGY</h1>
              </div>
            </div>
          </Link>
        </div>

        {/* Right Side - Blue Background */}
        <div className="bg-[#002147] text-white flex-1">
          <div className="flex items-center justify-between max-w-screen-xl mx-auto px-12 relative mt-8">
            {/* Hamburger Menu Button */}
            <button
              className="text-white text-3xl md:hidden px-4"
              onClick={toggleMenu}
            >
              <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
            </button>

            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-6 uppercase text-base font-semibold ml-auto">
              {menuItems.map((item) => (
                <li key={item.name} className="hover:text-gray-300 cursor-pointer">
                  <Link href={item.href}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#002147] text-white shadow-lg mt-2">
            <ul className="flex flex-col space-y-2 p-4">
              {menuItems.map((item) => (
                <li key={item.name} className="w-full">
                  <Link href={item.href}>
                    <span className="block bg-white text-[#002147] hover:bg-gray-100 font-semibold text-sm py-3 px-4 rounded shadow-md transition-all duration-300 ease-in-out">
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}