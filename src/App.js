import React from "react";
import { Link } from "react-scroll";
import Home from "./sections/Home";
import Biography from "./sections/Biography";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";

import Contact from "./sections/Contact";

const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full bg-white text-gray-900 shadow-md py-4 px-6 flex justify-between items-center z-50">
    <span className="text-xl font-bold">Chenhao Li</span>
    <div className="hidden md:flex space-x-6">
      <Link to="home" smooth={true} duration={500} className="cursor-pointer hover:text-blue-500 transition">Home</Link>
      <Link to="biography" smooth={true} duration={500} className="cursor-pointer hover:text-blue-500 transition">Biography</Link>
      <Link to="experience" smooth={true} duration={500} className="cursor-pointer hover:text-blue-500 transition">Experience</Link>
      <Link to="projects" smooth={true} duration={500} className="cursor-pointer hover:text-blue-500 transition">Projects</Link>
      
      <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-blue-500 transition">Contact</Link>
    </div>
  </nav>
);

const App = () => (
  <div className="bg-gray-100">
    <Navbar />
    <Home />
    <Biography />
    <Experience />
    <Projects />
    <Contact />
  </div>
);

export default App;
