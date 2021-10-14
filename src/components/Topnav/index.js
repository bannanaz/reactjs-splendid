import * as React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import "../../styles/styles.css";

import { Button, makeStyles } from "@material-ui/core";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import SearchIcon from "@mui/icons-material/Search";
import { TopnavLogo } from "../DesignElements";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    backgroundColor: theme.palette.secondary.dark,
  },
  link: {
    color: theme.palette.secondary.contrastText,
    textDecoration: "none",
    fontWeight: 600,
  },
}));

const Topnav = () => {
  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" } }}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Link className={classes.link} to={ROUTES.HOME}>
            <TopnavLogo sx={{ display: { sm: "block" } }}>splendid</TopnavLogo>
          </Link>
          <Box sx={{ flexGrow: 1 }} />
          <Box component="nav">
            <Button
              variant="text"
              color="primary"
              component={Link}
              to={ROUTES.FIND}
              startIcon={<SearchIcon />}
            >
              sök pryl
            </Button>
            <Button
              variant="text"
              color="primary"
              component={Link}
              to={ROUTES.CREATE}
              startIcon={<AddCircleOutlineIcon />}
            >
              skapa annons
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Topnav;
