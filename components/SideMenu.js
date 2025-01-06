import { useState } from "react";
import Link from "next/link";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={toggleMenu}
        style={{
          position: "fixed",
          top: "50%",
          right: "0",
          transform: "translateY(-50%)",
          width: "30px",
          height: "50px",
          backgroundColor: "red",
          border: "2px solid black",
          zIndex: 9999,
        }}
        className="hover:bg-[#004D73] transition duration-300 ease-in-out text-white flex items-center justify-center"
      >
        {menuOpen ? <AiOutlineArrowLeft size={24} /> : <AiOutlineArrowRight size={24} />}
      </button>

      {/* Side Menu */}
      <div
        style={{
          position: "fixed",
          top: "50%",
          right: menuOpen ? "0" : "-200px",
          transform: "translateY(-50%)",
          width: "200px",
          height: "300px",
          backgroundColor: "red",
          color: "white",
          transition: "right 0.3s ease-in-out",
          zIndex: 9998,
          padding: "20px",
        }}
      >
        {/* Menu Items */}
        <ul className="space-y-2">
          <li className="text-lg hover:bg-[#004D73] hover:text-white p-2 rounded-lg transition duration-300 ease-in-out">
            <Link href="/">ADMISSION</Link>
          </li>
          <li className="text-lg hover:bg-[#004D73] hover:text-white p-2 rounded-lg transition duration-300 ease-in-out">
            <Link href="/about">APPOINTMENTS</Link>
          </li>
          <li className="text-lg hover:bg-[#004D73] hover:text-white p-2 rounded-lg transition duration-300 ease-in-out">
            <Link href="/services">NOTICE</Link>
          </li>
          <li className="text-lg hover:bg-[#004D73] hover:text-white p-2 rounded-lg transition duration-300 ease-in-out">
            <Link href="/contact">NIRF</Link>
          </li>
          <li className="text-lg hover:bg-[#004D73] hover:text-white p-2 rounded-lg transition duration-300 ease-in-out">
            <Link href="/contact">E-MAGAZINE</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
