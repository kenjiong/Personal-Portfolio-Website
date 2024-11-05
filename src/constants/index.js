import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  expressjs,
  laravel,
  sql,
  cbm,
  generalassembly,
  lawfirm,
  cryptomania,
  fincademy,
  finviewx,
  personalportfoliowebsite,
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
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Database Management",
    icon: creator,
  },
  {
    title: "API Integration",
    icon: mobile,
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Laravel",
    icon: laravel,
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Express.js",
    icon: expressjs,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "CBM Pte Ltd",
    icon: cbm,
    iconBg: "#E6DEDD",
    date: "May 2024 - Present",
    points: [
      "Developing and maintaining web applications in partnership with Willowmore Pte Ltd using React.js, Laravel, MySQL and other related technologies.",
      "Played a pivotal role in developing digiHUB Web, the company's flagship facilities management dashboard application.",
      "Collaborating with cross-functional teams including tech leads, other developers, and designers to create high-quality applications.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Software Engineering Immersive Student",
    company_name: "General Assembly",
    icon: generalassembly,
    iconBg: "#383E56",
    date: "Aug 2023 - Nov 2023",
    points: [
      "Completed an intensive 12-week, immersive coding bootcamp that provided a solid base of fundamental full-stack programming and computer science knowledge.",
      "Experienced working with modern languages, frameworks and libraries including JavaScript, React, Express, Node, MongoDB in creating 4 front-end and full-stack applications.",
      "Tasked with building applications both in teams and independently, and gained exposure to version control on GitHub.",
    ],
  },
  {
    title: "Legal Associate",
    company_name: "Various Law Firms",
    icon: lawfirm,
    iconBg: "#E6DEDD",
    date: "Aug 2019 - Aug 2023",
    points: [
      "Handled various civil and commercial litigation cases, including actions involving an investment dispute involving a regional private education firm and an alleged nickel trading fraud (i.e. ACE Spring Investments Ltd v Balbeer Singh Mangat [2024] SGHC 277 & Debenho Pte Ltd v Envy Global Trading Pte Ltd [2022] SGHC 7).",
      "Researched and analysed relevant areas of the law for each dispute, and subsequently formulated, drafted and presented arguments before the Singapore courts.",
      "Exercised stakeholder management skills during negotiations for private settlements and managing clients’ expectations.",
      "Certified as an Accredited Mediator (Level 1) with the Singapore International Mediation Institute.",
    ],
  },
];

const projects = [
  {
    name: "Personal Portfolio Website",
    description:
      "A visually engaging and interactive website with 3D elements showcasing my personal projects, skills, and experiences. Built entirely using modern front-end technologies for a seamless user experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "grey-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: personalportfoliowebsite,
    app_link: "http://cryptomania-kenjiong.vercel.app/",
    source_code_link: "https://github.com/",
  },
  {
    name: "FinViewX",
    description:
      "A personal net worth tracker app inspired by DBS’ NAV Planner built on the MERN stack to track one’s assets and liabilities, ensure that one has sufficient emergency funds and plan for one’s retirement.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "orange-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "brown-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: finviewx,
    app_link: "https://finviewx.onrender.com/",
    source_code_link: "https://github.com/kenjiong/FinViewX",
  },
  {
    name: "FinCademy",
    description:
      "An e-learning platform for financial literacy built in a team of 4 on the MERN stack which aims to educate the general public on good financial habits and provide knowledge on various topics related to financial literacy.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "orange-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "brown-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: fincademy,
    app_link: "https://fincademy.onrender.com/",
    source_code_link: "https://github.com/kenjiong/FinCademy",
  },
  {
    name: "Cryptomania",
    description:
      "A cryptocurrency tracker app built using React and with data pulled from a third-party API which allows one to monitor the latest crypto news and prices.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: cryptomania,
    app_link: "http://cryptomania-kenjiong.vercel.app/",
    source_code_link: "https://github.com/kenjiong/Cryptomania",
  },
];

export { services, technologies, experiences, projects };
