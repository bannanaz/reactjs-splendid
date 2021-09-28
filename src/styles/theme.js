import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#F2F9F6",
      main: "#2AB7A1",
      dark: "#0B9882",
      contrastText: "#fff",
    },
    secondary: {
      main: "#F88472",
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
});
export default theme;
