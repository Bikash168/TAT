import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

const ProgramsSection = () => {
  const router = useRouter();

  const tabs = ["Undergraduate", "Postgraduate"];

  const degreePrograms = {
    Undergraduate: [
      { name: "Biotechnology Engineering", image: "/images/Biotechnology-Engineering.jpg", link: "biotechnology-engineering" },
      { name: "Computer Science Engineering", image: "/images/Computer-Science-Engineering.jpg", link: "computer-science-engineering" },
      { name: "Computer Science & Engineering (AI & ML)", image: "/images/Computer-Science-AI-ML.jpg", link: "cs-ai-ml" },
      { name: "Computer Science & Information Technology", image: "/images/ComputerScienceIT.jpg", link: "cs-it" },
      { name: "Computer Science and Technology", image: "/images/ComputerScienceTechnology.jpg", link: "cs-technology" },
      { name: "Computer Science & Engineering (Data Science)", image: "/images/Data-Science.jpg", link: "cs-data-science" },
      { name: "Electronics Engineering (VLSI)", image: "/images/ElectronicsEngineeringVLSI.jpg", link: "electronics-vlsi" },
      { name: "Electronics and Telecomm Engineering", image: "/images/ElectronicsTelecommEngineering.jpg", link: "electronics-telecommunication" },
      { name: "Mechanical Engineering", image: "/images/MechanicalEngineering.jpg", link: "mechanical-engineering" },
      { name: "Civil Engineering", image: "/images/Civil-Engineering.jpg", link: "civil-engineering" },
      { name: "Electrical & Electronics Engineering", image: "/images/ElectricalElectronicsEngineering.jpg", link: "electrical-electronics" },
    ],
    Postgraduate: [
      { name: "Master in Business Administration", image: "/images/MBA.jpg", link: "mba" },
      { name: "MBA - IEV (Innovation, Entrepreneurship and Venture Development)", image: "/images/MBA_IEV.jpg", link: "mba" },
      { name: "MBA - Environmental Management", image: "/images/MBA_EM.jpg", link: "mba" },
      { name: "Master in Computer Application", image: "/images/MCA.jpg", link: "mca" },
      { name: "M.Tech. in Computer Science and Engineering", image: "/images/MTech_CSE.jpg", link: "computer-science-engineering" },
      { name: "M.Tech. in AI & Machine Learning", image: "/images/MTech_AI_ML.jpg", link: "cs-ai-ml" },
      { name: "M.Tech. in Data Science", image: "/images/MTech_DataScience.jpg", link: "cs-data-science" },
      { name: "M.Tech. in Electronics and Telecommunication Engineering", image: "/images/MTech_ECE.jpg", link: "electronics-telecommunication" },
      { name: "M.Tech. in Electronics Engineering (VLSI Design)", image: "/images/MTech_VLSI.jpg", link: "electronics-vlsi" },
      { name: "M.Tech. in Electric Vehicle Technology", image: "/images/MTech_EV.jpg", link: "electronics-vlsi" },
      { name: "M.Tech. in Energy and Environmental Engineering", image: "/images/MTech_Energy.jpg", link: "electrical-electronics" },
      { name: "M.Tech. in Environmental Engineering", image: "/images/MTech_Environmental.jpg", link: "civil-engineering" },
    ],
  };

  const [activeTab, setActiveTab] = useState("Undergraduate");
  const [programs, setPrograms] = useState(degreePrograms["Undergraduate"]);

  // Update programs when tab changes
  useEffect(() => {
    setPrograms([...degreePrograms[activeTab]]); // Spread to prevent stale state issues
  }, [activeTab]);

  return (
    <section id="programs" className="py-12 bg-gray-100">
      <div className="text-center mb-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Explore Our Degree Programs</h2>
        <p className="text-gray-600 italic">Choose from diverse programs designed for future leaders and innovators.</p>
      </div>

      <div className="container mx-auto px-4">
        {/* Content inside the container */}
      </div>
      {/* Tabs */}
      <div className="flex justify-center gap-3 sm:gap-6 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 text-sm sm:text-lg font-semibold rounded-lg border-2 transition-all duration-300 
                ${activeTab === tab
                ? "bg-blue-600 text-white border-blue-600 shadow-lg"
                : "bg-white text-gray-700 hover:bg-blue-500 hover:text-white border-gray-300"}`}
          >
            {tab} Programs
          </button>
        ))}
      </div>

      {/* Programs List */}
      <div key={activeTab} className="border-4 p-6 rounded-lg bg-white transition-all duration-500 shadow-lg border-blue-600">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {programs.map((program, index) => (
            <div
              key={program.link + index}
              className="cursor-pointer shadow-md rounded-lg overflow-hidden bg-white hover:shadow-xl transition-transform transform hover:scale-105"
              onClick={() => router.push(`/${program.link}`)}
            >
              <div className="relative w-full h-48 md:h-56">
                <Image
                  src={program.image}
                  alt={program.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                  priority
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800">{program.name}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* No Programs Message */}
        {programs.length === 0 && (
          <p className="text-center text-gray-600 italic">No programs available for this category.</p>
        )}
      </div>
    </section>
  );
};

export default ProgramsSection;
