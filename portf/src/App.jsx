import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import NavBar from "./components/Navbar";
const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* <nav className="p-4 bg-white dark:bg-gray-800 shadow-md flex justify-between items-center">
        <h1 className="text-xl font-bold">Pavel&apos;s YoYo</h1>
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
                <span className="text-white text-lg">☀️</span> // Moon Icon
              ) : (
                <span className="text-yellow-400 text-lg">🌙</span> // Sun Icon
              )}
            </div>
          </div>
          <span className="ml-3 text-gray-800 dark:text-gray-200">
            {darkMode ? "Dark" : "Light"}
          </span>
        </label>
      </nav> */}
      <NavBar></NavBar>

      <main className="p-4">
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default App;
