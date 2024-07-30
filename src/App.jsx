import "./App.css";
import { AboutMe } from "./components/AboutMe/AboutMe";
import ContactMe from "./components/ContactMe/ContactMe";
import Hero from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import { Resume } from "./components/Resume/Resume";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      <Resume />
      <Projects />
      <ContactMe />
    </>
  );
}

export default App;
