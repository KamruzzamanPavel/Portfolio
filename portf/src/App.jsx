import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import NavBar from "./components/Navbar";
const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
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
