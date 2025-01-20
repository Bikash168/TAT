import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function OngoingResearch() {
  const projects = [
    {
      slNo: 1,
      studentNames: [
        'Babysradha Sinha (4th yr)',
        'Priyanka Priya (4th yr)',
        'Ananya Nayak (4th yr)',
        'Aarti Kumari (4th yr)',
      ],
      facultyGuides: ['Rina Mahakud', 'Satyanarayan Rath', 'Minu Samantaray'],
      researchTitle: 'Energy Management in wireless sensor network using PEGASIS',
      publication: '2nd International Conference on Intelligent Computing, Communication and Convergence (ICCC-16), Elsevier, ISBN: 978-93-82208-66-14, 24th-25th Jan 2016',
    },
    {
      slNo: 2,
      studentNames: ['Debasis Mohanta (Ph.D Scholar)', 'Pranab Ku. Behari (M.Tech, 2nd yr)'],
      facultyGuides: ['Sakuntala Mahapatra', 'Prasant Mohanty', 'Santanu Ku. Nayak (Berhampur University)'],
      researchTitle: 'A Neuro-fuzzy based model for analysis of an ECG signal using Wavelet Packet Tree',
      publication: 'Procedia Computer Science (Elsevier), ICCC-2016',
    },
    {
      slNo: 3,
      studentNames: ['Shubhashree Ray (3rd yr)'],
      facultyGuides: ['Sumant Kumar Mohapatra', 'Sushil Kumar Mohapatra', 'Sukant Behera'],
      researchTitle: 'Heatworm tracking using FGMP algorithm in dogs intestine',
      publication: '2015 IEEE International Conference on Computer Graphics, Vision and Information Security (IEEE-CGVIS-2016), KIIT University, Bhubaneswar, 2-3 Nov 2015, DOI: 10.1109/CGVIS.2015.7449905 (Available in IEEE Xplore)',
    },
    {
      slNo: 4,
      studentNames: ['Sumit Ghosh (3rd yr)', 'Smruti Ranjan Dash (3rd yr)'],
      facultyGuides: ['Sumant Kumar Mohapatra', 'Sushil Kumar Mohapatra'],
      researchTitle: 'Green Aspects And Solutions For 5G Mobile Network Design',
      publication: 'AISC series Springer publications (under process)',
    },
    {
      slNo: 5,
      studentNames: ['Sumit Ghosh (3rd yr)'],
      facultyGuides: ['Sumant Kumar Mohapatra', 'Sushil Kumar Mohapatra', 'Sakuntala Mahapatra'],
      researchTitle: 'A Gynecology Problem Solution By Tracing Multi Moving Human Sperm Using Wavelet Based Mixture Of Gaussian Approach',
      publication: 'In proceedings of IEEE-MICROCOM 2016, NIT Durgapur (will be indexed in IEEE-Xplore)',
    },
    // Additional projects can be added here...
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
          <h2 className="text-3xl font-semibold text-[#002147]">
            Ongoing Intramural Funded Research Projects
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse text-sm sm:text-base text-gray-700">
              <thead>
                <tr className="bg-[#002147] text-white">
                  {['SN', 'Name of the Student(s)', 'Faculty Guide(s)', 'Research Projects', 'Publication/Showcase'].map(
                    (heading) => (
                      <th key={heading} className="px-4 py-4 text-left">
                        {heading}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {projects.map((project, index) => (
                  <tr key={index} className="border-b">
                    <td className="px-4 py-4">{project.slNo}</td>
                    <td className="px-4 py-4">{project.studentNames.join(', ')}</td>
                    <td className="px-4 py-4">{project.facultyGuides.join(', ')}</td>
                    <td className="px-4 py-4">{project.researchTitle}</td>
                    <td className="px-4 py-4">{project.publication}</td>
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
