import * as React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

import { makeStyles } from "@material-ui/core";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import SearchIcon from "@mui/icons-material/Search";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    backgroundColor: theme.palette.secondary.dark,
  },
  link: {
    color: theme.palette.secondary.contrastText,
    textDecoration: "none",
    fontWeight: 600,
  },
  button: {
    color: theme.palette.secondary.contrastText,
    textDecoration: "none",
  },
}));

export default function Nav() {
  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" } }}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Link className={classes.link} to={ROUTES.HOME}>
            <Typography
              variant="h6"
              fontFamily="Poppins"
              fontWeight="600"
              noWrap
              component="div"
              sx={{ display: { sm: "block" } }}
            >
              splendid
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 1 }} />
          <Box>
            <IconButton
              className={classes.button}
              component={Link}
              to={ROUTES.FIND}
              size="large"
              color="inherit"
            >
              <SearchIcon />
            </IconButton>
            <IconButton
              className={classes.button}
              component={Link}
              to={ROUTES.CREATE}
              size="large"
              color="inherit"
            >
              <AddCircleOutlineIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
