import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Require images & videos for proper Webpack handling
// const locomanImg = require("../sections/assets/locoman.jpg");
// const catDetectVideo = require("../sections/assets/catdetect.mp4");
const handTrackingVideo = require("../sections/assets/Handtracking.mp4");
// const faceImg = require("../sections/assets/face.jpg");
// const catFeederImg = require("../sections/assets/catfeeder.jpg");
const endoscopeImg = require("../sections/assets/endoscope.jpg");
// const roboticArmImg = require("../sections/assets/6-DOF Robotic Arm.jpg");

// Project Data
const projects = [
  {
    title: "Human2Locoman RSS2025",
    categories: ["Robotics", "Deep Learning"],
    // image: locomanImg,
    // description: "A quadrupedal robot that learns versatile manipulation skills through human demonstrations and imitation learning, enabling autonomous tasks in complex environments.",
    link: "https://human2bots.github.io/",
    iframe: true
  },
  // {
  //   title: "Cat Detect",
  //   categories: ["Computer Vision", "Deep Learning"],
  //   video: catDetectVideo,
  //   description: "Developed a computer vision model to detect cats in real-time camera feeds using deep learning techniques.",
  //   link: "https://github.com/BarryLi159159/CatDetect/blob/main/README.md"
  // },
  {
    title: "Hands Pose Tracking",
    categories: ["Computer Vision", "Deep Learning"],
    video: handTrackingVideo,
    sections: [
      {
        title: "Introduction",
        content: `Hand pose estimation plays a vital role in gesture recognition, AR/VR interaction, sign language translation, and human-computer interfaces. Traditional methods often require high-compute setups or are too slow for real-time applications. This project aims to build a lightweight, real-time hand keypoint detection system using YOLOv4-based pose estimation, enabling robust hand tracking with only a standard webcam and a consumer-grade GPU. This contributes to broader accessibility of gesture-based interaction systems.`
      },
      {
        title: "Method",
        content: `Model and Dataset:
The model was trained on a labeled hand key points dataset using Ultralytics' YOLOv4 pose model. Key Points represent critical joint locations (e.g., fingertips, knuckles) for both left and right hands.

Real-Time Inference Pipeline:
A Python script using OpenCV captures live video input from a webcam. Each frame is passed to the YOLOv4 model for inference. The results include the detected keypoints and confidence scores.

Visualization:
Detected keypoints are overlaid on the video stream in real time. The annotated frame is displayed using OpenCV, allowing users to see the tracking results immediately.

Hardware & Runtime:
The system runs at approximately 30 FPS on a laptop with an NVIDIA RTX GPU, enabling low-latency applications.`
      },
      {
        title: "Results",
        content: `• Achieved real-time hand keypoint detection on both hands using a single model.

• Robust to partial occlusion and variable lighting, demonstrating stable predictions across various hand poses and backgrounds.

• The modular design allows for future extension to gesture classification or multi-hand tracking.`,
        // images: [
        //   require("../sections/assets/hand_tracking_results.png"),
        // ]
      },
      {
        title: "Discussion",
        content: `This project demonstrates the feasibility of using YOLOv4 for fast and accurate hand pose tracking in live settings. It lowers the entry barrier for real-time gesture-based applications in education, gaming, and accessibility tools.`
      }
    ],
    link: "https://github.com/BarryLi159159/PointsTrackingOnHands/blob/main/README.md"
  },
  // {
  //   title: "Facial Condition Monitoring",
  //   categories: ["Computer Vision", "Deep Learning"],
  //   image: faceImg,
  //   description: "Developed a computer vision system for recognizing facial acne using deep learning techniques.",
  //   link: "https://github.com/BarryLi159159/24678-facial-acne-detection"
  // },
  // {
  //   title: "Cat Feeder",
  //   categories: ["Mechatronics", "Robotics"],
  //   image: catFeederImg,
  //   description: "Designed an automated cat feeder capable of dispensing canned food for pets.",
  //   link: "https://github.com/BarryLi159159/catfeeder/blob/main/README.md"
  // },
  {
    title: "MQP - Autonomous Measurement and Straightening of Endoscopes",
    categories: ["Mechatronics", "Computer Vision"],
    image: endoscopeImg,
    sections: [
      {
        title: "Introduction",
        content: `Endoscopes are widely used medical tools that often develop bends during surgical procedures, which compromise imaging clarity and procedural precision. Traditionally, correcting these bends has been a manual, time-consuming, and subjective process. In collaboration with Henke Sass Wolf of America, our team aimed to develop a semi-automated system to measure and straighten rigid endoscopes more accurately and efficiently. This project addresses a critical need in medical equipment maintenance, potentially improving diagnostic quality and patient safety worldwide.`
      },
      {
        title: "Method",
        content: `Measurement Subsystem:
A camera-based system was developed using OpenCV and Python to detect the contours of the endoscope. A calibration process with checkerboard patterns enabled millimeter-level accuracy. Controlled lighting within a black box minimized visual noise and improved detection precision.

Runout Detection:
We developed an algorithm to calculate runout, defined as the deviation from the ideal straight line during rotation. This algorithm used contour extraction and coordinate deviation tracking to quantify bends.

Straightening Subsystem:
A cold-rolling device was designed, featuring dual lead screws, vertical and horizontal stepper motors (NEMA 17 & 23), and a custom roller assembly. Using calculated positions of maximum deflection, the system applied targeted forces to straighten endoscopes. A TB6600 driver was used to control motor movement via an Arduino Mega.

Integration:
The two subsystems were integrated through shared Python-Arduino communication. The system measured, calculated, applied corrections, and verified the results through a closed-loop process.`,
        images: [
          require("../sections/assets/endoscope_method.png"),
        ]
      },
      {
        title: "Results",
        content: `• Achieved measurement accuracy of 0.5 mm and straightening accuracy of 1.0 mm, meeting sponsor specifications.

• Reduced the endoscope straightening time from several minutes (manual) to under 1 minute (automated).

• Successfully straightened multiple types of endoscopes (1.9 mm – 10 mm diameter) with consistent results across trials.

• Verified runout reduction through before-and-after comparisons using overlaid contour visualization.`,
        images: [
          require("../sections/assets/endoscope_results.png"),
        ]
      },
      {
        title: "Discussion",
        content: `This project demonstrated the feasibility of automating a critical process in medical equipment repair. The modular design allows scalability, and the system can be adapted to a wide range of endoscope sizes. Future work includes integrating LiDAR for redundancy, improving roller force control, and transitioning to industrial-grade enclosures for real-world deployment. This work provides a path to safer and more efficient medical procedures by ensuring consistently straight and functional endoscopic tools.`
      }
    ],
    link: "https://digital.wpi.edu/concern/student_works/kk91fq771?locale=en"
  },
  // {
  //   title: "6-DOF Robotic Arm",
  //   categories: ["Robotics", "Mechatronics"],
  //   image: roboticArmImg,
  //   description: "Redesigned and controlled a robotic arm (BCN3D) for pick-and-place tasks.",
  //   link: "https://github.com/BarryLi159159/ARM/blob/main/README.md"
  // },
  // {
  //   title: "Self-Driving Tesla Control",
  //   categories: ["Classic Control"],
  //   image: null,
  //   description: "Developed control strategies for a Tesla Model 3 in Webots simulator using Python. Implemented PID, Pole Placement, LQR, A-star path planning, and EKF SLAM to achieve autonomous driving features.",
  //   link: "https://github.com/BarryLi159159/control"
  // },
  {
    title: "Self-Driving Tesla Control: Implementing EKF-SLAM in Webots Simulation",
    categories: ["Classic Control"],
    image: null,
    sections: [
      {
        title: "Introduction",
        content: `Autonomous vehicles rely on precise localization to navigate complex environments. However, real-world conditions often include GPS signal loss or sensor noise, especially in urban canyons or tunnels. This project focuses on developing an Extended Kalman Filter Simultaneous Localization and Mapping (EKF-SLAM) algorithm for a self-driving Tesla model in Webots simulation. The goal was to enable the vehicle to estimate its position and orientation using onboard sensor data, without access to global position directly, thereby mimicking real-world conditions and enhancing robustness in autonomous navigation systems.`
      },
      {
        title: "Method",
        content: `SLAM Formulation:
  We defined a full-state model that includes the vehicle's position [X,Y], orientation ψ, and the 2D coordinates of unknown map landmarks. The vehicle's dynamics and the noisy range/bearing observations to landmarks were modeled in discrete-time equations.
  
  EKF Implementation:
  The EKF algorithm was implemented from scratch in Python (no third-party packages), with hand-derived Jacobian matrices Ft and Ht. The vehicle's control inputs [x˙, y˙, ψ˙] and landmark observations were fused to simultaneously estimate both the vehicle's trajectory and the static map features.
  
  Simulation Platform:
  Webots was used to simulate a Tesla vehicle on a buggy track with realistic physics. The EKF-SLAM module was integrated with the controller pipeline to run in real time. The performance was evaluated based on trajectory completion, deviation from reference path, and runtime.`
      },
      {
        title: "Results",
        content: `Performance Metrics:
  - Time to complete track: 81.2 seconds
  - Average deviation: 0.75 m
  - Maximum deviation: 5.05 m
  
  The EKF-SLAM implementation provided accurate localization without any GPS input. The estimated vehicle path closely tracked the true trajectory, demonstrating robustness and real-time performance.
  
  Successfully completed the track within strict constraints (average deviation < 5m, max < 10m).`,
        images: [
          require("../sections/assets/tesla_result_trajectory.png"),
        ]
      },
      {
        title: "Discussion",
        content: `This project validated the effectiveness of EKF-SLAM in uncertain sensing environments and simulated real-world limitations in autonomous driving. The results showed that accurate localization is achievable through sensor fusion alone. Future work may involve scaling the SLAM to 3D, or testing under dynamically changing maps.`
      }
    ],
    link: "https://github.com/BarryLi159159/control"
  }
  
  
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);  // Default to first project

  return (
    <section id="projects" className="h-auto flex flex-col items-center justify-center text-gray-900 px-8 py-16 bg-white">
      <div className="max-w-6xl w-full">
        {/* Section Title */}
        <motion.h2 className="text-4xl font-bold text-gray-900 text-center mb-10" initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          Projects
        </motion.h2>

        {/* Main Layout: Project List + Detail View */}
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Left: Project list */}
          <div className="w-full md:w-1/4 space-y-4">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.03 }}
                onClick={() => setSelectedProject(project)}
                className={`flex items-center justify-between p-4 rounded-lg cursor-pointer transition ${
                  selectedProject.title === project.title ? "bg-blue-500 text-white" : "bg-gray-100 hover:bg-blue-100"
                }`}
              >
                <span>{project.title}</span>
                <span className="text-xl">{selectedProject.title === project.title ? "➔" : ""}</span>
              </motion.div>
            ))}
          </div>

          {/* Right: Project details */}
          <div className="w-full md:w-3/4 p-6 border-l-2 border-gray-200">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedProject.title}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
              >
                {selectedProject.video ? (
                  <video 
                    src={selectedProject.video} 
                    className="w-full h-64 rounded-lg object-cover mb-4"
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                  />
                ) : (
                  selectedProject.image && (
                    <img 
                      src={selectedProject.image} 
                      alt={selectedProject.title} 
                      className="w-full h-64 rounded-lg object-cover mb-4"
                    />
                  )
                )}

                <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
                
                {/* Display regular description or sections based on project type */}
                {selectedProject.sections ? (
                  <div className="space-y-6">
                    {selectedProject.sections.map((section, idx) => (
                      <div key={idx} className="mb-6">
                        <h4 className="text-xl font-semibold mb-2">{section.title}</h4>
                        <p className="text-gray-700 text-base whitespace-pre-line">{section.content}</p>
                        {section.images && section.images.map((img, imgIdx) => (
                          <img 
                            key={imgIdx}
                            src={img} 
                            alt={`${section.title} visualization`} 
                            className="w-full rounded-lg mt-4"
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-700 text-base mb-6">{selectedProject.description}</p>
                )}

                {selectedProject.iframe ? (
                  <iframe
                    src={selectedProject.link}
                    className="w-full h-screen border-0 rounded-lg mb-6"
                    title={selectedProject.title}
                  />
                ) : selectedProject.link && selectedProject.link !== "Publishing" ? (
                  <a 
                    href={selectedProject.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 underline text-sm"
                  >
                    View Project
                  </a>
                ) : null}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
