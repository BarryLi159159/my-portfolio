import React, { useState } from "react";
import { motion } from "framer-motion";

// Require images & videos for proper Webpack handling
const locomanImg = require("../sections/assets/locoman.jpg");
const catDetectVideo = require("../sections/assets/catdetect.mp4");
const handTrackingVideo = require("../sections/assets/Handtracking.mp4");
const faceImg = require("../sections/assets/face.jpg");
const catFeederImg = require("../sections/assets/catfeeder.jpg");
const endoscopeImg = require("../sections/assets/endoscope.jpg");
const roboticArmImg = require("../sections/assets/6-DOF Robotic Arm.jpg");
const smartPlantingImg = require("../sections/assets/smartPlanting.jpg");

const projectCategories = ["All", "Robotics", "Classic Control", "Deep Learning", "Mechatronics", "Computer Vision"];

const projects = [
  {
    title: "Locoman (Publishing)",
    categories: ["Robotics", "Deep Learning"],
    image: locomanImg,
    description: "Locoman efficiently learns tasks such as picking up toys and cleaning shoe racks.",
    link: "Publishing"
  },
  {
    title: "Cat Detect",
    categories: ["Computer Vision", "Deep Learning"],
    video: catDetectVideo,
    description: "Developed a computer vision model to detect cats in real-time camera feeds using deep learning techniques.",
    link: "https://github.com/BarryLi159159/CatDetect/blob/main/README.md"
  },
  {
    title: "Hands Pose Tracking",
    categories: ["Computer Vision", "Deep Learning"],
    video: handTrackingVideo,
    description: "Developed a computer vision system to detect and track key points on hands for gesture recognition and motion analysis.",
    link: "https://github.com/BarryLi159159/PointsTrackingOnHands/blob/main/README.md"
  },
  {
    title: "Facial Condition Monitoring",
    categories: ["Computer Vision", "Deep Learning"],
    image: faceImg,
    description: "Developed a computer vision system for recognizing facial acne using deep learning techniques.",
    link: "https://github.com/BarryLi159159/24678-facial-acne-detection"
  },

  {
    title: "Cat Feeder",
    categories: ["Mechatronics", "Robotics"],
    image: catFeederImg,
    description: "Designed an automated cat feeder capable of dispensing canned food for pets.",
    link: "https://github.com/BarryLi159159/catfeeder/blob/main/README.md"
  },
  {
    title: "MQP - Autonomous Measurement and Straightening of Endoscopes",
    categories: ["Mechatronics", "Computer Vision"],
    image: endoscopeImg,
    description: "Sponsored by Henke Sass Wolf of America. Designed and built a precision measurement and correction system for endoscopes.",
    link: "https://digital.wpi.edu/concern/student_works/kk91fq771?locale=en"
  },
  {
    title: "6-DOF Robotic Arm",
    categories: ["Robotics", "Mechatronics"],
    image: roboticArmImg,
    description: "Redesigned and controlled a robotic arm (BCN3D) for pick-and-place tasks.",
    link: "https://github.com/BarryLi159159/ARM/blob/main/README.md"
  },
  {
    title: "Smart Planting",
    categories: ["Mechatronics"],
    image: smartPlantingImg,
    description: "Developed an IoT-based system for smart planting, enabling automated monitoring and control of environmental conditions.",
    link: "https://docs.google.com/document/d/13_mBCXOkp7ocunKqvI5dWint5j9OXRDqT3v_8y5usy0/edit?tab=t.0"
  },

  {
    title: "Self-Driving Tesla Control",
    categories: ["Classic Control" ],
    image: null,  // Update when available
    description: "Developed control strategies for a Tesla Model 3 in Webots simulator using Python. Implemented PID, Pole Placement, LQR, A-star path planning, and EKF SLAM to achieve autonomous driving features.",
    link: "https://github.com/BarryLi159159/control"
  },

  {
    title: "UAV Stability",
    categories: ["Classic Control"],
    image: null,  // Update when available
    description: "Designed an adaptive control system to augment an LQR-based MPC controller for a DJI UAV. The controller ensured stability during a 50% thrust loss in one motor while hovering.",
    link: "https://github.com/BarryLi159159/control"
  },

];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const toggleCategory = (category) => {
    setSelectedCategory((prevCategory) => (prevCategory === category ? "All" : category));
  };

  const isProjectVisible = (project) => {
    return selectedCategory === "All" || project.categories.includes(selectedCategory);
  };

  return (
    <section id="projects" className="h-auto flex flex-col items-center justify-center text-gray-900 px-8 py-16 bg-white">
      <div className="max-w-6xl w-full">
        {/* Section Title */}
        <motion.h2 className="text-4xl font-bold text-gray-900 text-center mb-10" initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          Projects
        </motion.h2>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center space-x-3 mb-12">
          {projectCategories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 text-sm font-medium transition rounded-lg ${
                selectedCategory === category ? "bg-blue-500 text-white shadow-md" : "bg-gray-200 text-gray-700 hover:bg-blue-400 hover:text-white"
              }`}
              onClick={() => toggleCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid - More Spacing & Larger Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, idx) => (
            isProjectVisible(project) && (
              <motion.div
                key={idx}
                className="flex flex-col items-center p-6 rounded-lg shadow-lg transition-all duration-300 bg-white"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                {/* Project Image or Video */}
                {project.video ? (
                  <video 
                    src={project.video} 
                    className="w-full h-56 rounded-lg object-cover mb-4"
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                  />
                ) : (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-56 rounded-lg object-cover mb-4"
                  />
                )}

                {/* Project Title (Now Clickable) */}
                <h4 
                  className="text-lg font-semibold text-gray-900 text-center hover:text-blue-500 cursor-pointer"
                  onClick={() => project.link !== "Private" && project.link !== "N/A" && window.open(project.link, "_blank")}
                >
                  {project.title}
                </h4>

                {/* Project Description */}
                <p className="text-gray-700 text-sm mt-2 text-center">{project.description}</p>
              </motion.div>
            )
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;