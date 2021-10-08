import * as React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import "./style.css";
import Paper from "@mui/material/Paper";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import SearchIcon from "@mui/icons-material/Search";

const Bottomnav = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <BottomNavigation
      onChange={handleChange}
      value={value}
      showLabels
      sx={{
        backgroundColor: "#0a8f7a",
        display: { xs: "block", sm: "none" },
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1,
      }}
    >
      <BottomNavigationAction
        component={Link}
        to={ROUTES.FIND}
        label="Sök pryl"
        icon={
          <SearchIcon
            sx={{
              color: "#ffffff",
            }}
          />
        }
      />
      <BottomNavigationAction
        label="Skapa annons"
        component={Link}
        to={ROUTES.CREATE}
        icon={
          <AddCircleOutlineIcon
            sx={{
              color: "#ffffff",
            }}
          />
        }
      />
    </BottomNavigation>
  );
};
export default Bottomnav;
