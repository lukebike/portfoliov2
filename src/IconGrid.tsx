import Box from "@mui/material/Box";
import { iconComponents } from "./images";
import { useTheme } from "@mui/material";

export default function IconGrid() {
  const theme = useTheme();
  return (
    <>
      {iconComponents.map((IconComponent, idx) => (
        <Box
          key={idx}
          sx={{
            width: { xs: "20%", sm: "18%" },
            height: { xs: "60px", sm: 48 },
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "10px",
            transition: "color 0.3s",
            "&:hover": {
              color: theme.palette.secondary.main,
            },
          }}
        >
          <IconComponent
            width="100%"
            height="100%"
            style={{ display: "block" }}
            aria-label={`icon-${idx}`}
          />
        </Box>
      ))}
    </>
  );
}
