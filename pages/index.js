import HeroSection from "../components/HeroSection";
import NewsEvents from "../components/NewsEvents";
import Highlights from "../components/Highlights";
import Tatoffer from "../components/Tatoffer";
import Program from "../components/Program";
import AboutSection from "../components/AboutSection";
import HighlightSection from "../components/HighlightSection";
import Footer from "../components/Footer";
import PlacementComponent from "../components/PlacementComponent";
import BeautifulSection from "@components/BeautifulSection";

export default function Home() {
  return (
    <>
      <div className="nopadding">
        <HeroSection />
        {/* Announcements Section */}
        <div className="bg-[#002147] p-4 text-sm text-white overflow-hidden">
          <div className="whitespace-nowrap animate-marquee">
            <span>⭐ Announcement: Upcoming Admission Dates are Now Open!</span>
            <span className="mx-8">⭐ Announcement: Upcoming Admission Dates are Now Open!</span>
          </div>
        </div>

        <section className="bg-white text-[#002147] py-2 mb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
            {/* Grid Section for Certifications/Partnerships */}
            <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              {/* Left Side Boxes */}
              <div className="bg-white p-6 rounded-md shadow-md grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* ISO Certified Institution */}
                <div className="text-center border border-red-600 rounded-md p-6 w-full">
                  <img src="/images/ISO-Logo.png" alt="ISO Certified Institution logo" className="mx-auto mb-4 w-48 h-auto" />
                  <h4 className="text-lg text-black font-semibold">ISO CERTIFIED INSTITUTION</h4>
                </div>

                {/* DSIR SIRO Center */}
                <div className="text-center border border-red-600 rounded-md p-6 w-full">
                  <img src="/images/dsir-siro.png" alt="DSIR SIRO Center logo" className="mx-auto mb-4 w-48 h-auto" />
                  <h4 className="text-lg text-black font-semibold">DSIR SIRO CENTER</h4>
                </div>

                {/* Cisco ThingQbator */}
                <div className="text-center border border-red-600 rounded-md p-6 w-full">
                  <img
                    src="/images/thingQbator.png"
                    alt="Cisco ThingQbator logo"
                    className="mx-auto mb-4 w-64 h-auto" // Increased width to w-64 for better visibility
                  />
                  <h4 className="text-lg font-semibold text-black">INCUBATORS</h4>
                  <p className="text-sm text-black">Cisco ThingQbator</p>
                </div>

                {/* HESI Member */}
                <div className="text-center border border-red-600 rounded-md p-6 w-full">
                  <img
                    src="/images/HESI-logo-horizontal.png"
                    alt="Higher Education Sustainability Initiative logo"
                    className="mx-auto mb-4 w-64 h-auto" // Increased width to w-64 and set height to auto
                  />
                  <h4 className="text-lg font-semibold text-black">MEMBER OF</h4>
                  <p className="text-sm text-black">Higher Education Sustainability Initiative</p>
                </div>

              </div>

              {/* Center Writeup */}
              <div className="bg-white p-8 rounded-md shadow-md text-center">
                <p className="text-base sm:text-lg lg:text-xl mb-8 max-w-3xl mx-auto">
                  Trident Academy of Technology is a renowned name in technical education, celebrated for its high standards of quality and excellence. We aim to provide an environment brimming with energy and enthusiasm where our students can grow both academically and personally. With cutting-edge facilities, a committed faculty, and a focus on innovation, we emphasize hands-on experience alongside theoretical learning to ensure our students are prepared for successful careers.
                </p>
              </div>

              {/* Right Side Boxes */}
              <div className="bg-white p-6 rounded-md shadow-md grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Example 1 */}
                <div className="text-center border border-red-600 rounded-md p-4">
                  <img src="/images/NAACAlogo-1.png" alt="Example 1 logo" className="mx-auto mb-4 w-25 h-20" />
                  <h4 className="text-lg text-black font-semibold">NAAC (National Assessment & Accreditation Council)</h4>
                </div>
                {/* Example 2 */}
                <div className="text-center border border-red-600 rounded-md p-4">
                  <img src="/images/National_Board_of_Accreditation.svg.png" alt="Example 2 logo" className="mx-auto mb-4 w-20 h-20" />
                  <h4 className="text-lg text-black font-semibold">National Board of Accreditation</h4>
                </div>
                {/* Example 3 */}
                <div className="text-center border border-red-600 rounded-md p-4">
                  <img src="/images/bput-logo.png" alt="Example 3 logo" className="mx-auto mb-4 w-30 h-20" />
                  <h4 className="text-lg font-semibold text-black">Biju Patnaik University of Technology</h4>
                  <p className="text-sm text-black"></p>
                </div>
                {/* Example 4 */}
                <div className="text-center border border-red-600 rounded-md p-4">
                  <img src="/images/National_Institutional_Ranking_Framework_logo.png" alt="Example 4 logo" className="mx-auto mb-4 w-30 h-20" />
                  <h4 className="text-lg font-semibold text-black">NIRF</h4>
                  <p className="text-sm text-black">National Institutional Ranking Framework</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#002147] py-16">
          {/* Vision and Mission Section */}
          <div className="text-center space-y-12">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-100">Our Vision</h3>
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
                Our vision is to become the leading institution in Eastern India, continuously developing skilled professionals through excellence in education and training practices.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-100">Our Mission</h3>
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
                Our mission is to help students achieve excellence by fostering creativity, positive thinking, and a passion for lifelong learning. We aim to contribute meaningfully to society by conducting impactful research and driving innovation in emerging technologies.
              </p>
            </div>
          </div>
        </section>

        <NewsEvents />

    <BeautifulSection />

      </div>

      <div className="px-2 sm:px-4 lg:px-6">
        <PlacementComponent />
      
        <Tatoffer />
     
        <AboutSection />
        <HighlightSection />
        <Highlights />
      </div>

      <Footer />
    </>
  );
}

// Add title to pageProps
Home.getInitialProps = async () => {
  return { title: "Home - Trident Academy of Technology" };
};
