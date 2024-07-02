import { blackArrow, greenArrow } from "../assets/icons";
import {
  analytics,
  contentCreation,
  emailMarketing,
  ppc,
  seo,
  socialMedia,
} from "../assets/images";

export const services = [
  {
    titleL1: "Search Engine",
    titleL2: "Optimization",
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

export const caseStudies = [
  "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
  "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
  "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
];
