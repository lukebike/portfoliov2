import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Header({ headerText }: { headerText: string }) {
  const isMobile = useMediaQuery("(max-width:600px)");
  const theme = useTheme();
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
          fontWeight: "300",
          textAlign: { xs: "center", lg: "left", md: "center" },
          whiteSpace: "nowrap",
          borderBottom: "solid 2px",
          borderBottomColor: theme.palette.primary.main,
          height: "70px",
          flexShrink: 0,
          pb: 0.5,
          px: 0.2,
        }}
      >
        {headerText}
      </Typography>
    </Box>
  );
}
