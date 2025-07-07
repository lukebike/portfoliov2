import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import "./App.css";
import Home from "./Home.tsx";
import MenuBar from "./MenuBar.tsx";
import Footer from "./Footer.tsx";

import ContactForm from "./ContactForm.tsx";
import About from "./About.tsx";
import MobileMenuBar from "./MobileMenuBar.tsx";
import { lightThemeOptions, darkThemeOptions } from "./ThemeOptions";

import { useState, useMemo } from "react";
import CardList from "./CardList.tsx";

import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";

import { BrowserRouter, Routes, Route } from "react-router";
import ContactFormDuo from "./ContactFormDuo.tsx";
function App() {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const [mode, setMode] = useState<"light" | "dark">("dark");
  const theme = useMemo(
    () => createTheme(mode === "dark" ? darkThemeOptions : lightThemeOptions),
    [mode]
  );

  //TODO: Mobile Navbar (done, need styling) DONE
  //TODO: Contact info mobile
  //TODO: Home Page Mobile DONE
  //TODO: Look into overflow DONE
  //TODO: Implement React Router
  //TODO: Rework Contact Page
  //TODO: Implement Emailjs or similar on contact page
  //TODO: Add text to locales
  //TODO: Make Swedish version
  //TODO: Look into smoother color transition
  //TODO: Add label to icons

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="lg" sx={{ height: "100%" }}>
          {isMobile ? (
            <MobileMenuBar
              navTexts={["Home", "About", "Projects", "Contact"]}
              mode={mode}
              setMode={setMode}
            />
          ) : (
            <MenuBar
              navTexts={["Home", "About", "Projects", "Contact"]}
              mode={mode}
              setMode={setMode}
            />
          )}
          <Routes>
            <Route path="/" element={<Home mode={mode} />} />
            <Route path="home" element={<Home mode={mode} />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<CardList />} />
            <Route path="contact" element={<ContactFormDuo />} />
          </Routes>
          <Footer />
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
