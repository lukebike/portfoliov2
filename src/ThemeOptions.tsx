import type { ThemeOptions } from "@mui/material/styles";

export const darkThemeOptions: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: "#00BCD4",
    },
    secondary: {
      main: "#c1121f",
    },
    warning: {
      main: "#780000",
      contrastText: "#fff",
    },
    error: {
      main: "#c1121f",
    },
    background: {
      default: "#121212",
    },
  },
};

export const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#c1121f",
    },
    secondary: {
      main: "#00BCD4",
    },
    warning: {
      main: "rgb(0, 131, 148)",
      contrastText: "#000",
    },
    error: {
      main: "#00BCD4",
    },
    background: {
      default: "#FDF0D5",
      paper: "#FDF0D5",
    },
    info: {
      main: "#00BCD4",
    },
  },
};
