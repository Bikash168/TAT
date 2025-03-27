import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Image from 'next/image';

export default function Career() {
  return (
    <Layout title="Careers | Trident Academy of Technology">
      {/* Hero Section */}
      <section className="relative w-full h-[350px] md:h-[450px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/career-hero.jpg" // Ensure this path is correct
            alt="Career at Trident Academy of Technology"
            layout="fill"
            objectFit="cover" // Ensures the image covers the section
            objectPosition="center" // Centers the image
            priority // Optimizes loading
            className="brightness-75"
          />
        </div>
        <div className="relative text-center text-white px-4 z-10">
          <h1 className="text-4xl md:text-5xl font-bold">Build Your Career with Us</h1>
        </div>
      </section>


      {/* Content Section */}
      <section className="max-w-4xl mx-auto py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold text-[#002147] mb-6">Join Trident Academy of Technology</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Trident Academy of Technology provides a dynamic and growth-driven environment for individuals passionate
          about education and research. We welcome dedicated professionals who strive for academic excellence
          and are committed to guiding the next generation of learners.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          With opportunities in teaching, research, and administration, the institution fosters a collaborative
          and progressive workplace. Our focus on industry-relevant education ensures an engaging and
          innovative platform for both faculty and staff to excel in their roles.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          Be a part of Trident Academy of Technology and contribute to an institution that values knowledge,
          innovation, and professional growth.
        </p>
      </section>

      <Footer />
    </Layout>
  );
}
