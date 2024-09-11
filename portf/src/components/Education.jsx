import { FaUniversity, FaGraduationCap } from "react-icons/fa";
import { MdSchool } from "react-icons/md";

const Education = () => {
  return (
    <section
      id="education"
      className="my-12 bg-white dark:bg-black text-black dark:text-white py-8 px-4 sm:px-6 lg:px-8"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        My{" "}
        <span className="text-green-600 dark:text-green-500">Education </span>
        <br />
        <span className="text-sm">( i am Not a BUETian ) </span>
      </h2>

      <div className="flex flex-col items-center space-y-8">
        {/* Islamic University */}
        <div className="w-full max-w-md bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-4 mb-4">
            <FaUniversity
              size={32}
              className="text-blue-500 dark:text-blue-400 mb-4 sm:mb-0"
            />
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-semibold">Islamic University</h3>
              <p className="text-gray-800 dark:text-gray-300">
                Kushtia, Bangladesh
              </p>
            </div>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            <FaGraduationCap size={20} className="inline mr-2" />
            B.Engg in Computer Science Engineering (CSE)
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            <MdSchool size={20} className="inline mr-2" />
            4th Year Undergraduate Student
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
