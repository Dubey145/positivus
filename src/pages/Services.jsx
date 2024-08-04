import React from "react";
import { services } from "../constants";
import ServicesCard from "../components/ServicesCard";
import Button from "../components/Button";
import SectionHeading from "../components/SectionHeading";
import { grayStar, greenStarPlus, spikeStar, straightRing } from "../assets/icons";

const Services = () => {
  return (
    <section id = 'Services' className="max-container padding-x lg:mt-[140px] mt-[60px]">
      <div>
        <SectionHeading
          title="Services"
          text="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
        ></SectionHeading>
        <div className="mt-10 flex flex-wrap items-center gap-10">
          {services.map((service) => {
            return <ServicesCard {...service}></ServicesCard>;
          })}
        </div>
        <div className="bg-custom-gray h-[350px] w-full lg:mt-24 mt-16 relative lg:px-[60px] p-[50px] rounded-3xl">
          <div className=" w-full lg:w-1/2 h-full">
            <div className="h-full flex flex-col justify-center">
              <h3 className="lg:text-3xl text-[26px] font-bold">
                Let's make things happen
              </h3>
              <p className="my-[24px] lg:text-lg text-base">
                Contact us today to learn more about how our digital marketing
                services can help your business grow and succeed online.
              </p>
              {/* <div className = ''> */}
              <a href = "#contact">
              <Button
                label="Get your free proposal"
                background={"bg-custom-black fill-button"}
                textColor={"text-white hover:text-custom-black"}
                padding={"px-6 py-4"}
                misc = {'hover-scale'}
              ></Button>
              {/* </div> */}
              </a>
            </div>
            <div className="lg:w-[494px] lg:h-[394px] absolute right-0 top-[-20px] lg:block hidden">
              <div className="relative inline top-[120px] left-[90px] z-10">
                <div className="relative w-[125px] h-[125px] ellipse bg-black animate-floating">
                  <div className="absolute top-[30px] left-[73px] w-[20px] h-[40px] ellipse bg-white"></div>
                  <div className="absolute top-[30px] left-[33px] w-[20px] h-[40px] ellipse bg-white"></div>
                </div>
              </div>
                <img className = 'absolute left-0 bottom-[170px] animate-floating' src = {straightRing}></img>
                <img className = 'absolute left-0 bottom-[145px] animate-floating' src = {straightRing}></img>
                <img className = 'absolute left-0 bottom-[120px] animate-floating' src = {straightRing}></img>
                <img className = 'absolute top-0 right-[150px] animate-spin-slow' src = {spikeStar}></img>
                <img className = 'absolute bottom-[60px] right-[130px] animate-spin-slow' src = {grayStar}></img>
                <img className = 'absolute bottom-0 left-[60px] animate-spin-slow' src = {greenStarPlus}></img>



              {/* <img src={proposal} alt="proposal image"></img> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

