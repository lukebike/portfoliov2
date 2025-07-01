import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Heading({ headingText }: { headingText: string }) {
  return (
    <Box sx={{ textAlign: "left", marginLeft: "40px" }}>
      <Typography
        variant="h2"
        sx={{
          display: "inline-block",
          fontWeight: "400",
          textAlign: "left",
          borderBottom: "solid #00BCD4 3px",
          height: "70px",
          flexShrink: 0,
          pb: 0.5,
          px: 0.2,
        }}
      >
        {headingText}
      </Typography>
    </Box>
  );
}
