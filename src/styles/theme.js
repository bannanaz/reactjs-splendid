import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#F2F9F6",
      main: "#0a8f7a",
      dark: "#09806d",
      contrastText: "#fff",
    },
    secondary: {
      main: "#F88472",
      dark: "#E37969",
      contrastText: "#fff",
    },

    text: {
      primary: "#5F5F5F",
      secondary: "#363434",
    },
  },

  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
});

export default theme;
