const PersonalInfo = () => {
  return (
    <section
      id="personal-info"
      className="my-10 relative flex flex-col md:flex-row items-center justify-between bg-white dark:bg-black text-black dark:text-white h-screen-70 overflow-hidden transition-all duration-300"
    >
      {/* Left Image Section */}
      <div className="w-full md:w-1/2 h-64 md:h-auto flex items-center justify-center p-4 md:p-10 z-10">
        <img
          src="pro.jpg" // replace with the actual image URL
          alt="Your Image"
          className="object-cover w-full h-full max-w-full max-h-full rounded filter brightness-50 grayscale"
        />
      </div>

      {/* Right Text Section */}
      <div className="px-6 py-12 md:pl-24 lg:pl-32 max-w-md md:max-w-lg lg:max-w-xl z-10">
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold leading-tight">
          Hello, I’m{" "}
          <span className="text-green-600 dark:text-green-500">Pavel</span>.
        </h1>
        <p className="mt-6 text-gray-600 dark:text-gray-400 text-lg">
          I am a passionate developer with experience in building amazing web
          applications. I love working with modern technologies like React,
          Node.js, and more to bring ideas to life.
        </p>
        <button className="mt-8 px-6 py-3 border border-green-500 text-green-500 hover:bg-green-500 hover:text-black dark:hover:text-white transition duration-300 ease-in-out rounded">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default PersonalInfo;
