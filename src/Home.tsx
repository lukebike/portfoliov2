import { useEffect, useState } from "react";
import heroImg from "/undraw_coding_joxb.svg";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [fade, setFade] = useState(false);
  const isMobile = useMediaQuery("(max-width:600px)");

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Box
      sx={{
        transition: "opacity 0.5s ease-in-out",
        opacity: mounted && !fade ? 1 : 0,
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        justifyContent: "center",
        alignItems: "center",
        height: isMobile ? "auto" : "90vh",
        minHeight: isMobile ? "100vh" : "50vh",
        gap: { xs: 2, sm: 4 },
        px: { xs: 2, sm: 0 },
        py: { xs: 4, sm: 0 },
        boxSizing: "border-box",
      }}
    >
      <Box sx={{ textAlign: { xs: "center", sm: "left" }, m: 0, p: 0 }}>
        <Typography variant={isMobile ? "h3" : "h1"} sx={{ color: "#00BCD4" }}>
          Hello,
        </Typography>
        <Typography
          variant={isMobile ? "h4" : "h2"}
          textAlign={{ xs: "center", sm: "left" }}
        >
          My name is Luke Salem
        </Typography>
        <p style={{ textAlign: isMobile ? "center" : "left" }}>
          I'm a developer in{" "}
          <code>
            {"<>"}development.{"</>"}
          </code>
        </p>
        <Button
          href="#Projects"
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
            width: { xs: "100%", sm: "auto" },
          }}
        >
          View my projects!
        </Button>
      </Box>
      <img
        src={heroImg}
        style={{
          maxWidth: isMobile ? "80vw" : "auto",
          maxHeight: isMobile ? "30vh" : "80vh",
          height: "auto",
          marginTop: isMobile ? 24 : 0,
        }}
      />
    </Box>
  );
}
