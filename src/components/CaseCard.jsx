import React from "react";
import { greenArrow } from "../assets/icons";

const CaseCard = (props) => {
  return (
    <div className="bg-custom-black max-lg:h-[252px] max-lg:m-5 max-lg:rounded-3xl">
      <div className="flex flex-col justify-between items-start max-lg:py-[42px] max-lg:px-[50px] h-full">
        <p className = 'text-white'>{props.text}</p>
        <div className="flex flex-row w-3/5 items-center lg:mt-5">
          <p className="text-custom-green">Learn More</p>
          <img className = 'ml-2' src={greenArrow}></img>
        </div>
      </div>
    </div>
  );
};

export default CaseCard;
