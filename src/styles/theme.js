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
      secondary: "#0a8f7a",
    },
  },

  typography: {
    useNextVariants: true,
    fontFamily: ["Poppins", "sans-serif"].join(","),

    h1: {
      fontSize: 24,
      fontWeight: 600,
    },
    h2: {
      fontSize: 18,
      fontWeight: 600,
      color: "#0a8f7a",
    },
    h3: {
      fontSize: 20,
      fontWeight: "500",
      color: "#5F5F5F",
      lineHeight: "1.8rem",
    },

    h4: {
      fontSize: 14,
      fontWeight: "500",
      color: "#5F5F5F",
    },
  },
});

export default theme;
