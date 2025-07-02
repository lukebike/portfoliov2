import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import "./App.css";
import Home from "./Home.tsx";
import MenuBar from "./MenuBar.tsx";

import ContactForm from "./ContactForm.tsx";
import About from "./About.tsx";
import MobileMenuBar from "./MobileMenuBar.tsx";

import { useEffect, useState } from "react";
import CardList from "./CardList.tsx";
import { useMediaQuery } from "@mui/material";
function App() {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const [hash, setHash] = useState(window.location.hash);

  //TODO: Mobile Navbar (done, need styling)
  //TODO: Contact info mobile
  //TODO: Home Page Mobile
  //TODO: Look into overflow

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);
  return (
    <>
      {isMobile ? (
        <MobileMenuBar navTexts={["Home", "About Me", "Projects"]} />
      ) : (
        <MenuBar navTexts={["Home", "About Me", "Projects"]} />
      )}
      {(hash === "#Home" || hash === "") && <Home />}
      {hash === "#About%20Me" && <About />}
      {hash === "#Projects" && <CardList />}
      {hash === "#Contact" && <ContactForm />}
    </>
  );
}

export default App;
