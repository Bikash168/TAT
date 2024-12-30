import Layout from '../components/Layout';
import Link from 'next/link';

export default function Research() {
  const researchAreas = [
    {
      title: 'AI and Machine Learning',
      description: 'Innovative solutions in AI and ML with applications across healthcare, finance, and smart cities.'
    },
    {
      title: 'Renewable Energy',
      description: 'Cutting-edge research in solar, wind, and energy storage for a sustainable future.'
    },
    {
      title: 'Biotechnology Research',
      description: 'Groundbreaking research in genomics and environmental biotechnology for health and sustainability.'
    },
    {
      title: 'Robotics and Automation',
      description: 'Designing advanced robots and automated systems for industrial and social applications.'
    },
    {
      title: 'Nanotechnology',
      description: 'Exploring the potential of nanomaterials and their applications in medicine, energy, and environment.'
    },
    {
      title: 'Cybersecurity and Data Privacy',
      description: 'Enhancing data protection and security through innovative technologies in the digital age.'
    }
  ];

  return (
    <Layout title="Research | Trident Academy of Technology">
      <main className="flex container mx-auto px-4 lg:px-16 py-12">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
        {/* Sidebar Menu */}
        <div className="w-1/4 lg:w-1/5 bg-[#002147] text-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6">Research Menu</h2>
          <ul className="space-y-4">
            {[ 
              { name: 'Research Introduction', link: '#research-introduction' },
              { name: 'Vision & Mission', link: '#vision-mission' },
              { name: 'Research Initiatives', link: '#research-initiatives' },
              { name: 'Research Highlights', link: '#research-highlights' }
            ].map((item) => (
              <li key={item.name}>
                <Link href={item.link} className="block text-white hover:text-blue-400 transition duration-300">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content Area */}
        <div className="w-3/4 lg:w-4/5 pl-6">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl font-semibold text-[#002147]">Research at Trident Academy of Technology</h1>
            <p className="text-lg text-gray-700 mt-4">
              Discover the groundbreaking research initiatives, innovations, and contributions of Trident Academy of Technology.
            </p>
          </section>

          {/* Research Introduction Section */}
          <section id="research-introduction" className="mb-16">
            <h2 className="text-3xl font-semibold text-[#002147] mb-6">Research Introduction</h2>
            <p className="text-lg text-gray-700">
              At Trident Academy of Technology, research is at the core of our commitment to innovation. Our work focuses on developing solutions to global challenges across various sectors, with a strong emphasis on interdisciplinary collaboration.
            </p>
          </section>

          {/* Vision and Mission Section */}
          <section id="vision-mission" className="mb-16">
            <h2 className="text-3xl font-semibold text-[#002147] mb-6">Vision & Mission</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Our Vision</h3>
              <p className="text-gray-700">
                To lead transformative, interdisciplinary research that addresses global challenges and fosters social and technological advancement.
              </p>
              <h3 className="text-xl font-semibold">Our Mission</h3>
              <p className="text-gray-700">
                To cultivate an environment of academic excellence where innovation thrives, providing cutting-edge solutions to the world’s most pressing problems through research.
              </p>
            </div>
          </section>

          {/* Research Initiatives Section */}
          <section id="research-initiatives" className="mb-16">
            <h2 className="text-3xl font-semibold text-[#002147] mb-6">Research Initiatives</h2>
            <p className="text-lg text-gray-700">
              Our research initiatives span across various disciplines, with a focus on applied research that solves real-world problems. Below are some of the key areas of research at TAT:
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-8">
              {researchAreas.map((area, idx) => (
                <div key={idx} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                  <h3 className="text-2xl font-semibold text-[#002147]">{area.title}</h3>
                  <p className="text-lg text-gray-700 mt-4">{area.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Research Highlights Section */}
          <section id="research-highlights" className="mb-16">
            <h2 className="text-3xl font-semibold text-[#002147] mb-6">Research Highlights</h2>
            <p className="text-lg text-gray-700">
              Our faculty and students have made notable contributions in various fields. Here are some of the recent research highlights at TAT:
            </p>
            <ul className="list-disc list-inside text-lg text-gray-700 mt-4 space-y-2">
              <li>Development of a smart city solution using AI for traffic management and public safety.</li>
              <li>Innovations in renewable energy storage systems to optimize solar and wind power use.</li>
              <li>Groundbreaking work in genomics to address disease prevention and personalized medicine.</li>
            </ul>
          </section>
        </div>
        </div>
      </main>
    </Layout>
  );
}
