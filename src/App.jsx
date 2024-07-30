import "./App.css";
import { AboutMe } from "./components/AboutMe/AboutMe";
import ContactMe from "./components/ContactMe/ContactMe";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import { Resume } from "./components/Resume/Resume";
import {Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/AboutMe" element={<AboutMe />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/ContactMe" element={<ContactMe />} />
      </Routes>

      {/* <Footer/> */}
    </>
  );
}

export default App;
