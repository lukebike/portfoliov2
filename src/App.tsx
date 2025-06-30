import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import "./App.css";
import Hero from "./Hero.tsx";
import MenuBar from "./MenuBar.tsx";
import ContactForm from "./ContactForm.tsx";
import Home from "./Home.tsx";

import { useEffect, useState } from "react";
import CardList from "./CardList.tsx";
function App() {
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);
  return (
    <>
      <MenuBar navTexts={["Home", "About Me", "Projects"]} />
      {window.location.hash === "#Home" && <Hero />}
      {window.location.hash === "#About%20Me" && <Home />}
      {window.location.hash === "#Projects" && <CardList />}
      {window.location.hash === "#Contact" && <ContactForm />}
    </>
  );
}

export default App;
