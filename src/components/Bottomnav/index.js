import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import "./style.css";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import SearchIcon from "@mui/icons-material/Search";

const Bottomnav = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1,
        display: { xs: "block", sm: "none" },
      }}
    >
      <BottomNavigation sx={{ backgroundColor: "#09806d" }} showLabels>
        <BottomNavigationAction
          component={Link}
          to={ROUTES.FIND}
          label="Sök pryl"
          value="find"
          icon={<SearchIcon />}
        />
        <BottomNavigationAction
          component={Link}
          to={ROUTES.CREATE}
          label="Skapa annons"
          value="create"
          icon={<AddCircleOutlineIcon />}
        />
      </BottomNavigation>
    </Box>
  );
};
export default Bottomnav;
