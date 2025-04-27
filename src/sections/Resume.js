import React from "react";
// import { Link as RouterLink } from "react-router-dom";
// import { Link } from "react-scroll";

const Resume = () => (
  <section id="resume" className="min-h-screen flex flex-col items-center justify-center bg-white px-8 py-16">
    <h2 className="text-4xl font-bold mb-8">Resume</h2>
    <div className="max-w-4xl w-full bg-gray-100 p-8 rounded-lg shadow flex flex-col items-center">
      <iframe
        src="/resume.pdf"
        title="Resume PDF"
        className="w-full"
        style={{ minHeight: "80vh" }}
      />
    </div>
  </section>
);

export default Resume;
