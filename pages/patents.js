import React from 'react';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Link from 'next/link';

const PatentsPage = () => {
  // Array of patents with relevant details
  const patents = [
    {
      id: 21,
      patentNumber: '2021104017',
      inventor: 'Dr. Sakuntala Mahapatra',
      title: 'INTELLIGENT CIRCUIT ENABLE ELECTRONIC PORTABLE APPARATUS FOR MEDICINE REMINDER',
      detailsLink: 'https://drive.google.com/file/d/1u8S5Vu1l1X_xuIMuNx4UTkcqUUXZsuj12/view?usp=sharing',
    },
    {
      id: 22,
      patentNumber: '2021104117',
      inventor: 'Akshaya Kumar Dash',
      title: 'Method of Coastal Communication and Response System during Tropical Cyclone using Mobile Ad-hoc Network',
      detailsLink: 'https://drive.google.com/file/d/1s8FTXslUTx0r-A2f1Ud6OVm8x8usO1/view?usp=sharing',
    },
    {
      id: 23,
      patentNumber: '2021104117',
      inventor: 'Dakshya Prasad Pati',
      title: 'Method of Coastal Communication and Response System during Tropical Cyclone using Mobile Ad-hoc Network',
      detailsLink: 'https://drive.google.com/file/d/1s8FTXslUTx0r-A2f1Ud6OVm8x8usO1/view?usp=sharing',
    },
    {
      id: 24,
      patentNumber: '2021104117',
      inventor: 'Manas Ranjan Chowdhury',
      title: 'Method of Coastal Communication and Response System during Tropical Cyclone using Mobile Ad-hoc Network',
      detailsLink: 'https://drive.google.com/file/d/1s8FTXslUTx0r-A2f1Ud6OVm8x8usO1/view?usp=sharing',
    },
    // Add more patents as needed
  ];

  return (
    <Layout title="Patents | Trident Academy of Technology">
      {/* Hero Section */}
      <section
        className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] bg-cover bg-center flex items-center justify-center mt-28 sm:mt-0"
        style={{
          backgroundImage: "url('/images/research-committee.jpg')", // Replace with your image path
          backgroundPosition: "center center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4">
          Patents
        </h1>
      </section>

      {/* Breadcrumb Navigation */}
      <nav className="container mx-auto px-4 sm:px-6 lg:px-12 py-4 flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-8 mt-4 mb-10">
        <ul className="flex items-center space-x-2 text-sm sm:text-base lg:text-lg">
          <li>
            <Link href="/" className="hover:underline flex items-center">
              <span className="mr-1">🏠</span> Home
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link href="/research" className="hover:underline">
              Research
            </Link>
          </li>
          <li>/</li>
          <li className="text-gray-600">Patents</li>
        </ul>
      </nav>

      {/* Table of Patents */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-8">
        <h2 className="text-3xl font-semibold text-[#002147] mb-6">List of Patents</h2>
        <table className="min-w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-[#f1f1f1]">
              <th className="px-4 py-2 border border-gray-300">Sl. No.</th>
              <th className="px-4 py-2 border border-gray-300">Patent Application No.</th>
              <th className="px-4 py-2 border border-gray-300">Inventor Name</th>
              <th className="px-4 py-2 border border-gray-300">Title of the Patent</th>
              <th className="px-4 py-2 border border-gray-300">Details</th>
            </tr>
          </thead>
          <tbody>
            {patents.map((patent) => (
              <tr key={patent.id} className="border-b">
                <td className="px-4 py-2 border border-gray-300">{patent.id}</td>
                <td className="px-4 py-2 border border-gray-300">{patent.patentNumber}</td>
                <td className="px-4 py-2 border border-gray-300">{patent.inventor}</td>
                <td className="px-4 py-2 border border-gray-300">{patent.title}</td>
                <td className="px-4 py-2 border border-gray-300">
                  <Link href={patent.detailsLink} target="_blank" className="text-blue-600 hover:underline">
                    View Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Footer />
    </Layout>
  );
};

export default PatentsPage;
