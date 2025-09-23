import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Researcher - AI Safety Lab",
    company: "Carnegie Mellon University",
    duration: "Dec 2024 - Present",
    description:
      "Conducting research on reinforcement learning and imitation learning for autonomous robots.",
    logo: "https://m.media-amazon.com/images/I/61FfobmZ6ML._AC_SL1000_.jpg",
  },
  {
    title: "Associate Engineer Intern - Robotic Software Engineer",
    company: "Unitree Robotics",
    duration: "Jul 2025 - Aug 2025",
    description:
      "Worked on trainning whole body control policies for a huamnoid g1 robot with imitation learning and reinforcement learning.  ",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYZu94DgFFnlkQ95kRfC4xLBaB7w3Wa1LEqw&s",
  },
  {
    title: "Robotic Engineer Intern",
    company: "SafeWorld",
    duration: "May 2025 - Jun 2025",
    description:
      "Worked on robotic safty testing solutions.  ",
    logo: "https://www.google.com/imgres?q=cheguangjiao%20logo%20png&imgurl=http%3A%2F%2Fzhuanyehuanyou.com%2Fpublic%2Fstorage%2Ftopic%2F20240130%2F147272f83658c15f0a69486023d8f290.png&imgrefurl=http%3A%2F%2Fzhuanyehuanyou.com%2F&docid=_rKXDWCHbo1mtM&tbnid=01E3d_ZX5x_0bM&vet=12ahUKEwialPb6soOMAxX-wvACHUuDOk0QM3oECAwQAA..i&w=820&h=820&hcb=2&ved=2ahUKEwialPb6soOMAxX-wvACHUuDOk0QM3oECAwQAA",
  },
  {
    title: "Automation Engineer Intern",
    company: "Cheguangjiao New Energy",
    duration: "May 2024 - Aug 2024",
    description:
      "Worked on robotic automation solutions for recycling applications, focusing on mechanical design, motion control, and system optimization. ",
    logo: "https://cheguangjiao.com/public/storage/topic/20240130/147272f83658c15f0a69486023d8f290.png",
  },
  {
    title: "Researcher - Surface Metrology Lab",
    company: "Worcester Polytechnic Institute",
    duration: "Jan 2023 - May 2024",
    description:
      "Explored advanced measurement techniques for material characterization and precision engineering.",
    logo: "https://mms.businesswire.com/media/20241114654299/en/2305476/23/WPI%2BSquare%2BLogo.jpg",
  },
  {
    title: "Peer Learning Assistant - Fluid",
    company: "Worcester Polytechnic Institute",
    duration: "May 2022 - May 2023",
    description:
      "Optimized fluid dynamics experiments and improved lab material procurement efficiency & quality.",
    logo: "https://mms.businesswire.com/media/20241114654299/en/2305476/23/WPI%2BSquare%2BLogo.jpg",
  },

  {
    title: "Intern",
    company: "Grandview Capital",
    duration: "Jun 2019 - Jul 2019",
    description:
      "Performed market research and data analysis on the smart speaker industry, evaluating consumer trends and technological advancements.",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8-eGlghVQ1ZRUDPAVhFF-De69prETAjy7Ww&s",
  },
];

const Experience = () => (
  <section id="experience" className="h-auto flex flex-col items-center justify-center text-gray-900 px-8 py-16 bg-gray-100">
    <div className="max-w-5xl w-full">
      {/* Section Title */}
      <motion.h2
        className="text-4xl font-bold text-gray-900 text-center mb-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Experience
      </motion.h2>

      {/* Timeline Layout */}
      <div className="relative ml-12 space-y-16">
        {/* Vertical Timeline Bar */}
        <div className="absolute left-5 top-0 h-full w-1 bg-blue-500 rounded-lg"></div>

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="relative flex items-start pl-14"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {/* Timeline Dot */}
            <div className="absolute -left-6 top-6 w-6 h-6 bg-blue-500 border-4 border-white rounded-full shadow-md"></div>

            {/* Experience Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg w-full flex flex-col md:flex-row items-center md:items-start md:space-x-6">
              {/* Company Logo */}
              <img
                src={exp.logo}
                alt={`${exp.company} Logo`}
                className="w-16 h-16 rounded-md object-contain"
              />

              {/* Experience Details */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900">{exp.title}</h3>
                <p className="text-gray-600 font-medium">{exp.company}</p>
                <p className="text-gray-500 text-sm">{exp.duration}</p>
                <p className="text-gray-700 text-sm mt-4">{exp.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
