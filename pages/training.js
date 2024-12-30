// pages/training.js
import Layout from '../components/Layout';
import Link from 'next/link';

export default function Training() {
  return (
    <Layout title="Training Programs | Trident Academy of Technology">
      <main className="flex container mx-auto px-4 lg:px-16 py-12">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
        {/* Sidebar */}
        <div className="w-1/4 lg:w-1/5 bg-[#002147] text-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-white mb-6">Training Programs</h2>
          <ul className="space-y-4">
            {[
              { title: 'Attitude is Everything', link: '#attitude' },
              { title: 'Industry Institute Partnership Cell (IIPC)', link: '#iipc' },
              { title: 'Cisco', link: '#cisco' },
              { title: 'thingQbator', link: '#thingq' },
              { title: 'Communication Confidence: Speak Your Way to Success', link: '#communication' },
              { title: 'Other Softskills', link: '#softskills' },
              { title: 'Analytical Reasoning', link: '#reasoning' },
              { title: 'Skill Up Your Break: Winter & Summer Training Extravaganza', link: '#skills' },
              { title: 'Technical Augmentation', link: '#technical' },
            ].map((item) => (
              <li key={item.title}>
                <Link href={item.link} className="block text-white hover:text-blue-400 transition duration-300">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content Area */}
        <div className="w-3/4 lg:w-4/5 pl-6">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl font-semibold text-[#002147]">Training Programs at Trident Academy of Technology</h1>
            <p className="text-lg text-gray-700 mt-4">
              Trident Academy offers world-class training programs that equip students and professionals with skills for future-ready careers. Our comprehensive training initiatives bridge the gap between theoretical learning and industry requirements.
            </p>
          </section>

          {/* Training Programs Overview Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-semibold text-[#002147] mb-6">Training Programs Overview</h2>
            <p className="text-lg text-gray-700">
              Our training programs are designed to enhance professional skills, address real-world industry needs, and foster career growth. We offer a variety of courses in cutting-edge fields such as technology, management, and professional development. The programs are structured to offer flexible learning opportunities to both students and working professionals.
            </p>
          </section>

          {/* Training Categories Section */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            {[
              { title: 'Technology Training', description: 'Learn industry-standard technologies and develop the technical skills needed for tomorrow.', link: '#technology' },
              { title: 'Management Training', description: 'Sharpen your leadership and management skills with real-time scenarios and business case studies.', link: '#management' },
              { title: 'Soft Skills Development', description: 'Enhance your communication, teamwork, and interpersonal skills for personal and professional growth.', link: '#softskills' }
            ].map((item) => (
              <div key={item.title} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                <h3 className="text-2xl font-semibold text-[#002147]">{item.title}</h3>
                <p className="text-lg text-gray-700 mt-4">{item.description}</p>
                <Link href={item.link} className="text-blue-600 hover:text-blue-800 mt-6 inline-block">
                  Learn More &rarr;
                </Link>
              </div>
            ))}
          </section>

          {/* Featured Training Programs Section */}
          <section className="bg-[#f8fafc] py-12 rounded-lg mb-16">
            <h2 className="text-3xl font-semibold text-[#002147] text-center mb-6">Featured Training Programs</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {[
                {
                  title: 'Full Stack Web Development',
                  description: 'A comprehensive program to learn full-stack development using JavaScript frameworks and technologies.',
                  duration: '6 Months',
                  link: '#full-stack'
                },
                {
                  title: 'Project Management Certification',
                  description: 'An advanced certification course to enhance your skills in managing large-scale projects successfully.',
                  duration: '3 Months',
                  link: '#project-management'
                },
                {
                  title: 'Data Science and AI',
                  description: 'Dive into data science and AI concepts with hands-on projects and practical tools.',
                  duration: '4 Months',
                  link: '#data-science'
                }
              ].map((program) => (
                <div key={program.title} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                  <h3 className="text-2xl font-semibold text-[#002147]">{program.title}</h3>
                  <p className="text-lg text-gray-700 mt-4">{program.description}</p>
                  <p className="text-lg text-gray-500 mt-2"><strong>Duration:</strong> {program.duration}</p>
                  <Link href={program.link} className="text-blue-600 hover:text-blue-800 mt-6 inline-block">
                    Enroll Now &rarr;
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* Why Choose Us Section */}
          <section className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-[#002147] mb-6">Why Choose Trident Academy?</h2>
            <p className="text-lg text-gray-700 mb-6">
              Trident Academy of Technology is committed to providing high-quality training programs that meet the needs of students and professionals. Here’s why you should choose us:
            </p>
            <div className="flex justify-center gap-16">
              {[
                { title: 'Industry Expertise', description: 'Our trainers are experienced professionals with years of industry experience.' },
                { title: 'Practical Learning', description: 'We offer hands-on training with real-world applications and projects.' },
                { title: 'Flexible Schedules', description: 'We provide both full-time and part-time courses to accommodate your needs.' }
              ].map((item) => (
                <div key={item.title} className="max-w-xs">
                  <h3 className="text-2xl font-semibold text-[#002147]">{item.title}</h3>
                  <p className="text-lg text-gray-700 mt-4">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="bg-[#f8fafc] py-12 mb-16 rounded-lg">
            <h2 className="text-3xl font-semibold text-[#002147] text-center mb-6">What Our Students Say</h2>
            <div className="flex overflow-x-scroll gap-8">
              {[
                { name: 'John Doe', program: 'Full Stack Development', testimonial: 'The course provided me with in-depth knowledge and practical experience that helped me secure a job in a top company.' },
                { name: 'Jane Smith', program: 'Project Management', testimonial: 'This certification enhanced my career and gave me the confidence to lead successful projects.' },
                { name: 'Mark Johnson', program: 'Data Science', testimonial: 'The hands-on approach and industry insights were invaluable in shaping my understanding of data science.' }
              ].map((testimonial) => (
                <div key={testimonial.name} className="bg-white p-6 rounded-lg shadow-md max-w-xs">
                  <p className="text-lg text-gray-700 italic">"{testimonial.testimonial}"</p>
                  <p className="text-xl font-semibold text-[#002147] mt-4">{testimonial.name}</p>
                  <p className="text-lg text-gray-500">{testimonial.program}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Information Section */}
          <section className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-[#002147] mb-6">Get in Touch</h2>
            <p className="text-lg text-gray-700 mb-4">For more information or queries, feel free to contact us.</p>
            <p className="text-lg text-gray-700">
              <strong>Email:</strong> <a href="mailto:training@tat.ac.in" className="text-blue-600 hover:text-blue-800">training@tat.ac.in</a>
            </p>
            <p className="text-lg text-gray-700">
              <strong>Phone:</strong> +91 123 456 7890
            </p>
          </section>
        </div>
        </div>
      </main>
    </Layout>
  );
}
