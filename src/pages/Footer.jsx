import React from "react";
import { socials, whiteStar } from "../assets/icons";
import Button from "../components/Button";


const Footer = () => {
  return (
    <section className="max-container padding-x lg:mt-[140px] mt-[60px]">
      <div className="bg-custom-black rounded-t-3xl flex flex-col pt-[50px] lg:pt-[55px] pb-[30px] lg:pb-[50px] px-[20px] lg:px-[60px] text-white">
        <div className="flex lg:flex-row flex-col justify-between items-center">
          <div className="flex flex-row">
            <img src={whiteStar}></img>
            <h2 className="text-3xl ml-2">Positivus</h2>
          </div>
          <div className="flex flex-col lg:flex-row gap-[15px] lg:gap-[40px] text-[16px] lg:text-[18px] lg:underline font-thin max-lg:my-[37px] text-center">
            <p>About Us</p>
            <p>Services</p>
            <p>Use Cases</p>
            <p>Pricing</p>
            <p className = "lg:block hidden">Blog</p>
          </div>
          <div className = 'lg:block hidden'>
            <img src={socials}></img>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between lg:items-center lg:mt-[66px]">
          <div className="max-lg:mb-[37px] max-lg:mx-[50px] lg:w-[332px] text-[16px] lg:text-[18px]">
            <div className="mb-[37px] lg:mb-[27px] max-lg:text-center">
              <h4 className="bg-custom-green text-custom-black inline p-1 rounded-lg px-1">
                Contact Us:
              </h4>
            </div>
            <div className="flex flex-col gap-5 max-lg:items-center max-lg:text-center">
              <p>Email: info@positivus.com</p>
              <p>Phone: 555-567-8901</p>
              <p>Address: 1234 Main St Moonstone City, Stardust State 12345</p>
            </div>
          </div>
          <div className="lg:w-1/2 bg-dark-gray p-[30px] lg:px-10 lg:py-[58px] rounded-xl">
            <div className="flex flex-col lg:flex-row gap-6">
              <input className = 'lg:w-1/2 border-[1px] border-white bg-dark-gray rounded-lg max-lg:p-[20px] pl-[20px]' placeholder="Email"></input>
              <div className = 'lg:w-1/2 '>
              <Button
                label="Subscribe to news"
                background={"bg-custom-green"}
                textColor={"text-custom-black"}
                padding={"px-6 lg:py-4 py-5"}
                width={"w-full"}
              ></Button>
              </div>
            </div>
          </div>
        </div>
        <div className = 'h-[1px] bg-white my-[50px]'></div>
        <div className = 'text-[18px] text-white flex lg:flex-row flex-col max-lg:text-center'>
            <p>© 2023 Positivus. All Rights Reserved.</p>
            <p className = 'underline ml-8 max-lg:mt-[15px]'>Privacy Policy</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
