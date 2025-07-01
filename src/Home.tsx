import { Box, Button, Grid, Typography } from "@mui/material";
import { iconImageSrcs } from "./images";
import { aboutItems } from "./info";
import Heading from "./Heading";
import { Description } from "@mui/icons-material";
import CodeIcon from "@mui/icons-material/Code";

export default function Home() {
  const icons = iconImageSrcs;
  return (
    <Box>
      <Grid container spacing={10} sx={{ mt: 10 }}>
        <Grid size={{ xs: 12, md: 4 }}>
          <Heading headingText="About me" />
        </Grid>
        <Grid size={{ md: 8, xs: 12 }}>
          <div style={{ marginRight: "20px" }}>
            {aboutItems.map((item, idx) => (
              <Box display={"flex"}>
                <CodeIcon sx={{ color: "#c1121f", margin: 1, padding: 0.1 }} />
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
              </Box>
            ))}
          </div>
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
            variant="h4"
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
          <div
            style={{
              display: "flex",

              justifyContent: "flex-start",
            }}
          >
            {icons.map((src, idx) => (
              <Box
                key={idx}
                component="img"
                src={src}
                alt=""
                sx={{
                  width: { xs: 28, sm: 48 },
                  height: { xs: 28, sm: 48 },
                  marginRight: "10px",
                }}
              />
            ))}
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}
