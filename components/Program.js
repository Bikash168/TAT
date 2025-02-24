import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

const DegreePrograms = () => {
  const [activeTab, setActiveTab] = useState("Undergraduate");
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
      { name: "Master in Computer Application", image: "/images/MCA.jpg", link: "mca" },
    ],
  };

  return (
    <section id="programs" className="py-10 bg-gray-100">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Explore Our Degree Programs</h2>
        <p className="text-gray-600 italic">Choose from diverse programs designed for future leaders and innovators.</p>
      </div>
      <div className="container mx-auto px-4">
        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded font-semibold transition border-b-4 
                ${activeTab === tab ? "bg-blue-600 text-white border-blue-600" : "bg-gray-300 text-gray-700 hover:bg-gray-400 border-gray-400"}`}
            >
              {tab} Programs
            </button>
          ))}
        </div>

        {/* Dynamic Content */}
        <div className={`border-4 p-6 rounded-lg bg-white ${activeTab === "Undergraduate" ? "border-blue-600" : "border-gray-500"}`}>
          {/* Grid Section */}
          <div className="grid grid-cols-5 gap-6">
            {degreePrograms[activeTab]?.slice(0, 5).map((program) => (
              <div
                key={program.link}
                className="cursor-pointer shadow-md rounded-lg overflow-hidden bg-white hover:shadow-lg transition"
                onClick={() => router.push(`/programs/${program.link}`)}
              >
                <div className="w-full h-56 relative">
                  <Image
                    src={program.image}
                    alt={program.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                    priority
                  />
                </div>
                <div className="p-3 text-center">
                  <h3 className="text-base font-semibold text-gray-800">{program.name}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-6 gap-6 mt-6">
            {degreePrograms[activeTab]?.slice(5, 11).map((program) => (
              <div
                key={program.link}
                className="cursor-pointer shadow-md rounded-lg overflow-hidden bg-white hover:shadow-lg transition"
                onClick={() => router.push(`/programs/${program.link}`)}
              >
                <div className="w-full h-56 relative">
                  <Image
                    src={program.image}
                    alt={program.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                    priority
                  />
                </div>
                <div className="p-3 text-center">
                  <h3 className="text-base font-semibold text-gray-800">{program.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DegreePrograms;
