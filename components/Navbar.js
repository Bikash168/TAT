import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { name: 'News and Events', href: '/news-and-events' },
    { name: 'Studies', href: '/studies' },
    { name: 'Lifelong Learning', href: '/lifelong-learning' },
    { name: 'Research', href: '/research' },
    { name: 'Innovation', href: '/innovation' },
    { name: 'Community', href: '/community' },
    { name: 'About TAT', href: '/about-tat' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex shadow-md bg-white">
      {/* Left Side - White Background */}
      <div className="bg-white text-[#002147] flex items-center py-2 px-8">
        {/* Wrap the logo with Link to redirect to the home page */}
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
        <div className="flex items-center justify-between max-w-screen-xl mx-auto px-6 relative mt-8">
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
  );
}
