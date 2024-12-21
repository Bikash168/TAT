import React, { useEffect } from "react";

const HeroSection = () => {
  useEffect(() => {
    // Dynamically set height for mobile devices (optional safeguard for iOS devices)
    const setVideoHeight = () => {
      const videoElement = document.getElementById("hero-video");
      if (videoElement) {
        videoElement.style.height = `${window.innerHeight}px`;
      }
    };

    // Call the function on load and resize
    setVideoHeight();
    window.addEventListener("resize", setVideoHeight);

    // Clean up listener on unmount
    return () => {
      window.removeEventListener("resize", setVideoHeight);
    };
  }, []);

  return (
    <div className="relative w-full h-screen bg-gray-900 text-white overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          id="hero-video"
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full"
        >
          <source src="/your-video-file.mp4" type="video/mp4" />
          {/* Fallback for browsers that don’t support video */}
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content Overlay (Optional) */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold">
            Welcome to Trident Academy Of Technology
          </h1>
          <p className="text-lg md:text-xl mt-4">
            Creating impactful solutions for a sustainable future.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
