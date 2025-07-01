import { useState } from "react";
import heroImg from "/undraw_coding_joxb.svg";
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
        height: "90vh",
        gap: 4,
        boxSizing: "border-box",
      }}
    >
      <Box sx={{ textAlign: "left", m: 0, p: 0 }}>
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
            transition:
              "background-color 0.5s cubic-bezier(0.4,0,0.2,1), color 0.5s cubic-bezier(0.4,0,0.2,1)",
            "&:hover": {
              backgroundColor: "#780000",
              color: "black",
            },
          }}
          onClick={handleClick}
        >
          View my projects!
        </Button>
      </Box>
      <img src={heroImg} style={{ maxHeight: "80vh", height: "auto" }} />
    </Box>
  );
}
