import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { caseStudies } from '../constants';
import SectionHeading from '../components/SectionHeading';
import CaseCard from '../components/CaseCard';


const CaseStudies = () => {
      const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className = 'max-container padding-x lg:mt-[140px] mt-[60px]'>
        
        <SectionHeading
          title="Case Studies"
          text="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
        ></SectionHeading>

        <div className = 'hidden lg:flex flex-row bg-custom-black px-[60px] py-[70px] rounded-3xl mt-12'>
        <CaseCard text = {caseStudies[0]}></CaseCard> 
        <div className = 'w-[2px] bg-white mx-[60px]'></div>
        <CaseCard text = {caseStudies[1]}></CaseCard> 
        <div className = 'w-[2px] bg-white mx-[60px]'></div>
        <CaseCard text = {caseStudies[2]}></CaseCard> 
        </div>
        <div className="hidden max-lg:block slider-container ">
      <Slider {...settings}>
        {
            caseStudies.map((item)=>{
                return <CaseCard text = {item}></CaseCard> 
            })
        
        }
      </Slider>
    </div>
    </section>
  )
}

export default CaseStudies