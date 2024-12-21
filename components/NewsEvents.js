const NewsEvents = () => (
    <section id="news" className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">News from Trident</h2>
          <p className="text-gray-600">
            Latest updates, research highlights, and events from our institution.
          </p>
        </div>
  
        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* News Card 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="../images/21.12.24-World-Meditation-Day.png"
              alt="Biotech Startups"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                Innovation
              </span>
              <h3 className="mt-2 text-lg font-bold text-gray-800 hover:text-blue-600 cursor-pointer">
                Breeding ground for biotech start-ups
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                Trident Labs foster an outstanding ecosystem for budding
                biotechnology innovations and ventures...
              </p>
              <div className="mt-3 text-xs text-gray-400 flex justify-between">
                <span>12/18/2024</span>
                <span>Reading time 5 min</span>
              </div>
            </div>
          </div>
  
          {/* News Card 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="../images/11.12.24-How-to-make-MbA-learning-rewarding-from-Career-Perspective.png"
              alt="AI Brain Damage"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                AI & Research
              </span>
              <h3 className="mt-2 text-lg font-bold text-gray-800 hover:text-blue-600 cursor-pointer">
                AI pinpoints stroke timing with high accuracy
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                Quick advancements in AI help reduce stroke impact with accurate
                diagnosis in critical scenarios...
              </p>
              <div className="mt-3 text-xs text-gray-400 flex justify-between">
                <span>12/18/2024</span>
                <span>Reading time 3 min</span>
              </div>
            </div>
          </div>
  
          {/* News Card 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="../images/18.11.24-BPUT-Carnival.png"
              alt="TUM Magazine"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">
                Community
              </span>
              <h3 className="mt-2 text-lg font-bold text-gray-800 hover:text-blue-600 cursor-pointer">
                Join us as we turn a new page
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                The new edition of our campus magazine highlights key events,
                alumni achievements, and innovations...
              </p>
              <div className="mt-3 text-xs text-gray-400 flex justify-between">
                <span>12/18/2024</span>
                <span>Reading time 2 min</span>
              </div>
            </div>
          </div>
  
          {/* News Card 4 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="../images/14.11.24-Together-for-a-sustainable-tomorrow.png"
              alt="Biodiversity Impact"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <span className="inline-block bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded">
                Sustainability
              </span>
              <h3 className="mt-2 text-lg font-bold text-gray-800 hover:text-blue-600 cursor-pointer">
                Biodiversity loss due to trade practices
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                Recent studies show a rise in biodiversity loss due to extensive
                agricultural trade across continents...
              </p>
              <div className="mt-3 text-xs text-gray-400 flex justify-between">
                <span>12/18/2024</span>
                <span>Reading time 4 min</span>
              </div>
            </div>
          </div>
        </div>
  
        {/* View All Button */}
        <div className="text-center mt-8">
          <a
            href="#"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
          >
            View All News
          </a>
        </div>
      </div>
    </section>
  );
  
  export default NewsEvents;
  