import React from "react";

const Button = (props) => {
  return (
    <div>
      <button
        className={`${props.background} ${props.textColor} ${
          props.padding ? props.padding : "px-6 py-4"
        } flex justify-center items-center rounded-lg border-[1px] border-custom-black max-lg:w-full `}
      >
        {props.label}
      </button>
    </div>
  );
};

export default Button;
