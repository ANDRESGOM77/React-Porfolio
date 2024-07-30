import "./App.css";
import { AboutMe } from "./components/AboutMe/AboutMe";
import Hero from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import { Resume } from "./components/Resume/Resume";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <AboutMe />
      <Resume />
      <Projects/>
      
    </>
  );
}

export default App;
