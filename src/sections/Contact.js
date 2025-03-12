import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from "react-icons/fa";
import contactImage from "./assets/contact.jpg"; // Replace with your actual image

const Contact = () => (
  <section id="contact" className="h-auto flex flex-col items-center justify-center text-gray-900 px-8 py-16 bg-gray-100">
    <div className="max-w-lg w-full text-center">
      {/* Section Title */}
      <motion.h2
        className="text-3xl font-bold text-gray-900"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Contact
      </motion.h2>

      {/* Divider */}
      <div className="w-16 h-1 bg-blue-500 mt-4 mb-6 mx-auto"></div>

      {/* Contact Details */}
      <div className="space-y-4 text-lg">
        {/* Email */}
        <div className="flex items-center justify-center space-x-3">
          <FaEnvelope className="text-blue-500 text-xl" />
          <a href="mailto:BarryLi159@outlook.com" className="text-blue-600 hover:underline">
            chenhao6@andrew.cmu.edu
          </a>
        </div>

        {/* LinkedIn */}
        <div className="flex items-center justify-center space-x-3">
          <FaLinkedin className="text-blue-500 text-xl" />
          <a href="https://www.linkedin.com/in/chenhaoli0369/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            LinkedIn Profile
          </a>
        </div>

        {/* GitHub */}
        <div className="flex items-center justify-center space-x-3">
          <FaGithub className="text-gray-700 text-xl" />
          <a href="https://github.com/BarryLi159159" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            GitHub Repository
          </a>
        </div>

        {/* Location */}
        <div className="flex items-center justify-center space-x-3">
          <FaMapMarkerAlt className="text-red-500 text-xl" />
          <p className="text-blue-700">Pittsburgh, PA</p>
        </div>
      </div>

      {/* Optional Resume Download Button */}
      <motion.a
        href="/assets/CHENHAO LI .pdf" // Replace with actual resume link
        download
        className="mt-6 inline-block px-6 py-3 text-lg font-medium text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 transition"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Download Resume
      </motion.a>

      {/* Subtle Footer */}
      <div className="mt-12 text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Chenhao Li | All Rights Reserved.</p>
      </div>

      {/* Contact Image at the Bottom */}
      <motion.img
        src={contactImage}
        alt="Contact Illustration"
        className="mt-1000 w-800 md:w-160 lg:w-[50000px] object-contain opacity-900"
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 2, y: 120 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
    </div>
  </section>
);

export default Contact;
