import Layout from '../components/Layout';
import Footer from '../components/Footer';

export default function About() {
  return (
    <Layout title="About Us | Trident Academy of Technology">
      <main className="mt-20 sm:mt-8 md:mt-6 lg:mt-4 xl:mt-2">

        <section className="bg-[#002147] text-white py-16 text-center px-4 sm:px-8">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
        </section>

        <section className="p-6 sm:p-8">
          <div className="flex flex-col space-y-6">
            {[
              "Trident Academy of Technology has established itself as a prominent name in technical education, known for its commitment to academic excellence and holistic student development. With a strong foundation in quality education, the institution blends technical expertise with leadership training, ensuring that students not only excel in academics but also grow into responsible professionals with strong ethical values. The emphasis on innovation, research, and industry-oriented learning has made Trident a preferred choice for aspiring engineers and technologists.",
              "Recognized for its academic standards, Trident has consistently ranked among the top engineering institutions in India. The college has been featured in DataQuest Magazine’s rankings and has earned the No.1 position in MCA and Biotechnology education in Odisha. The institution actively participates in national ranking frameworks and continues to enhance its reputation through rigorous academic programs and state-of-the-art infrastructure.",
              "Tracing its origins back to a vision for world-class education, Trident evolved from a software training institute into a full-fledged academic institution offering diverse programs. With dedicated efforts in education, corporate engagement, and research, the institution has expanded its scope to include engineering, management, and applied sciences. By fostering an environment of learning and innovation, Trident remains committed to shaping future leaders and contributing to the advancement of knowledge and technology."
            ].map((text, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105 hover:shadow-lg">
                <p className="text-gray-700">{text}</p>
              </div>
            ))}
          </div>
        </section>

      </main>
      <Footer />
    </Layout>
  );
}
