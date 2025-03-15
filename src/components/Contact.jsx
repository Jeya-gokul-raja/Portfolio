import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Fig from "../assets/figma1.png";

function Contact() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  const config = {
    email: "jeyagokulraja@gmail.com",
    phone: "+91-9345619287",
  };

  const config1 = {
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
      {
        link: "https://www.linkedin.com/in/jeya-gokul-raja-j-20309428b",
        icon: (
          <svg
            className="size-12 hover:fill-white transition-transform -mt-1 transform hover:scale-125 duration-300"
            fill="#000000"
            height="200px"
            width="200px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 310 310"
            xml:space="preserve"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g id="XMLID_801_">
                {" "}
                <path
                  id="XMLID_802_"
                  d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73 C77.16,101.969,74.922,99.73,72.16,99.73z"
                ></path>{" "}
                <path
                  id="XMLID_803_"
                  d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4 c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"
                ></path>{" "}
                <path
                  id="XMLID_804_"
                  d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599 c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319 c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995 C310,145.43,300.549,94.761,230.454,94.761z"
                ></path>{" "}
              </g>{" "}
            </g>
          </svg>
        ),
      },
      {
        link: "https://github.com/Jeya-gokul-raja/",
        icon: (
          <svg
            className="size-14 hover:fill-white transition-transform transform -mt-1 hover:scale-125 duration-300"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 32 32"
          >
            <path
              fill-rule="evenodd"
              d="M 16 4 C 9.371094 4 4 9.371094 4 16 C 4 21.300781 7.4375 25.800781 12.207031 27.386719 C 12.808594 27.496094 13.027344 27.128906 13.027344 26.808594 C 13.027344 26.523438 13.015625 25.769531 13.011719 24.769531 C 9.671875 25.492188 8.96875 23.160156 8.96875 23.160156 C 8.421875 21.773438 7.636719 21.402344 7.636719 21.402344 C 6.546875 20.660156 7.71875 20.675781 7.71875 20.675781 C 8.921875 20.761719 9.554688 21.910156 9.554688 21.910156 C 10.625 23.746094 12.363281 23.214844 13.046875 22.910156 C 13.15625 22.132813 13.46875 21.605469 13.808594 21.304688 C 11.144531 21.003906 8.34375 19.972656 8.34375 15.375 C 8.34375 14.0625 8.8125 12.992188 9.578125 12.152344 C 9.457031 11.851563 9.042969 10.628906 9.695313 8.976563 C 9.695313 8.976563 10.703125 8.65625 12.996094 10.207031 C 13.953125 9.941406 14.980469 9.808594 16 9.804688 C 17.019531 9.808594 18.046875 9.941406 19.003906 10.207031 C 21.296875 8.65625 22.300781 8.976563 22.300781 8.976563 C 22.957031 10.628906 22.546875 11.851563 22.421875 12.152344 C 23.191406 12.992188 23.652344 14.0625 23.652344 15.375 C 23.652344 19.984375 20.847656 20.996094 18.175781 21.296875 C 18.605469 21.664063 18.988281 22.398438 18.988281 23.515625 C 18.988281 25.121094 18.976563 26.414063 18.976563 26.808594 C 18.976563 27.128906 19.191406 27.503906 19.800781 27.386719 C 24.566406 25.796875 28 21.300781 28 16 C 28 9.371094 22.628906 4 16 4 Z"
            ></path>
          </svg>
        ),
      },
      {
        link: "",
        icon: (
          <svg
            className="z-30 absolute size-14 hover:fill-white transition-transform transform -mt-1 hover:scale-125 duration-300"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g clip-path="url(#clip0)">
                {" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.41491 0C5.96837 0 4 2.05277 4 4.56757C4 6.09676 4.72765 7.45467 5.84715 8.28379C4.72765 9.1129 4 10.4708 4 12C4 13.5292 4.72765 14.8871 5.84715 15.7162C4.72765 16.5453 4 17.9032 4 19.4324C4 21.9472 5.96837 24 8.41491 24C10.8614 24 12.8298 21.9472 12.8298 19.4324V15.5691C13.5836 16.1932 14.5427 16.5676 15.5853 16.5676C18.0318 16.5676 20.0002 14.5148 20.0002 12C20.0002 10.4708 19.2726 9.1129 18.1531 8.28379C19.2726 7.45467 20.0002 6.09676 20.0002 4.56757C20.0002 2.05277 18.0318 0 15.5853 0H8.41491ZM5.65943 4.56757C5.65943 2.97669 6.90053 1.7027 8.41491 1.7027H11.1704V7.43243H8.41491C6.90053 7.43243 5.65943 6.15845 5.65943 4.56757ZM15.5853 7.43243H12.8298V1.7027H15.5853C17.0997 1.7027 18.3408 2.97669 18.3408 4.56757C18.3408 6.15845 17.0997 7.43243 15.5853 7.43243ZM5.65943 12C5.65943 10.4091 6.90053 9.13514 8.41491 9.13514H11.1704V14.8649H8.41491C6.90053 14.8649 5.65943 13.5909 5.65943 12ZM12.8298 12C12.8298 10.4091 14.0709 9.13514 15.5853 9.13514C17.0997 9.13514 18.3408 10.4091 18.3408 12C18.3408 13.5909 17.0997 14.8649 15.5853 14.8649C14.0709 14.8649 12.8298 13.5909 12.8298 12ZM5.65943 19.4324C5.65943 17.8416 6.90053 16.5676 8.41491 16.5676H11.1704V19.4324C11.1704 21.0233 9.92929 22.2973 8.41491 22.2973C6.90053 22.2973 5.65943 21.0233 5.65943 19.4324Z"
                  fill="#000000"
                ></path>{" "}
              </g>{" "}
              <defs>
                {" "}
                <clipPath id="clip0">
                  {" "}
                  <rect width="24" height="24" fill="white"></rect>{" "}
                </clipPath>{" "}
              </defs>{" "}
            </g>
          </svg>
        ),
      },
    ],
  };

  return (
    <section
      id="contact"
      className="flex item-center sm:h-[700px] flex-col text-white bg-blue-950 px-5 py-32"
    >
      <div className="flex items-center flex-col" data-aos="fade-up">
        <h1 className="font-bold mb-5 w-[140px] text-4xl text-white border-b-4 border-blue-950">
          Contact
        </h1>
        <p className="pb-5 text-lg" data-aos="fade-up" data-aos-delay="100">
          If you want to discuss more in detail, please contact me.
        </p>
        <p className="py-2 text-lg" data-aos="fade-up" data-aos-delay="300">
          <span className="font-bold">Email: </span>
          <a
            href={`mailto:${config.email}`}
            className="hover:underline hover:text-yellow-300 transition-all duration-300"
          >
            {config.email}
          </a>
        </p>
        <p className="py-2 text-lg" data-aos="fade-up" data-aos-delay="500">
          <span className="font-bold">Phone no: </span>
          <a
            href={`tel:${config.phone}`}
            className="hover:underline hover:text-yellow-300 transition-all duration-300"
          >
            {config.phone}
          </a>
        </p>
        <div
          className="flex py-10 gap-4"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {config1.social.map((social, index) => (
            <a key={index} href={social.link} className="pr-5">
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
