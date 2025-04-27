import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => (
  <nav className="w-full bg-white text-black py-4 shadow-md border-b border-gray-300 flex justify-center">
    <div className="flex space-x-8">
      <Link to="/" className="hover:text-gray-500 text-lg font-medium">Home</Link>
      <Link to="/about" className="hover:text-gray-500 text-lg font-medium">About</Link>
      <Link to="/projects" className="hover:text-gray-500 text-lg font-medium">Projects</Link>
      <Link to="/contact" className="hover:text-gray-500 text-lg font-medium">Contact</Link>
    </div>
  </nav>
);

const PageLayout = ({ title, children }) => (
  <motion.div
    className="min-h-screen flex flex-col items-center justify-center text-black text-center p-6"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h1 className="text-6xl font-bold mb-6">{title}</h1>
    {children}
  </motion.div>
);

const Home = () => (
  <PageLayout title="Chenhao Li">
    <p className="text-lg mt-4">Mechanical Engineer | Robotics Enthusiast | Automation Developer</p>
    <div className="mt-6 space-x-6">
      <a href="https://github.com/yourgithub" className="text-gray-600 hover:text-black text-xl">GitHub</a>
      <a href="https://linkedin.com/in/yourlinkedin" className="text-gray-600 hover:text-black text-xl">LinkedIn</a>
    </div>
  </PageLayout>
);

const About = () => (
  <PageLayout title="About Me">
    <p className="text-lg">I am passionate about automation and robotics.</p>
    <h2 className="text-2xl mt-6 font-semibold">Skills</h2>
    <ul className="mt-4 text-lg">
      <li>SolidWorks, FEA, MATLAB</li>
      <li>ROS2, Arduino, KLAMPT</li>
      <li>Python, C++, OpenCV</li>
    </ul>
  </PageLayout>
);

const Projects = () => (
  <PageLayout title="Projects">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mt-6">
      <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-bold">Automated Cat Feeder</h2>
        <p className="text-gray-700 mt-2">Designed a robotic system to automate pet feeding.</p>
      </div>
      <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-bold">Robotic Arm Simulation</h2>
        <p className="text-gray-700 mt-2">Simulated robotic arms with physics-based control.</p>
      </div>
      <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-bold">Golf Tracker</h2>
        <p className="text-gray-700 mt-2">Developed a computer vision-based golf tracking system.</p>
      </div>
    </div>
  </PageLayout>
);

const Contact = () => (
  <PageLayout title="Contact">
    <p className="text-lg">📧 Email: your.email@example.com</p>
    <p className="mt-4">🔗 LinkedIn: linkedin.com/in/yourlinkedin</p>
  </PageLayout>
);

const App = () => (
  <Router>
    <div className="bg-white min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  </Router>
);

export default App;
