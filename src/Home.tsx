import { Box, Button, Grid, Typography } from "@mui/material";
import { iconImageSrcs } from "./images";
import { aboutItems } from "./info";

export default function Home() {
  const icons = iconImageSrcs;
  return (
    <Box>
      <Grid container spacing={10} sx={{ mt: 10 }}>
        <Grid size={{ xs: 12, md: 4 }}>
          <Typography
            variant="h2"
            sx={{
              borderBottom: "solid #00BCD4 3px",
              height: "70px",
              flexShrink: 0,
            }}
          >
            About me
          </Typography>
        </Grid>
        <Grid size={{ md: 8, xs: 12 }}>
          <ul style={{ textAlign: "center", marginRight: "20px" }}>
            {aboutItems.map((item, idx) => (
              <li
                style={{
                  margin: "5px",
                  flexShrink: "1",
                  overflowWrap: "break-word",
                }}
                key={idx}
              >
                {item}
              </li>
            ))}
          </ul>
        </Grid>
        <Grid size={{ md: 4, xs: 12 }}>
          <Typography
            variant="h2"
            sx={{
              borderBottom: "solid #00BCD4 3px",
              height: "70px",
            }}
          >
            Resumé
          </Typography>
        </Grid>
        <Grid size={{ md: 8, xs: 12 }}>
          <Typography variant="h4" sx={{ textAlign: "center" }}>
            You can check out my resumé using the button below.
          </Typography>
          <Button variant="outlined">Resumé</Button>
        </Grid>
        <Grid size={{ md: 4, xs: 12 }}>
          <Typography
            variant="h2"
            sx={{
              borderBottom: "solid #00BCD4 3px",
              height: "70px",
            }}
          >
            Skills
          </Typography>
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
