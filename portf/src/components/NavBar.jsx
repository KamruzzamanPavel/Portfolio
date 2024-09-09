import { useState, useEffect } from "react";
import { Link } from "react-scroll";

const NavBar = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  // Apply dark mode by adding or removing the class from the <html> or <body> element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="p-4 z-50 bg-white dark:bg-gray-800 shadow-md flex justify-between items-center relative">
      <h1 className="text-xl font-bold">Pavel&apos;s YoYo</h1>

      {/* Hamburger Icon */}
      <div className="block lg:hidden">
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
        } lg:flex flex-col lg:flex-row absolute lg:relative top-16 left-0 lg:top-auto lg:left-auto bg-white dark:bg-gray-800 lg:bg-transparent lg:shadow-none w-full lg:w-auto lg:p-0 p-4`}
      >
        <div className="flex flex-col lg:flex-row lg:space-x-6 space-y-4 lg:space-y-0 ">
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="cursor-pointer text-gray-800 dark:text-gray-200"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="cursor-pointer text-gray-800 dark:text-gray-200"
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="cursor-pointer text-gray-800 dark:text-gray-200"
            onClick={() => setMenuOpen(false)}
          >
            Skills
          </Link>
          <Link
            to="paperplanes"
            smooth={true}
            duration={500}
            className="cursor-pointer text-gray-800 dark:text-gray-200"
            onClick={() => setMenuOpen(false)}
          >
            PaperPlanes
          </Link>
          <Link
            to="contacts"
            smooth={true}
            duration={500}
            className="cursor-pointer text-gray-800 dark:text-gray-200"
            onClick={() => setMenuOpen(false)}
          >
            Contacts
          </Link>
        </div>

        {/* Dark Mode Toggle */}
        <div className="flex items-center mt-4 lg:mt-0">
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
                className={`dot absolute left-1 top-1 w-8 h-8 rounded-full transition-transform duration-300 ${
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
              {darkMode ? "Light" : "Dark"}
            </span>
          </label>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
