/* eslint-disable react/prop-types */
const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
      <img
        src={project.image}
        alt={project.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-1 sm:p-2  ">
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-1">
          {project.name}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-1 text-sm sm:text-base">
          {project.description}
        </p>
        <div className="flex flex-col sm:flex-row ">
          <a
            href={project.liveDemo}
            className="rounded  md:mt-8 px-4 py-2 md:px-6 md:py-3 border border-green-500 text-green-500 hover:bg-green-500 hover:text-black dark:hover:text-white transition duration-300 ease-in-out "
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>
          <a
            href={project.github}
            className="rounded mt-1 md:mt-8 px-4 ml-auto py-2 md:px-6 md:py-3 border border-green-500 text-green-500 hover:bg-green-500 hover:text-black dark:hover:text-white transition duration-300 ease-in-out"
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
