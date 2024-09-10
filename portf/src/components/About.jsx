const About = () => {
  return (
    <section
      id="about"
      className="relative flex flex-col md:flex-row items-center justify-between bg-white dark:bg-black text-black dark:text-white h-screen overflow-hidden transition-all duration-300"
    >
      {/* Left Text Section */}
      <div className="px-6 py-12 md:pl-24 lg:pl-32 max-w-md md:max-w-lg lg:max-w-xl z-10">
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold leading-tight">
          I don&apos;t code,
          <br /> I{" "}
          <span className="text-red-600 dark:text-red-500">Ctrl+C</span> and
          <span className="text-green-400 dark:text-green-500">
            {" "}
            Ctrl+V
          </span>{" "}
          from <span className="text-blue-600 dark:text-blue-500">ChatGPT</span>
          .
        </h1>
        <p className="mt-6 text-gray-600 dark:text-gray-400 text-lg">
          Contact me for any good for nothing ideas that you have.
        </p>
        <button className="mt-8 px-6 py-3 border border-green-500 text-green-500 hover:bg-green-500 hover:text-black dark:hover:text-white transition duration-300 ease-in-out rounded">
          ! Contact Me
        </button>
      </div>

      {/* Right Image Section */}
      <div className="w-full md:w-1/2 h-64 md:h-auto flex items-center justify-center p-4 md:p-10 z-10">
        <img
          src="pro.jpg" // replace with the actual image URL
          alt="Cameraman"
          className="object-cover w-full h-full max-w-full max-h-full rounded filter brightness-50 grayscale"
        />
      </div>

      {/* Overlay Graphic */}
      <div className="absolute inset-0 md:-left-16 lg:-left-32 top-0 bottom-0 z-0 pointer-events-none overflow-hidden">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#282828"
            fillOpacity="0.5"
            d="M0,320L60,293.3C120,267,240,213,360,202.7C480,192,600,224,720,202.7C840,181,960,107,1080,106.7C1200,107,1320,181,1380,218.7L1440,256L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default About;
