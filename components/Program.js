import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image"; // Import the Image component

const DegreePrograms = () => {
  const [activeTab, setActiveTab] = useState("Engineering");
  const router = useRouter();

  const tabs = ["Engineering", "Management", "Biotechnology", "IT & Science"];

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
    "IT & Science": {
      title: "IT & Science",
      description: "Develop skills to drive social change and improve public health through dedicated programs in community engagement.",
      img: "/images/social-work.jpg",
      bgColor: "bg-red-600",
      borderColor: "border-red-600",
    },
  };

  const degreePrograms = {
    Engineering: [
      { name: "Biotechnology Engineering", slug: "be-btech", image: "/images/Biotechnology-Engineering.jpg", link: "biotechnology-engineering" },
      { name: "Computer Science & Engineering (AI & ML)", slug: "cse-ai-ml-btech", image: "/images/Computer-Science-AI-ML.jpg", link: "cs-ai-ml" },
      { name: "Computer Science & Information Technology", slug: "csit-btech", image: "/images/ComputerScienceIT.jpg", link: "cs-it" },
      { name: "Computer Science and Technology", slug: "cst-btech", image: "/images/ComputerScienceTechnology.jpg", link: "cs-technology" },
      { name: "Computer Science & Engineering (Data Science)", slug: "csedt-btech", image: "/images/Data-Science.jpg", link: "cs-data-science" },
      { name: "Electronics Engineering", slug: "eee-btech", image: "/images/ElectronicsEngineeringVLSI.jpg", link: "electronics-vlsi" },
      { name: "Electronics and Telecomm Engineering", slug: "ete-btech", image: "/images/ElectronicsTelecommEngineering.jpg", link: "electronics-telecommunication" },
      { name: "Mechanical Engineering", slug: "me-btech", image: "/images/MechanicalEngineering.jpg", link: "mechanical-engineering" },
      { name: "Civil Engineering", slug: "ce-btech", image: "/images/Civil-Engineering.jpg", link: "civil-engineering" },
      { name: "Electrical & Electronics Engineering", slug: "ee-btech", image: "/images/ElectricalElectronicsEngineering.jpg", link: "electrical-electronics" },
          ],
    Management: [
      { name: "Master in Business Administration", slug: "mba", image: "/images/MBA.jpg", link: "mba" },
    ],
    Biotechnology: [
      { name: "Biotechnology Engineering", slug: "be-btech", image: "/images/Biotechnology-Engineering.jpg", link: "biotechnology-engineering" },
    ],
    "IT & Science": [
      { name: "Master in Computer Application", slug: "mca", image: "/images/MCA.jpg", link: "mca" },
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
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded font-medium transition border-b-2 
                ${activeTab === tab ? "bg-gray-800 text-white border-gray-500" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Dynamic Content */}
        <div className={`flex flex-col border-4 ${programContent[activeTab].borderColor} p-6 rounded-lg`}>
          {/* Grid Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {degreePrograms[activeTab]?.map((program) => (
              <div
                key={program.slug}
                className="cursor-pointer shadow-md rounded-lg overflow-hidden bg-white hover:shadow-lg transition max-w-sm mx-auto h-full"
                onClick={() => router.push(`/programs/${program.link}`)}
              >
                <div className="h-48">
                  <Image 
                    src={program.image} 
                    alt={program.name} 
                    width={500} 
                    height={300} 
                    className="w-full h-full object-cover" 
                    priority // Ensure images load quickly
                  />
                </div>
                <div className="p-3 flex flex-col justify-between h-full">
                  <h3 className="text-base font-semibold text-gray-800">{program.name}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Description Section */}
          <div className={`w-full mt-6 p-6 text-white rounded-lg ${programContent[activeTab].bgColor}`}>
            <h2 className="text-2xl font-bold">{programContent[activeTab].title}</h2>
            <p className="mt-4">{programContent[activeTab].description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DegreePrograms;
