import React from "react";
import { services } from "../constants";
import ServicesCard from "../components/ServicesCard";

const Services = () => {
  return (
    <section className="max-container padding-x mt-12 mb-12">
      <div>
        <div className="flex w-full max-lg:flex-col max-lg:items-center max-lg:justify-center">
          <div>
            <h2 className="bg-custom-green px-2 py-1 rounded-md font-bold text-3xl">Services</h2>
          </div>
          <div className="lg:ml-[180px] lg:w-2/5 max-lg:mt-8">
            <p>
              At our digital marketing agency, we offer a range of services to
              help businesses grow and succeed online. These services include:
            </p>
          </div>
        </div>
        <div className = 'mt-10 flex flex-wrap items-center gap-10'>
          {services.map((service) => {
            return <ServicesCard {...service}></ServicesCard>;
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
