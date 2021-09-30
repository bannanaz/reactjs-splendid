import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

const Nav = () => (
  <div>
    <AppBar>
      <Toolbar>
        <Typography>splendid</Typography>
      </Toolbar>
      <Toolbar>
        <Typography>sök annons</Typography>
      </Toolbar>
    </AppBar>
    <ul>
      <li>
        <Link to={ROUTES.HOME}>Hem</Link>
      </li>
      <li>
        <Link to={ROUTES.FIND}>Sök annons</Link>
      </li>
      <li>
        <Link to={ROUTES.CREATE}>Skapa annons</Link>
      </li>
    </ul>
  </div>
);

export default Nav;
