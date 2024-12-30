import React from 'react';

const AlumniPage = () => {
  return (
    <div className="bg-white min-h-screen py-12">
      {/* Hero Section */}
      <section className="bg-[#002147] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to the Trident Alumni Network</h1>
          <p className="text-lg mb-6">Celebrating Connections. Fostering Excellence.</p>
          <button className="bg-white text-[#002147] font-semibold px-6 py-2 rounded shadow hover:bg-gray-200">
            Join the Alumni Network
          </button>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Content */}
          <div>
            <h2 className="text-3xl font-bold mb-4 text-[#002147]">About the Alumni Network</h2>
            <p className="text-lg mb-4 text-[#002147]">
              As a graduate of Trident, you are now part of our diverse alumni network, which contributes to our global reputation. We are dedicated to celebrating your achievements, enhancing the value of your degree, and keeping you connected to the university throughout your career.
            </p>
            <p className="text-lg mb-4 text-[#002147]">
              Being a part of the Trident family means you will receive ongoing professional support, lifelong learning opportunities, and a community to share and celebrate your success. Joining Trident’s alumni community opens doors to many opportunities and benefits.
            </p>
            <p className="text-lg text-[#002147]">
              The Trident Alumni Association, in collaboration with the Office of Alumni Relations, works towards its mission through membership, chapters, networks, student programs, advocacy, and special events. This balanced approach ensures the association will continue to make a positive impact on higher education in Odisha and India for years to come.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center items-center">
            <img
              src="/images/alumni-group.jpg"
              alt="Alumni Group"
              className="rounded-lg shadow-lg w-full md:w-3/4"
            />
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#002147]">Events</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Event Card Example */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-[#002147]">Annual Alumni Meet</h3>
              <p className="text-gray-600 mb-4">Join us for an evening of nostalgia and networking.</p>
              <p className="text-gray-500 text-sm mb-4">Date: 25th January 2025</p>
              <button className="bg-[#002147] text-white px-4 py-2 rounded hover:bg-[#001730]">
                View Details
              </button>
            </div>

            {/* Additional cards can be added dynamically */}
          </div>
        </div>
      </section>

      {/* Notice Board Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#002147]">Notice Board</h2>

          <ul className="bg-white p-6 rounded-lg shadow-md">
            <li className="mb-4">
              <strong>Admission Updates:</strong> Updates on UG & PG programs <a href="#" className="text-[#002147]">Read More</a>
            </li>
            <li className="mb-4">
              <strong>Datesheet:</strong> Compartment/Back Papers for Odd & Even Semester Theory Exams
            </li>
            <li className="mb-4">
              <strong>Practical Exams:</strong> Dates for Back/Compartment Practical Exams <a href="#" className="text-[#002147]">Read More</a>
            </li>
          </ul>
        </div>
      </section>

      {/* Grinding Values Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#002147]">Grinding Values</h2>
          <ul className="text-lg space-y-4 text-[#002147]">
            <li>Connecting alumni and friends to Trident by aligning their interests with the institution's needs.</li>
            <li>Supporting students through scholarships and programs that encourage a lifelong commitment to Trident.</li>
            <li>Advocating for the value of enrolling students at Trident and educating the public about its benefits.</li>
          </ul>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#002147]">What Our Alumni Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial Example */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img
                src="/images/alumni-1.jpg"
                alt="Alumnus"
                className="rounded-full w-24 h-24 mx-auto mb-4"
              />
              <p className="text-gray-600 italic mb-2">"Trident shaped my career and empowered me to achieve my dreams."</p>
              <p className="font-semibold text-[#002147]">John Doe, Software Engineer</p>
            </div>

            {/* Additional testimonials can be added dynamically */}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-[#002147] text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">College Statistics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <p className="text-4xl font-bold">10,000+</p>
              <p>Alumni</p>
            </div>
            <div>
              <p className="text-4xl font-bold">15+</p>
              <p>Chapters</p>
            </div>
            <div>
              <p className="text-4xl font-bold">500+</p>
              <p>Scholarships</p>
            </div>
            <div>
              <p className="text-4xl font-bold">20+</p>
              <p>Annual Events</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AlumniPage;
