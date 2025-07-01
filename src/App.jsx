import React from "react";
import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";


function App() {
  return (
    <main className="bg-black text-white font-sans overflow-x-hidden">
      <Home />
      <About /> {/* ✅ Now included */}
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
