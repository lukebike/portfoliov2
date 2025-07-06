import { useEffect, useState } from "react";
import cards from "./cardInfo";
import { MediaCard } from "./MediaCard";
import type { CardTypes } from "./MediaCard";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material";

export default function CardList() {
  const [mounted, setMounted] = useState(false);
  const theme = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Box
      sx={{
        transition: "opacity 0.7s ease-in",
        opacity: mounted ? 1 : 0,
        minHeight: { lg: "80vh", md: "80vh" },
        display: { lg: "flex" },
        width: "100%",
        flexDirection: "column",
        justifyContent: { xl: "space-around" },
        alignItems: "center",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          color: theme.palette.primary.main,
          fontWeight: "bold",
          mt: { xs: 10 },
          mb: { lg: 20, xs: 10 },
          textAlign: "center",
        }}
      >
        My Projects
      </Typography>
      <Grid
        container
        spacing={{ lg: 5, xs: 4 }}
        justifyContent="space-around"
        sx={{
          flexDirection: "row",
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
  );
}
