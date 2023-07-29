"use client"
import { useState } from "react";
import ProjectCard from "../ProjectCard";
import projectsData from "/projects.json";

const ProjectsPage = () => {
  const [numProjects, setNumProjects] = useState(3);

  const handleFilterChange = (event) => {
    setNumProjects(parseInt(event.target.value));
  };

  const maxNumProjects = projectsData.projects.length;

  return (
    <div className="container mx-auto mt-8 px-4">
      <h1 className="text-4xl font-bold mb-8">My Projects</h1>
      <div className="mb-8">
        <label htmlFor="filter" className="mr-4">
          Filter:
        </label>
        <select
          id="filter"
          name="filter"
          value={numProjects}
          onChange={handleFilterChange}
          className="bg-gray-200 px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
        >
          {[...Array(maxNumProjects)].map((_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1} projects
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-wrap -mx-4">
        {projectsData.projects.slice(0, numProjects).map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;