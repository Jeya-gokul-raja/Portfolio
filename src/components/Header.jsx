import React from "react";
import { useState } from "react";

function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className="flex justify-between px-5 py-2 w-full bg-blue-950 sm:z-30  sm:fixed ">
      <a
        href=""
        className="font-bold text-white text-2xl "
        data-aos="fade-down"
        data-aos-duration="400"
      >
        JGR
      </a>
      <nav className="hidden md:block ">
        <ul className="flex text-white">
          <li className="" data-aos="fade-down" data-aos-duration="700">
            <a href="/" className="p-3">
              Home
            </a>
          </li>
          <li data-aos="fade-down" data-aos-duration="1000">
            <a href="#about " className="p-3">
              About
            </a>
          </li>
          <li data-aos="fade-down" data-aos-duration="1300">
            <a href="#projects" className="p-3">
              Projects
            </a>
          </li>

          <li data-aos="fade-down" data-aos-duration="1900">
            <a href="#contact" className="p-3">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      {toggleMenu && (
        <nav className="block sm:hidden ">
          <ul
            onClick={() => setToggleMenu(!toggleMenu)}
            className="flex flex-col items-center fixed top-10 left-0 bg-white w-full h-1/4"
          >
            <li className="p-2  w-full text-center">
              <a href="/">Home</a>
            </li>
            <li className="p-2   w-full text-center">
              <a href="#about">About</a>
            </li>
            <li className="p-2  w-full text-center">
              <a href="#projects">Projects</a>
            </li>

            <li className="p-2 ">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      )}
      <button
        onClick={() => setToggleMenu(!toggleMenu)}
        className="text-white block sm:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
    </header>
  );
}
export default Header;
