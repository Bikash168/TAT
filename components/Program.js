import React, { useState } from "react";
import { useRouter } from "next/router";

const DegreeDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  // Sample degree programs with IDs or slugs for redirection
  const degreePrograms = [
    { name: "Computer Science & Engineering", slug: "cse-btech" },
    { name: "Electronics and Telecomm Engineering", slug: "ete-btech" },
    { name: "Electronics Engineering", slug: "ee-btech" },
    { name: "Computer Science & Engineering (AI & ML)", slug: "cse-ai-ml-btech" },
    { name: "Computer Science & Information Technology", slug: "csit-bech" },
    { name: "Computer Science and Technology", slug: "cst-bech" },
    { name: "Computer Science & Engineering (Data Science)", slug: "csedt-bech" },
    { name: "Electrical and Electronics Engineering", slug: "eee-bech" },
    { name: "Mechanical Engineering", slug: "me-bech" },
    { name: "Civil Engineering", slug: "ce-bech" },
    { name: "Biotechnology Engineering", slug: "be-bech" },
    { name: "Master in Business Administration", slug: "mba" },
    { name: "Master in Computer Application", slug: "mca" },
    // Add more programs as needed
  ];

  const handleProgramSelect = (slug) => {
    // Redirect to details page
    router.push(`/programs/${slug}`);
  };

  return (
    <section id="news" className="py-10 bg-gray-50">
    <div className="w-full max-w-6xl mx-auto mt-10">
      <label
        htmlFor="degreeDropdown"
        className="block text-gray-700 font-medium mb-4 text-lg"
      >
        Select degree program or enter keyword
      </label>
      <div
        className={`relative border rounded-md shadow-lg ${
          isOpen ? "border-blue-500" : "border-gray-300"
        }`}
      >
        {/* Dropdown Header */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer bg-gray-100 px-6 py-4 flex justify-between items-center text-lg"
        >
          <span className="text-gray-700">Choose a program</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 transform transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        {/* Dropdown List */}
        {isOpen && (
          <ul className="absolute z-10 bg-white border border-gray-300 rounded-md max-h-96 w-full overflow-y-auto shadow-xl">
            {degreePrograms.map((program, index) => (
              <li
                key={index}
                className="px-6 py-4 hover:bg-blue-100 cursor-pointer text-gray-700 text-lg"
                onClick={() => handleProgramSelect(program.slug)}
              >
                {program.name}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Spacing Below the Dropdown */}
      <div className="mt-6 pb-6">
        <a
          href="/programs"
          className="text-blue-600 font-medium hover:underline inline-flex items-center group"
        >
          See All Programs
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1"
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

export default DegreeDropdown;
