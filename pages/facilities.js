import Layout from '../components/Layout';
import Link from 'next/link';

const Facilities = () => {
  return (
    <Layout title="Facilities | Trident Academy of Technology">
      <main className="container mx-auto mt-12 px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Sidebar Menu */}
          <div className="w-full lg:w-1/4 p-4 lg:p-6 bg-[#002147] shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold text-white">Facilities Menu</h2>
            <ul className="mt-6 space-y-3">
              {[ 
                { name: 'Infrastructure', link: '#infrastructure' },
                { name: 'Hostels', link: '#hostels' },
                { name: 'Transport', link: '#transport' },
                { name: 'Food Centers', link: '#food-centers' },
                { name: 'Healthcare', link: '#healthcare' },
                { name: 'Power Backups', link: '#power-backups' },
                { name: 'Water Quality', link: '#water-quality' },
                { name: 'Internet and WiFi', link: '#internet-wifi' },
                { name: 'Sanitations', link: '#sanitations' },
                { name: 'Campus Security', link: '#campus-security' },
                { name: 'Scholarships', link: '#scholarships' },
                { name: 'ICT Enabled Classroom', link: '#ict-enabled-classroom' },
              ].map((item) => (
                <li key={item.name} className="hover:bg-[#004D73] p-2 rounded-lg transition">
                  <Link href={item.link} className="text-white hover:text-[#A8C7E6]">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Main Content */}
          <div className="w-full lg:w-3/4">
            {/* Infrastructure Section */}
            <section id="infrastructure" className="mb-12">
              <h2 className="text-3xl font-semibold text-[#002147] mb-6">Infrastructure</h2>
              <p className="text-lg text-gray-700">
                Trident Academy of Technology is equipped with modern infrastructure, including well-designed classrooms, laboratories, and libraries. The facilities are designed to enhance the overall academic experience.
              </p>
            </section>

            {/* Hostels Section */}
            <section id="hostels" className="mb-12">
              <h2 className="text-3xl font-semibold text-[#002147] mb-6">Hostels</h2>
              <p className="text-lg text-gray-700">
                The campus provides excellent hostel facilities with modern amenities. Our hostels are designed to ensure comfort and security, providing a home-like environment for students.
              </p>
            </section>

            {/* Transport Section */}
            <section id="transport" className="mb-12">
              <h2 className="text-3xl font-semibold text-[#002147] mb-6">Transport</h2>
              <p className="text-lg text-gray-700">
                We offer a comprehensive transport system that ensures smooth commuting for students and staff. Our fleet of buses connects the campus with key locations in the city.
              </p>
            </section>

            {/* Food Centers Section */}
            <section id="food-centers" className="mb-12">
              <h2 className="text-3xl font-semibold text-[#002147] mb-6">Food Centers</h2>
              <p className="text-lg text-gray-700">
                The campus has a variety of food centers offering healthy, nutritious, and affordable meals. Our food centers cater to diverse culinary preferences, ensuring student satisfaction.
              </p>
            </section>

            {/* Healthcare Section */}
            <section id="healthcare" className="mb-12">
              <h2 className="text-3xl font-semibold text-[#002147] mb-6">Healthcare</h2>
              <p className="text-lg text-gray-700">
                We prioritize student health with our well-equipped healthcare center, offering 24/7 medical support and emergency services for students and staff.
              </p>
            </section>

            {/* Power Backups Section */}
            <section id="power-backups" className="mb-12">
              <h2 className="text-3xl font-semibold text-[#002147] mb-6">Power Backups</h2>
              <p className="text-lg text-gray-700">
                Our campus is equipped with power backup systems to ensure a continuous supply of electricity, ensuring that academic activities and other functions are never interrupted.
              </p>
            </section>

            {/* Water Quality Section */}
            <section id="water-quality" className="mb-12">
              <h2 className="text-3xl font-semibold text-[#002147] mb-6">Water Quality</h2>
              <p className="text-lg text-gray-700">
                We ensure clean and safe drinking water across the campus with advanced water filtration systems, promoting the health and well-being of all residents.
              </p>
            </section>

            {/* Internet and WiFi Section */}
            <section id="internet-wifi" className="mb-12">
              <h2 className="text-3xl font-semibold text-[#002147] mb-6">Internet and WiFi</h2>
              <p className="text-lg text-gray-700">
                The campus offers high-speed internet access and Wi-Fi connectivity to all students and staff, ensuring that online learning and research are seamless and efficient.
              </p>
            </section>

            {/* Sanitations Section */}
            <section id="sanitations" className="mb-12">
              <h2 className="text-3xl font-semibold text-[#002147] mb-6">Sanitations</h2>
              <p className="text-lg text-gray-700">
                We maintain high standards of sanitation across the campus. All washrooms and public areas are regularly cleaned and sanitized to ensure a hygienic environment.
              </p>
            </section>

            {/* Campus Security Section */}
            <section id="campus-security" className="mb-12">
              <h2 className="text-3xl font-semibold text-[#002147] mb-6">Campus Security</h2>
              <p className="text-lg text-gray-700">
                The campus is equipped with advanced security systems, including CCTV surveillance, 24/7 security personnel, and controlled access points to ensure the safety and security of all members of the campus community.
              </p>
            </section>

            {/* Scholarships Section */}
            <section id="scholarships" className="mb-12">
              <h2 className="text-3xl font-semibold text-[#002147] mb-6">Scholarships</h2>
              <p className="text-lg text-gray-700">
                We offer a range of scholarships for meritorious and financially disadvantaged students, ensuring that all students have the opportunity to pursue their education without financial constraints.
              </p>
            </section>

            {/* ICT Enabled Classroom Section */}
            <section id="ict-enabled-classroom" className="mb-12">
              <h2 className="text-3xl font-semibold text-[#002147] mb-6">ICT Enabled Classroom</h2>
              <p className="text-lg text-gray-700">
                Our classrooms are equipped with the latest ICT tools and technologies, enabling an interactive and engaging learning experience. These classrooms are designed to facilitate both in-person and online learning.
              </p>
            </section>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Facilities;
