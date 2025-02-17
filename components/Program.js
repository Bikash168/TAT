import React from "react";
import { useRouter } from "next/router";

const DegreeProgramsSection = () => {
  const router = useRouter();

  const degreePrograms = [
    { name: "Computer Science & Engineering", slug: "cse-btech", image: "/images/Computer-Science-Engineering.jpg", link: "computer-science-engineering" },
    { name: "Electronics and Telecomm Engineering", slug: "ete-btech", image: "/images/ElectronicsTelecommEngineering.jpg", link: "electronics-telecommunication" },
    { name: "Electrical & Electronics Engineering", slug: "ee-btech", image: "/images/ElectricalElectronicsEngineering.jpg", link: "electrical-electronics" },
    { name: "Computer Science & Engineering (AI & ML)", slug: "cse-ai-ml-btech", image: "/images/Computer-Science-AI-ML.jpg", link: "cs-ai-ml" },
    { name: "Computer Science & Information Technology", slug: "csit-btech", image: "/images/ComputerScienceIT.jpg", link: "cs-it" },
    { name: "Computer Science and Technology", slug: "cst-btech", image: "/images/ComputerScienceTechnology.jpg", link: "cs-technology" },
    { name: "Computer Science & Engineering (Data Science)", slug: "csedt-btech", image: "/images/Data-Science.jpg", link: "cs-data-science" },
    { name: "Electronics Engineering", slug: "eee-btech", image: "/images/ElectronicsEngineeringVLSI.jpg", link: "electronics-vlsi" },
    { name: "Mechanical Engineering", slug: "me-btech", image: "/images/MechanicalEngineering.jpg", link: "mechanical-engineering" },
    { name: "Civil Engineering", slug: "ce-btech", image: "/images/Civil-Engineering.jpg", link: "civil-engineering" },
    { name: "Biotechnology Engineering", slug: "be-btech", image: "/images/Biotechnology-Engineering.jpg", link: "biotechnology-engineering" },
    { name: "Master in Business Administration", slug: "mba", image: "/images/MBA.jpg", link: "mba" },
    { name: "Master in Computer Application", slug: "mca", image: "/images/MCA.jpg", link: "mca" },
  ];

  const handleProgramSelect = (link) => {
    router.push(link);
  };

  return (
    <section id="degree-programs" className="py-10 bg-gray-50">
      <div className="w-full max-w-6xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-700 mb-8 text-center">
          Our Degree Programs
        </h2>

        {/* Responsive Grid for Programs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {degreePrograms.map((program, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-4 border rounded-lg shadow-md bg-white cursor-pointer hover:bg-blue-100 transition-all duration-300 ease-in-out"
              onClick={() => handleProgramSelect(program.link)}
            >
              <img
                src={program.image}
                alt={program.name}
                className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 object-cover rounded-full shadow"
              />
              <h5 className="text-gray-800 text-base sm:text-lg font-semibold mt-4">
                {program.name}
              </h5>
            </div>
          ))}
        </div>

        {/* See All Programs Button */}
        <div className="w-full flex justify-center mt-8">
          <a
            href="/departments"
            className="text-blue-600 font-medium hover:underline inline-flex items-center group text-lg"
          >
            See All Programs
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2 transition-transform transform group-hover:translate-x-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default DegreeProgramsSection;
