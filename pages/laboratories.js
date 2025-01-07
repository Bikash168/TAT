import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

const Laboratories = () => {
    const [activeLab, setActiveLab] = useState(null);

    const laboratoryCards = [
        {
            title: "MATERIAL TESTING LABORATORY",
            description: "Provides the necessary equipment and knowledge to test materials used in civil engineering, ensuring quality and durability.",
            details: [
                {
                    heading: "Experiment List",
                    items: [
                        "Shape and size test of brick",
                        "Water absorption test of brick",
                        "Compressive strength of brick",
                        "Fineness of cement",
                        "Specific gravity of cement",
                        "Standard consistency of cement by Vicat test",
                        "Initial and final setting time of cement",
                        "Fineness modulus of fine and coarse aggregate",
                        "Compressive strength of cement mortar",
                        "Tensile strength of cement mortar",
                        "Compression test of cast iron",
                        "Rigidity modulus of cast iron",
                        "Fatigue test of steel",
                    ],
                },
                {
                    heading: "Equipment List",
                    items: [
                        "Compression Testing Machine (Single Gauge) 1000KN",
                        "Le-chatlier apparatus including all accessories",
                        "Vicat apparatus with dashpot",
                        "Thermostatically controlled oven",
                        "Le-chatlier flask",
                        "Specific gravity bottle",
                        "Weighing balance digital (10 kg, 1 gm accuracy)",
                        "Fatigue test machine",
                        "Tensile strength testing machine",
                    ],
                },
                {
                    heading: "Laboratory Gallery",
                    images: [
                        "/images/material_lab1.jpg",
                        "/images/material_lab2.jpg",
                        "/images/material_lab3.jpg",
                    ],
                },
            ],
        },
        {
            title: "SURVEY FIELD WORK",
            description: "Focuses on surveying techniques and equipment for accurate measurement and analysis in fieldwork.",
            details: [
                {
                    heading: "Experiment List",
                    items: [
                        "Testing of chain measurement for correct length of the line",
                        "Traversing by chain surveying",
                        "Traversing by compass survey",
                        "Intersection method of plane table survey",
                        "Traversing by plane table",
                        "Use of dumpy level and fly leveling",
                        "Longitudinal section and cross section of road",
                        "Contouring",
                        "Measurement of horizontal and vertical angle by theodolite",
                    ],
                },
                {
                    heading: "Equipment List",
                    items: [
                        "Chain, 30 m length",
                        "Tape, 30 m length",
                        "Arrow pin",
                        "Ranging rod",
                        "Total station",
                        "Theodolite",
                        "Dumpy level",
                        "Prismatic compass",
                        "Plane table with all accessories",
                        "Clinometers",
                        "Leveling staff",
                        "Auto level",
                        "GPS",
                        "DGPS",
                    ],
                },
                {
                    heading: "Laboratory Gallery",
                    images: [
                        "/images/survey_lab1.jpg",
                        "/images/survey_lab2.jpg",
                        "/images/survey_lab3.jpg",
                    ],
                },
            ],
        },
        {
            title: "GEOTECHNICAL LABORATORY",
            description: "Provides advanced testing of soil properties and geotechnical analysis.",
            details: [
                {
                    heading: "Experiment List",
                    items: [
                        "Determination of specific gravity of soil grains",
                        "Determination of grain size distribution of soil (sieve test, hydrometer test)",
                        "Determination of Atterberg limits of soil (liquid limit, plastic limit, shrinkage limit)",
                        "Measurement of soil compaction in field (core cutter method, sand replacement method)",
                        "Determination of Density – water content relationship of soil (Proctor compaction test, Modified proctor test, Proctor penetration needle)",
                        "Determination of relative density of granular soil",
                        "Determination of shear strength parameter of soil (shear box test, tri-axial test, unconfined compression test, vane shear test)",
                        "Determination of consolidation characteristics of soil using fixed ring odometer",
                        "Determination of California Bearing ratio (CBR) of soil specimens",
                        "Determination of coefficient of permeability of soil (constant head and falling head permeameters)",
                    ],
                },
                {
                    heading: "Equipment List",
                    items: [
                        "Field kit IS:2720",
                        "California Bearing Ratio machine IS:2720",
                        "Unconfined compression testing machine",
                        "Modified proctor test apparatus",
                        "Liquid limit apparatus",
                        "Shrinkage limit apparatus",
                        "Plastic limit apparatus",
                        "Sand pouring cylinder",
                        "Electronic weighing balance 10 kg",
                        "Direct shear testing machine",
                        "Consolidation apparatus",
                        "Pycnometer",
                        "Compaction mould",
                        "Measuring jar",
                    ],
                },
                {
                    heading: "Laboratory Gallery",
                    images: [
                        "/images/geotech_lab1.jpg",
                        "/images/geotech_lab2.jpg",
                        "/images/geotech_lab3.jpg",
                    ],
                },
            ],
        },
        {
            title: "TRANSPORTATION ENGINEERING LABORATORY",
            description: "Focuses on testing and evaluation of materials and designs used in transportation infrastructure.",
            details: [
                {
                    heading: "Experiment List",
                    items: [
                        "Determination of aggregate crushing value.",
                        "Determination of Los Angeles abrasion value of aggregates.",
                        "Determination of aggregate impact value.",
                        "Determination of penetration value of bitumen.",
                        "Determination of softening point value of bitumen.",
                        "Determination of ductility value of bitumen.",
                        "Determination of flash and fire point of bitumen.",
                        "Determination of specific gravity of bitumen.",
                        "Determination of stripping value of aggregate.",
                        "Determination of flakiness index and elongation index of coarse aggregate.",
                        "Determination of specific gravity and water absorption of coarse aggregate.",
                        "Determination of CBR of soil subgrade.",
                        "Design of GSB and WMM.",
                        "Marshal method of mix design."
                    ]
                },
                {
                    heading: "Equipment List",
                    items: [
                        "Los Angeles Abrasion testing machine",
                        "Ductility Testing machine",
                        "Aggregate Impact testing machine",
                        "Aggregate crushing value apparatus",
                        "Universal Penetrometer",
                        "Marshall Apparatus",
                        "Clevoland flash",
                        "CBR Apparatus",
                        "Stripping value apparatus",
                        "Deval attrition testing machine",
                        "Thickness gauge",
                        "Length gauge",
                        "Ring and ball"
                    ]
                },
                {
                    heading: "Laboratory Gallery",
                    images: [
                        "/images/transportation_lab1.jpg",
                        "/images/transportation_lab2.jpg",
                        "/images/transportation_lab3.jpg"
                    ]
                }
            ]
        },
        {
            title: "CONCRETE AND STRUCTURAL LABORATORY",
            description: "Provides essential testing facilities for concrete and structural components used in civil engineering projects.",
            details: [
                {
                    heading: "Experiment List",
                    items: [
                        "Workability test of concrete: Slump test, Compaction factor test, Flow table test.",
                        "Cube test of concrete.",
                        "Cylinder test for concrete.",
                        "Split tensile strength of concrete.",
                        "Prism Test for determining modulus of rupture of concrete.",
                        "Design of concrete Mix.",
                        "Failure of RC beam in bending and shear."
                    ]
                },
                {
                    heading: "Equipment List",
                    items: [
                        "CTM machine",
                        "Flexural testing machine",
                        "Cube mould (150 X150X150 mm)",
                        "Cube mould (70.6X 70.6X70.6 mm)",
                        "Cylinder mould",
                        "Slump test apparatus",
                        "Compaction factor apparatus",
                        "Flow table"
                    ]
                },
                {
                    heading: "Laboratory Gallery",
                    images: [
                        "/images/concrete_lab1.jpg",
                        "/images/concrete_lab2.jpg",
                        "/images/concrete_lab3.jpg"
                    ]
                }
            ]
        },
        {
            title: "HYDRAULICS LABORATORY",
            description: "Specializes in studying fluid mechanics and hydraulic machines to support civil engineering education.",
            details: [
                {
                    heading: "Experiment List",
                    items: [
                        "Proof of Bernoulli’s theorem.",
                        "Friction flow through pipes.",
                        "Determination of Reynolds number.",
                        "Determination of metacentric height.",
                        "Determination of coefficient of discharge for v-notch.",
                        "Determination of coefficient of discharge for venturimeter.",
                        "Impact of jet.",
                        "Flow through orifice.",
                        "Proof of stokes law.",
                        "Work done by pelton wheel turbine.",
                        "Efficiency of Francis turbine.",
                        "Discharge through centrifugal pump."
                    ]
                },
                {
                    heading: "Equipment List",
                    items: [
                        "Impact of jet on vane apparatus",
                        "Reciprocating pump test rig",
                        "Centrifugal pump test rig",
                        "Pelton wheel turbine test rig",
                        "Francis turbine test rig",
                        "Kaplan turbine test rig"
                    ]
                },
                {
                    heading: "Laboratory Gallery",
                    images: [
                        "/images/hydraulics_lab1.jpg",
                        "/images/hydraulics_lab2.jpg",
                        "/images/hydraulics_lab3.jpg"
                    ]
                }
            ]
        }
        
    ];

    const toggleDetails = (labTitle) => {
        setActiveLab((prev) => (prev === labTitle ? null : labTitle));
    };

    return (
        <Layout title="Laboratories | Trident Academy of Technology">
            {/* Hero Section */}
            <section
                className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] bg-cover bg-center flex items-center justify-center"
                style={{
                    backgroundImage: "url('/images/Laboratories.jpg')",
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <h1 className="relative text-4xl font-bold text-white">Laboratories</h1>
            </section>

            {/* Breadcrumbs */}
           {/* Breadcrumb Navigation */}
           <nav className="container mx-auto px-4 sm:px-6 lg:px-12 py-4 flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-8 mt-4 mb-8">
                <ul className="flex flex-wrap items-center text-sm sm:text-base lg:text-lg space-x-2">
                    <li>
                        <Link href="/" className="hover:underline flex items-center">
                            <span className="mr-1">🏠</span> Home
                        </Link>
                    </li>
                    <li>/</li>
                    <li>
                        <Link href="/academics" className="hover:underline">
                            Academics
                        </Link>
                    </li>
                    <li>/</li>
                    <li>
                        <Link href="/departments" className="hover:underline">
                            Departments
                        </Link>
                    </li>
                    <li>/</li>
                    <li>
                        <Link href="/civil-engineering" className="hover:underline">
                            Civil Engineering
                        </Link>
                    </li>
                    <li>/</li>
                    <li className="text-gray-600">Laboratories</li>
                </ul>
            </nav>

            {/* Main Content */}
            <main className="container mx-auto px-6 sm:px-8 lg:px-12 py-8">
                <div className="space-y-4">
                    {laboratoryCards.map((card, index) => (
                        <div key={index} className="border rounded-lg shadow p-4">
                            <button
                                onClick={() => toggleDetails(card.title)}
                                className="flex justify-between items-center w-full text-left"
                            >
                                <h2 className="text-xl font-semibold">{card.title}</h2>
                                <span>{activeLab === card.title ? "−" : "+"}</span>
                            </button>
                            {activeLab === card.title && (
                                <div className="mt-4">
                                    <p className="text-gray-600">{card.description}</p>
                                    {card.details.map((detail, detailIndex) => (
                                        <div key={detailIndex} className="mt-6">
                                            <h3 className="text-lg font-semibold mb-2">
                                                {detail.heading}
                                            </h3>
                                            {detail.items ? (
                                                <ul className="list-decimal pl-6 space-y-1">
                                                    {detail.items.map((item, itemIndex) => (
                                                        <li key={itemIndex}>{item}</li>
                                                    ))}
                                                </ul>
                                            ) : (
                                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
                                                    {detail.images.map((img, imgIndex) => (
                                                        <div
                                                            key={imgIndex}
                                                            className="relative w-full h-32 rounded-lg overflow-hidden"
                                                        >
                                                            <Image
                                                                src={img}
                                                                alt={`Lab Image ${imgIndex + 1}`}
                                                                layout="fill"
                                                                objectFit="cover"
                                                            />
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </main>

            <Footer />
        </Layout>
    );
};

export default Laboratories;
