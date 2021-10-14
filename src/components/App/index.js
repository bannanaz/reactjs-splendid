import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";

import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../../styles/theme";
import { makeStyles } from "@material-ui/core";
import Container from "@mui/material/Container";

import Ad from "../../pages/Ad";
import Find from "../../pages/Find";
import Home from "../../pages/Home";
import Create from "../../pages/Create";
import FilteredAds from "../../pages/FilteredAds";

import * as ROUTES from "../../constants/routes";
import Header from "../Header";
import Topnav from "../Topnav";

const useStyles = makeStyles((theme) => ({
  main: {
    background: "#F2F9F6",
    width: "100%",
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Header />
          <Topnav />
          <main className={classes.main}>
            <Container>
              <Route exact path={ROUTES.HOME} component={Home} />
              <Route exact path={ROUTES.FIND} component={Find} />
              <Route exact path={ROUTES.CREATE} component={Create} />
              <Route exact path="/ad/:id" component={Ad} />
              <Route exact path="/category/:category" component={FilteredAds} />
            </Container>
          </main>
        </Router>
      </MuiThemeProvider>
    </>
  );
};

export default App;
