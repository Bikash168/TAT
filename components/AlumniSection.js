export default function HighlightSection() {
  return (
    <section id="alumni" className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto overflow-hidden rounded-lg shadow-lg bg-white relative">
        
        {/* Alumni Content Section */}
        <div className="flex flex-col md:flex-row items-center">
          
          {/* Text Section */}
          <div className="w-full md:w-1/2 px-10 py-16 md:p-20 bg-gradient-to-br from-orange-500 to-red-600 text-white">
            <blockquote className="text-2xl md:text-3xl font-extrabold leading-tight italic mb-6">
              "TAT is a global hub for cutting-edge research and innovation."
            </blockquote>
            <p className="text-lg font-semibold mb-8 opacity-90">
              — Johann Deisenhofer, Nobel Laureate & Distinguished Alumnus
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-100 transition transform hover:scale-105"
            >
              Read the Alumni Story <span aria-hidden="true">↗</span>
            </a>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2 h-72 md:h-auto">
            <img
              src="/images/alumni-success.jpg"
              alt="TAT Alumni"
              className="w-full h-full object-cover"
            />
          </div>

        </div>

        {/* Decorative Line Below the Box */}
        <div className="h-2 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 w-full mt-6"></div>
      
      </div>
    </section>
  );
}
