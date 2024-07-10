import React, { useState } from "react";
import { minus, plus } from "../assets/icons";

const WorkingProcessCard = (props) => {
  const [active, setActive] = useState(false);
  const toggleCardState = () => {
    setActive(!active);
  };

  return (
    <div
      className={`flex flex-col lg:mt-8 mt-[20px] lg:px-[60px] lg:py-[41px] p-[30px] ${
        active ? "bg-custom-green" : "bg-custom-gray"
      }  rounded-3xl border-[1px] border-b-[6px] border-custom-black transition-colors duration-300`}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center font-semi-bold w-4/5">
          <h1 className="lg:text-6xl text-3xl">{props.index}</h1>
          <h2 className="lg:text-3xl ml-6 text-[18px] ">{props.title}</h2>
        </div>
        <div onClick={toggleCardState}>
          <img
            className="max-lg:h-[30px] max-lg:w-[30px]"
            src={active ? minus : plus}
            alt="icon"
          ></img>
        </div>
      </div>
      <div
        className={`transition-all duration-300 ${
          active ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="h-[1px] w-full bg-custom-black my-8" />
        <div>
          <p className="lg:text-[18px] text-base">{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default WorkingProcessCard;
