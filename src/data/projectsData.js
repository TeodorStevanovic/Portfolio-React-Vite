import mockPicture from "../assets/mock-rest-api.png";
import chakraPicture from "../assets/chakra-ui-app.png";
import matirialPicture from "../assets/matirial-ui-app.png";

export const projects = [
  {
    id: 1,
    title: "Mock Rest API",
    description:
      "Mock REST API built with Node.js and Express for frontend development and testing.",
    image: mockPicture,
    github: "https://github.com/TeodorStevanovic/mock-rest-api",
  },
  {
    id: 2,
    title: "E-commerce Web Application (React & Chakra UI)",
    description: `Simple e-commerce application built with React and Chakra UI.
    Focused on creating responsive layouts, reusable components, and a clean, user-friendly interface.`,
    image: chakraPicture,
    github: "",
  },
  {
    id: 3,
    title: "Admin Dashboard Web Application (React & Material UI)",
    description: `Admin dashboard project built using React and Material UI.
    Includes basic layout structure, organized components, and simple data presentation for practice and learning purposes.`,
    image: matirialPicture,
    github: "",
  },
];
