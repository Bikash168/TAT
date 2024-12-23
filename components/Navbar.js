import { useState } from 'react';
import Link from 'next/link';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from 'react-icons/fa';
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
    { name: 'Careers', href: '/careers' },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50 shadow-md bg-white">
      {/* Top Bar */}
      <div className="bg-gray-100 py-2 px-4">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
          {/* Left: Social Media Icons */}
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-blue-500"><FaFacebook /></a>
            <a href="#" className="text-gray-600 hover:text-pink-500"><FaInstagram /></a>
            <a href="#" className="text-gray-600 hover:text-blue-700"><FaLinkedin /></a>
            <a href="#" className="text-gray-600 hover:text-red-500"><FaYoutube /></a>
            <a href="#" className="text-gray-600 hover:text-blue-400"><FaTwitter /></a>
          </div>

          {/* Search Bar */}
          <div className="relative block w-full sm:w-auto px-4 py-2">
            <input
              type="text"
              placeholder="Search..."
              className="bg-white border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring focus:ring-blue-300 w-full"
            />
            <button className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-500">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>

          {/* Right: Contact Information */}
          <div className="flex flex-wrap justify-center sm:justify-end space-y-2 sm:space-y-0 space-x-4 sm:space-x-6 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <FaPhoneAlt />
              <span className="font-medium">+91-9439173220</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaEnvelope />
              <span className="font-medium">info@sacred.foundation</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt />
              <span className="font-medium">Bhubaneswar, India</span>
            </div>
          </div>

          {/* Top Bar Menu */}
          <div className="hidden md:flex space-x-6 text-sm font-semibold">
            {topBarMenu.map((item) => (
              <Link key={item.name} href={item.href} className="hover:text-blue-500">
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Top Bar Menu */}
          <div className="md:hidden mt-4 px-1">
            <ul className="flex flex-wrap space-x-3">
              {topBarMenu.map((item) => (
                <li key={item.name} className="text-sm font-semibold text-gray-700 hover:text-blue-500">
                  <Link href={item.href}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="flex bg-white border-b border-gray-300">
        <div className="bg-white text-[#002147] flex items-center py-2 px-8">
          <Link href="/" className="flex items-center">
            <img
              src="/logo.png"
              alt="Trident Logo"
              className="h-20 mr-4"
            />
            <div>
              <h1 className="text-lg font-bold leading-tight">TRIDENT</h1>
              <h1 className="text-lg font-bold leading-tight">ACADEMY</h1>
              <h1 className="text-lg font-bold leading-tight">OF TECHNOLOGY</h1>
            </div>
          </Link>
        </div>

        <div className="bg-[#002147] text-white flex-1">
          <div className="flex items-center justify-between max-w-screen-xl mx-auto px-12 relative mt-8">
            <button
              className="text-white text-3xl md:hidden px-4"
              onClick={toggleMenu}
            >
              <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
            </button>

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
