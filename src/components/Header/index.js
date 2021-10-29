import * as React from "react";
import { useHistory } from "react-router-dom";

import { Link, makeStyles } from "@material-ui/core";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    backgroundColor: theme.palette.secondary.dark,
    justifyContent: "center",
  },
  link: {
    color: "white",
    fontWeight: 600,
  },
}));

const Header = () => {
  const history = useHistory();
  const classes = useStyles();
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: { xs: "flex", sm: "none" },
      }}
    >
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Link
            className={classes.link}
            component="button"
            variant="h1"
            underline="none"
            onClick={() =>
              history.push({
                pathname: "/",
              })
            }
          >
            Splendid
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Header;
