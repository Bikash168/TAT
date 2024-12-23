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
              Yoga
            </span>
            <h3 className="mt-2 text-lg font-bold text-gray-800 hover:text-blue-600 cursor-pointer">
              World Meditation day
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              On 21st December 2024, our college celebrated World Meditation Day with lively participation from students, faculty, and staff. The event focused on the positive effects of meditation on mental clarity, emotional balance, and overall health.
            </p>
            <div className="mt-3 text-xs text-gray-400 flex justify-between">
              <span>12/21/2024</span>
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
              Academy
            </span>
            <h3 className="mt-2 text-lg font-bold text-gray-800 hover:text-blue-600 cursor-pointer">
              How to Make MBA Learning Rewarding from a Career Perspective
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              A session on "How to Make MBA Learning Rewarding from a Career Perspective" was conducted by Rakesh Kumar, where he guided students on aligning their academic journey with their career goals. The session offered valuable insights on leveraging an MBA to enhance career prospects and achieve long-term success.
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
              BPUT Carnival
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              The BPUT Tech Carnival featured exciting competitions like the AI Project Competition, Social Entrepreneurship Competition, and Rangoli Jhoti Competition, where ideas and creativity merged. These events highlighted the talent and energy of the participants, leaving a strong impression of their skills and creativity.
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
              Program
            </span>
            <h3 className="mt-2 text-lg font-bold text-gray-800 hover:text-blue-600 cursor-pointer">
              FDP on application of Mathematics in data science
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              An FDP on the "Application of Mathematics in Data Science" was conducted, focusing on the essential role mathematics plays in analyzing and interpreting data. The session covered key mathematical concepts and techniques used in data science, helping participants understand how to apply these principles to solve complex problems and make data-driven decisions effectively.
            </p>
            <div className="mt-3 text-xs text-gray-400 flex justify-between">
              <span>12/18/2024</span>
              <span>Reading time 4 min</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
);

export default NewsEvents;
