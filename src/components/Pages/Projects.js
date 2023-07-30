"use client"
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ProjectCard from "../ProjectCard";
import projectsData from "/projects.json";

const ProjectsPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  const handleCarouselPrev = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? projectsData.projects.length - 1 : prevSlide - 1));
    setDirection(-1);
  };

  const handleCarouselNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide === projectsData.projects.length - 1 ? 0 : prevSlide + 1));
    setDirection(1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleCarouselNext();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto mt-8 px-4">
      <h1 className="text-4xl font-bold mb-8">My Projects</h1>
      <motion.div className="relative h-96" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
        {/* Carousel wrapper */}
        <motion.div className="absolute inset-0 flex" key={currentSlide} custom={direction} initial={{ x: direction > 0 ? "-100%" : "100%", opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: direction > 0 ? "100%" : "-100%", opacity: 0 }} transition={{ duration: 0.5 }}>
          {projectsData.projects.map((project, index) => (
            <motion.div key={project.id} className={`w-full h-full flex-shrink-0 ${index === currentSlide ? "" : "hidden"}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
              <div className="flex justify-center items-center h-full">
                <ProjectCard project={project} />
              </div>
            </motion.div>
          ))}
        </motion.div>
        {/* Slider controls */}
        <button
          type="button"
          className="absolute top-1/2 left-4 z-30 flex items-center justify-center h-12 w-12 rounded-full bg-white/30 dark:bg-gray-800/30 group hover:bg-white/50 dark:group-hover:bg-gray-800/60 focus:ring-4 focus:ring-white dark:focus:ring-gray-800/70 focus:outline-none"
          data-carousel-prev
          onClick={handleCarouselPrev}
        >
          <span className="sr-only">Previous</span>
          <svg
            className="w-6 h-6 text-white dark:text-gray-800"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          type="button"
          className="absolute top-1/2 right-4 z-30 flex items-center justify-center h-12 w-12 rounded-full bg-white/30 dark:bg-gray-800/30 group hover:bg-white/50 dark:group-hover:bg-gray-800/60 focus:ring-4 focus:ring-white dark:focus:ring-gray-800/70 focus:outline-none"
          data-carousel-next
          onClick={handleCarouselNext}
        >
          <span className="sr-only">Next</span>
          <svg
            className="w-6 h-6 text-white dark:text-gray-800"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </motion.div>
    </div>
  );
};

export default ProjectsPage;