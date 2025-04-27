import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Home = () => (
  <section id="home" className="h-screen flex flex-col text-center text-gray-900 bg-gray-100 relative">
    {/* Full-Width Landscape Image */}
    <div className="w-full h-2/5 md:h-1/2 overflow-hidden">
      <img
        src="https://www.cmu.edu/news/sites/default/files/styles/hero_full_width_tablet_2x/public/2023-03/rankings-2000x1000-min_0.jpg.webp?itok=X9mXg3rW" // Replace with your preferred image URL
        alt="Landscape"
        className="w-full h-full object-cover"
      />
    </div>

    {/* Content Section Below Image */}
    <div className="flex flex-col items-center justify-center flex-grow px-6">
      {/* Name & Title */}
      <motion.h1
        className="text-5xl font-extrabold text-gray-900 leading-tight mt-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Chenhao Li
      </motion.h1>

      <motion.p
        className="text-xl text-gray-700 mt-3"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Mechanical Engineer | Automation Engineer | Robot Learning
      </motion.p>

      {/* Subtle Divider */}
      <div className="w-24 h-1 bg-blue-500 mt-6"></div>

      {/* Animated Quote / Motto */}
      <motion.p
        className="text-md text-gray-600 italic mt-6 max-w-lg px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.4 }}
      >
        "Robotics is not just about machines. It's about creating intelligent systems that can think, move, and interact with the world."
      </motion.p>

      {/* Social Links */}
      <motion.div
        className="mt-6 flex space-x-6 text-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <a href="mailto:chenhao6@andrew.cmu.edu" className="text-gray-600 hover:text-blue-500 transition">
          <FaEnvelope />
        </a>
        <a href="https://github.com/BarryLi159159" className="text-gray-600 hover:text-blue-500 transition">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/chenhaoli0369/" className="text-gray-600 hover:text-blue-500 transition">
          <FaLinkedin />
        </a>
      </motion.div>

      {/* Scroll Down Prompt */}
      <motion.div
        className="mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <Link to="education" smooth={true} duration={500} className="text-blue-500 text-md cursor-pointer hover:text-blue-700 transition">
          Scroll Down to Learn More ↓
        </Link>
      </motion.div>
    </div>
  </section>
);

export default Home;
