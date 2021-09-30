import { makeStyles } from "@material-ui/core";
import React from "react";
import Nav from "../Nav";

const useStyles = makeStyles((theme) => ({
  page: {
    background: theme.palette.primary.light,
    width: "100%",
  },
}));

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <div>
      <Nav />
      <div className={classes.page}>{children}</div>
    </div>
  );
};

export default Layout;
