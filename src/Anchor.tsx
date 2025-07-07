import { useTheme } from "@mui/material";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router";
export default function Anchor({
  anchorText,
  anchorLink = "",
}: {
  anchorText: string;
  anchorLink: string;
}) {
  const navigate = useNavigate();
  const theme = useTheme();
  // const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
  //   if (anchorLink.startsWith("#")) {
  //     e.preventDefault();
  //     const hash = anchorLink.startsWith("#") ? anchorLink : `#${anchorLink}`;
  //     if (window.location.hash === hash) {
  //       window.location.hash = "";
  //       setTimeout(() => {
  //         window.location.hash = hash;
  //       }, 0);
  //     } else {
  //       window.location.hash = hash;
  //     }
  //   }
  // };

  return (
    <Button
      sx={{
        color: theme.palette.warning.contrastText,
        fontWeight: "normal",
        backgroundColor: "transparent",
        border: "none",
        cursor: "pointer",
        fontSize: "1rem",
        padding: 1,
        mx: 1,
        position: "relative",
        textDecoration: "none",
        "&::after": {
          content: '""',
          display: "block",
          position: "absolute",
          left: 0,
          bottom: 0,
          width: 0,
          height: "2px",
          background: theme.palette.secondary.main,
          transition: "width 0.2s linear",
        },
        "&:hover::after": {
          width: "100%",
        },
        "&:hover": {
          textDecoration: "none",
          backgroundColor: "transparent",
        },
        "&:active": {
          backgroundColor: "transparent",
        },
      }}
      onClick={() => navigate(`/${anchorLink}`, { viewTransition: true })}
    >
      {anchorText}
    </Button>
  );
}
