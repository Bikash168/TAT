import { useState } from "react";

const DegreePrograms = () => {
  const [activeTab, setActiveTab] = useState("Engineering");

  // Menu Tabs for Degree Programs
  const tabs = ["Engineering", "Management", "Biotechnology", "Social Work & Public Health"];

  // Content for each tab
  const programContent = {
    Engineering: {
      title: "Engineering",
      description: "Explore innovative engineering programs that equip students with the skills to solve real-world challenges.",
      img: "/images/engineering.jpg",
      bgColor: "bg-blue-600",
      borderColor: "border-blue-600",
    },
    Management: {
      title: "Management",
      description: "Gain expertise in business, leadership, and strategic decision-making with our industry-oriented management programs.",
      img: "/images/management.jpg",
      bgColor: "bg-green-600",
      borderColor: "border-green-600",
    },
    Biotechnology: {
      title: "Biotechnology",
      description: "Discover advancements in biotechnology with hands-on learning in research and innovation.",
      img: "/images/biotech.jpg",
      bgColor: "bg-purple-700",
      borderColor: "border-purple-700",
    },
    "Social Work & Public Health": {
      title: "Social Work & Public Health",
      description: "Develop skills to drive social change and improve public health through dedicated programs in community engagement.",
      img: "/images/social-work.jpg",
      bgColor: "bg-red-600",
      borderColor: "border-red-600",
    },
  };

  return (
    <section id="programs" className="py-10 bg-gray-100">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Explore Our Degree Programs</h2>
        <p className="text-gray-600 italic">
          Choose from diverse programs designed for future leaders and innovators.
        </p>
      </div>
      <div className="container mx-auto px-4">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded font-medium transition border-b-2 
                ${
                  activeTab === tab
                    ? `bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 text-white border-gray-500`
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Dynamic Content */}
        <div
          className={`flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8 border-4 ${programContent[activeTab].borderColor} p-6 rounded-lg`}
        >
          {/* Image Section */}
          <div
            className={`relative w-full md:w-1/2 h-72 ${programContent[activeTab].bgColor} flex items-center justify-center`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center rounded-md"
              style={{
                backgroundImage: `url(${programContent[activeTab].img})`,
              }}
            />
          </div>

          {/* Content Section */}
          <div className={`w-full md:w-1/2 p-6 text-white rounded-lg ${programContent[activeTab].bgColor}`}>
            <h2 className="text-2xl font-bold">{programContent[activeTab].title}</h2>
            <p className="mt-4">{programContent[activeTab].description}</p>
            <a
              href="#"
              className="mt-6 inline-block text-white font-medium border border-white px-6 py-2 rounded hover:bg-white hover:text-gray-800 transition"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DegreePrograms;
