import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaJenkins,
  FaCode,
} from "react-icons/fa";
import {
  SiMongodb,
  SiRedux,
  SiTailwindcss,
  SiJavascript,
  SiExpress,
  SiGraphql,
  SiFirebase,
  SiPostman,
} from "react-icons/si";

const Skills = () => {
  return (
    <section
      id="skill"
      className="my-12 bg-white dark:bg-black text-black dark:text-white p-8"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        <span className="text-red-600 dark:text-red-500">Skills</span> , Those
        I&apos;ve Gained on the Way
      </h2>

      <div className="flex flex-wrap justify-center items-stretch gap-4">
        {/* Front-End Skills */}
        <div className="flex-grow max-w-xs sm:max-w-sm md:max-w-md bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md flex flex-col">
          <h3 className="text-2xl font-semibold mb-4 text-center">Front-End</h3>
          <ul className="list-none text-gray-800 dark:text-gray-300 flex-grow">
            <li className="flex items-center space-x-2 m-1">
              <FaReact size={24} /> <span>React.js</span>
            </li>
            <li className="flex items-center space-x-2 m-1">
              <SiRedux size={24} /> <span>Redux</span>
            </li>
            <li className="flex items-center space-x-2 m-1">
              <SiJavascript size={24} /> <span>JavaScript (ES6+)</span>
            </li>
            <li className="flex items-center space-x-2 m-1">
              <FaHtml5 size={24} /> <span>HTML5</span>
            </li>
            <li className="flex items-center space-x-2 m-1">
              <FaCss3Alt size={24} /> <span>CSS3 / Tailwind CSS</span>
            </li>
            <li className="flex items-center space-x-2 m-1">
              <SiTailwindcss size={24} /> <span>Tailwind CSS</span>
            </li>
          </ul>
        </div>

        {/* Back-End Skills */}
        <div className="flex-grow max-w-xs sm:max-w-sm md:max-w-md bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md flex flex-col">
          <h3 className="text-2xl font-semibold mb-4 text-center">Back-End</h3>
          <ul className="list-none text-gray-800 dark:text-gray-300 flex-grow">
            <li className="flex items-center space-x-2 m-1">
              <FaNodeJs size={24} /> <span>Node.js</span>
            </li>
            <li className="flex items-center space-x-2 m-1">
              <SiExpress size={24} /> <span>Express.js</span>
            </li>
            <li className="flex items-center space-x-2 m-1">
              <SiGraphql size={24} /> <span>GraphQL</span>
            </li>
            <li className="flex items-center space-x-2 m-1">
              <FaCode size={24} /> <span>Socket.io (Alternative)</span>
            </li>
          </ul>
        </div>

        {/* Database Skills */}
        <div className="flex-grow max-w-xs sm:max-w-sm md:max-w-md bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md flex flex-col">
          <h3 className="text-2xl font-semibold mb-4 text-center">Databases</h3>
          <ul className="list-none text-gray-800 dark:text-gray-300 flex-grow">
            <li className="flex items-center space-x-2 m-1">
              <SiMongodb size={24} /> <span>MongoDB</span>
            </li>
            <li className="flex items-center space-x-2 m-1">
              <FaDatabase size={24} /> <span>Mongoose</span>
            </li>
            <li className="flex items-center space-x-2 m-1">
              <SiFirebase size={24} /> <span>Firebase</span>
            </li>
          </ul>
        </div>

        {/* Other Tools */}
        <div className="flex-grow max-w-xs sm:max-w-sm md:max-w-md bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md flex flex-col">
          <h3 className="text-2xl font-semibold mb-4 text-center">
            Tools & Platforms
          </h3>
          <ul className="list-none text-gray-800 dark:text-gray-300 flex-grow">
            <li className="flex items-center space-x-2 m-1">
              <FaGitAlt size={24} /> <span>Git</span>
            </li>
            <li className="flex items-center space-x-2 m-1">
              <FaGithub size={24} /> <span>GitHub</span>
            </li>
            <li className="flex items-center space-x-2 m-1">
              <FaDocker size={24} /> <span>Docker</span>
            </li>
            <li className="flex items-center space-x-2 m-1">
              <FaJenkins size={24} /> <span>Jenkins</span>
            </li>
            <li className="flex items-center space-x-2 m-1">
              <SiPostman size={24} /> <span>Postman</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
