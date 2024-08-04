import React from "react";
import SectionHeading from "../components/SectionHeading";
import { workingProcess } from "../constants";
import WorkingProcessCard from "../components/WorkingProcessCard";

const Process = () => {
  return (
    <section id = 'Process' className="max-container padding-x lg:mt-[140px] mt-[60px]">
      <SectionHeading
        title="Our Working Process"
        text="Step-by-Step Guide to Achieving Your Business Goals"
      ></SectionHeading>
      {workingProcess.map((process) => {
        return (
          <div className = ''>
            <WorkingProcessCard {...process}></WorkingProcessCard>
          </div>
        );
      })}
    </section>
  );
};

export default Process;
