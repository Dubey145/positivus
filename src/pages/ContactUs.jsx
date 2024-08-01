import React from "react";
import SectionHeading from "../components/SectionHeading";
import Button from "../components/Button";
import { contact } from "../assets/images";
import { largeBlackStar, largeGreenStar, spikeCircle } from "../assets/icons";

const ContactUs = () => {
  return (
    <section className="max-container padding-x lg:mt-[140px] mt-[60px]">
      <SectionHeading
        title="Contact Us"
        text="Let's Discuss Your Digital Marketing Needs"
      ></SectionHeading>
      <div className="bg-custom-gray px-[30px] py-10 lg:p-20 lg:mt-[90px] mt-[50px] rounded-3xl relative overflow-hidden">
        <div className="lg:w-1/2 flex flex-col gap-[25px]">
          <div>
            <p className="ml-1 text-base">Name</p>
            <input
              className="mt-1 w-full px-[30px] py-[18px] border-[1px] border-custom-black rounded-xl"
              placeholder="Name"
            ></input>
          </div>

          <div>
            <p className="ml-1 text-base">Email</p>
            <input
              className="mt-1 w-full px-[30px] py-[18px] border-[1px] border-custom-black rounded-xl"
              placeholder="Email"
            ></input>
          </div>

          <div>
            <p className="ml-1 text-base">Message</p>
            <input
              className="mt-1 w-full px-[30px] py-[18px] border-[1px] border-custom-black rounded-xl h-[190px] "
              placeholder="Message"
            ></input>
          </div>
          <div className="mt-10 lg:block hidden hover-scale">
            <Button
              label="Send Message"
              background={"bg-custom-black fill-button"}
              textColor={"text-white hover:text-custom-black"}
              padding={"px-6 py-4"}
              width={"w-full"}
            ></Button>
          </div>
        </div>
        <img className = 'absolute  top-10 right-[-325px] animate-spin-slow' src = {spikeCircle}></img>
        <img className = 'absolute z-10 bottom-[175px] right-[275px] animate-spin-slow' src = {largeGreenStar}></img>
        <img className = 'absolute z-10 bottom-[300px] right-[70px] animate-spin-slow' src = {largeBlackStar}></img>


        {/* <img className="absolute top-10 right-[-325px] max-lg:hidden" src={contact}></img> */}
      </div>
      <div className="mt-6 max-lg:block hidden">
            <Button
              label="Send Message"
              background={"bg-custom-black"}
              textColor={"text-white"}
              padding={"px-6 py-4"}
              width={"w-full"}
            ></Button>
          </div>
    </section>
  );
};

export default ContactUs;
