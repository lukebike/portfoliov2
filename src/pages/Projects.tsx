import cards from "../data/projectCardInfo";
import { ProjectCard } from "../components/ProjectCard";
import type { CardTypes } from "../components/ProjectCard";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import Footer from "../layout/Footer.tsx";

export default function Projects() {
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
        style={{
          display: "flex",
          minHeight: isMobile ? "100vh" : "95%",
          alignItems: isMobile ? undefined : "center",
          justifyContent: isMobile ? undefined : "center",
          paddingTop: isMobile ? "80px" : "50px",
        }}
      >
        <Box
          sx={{
            height: isMobile ? "auto" : "80%",

            flexDirection: "column",
            justifyContent: { xl: "space-around" },
            alignItems: "center",
          }}
        >
          {isMobile ? (
            <Typography
              variant="h3"
              sx={{ mb: 5, fontWeight: "400", textAlign: "center" }}
            >
              My Projects
            </Typography>
          ) : (
            <Typography variant="h2" sx={{ mb: 5, textAlign: "center" }}>
              My Projects
            </Typography>
          )}

          <Grid
            container
            spacing={{ lg: 5, xs: 4, xl: 3 }}
            justifyContent="space-around"
            sx={{
              flexDirection: "row",
              width: { xs: "100%", lg: 500 },
              alignItems: "center",
            }}
          >
            {cards.map((card: CardTypes, idx: number) => (
              <Grid
                key={idx}
                size={{
                  xs: 12,
                  sm: 6,
                  md: 6,
                  lg: 12,
                  xl: 12,
                }}
              >
                <ProjectCard {...card} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </motion.div>
      <Footer />
    </>
  );
}
