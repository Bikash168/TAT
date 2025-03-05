import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Image from "next/image";
import Link from "next/link";

const AdmissionPage = () => {
    return (
        <Layout title="Admission | Trident Academy of Technology">
            <div className="bg-gray-100 mt-10">
                {/* Hero Section */}
                <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
                    <Image src="/images/admission-banner.jpg" alt="Admission Banner" layout="fill" objectFit="cover" className="brightness-75" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">Admissions Open</h1>
                        <p className="mt-2 text-base md:text-lg">Shape your future with world-class education</p>
                        <Link href="/apply-now">
                            <button className="mt-4 bg-[#002147] px-5 md:px-6 py-3 text-white font-semibold rounded-lg hover:bg-[#004D73] transition">Apply Now</button>
                        </Link>
                    </div>
                </div>

                {/* Why Choose Us */}
                <section className="py-10 text-center px-4 md:px-6">
                    <h2 className="text-3xl font-bold text-[#002147]">Why Choose Us?</h2>
                    <p className="mt-2 text-gray-600">We provide quality education with excellent facilities.</p>
                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {["Experienced Faculty", "Industry Partnerships", "State-of-the-Art Labs", "100% Placement Assistance", "Global Exposure", "Holistic Development"].map((feature, index) => (
                            <div key={index} className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
                                <h3 className="text-lg font-semibold text-gray-800">{feature}</h3>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Admission Process */}
                <section className="bg-white py-10 px-4 md:px-6">
                    <h2 className="text-3xl font-bold text-[#002147] text-center">Admission Process</h2>
                    <div className="mt-6 flex flex-col md:flex-row md:justify-center md:gap-6">
                        {["Step 1: Online Application", "Step 2: Entrance Exam", "Step 3: Interview & Selection", "Step 4: Fee Payment & Enrollment"].map((step, index) => (
                            <div key={index} className="p-4 border-l-4 border-[#002147] bg-gray-50 rounded-md shadow-sm w-full md:w-1/4">
                                <p className="text-gray-700">{step}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Contact Section */}
                <section className="py-10 text-center bg-gray-200 px-4 md:px-6">
                    <h2 className="text-3xl font-bold text-[#002147]">Have Questions?</h2>
                    <p className="mt-2 text-gray-600">Contact us for more details.</p>
                    <div className="mt-4">
                        <p className="text-lg font-semibold">📞 +91 98765 43210</p>
                        <p className="text-lg font-semibold">✉️ admissions@tat.ac.in</p>
                    </div>
                </section>
            </div>
            <Footer />
        </Layout>
    );
};

export default AdmissionPage;
