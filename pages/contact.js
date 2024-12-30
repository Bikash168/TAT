// pages/contact.js
import Layout from '../components/Layout';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your server or email service
    setFormSubmitted(true);
  };

  return (
    <Layout title="Contact Us | Trident Academy of Technology">
      <main className="container mx-auto mt-12 px-4 lg:px-16">
        {/* Contact Info Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-semibold text-[#002147]">Contact Us</h1>
          <p className="text-lg text-gray-700 mt-4">
            Get in touch with us for any queries or information. We are here to help.
          </p>
        </section>

        {/* Contact Details */}
        <section className="lg:flex lg:gap-16 mb-12">
          <div className="lg:w-1/3 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-[#002147] mb-6">Contact Details</h2>
            <p className="text-lg text-gray-700 mb-4">
              Feel free to reach us using the details below.
            </p>
            <ul className="text-lg text-gray-700 space-y-4">
              <li>
                <strong>Address:</strong> Trident Academy of Technology, Bhubaneswar, Odisha
              </li>
              <li>
                <strong>Email:</strong> contact@tat.ac.in
              </li>
              <li>
                <strong>Phone:</strong> +91 123 456 7890
              </li>
              <li>
                <strong>Fax:</strong> +91 123 456 7891
              </li>
            </ul>
          </div>

          {/* Map Section */}
          <div className="lg:w-2/3 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-[#002147] mb-6">Find Us</h2>
            <div className="w-full h-80">
              <iframe
                title="Trident Academy Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15009.445179624082!2d85.83112246080486!3d20.29416451602485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19f3f7f477b519%3A0xd0c24e7f73c6e0f5!2sTrident%20Academy%20of%20Technology!5e0!3m2!1sen!2sin!4v1692277889033!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="bg-white p-8 rounded-lg shadow-lg mb-12">
          <h2 className="text-3xl font-semibold text-[#002147] mb-6">Get In Touch</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <label className="text-lg text-gray-700" htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-4 mt-2 border rounded-lg"
                  required
                />
              </div>
              <div>
                <label className="text-lg text-gray-700" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-4 mt-2 border rounded-lg"
                  required
                />
              </div>
            </div>

            <div className="mt-6">
              <label className="text-lg text-gray-700" htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full p-4 mt-2 border rounded-lg"
                required
              />
            </div>

            <div className="mt-6">
              <label className="text-lg text-gray-700" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full p-4 mt-2 border rounded-lg"
                rows="6"
                required
              ></textarea>
            </div>

            <div className="mt-6 text-center">
              <button type="submit" className="px-8 py-3 bg-[#002147] text-white rounded-lg hover:bg-[#004D73] transition">
                Send Message
              </button>
            </div>
          </form>

          {formSubmitted && (
            <div className="mt-6 text-center text-green-500">
              <p>Thank you for your message! We will get back to you shortly.</p>
            </div>
          )}
        </section>
      </main>
    </Layout>
  );
};

export default Contact;
