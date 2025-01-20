import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function OngoingResearch() {
  const projects = [
    {
      sn: 1,
      title: 'Performance Improvement of Antenna Using Metamaterial Applicable for Triband UWB',
      investigator: 'Mr. Satyanarayan Rath',
      status: 'PI',
      designation: 'Asst. Professor',
      dept: 'ETC',
      proposalMode: 'Inter-Departmental',
      duration: '2 Years',
    },
    {
      sn: 2,
      title: 'Reliability Analysis of High K Dielectric in IC Designs',
      investigator: 'Mr. Lalit Kumar Kanoje',
      status: 'PI',
      designation: 'Asst. Professor',
      dept: 'ETC',
      proposalMode: 'Intra-Departmental',
      duration: '1 Year',
    },
    {
      sn: 3,
      title: 'IoT Based Approach for Pilot Study of the Design of a Decision Support System (DSS) Framework for Implementing Climate Smart Agriculture in Odisha',
      investigator: 'Dr. Abhaya Kumar Samal',
      status: 'PI',
      designation: 'Professor',
      dept: 'CSE',
      proposalMode: 'Departmental',
      duration: '1 Year',
    },
    {
      sn: 4,
      title: 'WSN Based Weather Station for Environmental Data Monitoring, Logging and Analysis',
      investigator: 'Mr. Dakshya Prasd Pati',
      status: 'PI',
      designation: 'Asst. Professor',
      dept: 'MCA',
      proposalMode: 'Intra-Departmental',
      duration: '1 Year',
    },
    {
      sn: 5,
      title: 'Tight Binding Model of CMR Property of the Antiferromagnetically Ordered Manganites',
      investigator: 'Dr. Saswati Panda',
      status: 'PI',
      designation: 'Asst. Professor',
      dept: 'Physics',
      proposalMode: 'Departmental',
      duration: '2 Years',
    },
    {
      sn: 6,
      title: 'Water Quality Monitoring In Bhubaneswar- A Smart City',
      investigator: 'Dr. Manas Ranjan Senapati',
      status: 'PI',
      designation: 'Professor',
      dept: 'Chemistry',
      proposalMode: 'Inter-Departmental',
      duration: '2 Years',
    },
    {
      sn: 7,
      title: 'Soft-Computing based Approach for Stock Market Prediction using Artificial Neural Network',
      investigator: 'Mr. Kaustuva Hota',
      status: 'PI',
      designation: 'Asso. Professor',
      dept: 'MBA',
      proposalMode: 'Intra-Departmental',
      duration: '1 Year',
    },
  ];

  return (
    <Layout title="Ongoing Student Research | Trident Academy of Technology">
      {/* Hero Section */}
      <section
        className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] bg-cover bg-center flex items-center justify-center mt-28 sm:mt-0 bg-fixed bg-[url('/images/Ongoing-Student-Research.jpg')]"
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4 mt-16 sm:mt-0">
          Ongoing Intramural Funded Research Projects
        </h1>
      </section>

      {/* Breadcrumb Navigation */}
      <nav className="container mx-auto px-4 sm:px-6 lg:px-12 py-2 flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-8 mt-6">
        <ul className="flex items-center space-x-2 text-sm sm:text-base lg:text-lg">
          <li>
            <Link href="/" className="hover:underline flex items-center">
              <span className="mr-1">🏠</span> Home
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link href="/research" className="hover:underline">
              Research
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link href="/intramural-funding" className="hover:underline">
              Intramural Funding (TIFR)
            </Link>
          </li>
          <li>/</li>
          <li className="text-gray-600">Ongoing Student Research</li>
        </ul>
      </nav>

      {/* Main Section */}
      <main className="container mx-auto px-6 sm:px-8 lg:px-12 py-8 flex flex-col gap-8 mb-16">
        <section id="ongoing-research" className="space-y-4">
          <h2 className="text-3xl font-semibold text-[#002147]">Ongoing Intramural Funded Research Projects</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse text-lg text-gray-700">
              <thead>
                <tr className="bg-[#002147] text-white">
                  {['SN', 'Title', 'Investigator', 'Status', 'Designation', 'Dept.', 'Proposal Mode', 'Duration'].map(
                    (heading) => (
                      <th key={heading} className="px-4 py-4 text-left text-xs sm:text-base">
                        {heading}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {projects.map((project, index) => (
                  <tr key={`${project.sn}-${index}`} className="border-b">
                    {Object.values(project).map((value, i) => (
                      <td key={i} className="px-4 py-4 text-xs sm:text-base">
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>

      <Footer />
    </Layout>
  );
}
