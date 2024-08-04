import { blackArrow, greenArrow } from "../assets/icons";
import {
  analytics,
  brian,
  contentCreation,
  emailMarketing,
  emily,
  jane,
  john,
  michael,
  ppc,
  sarah,
  seo,
  socialMedia,
} from "../assets/images";

export const navItems = ["Services", "Use Cases", "Process", "Team" ]

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

export const workingProcess = [
  {
    index: "01",
    title: "Consultation",
    description:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    index: "02",
    title: "Research and Strategy Development",
    description:
      "Our approach begins with thorough market research and the development of strategic frameworks tailored to meet our clients' specific objectives. We prioritize defining clear goals and executing detailed plans to ensure alignment with business needs.",
  },
  {
    index: "03",
    title: "Implementation",
    description:
      "Implementation involves meticulous planning, resource allocation, and execution to ensure that initiatives are rolled out effectively. By maintaining clear timelines, responsibilities, and communication channels, we aim to achieve seamless integration of new processes or projects. Regular monitoring and feedback mechanisms are also essential during implementation to address any challenges promptly and optimize outcomes.",
  },
  {
    index: "04",
    title: "Monitoring and Optimization",
    description:
      "In our operational framework, diligent oversight allows us to track performance metrics and identify areas for enhancement. This ongoing monitoring ensures that we can swiftly address any deviations from our goals, optimizing processes to maximize efficiency and effectiveness.",
  },
  {
    index: "05",
    title: "Reporting and Communication",
    description:
      "Regular reporting ensures transparency and accountability, fostering a clear understanding of progress and challenges. Simultaneously, clear communication channels facilitate seamless coordination and rapid decision-making within our team, ensuring that everyone stays informed and aligned on goals and objectives.",
  },
  {
    index: "06",
    title: "Continual Improvement",
    description:
      "Embracing a culture of continuous improvement, we regularly evaluate our methods and outcomes. Through feedback loops and lessons learned, we implement iterative refinements to enhance effectiveness and drive innovation across our operations. This commitment to evolution ensures we remain agile and responsive in achieving our goals.",
  },
];

export const teamMembers = [
  {
    image: john,
    name: "John Smith",
    title: "CEO and Founder",
    about:
      "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
  },
  {
    image: jane,
    name: "Jane Doe",
    title: "Director of Operations",
    about:
      "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
  },
  {
    image: michael,
    name: "Michael Brown",
    title: "Senior SEO Specialist",
    about:
      "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
  },
  {
    image: emily,
    name: "Emily Johnson",
    title: "PPC Manager",
    about:
      "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
  },
  {
    image: brian,
    name: "Brian Williams",
    title: "Social Media Specialist",
    about:
      "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
  },
  {
    image: sarah,
    name: "Sarah Kim",
    title: "Content Creator",
    about:
      "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries",
  },
];
