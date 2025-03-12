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
    title: "Mechanical Engineer Intern",
    company: "Autovigle LLC",
    duration: "May 2021 - Aug 2021",
    description:
      "Designed and developed a vision-based vehicle license plate recognition system. Built and deployed a WeChat Mini Program for user interaction.",
    logo: "https://p3-passport.byteacctimg.com/img/user-avatar/ce427e5c3c1966b2da686e5d2cb21b9b~200x0.image",
  },
  {
    title: "Intern",
    company: "Grandview Capital",
    duration: "Jun 2019 - Jul 2019",
    description:
      "Performed market research and data analysis on the smart speaker industry, evaluating consumer trends and technological advancements.",
    logo: "https://media.licdn.com/dms/image/v2/D560BAQEfhLeYyaQI2g/company-logo_200_200/company-logo_200_200/0/1702602989216/statinggate_logo?e=1747267200&v=beta&t=AJBd78_8t5ckoL7ZMJgUR0UmKVM33bgPY0TU-B6-1oo",
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
