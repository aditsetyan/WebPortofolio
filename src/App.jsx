import React from "react";
import Home from "./sections/Home";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Skills from "./sections/Skills";


function App() {
  return (
    <main className="bg-black text-white font-sans overflow-x-hidden">
      <Home />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
