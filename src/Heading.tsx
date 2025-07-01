import Typography from "@mui/material/Typography";

export default function Heading({ headingText }: { headingText: string }) {
  return (
    <Typography
      variant="h2"
      sx={{
        display: "inline-block",
        textAlign: "left",
        borderBottom: "solid #00BCD4 3px",
        height: "70px",
        flexShrink: 0,
        pb: 0.5,
        px: 2,
      }}
    >
      {headingText}
    </Typography>
  );
}
