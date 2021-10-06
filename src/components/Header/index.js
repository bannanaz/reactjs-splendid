import * as React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

import { makeStyles } from "@material-ui/core";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    backgroundColor: theme.palette.secondary.dark,
    justifyContent: "center",
  },
  link: {
    color: theme.palette.secondary.contrastText,
    textDecoration: "none",
    fontWeight: 600,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1, display: { xs: "flex", sm: "none" } }}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Link className={classes.link} to={ROUTES.HOME}>
            <Typography
              variant="h5"
              fontFamily="Poppins"
              fontWeight="600"
              noWrap
              component="div"
              sx={{ display: { xs: "block", sm: "none" } }}
            >
              splendid
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Header;
