import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Link from 'next/link';

const CampusSecurity = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section
                className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] bg-cover bg-center flex items-center justify-center mt-28 sm:mt-0"
                style={{
                    backgroundImage: "url('/images/security-hero.jpg')", // Replace with your image path
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4">
                    Campus Security and Surveillance
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
                        <Link href="/facilities" className="hover:underline">
                            Facilities
                        </Link>
                    </li>
                    <li>/</li>
                    <li className="text-gray-600">Campus Security</li>
                </ul>
            </nav>

            {/* Page Content */}
            <div className="container mx-auto p-8">
                {/* Overview */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">Campus Security Overview</h2>
                    <p className="text-lg text-gray-600 mb-6">
                        Trident’s security system is outsourced to "Trace-out Security," which has been providing services to the campus for the last 12 years. The security system is designed to ensure safety and vigilance across all major campus areas, including gates, hostels, and sensitive zones. Security is managed 24×7 with trained security officials who provide round-the-clock protection to the students and staff.
                    </p>
                </section>

                {/* Security Personnel */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">Security Personnel</h2>
                    <p className="text-lg text-gray-600 mb-6">
                        During working hours, a team of 15 security officials, including 2 security managers, is responsible for managing the security of the entire campus under the supervision of Mr. Biswa Ranjan Nanda, the Administrative Officer. During off-working hours, 12 security officials, including 1 security manager, are assigned to manage security and ensure the safety of students residing in the campus hostels.
                    </p>
                </section>

                {/* CCTV Surveillance */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">CCTV Surveillance</h2>
                    <p className="text-lg text-gray-600 mb-6">
                        The entire Trident campus is under constant surveillance with high-resolution cameras. The CCTV system includes 3 PTZ IP cameras, 45 outdoor Bullet IP cameras, and 122 indoor Bullet IP cameras, all equipped with infrared (IR) capabilities for optimal visibility in both low and high-light conditions. 
                    </p>
                    <p className="text-lg text-gray-600 mb-6">
                        The cameras feed into five (5) Network Video Recorders (NVR) with 40TB hard disk capacity, ensuring live video recording for up to 30 days. The NVRs use advanced compression methods such as H.264 and H.265 to maximize storage efficiency. The recorded footage is overwritten in FIFO (First In, First Out) order to ensure continuous storage. All videos, both live and recorded, are accessible from the control room for monitoring and evidence purposes.
                    </p>
                </section>

                {/* Control and Monitoring Equipment */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">Control and Monitoring Equipment</h2>
                    <p className="text-lg text-gray-600 mb-6">
                        The security and monitoring of the CCTV system is managed in the control room with state-of-the-art equipment. The key devices installed for the CCTV system include:
                    </p>
                    <ul className="list-disc pl-6 text-lg text-gray-600">
                        <li>3 PTZ IP Cameras with IR</li>
                        <li>45 Outdoor IR Bullet IP Cameras</li>
                        <li>122 Indoor IR Bullet/Dome IP Cameras</li>
                        <li>5 NVRs (1 with 16 channels and 4 with 40 channels)</li>
                        <li>5 32” LED HD TVs for video display</li>
                    </ul>
                    <p className="text-lg text-gray-600 mb-6">
                        The cameras are connected to a robust monitoring and recording system, ensuring 100% surveillance coverage of the campus. These cameras are equipped with Digital Signal Processing (DSP) technology for clear image capture in both high and low-light environments. The recorded footage can be used as evidence for any investigations or enquiries.
                    </p>
                </section>

                {/* Image Gallery */}
                <section className="mb-12">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Gallery</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <img src="/images/security-camera.jpg" alt="Security Camera" className="w-full h-auto rounded-lg shadow-md" />
                        <img src="/images/control-room.jpg" alt="Control Room" className="w-full h-auto rounded-lg shadow-md" />
                        <img src="/images/campus-surveillance.jpg" alt="Campus Surveillance" className="w-full h-auto rounded-lg shadow-md" />
                    </div>
                </section>
            </div>

            <Footer />
        </Layout>
    );
};

export default CampusSecurity;
