// const About = () => {
//   return (
//     <section
//       id="about"
//       className="relative flex flex-col md:flex-row items-center justify-between bg-white dark:bg-black text-black dark:text-white h-screen-70 overflow-hidden transition-all duration-300"
//     >
//       {/* Left Text Section */}
//       <div className="px-6 py-12 md:pl-24 lg:pl-32 max-w-md md:max-w-lg lg:max-w-xl z-10">
//         <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold leading-tight">
//           I don&apos;t code,
//           <br /> I{" "}
//           <span className="text-red-600 dark:text-red-500">Ctrl+C</span> and
//           <span className="text-green-400 dark:text-green-500">
//             {" "}
//             Ctrl+V
//           </span>{" "}
//           from <span className="text-blue-600 dark:text-blue-500">ChatGPT</span>
//           .
//         </h1>
//         <p className="mt-6 text-gray-600 dark:text-gray-400 text-lg">
//           Contact me for any good for nothing ideas that you have.
//         </p>
//         <button className="mt-8 px-6 py-3 border border-green-500 text-green-500 hover:bg-green-500 hover:text-black dark:hover:text-white transition duration-300 ease-in-out rounded">
//           ! Contact Me
//         </button>
//       </div>

//       {/* Right Image Section */}
//       <div className="hidden md:flex w-full md:w-1/2 h-64 md:h-auto  items-center justify-center p-4 md:p-10 z-10">
//         <img
//           src="pc.jpg" // replace with the actual image URL
//           alt="PAvel"
//           className="object-cover w-full h-full max-w-full max-h-full rounded  brightness-50 "
//         />
//       </div>
//     </section>
//   );
// };

// export default About;
const About = () => {
  return (
    <section
      id="about"
      className="relative flex flex-col md:flex-row items-center justify-between bg-white dark:bg-black text-black dark:text-white h-screen-70 overflow-hidden transition-all duration-300"
    >
      {/* Left Text Section */}
      <div className="relative z-10 px-6 py-12 md:pl-24 lg:pl-32 max-w-md md:max-w-lg lg:max-w-xl bg-white/80 dark:bg-black/80 md:bg-transparent">
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
          Contact me for any good-for-nothing ideas that you have.
        </p>
        <button className="mt-8 px-6 py-3 border border-green-500 text-green-500 hover:bg-green-500 hover:text-black dark:hover:text-white transition duration-300 ease-in-out rounded">
          ! Contact Me
        </button>
      </div>

      {/* Image Section - Visible on Larger Screens, Background on Phones */}
      <div className="hidden md:flex w-full md:w-1/2 h-64 md:h-auto items-center justify-center p-4 md:p-10 z-10">
        <img
          src="pc.jpg" // Replace with your image URL
          alt="Pavel"
          className="object-cover w-full h-full max-w-full max-h-full rounded brightness-50"
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
