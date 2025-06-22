import one from "../assets/svg/projects/one.svg";
import two from "../assets/svg/projects/two.svg";
import three from "../assets/svg/projects/three.svg";
import four from "../assets/svg/projects/four.svg";
import five from "../assets/svg/projects/five.svg";
import six from "../assets/svg/projects/six.svg";
import seven from "../assets/svg/projects/seven.svg";
import eight from "../assets/svg/projects/eight.svg"; // ✅ make sure this file exists

export const projectsData = [
  {
    id: 1,
    projectName: "Edusity",
    projectDesc:
      "This project is a dynamic university website designed to manage courses, faculty, and student interactions efficiently.",
    tags: ["React", "CSS", "React Bootstrap"],
    code: "https://github.com/haroon-rashed/Edusity",
    demo: "https://edusity-cyan.vercel.app/",
    image: six,
  },
  {
    id: 2,
    projectName: "Food Delivery",
    projectDesc:
      "It includes a smart food delivery platform with real-time order tracking and secure payment integration.",
    tags: ["React", "CSS", "React Bootstrap"],
    code: "https://github.com/haroon-rashed/Food_Delivery",
    demo: "https://food-delivery-l7fl.vercel.app/",
    image: seven,
  },
  {
    id: 3,
    projectName: "Facebook Clone",
    projectDesc:
      "A fully functional social media web app is included, enabling users to share posts, chat, and connect globally.",
    tags: [
      "React",
      "Express",
      "MongoDB",
      "Socket.io",
      "Redux",
      "Material UI",
      "JWT",
      "Node.js",
      "Mongoose",
      "Axios",
      "Tailwind CSS",
      "Cloudinary",
      "nodeMailer",
      "stripe",
      "react-router-dom",
      "react-icons",
      "react-toastify",
      "react-redux",
      "zego-cloud",
    ],
    code: "https://github.com/haroon-rashed/fb_b18",
    demo: "/",
    image: four, // 🛠 temporarily using "four" instead of "Unlimited"
  },
  {
    id: 4,
    projectName: "Google Gemini",
    projectDesc:
      "The system also showcases an integration with Google Gemini AI for enhanced user assistance and automation.",
    tags: ["React", "CSS", "Material Ui"],
    code: "https://github.com/haroon-rashed/Google-gemini",
    demo: "https://google-gemini-five-brown.vercel.app/",
    image: eight, // ✅ now it's properly imported
  },
  {
    id: 5,
    projectName: "E-Commerce App",
    projectDesc:
      "A modern e-commerce site with category management, shopping cart, and order processing.",
    tags: [
      "React",
      "Express",
      "MongoDB",
      "Socket.io",
      "Redux",
      "Material UI",
      "JWT",
      "Node.js",
      "Mongoose",
      "Axios",
      "Tailwind CSS",
      "Cloudinary",
      "nodeMailer",
      "react-router-dom",
      "react-icons",
    ],
    code: "https://github.com/haroon-rashed/Multi_Dental",
    demo: "/",
    image: five,
  },
  {
    id: 6,
    projectName: "Ecommerce App",
    projectDesc:
      "An e-commerce site built using PHP and MySQL with admin dashboard and product catalog.",
    tags: ["PHP", "Bootstrap", "MySQL"],
    code: "https://github.com/haroon-rashed/etsy",
    demo: "/",
    image: one,
  },
  {
    id: 7,
    projectName: "Youtube Clone",
    projectDesc:
      "A full-stack YouTube clone with real-time video streaming and comment system.",
    tags: [
      "React",
      "Express",
      "MongoDB",
      "Socket.io",
      "Redux",
      "Material UI",
      "JWT",
      "Node.js",
      "Mongoose",
      "Axios",
      "Tailwind CSS",
      "multer",
    ],
    code: "https://github.com/haroon-rashed/yt_clone",
    demo: "https://your-demo-link.com", // update demo if needed
    image: two,
  },
  {
    id: 8,
    projectName: "Netsol",
    projectDesc:
      "The carpooling system merges multiple people in a car which leads to meeting new people and reduces pollution.",
    tags: ["HTML", "CSS", "JavaScript"],
    code: "http://github.com/haroon-rashed/netsol",
    demo: "https://netsol-eosin.vercel.app/",
    image: three,
  },
];
