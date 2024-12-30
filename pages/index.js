import HeroSection from "../components/HeroSection";
import NewsEvents from "../components/NewsEvents";
import Highlights from "../components/Highlights";
import Tatoffer from "../components/Tatoffer";
import Program from "../components/Program";
import AboutSection from "../components/AboutSection";
import HighlightSection from "../components/HighlightSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <div className="nopadding">
        <HeroSection />
        <section className="bg-[#002147] text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 text-center">
            <p className="text-base sm:text-lg lg:text-xl mb-8 max-w-3xl mx-auto">
            Trident Academy of Technology is a renowned name in technical education, celebrated for its high standards of quality and excellence. We aim to provide an environment brimming with energy and enthusiasm where our students can grow both academically and personally. With cutting-edge facilities, a committed faculty, and a focus on innovation, we emphasize hands-on experience alongside theoretical learning to ensure our students are prepared for successful careers.
            </p>

            <div className="mt-16 space-y-12">
              <div className="space-y-4">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-100">Our Vision</h3>
                <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto">
                Our vision is to become the leading institution in Eastern India, continuously developing skilled professionals through excellence in education and training practices.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-100">Our Mission</h3>
                <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto">
                Our mission is to help students achieve excellence by fostering creativity, positive thinking, and a passion for lifelong learning. We aim to contribute meaningfully to society by conducting impactful research and driving innovation in emerging technologies.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Dedicated Faculty</h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-4">
                Our faculty members are experienced educators and professionals dedicated to providing students with a valuable learning experience. They bring their expertise to well-designed programs, helping students gain both knowledge and skills.
                </p>
                <p className="text-gray-600">
              Using a mix of traditional blackboard teaching and modern tools like LCD projectors, they make lessons engaging and accessible. Faculty members also address student concerns and guide them through academic challenges.
            </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Excellent Laboratory Facilities</h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-600">
                Trident Academy of Technology provides essential facilities to support a strong engineering education system in Odisha. With well-equipped classrooms and AICTE-compliant laboratories, students are ensured the best resources for practical learning.
                </p>
                <p className="text-gray-600 py-2">
              Requirements for these facilities are reviewed annually, with necessary updates and improvements approved by the working committee.
            </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row items-center md:items-start md:space-x-6">
              <div className="w-full md:w-1/3">
                <img
                  src="/images/student-development.jpg"
                  alt="Student Development"
                  className="rounded-lg w-full object-cover"
                />
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Student Overall Development</h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-4">
                Our Student Development Programs help students achieve academic and career objectives by encouraging self-direction, personal development, and empowerment. Activities like seminars, workshops, and mock interviews are organized to foster growth.
                </p>
                <p className="text-gray-600">
              These programs aim to improve employability skills while focusing on overall personality development, helping students maximize their college experience.
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

      <Footer />
    </>
  );
}

// Add title to pageProps
Home.getInitialProps = async () => {
  return { title: "Home - Trident Academy of Technology" };
};
