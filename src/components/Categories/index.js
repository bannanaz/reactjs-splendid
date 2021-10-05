import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import SportsTennisIcon from "@mui/icons-material/SportsTennis";
import BuildIcon from "@mui/icons-material/Build";
import "../../styles/styles.css";

const Categories = () => {
  return (
    <List
      sx={{
        width: "100%",
        bgcolor: "background.paper",
      }}
    >
      <ListItem>
        <ListItemAvatar>
          <Avatar
            sx={{
              bgcolor: "#0a8f7a",
            }}
          >
            <SportsTennisIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="sport &amp; fritid"
          primaryTypographyProps={{
            fontFamily: "Poppins",
            color: "#0a8f7a",
            fontWeight: "500",
          }}
        />
      </ListItem>
      <Divider
        sx={{ bgcolor: "#F2F9F6" }}
        style={{
          border: "none",
          height: 4,
        }}
      />
      <ListItem>
        <ListItemAvatar>
          <Avatar
            sx={{
              bgcolor: "#0a8f7a",
            }}
          >
            <BuildIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="verktyg"
          primaryTypographyProps={{
            fontFamily: "Poppins",
            color: "#0a8f7a",
            fontWeight: "500",
          }}
        />
      </ListItem>
    </List>
  );
};

export default Categories;
