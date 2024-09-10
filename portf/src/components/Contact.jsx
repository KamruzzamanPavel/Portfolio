// const Contact = () => {
//   return (
//     <section
//       id="contacts"
//       className="my-10 elative flex flex-col md:flex-row items-center rounded justify-between bg-black/5 dark:bg-black/30 text-black dark:text-white h-40vh overflow-hidden transition-all  duration-300"
//     >
//       <h2 className="text-3xl font-bold">Contact Me</h2>
//       <p className="mt-4 text-gray-700 dark:text-gray-300">
//         You can reach me via email at:{" "}
//         <a
//           href="mailto:example@email.com"
//           className="text-blue-500 dark:text-yellow-500"
//         >
//           example@email.com
//         </a>
//       </p>
//     </section>
//   );
// };

// export default Contact;
import "@fortawesome/fontawesome-free/css/all.min.css";

const Contact = () => {
  return (
    <section
      id="contacts"
      className="relative flex flex-col items-center justify-center bg-white dark:bg-black text-black dark:text-white h-screen transition-all duration-300"
    >
      <div className="px-6 py-12 md:px-24 lg:px-32 text-center max-w-lg z-10">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
          Let&apos;s <span className="text-green-500">Connect</span>
        </h2>
        <p className="mt-6 text-gray-600 dark:text-gray-400 text-lg">
          You can reach me at:{" "}
          <a
            href="mailto:example@email.com"
            className="text-green-500 hover:underline"
          >
            example@email.com
          </a>
        </p>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mt-8">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:text-black dark:hover:text-white transition duration-300 ease-in-out"
          >
            <i className="fab fa-linkedin fa-2x"></i>{" "}
            {/* Font Awesome for icon */}
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:text-black dark:hover:text-white transition duration-300 ease-in-out"
          >
            <i className="fab fa-facebook fa-2x"></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:text-black dark:hover:text-white transition duration-300 ease-in-out"
          >
            <i className="fab fa-instagram fa-2x"></i>
          </a>
        </div>

        <button className="mt-8 px-6 py-3 border border-green-500 text-green-500 hover:bg-green-500 hover:text-black dark:hover:text-white transition duration-300 ease-in-out">
          Send an Email
        </button>
      </div>
    </section>
  );
};

export default Contact;
