import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Alumni() {
  return (
    <Layout title="Alumni | Trident Academy of Technology">
      <main className="container mx-auto px-4 lg:px-16 py-2">
        {/* Alumni Section */}
        <section className="bg-[#002147] text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-center text-white mb-4">Alumni</h1>
            <p className="text-lg text-center text-white">
              Our alumni are the pride of Trident Academy of Technology. They represent the success and accomplishments of the institution, contributing to the betterment of society and industry in various fields. We are proud of their achievements and continuously engage with them to help shape the future of TAT.
            </p>
          </div>
        </section>

        {/* Alumni Success Stories Section */}
        <section className="bg-white p-8 rounded-lg shadow-lg mt-12">
          <h2 className="text-3xl font-semibold text-[#002147] text-center mb-8">Alumni Success Stories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'John Doe',
                course: 'B.Tech - Computer Science',
                description: 'John is currently a Senior Software Engineer at Google and has been instrumental in developing cutting-edge applications.',
              },
              {
                name: 'Jane Smith',
                course: 'MBA - Marketing Management',
                description: 'Jane is a successful marketing strategist and is the Chief Marketing Officer at a leading global tech company.',
              },
              {
                name: 'Rahul Patel',
                course: 'B.Tech - Civil Engineering',
                description: 'Rahul is a Project Manager at L&T, managing large-scale infrastructure projects in India.',
              },
            ].map((alumni, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg transition-all hover:scale-105 hover:shadow-2xl">
                <h3 className="text-xl font-semibold text-[#002147]">{alumni.name}</h3>
                <p className="mt-2 text-sm text-gray-700">Course: {alumni.course}</p>
                <p className="mt-4 text-gray-700">{alumni.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Alumni Network Section */}
        <section className="bg-[#f8fafc] p-8 rounded-lg shadow-lg mt-12">
          <h2 className="text-3xl font-semibold text-[#002147] text-center mb-4">Alumni Network</h2>
          <p className="text-lg text-gray-700">
            The alumni network of Trident Academy of Technology is vast and diverse, with professionals in every field. Our network helps create opportunities for alumni to reconnect, collaborate, and contribute back to the institution. It also provides mentorship for current students.
          </p>
          <Link href="/alumni-network" className="mt-4 inline-block text-blue-500 hover:underline">
            Learn More About Our Alumni Network
          </Link>
        </section>

        {/* Alumni Events Section */}
        <section className="bg-white p-8 rounded-lg shadow-lg mt-12">
          <h2 className="text-3xl font-semibold text-[#002147] text-center mb-8">Alumni Events</h2>
          <p className="text-lg text-gray-700">
            We regularly organize alumni events, including reunions, seminars, and networking sessions. These events provide a platform for alumni to share their experiences, discuss industry trends, and foster new opportunities.
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-4">
            <li>Annual Alumni Reunion</li>
            <li>Guest Lectures by Alumni Experts</li>
            <li>Networking Meetups and Webinars</li>
          </ul>
          <p className="mt-4 text-lg text-gray-700">
            To stay updated on upcoming alumni events, <Link href="/events" className="text-blue-500 hover:underline">click here</Link>.
          </p>
        </section>
      </main>
      <Footer /> {/* Footer is here */}
    </Layout>
  );
}
