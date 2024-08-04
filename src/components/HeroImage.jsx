import React from "react";
import {
  heart,
  location,
  megaphone,
  mobHeart,
  mobHeroBackground,
  mobLocation,
  mobMegaphone,
  mobPlay,
  mobShare,
  mobStarCross,
  mobStarPlus,
  play,
  ring,
  share,
  starCross,
  starPlus,
} from "../assets/icons";

const HeroImage = () => {
  return (
    <div className="max-lg:w-full max-lg:h-[310px] flex justify-center items-center">
      <div className=" lg:hidden relative">
        <img className="mt-10 animate-floating" src={mobHeroBackground}></img>
        <img
          className="absolute top-[10px] right-[70px] animate-rotate4"
          src={mobMegaphone}
        ></img>
        <img
          className="absolute top-[10px] right-[60px] animate-heart"
          src={mobHeart}
        ></img>
        <img
          className="absolute top-[30px] right-[5px] animate-share"
          src={mobShare}
        ></img>
        <img
          className="absolute top-[80px] right-[10px] animate-play"
          src={mobPlay}
        ></img>
        <img
          className="absolute top-[135px] right-[15px] animate-location"
          src={mobLocation}
        ></img>

        {/* stars */}
        <img
          className="absolute bottom-[30px] left-[140px] animate-spin-slow"
          src={mobStarCross}
        ></img>
        <img
          className="absolute bottom-[50px] left-[20px] animate-spin-slow"
          src={mobStarPlus}
        ></img>
      </div>
      <div className="max-lg:hidden">
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
        <div className="absolute p-5 bg-custom-black rounded-full right-[130px] top-[20px] animate-heart z-30 scale-50">
          <img className="" src={heart}></img>
        </div>

        <div className="absolute p-5 bg-custom-green rounded-full right-[50px] top-[70px] animate-share z-30">
          <img className="" src={share}></img>
        </div>

        <div className="absolute p-5 bg-custom-black rounded-full right-[60px] top-[155px] animate-play z-30">
          <img className="" src={play}></img>
        </div>

        <div className="absolute right-[100px] top-[240px]">
          <div className=" relative h-[75px] w-[75px] bg-custom-green rounded-full animate-location z-30">
            <img
              className="absolute left-[17.5px] top-[7px] scale-75"
              src={location}
            ></img>
          </div>
        </div>

        {/* rings */}
        <img
          className="absolute right-[120px] top-[190px] animate-floating"
          src={ring}
        ></img>
        <img
          className="absolute right-[100px] top-[160px] animate-floating"
          src={ring}
        ></img>
        <img
          className="absolute right-[80px] top-[130px] animate-floating"
          src={ring}
        ></img>
      </div>
    </div>
  );
};

export default HeroImage;
