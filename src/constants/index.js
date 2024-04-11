import {
  rzd,
  freelance,
  mobile,
  frontend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "RZD",
    icon: rzd,
    iconBg: "#383E56",
    date: "Aug 2018 - Jan 2023",
    points: [
      "Frontend development at RZD, including JavaScript development.",
      "Collaborated with design teams, product managers, and other developers to create high-quality products.",
      "Developed responsive designs and ensured cross-browser compatibility.",
      "Participated in code reviews and provided constructive feedback to other developers.",
    ],
  },
  {
    title: "Freelance Web Developer",
    company_name: "Garin Studio",
    icon: freelance,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Freelance web development, including development on React.js and related technologies.",
      "Collaborated with various companies and clients, including receiving ongoing orders.",
      "Developed responsive designs and ensured cross-browser compatibility.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Georgii has a remarkable ability to turn our vision into a stunning website. His work truly showcases the beauty of our products.",
    name: "Pavel K",
    designation: "CTO",
    company: "RZD",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    testimonial:
      "As a web developer, Georgii is dedicated to our success. His commitment to client satisfaction sets him apart in the industry.",
    name: "Tatiana T",
    designation: "Customer Relations Manager",
    company: "Garin Studio",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Georgii, has demonstrated exceptional technical expertise. His contributions have been invaluable.",
    name: "Ivan D",
    designation: "Team Leader",
    company: "DCS World",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
];

const projects = [
  {
    name: "Shelter",
    description: "",
    tags: [
      {
        name: "JS",
        color: "blue-text-gradient",
      },
      {
        name: "TS",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link:
      "https://rolling-scopes-school.github.io/ge1o1ge-JSFE2023Q1/shelter/index.html",
  },
  {
    name: "On;ine Zoo",
    description: "",
    tags: [
      {
        name: "JS",
        color: "blue-text-gradient",
      },
      {
        name: "TS",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://ge1o1ge.github.io/Online-zoo/",
  },
  {
    name: "Minesweeper the game",
    description: "",
    tags: [
      {
        name: "JS",
        color: "blue-text-gradient",
      },
      {
        name: "TS",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://rolling-scopes-school.github.io/ge1o1ge-JSFE2023Q1/minesweeper/dist/",
  },
];

export { services, technologies, experiences, testimonials, projects };
