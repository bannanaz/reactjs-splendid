import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import "./style.css";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ExploreIcon from "@mui/icons-material/Explore";

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
      <BottomNavigation
        sx={{
          backgroundColor: "#258A70",
          span: {
            fontFamily: "Poppins",
          },
        }}
        showLabels
      >
        <BottomNavigationAction
          component={Link}
          to={ROUTES.FIND}
          label="Hitta pryl"
          value="find"
          icon={<ExploreIcon />}
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
