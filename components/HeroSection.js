import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const setVideoHeight = () => {
      if (videoRef.current) {
        videoRef.current.style.height = `${window.innerHeight * 0.93}px`; // 93% of viewport height
      }
    };

    setVideoHeight();
    window.addEventListener("resize", setVideoHeight);

    return () => {
      window.removeEventListener("resize", setVideoHeight);
    };
  }, []);

  return (
    <div className="relative w-full h-[93vh] bg-gray-900 text-white overflow-hidden">
      {/* Background Video with Fallback Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/fallback-image.jpg"
          alt="Fallback Image"
          layout="fill"
          objectFit="cover"
          className="z-0"
          priority
        />
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover z-10"
          poster="/images/fallback-image.jpg"
        >
          <source src="/your-video-file-low.mp4" type="video/mp4" />
          <source src="/your-video-file-high.mp4" type="video/mp4" media="(min-width: 1024px)" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Black Filter Overlay */}
      <div className="absolute inset-0 bg-black opacity-40 z-10" aria-hidden="true"></div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 mt-24 sm:mt-16 lg:mt-32 z-20">
        <div className="text-center space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight my-6">
            Welcome to Trident Academy Of Technology
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mt-2 sm:mt-4">
            Leading with Innovation, Growing with Sustainability.
          </p>
          <div className="mt-6">
            <Link href="/about">
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl transition duration-300">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
