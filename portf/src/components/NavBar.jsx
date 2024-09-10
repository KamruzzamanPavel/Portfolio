import { useState, useEffect } from "react";
import { Link } from "react-scroll";

const NavBar = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  // Apply dark mode by adding or removing the class from the <html> or <body> element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Handle scroll event to change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50); // Adjust the scroll threshold as needed
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`sticky top-0  z-50 shadow-md flex justify-between items-center transition-all duration-300 ${
        scrolling ? "bg-transpaernt  p-1" : "bg-white dark:bg-gray-800 p-2"
      }`}
    >
      <h1
        className={`${
          scrolling ? "text-green-400" : "text-gray-800 dark:text-gray-200"
        } text-xl font-bold `}
      >
        Pavel&apos;s YoYo
      </h1>

      {/* Hamburger Icon */}
      <div className="block md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-gray-800 dark:text-gray-200"
        >
          {menuOpen ? (
            <span className="text-2xl">✖</span>
          ) : (
            <span className="text-2xl">☰</span>
          )}
        </button>
      </div>

      {/* Navigation Links */}
      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } lg:flex flex-col lg:flex-row absolute lg:relative top-16 left-0 lg:top-auto lg:left-auto w-full lg:w-auto lg:p-0 p-4 transition-all duration-300 ${
          scrolling ? " bg-transparent " : " bg-white dark:bg-gray-800"
        } ${menuOpen ? " bg-white dark:bg-gray-800 " : ""}`}
      >
        <div className="flex font-semibold flex-col lg:flex-row lg:space-x-6 space-y-4 lg:space-y-0 items-center">
          <Link
            to="personal-info"
            smooth={true}
            duration={500}
            className={`cursor-pointer ${
              scrolling ? "text-blue-500" : "text-gray-800 dark:text-gray-200"
            } hover:text-green-500 dark:hover:text-green-400 transition-colors duration-300`}
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className={`cursor-pointer ${
              scrolling ? "text-blue-500" : "text-gray-800 dark:text-gray-200"
            } hover:text-green-500 dark:hover:text-green-400 transition-colors duration-300`}
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </Link>
          <Link
            to="skill"
            smooth={true}
            duration={500}
            className={`cursor-pointer ${
              scrolling ? "text-blue-500" : "text-gray-800 dark:text-gray-200"
            } hover:text-green-500 dark:hover:text-green-400 transition-colors duration-300`}
            onClick={() => setMenuOpen(false)}
          >
            Skills
          </Link>
          <Link
            to="education"
            smooth={true}
            duration={500}
            className={`cursor-pointer ${
              scrolling ? "text-blue-500" : "text-gray-800 dark:text-gray-200"
            } hover:text-green-500 dark:hover:text-green-400 transition-colors duration-300`}
            onClick={() => setMenuOpen(false)}
          >
            Education
          </Link>
          <Link
            to="paperplanes"
            smooth={true}
            duration={500}
            className={`cursor-pointer ${
              scrolling ? "text-blue-500" : "text-gray-800 dark:text-gray-200"
            } hover:text-green-500 dark:hover:text-green-400 transition-colors duration-300`}
            onClick={() => setMenuOpen(false)}
          >
            PaperPlanes
          </Link>
          <Link
            to="contacts"
            smooth={true}
            duration={500}
            className={`cursor-pointer ${
              scrolling ? "text-blue-500" : "text-gray-800 dark:text-gray-200"
            } hover:text-green-500 dark:hover:text-green-400 transition-colors duration-300`}
            onClick={() => setMenuOpen(false)}
          >
            Contacts
          </Link>
        </div>

        {/* Dark Mode Toggle */}
        <div className="flex items-center mt-4 lg:mt-0 lg:ml-6">
          <label
            htmlFor="toggle-switch"
            className="flex items-center cursor-pointer"
          >
            <div className="relative">
              <input
                id="toggle-switch"
                type="checkbox"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
                className="sr-only"
              />
              <div className="block bg-gray-300 dark:bg-gray-700 w-20 h-10 rounded-full"></div>
              <div
                className={`dot absolute left-2 top-1 w-8 h-8 rounded-full transition-transform duration-300 ${
                  darkMode ? "translate-x-full" : ""
                } flex justify-center items-center bg-black`}
              >
                {darkMode ? (
                  <span className="text-white text-lg">☀️</span>
                ) : (
                  <span className="text-yellow-400 text-lg">🌙</span>
                )}
              </div>
            </div>
            <span className="ml-3 text-gray-800 dark:text-gray-200">
              {darkMode ? "" : ""}
            </span>
          </label>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
