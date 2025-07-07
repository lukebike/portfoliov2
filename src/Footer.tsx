import { Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 2,
      }}
    >
      {" "}
      © 2025 Luke Salem — Full-Stack Developer
    </Box>
  );
}
