import React from "react";
import { starBlack, hamburger } from "../assets/icons";
import Button from "./Button";
import { navItems } from "../constants";

const Nav = () => {
  return (
    <nav className="w-full flex flex-row justify-between padding-x max-container pt-4">
      <div className="flex flex-row justify-center items-center">
        <img src={starBlack} alt="star image"></img>
        <h2 className="pl-2 font-bold text-3xl max-lg:text-2xl">Positivus</h2>
      </div>
      <div className="flex max-lg:hidden">
        <ul className="flex flex-row text-xl font-light xl:gap-14 gap-8 justify-end w-full items-center max-lg:text-base">
          {
            navItems.map((item) =>{
              return <div key ={item} className = "selection px-2 rounded-lg">
                <li>{item}</li>
              </div>
            }) 
          }
          <li>
            <div className = "selection rounded-lg">
            <Button label="Request a Quote"></Button>
            </div>
          </li>
        </ul>
        
      </div>
      {/* max-lg is lg or smaller */}
      <div className = "hidden max-lg:flex justify-center items-center">
            <img src = {hamburger} alt = 'hamburger menu'></img>
          </div>
    </nav>
  );
};

export default Nav;
