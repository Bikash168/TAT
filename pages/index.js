import HeroSection from "../components/HeroSection";
import NewsEvents from "../components/NewsEvents";
import Highlights from "../components/Highlights";
import Tatoffer from "../components/Tatoffer";
import Program from "../components/Program";
import AboutSection from "../components/AboutSection";
import HighlightSection from "../components/HighlightSection";

export default function Home() {
  return (
    <>
      <div className="nopadding">
        <HeroSection />
        {/* Enhanced Welcome Section with Custom Background Color */}
        <section className="bg-[#002147] text-white py-16">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
            <p className="text-lg sm:text-xl mb-8 max-w-3xl mx-auto">
              Trident Academy of Technology is a renowned name in technical education, celebrated for its high standards of quality and excellence. We aim to provide an environment brimming with energy and enthusiasm where our students can grow both academically and personally. With cutting-edge facilities, a committed faculty, and a focus on innovation, we emphasize hands-on experience alongside theoretical learning to ensure our students are prepared for successful careers.
            </p>

            {/* Vision and Mission */}
            <div className="mt-16 space-y-12">
              {/* Vision */}
              <div className="space-y-4">
                <h3 className="text-4xl font-semibold text-center text-gray-100">Our Vision</h3>
                <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                  Our vision is to become the leading institution in Eastern India, continuously developing skilled professionals through excellence in education and training practices.
                </p>
              </div>

              {/* Mission */}
              <div className="space-y-4">
                <h3 className="text-4xl font-semibold text-center text-gray-100">Our Mission</h3>
                <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                  Our mission is to help students achieve excellence by fostering creativity, positive thinking, and a passion for lifelong learning. We aim to contribute meaningfully to society by conducting impactful research and driving innovation in emerging technologies.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="px-2 sm:px-4 lg:px-6">

        <NewsEvents />
        <Tatoffer />
        <Program />
        <AboutSection />
        <HighlightSection />
        <Highlights />
      </div>
    </>
  );
}

// Add title to pageProps
Home.getInitialProps = async () => {
  return { title: "Home - Trident Academy of Technology" };
};
