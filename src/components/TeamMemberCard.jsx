import React from "react";
import { linkedin } from "../assets/icons";

const TeamMemberCard = (props) => {
  return (
    <div className="w-[387px] border-[1px] border-b-[6px] border-custom-black rounded-3xl p-10 flex flex-col hover-scale">
      <div className="flex flex-row items-end relative">
        <img src={props.image} alt={"dp"}></img>
        <div className="ml-5">
          <h4 className="font-semibold text-xl">{props.name}</h4>
          <p className="text-base">{props.title}</p>
        </div>
        <img className = 'absolute top-0 right-0' src = {linkedin} alt = {"social"}></img>
      </div>
      <div className="h-[1px] my-[28px] bg-custom-black"></div>
      <div>
        <p className="text-base">{props.about}</p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
