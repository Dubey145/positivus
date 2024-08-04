import React from "react";
import Button from "../components/Button";
import HeroImage from "../components/HeroImage";

const Hero = () => {
  return (
    <section className="max-container padding-x w-full lg:mt-[70px] mt-[40px]">
      <div className="flex max-lg:flex-col-reverse flex-row justify-between items-center relative">
        <div className="flex flex-col lg:w-[43%] justify-between h-full  max-lg:items-center">
          <h1 className="text-6xl font-bold leading-normal max-lg:hidden">
            Navigating the digital landscape for success
          </h1>
          <p className="mt-4 lg:mt-9 font-light text-xl max-lg:text-base">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>
          <div className="mt-5 lg:mt-9 text-xl max-lg:w-full">
            <div className="lg:inline-flex hover-scale">
              <a href = "#contact">
              <Button
                label="Book a Consultation"
                background={"bg-custom-black fill-button"}
                textColor={"text-white hover:text-custom-black"}
                padding={"px-6 py-4"}
              ></Button>
              </a>
            </div>
          </div>
        </div>
        <HeroImage/>
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
