import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Link from 'next/link';

const Activities = () => {
  return (
    <Layout title="Activities | Trident Academy of Technology">
      <main className="flex container mx-auto px-4 lg:px-16 my-8">
              {/* Sidebar and Main Content Section */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Sidebar Menu */}
          <div className="w-full lg:w-1/4 p-4 lg:p-6 bg-[#002147] shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold text-white mb-6">Activities</h2>
            <ul className="mt-6 space-y-3">
              {[
                { name: 'Co-Curricular', link: '#co-curricular' },
                { name: 'Extra-Curricular', link: '#extra-curricular' },
                { name: 'Innovation & Entrepreneurship', link: '#innovation-entrepreneurship' },
                { name: 'Sports and Games', link: '#sports-games' },
                { name: 'TRILOGY: The Annual Magazine', link: '#trilogy-magazine' },
                { name: 'IEDC', link: '#iedc' },
                { name: 'IEDC Projects', link: '#iedc-projects' },
                { name: 'Incubation Cell', link: '#incubation-cell' }
              ].map((item) => (
                <li key={item.name} className="hover:bg-[#004D73] p-2 rounded-lg transition">
                  <Link href={item.link} className="text-white hover:text-[#A8C7E6]">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Main Content */}
          <section className="w-3/4 lg:w-4/5 pl-6">
            {/* Header Section */}
            <section className="text-center mb-12">
              <h1 className="text-4xl font-semibold text-[#002147]">Student Activities at Trident</h1>
              <p className="text-lg text-gray-700 mt-4">
                Education at Trident is more than just books and classrooms. Our students are equipped with opportunities to excel in various fields, whether in academics, personality development, extracurricular activities, or beyond.
              </p>
            </section>
            {/* Co-Curricular Section */}
            <section className="bg-white p-8 rounded-lg shadow-lg mb-12" id="co-curricular">
              <h2 className="text-3xl font-semibold text-[#002147] mb-6">Student Enrichment through Student Clubs</h2>
              <p className="text-lg text-gray-700">
                Trident students have access to 20 different student clubs that cater to both cultural and academic interests. Each club is guided by a professor and a faculty coordinator, managed by a governing body of six students.
              </p>
              <div className="mt-6">
                <ul className="list-disc list-inside text-lg text-gray-700">
                  <li>Academic Clubs</li>
                  <li>Cultural Clubs</li>
                  <li>Special Interest Clubs</li>
                </ul>
              </div>
            </section>

            {/* Extra-Curricular Section */}
            <section className="bg-[#f8fafc] p-8 rounded-lg shadow-lg mb-12" id="extra-curricular">
              <h2 className="text-3xl font-semibold text-[#002147] mb-6">Extra-Curricular Activities</h2>
              <p className="text-lg text-gray-700">
                At Trident, we promote the holistic development of our students. We believe that team spirit, leadership, and collaboration are key aspects of both personal and professional life. Our students have ample opportunities to participate in sports, physical activities, and other events.
              </p>
              <div className="mt-6">
                <p className="text-lg text-gray-700">Students engage in:</p>
                <ul className="list-disc list-inside text-lg text-gray-700">
                  <li>Sports Competitions</li>
                  <li>Cultural Fests</li>
                  <li>Workshops & Seminars</li>
                  <li>Debates and Public Speaking</li>
                </ul>
              </div>
            </section>

            {/* Life at Trident Section */}
            <section className="bg-white p-8 rounded-lg shadow-lg mb-12" id="life-at-trident">
              <h2 className="text-3xl font-semibold text-[#002147] mb-6">A New World Awaits</h2>
              <p className="text-lg text-gray-700">
                For students stepping into Trident Education, it's a new world—new friends, a lively environment, experienced faculty, renewed ambitions, and inspired goals. At Trident, we provide an environment that fosters learning, growth, and career opportunities.
              </p>
              <p className="text-lg text-gray-700 mt-6">
                Trident is about opportunity—the opportunity to make lifelong friends, to meet interesting people, to learn under esteemed academicians, to study in an innovative environment, to secure the best jobs, and to have the time of your life.
              </p>
            </section>

            {/* Opportunities Section */}
            <section className="bg-[#f8fafc] p-8 rounded-lg shadow-lg mb-12" id="opportunities">
              <h2 className="text-3xl font-semibold text-[#002147] mb-6">Opportunities at Trident</h2>
              <p className="text-lg text-gray-700">
                At Trident, students are provided with numerous opportunities to explore their interests, develop their skills, and participate in activities that will prepare them for a successful career and personal growth.
              </p>
              <div className="mt-6">
                <ul className="list-disc list-inside text-lg text-gray-700">
                  <li>Collaborative Projects</li>
                  <li>Innovative Learning Environments</li>
                  <li>Industry Internship Programs</li>
                  <li>Networking Events</li>
                  <li>Campus Job Opportunities</li>
                </ul>
              </div>
            </section>
          </section>
        </div>
      </main>
      <Footer /> {/* Footer is here */}
    </Layout>
  );
};

export default Activities;
