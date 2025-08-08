import springBootImg from "../assets/spring-boot.webp";
import expressImg from "../assets/https___dev-to-uploads.s3.amazonaws.com_uploads_articles_zojuy79lo3fn3qdt7g6p-removebg-preview.png";
import reactImg from "../assets/0_x-HyaNxF4CJW0gSc.png";
import planifyImg from "../assets/TodoLight.png";
import goombaImg from "../assets/FgSnvZsWIAIliF6-removebg-preview.png";
import minBibliotekImg from "../assets/minBibliotek.png";
type CardListTypes = {
  img?: string;
  cardTitle: string;
  cardText: string;
  anchorText: string;
  anchorLink: string;
};

const cards: CardListTypes[] = [
  {
    img: minBibliotekImg,
    cardTitle: "Min Bibliotek",
    cardText:
      "A full-stack CRUD Library Management System built with React, MUI & MUI X Datagrid, Typescript, Java, Spring Boot and SQLite for the database",
    anchorText: "Visit now!",
    anchorLink: "https://github.com/lukebike/MinBibliotek",
  },
  {
    img: goombaImg,
    cardTitle: "Goomba Bot",
    cardText: `A Discord bot built with Javascript, Node.js, Meta AI and discord.js. Supports role assignment, team making, event creation, randomized responses when pinged, birthday pings, dynamic bot status, and AI chat for conversations.`,
    anchorText: "Visit now! (Github)",
    anchorLink: "https://github.com/lukebike/goombaBot",
  },
  {
    img: planifyImg,
    cardTitle: "Planify",
    cardText: `Planify is a simple and powerful to-do list app that helps you stay organized. Create multiple lists, plan your tasks, and keep everything in one place.`,
    anchorText: "Visit now!",
    anchorLink: "https://lukesalem-planify.vercel.app/",
  },
  {
    cardTitle: "The Cocktail DB",
    cardText:
      "Cocktail information website fetching information from an API and built utilizing vanilla Javascript and Bulma CSS",
    anchorText: "Visit now!",
    anchorLink: "https://cocktailapi-lukesalem.netlify.app/",
  },

  {
    img: expressImg,
    cardTitle: "TechGear",
    cardText:
      "An Express.js app that implements RESTful API endpoints utilizing Node.js with SQLite as a database.",
    anchorText: "Visit now! (Github)",
    anchorLink: "https://github.com/lukebike/TechGear",
  },
  {
    img: reactImg,
    cardTitle: "Portfolio",
    cardText:
      "Portfolio built with React, Typescript and Material UI that showcases all my previous projects and my background.",
    anchorText: "Visit now!",
    anchorLink: "/home",
  },
];

export default cards;
