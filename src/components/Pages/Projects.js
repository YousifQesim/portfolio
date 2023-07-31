"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ProjectCard from "../ProjectCard";
import projectsData from "/projects.json";

const ProjectsPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleCarouselPrev = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? projectsData.projects.length - 1 : prevSlide - 1
    );
  };

  const handleCarouselNext = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === projectsData.projects.length - 1 ? 0 : prevSlide + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleCarouselNext();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen container mx-auto my-8 relative px-4 flex flex-col" id="portfolio" style={{ overflow: "auto" }}>
      <div className="absolute top-16 w-full left-0">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.5 }} className="relative bottom-28 my-16">
          <h1 className="md:text-7xl text-5xl font-extrabold text-white text-center opacity-5 uppercase">Portfolio</h1>
          <h3 className="text-xl font-extrabold text-white text-center absolute top-3 md:top-6 left-[27%] vsm:left-[30%] m:left-[34%] md:left-[40%] lg:left-[43%] xl:left-[45%]">Recent Work</h3>
        </motion.div>
        <motion.div className="relative h-auto top-32" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }}>
          <motion.div className="absolute inset-0" key={currentSlide} initial={{ x: "-20%", opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: "100%", opacity: 0 }} transition={{ duration: 0.8 }}>
            {projectsData.projects.map((project, index) => (
              <motion.div key={project.id} className={`w-full h-full flex-shrink-0 ${index === currentSlide ? "" : "hidden"}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
                <div className="flex justify-center items-center h-full">
                  <ProjectCard project={project} />
                </div>
              </motion.div>
            ))}
          </motion.div>
          <div className="opacity-0 md:opacity-100">
            <motion.button type="button" className="absolute top-1/2 left-4 z-30 flex items-center justify-center h-12 w-12 rounded-full dark:bg-gray-800/30 group hover:bg-indigo-600 dark:group-hover:bg-gray-800/60 focus:ring-4 focus:ring-white dark:focus:ring-gray-800/70 focus:outline-none border-2 border-indigo-600" data-carousel-prev onClick={handleCarouselPrev}>
              <span className="sr-only">Previous</span>
              <svg className="w-6 h-6 text-white dark:text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="rgb(79 70 229)" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
            <motion.button type="button" className="absolute top-1/2 right-4 z-30 flex items-center justify-center h-12 w-12 rounded-full dark:bg-gray-800/30 group hover:bg-indigo-600 dark:group-hover:bg-gray-800/60 focus:ring-4 focus:ring-white dark:focus:ring-gray-800/70 focus:outline-none border-2 border-indigo-600" data-carousel-next onClick={handleCarouselNext}>
              <span className="sr-only">Next</span>
              <svg className="w-6 h-6 text-white dark:text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="rgb(79 70 229)" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
          <div className="absolute mt-4 -bottom-64 md:-bottom-96 left-1/2 transform -translate-x-1/2 flex gap-2">
            {projectsData.projects.map((project, index) => (
              <button key={project.id} className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${index === currentSlide ? "bg-indigo-600" : "bg-gray-300"}`} onClick={() => setCurrentSlide(index)} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsPage;

