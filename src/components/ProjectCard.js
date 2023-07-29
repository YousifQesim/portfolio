import { motion } from "framer-motion";
import Image from "next/image";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      
      whileTap={{ scale: 0.95 }}
      className="w-full md:w-1/2 lg:w-1/3 p-4 hover:cursor-pointer"
    >
      <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
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
            <p className="text-lg">{project.description}</p>
          </div>
        </div>
        <div className="p-4">
          <div className="flex justify-between mb-4">
            <div className="flex">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="bg-gray-200 text-gray-600 px-2 py-1 rounded-full mr-2"
                >
                  {technology}
                </span>
              ))}
            </div>
            <div className="flex">
              <a
                href={project.livePreview}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white px-4 py-2 rounded-full mx-2"
              >
                Live Preview
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-500 text-white px-4 py-2 rounded-full mx-2"
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
