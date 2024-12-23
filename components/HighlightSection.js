// components/HighlightSection.js
export default function HighlightSection() {
  return (
    <section id="news" className="py-10 bg-gray-50">
      <div className="flex flex-col md:flex-row items-center justify-between bg-white shadow-lg rounded-lg overflow-hidden mx-auto max-w-6xl">
        {/* Image Section */}
        <div className="w-full md:w-1/2 h-64 md:h-auto">
          <img
            src="../images/ALUMNI1.jpg" // Replace with the path to your uploaded image
            alt="Johann Deisenhofer, alumnus and Nobel Laureate"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 p-16 md:p-24 bg-orange-600 text-white min-h-[240px] md:min-h-[340px] lg:min-h-[440px]">
          {/* Content goes here */}
          <blockquote className="text-lg font-bold mb-4">
            "TAT is a global hub for cutting-edge research and innovation"
          </blockquote>
          <p className="text-sm font-semibold mb-6">
            Johann Deisenhofer, alumnus and Nobel Laureate
          </p>
          <a
            href="#"
            className="inline-block bg-white text-blue-600 px-6 py-3 rounded font-semibold shadow-md hover:bg-gray-100 transition"
          >
            READ THE ALUMNI STORY <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto py-16">
        {/* First Highlight */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="h-64">
            <img
              src="../images/partner.jpg" // Replace with your image path
              alt="Your life-long education partner"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-4">Your life-long education partner</h3>
            <p className="text-sm text-gray-600 mb-6">
              The TAT Institute for LifeLong Learning offers evidence-based,
              future-oriented, and sustainable continuing education throughout your career.
            </p>
            <a
              href="#"
              className="inline-block text-blue-600 border border-blue-600 px-4 py-2 rounded hover:bg-blue-600 hover:text-white transition"
            >
              All continuing education offers
            </a>
          </div>
        </div>

        {/* Second Highlight */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="h-64">
            <img
              src="../images/research.jpg" // Replace with your image path
              alt="Schools and research centers"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-4">Schools and research centers</h3>
            <p className="text-sm text-gray-600 mb-6">
              Our schools and research centers are connected across disciplines.
            </p>
            <a
              href="#"
              className="inline-block text-blue-600 border border-blue-600 px-4 py-2 rounded hover:bg-blue-600 hover:text-white transition"
            >
              Overview
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
