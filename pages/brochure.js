import Layout from "../components/Layout";
import Footer from "../components/Footer";
import { Button } from "../components/button";

import { Download, Eye } from "lucide-react";

const BrochurePage = () => {
  return (
    <Layout
      title="Brochure - Trident Academy of Technology"
      description="Download the latest brochure for Trident Academy of Technology. Explore our courses, infrastructure, and achievements."
      keywords="Brochure, Download, Trident Academy, Courses, Admission"
    >
      {/* Hero Section */}
      <div className="relative w-full h-[350px] flex flex-col items-center justify-center bg-blue-900 text-white text-center px-6">
        <h1 className="text-xl sm:text-3xl md:text-4xl font-bold uppercase">Download Our Brochure</h1>
        <p className="mt-3 text-base sm:text-lg text-gray-200 px-2 max-w-2xl">
          Discover everything about Trident Academy of Technology—Courses, Infrastructure, and Achievements.
        </p>
      </div>

      {/* Brochure Section */}
      <div className="container mx-auto px-4 py-10 text-center">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">🎓 Explore Our Brochure</h2>
          <p className="text-lg text-gray-700 mb-6">Get detailed insights into our courses, facilities, and admissions process.</p>
          
          {/* Brochure Image Placeholder */}
          <div className="border border-gray-300 rounded-md overflow-hidden shadow-md mb-4">
            <img src="/images/brochure-preview.jpg" alt="Brochure Preview" className="w-full" />
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center gap-4">
            <Button asChild className="bg-blue-700 hover:bg-blue-800 text-white flex items-center">
              <a href="/pdfs/Student-Hand-Book-Revised.pdf" target="_blank" rel="noopener noreferrer">
                <Eye className="w-5 h-5 mr-2" /> View Brochure
              </a>
            </Button>
            <Button asChild className="bg-green-600 hover:bg-green-700 text-white flex items-center">
              <a href="/pdfs/Student-Hand-Book-Revised.pdf" download>
                <Download className="w-5 h-5 mr-2" /> Download Brochure
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Highlights Section */}
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">🌟 Why Choose Trident Academy?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-300">
            <h3 className="text-2xl font-semibold text-blue-700 mb-3">🏫 Modern Infrastructure</h3>
            <p className="text-lg text-gray-700">State-of-the-art labs, libraries, and classrooms equipped with advanced technology.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-300">
            <h3 className="text-2xl font-semibold text-green-700 mb-3">📚 Diverse Courses</h3>
            <p className="text-lg text-gray-700">Wide range of UG & PG programs in Engineering, Management, and Biotechnology.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-300">
            <h3 className="text-2xl font-semibold text-red-700 mb-3">🎖 Achievements & Placements</h3>
            <p className="text-lg text-gray-700">Top-notch placements and collaborations with leading industries worldwide.</p>
          </div>
        </div>
      </div>

      <Footer />
    </Layout>
  );
};

export default BrochurePage;
