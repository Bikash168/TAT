// pages/career.js
import Layout from '../components/Layout';
import Footer from '../components/Footer';

export default function Career() {
  return (
    <Layout title="Careers | Trident Academy of Technology">
      <main className="mt-20 sm:mt-8 md:mt-6 lg:mt-4 xl:mt-2">
        {/* Header Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-semibold text-[#002147]">Join Our Team</h1>
          <p className="text-lg text-gray-700 mt-4">
            At Trident Academy of Technology, we believe in fostering an environment of innovation, collaboration, and excellence. Join us and become a part of our mission to provide world-class education and shape the future.
          </p>
        </section>

        {/* Job Listings Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-[#002147] text-center mb-6">Current Job Openings</h2>

          {/* Job Listing 1 */}
          <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
            <h3 className="text-2xl font-semibold text-[#002147]">Assistant Professor - Computer Science</h3>
            <p className="text-lg text-gray-700 mt-4">
              <strong>Location:</strong> Trident Academy of Technology, Bhubaneswar<br />
              <strong>Department:</strong> Computer Science<br />
              <strong>Experience Required:</strong> 2+ years in teaching or industry<br />
              <strong>Qualifications:</strong> Ph.D. or Master's in Computer Science or related fields.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              We are looking for passionate educators to contribute to our growing Computer Science department. If you have a drive for teaching and research, apply now!
            </p>
            <div className="mt-4">
              <a href="#apply" className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
                Apply Now
              </a>
            </div>
          </div>

          {/* Job Listing 2 */}
          <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
            <h3 className="text-2xl font-semibold text-[#002147]">Assistant Professor - Mechanical Engineering</h3>
            <p className="text-lg text-gray-700 mt-4">
              <strong>Location:</strong> Trident Academy of Technology, Bhubaneswar<br />
              <strong>Department:</strong> Mechanical Engineering<br />
              <strong>Experience Required:</strong> 3+ years in teaching or industry<br />
              <strong>Qualifications:</strong> Ph.D. or Master's in Mechanical Engineering.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              Join our Mechanical Engineering department and help foster the next generation of engineers. Apply today!
            </p>
            <div className="mt-4">
              <a href="#apply" className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
                Apply Now
              </a>
            </div>
          </div>

          {/* Job Listing 3 */}
          <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
            <h3 className="text-2xl font-semibold text-[#002147]">Administrative Officer</h3>
            <p className="text-lg text-gray-700 mt-4">
              <strong>Location:</strong> Trident Academy of Technology, Bhubaneswar<br />
              <strong>Department:</strong> Administration<br />
              <strong>Experience Required:</strong> 5+ years in administrative roles<br />
              <strong>Qualifications:</strong> Graduate or Postgraduate in any discipline.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              We are looking for an experienced Administrative Officer to manage various academic and non-academic activities within the institution.
            </p>
            <div className="mt-4">
              <a href="#apply" className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
                Apply Now
              </a>
            </div>
          </div>
        </section>

        {/* Application Form Section */}
        <section id="apply" className="bg-white p-8 rounded-lg shadow-lg mb-12">
          <h2 className="text-3xl font-semibold text-[#002147] text-center mb-6">Submit Your Application</h2>
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

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-gray-700 font-medium">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Resume Upload */}
              <div>
                <label htmlFor="resume" className="block text-gray-700 font-medium">Upload Resume</label>
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Cover Letter */}
              <div>
                <label htmlFor="cover-letter" className="block text-gray-700 font-medium">Cover Letter</label>
                <textarea
                  id="cover-letter"
                  name="cover-letter"
                  className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="4"
                  placeholder="Tell us why you're a great fit for the position"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  Submit Application
                </button>
              </div>
            </div>
          </form>
        </section>

        {/* Contact Information Section */}
        <section className="bg-[#f8fafc] p-8 rounded-lg shadow-lg mb-12">
          <h2 className="text-3xl font-semibold text-[#002147] text-center mb-6">Contact Information</h2>
          <p className="text-lg text-gray-700 text-center mb-4">
            If you have any questions about our job openings or application process, feel free to reach out.
          </p>
          <div className="text-center">
            <p className="text-lg text-gray-700">
              <strong>Email:</strong> <a href="mailto:careers@tat.ac.in" className="text-blue-500 hover:underline">careers@tat.ac.in</a>
            </p>
            <p className="text-lg text-gray-700">
              <strong>Phone:</strong> +91 123 456 7890
            </p>
          </div>
        </section>
      </main>
      <Footer /> {/* Footer is here */}
    </Layout>
  );
}
