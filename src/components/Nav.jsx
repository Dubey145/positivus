import React, { useState } from "react";
import { starBlack, hamburger } from "../assets/icons";
import Button from "./Button";
import { navItems } from "../constants";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <nav className="w-full flex flex-row justify-between padding-x max-container pt-4">
      <div className="flex flex-row justify-center items-center">
        <img src={starBlack} alt="star image"></img>
        <h2 className="pl-2 font-bold text-3xl max-lg:text-2xl cursor-pointer">
          Positivus
        </h2>
      </div>
      <div className="flex max-lg:hidden">
        <ul className="flex flex-row text-xl font-light xl:gap-14 gap-8 justify-end w-full items-center max-lg:text-base">
          {navItems.map((item) => {
            return (
              <div key={item} className="selection px-2 rounded-lg">
                <li>
                  <a href={`#${item}`}>{item}</a>
                </li>
              </div>
            );
          })}
          <li>
            <div className="selection rounded-lg">
              <a href="#contact">
                <Button label="Request a Quote"></Button>
              </a>
            </div>
          </li>
        </ul>
      </div>
      {/* max-lg is lg or smaller */}
      <div
        className="hidden max-lg:flex justify-center items-center z-20"
        onClick={toggleMenu}
      >
        <img src={hamburger} alt="hamburger menu"></img>
      </div>
      <div
        onClick={toggleMenu}
        className={`fixed inset-0 bg-gray-800 bg-opacity-75 z-50  ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } ease-in-out duration-300`}
      >
        <div className="flex flex-col items-center justify-center h-full relative text-white">
          {navItems.map((item) => {
            return <a className = 'py-2' href={`#${item}`}>{item}</a>;
          })}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
