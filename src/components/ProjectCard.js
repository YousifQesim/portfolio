import { motion } from "framer-motion";
import Image from "next/image";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      whileTap={{ scale: 0.95 }}
      className="w-full md:w-1/2 lg:w-1/3 p-4 hover:cursor-pointer"
    >
      <div className=" rounded-lg  overflow-hidden h-full bg-ProjectBackground shadow-sm box">
        <div className="relative" style={{ height: "400px" }}>
          <Image
            src={project.image}
            alt={project.title}
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
            <h1 className="text-2xl font-bold mb-2">{project.title}</h1>
          </div>
        </div>
        <div className="p-4  ">
          <div className="flex flex-col items-start mb-4 gap-y-5">
            <div className="flex  w-full flex-wrap">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className=" text-white inline px-2 py-1 rounded-full mr-2"
                >
                  #{technology}
                </span>
              ))}
            </div>
            <div className="flex justify-center  w-full">
              {project.livePreview ? (
                <a
                  href={project.livePreview}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-indigo-600 text-white px-4 py-2 rounded-full mx-2"
                >
                  Live Preview
                </a>
              ) : null}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white px-4 py-2 rounded-full mx-2"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
