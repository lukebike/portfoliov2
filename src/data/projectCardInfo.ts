import springBootImg from "../assets/spring-boot.webp";
import expressImg from "../assets/https___dev-to-uploads.s3.amazonaws.com_uploads_articles_zojuy79lo3fn3qdt7g6p-removebg-preview.png";
import reactImg from "../assets/0_x-HyaNxF4CJW0gSc.png";
import planifyImg from "../assets/TodoLight.png";
type CardListTypes = {
  img?: string;
  cardTitle: string;
  cardText: string;
  anchorText: string;
  anchorLink: string;
};

const cards: CardListTypes[] = [
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
    img: springBootImg,
    cardTitle: "Library Management System",
    cardText:
      "Full-featured CRUD Library Management System utilizing Spring Boot, implementing RESTful API endpoints that adhere to common industry conventions",
    anchorText: "Visit now! (Github)",
    anchorLink: "https://github.com/lukebike/library-system",
  },
  {
    img: expressImg,
    cardTitle: "TechGear",
    cardText:
      "School project that implements RESTful API endpoints utilizing Node.js and Express.js with SQLite as a database.",
    anchorText: "Visit now! (Github)",
    anchorLink: "https://github.com/lukebike/TechGear",
  },
  {
    img: reactImg,
    cardTitle: "Portfolio",
    cardText: "The project you're currently viewing :)",
    anchorText: "Visit now!",
    anchorLink: "/home",
  },
];

export default cards;
