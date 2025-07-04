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
        flexDirection: { lg: "row", md: "column", xs: "column" },
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
          sx={{
            fontSize: {
              xs: "1rem", // mobile
              sm: "1.25rem", // tablets (≥600px)
              md: "1.5rem", // desktop (≥900px)
            },
          }}
          textAlign={{ xs: "center", sm: "left" }}
        >
          My name is Luke Salem
        </Typography>
        <Typography
          sx={{ textAlign: { lg: "left", xs: "center", md: "center" } }}
        >
          I'm a developer in{" "}
          <code>
            {"<>"}development.{"</>"}
          </code>
        </Typography>
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
      <Box
        sx={{
          maxWidth: { xs: "80vw", lg: "auto", md: "70vw" },
          maxHeight: { xs: "30vh", lg: "80vh", md: "30vh" },
          height: "auto",
          marginTop: { xs: 5, md: 5 },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={heroImg}
          style={{
            width: "100%",
            height: "auto",
            display: "block",
          }}
          alt="Coding illustration"
        />
      </Box>
    </Box>
  );
}
