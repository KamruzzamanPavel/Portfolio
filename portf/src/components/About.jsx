import { Link } from "react-scroll";

const About = () => {
  return (
    <section
      id="about"
      className="relative flex flex-col md:flex-row items-center justify-between bg-white dark:bg-black text-black dark:text-white h-70vh md:h-[70%] overflow-hidden transition-all duration-300"
    >
      {/* Left Text Section */}
      <div className="relative z-10 px-6 py-12 md:pl-24 lg:pl-32 max-w-md md:max-w-lg lg:max-w-xl bg-white/80 dark:bg-black/80 md:bg-transparent h-full flex flex-col justify-between">
        <div>
          <h1 className="text-4xl md:text-3xl lg:text-4xl font-bold leading-tight">
            I don&apos;t code,
            <br /> I{" "}
            <span className="text-red-600 dark:text-red-500">Ctrl+C</span> and
            <span className="text-green-400 dark:text-green-500">
              {" "}
              Ctrl+V
            </span>{" "}
            from{" "}
            <span className="text-blue-600 dark:text-blue-500">ChatGPT</span>.
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-100 text-base md:text-lg">
            Feel free contact me for any good-for-nothing ideas that you have.
          </p>
        </div>
        <div className="mt-auto">
          <Link
            to="personal-info"
            smooth={true}
            offset={-70} // Adjust offset based on your header height
            duration={500}
            className="block mt-8 px-4 py-2 text-sm md:px-6 md:py-3 md:text-base border border-green-500 md:border-none text-green-500 hover:bg-green-500 hover:text-black dark:hover:text-white transition duration-300 ease-in-out rounded text-center"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Image Section - Visible on Larger Screens, Background on Phones */}
      <div className="hidden md:flex w-full md:w-1/3 h-64 md:h-auto items-center justify-center p-4 md:p-10 z-10">
        <img
          src="pc.jpg" // Replace with your image URL
          alt="Pavel"
          className="object-cover w-fit h-auto max-w-full max-h-full rounded brightness-50"
        />
      </div>

      {/* Background Image on Small Screens */}
      <div
        className="absolute inset-0 md:hidden bg-cover bg-center"
        style={{ backgroundImage: 'url("pc.jpg")' }}
      ></div>
    </section>
  );
};

export default About;
