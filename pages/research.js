export default function Research() {
    const menuItems = [
        "Research Introduction",
        "Vision & Mission",
        "Research Initiatives",
        "Research Highlights",
    ];

    return (
        <>
            {/* Layout Navbar */}
            <nav className="bg-[#004080] text-white shadow-md sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-4">
                    <ul className="flex flex-wrap gap-4 justify-center text-sm sm:text-base">
                        {menuItems.map((item, index) => (
                            <li key={index} className="hover:underline">
                                <a href={`#${item.replace(/\s+/g, "-").toLowerCase()}`} className="px-4 py-2">
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>

            {/* Research Navbar - Sticky */}
            <nav className="bg-[#004080] text-white shadow-md sticky top-16 z-50">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-4">
                    <ul className="flex flex-wrap gap-4 justify-center text-sm sm:text-base">
                        {menuItems.map((item, index) => (
                            <li key={index} className="hover:underline">
                                <a href={`#${item.replace(/\s+/g, "-").toLowerCase()}`} className="px-4 py-2">
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>

            <div className="nopadding">
                {/* Research Introduction Section */}
                <section
                    id="research-introduction"
                    className="bg-[#002147] text-white py-20 mb-16"
                >
                    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
                        <h2 className="text-4xl font-bold text-center mb-8">
                            Research at TAT
                        </h2>
                        <p className="text-lg sm:text-xl mb-6 max-w-3xl mx-auto text-center leading-relaxed">
                            Trident Academy of Technology (TAT) is dedicated to advancing knowledge and fostering innovation through impactful research. Our research initiatives focus on addressing real-world challenges while promoting interdisciplinary collaboration.
                        </p>
                        <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto text-center leading-relaxed">
                            With state-of-the-art laboratories, highly skilled faculty, and robust industry partnerships, we strive to bridge the gap between academia and industry by delivering pioneering solutions.
                        </p>
                    </div>
                </section>

                {/* Vision and Mission Section */}
                <section
                    id="vision-&-mission"
                    className="bg-gradient-to-b from-[#002147] to-[#004080] text-white py-20 mb-16"
                >
                    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
                        <h2 className="text-4xl font-bold mb-12">Vision & Mission</h2>
                        {/* Vision */}
                        <div className="space-y-4 mb-12">
                            <h3 className="text-3xl font-semibold">Our Vision</h3>
                            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                                Provide a platform to induct a sound culture of innovative multi-disciplinary research in the institute where the researchers get a scope to establish their immense potential and demonstrate their capability in hosting state-of-the-art high-end technical, industrial, and social research.
                            </p>
                        </div>
                        {/* Mission */}
                        <div className="space-y-4">
                            <h3 className="text-3xl font-semibold">Our Mission</h3>
                            <ul className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto list-disc list-inside leading-relaxed">
                                <li>Inculcate excellent research culture and provide the best research infrastructure.</li>
                                <li>Serve as a platform for the students and faculty members to undertake solution-driven social research, strong interdisciplinary collaborations, and knowledge sharing.</li>
                                <li>Publish high-quality research papers in standard research journals of international repute.</li>
                                <li>Create quality human resources for scientific, industrial, and social research.</li>
                                <li>Promote industrial collaborations involving active and mutually beneficial R&D projects.</li>
                                <li>To establish Trident Research as a renowned institute and a trusted name in the field of high-end technical research.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Research Initiatives Section */}
                <section
                    id="research-initiatives"
                    className="bg-gray-100 py-20 mb-16"
                >
                    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
                        <h2 className="text-4xl font-bold text-center mb-8">Research Initiatives</h2>
                        <p className="text-lg sm:text-xl text-gray-700 mb-6 leading-relaxed">
                            Present engineering curricula prescribed by many universities, including BPUT, offers ample scope to incorporate course supplementation to address the need for solution-driven social research. Such research is crucial for shaping vital national projects, such as Smart Cities, Skill India, Digital India, Startup India, and Make in India.
                        </p>
                        <p className="text-lg sm:text-xl text-gray-700 mb-6 leading-relaxed">
                            The focused research initiative at TGI through Trident Research has two primary goals:
                        </p>
                        <ul className="list-disc list-inside text-lg sm:text-xl text-gray-700 mb-6 leading-relaxed">
                            <li>To build interdisciplinary collaborations that inspire innovation among faculty and students.</li>
                            <li>Focus on capacity building to meet global challenges of societal and industrial needs, achieving the greatest impact and excellence in promising new and growing areas of engineering research.</li>
                        </ul>
                        <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                            The intention of research initiatives at TGI is to place Trident Research in a clear leadership position in promising new and growing areas of engineering research through multifarious interests, such as IEDC activity, students’ technical club activities, and investments in the form of Trident Intramural Funded Research Schemes.
                        </p>
                    </div>
                </section>

                {/* Research Highlights Section */}
                <section
                    id="research-highlights"
                    className="bg-white py-20 mb-16"
                >
                    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
                        <h3 className="text-4xl font-semibold text-center mb-12 text-[#002147]">Research Highlights</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                            <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-2xl transition-shadow">
                                <h4 className="text-2xl font-bold mb-4 text-[#002147]">AI and Machine Learning</h4>
                                <p className="text-gray-600">
                                    Our researchers are developing cutting-edge solutions in artificial intelligence and machine learning, with applications spanning healthcare, finance, and smart cities.
                                </p>
                            </div>
                            <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-2xl transition-shadow">
                                <h4 className="text-2xl font-bold mb-4 text-[#002147]">Renewable Energy</h4>
                                <p className="text-gray-600">
                                    TAT focuses on sustainable energy solutions, emphasizing solar power, wind energy, and innovative energy storage systems.
                                </p>
                            </div>
                            <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-2xl transition-shadow">
                                <h4 className="text-2xl font-bold mb-4 text-[#002147]">Biotechnology Research</h4>
                                <p className="text-gray-600">
                                    Our biotechnology department conducts advanced research in environmental biotechnology, genomics, and bioinformatics to drive healthcare and sustainability initiatives.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export async function getStaticProps() {
    return {
        props: {
            title: "Research - Trident Academy of Technology",
        },
    };
}
