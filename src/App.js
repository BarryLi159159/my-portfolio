import React from "react";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import "tailwindcss/tailwind.css";

const Home = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
    <h1 className="text-5xl font-bold">Chenhao Li</h1>
    <p className="text-xl mt-4">Mechanical Engineer | Robotics Enthusiast | Automation Developer</p>
    <div className="mt-6 flex space-x-4">
      <a href="https://github.com/BarryLi159159" className="text-blue-400 hover:underline">GitHub</a>
      <a href="https://www.linkedin.com/in/chenhaoli0369/" className="text-blue-400 hover:underline">LinkedIn</a>
      <a href="mailto:chenhao6@andrew.cmu.edu" className="text-blue-400 hover:underline">Email</a>
    </div>
  </motion.div>
);

const SkillSet = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-screen bg-gray-900 text-white p-10">
    <h2 className="text-4xl font-bold">Skill Set</h2>
    <ul className="mt-4 list-disc pl-6">
      <li>SolidWorks, FEA, MATLAB</li>
      <li>ROS2, Gazebo, Arduino, KLAMPT</li>
      <li>Python, C++, OpenCV</li>
      <li>Git, Linux, Docker</li>
    </ul>
  </motion.div>
);

const Education = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-screen bg-gray-900 text-white p-10">
    <h2 className="text-4xl font-bold">Education</h2>
    <p className="mt-4">Carnegie Mellon University - M.S. Robotics</p>
    <p>Bachelor's Degree in Mechanical Engineering</p>
  </motion.div>
);

const Experience = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-screen bg-gray-900 text-white p-10">
    <h2 className="text-4xl font-bold">Experience</h2>
    <ul className="mt-4 list-disc pl-6">
      <li>OTIS - Structural Vibration Optimization</li>
      <li>Automated Cat Feeder - Robotics Project</li>
      <li>Mechanical Arm Simulation & Control</li>
    </ul>
  </motion.div>
);

const App = () => (
  <Router>
    <div className="bg-gray-900 min-h-screen text-white">
      <nav className="p-4 flex space-x-6 text-lg">
        <NavLink to="/" className={({ isActive }) => (isActive ? "text-blue-400" : "text-white")}>Home</NavLink>
        <NavLink to="/skills" className={({ isActive }) => (isActive ? "text-blue-400" : "text-white")}>Skills</NavLink>
        <NavLink to="/education" className={({ isActive }) => (isActive ? "text-blue-400" : "text-white")}>Education</NavLink>
        <NavLink to="/experience" className={({ isActive }) => (isActive ? "text-blue-400" : "text-white")}>Experience</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<SkillSet />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </div>
  </Router>
);

export default App;
