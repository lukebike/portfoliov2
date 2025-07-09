import cards from "../data/projectCardInfo";
import { ProjectCard } from "../components/ProjectCard";
import type { CardTypes } from "../components/ProjectCard";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";

export default function Projects() {
  const isMobile = useMediaQuery("(max-width: 600px)");
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      style={{
        display: "flex",
        height: isMobile ? undefined : "95%",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Box
        sx={{
          height: isMobile ? "auto" : "80%",
          width: "100%",
          flexDirection: "column",
          justifyContent: { xl: "space-around" },
          alignItems: "center",
        }}
      >
        {isMobile ? (
          <Typography variant="h3" sx={{ mb: 5, fontWeight: "400" }}>
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
            flexDirection: { xs: "row" },
            width: { xl: "100%" },
            alignItems: "center",
          }}
        >
          {cards.map((card: CardTypes, idx: number) => (
            <Grid key={idx} size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6 }}>
              <ProjectCard {...card} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </motion.div>
  );
}
