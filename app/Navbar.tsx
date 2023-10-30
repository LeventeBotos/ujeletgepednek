"use client";
import React, { useEffect, useState } from "react";
import { FiAirplay, FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { LiaArrowLeftSolid, LiaSpotify } from "react-icons/lia";
import { BiArrowFromLeft, BiArrowFromRight } from "react-icons/bi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Navbar = () => {
  const [url, setUrl] = useState("");
  const [isOpen, setIsOpen] = useState(true);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     // Update the url state based on the scroll position
  //     if (window.scrollY < 4250) {
  //       setUrl("#linux");
  //     } else if (window.scrollY < 4500) {
  //       setUrl("#pihole");
  //     } else if (window.scrollY < 6500) {
  //       setUrl("#jellyfin");
  //     } else if (window.scrollY < 9000) {
  //       setUrl("#shairplay");
  //     } else {
  //       setUrl("#spocon");
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  return (
    <nav className="fixed top-0 right-0 h-full px-1 flex flex-col justify-evenly md:bg-white dark:md:bg-[#111111] gap-3 p-1 md:w-1/12 w-1/6 text-white">
      <div
        className={`${
          isOpen ? "opacity-100" : "opacity-0"
        } flex flex-col bgblur py-3 rounded-xl ease-in-out duration-500 justify-center md:gap-3 gap-0  px-1`}
      >
        <button
          onClick={() => {
            window.location.replace("#linux");
            setUrl("#linux");
            console.log(url);
          }}
          className={` self-center flex flex-row justify-center hover:opacity-100 ease-in-out bg-[#1f1f1f] w-14 p-2 rounded-full h-14 duration-300 items-center ${
            url.includes("#linux") ? "opacity-100" : "opacity-75"
          }`}
        >
          <img
            src="/ubuntulogo.png"
            alt="Ubuntu Logo"
            className="w-12 h-12 self-center object-contain"
          />
        </button>
        <div className="line md:scale-y-100 scale-y-50" />

        <button
          onClick={() => {
            window.location.replace("#pihole");
            setUrl("#pihole");
          }}
          className={` self-center flex flex-row justify-center hover:opacity-100 ease-in-out bg-[#1f1f1f] w-14 p-2 rounded-full h-14 duration-300 items-center ${
            url.includes("#pihole") ? "opacity-100" : "opacity-75"
          }`}
        >
          <img
            src="/Pi-holelogo.png"
            alt="Pi-hole Logo"
            className="w-12 h-12 self-center object-contain"
          />
        </button>
        <div className="line md:scale-y-100 scale-y-50" />

        <button
          onClick={() => {
            window.location.replace("#jellyfin");
            setUrl("#jellyfin");
          }}
          className={` self-center flex flex-row justify-center hover:opacity-100 ease-in-out  bg-[#1f1f1f] w-14 p-2 rounded-full h-14 duration-300 items-center ${
            url.includes("#jellyfin") ? "opacity-100" : "opacity-75"
          }`}
        >
          <img
            src="/jellyfin.png"
            alt="Jellyfin Logo"
            className="w-12 h-12 self-center object-contain"
          />
        </button>
        <div className="line md:scale-y-100 scale-y-50" />

        <button
          onClick={() => {
            window.location.replace("#shairplay");
            setUrl("#shairplay");
          }}
          className={` self-center text-5xl flex flex-row justify-center hover:opacity-100 ease-in-out duration-300  bg-[#1f1f1f] w-14 p-2 rounded-full h-14  items-center ${
            url.includes("#shairplay") ? "opacity-100" : "opacity-75"
          }`}
        >
          <FiAirplay />
        </button>
        <div className="line md:scale-y-100 scale-y-50" />

        <button
          onClick={() => {
            window.location.replace("#spocon");
            setUrl("#spocon");
          }}
          className={` self-center text-5xl flex flex-row justify-center hover:opacity-100 ease-in-out duration-300  bg-[#1f1f1f] w-14 p-2 rounded-full h-14  items-center ${
            url.includes("#spocon") ? "opacity-100" : "opacity-75"
          }`}
        >
          <LiaSpotify />
        </button>
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`  ${
          isOpen ? " rotate-90 " : "translate-x-4 "
        } ease-in-out md:hidden duration-500 w-12 h-12 text-5xl bottom-20 self-center`}
      >
        {/* {isOpen ? <IoIosArrowForward /> : <IoIosArrowBack />} */}
        <IoIosArrowBack />
        {/* close */}
      </button>
    </nav>
  );
};

export default Navbar;
