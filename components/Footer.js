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
    <footer className="bg-[#002147] text-white text-base py-8">
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
              <a
                href="tel:0674-3530517"
                className="hover:text-gray-300 underline"
              >
                0674-3530517
              </a>
              ,{" "}
              <a
                href="tel:9861191195"
                className="hover:text-gray-300 underline"
              >
                9861191195
              </a>
              <br />
              Email:{" "}
              <a
                href="mailto:info@trident.ac.in"
                className="hover:text-gray-300 underline"
              >
                info@trident.ac.in
              </a>
            </p>
          </div>

          {/* Center Section */}
          <div className="text-center sm:text-left">
            <h2 className="font-bold text-xl">
              Let's shape the future together.
            </h2>
            <p className="mt-4">
              <a
                href="/"
                className="bg-white text-[#002147] px-4 py-2 rounded-full shadow-md hover:bg-gray-100 transition-all"
              >
                Support us ↗
              </a>
            </p>
          </div>

          {/* Latest News */}
          <div>
            <h2 className="font-bold text-xl">Latest News</h2>
            <ul className="mt-4 space-y-2 text-lg">
              <li>
                <a
                  href="/"
                  className="hover:text-gray-300 transition-all underline"
                >
                  → Mission: a human-made leaf
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="hover:text-gray-300 transition-all underline"
                >
                  → AI pinpoints stroke timing with high accuracy
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="hover:text-gray-300 transition-all underline"
                >
                  → Join TAT as we turn a new page
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-600 my-6" />

        {/* Links Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  <a
                    href="/"
                    className="hover:text-gray-300 transition-all underline"
                  >
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
                  <a
                    href="/"
                    className="hover:text-gray-300 transition-all underline"
                  >
                    {link} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-wrap justify-between items-center mt-8 space-y-4 md:space-y-0 text-lg">
          {/* Links */}
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row">
            {[
              "Jobs",
              "Feedback",
              "Press and Media",
              "Accessibility",
              "Privacy Policy",
              "Legal Notice",
              "Emergency",
            ].map((item) => (
              <a
                key={item}
                href="/"
                className="hover:text-gray-300 transition-all underline"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Social Media */}
          <div className="flex flex-wrap justify-center space-x-4 text-2xl">
            {[
              { icon: faInstagram, label: "Instagram" },
              { icon: faLinkedin, label: "LinkedIn" },
              { icon: faFacebook, label: "Facebook" },
              { icon: faTwitter, label: "Twitter" },
              { icon: faYoutube, label: "YouTube" },
              { icon: faRss, label: "RSS" },
            ].map(({ icon, label }) => (
              <a
                key={label}
                href="/"
                className="hover:text-gray-300 transition-all"
                aria-label={label}
              >
                <FontAwesomeIcon icon={icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
