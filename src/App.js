import React from "react";
import About from "./Components/About";
import Contact from "./Components/Contact";
import NavBar from "./Components/NavBar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";

export default function App() {
  return (
    <main>
      <NavBar />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}