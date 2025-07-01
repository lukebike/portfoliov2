import { Box, Button, Grid, Typography } from "@mui/material";
import { iconImageSrcs } from "./images";
import { aboutItems } from "./info";
import Heading from "./Heading";
import { Description } from "@mui/icons-material";

export default function Home() {
  const icons = iconImageSrcs;
  return (
    <Box>
      <Grid container spacing={15} sx={{ mt: 10 }}>
        <Grid size={{ xs: 12, md: 4 }}>
          <Heading headingText="About me" />
        </Grid>
        <Grid size={{ md: 8, xs: 12 }}>
          <div style={{ marginRight: "20px" }}>
            {aboutItems.map((item, idx) => (
              <Typography
                variant="h6"
                style={{
                  margin: "5px",
                  flexShrink: "1",
                  overflowWrap: "break-word",
                }}
                key={idx}
              >
                {item}
              </Typography>
            ))}
          </div>
        </Grid>
        <Grid size={{ md: 4, xs: 12 }}>
          <Heading headingText="Resumé" />
        </Grid>
        <Grid size={{ md: 8, xs: 12 }}>
          <Typography variant="h4" sx={{ textAlign: "center" }}>
            You can check out my resumé using the button below.
          </Typography>
          <Button
            variant="outlined"
            sx={{ mt: 2 }}
            endIcon={<Description />}
            href="/CV.pdf"
            download
          >
            Resumé
          </Button>
        </Grid>
        <Grid size={{ md: 4, xs: 12 }}>
          <Heading headingText="Skills" />
        </Grid>
        <Grid size={{ md: 8, xs: 12 }}>
          <div
            style={{
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            {icons.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt=""
                style={{ width: 48, height: 48, marginLeft: "10px" }}
              />
            ))}
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}
