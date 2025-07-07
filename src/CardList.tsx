import cards from "./cardInfo";
import { MediaCard } from "./MediaCard";
import type { CardTypes } from "./MediaCard";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";

export default function CardList() {
  const theme = useTheme();
  const isMobile = useMediaQuery("(min-width: 300px)");
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      <Box
        sx={{
          height: "100%",
          width: "100%",
          flexDirection: "column",
          justifyContent: { xl: "space-around" },
          alignItems: "center",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: theme.palette.warning.contrastText,
            mt: 10,
            mb: 5,
            textAlign: "center",
            fontWeight: 400,
          }}
        >
          My Projects
        </Typography>

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
              <MediaCard {...card} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </motion.div>
  );
}
