import React from "react";

const ServicesCard = (props) => {
  return (
    <div
      className={`w-full h-[320px] lg:w-[600px] lg:h-[310] rounded-3xl ${props.cardBackground} p-12 border-[1px] border-b-[6px] border-custom-black hover-scale`}
    >
      <div className="w-full h-full flex lg:flex-row flex-col justify-between">
        <div className="h-full flex flex-col justify-between">
          <div>
            <div className="flex">
              <h3
                className={`${props.textBackground} lg:text-3xl text-2xl rounded-sm`}
              >
                {props.titleL1}
              </h3>
            </div>
            <div className="flex">
              <h3
                className={`${props.textBackground} lg:text-3xl text-2xl rounded-sm px-1`}
              >
                {props.titleL2}
              </h3>
            </div>
          </div>
          <div className="flex lg:items-center items-end max-lg:justify-between">
            <img className="inline" src={props.arrow}></img>
            <p
              className={`inline pl-4 ${
                props.cardBackground == "bg-custom-black"
                  ? "text-white"
                  : "text-black"
              } lg:block hidden`}
            >
              Know More
            </p>
            <img className ='lg:hidden block' src={props.image} alt={props.title} width = {props.titleL1=='Social Media'?150:165}></img>
          </div>
        </div>
        <div className="lg:flex items-center hidden">
          <img src={props.image} alt={props.title}></img>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
