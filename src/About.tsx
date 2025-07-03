import { Box, Button, Grid, Typography, useMediaQuery } from "@mui/material";
import { iconImageSrcs } from "./images";
import { aboutItems } from "./info";
import Heading from "./Heading";
import { Description } from "@mui/icons-material";
import CodeIcon from "@mui/icons-material/Code";
import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const icons = iconImageSrcs;
  const isMobile = useMediaQuery("(max-width:600px)");

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <Box
      sx={{ opacity: mounted ? 1 : 0, transition: "opacity 0.8s ease-in-out" }}
    >
      <Grid container spacing={isMobile ? 5 : 10} sx={{ mt: 10 }}>
        <Grid size={{ xs: 12, md: 4 }}>
          <Heading headingText="About me" />
        </Grid>
        <Grid size={{ md: 8, xs: 12 }}>
          <Box style={{ marginRight: "20px" }}>
            {aboutItems.map((item, idx) => (
              <Box display={"flex"} sx={{ flexDirection: "row" }}>
                <CodeIcon
                  sx={{
                    color: "#c1121f",
                    marginRight: 2,
                    marginBottom: 1,
                    marginTop: isMobile ? 2 : 1,
                    padding: 0.1,
                  }}
                />
                {isMobile ? (
                  <Typography
                    variant="body1"
                    style={{ marginTop: "15px" }}
                    key={idx}
                  >
                    {item}
                  </Typography>
                ) : (
                  <Typography
                    variant="h6"
                    sx={{
                      textAlign: "left",
                      fontWeight: "300",
                      margin: "5px",
                      flexShrink: "1",
                      overflowWrap: "break-word",
                    }}
                    key={idx}
                  >
                    {item}
                  </Typography>
                )}
              </Box>
            ))}
          </Box>
        </Grid>
        <Grid size={{ md: 4, xs: 12 }}>
          <Heading headingText="Resumé" />
        </Grid>
        <Grid
          size={{ md: 8, xs: 12 }}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", md: "flex-start" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography
            variant={isMobile ? "h6" : "h4"}
            sx={{ width: "100%", textAlign: { xs: "center", md: "left" } }}
          >
            You can check out my resumé using the button below.
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-start" },
              mt: 2,
              width: "100%",
            }}
          >
            <Button
              variant="outlined"
              sx={{ color: "#c1121f", borderColor: "#c1121f" }}
              endIcon={<Description />}
              href="/CV.pdf"
              download
            >
              Resumé
            </Button>
          </Box>
        </Grid>
        <Grid size={{ md: 4, xs: 12 }}>
          <Heading headingText="Skills" />
        </Grid>
        <Grid size={{ md: 8, xs: 12 }}>
          <Box
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "flex-start",
            }}
          >
            {icons.map((src, idx) => (
              <Box
                key={idx}
                component="img"
                src={src}
                alt={`${src}-icon`}
                sx={{
                  width: { xs: 28, sm: 48 },
                  height: { xs: 28, sm: 48 },
                  marginRight: "10px",
                }}
              />
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
