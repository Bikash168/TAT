import Layout from '../components/Layout';
import Link from 'next/link';

export default function About() {
  return (
    <Layout title="About Us | Trident Academy of Technology">
      <main className="container mx-auto mt-12 px-6 md:px-12">
        {/* About Section */}
        <section className="bg-gradient-to-r from-blue-600 to-teal-400 p-8 rounded-lg shadow-xl text-white mb-12">
          <h1 className="text-4xl font-bold text-center">About Us</h1>
          <p className="mt-4 text-lg text-center">
            Trident Academy of Technology (TAT) is a premier institution dedicated to fostering innovation, academic excellence, and social impact through engineering, management, and technology education. We are committed to equipping our students with the skills, knowledge, and mindset required to tackle the challenges of tomorrow.
          </p>
        </section>

        {/* Graduate Attributes Section */}
        <section className="space-y-12 mb-12">
          <h2 className="text-3xl font-semibold text-[#002147] text-center">Graduate Attributes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Engineering Knowledge', description: 'Apply the knowledge of mathematics, science, engineering fundamentals, and specialized engineering areas to solve complex engineering problems.' },
              { title: 'Problem Analysis', description: 'Identify and analyze complex engineering problems by formulating research questions, reviewing relevant literature, and reaching well-supported conclusions using fundamental principles.' },
              { title: 'Design and Development of Solutions', description: 'Design solutions for complex engineering problems, considering public health, safety, and cultural, societal, and environmental factors.' },
              { title: 'Conducting Investigations', description: 'Use research-based knowledge and methods, including experimental design, data analysis, and information synthesis, to draw valid conclusions for complex problems.' },
              { title: 'Modern Tool Usage', description: 'Select and apply appropriate techniques, resources, and modern engineering and IT tools, including prediction and modeling, for complex tasks.' },
              { title: 'The Engineer and Society', description: 'Use contextual knowledge to assess societal, health, safety, legal, and cultural issues related to engineering practice.' },
              { title: 'Environment and Sustainability', description: 'Understand the societal and environmental impact of engineering solutions and the need for sustainable development.' },
              { title: 'Ethics', description: 'Adhere to ethical principles and commit to professional ethics, responsibilities, and standards in engineering practice.' },
              { title: 'Individual and Team Work', description: 'Function effectively both individually and as a member or leader in diverse teams, including multidisciplinary settings.' },
              { title: 'Communication', description: 'Communicate effectively about complex engineering activities, both within the engineering community and to the public.' },
              { title: 'Project Management and Finance', description: 'Apply engineering and management principles to manage projects and work in multidisciplinary environments.' },
              { title: 'Life-long Learning', description: 'Recognize the importance of lifelong learning and engage in independent learning to adapt to technological changes.' },
            ].map((attribute, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg transition-all hover:scale-105 hover:shadow-2xl">
                <h3 className="text-xl font-semibold text-[#002147]">{attribute.title}</h3>
                <p className="mt-4 text-gray-700">{attribute.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Quality Section */}
        <section className="bg-white p-8 rounded-lg shadow-lg mb-12">
          <h2 className="text-3xl font-semibold text-[#002147] text-center mb-4">Quality</h2>
          <p className="text-lg text-gray-700">
            Trident Academy of Technology is certified by ISO 9001:2015, underlining our commitment to delivering quality education. We emphasize using cutting-edge technology to ensure students gain exceptional hands-on experiences, and our strategic educational approaches focus on key areas like infrastructure, professional development, internships, publications, learning resources, and personal growth.
          </p>
          <p className="mt-4 text-lg text-gray-700">
            In line with our mission and values, we have also integrated SIX SIGMA practices into our teaching methodologies starting from the 2014-15 academic session.
          </p>
        </section>

        {/* College Ranking Section */}
        <section className="bg-[#f8fafc] p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-[#002147] text-center mb-4">College Ranking</h2>
          <p className="text-lg text-gray-700">
            Trident Academy of Technology is proud to have consistently ranked among the top 100 engineering institutions in India. Our institution stands alongside prestigious IITs, IIITs, NITs, and Deemed Universities.
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-4">
            <li>Ranked No. 1 MCA institution in Bhubaneswar.</li>
            <li>Ranked No. 1 Biotechnology college in Bhubaneswar.</li>
            <li>Ranked No. 4 private engineering college under Biju Patnaik University of Technology, Odisha.</li>
          </ul>
          <p className="mt-4 text-lg text-gray-700">
            Trident Academy of Technology also participated in the NIRF India Rankings. <Link href="https://tat.ac.in/wp-content/uploads/2023/02/NIRF2023.pdf" className="text-blue-500 hover:underline">View the NIRF 2023 Rankings</Link>.
          </p>
        </section>
      </main>
    </Layout>
  );
}
