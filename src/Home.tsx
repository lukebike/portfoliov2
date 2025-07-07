import heroImg from "/undraw_coding_joxb.svg";
import heroImg2 from "/undraw_coding_joxb2.svg";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
export default function Hero({ mode }: { mode: "light" | "dark" }) {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { lg: "row", md: "column", xs: "column" },
          justifyContent: "center",
          alignItems: "center",
          height: isMobile ? "90vh" : "80vh",
          boxSizing: "border-box",
        }}
      >
        <Box sx={{ textAlign: { xs: "center", sm: "left" }, m: 0, p: 0 }}>
          <Typography
            variant={isMobile ? "h3" : "h1"}
            sx={{ color: theme.palette.primary.main }}
          >
            Hello,
          </Typography>
          <Typography
            sx={{
              fontSize: {
                xs: "20px",
                sm: "20px",
                md: "25px",
                lg: "20px",
                xl: "24px",
              },
            }}
            textAlign={{ xs: "center", sm: "left" }}
          >
            My name is Luke Salem
          </Typography>
          <Typography
            sx={{
              textAlign: {
                lg: "left",
                xs: "left",
                md: "left",
              },
            }}
          >
            I'm a developer in{" "}
            <code>
              {"<>"}development.{"</>"}
            </code>
          </Typography>
          <Button
            variant="contained"
            sx={{
              marginTop: "10px",
              backgroundColor: theme.palette.error.main,
              transition:
                "background-color 0.5s cubic-bezier(0.4,0,0.2,1), color 0.5s cubic-bezier(0.4,0,0.2,1)",
              "&:hover": {
                backgroundColor: theme.palette.error.dark,
                color: theme.palette.warning.contrastText,
              },
              width: { xs: "100%", sm: "auto" },
            }}
            onClick={() => navigate("/projects", { viewTransition: true })}
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
            src={mode === "dark" ? heroImg : heroImg2}
            style={{
              width: isMobile ? "100%" : "80%",
              height: "auto",
              display: "block",
            }}
            alt="Coding illustration"
          />
        </Box>
      </Box>
    </motion.div>
  );
}
