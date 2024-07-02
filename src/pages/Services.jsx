import React from "react";
import { services } from "../constants";
import ServicesCard from "../components/ServicesCard";
import { proposal } from "../assets/images";
import Button from "../components/Button";
import SectionHeading from "../components/SectionHeading";

const Services = () => {
  return (
    <section className="max-container padding-x mt-12 mb-12">
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
            <div className="h-full flex flex-col  justify-center">
              <h3 className="lg:text-3xl text-[26px] font-bold">
                Let's make things happen
              </h3>
              <p className="my-[24px] lg:text-lg text-base">
                Contact us today to learn more about how our digital marketing
                services can help your business grow and succeed online.
              </p>
              <Button
                label="Get your free proposal"
                background={"bg-custom-black"}
                textColor={"text-white"}
                padding={"px-6 py-4"}
              ></Button>
            </div>
            <div className="absolute right-0 top-[-20px] lg:block hidden">
              <img src={proposal} alt="proposal image"></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
