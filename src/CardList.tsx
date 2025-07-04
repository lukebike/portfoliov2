import { useEffect, useState } from "react";
import cards from "./cardInfo";
import { MediaCard } from "./MediaCard";
import type { CardTypes } from "./MediaCard";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export default function CardList() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Box
      sx={{
        mt: 6,
        transition: "opacity 0.7s ease-in",
        opacity: mounted ? 1 : 0,
      }}
    >
      <Grid container spacing={4} justifyContent="center" alignItems="stretch">
        {cards.map((card: CardTypes, idx: number) => (
          <Grid key={idx} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <MediaCard {...card} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
