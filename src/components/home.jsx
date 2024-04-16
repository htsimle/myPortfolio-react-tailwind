import React, { useState } from "react";
import Person from "../images/FarhanAliPhoto.jpg";
import { VscArrowCircleRight, VscArrowCircleDown } from "react-icons/vsc";

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="h-screen w-full bg-gradient-to-b from-purple-950 to-cyan-800 ">
      <div className="pt-20 flex justify-center md:flex-row h-full">
        <div className="w-3/5 flex justify-center items-center">
          <img
            src={Person}
            className="w-40 h-40 rounded-full mr-4"
            alt="my-profile"
          />
          <div className="text-black">
            <h1 className="font-bold text-shadow-sm">
              Welcome to My Portfolio!
            </h1>
            <p>
              I'm Farhan Ali, a Software Engineer and Full Stack Developer with
              a knack for crafting innovative solutions. With a Bachelor's in
              Computer Science and a diverse skill set, I thrive on tackling
              complex challenges. Explore my portfolio to see how I turn ideas
              into reality.
            </p>
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-md flex items-center">next</button>
        </div>
        {/* <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-md flex items-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Portfolio{" "}
          {isHovered ? (
            <VscArrowCircleDown />
          ) : (
            <VscArrowCircleRight />
          )}
        </button> */}
      </div>
    </div>
  );
};

export default Home;
