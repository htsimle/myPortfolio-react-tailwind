import React, { useState } from "react";
import logo from "../images/icons8-user-100.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navItems = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "About",
      path: "/about",
    },
    {
      id: 3,
      name: "Projects",
      path: "/projects",
    },
    {
      id: 4,
      name: "Contact",
      path: "/contact",
    },
  ];

  const displayMenuItems = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="flex justify-between items-center w-full h-20 bg-gradient-to-r from-purple-950 to-cyan-800  fixed shadow-lg">
        <div>
          <img
            src={logo}
            alt="mylogo"
            className="h-70 h-auto hover:scale-100"
          />
        </div>
        <ul className="hidden md:flex">
          {navItems.map((item) => (
            <li
              key={item.id}
              className="px-4 text-2xl text-yellow-500 capitalize cursor-pointer hover:scale-105 hover:duration-100 hover:text-yellow-200"
            >
              {item.name}
            </li>
          ))}
        </ul>
        <div className="cursor-pointer pr-4 z-10 md:hidden" onClick={displayMenuItems}>
          {showMenu ? (
            <FaTimes className="size-6 mx-5" />
          ) : (
            <FaBars className="size-6 mx-5" />
          )}
        </div>
        {showMenu && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-purple-950 to-blue-500">
            {navItems.map((item) => (
                <li
                  key={item.id}
                  className="text-4xl py-4 text-yellow-500 capitalize cursor-pointer hover:scale-105 hover:duration-100 hover:text-yellow-200"
                >
                  {item.name}
                </li>
              ))}
          </ul>
        )}
      </div>
      {/* <div className="h-1 mt-20 w-full bg-black fixed shadow-lg rounded"></div> */}
    </>
  );
};

export default Navbar;
