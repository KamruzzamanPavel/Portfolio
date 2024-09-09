import { useState, useEffect } from "react";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <nav className="p-4 bg-white dark:bg-gray-800 shadow-md flex justify-between items-center">
        <h1 className="text-xl font-bold">My Portfolio</h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 bg-blue-500 dark:bg-yellow-500 text-white rounded"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </nav>

      <main className="p-4">
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default App;
