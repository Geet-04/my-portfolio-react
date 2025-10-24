// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cLogo from "./assets/tech_logo/c.png";
import cssLogo from "./assets/tech_logo/css.png";
import sassLogo from "./assets/tech_logo/sass.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import gitLogo from "./assets/tech_logo/git.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";

// Education Section Logo's
import kiitUniversityLogo from "./assets/education_logo/kiitUniversity_logo.png";
import rajendraUniversityLogo from "./assets/education_logo/rajendraUniversity_logo.png";
import rajendraJrCollegeLogo from "./assets/education_logo/rajendraJrCollege_logo.png";

// Project Section Logo's
import restCountryAPILogo from "./assets/work_logo/restCountryAPI.png";
import homepageLogo from "./assets/work_logo/homepage.PNG";
import jobPortalLogo from "./assets/work_logo/jobPortal.png";
import myntraCloneLogo from "./assets/work_logo/myntraCloneApp.png";
import personalPortfolioLogo from "./assets/work_logo/personalPortfolio.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MongoDB", logo: mongodbLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Java", logo: javaLogo },
      // { name: 'Python', logo: pythonLogo },
      { name: "JavaScript", logo: javascriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
    ],
  },
];

export const education = [
  {
    id: 0,
    img: kiitUniversityLogo,
    school: "Kiit University, Bhubaneswar",
    date: "Sept 2021 - may 2023",
    grade: "8.60 CGPA",
    desc: "I have completed my Master's degree (MCA) in Computer Applications from Kiit University, Bhubaneswar. During my time at Kiit, I gained a strong foundation in programming, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. which enhanced my skills and knowledge. My experience at GLA University has been instrumental in shaping my technical abilities and professional growth.",
    degree: "Master of Computer Applications - MCA",
  },
  {
    id: 1,
    img: rajendraUniversityLogo,
    school: "Ranjendra University, Balangir",
    date: "Sept 2017 - Aug 2020",
    grade: "77.7%",
    desc: "I completed my Bachelor's degree in Computer Science (B.Sc.) from Rajendra University, Balangir. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. During my time at BSA College, I learned C, Java, and computer organization also delivered a seminar.",
    degree: "Bachelor of Science - BSC (Computer Science)",
  },
  {
    id: 2,
    img: rajendraJrCollegeLogo,
    school: "Rajendra Jr College, Balangir",
    date: "Apr 2014 - March 2016",
    grade: "50%",
    desc: "I completed my class 12 education from Rajendra College, Balangir, under the CHSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Biology.",
    degree: "CHSE(XII) - PCMB ",
  },
];

export const projects = [
  {
    id: 0,
    title: "Online E-commerce Website",
    description:
      "Successfully designed and implemented key features such as product listing, category-wise browsing, real-time Add to Cart functionality, secure checkout process, and a user-specific orders dashboard.",
    image: homepageLogo,
    tags: ["MongoDB", "Express", "React Js", "Node.Js"],
    github: "https://github.com/Geet-04/E-commerce-website",
    webapp: "https://ecommercewebsiteprod.netlify.app/",
  },
  {
    id: 1,
    title: "Rest Country API",
    description:
      "Developed a responsive web app using React that fetches and displays country data from the REST Countries API. Includes features like search, filter by region, and detailed country view.",
    image: restCountryAPILogo,
    tags: ["React JS", "HTML", "CSS", "API"],
    github: "https://github.com/Geet-04/rest_country_api",
    webapp: "https://react-restcountriesapi-prod.netlify.app/",
  },
  
  {
    id: 2,
    title: "Personal Portfolio",
    description:
      "Designed and developed a personal portfolio website using React and Tailwind CSS to showcase projects, skills, and contact information. Includes smooth navigation, responsive layout, and email functionality with EmailJS and reCAPTCHA integration.",
    image: personalPortfolioLogo,
    tags: ["React", "tailwindCSS", "EmailJS", "reCAPTCHA"],
  },
  {
    id: 3,
    title: "Job Portal Web Application",
    description: "Developed a full-stack Job Portal where users can register, apply for jobs, and companies can post openings. Implemented authentication, role-based access, and real-time updates.",
    image: jobPortalLogo,
    tags: ["MERN", "React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/Geet-04/jobportal_2",
    webapp: "https://jobportal-2-qbmj.onrender.com/",
  },
  {
    id: 4,
    title: "Myntra Frontend Clone",
    description: "Developed a responsive Myntra Clone website focusing on UI.",
    image: myntraCloneLogo,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Geet-04/MyntraCloneUI",
    webapp: "https://project-clone-frontend-web-ui.netlify.app/",
  },
];
