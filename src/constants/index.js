import { blackArrow, greenArrow } from "../assets/icons";
import { analytics, contentCreation, emailMarketing, ppc, seo, socialMedia } from "../assets/images";

export const services = [
  {
    titleL1: "Search Engine",
    titleL2:"Optimization",
    textBackground: "bg-custom-green",
    cardBackground: "bg-custom-gray",
    arrow: greenArrow,
    image: seo,
  },
  {
    titleL1: "Pay-Per-Click",
    titleL2: "Advertising",
    textBackground: "bg-custom-gray",
    cardBackground: "bg-custom-green",
    arrow: greenArrow,
    image: ppc,
  },
  {
    titleL1: "Social Media",
    titleL2: "Marketing",
    textBackground: "bg-custom-gray",
    cardBackground: "bg-custom-black",
    arrow: blackArrow,
    image: socialMedia,
  },
  {
    titleL1: "Email",
    titleL2: "Marketing",
    textBackground: "bg-custom-green",
    cardBackground: "bg-custom-gray",
    arrow: greenArrow,
    image: emailMarketing,
  },
  {
    titleL1: "Content",
    titleL2: "Creation",

    textBackground: "bg-custom-gray",
    cardBackground: "bg-custom-green",
    arrow: greenArrow,
    image: contentCreation,
  },
  {
    titleL1: "Analytics and",
    titleL2: "Tracking",
    textBackground: "bg-custom-green",
    cardBackground: "bg-custom-black",
    arrow: blackArrow,
    image: analytics,
  },
];
