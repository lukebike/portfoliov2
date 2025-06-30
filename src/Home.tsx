import { Box, Button, Typography } from "@mui/material";
import { iconImageSrcs } from "./images";
import { aboutItems } from "./info";

export default function Home() {
  const icons = iconImageSrcs;
  console.log(icons);
  return (
    <Box sx={{ mt: 30 }}>
      <Box
        sx={{
          display: "flex",
          mt: "50px",
          height: "200px",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexBasis: "auto",
        }}
      >
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
        <ul style={{ textAlign: "right", marginRight: "20px" }}>
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
      </Box>
      <Box
        sx={{
          display: "flex",
          mt: "50px",
          height: "200px",
          flexBasis: "auto",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            borderBottom: "solid #00BCD4 3px",
            height: "70px",
          }}
        >
          Resumé
        </Typography>
        <Typography variant="h4">
          You can check out my resumé using the button below.
          <Button variant="outlined">Resumé</Button>
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          mt: "50px",
          height: "200px",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            borderBottom: "solid #00BCD4 3px",
            height: "70px",
          }}
        >
          Skills
        </Typography>
        <ul
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "15px",
            marginLeft: "auto",
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
        </ul>
      </Box>
    </Box>
  );
}
