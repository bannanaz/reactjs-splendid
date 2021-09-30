import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../../styles/theme";

import Topnav from "../Topnav";
import Layout from "../Layout";
import Bottomnav from "../Bottomnav";
import Find from "../../pages/Find";
import Home from "../../pages/Home";
import Create from "../../pages/Create";

import * as ROUTES from "../../constants/routes";

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Layout>
            <Route exact path={ROUTES.HOME} component={Home} />
            <Route exact path={ROUTES.FIND} component={Find} />
            <Route exact path={ROUTES.CREATE} component={Create} />
          </Layout>
        </Router>
      </ThemeProvider>
    </>
  );
};

export default App;
