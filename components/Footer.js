import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faFacebook,
  faXTwitter,
  faYoutube,
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
                href="/contact"
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
                <a href="/" className="hover:text-gray-300 transition-all underline text-lg">
                  → Mission: a human-made leaf
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-gray-300 transition-all underline text-lg">
                  → AI pinpoints stroke timing with high accuracy
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-gray-300 transition-all underline text-lg">
                  → Join TAT as we turn a new page
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-600 my-6" />

        {/* Links Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* About the College */}
          <div>
            <h3 className="font-bold text-xl text-center">Trident Academy of Technology</h3>
            <p className="mt-4 text-lg text-white">
              Trident Academy of Technology is a leading institution dedicated to providing world-class education in various fields. Our mission is to foster innovation, creativity, and a sustainable future.
            </p>
          </div>

          {/* Trident Group Websites */}
          <div>
            <h3 className="font-bold text-xl">Trident Group Websites</h3>
            <ul className="mt-4 space-y-2 text-lg">
              {[
                { name: "Trident Group of Institutions", link: "https://trident.ac.in/" },
                { name: "Trident Academy of Creative Technology", link: "https://tact.ac.in/" },
                { name: "Trident Academy of Professional Studies", link: "https://taps.ac.in/" },
                { name: "Trident School of Biotech Sciences", link: "https://tsbs.ac.in/" },
                { name: "DF Group", link: "https://dfgroup.in/" },
              ].map((site) => (
                <li key={site.name}>
                  <a
                    href={site.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-300 transition-all underline"
                  >
                    {site.name} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-xl">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-lg">
              {[
                { name: "About TAT", link: "/about" },
                { name: "Library", link: "/library" },
                { name: "Workshop", link: "/workshop" },
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.link} className="hover:text-gray-300 transition-all underline">
                    {link.name} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-center items-center mt-8 space-y-4 sm:space-y-0 sm:space-x-4">
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

        {/* Social Media */}
        <div className="flex justify-center w-full mt-4 space-x-4 text-2xl">
          {[
            { icon: faInstagram, label: "Instagram", url: "https://www.instagram.com/trident_tat/" },
            { icon: faLinkedin, label: "LinkedIn", url: "https://www.linkedin.com/school/trident-academy-of-technology-tat-bhubaneswar/posts/" },
            { icon: faFacebook, label: "Facebook", url: "https://www.facebook.com/tridentcollege/" },
            { icon: faXTwitter, label: "Twitter", url: "https://x.com/Trident_tat" },
            { icon: faYoutube, label: "YouTube", url: "https://www.youtube.com/@trident_tat" },
          ].map(({ icon, label, url }) => (
            <a key={label} href={url} className="hover:text-gray-300 transition-all" target="_blank" rel="noopener noreferrer" aria-label={label}>
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
