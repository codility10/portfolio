import {
  CSS3,
  Express,
  HTML5,
  Javascript,
  Mongodb,
  Nextjs,
  Nextjs2,
  Nodejs,
  Reactjs,
  admin,

} from "./assets";
import hostel from './assets/work/hostel.png'
import movix from './assets/work/movix.png'

import todo from './assets/work/todo.PNG'

import portfolio from './assets/work/portfolio.png'


export const projectStats = [
  {
    name: "Total Projects",
    value: "20+",
  },
  {
    name: "Website Design",
    value: "50+",
  },
  {
    name: "Mobile App Design",
    value: "5+",
  },
  {
    name: "Clients worldwide",
    value: "+10",
  },
];

export const tools = [
  {
    name: "MongoDB",
    icon: Mongodb,
  },
  {
    name: "Express",
    icon: Express,
  },
  {
    name: "React",
    icon: Reactjs,
  },
  {
    name: "NodeJs",
    icon: Nodejs,
  },
  {
    name: "NextJs",
    icon: Nextjs2,
  },
];

export const skills = [
  {
    name: "ReactJs",
    value: 98,
    icon: Reactjs,
  },
  {
    name: "NodeJs",
    value: 96,
    icon: Nodejs,
  },
  {
    name: "NextJs",
    value: 97,
    icon: Nextjs,
  },
  {
    name: "MongoDB",
    value: 98,
    icon: Mongodb,
  },
  {
    name: "CSS3",
    value: 98,
    icon: CSS3,
  },
  {
    name: "HTML5",
    value: 98,
    icon: HTML5,
  },
  {
    name: "JavaScript",
    value: 88,
    icon: Javascript,
  },
 
];

export const projects = [
  {
    id: 1,
    title: "Movies App",
    cat: "Web Design",
    url: "",
    img: movix,
  },
  {
    id: 2,
    title: "Portfolio Website",
    cat: "Web Design",
    url: "",
    img: portfolio,
  },
  {
    id: 3,
    title: "Hostel Managment App",
    cat: "Hostel Managment App",
    url: "",
    img: hostel,
  },
  {
    id: 4,
    title: "Dashboard",
    cat: "Web Design",
    url: "",
    img: admin,
  },
  {
    id: 5,
    title: "Todos App",
    cat: "Web Design",
    url: "",
    img: todo,
  },
  {
    id: 6,
    title: "PortFolio",
    cat: "Web App",
    url: "",
    img: portfolio,
  },
  {
    id: 7,
    title: "Eat Well App",
    cat: "Mobile App",
    url: "",
    img: admin,
  },
];

export const softskills = [
  "Time management",
  "Communication",
  "Empathy",
  "Teamwork",
  "Helpfulness",
  "Creativity",
  "Self-learning",
  "Accountability",
  "Problem solving",
  "Open-mindedness",
];
