import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Image from "next/image";
import Link from "next/link";

const AdmissionPage = () => {
    return (
        <Layout title="Admission | Trident Academy of Technology">
            <div className="bg-gray-100 mt-10">
                {/* Hero Section */}
                <div className="relative w-full h-[400px]">
                    <Image src="/images/admission-banner.jpg" alt="Admission Banner" layout="fill" objectFit="cover" className="brightness-75" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
                        <h1 className="text-4xl font-bold">Admissions Open</h1>
                        <p className="mt-2 text-lg">Shape your future with world-class education</p>
                        <Link href="/apply-now">
                            <button className="mt-4 bg-[#002147] px-6 py-3 text-white font-semibold rounded-lg hover:bg-[#004D73] transition">Apply Now</button>
                        </Link>
                    </div>
                </div>

                {/* Why Choose Us */}
                <section className="py-10 text-center">
                    <h2 className="text-3xl font-bold text-[#002147]">Why Choose Us?</h2>
                    <p className="mt-2 text-gray-600">We provide quality education with excellent facilities.</p>
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
                        {[
                            "Experienced Faculty",
                            "Industry Partnerships",
                            "State-of-the-Art Labs",
                            "100% Placement Assistance",
                            "Global Exposure",
                            "Holistic Development",
                        ].map((feature, index) => (
                            <div key={index} className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
                                <h3 className="text-lg font-semibold text-gray-800">{feature}</h3>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Admission Process */}
                <section className="bg-white py-10 px-6">
                    <h2 className="text-3xl font-bold text-[#002147] text-center">Admission Process</h2>
                    <div className="mt-6 flex flex-col md:flex-row md:justify-center md:gap-8">
                        {["Step 1: Online Application", "Step 2: Entrance Exam", "Step 3: Interview & Selection", "Step 4: Fee Payment & Enrollment"].map((step, index) => (
                            <div key={index} className="p-4 border-l-4 border-[#002147] bg-gray-50 rounded-md shadow-sm md:w-1/4">
                                <p className="text-gray-700">{step}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Eligibility Criteria */}
                <section className="py-10 px-6 text-center">
                    <h2 className="text-3xl font-bold text-[#002147]">Eligibility Criteria</h2>
                    <p className="mt-2 text-gray-600">Find out if you qualify for our programs.</p>
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 bg-white shadow-md rounded-lg">
                            <h3 className="text-lg font-semibold text-gray-800">Undergraduate Programs</h3>
                            <p className="text-gray-600 mt-2">Minimum 50% in 12th Grade (PCM/PCB for Engineering & Science programs)</p>
                        </div>
                        <div className="p-6 bg-white shadow-md rounded-lg">
                            <h3 className="text-lg font-semibold text-gray-800">Postgraduate Programs</h3>
                            <p className="text-gray-600 mt-2">Bachelor’s degree with minimum 55% in relevant field</p>
                        </div>
                    </div>
                </section>

                {/* Fee Structure */}
                <section className="bg-white py-10 px-6 text-center">
                    <h2 className="text-3xl font-bold text-[#002147]">Fee Structure</h2>
                    <div className="overflow-x-auto mt-6">
                        <table className="w-full border-collapse border border-gray-300">
                            <thead>
                                <tr className="bg-[#002147] text-white">
                                    <th className="p-3 border">Program</th>
                                    <th className="p-3 border">Annual Fees</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[{ name: "B.Tech", fee: "₹1,20,000" }, { name: "MBA", fee: "₹1,50,000" }, { name: "M.Tech", fee: "₹1,30,000" }].map((course, index) => (
                                    <tr key={index} className="odd:bg-gray-100">
                                        <td className="p-3 border">{course.name}</td>
                                        <td className="p-3 border">{course.fee}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Contact Section */}
                <section className="py-10 text-center bg-gray-200">
                    <h2 className="text-3xl font-bold text-[#002147]">Have Questions?</h2>
                    <p className="mt-2 text-gray-600">Contact us for more details.</p>
                    <div className="mt-4">
                        <p className="text-lg font-semibold">📞 +91 98765 43210</p>
                        <p className="text-lg font-semibold">✉️ admissions@tat.ac.in</p>
                    </div>
                </section>

            </div>
            <Footer /> {/* Footer is here */}
        </Layout>
    );
};

export default AdmissionPage;
