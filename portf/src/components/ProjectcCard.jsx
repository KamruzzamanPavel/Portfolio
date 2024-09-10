/* eslint-disable react/prop-types */
const ProjectCard = ({ project }) => {
  return (
    <div className="bg-gray-200 dark:bg-gray-900 shadow-lg rounded-lg overflow-hidden mx-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg group border border-gray-300 dark:border-gray-700">
      {/* Project Image */}
      <div className="relative p-4">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-48 rounded-md object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
        />
      </div>

      {/* Project Details */}
      <div className="p-4">
        <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
          {project.name}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm md:text-base">
          {project.description}
        </p>

        {/* Buttons for Live Demo and GitHub */}
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
          <a
            href={project.liveDemo}
            className="rounded px-4 py-2 w-full sm:w-auto border border-green-500 text-green-500 dark:text-green-300 hover:bg-green-500 hover:text-black dark:hover:text-white transition duration-300 ease-in-out text-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>
          <a
            href={project.github}
            className="rounded px-4 py-2 w-full sm:w-auto border border-blue-500 text-blue-500 dark:text-blue-300 hover:bg-blue-500 hover:text-black dark:hover:text-white transition duration-300 ease-in-out text-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
