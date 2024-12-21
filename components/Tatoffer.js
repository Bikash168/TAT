import { useState } from "react";

const NewsEvents = () => {
  const [activeTab, setActiveTab] = useState("Prospective Students");

  // Menu Tabs
  const tabs = [
    "Prospective Students",
    "Students",
    "Researchers",
    "Employees",
    "Alumni",
    "Executives and professionals",
    "Founders",
    "Cooperations",
    "Press and media",
  ];

  // Content for each tab
  const newsContent = {
    "Prospective Students": {
      title: "Prospective Students",
      description:
        "Learn to bring ideas to life, discover new possibilities, work in teams and build networks.",
      img: "../images/Prospective-Students.jpg",
      bgColor: "bg-yellow-400",
    },
    Students: {
      title: "Students",
      description:
        "Explore opportunities for growth and gain valuable hands-on experiences in diverse fields.",
      img: "../images/Students.jpg",
      bgColor: "bg-red-400",
    },
    Researchers: {
      title: "Researchers",
      description:
        "Engage in cutting-edge research and innovation, pushing boundaries in your chosen field.",
      img: "../images/Researchers.jpg",
      bgColor: "bg-green-400",
    },
    Employees: {
      title: "Employees",
      description:
        "Be a part of an empowering environment, contributing to impactful projects and initiatives.",
      img: "https://via.placeholder.com/600x400/0000ff",
      bgColor: "bg-blue-400",
    },
    Alumni: {
      title: "Alumni",
      description:
        "Stay connected with your alma mater and contribute to the growing legacy of excellence.",
      img: "https://via.placeholder.com/600x400/f0f0f0",
      bgColor: "bg-gray-400",
    },
    "Executives and professionals": {
      title: "Executives and Professionals",
      description:
        "Harness your expertise and join a community of forward-thinking leaders and innovators.",
      img: "https://via.placeholder.com/600x400/ffa500",
      bgColor: "bg-orange-400",
    },
    Founders: {
      title: "Founders",
      description:
        "Collaborate with visionaries and entrepreneurs to bring groundbreaking ideas to life.",
      img: "https://via.placeholder.com/600x400/800080",
      bgColor: "bg-purple-400",
    },
    Cooperations: {
      title: "Cooperations",
      description:
        "Build strong partnerships and explore synergies to create meaningful impacts.",
      img: "https://via.placeholder.com/600x400/008080",
      bgColor: "bg-teal-400",
    },
    "Press and media": {
      title: "Press and Media",
      description:
        "Stay updated on the latest news, events, and milestones achieved by our community.",
      img: "https://via.placeholder.com/600x400/ffc0cb",
      bgColor: "bg-pink-400",
    },
  };

  return (
    <section id="news" className="py-10 bg-gray-50">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">
          Discover what TAT has to offer
        </h2>
        <p className="text-gray-600 italic">
          Explore groundbreaking innovations, inspiring research, and exciting
          events shaping the future at our institution.
        </p>
      </div>
      <div className="container mx-auto px-4">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded font-medium transition ${
                activeTab === tab
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Dynamic Content */}
        <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-10">
          {/* Image with Text Cutout Effect */}
          <div
            className={`relative w-full md:w-1/2 h-80 sm:h-96 md:h-[20rem] lg:h-[24rem] ${newsContent[activeTab].bgColor} flex items-center justify-center`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${newsContent[activeTab].img})`,
              }}
            />
            {/* Centered TAT with Enlarged Font */}
            <div
              className="absolute inset-0 flex items-center justify-center text-transparent text-[12rem] font-extrabold leading-none"
              style={{
                backgroundImage: `url(${newsContent[activeTab].img})`,
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
              }}
            >
              TAT
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800">
              {newsContent[activeTab].title}
            </h2>
            <p className="text-gray-600 mt-4">
              {newsContent[activeTab].description}
            </p>
            <a
              href="#"
              className="mt-6 inline-block text-blue-600 font-medium border border-blue-600 px-6 py-2 rounded hover:bg-blue-600 hover:text-white transition"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsEvents;
