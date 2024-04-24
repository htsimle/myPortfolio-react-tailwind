import React, { useState, useEffect } from "react";
import Person from "../images/FarhanAliPhoto.jpg";
import { VscArrowCircleRight, VscArrowCircleDown } from "react-icons/vsc";

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [headingWords, setHeadingWords] = useState([]);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const headingText = "Welcome to My Portfolio!";
    const words = headingText.split(" ");
    setHeadingWords(words);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setWordIndex((prevIndex) => prevIndex + 1);
    }, 500);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="h-screen w-full bg-gradient-to-b from-purple-950 to-cyan-300 ">
      <div className="flex items-center h-full">
        <div className="flex items-center justify-center flex-col md:flex-wrap w-full">
          <h1 className="sm:text-4xl font-bold text-shadow-sm text-amber-600 mb-4">
            {headingWords.slice(0, wordIndex).join(" ")}
          </h1>
          <div className="flex flex-col items-center justify-center md:flex-row w-1/2">
            <img
              src={Person}
              className="w-40 h-40 rounded-full mr-4"
              alt="my-profile"
            />
            <div className="text-white">
              <p className="box-border w-96">
                I'm Farhan Ali, a Software Engineer and Full Stack Developer with
                a knack for crafting innovative solutions. With a Bachelor's in
                Computer Science and a diverse skill set, I thrive on tackling
                complex challenges. Explore my portfolio to see how I turn ideas
                into reality.
              </p>
            </div>
          </div>
          <button
            className="bg-gradient-to-r from-blue-500 to-blue-400 hover:bg-blue-700 hover:scale-110 text-white mt-4 ml-2 font-bold py-2 px-4 rounded shadow-md flex items-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            See Portfolio{" "}
            {isHovered? (
              <VscArrowCircleDown />
            ) : (
              <VscArrowCircleRight />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;