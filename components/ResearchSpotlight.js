import React from "react";
import Image from "next/image";
import { useSpring, animated } from "@react-spring/web";

const ResearchSpotlight = () => {
  const metrics = [
    { number: 13636, label: "Indexed Publications", color: "bg-blue-500" },
    { number: 8404, label: "Scopus-Indexed Publications", color: "bg-green-500" },
    { number: 810, label: "National & International Patents", color: "bg-orange-500" },
  ];

  const laboratories = [
    { name: "Renewable Energy Laboratory", image: "/images/lab1.jpg" },
    { name: "PCB Prototyping and Design Lab", image: "/images/lab2.jpg" },
    { name: "MEMS & Nano Center", image: "/images/lab3.jpg" },
    { name: "CISCO thingQbator", image: "/images/lab4.jpg" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-16">
        {/* Header Section */}
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
            The world is evolving, and we are riding the wave with groundbreaking research.
          </h2>
          <p className="text-lg text-gray-600">
            TAT is committed to highly quality research that spans diverse disciplines including health, engineering, and social sciences.
          </p>
        </div>

        {/* Research Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {metrics.map((metric, index) => {
            const springProps = useSpring({
              from: { number: 0 },
              to: { number: metric.number },
              config: { mass: 1, tension: 120, friction: 14 },
            });

            return (
              <div
                key={index}
                className={`${metric.color} text-white py-6 px-8 rounded-lg shadow-lg text-center`}
              >
                <animated.h3 className="text-4xl font-bold">
                  {springProps.number.to((n) => `${n.toFixed(0)}+`)}
                </animated.h3>
                <p className="text-lg">{metric.label}</p>
              </div>
            );
          })}
        </div>

        {/* Laboratories Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {laboratories.map((lab, index) => (
            <div
              key={index}
              className="text-center p-4 border rounded-lg shadow-lg hover:scale-105 transform transition-transform bg-white"
            >
              <Image
                src={lab.image}
                alt={lab.name}
                width={400}
                height={400}
                className="rounded-lg mx-auto mb-4 object-cover"
                placeholder="blur"
                blurDataURL="/images/placeholder.jpg"
              />
              <h5 className="text-gray-700 text-lg font-medium">{lab.name}</h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchSpotlight;
