import { useState } from "react";

const PersonalInfo = () => {
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(!showMore);
  };

  return (
    <section
      id="personal-info"
      className="my-10 relative flex flex-col md:flex-row items-center justify-between bg-white dark:bg-black text-black dark:text-white h-screen-70 overflow-hidden transition-all duration-300"
    >
      {/* Left Image Section */}
      <div className=" w-full md:w-1/2 h-64 md:h-auto flex items-center justify-center p-4 md:p-10 z-10">
        <img
          src="pro.jpg" // replace with the actual image URL
          alt="Your Image"
          className="object-cover w-full h-full max-w-full max-h-full rounded filter brightness-50 grayscale"
        />
      </div>

      {/* Right Text Section */}
      <div className=" px-6 py-12 md:pl-15 lg:pl-24 max-w-md md:max-w-lg lg:max-w-xl z-10">
        {!showMore && (
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold leading-tight">
            Hello, I’m{" "}
            <span className="text-green-600 dark:text-green-500">Pavel</span>
          </h1>
        )}
        {showMore && (
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold leading-tight">
            Hello, I’m{" "}
            <span className="text-green-600 dark:text-green-500">
              Kamruzzaman Pavel
            </span>
          </h1>
        )}
        <p
          className={`mt-6 text-gray-600 dark:text-gray-400 text-lg transition-all duration-300 ${
            showMore ? "text-xl font-semibold" : "text-base"
          }`}
        >
          {showMore
            ? "A passionate developer with extensive experience in building innovative and engaging web applications. My expertise spans across modern technologies including React, Node.js, and more, enabling me to craft solutions that bring ideas to life in meaningful ways."
            : "I am a passionate developer with experience in building amazing web applications. I love working with modern technologies like React, Node.js, and more to bring ideas to life."}
        </p>
        <div className="flex flex-col md:flex-row">
          <button
            onClick={handleToggle}
            className="mt-8 px-6 py-3 border border-green-500 text-green-500 hover:bg-green-700 hover:text-black dark:hover:text-white transition duration-300 ease-in-out rounded"
          >
            {showMore ? "Learn Less" : "Learn More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default PersonalInfo;
