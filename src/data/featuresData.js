import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe} from "react-icons/fa";
import {  SiAntdesign } from "react-icons/si";
import {BsFiletypeJava ,BsServer } from "react-icons/bs";
import {BiSolidServer  } from "react-icons/bi";

// Features Data
export const featuresData = [
  {
    id: 1,
    x:80,
    title: "Server-Side Web Development",
    icon: <BiSolidServer />,
    des: "I specialize in server-side development using Node.js, Spring Boot, and Nest.js. With these robust technologies, I create scalable and high-performance server applications that drive web and mobile experiences. Let's build the server backbone of your next project together.",
  },
  {
    id: 2,
    x:80,
    icon:<FaGlobe />,
    title: "Client-Side Web Development",
    des: "Harnessing the power of React, Angular, Bootstrap, and Tailwind CSS, I specialize in building captivating front-end interfaces. With a keen eye for design and a passion for user experience, I bring ideas to life, making the digital realm both visually stunning and highly functional. Let's create web experiences that leave a lasting impression.",
},
  {
    id: 8,
    x:72,
    icon: <BsServer />,
    title: "Data Base Managemnt",
    des: "I specialize in managing and optimizing databases using MySQL and MongoDB. Whether it's relational or NoSQL data, I ensure data integrity, performance, and scalability. Let's empower your web applications with rock-solid data foundations.",
  },
  {
    id: 3,
    x:60,
    icon: <BsFiletypeJava />,
    title: "Java Development with JavaFX",
    des: "As a skilled Java developer, I specialize in JavaFX to create rich and interactive desktop applications. With Java's robust capabilities and JavaFX's modern UI features, I design and develop desktop solutions that blend functionality with aesthetics. Let's bring your desktop application ideas to life.",
  },
  {
    id: 4,
    x:72,
    icon: <FaMobile />,
    title: "Mobile Development with React-Native",
    des: "With React Native, I specialize in building cross-platform mobile applications that deliver a seamless user experience. Leveraging the power of JavaScript and React, I create apps that run natively on both iOS and Android devices. Let's turn your mobile app vision into reality",
  },
  {
    id: 5,
    x:72,
    icon: <SiAntdesign />,
    title: "UX Design with Figma",
    des: "I am a UI/UX designer proficient in Figma. "+
    "With a keen eye for user experience and a flair for creative design,"+
    " I specialize in crafting intuitive and visually appealing digital interfaces that engage and delight users.",
  },
  {
    id: 6,
    x:72,
    title:'Business Stratagy',
    des:"I specialize in crafting effective business strategies using use case diagrams, complemented by robust project management tools. By aligning technology with your business objectives, I help you navigate the path to success. Let's turn your ideas into strategic actions.",
    icon:<AiFillAppstore />
  }
];