import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import cocktailImg from "./assets/cocktailproject.png";
import { Button, Box, useMediaQuery } from "@mui/material";

type CardTypes = {
  img?: string;
  cardTitle: string;
  cardText: string;
  anchorText: string;
  anchorLink: string;
};

function MediaCard({
  img = cocktailImg,
  cardTitle,
  cardText,
  anchorText,
  anchorLink,
}: CardTypes) {
  return (
    <Card
      sx={{
        position: "relative",
        width: { xs: 350, md: 384, lg: 500 },

        backgroundColor: "#1e1e1e",
        minHeight: "400",
        overflow: "hidden",
        boxShadow: 6,
      }}
    >
      <CardMedia
        sx={{
          height: "100%",
          width: "100%",
          objectFit: "scale-down",
          filter: "brightness(0.5)",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1,
        }}
        image={img}
        title={cardTitle}
      />
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          minHeight: 400,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          p: 4,
          textAlign: "center",
          height: "100%",
        }}
      >
        <CardContent
          sx={{
            flex: "1 1 auto",
            overflowY: "auto",
            maxHeight: 210,
            width: "100%",
            mb: 2,
          }}
        >
          <Typography
            gutterBottom
            variant="h4"
            sx={{ fontWeight: "bold", mb: 2 }}
          >
            {cardTitle}
          </Typography>
          <Typography variant="body1" sx={{ color: "#e0e0e0" }}>
            {cardText}
          </Typography>
        </CardContent>
        <>
          <Button
            href={anchorLink}
            variant="contained"
            sx={{
              marginTop: "10px",
              fontWeight: "bold",
              fontSize: "1.0rem",
              px: 2,
              py: 1,
              letterSpacing: 1,
              backgroundColor: "#c1121f",
              transition:
                "background-color 0.5s cubic-bezier(0.4,0,0.2,1), color 0.5s cubic-bezier(0.4,0,0.2,1)",
              "&:hover": {
                backgroundColor: "#780000",
                color: "black",
              },
              width: { xs: "70%", sm: "auto" },
            }}
          >
            {anchorText}
          </Button>
        </>
      </Box>
    </Card>
  );
}

export { MediaCard };
export type { CardTypes };
