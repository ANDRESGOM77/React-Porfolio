import "./App.css";
import Hero from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <>
      <Navbar/>
      <Hero />
      <Projects /> 
    </>
  );
}

export default App;
