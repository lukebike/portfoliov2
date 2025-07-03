import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Heading({ headingText }: { headingText: string }) {
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <Box
      sx={{
        textAlign: isMobile ? "center" : "left",
        ...(isMobile ? {} : { marginLeft: "40px" }),
      }}
    >
      <Typography
        variant={isMobile ? "h3" : "h2"}
        sx={{
          display: "inline-block",
          fontWeight: "400",
          textAlign: isMobile ? "center" : "left",
          borderBottom: "solid #00BCD4 2px",
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
