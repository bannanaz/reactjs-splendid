import * as React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

import { makeStyles } from "@material-ui/core";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
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

const Topnav = () => {
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
            <Button
              className={classes.button}
              component={Link}
              to={ROUTES.FIND}
              variant="text"
              size="large"
              color="inherit"
              sx={{
                fontFamily: "Poppins",
                fontWeight: "600",
                textTransform: "lowercase",
              }}
              startIcon={<SearchIcon />}
            >
              Sök pryl
            </Button>
            <Button
              className={classes.button}
              component={Link}
              to={ROUTES.CREATE}
              variant="text"
              size="large"
              color="inherit"
              sx={{
                fontFamily: "Poppins",
                fontWeight: "600",
                textTransform: "lowercase",
              }}
              startIcon={<AddCircleOutlineIcon />}
            >
              Skapa annons
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Topnav;
