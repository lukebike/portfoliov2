import Typography from "@mui/material/Typography";

export default function Heading({ headingText }: { headingText: string }) {
  return (
    <Typography
      variant="h2"
      sx={{
        borderBottom: "solid #00BCD4 3px",
        height: "70px",
        flexShrink: 0,
      }}
    >
      {headingText}
    </Typography>
  );
}
