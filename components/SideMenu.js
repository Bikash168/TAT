import { useState } from "react";
import Link from "next/link";
import { AiOutlineArrowLeft, AiOutlineClose } from "react-icons/ai"; // Import the left arrow and close icons

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle the menu open/close
  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <>
      {/* Floating Icon/Button to Trigger Side Menu */}
      <div className="fixed top-1/2 transform -translate-y-1/2 right-4 z-50">
        <button
          onClick={toggleMenu}
          className="bg-red-600 text-white p-4 rounded-full shadow-xl hover:bg-red-700 transition duration-300 focus:outline-none"
          title="Open Menu"
        >
          <AiOutlineArrowLeft className="text-3xl" />
        </button>
      </div>

      {/* Side Menu */}
      <div
        className={`fixed top-1/2 transform -translate-y-1/2 right-4 z-50 bg-red-600 text-white p-4 rounded-lg shadow-xl transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ width: "200px" }}
      >
        {/* Close Button */}
        <div className="flex justify-end">
          <button
            onClick={toggleMenu}
            className="text-3xl text-white focus:outline-none"
          >
            <AiOutlineClose />
          </button>
        </div>

        {/* Menu Items */}
        <ul className="space-y-6 px-4 mt-6">
          <li className="text-lg hover:text-gray-300">
            <Link href="/">ADMISSION</Link>
          </li>
          <li className="text-lg hover:text-gray-300">
            <Link href="/about">APPOINTMENTS</Link>
          </li>
          <li className="text-lg hover:text-gray-300">
            <Link href="/services">NOTICE</Link>
          </li>
          <li className="text-lg hover:text-gray-300">
            <Link href="/contact">NIRF</Link>
          </li>
          <li className="text-lg hover:text-gray-300">
            <Link href="/contact">E-MAGAZINE</Link>
          </li>
        </ul>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          onClick={toggleMenu}
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
        ></div>
      )}
    </>
  );
};

export default Navbar;
