import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import web1 from "../assets/Apple.png";
import web2 from "../assets/image.jpg";
import web3 from "../assets/third.webp";

export default function Projects() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  const projects = [
    {
      image: web1,
      title: "Apple Website Replicate",
      link: "https://apple-website-sigma-six.vercel.app/",
      description:
        "Recreated the Apple website with a sleek, modern UI/UX, ensuring smooth animations and high performance. Integrated reusable components, dynamic routing, and efficient state management for scalability. Designed with full mobile responsiveness and cross-browser compatibility for a seamless user experience.",
    },
    {
      image: web2,
      title: "Travel-Tro",
      link: "https://travel-tro.vercel.app/",
      description:
        "Designed a real-time and static bus route information system for Madurai commuters. Created a user-friendly interface for quick access to routes, timings, and stops. Optimized for smooth performance across all devices, enhancing daily travel convenience.",
    },
    {
      image: web3,
      title: "AI-QADS",
      link: "https://www.youtube.com/",
      description:
        "Built an intelligent system that extracts key insights, summarizes documents, and answers queries with precision. Leveraged efficient text processing algorithms for accuracy and speed. Optimized for multiple document formats, ensuring versatility and usability.",
    },
  ];

  const tech = ["React", "Tailwind CSS", "JavaScript"];

  return (
    <section
      id="projects"
      className="flex flex-col sm:h-[900px] px-5 sm:px-28 py-20 bg-blue-800 text-white"
    >
      {/* Section Heading */}
      <div className="w-full text-center sm:text-left mb-10" data-aos="fade-up">
        <h1 className="font-bold mb-5 text-3xl sm:text-4xl text-white border-b-4 border-blue-950 w-fit mx-auto sm:mx-0">
          Projects
        </h1>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <div key={index} className="w-full">
            <div
              className="relative group overflow-hidden rounded-lg"
              data-aos="zoom-in"
            >
              <img
                className="w-full h-72 sm:h-[350px] object-cover rounded-lg transition-transform duration-500 group-hover:scale-110"
                src={project.image}
                alt={project.title}
              />
              <div className="absolute inset-0 bg-blue-950 bg-opacity-80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-4 text-center">
                <p className="sm:text-lg text-sm font-bold">{project.title}</p>
                <p className="sm:text-sm text-sm sm:mt-2">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 px-5 py-2 border-2 border-white rounded bg-blue-800 hover:bg-white hover:text-blue-800 transition"
                >
                  View Project
                </a>
                <div className="flex flex-wrap justify-center gap-2 sm:mt-5">
                  {tech.map((item, i) => (
                    <h4
                      key={i}
                      className="text-xs bg-gray-700 px-2 py-1 rounded text-white"
                    >
                      {item}
                    </h4>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
