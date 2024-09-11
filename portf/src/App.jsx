import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import Education from "./components/Education";
import PersonalInfo from "./components/PersonalInfo";
import ScrollButton from "./components/ScrollButton";
const App = () => {
  return (
    <div
      id="skills"
      className="min-h-screen bg-gray-300 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
    >
      <NavBar />
      <main className="p-4">
        <About />
        <PersonalInfo />
        <Projects />
        <Skills />
        <Education />
        <Contact />
        <ScrollButton />
      </main>
    </div>
  );
};

export default App;
