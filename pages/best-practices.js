import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Link from 'next/link';

const BestPractices = () => {
  return (
    <Layout title="Best Practices | Trident Academy of Technology">
      <main className="flex container mx-auto px-4 lg:px-16 my-8">

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Sidebar Menu */}
          <div className="w-full lg:w-1/4 p-4 lg:p-6 bg-[#002147] shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold text-white mb-6">BEST PRACTICES</h2>
            <ul className="mt-6 space-y-3">
              {[ 
                { name: 'Quality/Accreditation', link: '#quality-accreditation' },
                { name: 'Implementation of SDGs', link: '#implementation-of-sdgs' },
                { name: 'Policies', link: '#policies' },
                { name: 'NBA SAR', link: '#nba-sar' },
                { name: 'Peer Audits', link: '#peer-audits' },
                { name: 'E-Governance', link: '#e-governance' },
                { name: 'College Committees', link: '#college-committees' },
                { name: 'Student Council', link: '#student-council' },
                { name: 'Career Guidance', link: '#career-guidance' },
                { name: 'Proctorial System', link: '#proctorial-system' },
                { name: 'Guardians Meet', link: '#guardians-meet' },
                { name: 'Learn with Fun', link: '#learn-with-fun' },
                { name: 'Attendance Monitoring', link: '#attendance-monitoring' },
                { name: 'Lab QUIZZES', link: '#lab-quizzes' },
                { name: 'Special Care Groups', link: '#special-care-groups' },
                { name: 'Sustainability (TCSR)', link: '#sustainability' },
                { name: 'IQAC', link: '#iqac' },
                { name: 'Best Practice – 1', link: '#best-practice-1' },
                { name: 'Best Practice – 2', link: '#best-practice-2' },
                { name: 'Institutional Social Responsibility (ISR)', link: '#isr' },
                { name: 'OJEE & AICTE', link: '#ojee-aicte' },
                { name: 'Publication', link: '#publication' },
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
            {/* Quality/Accreditation Section */}
            <section id="quality-accreditation" className="mb-12">
              <h2 className="text-3xl font-semibold text-[#002147] mb-6">Quality/Accreditation</h2>
              <p className="text-lg text-gray-700">
                Trident Academy of Technology is committed to maintaining the highest standards of quality in education. The institute is accredited by national agencies such as NAAC and NBA, ensuring continuous improvement and quality assurance in all programs.
              </p>
            </section>

            {/* Implementation of SDGs Section */}
            <section id="implementation-of-sdgs" className="mb-12">
              <h2 className="text-3xl font-semibold text-[#002147] mb-6">Implementation of SDGs</h2>
              <p className="text-lg text-gray-700">
                We actively contribute towards achieving the Sustainable Development Goals (SDGs) by integrating them into our academic curriculum and promoting projects that focus on environmental sustainability, social development, and economic progress.
              </p>
            </section>

            {/* Policies Section */}
            <section id="policies" className="mb-12">
              <h2 className="text-3xl font-semibold text-[#002147] mb-6">Policies</h2>
              <p className="text-lg text-gray-700">
                The institution has well-defined policies for academic, administrative, and governance matters, ensuring that every aspect of the college functions in an organized, efficient, and transparent manner.
              </p>
            </section>

            {/* NBA SAR Section */}
            <section id="nba-sar" className="mb-12">
              <h2 className="text-3xl font-semibold text-[#002147] mb-6">NBA SAR</h2>
              <p className="text-lg text-gray-700">
                The NBA Self-Assessment Report (SAR) is a comprehensive document that reflects the quality standards and continuous improvement efforts within our institution to achieve NBA accreditation.
              </p>
            </section>

            {/* Peer Audits Section */}
            <section id="peer-audits" className="mb-12">
              <h2 className="text-3xl font-semibold text-[#002147] mb-6">Peer Audits</h2>
              <p className="text-lg text-gray-700">
                Regular peer audits are conducted to evaluate the quality of education, facilities, and administrative processes. These audits help identify areas of improvement and ensure alignment with national and international standards.
              </p>
            </section>

            {/* E-Governance Section */}
            <section id="e-governance" className="mb-12">
              <h2 className="text-3xl font-semibold text-[#002147] mb-6">E-Governance</h2>
              <p className="text-lg text-gray-700">
                Our institute leverages e-governance tools to streamline administrative processes, enhance transparency, and improve communication between students, faculty, and management.
              </p>
            </section>

            {/* College Committees Section */}
            <section id="college-committees" className="mb-12">
              <h2 className="text-3xl font-semibold text-[#002147] mb-6">College Committees</h2>
              <p className="text-lg text-gray-700">
                Various committees, including the Academic Council, Examination Committee, and Discipline Committee, play a crucial role in the effective management and smooth functioning of the institution.
              </p>
            </section>

            {/* Student Council Section */}
            <section id="student-council" className="mb-12">
              <h2 className="text-3xl font-semibold text-[#002147] mb-6">Student Council</h2>
              <p className="text-lg text-gray-700">
                The Student Council is a platform that empowers students to represent their peers and actively participate in the decision-making process for various academic and co-curricular activities.
              </p>
            </section>

            {/* Career Guidance Section */}
            <section id="career-guidance" className="mb-12">
              <h2 className="text-3xl font-semibold text-[#002147] mb-6">Career Guidance</h2>
              <p className="text-lg text-gray-700">
                Our Career Guidance Cell offers support in career planning, interview preparation, and placement opportunities. Various workshops and sessions are conducted to equip students with the necessary skills for the job market.
              </p>
            </section>

            {/* Proctorial System Section */}
            <section id="proctorial-system" className="mb-12">
              <h2 className="text-3xl font-semibold text-[#002147] mb-6">Proctorial System</h2>
              <p className="text-lg text-gray-700">
                The Proctorial System ensures that students receive guidance and support from faculty mentors, helping them navigate academic challenges and personal growth during their time at the institute.
              </p>
            </section>

            {/* Guardians Meet Section */}
            <section id="guardians-meet" className="mb-12">
              <h2 className="text-3xl font-semibold text-[#002147] mb-6">Guardians Meet</h2>
              <p className="text-lg text-gray-700">
                Regular meetings with guardians are organized to discuss students' academic progress, personal development, and any concerns they may have regarding their education.
              </p>
            </section>

            {/* Learn with Fun Section */}
            <section id="learn-with-fun" className="mb-12">
              <h2 className="text-3xl font-semibold text-[#002147] mb-6">Learn with Fun</h2>
              <p className="text-lg text-gray-700">
                We believe in learning through engaging activities such as quizzes, workshops, and cultural events. These events promote creativity, teamwork, and holistic development among students.
              </p>
            </section>

            {/* Attendance Monitoring Section */}
            <section id="attendance-monitoring" className="mb-12">
              <h2 className="text-3xl font-semibold text-[#002147] mb-6">Attendance Monitoring</h2>
              <p className="text-lg text-gray-700">
                The attendance monitoring system ensures regular tracking of students' attendance. This helps in improving discipline and academic performance.
              </p>
            </section>

            {/* Lab QUIZZES Section */}
            <section id="lab-quizzes" className="mb-12">
              <h2 className="text-3xl font-semibold text-[#002147] mb-6">Lab QUIZZES</h2>
              <p className="text-lg text-gray-700">
                Lab quizzes and practical assessments are an integral part of the curriculum. They allow students to demonstrate their understanding of key concepts through hands-on activities.
              </p>
            </section>

            {/* Special Care Groups Section */}
            <section id="special-care-groups" className="mb-12">
              <h2 className="text-3xl font-semibold text-[#002147] mb-6">Special Care Groups</h2>
              <p className="text-lg text-gray-700">
                We have special care groups for students who need additional support, whether academically, emotionally, or socially. These groups ensure that all students receive equal opportunities for success.
              </p>
            </section>

            {/* Sustainability (TCSR) Section */}
            <section id="sustainability" className="mb-12">
              <h2 className="text-3xl font-semibold text-[#002147] mb-6">Sustainability (TCSR)</h2>
              <p className="text-lg text-gray-700">
                The Institute is committed to sustainability through its TCSR (Trident Corporate Social Responsibility) initiatives, which focus on green campus initiatives, energy conservation, and environmental awareness.
              </p>
            </section>

            {/* IQAC Section */}
            <section id="iqac" className="mb-12">
              <h2 className="text-3xl font-semibold text-[#002147] mb-6">IQAC</h2>
              <p className="text-lg text-gray-700">
                The Internal Quality Assurance Cell (IQAC) monitors the academic and administrative processes within the institution, ensuring continuous quality improvement in all areas.
              </p>
            </section>

            {/* Best Practices Section */}
            <section id="best-practice-1" className="mb-12">
              <h2 className="text-3xl font-semibold text-[#002147] mb-6">Best Practice – 1</h2>
              <p className="text-lg text-gray-700">
                Description of the first best practice at the institution, focusing on effective teaching methods, research contributions, or community outreach.
              </p>
            </section>

            <section id="best-practice-2" className="mb-12">
              <h2 className="text-3xl font-semibold text-[#002147] mb-6">Best Practice – 2</h2>
              <p className="text-lg text-gray-700">
                Description of the second best practice at the institution, such as the implementation of innovative technologies or academic excellence programs.
              </p>
            </section>

            {/* ISR Section */}
            <section id="isr" className="mb-12">
              <h2 className="text-3xl font-semibold text-[#002147] mb-6">Institutional Social Responsibility (ISR)</h2>
              <p className="text-lg text-gray-700">
                We engage in various social responsibility initiatives to give back to society, such as awareness programs, donations, and outreach activities.
              </p>
            </section>

            {/* OJEE & AICTE Section */}
            <section id="ojee-aicte" className="mb-12">
              <h2 className="text-3xl font-semibold text-[#002147] mb-6">OJEE & AICTE</h2>
              <p className="text-lg text-gray-700">
                Our institution is recognized by AICTE, and we encourage students to take the Odisha Joint Entrance Examination (OJEE) for admission into various courses.
              </p>
            </section>

            {/* Publication Section */}
            <section id="publication" className="mb-12">
              <h2 className="text-3xl font-semibold text-[#002147] mb-6">Publication</h2>
              <p className="text-lg text-gray-700">
                We publish research articles, journals, and conference papers regularly to contribute to academic and industrial knowledge.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer /> {/* Footer is here */}
    </Layout>
  );
};

export default BestPractices;
