const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4">
      <h3 className="text-lg font-bold">{project.name}</h3>
      <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
      <a
        href={project.link}
        className="text-blue-500 dark:text-yellow-500 underline"
      >
        View Project
      </a>
    </div>
  );
};

export default ProjectCard;
