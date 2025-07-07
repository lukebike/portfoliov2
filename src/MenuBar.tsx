import Anchor from "./Anchor";
import AppBar from "@mui/material/AppBar";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
// import logo from "/ls-high-resolution-logo.png";
import { Box, Button, Toolbar, Typography, useTheme } from "@mui/material";

export default function MenuBar({
  navTexts,
  mode,
  setMode,
}: {
  navTexts: string[];
  mode: "light" | "dark";
  setMode: React.Dispatch<React.SetStateAction<"light" | "dark">>;
}) {
  const theme = useTheme();
  return (
    // <Box className="navbar shadow-sm">
    //   <Box className="navbar-start">
    //     <Anchor id={"btn1"} anchorText={"Luke Salem"} anchorLink={"#Home"} />
    //   </Box>
    //   <Box className="navbar-center hidden lg:flex">
    //     <ul className="menu menu-horizontal px-1">
    //       {navTexts.map((n, idx) => (
    //         <li key={idx}>
    //           <Anchor id={`btn-${idx}`} anchorText={n} anchorLink={`#${n}`} />
    //         </li>
    //       ))}
    //     </ul>
    //   </Box>
    //   <Box className="navbar-end">
    //     <Anchor
    //       id={"btn-6"}
    //       anchorText={"Contact Me!"}
    //       anchorLink={"#Contact"}
    //     />
    //   </Box>
    // </Box>
    <Box sx={{ display: "flex" }}>
      <AppBar
        component="nav"
        enableColorOnDark
        color="transparent"
        position="static"
        sx={{
          border: "none",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          {/* <IconButton size="large" edge="start" color="inherit" sx={{ mr: 2 }}>
            <Avatar>
              <img src={logo}></img>
            </Avatar>
          </IconButton> */}
          <Typography variant="h6" component="div">
            <Anchor key="btn-0" anchorText="Luke Salem" anchorLink="home" />
          </Typography>
          <Box sx={{ display: "flex", flexGrow: 1, justifyContent: "center" }}>
            {navTexts.map((n, idx) => (
              <Anchor key={`btn-${idx + 1}`} anchorText={n} anchorLink={n} />
            ))}
          </Box>
          <Box sx={{ marginLeft: "auto" }}>
            <Button
              sx={{
                color: theme.palette.warning.contrastText,
                transition:
                  "background-color 0.5s cubic-bezier(0.4,0,0.2,1), color 0.5s cubic-bezier(0.4,0,0.2,1)",
                "&:hover": {
                  backgroundColor: "transparent",
                  color: theme.palette.secondary.main,
                },
              }}
              onClick={() => setMode(mode === "dark" ? "light" : "dark")}
            >
              {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
            </Button>
            {/* <Anchor
              key="btn-4"
              anchorText="Contact Me!"
              anchorLink="#Contact"
            /> */}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
