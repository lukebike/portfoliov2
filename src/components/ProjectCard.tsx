import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import cocktailImg from "../assets/cocktailproject.png";
import { Button, Box, useTheme } from "@mui/material";

type CardTypes = {
  img?: string;
  cardTitle: string;
  cardText: string;
  anchorText: string;
  anchorLink: string;
};

function ProjectCard({
  img = cocktailImg,
  cardTitle,
  cardText,
  anchorText,
  anchorLink,
}: CardTypes) {
  const theme = useTheme();
  // const isLargeWindow = useMediaQuery()
  return (
    <Card
      sx={{
        position: "relative",
        width: "100%",
        justifyContent: { lg: "center" },
        display: "inline-block",
        backgroundColor: "#1e1e1e",
        minHeight: "400",
        overflow: "hidden",
        boxShadow: 6,
        transition: "box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out",
        "&:hover": {
          boxShadow: 12,
          transform: "translateY(-4px)",
        },
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
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          textAlign: "center",
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
            sx={{ fontWeight: "300", mb: 2 }}
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
              backgroundColor: theme.palette.secondary.main,
              transition:
                "background-color 0.5s cubic-bezier(0.4,0,0.2,1), color 0.5s cubic-bezier(0.4,0,0.2,1)",
              "&:hover": {
                backgroundColor: theme.palette.warning.main,
                color: theme.palette.warning.contrastText,
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

export { ProjectCard };
export type { CardTypes };
