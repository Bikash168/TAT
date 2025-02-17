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
import ResearchSpotlight from "@components/ResearchSpotlight";

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
        <section className="bg-white text-[#002147] py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Two-column layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
              {/* Left Box - Content Section */}
              <div className="bg-white p-4 rounded-md shadow-md space-y-4 text-justify">
                {/* Institution Description */}
                <p className="text-xs sm:text-sm lg:text-base leading-relaxed">
                  Trident Academy of Technology is a leading institution focused on developing talent and excellence across a wide range of disciplines. Our approach emphasizes combining practical experience, analytical skills, and creative thinking, ensuring students gain a strong understanding of their chosen fields. We offer thoughtfully organized programs, practical learning experiences, and a curriculum aligned with industry trends, ensuring our students are well-equipped for success in their careers. With modern infrastructure, a dedicated faculty, and a focus on overall development, we ensure our students are prepared to excel in their fields and adapt to the evolving demands of the global landscape.
                </p>

                {/* Vision Section */}
                <div className="space-y-2">
                  <h3 className="text-base sm:text-lg lg:text-xl font-semibold">Our Vision</h3>
                  <p className="text-xs sm:text-sm lg:text-base leading-relaxed">
                    Trident Academy of Technology aspires to be a leading institution that nurtures innovative thinkers and responsible leaders, equipped with the knowledge, skills, and values to drive positive change and contribute to the advancement of society and a sustainable future.
                  </p>
                </div>

                {/* Mission Section */}
                <div className="space-y-2">
                  <h3 className="text-base sm:text-lg lg:text-xl font-semibold">Our Mission</h3>
                  <p className="text-xs sm:text-sm lg:text-base leading-relaxed">
                    Trident Academy of Technology is committed to providing high-quality education that combines academic learning with practical skills and problem-solving. Our focus is on developing students who are ready to think strategically, address challenges, and act with integrity in their careers. Through a comprehensive curriculum, applied learning experiences, and industry-relevant knowledge, we prepare students to excel in a dynamic world and make a meaningful impact.
                  </p>
                </div>
              </div>

              {/* Right Box - Image Section */}
              <div className="bg-white p-4 sm:p-5 rounded-md shadow-md grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-3">
                {/* ISO Certified Institution */}
                <div className="text-center border border-red-600 rounded-md p-2">
                  <img src="/images/ISO-Logo.png" alt="ISO Certified Institution" className="mx-auto mb-1 w-28 h-auto" />
                  <h4 className="text-xs font-semibold text-black">ISO CERTIFIED INSTITUTION</h4>
                </div>

                {/* DSIR SIRO Center */}
                <div className="text-center border border-red-600 rounded-md p-2">
                  <img src="/images/dsir-siro.png" alt="DSIR SIRO Center" className="mx-auto mb-1 w-28 h-auto" />
                  <h4 className="text-xs font-semibold text-black">DSIR SIRO CENTER</h4>
                </div>

                {/* Cisco ThingQbator */}
                <div className="text-center border border-red-600 rounded-md p-2">
                  <img src="/images/thingQbator.png" alt="Cisco ThingQbator" className="mx-auto mb-1 w-28 h-auto" />
                  <h4 className="text-xs font-semibold text-black">INCUBATORS</h4>
                  <p className="text-[10px] text-black">Cisco ThingQbator</p>
                </div>

                {/* HESI Member */}
                <div className="text-center border border-red-600 rounded-md p-2">
                  <img src="/images/HESI-logo-horizontal.png" alt="HESI Member" className="mx-auto mb-1 w-28 h-auto" />
                  <h4 className="text-xs font-semibold text-black">MEMBER OF</h4>
                  <p className="text-[10px] text-black">Higher Education Sustainability Initiative</p>
                </div>

                {/* NAAC Accreditation */}
                <div className="text-center border border-red-600 rounded-md p-2">
                  <img src="/images/NAACAlogo-1.png" alt="NAAC Accreditation" className="mx-auto mb-1 w-28 h-auto" />
                  <h4 className="text-xs font-semibold text-black">NAAC (National Assessment & Accreditation Council)</h4>
                </div>

                {/* National Board of Accreditation */}
                <div className="text-center border border-red-600 rounded-md p-2">
                  <img src="/images/National_Board_of_Accreditation.svg.png" alt="National Board of Accreditation" className="mx-auto mb-1 w-28 h-auto" />
                  <h4 className="text-xs font-semibold text-black">National Board of Accreditation</h4>
                </div>

                {/* BPUT Affiliation */}
                <div className="text-center border border-red-600 rounded-md p-2">
                  <img src="/images/bput-logo.png" alt="BPUT Affiliation" className="mx-auto mb-1 w-28 h-auto" />
                  <h4 className="text-xs font-semibold text-black">Biju Patnaik University of Technology</h4>
                </div>

                {/* NIRF Ranking */}
                <div className="text-center border border-red-600 rounded-md p-2">
                  <img src="/images/National_Institutional_Ranking_Framework_logo.png" alt="NIRF Ranking" className="mx-auto mb-1 w-28 h-auto" />
                  <h4 className="text-xs font-semibold text-black">NIRF</h4>
                  <p className="text-[10px] text-black">National Institutional Ranking Framework</p>
                </div>
              </div>
            </div>
          </div>
        </section>



        <NewsEvents />

        <BeautifulSection />
        <ResearchSpotlight />
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
