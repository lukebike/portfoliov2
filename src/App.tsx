import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import "./App.css";
import Home from "./pages/Home.tsx";
import MenuBar from "./layout/MenuBar.tsx";
import About from "./pages/About.tsx";
import MobileMenuBar from "./layout/MobileMenuBar.tsx";
import { lightThemeOptions, darkThemeOptions } from "./theme/ThemeOptions.tsx";

import { useState, useMemo } from "react";
import Projects from "./pages/Projects.tsx";

import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";

import { BrowserRouter, Routes, Route } from "react-router";
import Contact from "./pages/Contact.tsx";
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
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
