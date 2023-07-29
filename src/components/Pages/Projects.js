"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import projects from "/projects.json";

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevClick = () => {
    setActiveIndex((activeIndex - 1 + projects.length) % projects.length);
  };

  const handleNextClick = () => {
    setActiveIndex((activeIndex + 1) % projects.length);
  };

  return (
    <div className="relative">
      <div className="absolute inset-0">
        <Image
          src={projects[activeIndex].image}
          alt={projects[activeIndex].title}
      
          objectFit="cover"
          quality={100}
          width={300}
          height={300}
        />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="max-w-3xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-white text-center"
          >
            <h1 className="text-4xl font-bold mb-4">
              {projects[activeIndex].title}
            </h1>
            <p className="text-lg mb-8">{projects[activeIndex].description}</p>
            <div className="flex justify-center mb-8">
              {projects[activeIndex].technologies.map((technology) => (
                <span
                  key={technology}
                  className="bg-white text-black px-4 py-2 rounded-full mx-2"
                >
                  {technology}
                </span>
              ))}
            </div>
            <div className="flex justify-center">
              <a
                href={projects[activeIndex].livePreview}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black px-4 py-2 rounded-full mx-2"
              >
                Live Preview
              </a>
              <a
                href={projects[activeIndex].github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black px-4 py-2 rounded-full mx-2"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute inset-y-1/2 left-0 z-10">
        <button
          onClick={handlePrevClick}
          className="text-white hover:text-gray-300 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M15.707 3.293a1 1 0 00-1.414 0L6 11.586V9a1 1 0 00-2 0v4a1 1 0 001 1h4a1 1 0 000-2H7.414l8.293-8.293a1 1 0 000-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div className="absolute inset-y-1/2 right-0 z-10">
        <button
          onClick={handleNextClick}
          className="text-white hover:text-gray-300 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 16.707a1 1 0 001.414 0L14 8.414v2.172a1 1 0 102 0V4a1 1 0 00-1-1h-4a1 1 0 000 2h2.586l-8.293 8.293a1 1 0 000 1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Projects;