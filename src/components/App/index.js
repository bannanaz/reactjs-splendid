import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../../styles/theme";
import Container from "@mui/material/Container";

import Ad from "../Ad";
import Layout from "../Layout";
import Find from "../../pages/Find";
import Home from "../../pages/Home";
import Create from "../../pages/Create";

import * as ROUTES from "../../constants/routes";

const App = () => {
  return (
    <>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Layout>
            <Container>
              <Route exact path={ROUTES.HOME} component={Home} />
              <Route exact path={ROUTES.FIND} component={Find} />
              <Route exact path={ROUTES.CREATE} component={Create} />
              <Route exact path="/ad/:id" component={Ad} />
            </Container>
          </Layout>
        </Router>
      </MuiThemeProvider>
    </>
  );
};

export default App;
