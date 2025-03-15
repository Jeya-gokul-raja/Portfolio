import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroImg from "../assets/person.png";

function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      delay: 300,
      once: false,
      easing: "ease-in-out",
      mirror: true,
      offset: 300,
    });
  }, []);

  const config = {
    subtitle: "I'm a full stack developer",
    social: [
      {
        link: "/",
        icon: (
          <svg
            className="size-12 hover:fill-white transition-transform transform hover:scale-125 duration-300"
            fill="#000000"
            viewBox="0 0 33.88 33.88"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M30.414,10.031c0.014,0.297,0.021,0.595,0.021,0.897c0,9.187-6.992,19.779-19.779,19.779c-3.928,0-7.58-1.149-10.657-3.123 c0.546,0.063,1.099,0.095,1.658,0.095c3.26,0,6.254-1.107,8.632-2.974c-3.039-0.058-5.607-2.065-6.491-4.828 c0.424,0.082,0.858,0.125,1.308,0.125c0.635,0,1.248-0.084,1.83-0.244c-3.177-0.639-5.576-3.448-5.576-6.815 c0-0.029,0-0.058,0-0.087c0.939,0.521,2.01,0.833,3.15,0.869C2.646,12.48,1.419,10.35,1.419,7.938c0-1.274,0.343-2.467,0.94-3.495 c3.427,4.206,8.552,6.973,14.327,7.263c-0.117-0.509-0.18-1.038-0.18-1.584c0-3.838,3.112-6.949,6.953-6.949 c1.998,0,3.805,0.844,5.07,2.192c1.582-0.311,3.072-0.89,4.416-1.686c-0.521,1.624-1.621,2.986-3.057,3.844 c1.406-0.166,2.746-0.54,3.991-1.092C32.949,7.826,31.771,9.05,30.414,10.031z"></path>
          </svg>
        ),
      },
    ],
  };

  return (
    <section
      id="hero"
      className="flex flex-col sm:h-[800px] h-[650px] w-full sm:w-full sm:flex-row justify-center  bg-gradient-to-t bg-blue-800 items-center"
    >
      <div
        className="sm:w-full flex flex-col p-8 rounded-lg sm:ml-28 -mt-10  sm:text-left"
        data-aos="fade-right"
      >
        <h1 className="text-white text-2xl sm:mt-8 sm:text-4xl font-hero-font">
          Hi, <br />
          <span className="font-normal bg-clip-text">
            I'm J Jeya Gokul Raja
          </span>
          <p className="text-2xl mt-2 font-normal" data-aos="fade-up">
            {config.subtitle}
          </p>
        </h1>

        {/* Resume Section */}
        <div
          className="flex flex-col items-center sm:items-start gap-4 mt-6"
          data-aos="fade-up"
        >
          <h4 className="font-bold text-2xl text-white border-b-4 border-blue-950 ">
            Resume
          </h4>
          <a
            href="/Jeya_Gokul_Raja(Resume).pdf"
            className="px-5 py-2 border-2 border-white rounded text-white bg-blue-800 hover:scale-90 hover:bg-white hover:text-blue-800 transition-all"
            download="Gokul_Resume.pdf"
          >
            Download
          </a>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex justify-center sm:mr-36" data-aos="fade-left">
        <img
          className="w-60 sm:w-[1000px] sm:hover:scale-125 rounded-lg duration-500"
          src={HeroImg}
          alt="Hero"
          data-aos-delay="500"
          data-aos-duration="1000"
        />
      </div>
    </section>
  );
}

export default Hero;
