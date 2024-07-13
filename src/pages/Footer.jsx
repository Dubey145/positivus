import React from "react";
import { socials, whiteStar } from "../assets/icons";
import Button from "../components/Button";


const Footer = () => {
  return (
    <section className="max-container padding-x lg:mt-[140px] mt-[60px]">
      <div className="bg-custom-black rounded-t-3xl flex flex-col pt-[55px] pb-[50px] px-[60px] text-white">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row">
            <img src={whiteStar}></img>
            <h2 className="text-3xl ml-2">Positivus</h2>
          </div>
          <div className="flex flex-row gap-[40px] text-[18px] underline font-thin">
            <p>About Us</p>
            <p>Services</p>
            <p>Use Cases</p>
            <p>Pricing</p>
            <p>Blog</p>
          </div>
          <div>
            <img src={socials}></img>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center mt-[66px]">
          <div className="w-[332px] text-[18px]">
            <div className="mb-[27px]">
              <h4 className="bg-custom-green text-custom-black inline p-1 rounded-lg px-1">
                Contact Us:
              </h4>
            </div>
            <div className="flex flex-col gap-5">
              <p>Email: info@positivus.com</p>
              <p>Phone: 555-567-8901</p>
              <p>Address: 1234 Main St Moonstone City, Stardust State 12345</p>
            </div>
          </div>
          <div className="w-1/2 bg-dark-gray px-10 py-[58px] rounded-xl">
            <div className="flex flex-row gap-5">
              <input className = 'w-1/2 border-[1px] border-white bg-dark-gray rounded-lg pl-[20px]' placeholder="Email"></input>
              <div className = 'w-1/2 '>
              <Button
                label="Subscribe to news"
                background={"bg-custom-green"}
                textColor={"text-custom-black"}
                padding={"px-6 py-4"}
                width={"w-full"}
              ></Button>
              </div>
            </div>
          </div>
        </div>
        <div className = 'h-[1px] bg-white my-[50px]'></div>
        <div className = 'text-[18px] text-white flex flex-row'>
            <p>© 2023 Positivus. All Rights Reserved.</p>
            <p className = 'underline ml-8'>Privacy Policy</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
