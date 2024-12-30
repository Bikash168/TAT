// pages/grievance.js
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Grievance() {
  return (
    <Layout title="Grievance Redressal | Trident Academy of Technology">
      <main className="flex container mx-auto px-4 lg:px-16 py-12">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Sidebar Menu */}
          <div className="w-full lg:w-1/4 p-4 lg:p-6 bg-[#002147] shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold text-white mb-6">Activities Menu</h2>
            <ul className="mt-6 space-y-3">
              {[
                { name: 'General', link: '#general' },
                { name: 'Women', link: '#women' },
                { name: 'SC/ST', link: '#scst' }
              ].map((item) => (
                <li key={item.name} className="hover:bg-[#004D73] p-2 rounded-lg transition">
                  <Link href={item.link} className="text-white hover:text-[#A8C7E6]">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Main Content Section */}
          <section className="w-3/4 lg:w-4/5 pl-6">
            {/* Header Section */}
            <section className="text-center mb-12">
              <h1 className="text-4xl font-semibold text-[#002147]">Grievance Redressal</h1>
              <p className="text-lg text-gray-700 mt-4">
                TAT has a sound and effective Grievance Redressal System in place to deal with day-to-day grievances from various stakeholders. We are committed to addressing grievances in a timely and just manner to maintain a positive academic environment.
              </p>
            </section>

            {/* Grievance Redressal Forums Section */}
            <section className="bg-white p-8 rounded-lg shadow-lg mb-12" id="general">
              <h2 className="text-3xl font-semibold text-[#002147] mb-6">Grievance Redressal Forums</h2>
              <p className="text-lg text-gray-700 mb-6">
                TAT has framed three Grievance Redressal Forums to provide easy and accessible mechanisms for the prompt disposal of grievances from specific community segments.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold text-[#002147]">General Grievance Redressal Committee (G-GRC)</h3>
                  <p className="text-lg text-gray-700">
                    This forum addresses grievances and issues that do not fall under the specific categories of Women and SC/ST Grievance Redressal Committees.
                  </p>
                </div>
                <div id="women">
                  <h3 className="text-2xl font-semibold text-[#002147]">Women Grievance Redressal Committee (W-GRC)</h3>
                  <p className="text-lg text-gray-700">
                    This forum is dedicated to addressing grievances and issues related to women students and staff members only.
                  </p>
                </div>
                <div id="scst">
                  <h3 className="text-2xl font-semibold text-[#002147]">SC & ST Grievance Redressal Committee (S-GRC)</h3>
                  <p className="text-lg text-gray-700">
                    This forum handles grievances and issues specifically related to the SC & ST community.
                  </p>
                </div>
              </div>
            </section>

            {/* Objectives Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-semibold text-[#002147] text-center mb-6">Objectives</h2>
              <div className="space-y-4 text-lg text-gray-700">
                <ul className="list-disc pl-6">
                  <li>Introduce a fair, impartial, and unbiased mechanism for redressal of various issues.</li>
                  <li>Encourage stakeholders to express grievances and issues freely, without fear of victimization.</li>
                  <li>Develop a responsive and accountable attitude among stakeholders to maintain a harmonious academic atmosphere.</li>
                  <li>Ensure that grievances are resolved promptly, impartially, and with utmost confidentiality.</li>
                  <li>Uphold the dignity of the institute by promoting cordial inter-community relationships.</li>
                  <li>Advise stakeholders to respect the right and dignity of one another and not act vindictively.</li>
                </ul>
              </div>
            </section>

            {/* Grievance Submission Form */}
            <section className="bg-white p-8 rounded-lg shadow-lg mb-12">
              <h2 className="text-3xl font-semibold text-[#002147] mb-6">Submit Your Grievance</h2>
              <form action="#" method="POST">
                <div className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  {/* Grievance Type Dropdown */}
                  <div>
                    <label htmlFor="grievance-type" className="block text-gray-700 font-medium">Grievance Type</label>
                    <select
                      id="grievance-type"
                      name="grievance-type"
                      className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="" disabled selected>Select Grievance Type</option>
                      <option value="general">General Grievance</option>
                      <option value="women">Women Related Issue</option>
                      <option value="scst">SC & ST Community Issue</option>
                    </select>
                  </div>

                  {/* Grievance Description */}
                  <div>
                    <label htmlFor="grievance-description" className="block text-gray-700 font-medium">Grievance Description</label>
                    <textarea
                      id="grievance-description"
                      name="grievance-description"
                      className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      rows="4"
                      placeholder="Describe your grievance in detail..."
                      required
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="text-center">
                    <button
                      type="submit"
                      className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
                    >
                      Submit Grievance
                    </button>
                  </div>
                </div>
              </form>
            </section>

            {/* Contact Information Section */}
            <section className="bg-[#f8fafc] p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-semibold text-[#002147] text-center mb-6">Contact Information</h2>
              <p className="text-lg text-gray-700 text-center mb-4">
                For any urgent issues, please feel free to reach out directly through the contact details below.
              </p>
              <div className="text-center">
                <p className="text-lg text-gray-700">
                  <strong>Email:</strong> <a href="mailto:grievance@tat.ac.in" className="text-blue-500 hover:underline">grievance@tat.ac.in</a>
                </p>
                <p className="text-lg text-gray-700">
                  <strong>Phone:</strong> +91 123 456 7890
                </p>
                <p className="text-lg text-gray-700">
                  <strong>Office Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM
                </p>
              </div>
            </section>
          </section>
        </div>
      </main>
      <Footer /> {/* Footer is here */}
    </Layout>
  );
}
