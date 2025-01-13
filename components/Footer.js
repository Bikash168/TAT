import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faFacebook,
  faTwitter,
  faYoutube,
  faRss,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-[#002147] text-center text-white text-base py-8">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-6">
          {/* Contact Information */}
          <div>
            <h2 className="font-bold text-xl">Trident Academy of Technology</h2>
            <p className="mt-4 text-lg">
              F-2, Chandaka Industrial Estate<br />
              In front of Infocity, Chandrasekharpur<br />
              Bhubaneswar, Odisha - 751024
            </p>
            <p className="mt-4 text-lg">
              Phone:{" "}
              <a href="tel:0674-3530517" className="hover:text-gray-300 underline">
                0674-3530517
              </a>
              ,{" "}
              <a href="tel:9861191195" className="hover:text-gray-300 underline">
                9861191195
              </a>
              <br />
              Email:{" "}
              <a href="mailto:info@trident.ac.in" className="hover:text-gray-300 underline">
                info@trident.ac.in
              </a>
            </p>
          </div>

          {/* Center Section */}
          <div className="text-center sm:text-left">
            <h2 className="font-bold text-xl text-center">
              Let's shape the future together.
            </h2>
            <p className="mt-4 text-center py-4">
              <a
                href="/"
                className="bg-white text-[#002147] px-4 py-2 rounded-full shadow-md hover:bg-gray-100 transition-all"
              >
                Contact us ↗
              </a>
            </p>
          </div>

          {/* Latest News */}
          <div>
            <h2 className="font-bold text-xl">Latest News</h2>
            <ul className="mt-4 space-y-2 text-lg">
              <li>
                <a href="/" className="hover:text-gray-300 transition-all underline">
                  → Mission: a human-made leaf
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-gray-300 transition-all underline">
                  → AI pinpoints stroke timing with high accuracy
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-gray-300 transition-all underline">
                  → Join TAT as we turn a new page
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-600 my-6" />

        {/* Links Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Logo and About the College Section */}
          <div>
            <div className="flex items-center justify-center space-x-4">
              {/* College Name */}
              <h3 className="font-bold text-xl text-center">Trident Academy of Technology</h3>
            </div>
            <p className="mt-4 text-lg text-white">
              Trident Academy of Technology is a leading institution dedicated to providing world-class education in a variety of fields. Our mission is to foster innovation, creativity, and a sustainable future for all students.
            </p>
          </div>

          {/* Trident Group Websites */}
          <div>
            <h3 className="font-bold text-xl">Trident Group Websites</h3>
            <ul className="mt-4 space-y-2 text-lg">
              {[
                "Trident Group of Institutions",
                "Trident Academy of Creative Technology",
                "Trident Academy of Professional Studies",
                "Trident School of Biotech Sciences",
                "DF Group",
              ].map((site) => (
                <li key={site}>
                  <a href="/" className="hover:text-gray-300 transition-all underline">
                    {site} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-xl">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-lg">
              {["About TAT", "Library", "Workshop"].map((link) => (
                <li key={link}>
                  <a href="/" className="hover:text-gray-300 transition-all underline">
                    {link} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>


        {/* Bottom Section */}
        <div className="flex justify-center items-center mt-8">
          {/* Links */}
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row justify-center items-center">
            {[
              "Jobs",
              "Feedback",
              "Press and Media",
              "Accessibility",
              "Privacy Policy",
              "Legal Notice",
              "Emergency",
            ].map((item) => (
              <a key={item} href="/" className="hover:text-gray-300 transition-all underline">
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Social Media */}
        <div className="flex justify-center w-full mt-4 sm:mt-0 space-x-4 text-2xl pt-4">
          {[
            { icon: faInstagram, label: "Instagram" },
            { icon: faLinkedin, label: "LinkedIn" },
            { icon: faFacebook, label: "Facebook" },
            { icon: faTwitter, label: "Twitter" },
            { icon: faYoutube, label: "YouTube" },
            { icon: faRss, label: "RSS" },
          ].map(({ icon, label }) => (
            <a key={label} href="/" className="hover:text-gray-300 transition-all" aria-label={label}>
              <FontAwesomeIcon icon={icon} />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm">
          &copy; 2024 Trident Academy of Technology. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
