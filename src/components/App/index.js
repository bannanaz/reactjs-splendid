import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../../styles/theme";

import Nav from "../Nav";
import Find from "../Find";
import Home from "../Home";
import Create from "../Create";

import * as ROUTES from "../../constants/routes";

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <div>
            <Nav />
            <Route exact path={ROUTES.HOME} component={Home} />
            <Route exact path={ROUTES.FIND} component={Find} />
            <Route exact path={ROUTES.CREATE} component={Create} />
          </div>
        </Router>
      </ThemeProvider>
    </>
  );
};

export default App;
