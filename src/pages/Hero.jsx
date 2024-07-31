import React from "react";
import { hero } from "../assets/images/index";
import Button from "../components/Button";
import {
  heart,
  location,
  megaphone,
  play,
  ring,
  share,
  starCross,
  starPlus,
} from "../assets/icons";

const Hero = () => {
  return (
    <section className="max-container padding-x w-full lg:mt-[70px] mt-[40px]">
      <div className="flex max-lg:flex-col-reverse flex-row justify-between items-center relative">
        <div className="flex flex-col lg:w-[43%] justify-between h-full  max-lg:items-center">
          <h1 className="text-6xl font-bold leading-normal max-lg:hidden">
            Navigating the digital landscape for success
          </h1>
          <p className="mt-9 font-light text-xl max-lg:text-base">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>
          <div className="mt-9 text-xl max-lg:w-full">
            <div className="lg:inline-flex hover-scale">
              <Button
                label="Book a Consultation"
                background={"bg-custom-black fill-button"}
                textColor={"text-white hover:text-custom-black"}
                padding={"px-6 py-4"}
              ></Button>
            </div>
          </div>
        </div>
        {/* <div className = 'relative bg-lime-100 h-max lg:w-[57%]'> */}

        {/* circles */}
        <div className="absolute rounded-full w-[47px] h-[47px] right-[530px] top-[60px] bg-black animate-floating" />
        <div className="absolute rounded-full w-[31px] h-[31px] right-[490px] top-[120px] bg-custom-green z-10 animate-floating" />
        <div className="absolute rounded-full w-[20px] h-[20px] right-[200px] bottom-[50px] bg-custom-green z-10 animate-floating" />

        {/* megaphone and stars */}
        <img
          className="absolute right-[475px] bottom-[70px] animate-spin-slow"
          src={starPlus}
        ></img>
        <img
          className="absolute right-[160px] top-[30px] z-20 rotate-2 animate-rotate4"
          src={megaphone}
        ></img>
        <img
          className="absolute right-[320px] bottom-[30px] animate-spin-slow"
          src={starCross}
        ></img>

        {/* icons */}
        <div className="absolute p-5 bg-custom-black rounded-full right-[210px] top-[50px] animate-heart z-30">
          <img className="" src={heart}></img>
        </div>

        <div className="absolute p-5 bg-custom-green rounded-full right-[190px] top-[80px] animate-share z-30">
          <img className="" src={share}></img>
        </div>

        <div className="absolute p-5 bg-custom-black rounded-full right-[170px] top-[140px] animate-play z-30">
          <img className="" src={play}></img>
        </div>

        <div className = 'absolute right-[170px] top-[230px]'>
          <div className=" relative h-[75px] w-[75px] bg-custom-green rounded-full animate-location z-30">
            <img className="absolute left-[17.5px] top-[7px] scale-75" src={location}></img>
          </div>
        </div>

        {/* rings */}
        <img className="absolute right-[120px] top-[190px] animate-floating" src={ring}></img>
        <img className="absolute right-[100px] top-[160px] animate-floating" src={ring}></img>
        <img className="absolute right-[80px] top-[130px] animate-floating" src={ring}></img>

        {/* <img src = {ring}></img>  
          <img src = {ring}></img>   */}

        {/* <img src={hero}></img> */}
        {/* </div> */}
        <div>
          <h1 className="lg:hidden block text-[43px] font-bold leading-normal">
            Navigating the digital landscape for success
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
