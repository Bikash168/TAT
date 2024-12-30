import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Link from 'next/link';

const Placement = () => {
  return (
    <Layout title="Placement | Trident Academy of Technology">
      <main className="flex container mx-auto px-4 lg:px-16 my-8">

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Sidebar Menu */}
          <div className="w-full lg:w-1/4 p-4 lg:p-6 bg-[#002147] shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold text-white mb-6">PLACEMENT</h2>
            <ul className="mt-6 space-y-3">
              {[ 
                { name: 'Placement Overview', link: '#placement-overview' },
                { name: 'Placement Infrastructure', link: '#placement-infrastructure' },
                { name: 'Alumni Mentoring', link: '#alumni-mentoring' },
                { name: 'Placement Statistics', link: '#placement-statistics' },
                { name: 'Recruiters Speak', link: '#recruiters-speak' },
                { name: 'Placement Notices', link: '#placement-notices' },
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
          <div className="w-3/4 lg:w-4/5 pl-6">
            {/* Placement Overview Section */}
            <section id="placement-overview" className="mb-12">
              <h2 className="text-3xl font-semibold text-[#002147] mb-6">Placement Overview</h2>
              <p className="text-lg text-gray-700">
                Trident Academy of Technology offers a well-established placement process that assists students in securing excellent job opportunities across industries. With a track record of successful placements, our placement cell provides students with the right guidance and training for their career advancement.
              </p>
            </section>

            {/* Placement Infrastructure Section */}
            <section id="placement-infrastructure" className="mb-12">
              <h2 className="text-3xl font-semibold text-[#002147] mb-6">Placement Infrastructure</h2>
              <p className="text-lg text-gray-700">
                The Placement Cell is equipped with state-of-the-art infrastructure, including dedicated interview rooms, presentation facilities, and communication tools to provide a professional atmosphere for recruitment processes.
              </p>
            </section>

            {/* Alumni Mentoring Section */}
            <section id="alumni-mentoring" className="mb-12">
              <h2 className="text-3xl font-semibold text-[#002147] mb-6">Alumni Mentoring</h2>
              <p className="text-lg text-gray-700">
                Our alumni network plays a crucial role in mentoring and guiding current students. Alumni regularly engage with students, offering insights into industry trends and helping them prepare for interviews and career challenges.
              </p>
            </section>

            {/* Placement Statistics Section */}
            <section id="placement-statistics" className="mb-12">
              <h2 className="text-3xl font-semibold text-[#002147] mb-6">Placement Statistics</h2>
              <p className="text-lg text-gray-700">
                Over the years, the placement records at Trident Academy have been exceptional. The majority of our graduates secure positions in top-tier organizations, with an impressive percentage of students placed annually.
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-semibold text-[#002147]">2023 Placements</h3>
                  <ul className="list-disc list-inside mt-4 text-lg text-gray-700">
                    <li>95% of eligible students placed</li>
                    <li>Average salary package: ₹6.5 LPA</li>
                    <li>Top recruiters: Infosys, TCS, Wipro, Cognizant, etc.</li>
                  </ul>
                </div>
                <div className="bg-[#f8fafc] p-8 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-semibold text-[#002147]">Placement Trends</h3>
                  <p className="text-lg text-gray-700 mt-4">
                    The placement trends have consistently shown an upward trajectory, with increasing participation from both national and international companies.
                  </p>
                </div>
              </div>
            </section>

            {/* Recruiters Speak Section */}
            <section id="recruiters-speak" className="mb-12">
              <h2 className="text-3xl font-semibold text-[#002147] mb-6">Recruiters Speak</h2>
              <p className="text-lg text-gray-700">
                Our recruiters consistently express satisfaction with the quality of Trident graduates. Many companies return year after year to recruit from our campus due to the skill sets and professionalism demonstrated by our students.
              </p>
              <div className="bg-white p-8 rounded-lg shadow-lg mt-8">
                <h3 className="text-2xl font-semibold text-[#002147]">Testimonial from a Recruiter</h3>
                <blockquote className="text-lg text-gray-700 mt-4 italic">
                  "We have been recruiting from Trident Academy for several years now, and the quality of students has been consistently exceptional. Their technical and soft skills make them valuable assets in any organization." – XYZ Corporation
                </blockquote>
              </div>
            </section>

            {/* Placement Notices Section */}
            <section id="placement-notices" className="mb-12">
              <h2 className="text-3xl font-semibold text-[#002147] mb-6">Placement Notices</h2>
              <p className="text-lg text-gray-700">
                The Placement Cell regularly publishes notices related to placement drives, job openings, training sessions, and other related events. Please check the latest notices for updates.
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 mt-4">
                <li>Notice 1: Upcoming Campus Drive for Infosys – 5th January 2024</li>
                <li>Notice 2: Training on Soft Skills and Interview Preparation – 12th January 2024</li>
                <li>Notice 3: Placement Registration for 2024 Batch – 15th January 2024</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer /> {/* Footer is here */}
    </Layout>
  );
};

export default Placement;
