import { useState } from "react";
import heroImg from "./assets/63722375-removebg-preview.png";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function Hero() {
  const [fade, setFade] = useState(false);

  const handleClick = () => {
    setFade(true);
    setTimeout(() => {
      window.location.hash = "#Projects";
    }, 500);
  };
  return (
    <Box
      sx={{
        transition: "opacity 0.5s ease-in-out",
        opacity: fade ? 0 : 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        gap: 4,
      }}
    >
      <Box sx={{ textAlign: "left" }}>
        <Typography variant="h1" sx={{ color: "cyan" }}>
          Hello,
        </Typography>
        <Typography variant="h2" textAlign="left">
          My name is Luke Salem
        </Typography>
        <p>
          I'm a developer in{" "}
          <code>
            {"<>"}development.{"</>"}
          </code>
        </p>
        <Button
          variant="contained"
          sx={{
            marginTop: "10px",
            backgroundColor: "#c1121f",
            "&:hover": {
              backgroundColor: "#780000",
            },
          }}
          onClick={handleClick}
        >
          View my projects!
        </Button>
      </Box>
      <img src={heroImg} />
    </Box>
  );
}
