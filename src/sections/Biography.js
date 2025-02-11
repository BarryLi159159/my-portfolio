import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaBookOpen } from "react-icons/fa";

const Biography = () => (
  <section id="biography" className="h-auto flex flex-col items-center text-gray-900 px-8 py-16 bg-white">
    <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12">
      {/* Left Content (Biography) */}
      <div className="lg:col-span-8">
        {/* Section Title */}
        <motion.h2
          className="text-4xl font-bold text-gray-900"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Biography
        </motion.h2>

        {/* Subtle Divider */}
        <div className="w-16 h-1 bg-blue-500 mt-4 mb-6"></div>

        {/* Biography Content */}
        <motion.p
          className="text-lg text-gray-700 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          I am currently pursuing my Master’s degree in Mechanical Engineering at Carnegie Mellon University (CMU), 
          where I conduct research at the AI Safety Lab under the guidance of Prof. Zhao. My work primarily focuses on robot learning. 
          My research interests lie at the intersection of control theory, artificial intelligence, and robotics, aiming to develop 
          autonomous systems that can learn and operate with higher efficiency and robustness.
        </motion.p>

        <motion.p
          className="text-lg text-gray-700 leading-relaxed mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
        >
          I earned my Bachelor of Science in Mechanical Engineering from Worcester Polytechnic Institute (WPI). 
          During my undergraduate studies, I worked on automation systems, mechanical design, and thermal-fluid system optimization. 
          Additionally, I was actively involved in research at WPI’s Surface Metrology Lab, where I collaborated with Prof. Brown to explore 
          advanced measurement techniques for surface characterization and material analysis.
        </motion.p>

        <motion.p
          className="text-lg text-gray-700 leading-relaxed mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.6 }}
        >
          I am passionate about building intelligent robots and developing more efficient learning-based control methods 
          that seamlessly integrate control, perception, and decision-making. My long-term goal is to bridge the gap between 
          robotic learning and real-world applications, enabling autonomous systems to perform complex tasks with greater adaptability, 
          efficiency, and intelligence.
        </motion.p>
      </div>

      {/* Right-Side Space for Balance (Illustration) */}
      <div className="lg:col-span-4 flex justify-center items-center">
        {/* Robot Illustration */}
        <motion.img
          src="https://techcrunch.com/wp-content/uploads/2025/02/ELEGNT_small_a9bbdf4f1f.2025-02-07-12_09_04.gif" // Replace with your actual image
          alt="Robot Learning"
          className="w-60 md:w-72 lg:w-80 object-contain opacity-90"
          initial={{ opacity: 0, scale: 0.8, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        />
      </div>
    </div>

    {/* Section Divider */}
    <div className="w-full h-px bg-gray-300 my-12"></div>

    {/* Education Section */}
    <motion.div
      className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.8 }}
    >
      {/* Left Side (Title) */}
      <div className="lg:col-span-4">
        <h3 className="text-2xl font-semibold text-gray-900 flex items-center">
          <FaGraduationCap className="mr-3 text-blue-500" />
          Education
        </h3>
      </div>

      {/* Right Side (Education Details) */}
      <div className="lg:col-span-8">
        <div className="space-y-8">
          <div>
            <h4 className="text-xl font-semibold text-gray-900 flex items-center">
              <FaBookOpen className="mr-2 text-blue-400" />
              Carnegie Mellon University
            </h4>
            <p className="text-gray-600 text-lg">Master of Science in Mechanical Engineering - Robotics & Control</p>
            <p className="text-gray-500 text-sm">Aug 2024 - Jun 2026 | Pittsburgh, PA</p>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-gray-900 flex items-center">
              <FaBookOpen className="mr-2 text-blue-400" />
              Worcester Polytechnic Institute
            </h4>
            <p className="text-gray-600 text-lg">Bachelor of Science in Mechanical Engineering - Design & Manufacturing</p>
            <p className="text-gray-500 text-sm">Aug 2022 - Jun 2024 | Worcester, MA</p>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

export default Biography;
