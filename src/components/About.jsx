import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AboutImg from "../assets/about_image.png";

export default function About() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const config = {
    line1:
      "I am a passionate developer with skills in React, Java, and SQL, specializing in creating dynamic and efficient web applications.",
    line2:
      "Alongside my development expertise, I have a keen interest in 3D modeling using Blender, blending creativity with technology to explore innovative solutions.",
    techStack: ["Java", "SQL", "React", "Tailwind CSS", "Blender", "Figma"],
  };

  return (
    <section
      id="about"
      className="flex flex-col sm:flex-row bg-blue-950 px-5 py-20 sm:py-32 items-center min-h-screen"
    >
      {/* Image Section */}
      <div
        className="w-full sm:w-1/2 flex justify-center mb-10 sm:mb-0"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <img
          className="h-60 w-60 sm:w-[500px] sm:h-[400px] object-cover transition-transform duration-500 hover:scale-110"
          src={AboutImg}
          alt="About Me"
        />
      </div>

      {/* Text Section */}
      <div className="w-full sm:w-1/2 text-center sm:text-left px-3 sm:px-0">
        <h1
          className="font-bold mb-5 text-3xl sm:text-4xl text-white border-b-4 border-blue-800 w-fit mx-auto sm:mx-0"
          data-aos="fade-left"
          data-aos-duration="1300"
        >
          About Me
        </h1>
        <p
          className="text-white text-lg sm:text-2xl mb-5"
          data-aos="fade-left"
          data-aos-duration="1600"
        >
          {config.line1}
        </p>
        <p
          className="text-white text-lg sm:text-2xl mb-5"
          data-aos="fade-left"
          data-aos-duration="1900"
        >
          {config.line2}
        </p>

        {/* Tech Stack Section */}
        <h2
          className="text-white text-xl sm:text-2xl font-semibold mt-5"
          data-aos="fade-left"
          data-aos-duration="2200"
        >
          Tech Stack:
        </h2>
        <ul className="flex flex-wrap gap-2 sm:gap-4 mt-3 justify-center sm:justify-start">
          {config.techStack.map((tech, index) => (
            <li
              key={index}
              className="px-3 sm:px-4 py-2 bg-blue-800 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all"
              data-aos="fade-left"
              data-aos-duration="1900"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
