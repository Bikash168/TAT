import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  const videoRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const adjustHeight = () => {
      if (videoRef.current) {
        videoRef.current.style.height = `${
          window.innerWidth >= 1024 ? window.innerHeight * 0.88 : // Desktop
          window.innerWidth >= 768 ? window.innerHeight * 0.78 : // Tablet
          window.innerHeight * 0.67 // Mobile
        }px`;
      }
    };

    adjustHeight();
    window.addEventListener("resize", adjustHeight);

    return () => {
      window.removeEventListener("resize", adjustHeight);
    };
  }, []);

  return (
    <div className="relative w-full h-[67vh] sm:h-[78vh] lg:h-[88vh] bg-gray-900 text-white overflow-hidden">
      {/* Background Video with Fallback Image */}
      <div className="absolute inset-0">
        {!videoLoaded && (
          <Image
            src="/images/fallback-image.jpg"
            alt="Fallback Image"
            layout="fill"
            objectFit="cover"
            className="z-0"
            priority
          />
        )}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover z-10"
          poster="/images/placeholder.jpg"
          onLoadedData={() => setVideoLoaded(true)}
        >
          <source src="/your-video-file.mp4" type="video/mp4" />
          <source src="/your-video-file.mp4" type="video/mp4" media="(min-width: 1024px)" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Black Filter Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 md:px-8 lg:px-16 text-center z-20">
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Welcome to Trident Academy Of Technology
        </h1>
        <p className="text-sm sm:text-lg md:text-xl lg:text-2xl mt-3">
          Leading with Innovation, Growing with Sustainability.
        </p>
        <div className="mt-5">
          <Link href="/about">
            <button className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm md:text-lg lg:text-xl transition duration-300">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
