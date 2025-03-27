import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Link from 'next/link';
import { useState } from 'react';

export default function Grievance() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <Layout title="Grievance Redressal | Trident Academy of Technology">
      {/* Hero Section */}
      <section
        className="relative w-full h-[250px] sm:h-[350px] md:h-[400px] bg-cover bg-center flex items-center justify-center mt-28 sm:mt-0"
        style={{
          backgroundImage: "url('/images/grievance-hero4.webp')",
          backgroundPosition: "center center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="relative text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4 mt-16 sm:mt-0">
          Grievance Redressal System
        </h1>
      </section>

      {/* Breadcrumb Navigation */}
      <nav className="container mx-auto px-4 sm:px-6 lg:px-12 py-2 flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-8 mt-6">
        <ul className="flex flex-wrap items-center text-sm sm:text-base lg:text-lg space-x-2">
          <li>
            <Link href="/" className="hover:underline flex items-center">
              <span className="mr-1">🏠</span> Home
            </Link>
          </li>
          <li>/</li>
          <li className="text-gray-600">Grievance</li>
        </ul>
      </nav>

      {/* Main Section */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col lg:flex-row gap-8 mb-16">
        {/* Sidebar */}
        <aside className="lg:w-1/4 w-full bg-[#002147] text-white p-4 rounded-lg shadow-md">
          <button className="lg:hidden text-white mb-2 flex items-center" onClick={toggleSidebar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>

          <div className={`${isSidebarOpen ? 'block' : 'hidden'} lg:block`}>
            <ul className="space-y-3">
              {[
                { name: 'General', link: '#general' },
                { name: 'Women', link: '#women' },
                { name: 'SC/ST', link: '#scst' },
              ].map((item) => (
                <li key={item.name}>
                  <a href={item.link}>
                    <button className="w-full text-left bg-white text-[#002147] p-3 rounded-lg transition duration-300 ease-in-out shadow-md border border-[#002147] hover:bg-[#003652] hover:text-white hover:shadow-lg">
                      {item.name}
                    </button>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <div className="w-full lg:w-3/4 lg:pl-6">
          {/* Introduction Section */}
          <section className="bg-white p-8 rounded-lg shadow-lg mb-12">
            <h2 className="text-3xl font-semibold text-[#002147] mb-6">Grievance Redressal System at TAT</h2>
            <p className="text-lg text-gray-700 text-justify">
            Trident Academy of Technology (TAT) prioritizes maintaining a fair and supportive academic environment. To ensure that the concerns of students, faculty, and staff are effectively addressed, the institution has implemented a structured Grievance Redressal System. This system provides a formal mechanism for voicing concerns related to academic matters, campus facilities, discrimination, harassment, and other grievances. The grievance system is organized into three dedicated committees: the General Grievance Redressal Committee (G-GRC), the Women Grievance Redressal Committee (W-GRC), and the SC/ST Grievance Redressal Committee (S-GRC). Students and staff can submit grievances in writing, via email, or through complaint boxes placed at various locations across the campus. Each committee is responsible for reviewing complaints and ensuring timely resolution in accordance with institutional policies.
            </p>
          </section>

          {/* Grievance Committees */}
          <section id="general" className="mb-12">
            <h2 className="text-3xl font-semibold text-[#002147] mb-6">Grievance Redressal Committees</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-[#002147]">General Grievance Redressal Committee (G-GRC)</h3>
                <p className="text-lg text-gray-700 text-justify">
                The General Grievance Redressal Committee (G-GRC) at TAT is responsible for addressing general complaints from students and faculty. These may include issues related to academic grievances, examination-related concerns, hostel accommodations, campus facilities, and administrative matters. The committee functions as a bridge between students and the institution, ensuring that complaints are heard, assessed, and resolved fairly. The G-GRC follows a structured approach where students can submit grievances through written applications or designated grievance portals. The committee examines each case carefully, collects relevant information, and consults concerned departments before taking necessary actions such as modifying institutional policies, improving facilities, or resolving conflicts.
                </p>
              </div>
              <div id="women">
                <h3 className="text-2xl font-semibold text-[#002147]">Women Grievance Redressal Committee (W-GRC)</h3>
                <p className="text-lg text-gray-700 text-justify">
                The Women Grievance Redressal Committee (W-GRC) is dedicated to ensuring the safety, dignity, and equal rights of female students and staff members. It provides a platform for women to voice concerns related to harassment, gender discrimination, and other safety issues within the campus. The committee actively works towards preventing harassment by conducting awareness programs and workshops on gender sensitization. It ensures swift and confidential handling of complaints regarding harassment or discrimination and offers counseling and guidance to affected individuals while taking necessary disciplinary actions against offenders. The W-GRC aims to create a safe academic space where women can freely express their concerns and receive fair treatment.
                </p>
              </div>
              <div id="scst">
                <h3 className="text-2xl font-semibold text-[#002147]">SC & ST Grievance Redressal Committee (S-GRC)</h3>
                <p className="text-lg text-gray-700 text-justify">
                The SC/ST Grievance Redressal Committee (S-GRC) has been established to address grievances related to caste-based discrimination and to ensure an inclusive environment for students and staff belonging to Scheduled Castes (SC) and Scheduled Tribes (ST). The committee is committed to safeguarding their rights and providing equal opportunities for academic and professional growth. It works towards eliminating discrimination by ensuring that no student faces bias based on caste or social background. The committee also recommends policies that promote inclusivity in admissions, scholarships, and institutional programs while assisting students in overcoming challenges by providing guidance and necessary interventions. Through strict monitoring and awareness programs, the committee ensures a discrimination-free learning environment for all.
                </p>
                <br />
                <p className="text-lg text-gray-700 text-justify">
                All grievances are submitted in writing through designated boxes or online portals. Each committee meets regularly to review complaints and ensure impartial, confidential, and timely redressal. The structured grievance system at TAT fosters a supportive environment for students and staff, upholding fairness, dignity, and mutual respect within the institution.
                </p>
                
              </div>
            </div>
          </section>

          {/* Grievance Submission Form */}
          <section className="bg-white p-8 rounded-lg shadow-lg mb-12">
            <h2 className="text-3xl font-semibold text-[#002147] mb-6">Submit Your Grievance</h2>
            <form action="#" method="POST">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium">Full Name</label>
                  <input type="text" id="name" name="name" className="w-full p-3 mt-2 border rounded-lg" required />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium">Email Address</label>
                  <input type="email" id="email" name="email" className="w-full p-3 mt-2 border rounded-lg" required />
                </div>

                <div>
                  <label htmlFor="grievance-type" className="block text-gray-700 font-medium">Grievance Type</label>
                  <select id="grievance-type" name="grievance-type" className="w-full p-3 mt-2 border rounded-lg" required>
                    <option value="" disabled selected>Select Grievance Type</option>
                    <option value="general">General Grievance</option>
                    <option value="women">Women Related Issue</option>
                    <option value="scst">SC & ST Community Issue</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="grievance-description" className="block text-gray-700 font-medium">Grievance Description</label>
                  <textarea id="grievance-description" name="grievance-description" className="w-full p-3 mt-2 border rounded-lg" rows="4" required></textarea>
                </div>

                <div className="text-center">
                  <button type="submit" className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition">
                    Submit Grievance
                  </button>
                </div>
              </div>
            </form>
          </section>
        </div>
      </main>

      <Footer />
    </Layout>
  );
}
