import React from "react";
import SectionHeading from "../components/SectionHeading";
import { teamMembers } from "../constants";
import TeamMemberCard from "../components/TeamMemberCard";

const Team = () => {
  const isLargeScreen = window.matchMedia('(min-width: 1024px)').matches;
  const numMembersToShow = isLargeScreen ? 6 : 4;

  return (
    <section className="max-container padding-x lg:mt-[140px] mt-[60px]">
      <SectionHeading
        title="Meet The Team"
        text="Meet the skilled and experienced team behind our successful digital marketing strategies"
      ></SectionHeading>
      <div className = 'grid lg:grid-cols-3 lg:grid-rows-2 grid-col-1 gap-10 lg:mt-16 mt-10'>
        {
            teamMembers.slice(0, numMembersToShow).map((member) =>{
                return <TeamMemberCard id = {member.name} {...member}></TeamMemberCard>
            })
        }
      </div>
    </section>
  );
};

export default Team;
