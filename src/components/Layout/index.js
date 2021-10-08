import { makeStyles } from "@material-ui/core";
import React from "react";
import Header from "../Header";
import Topnav from "../Topnav";
import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../../styles/theme";

const useStyles = makeStyles((theme) => ({
  page: {
    background: theme.palette.primary.light,
    width: "100%",
  },
}));

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <Header />
        <Topnav />
        <div className={classes.page}>{children}</div>
      </div>
    </MuiThemeProvider>
  );
};

export default Layout;
