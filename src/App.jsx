import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="min-h-screen bg-skin text-gray-900">
        <Navbar />
        <main className="pt-20">
          <Hero />
          <div className="max-w-6xl mx-auto px-6 space-y-24">
            <About />
            <Skills />
            <Projects />
            <Contact />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
