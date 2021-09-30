import * as React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

import { makeStyles } from "@material-ui/core";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import MoreIcon from "@mui/icons-material/MoreVert";

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
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Link className={classes.link} to={ROUTES.FIND}>
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
              >
                <SearchIcon />
              </IconButton>
            </Link>
            <Link className={classes.link} to={ROUTES.CREATE}>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <AddCircleOutlineIcon />
              </IconButton>
            </Link>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-haspopup="true"
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
