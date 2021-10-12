import React from "react";
import styled from "styled-components";
import { ListItemText, Divider } from "@material-ui/core";
import { ListItemButton } from "@mui/material";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Icon from "@material-ui/core/Icon";
import List from "@mui/material/List";

const CategoryList = styled(List)`
  width: 100%;
  background-color: #f2f9f6;
`;

const CategoryListItemButton = styled(ListItemButton)`
  background-color: #ffffff;
  border-radius: 4px;
`;

const StyledDivider = styled(Divider)`
  background-color: #f2f9f6;
  height: 5px;
`;

const StyledAvatar = styled(Avatar)`
  background-color: #0a8f7a;
`;

const StyledArrowIcon = styled(Icon)`
  color: #0a8f7a;
  font-size: 2.5rem;
`;

const Categories = () => {
  let categories = [
    {
      id: "1",
      icon: "sports_tennis",
      category: "sport & fritid",
      path: "/sports",
    },
    { id: "2", icon: "build", category: "verktyg", path: "/tools" },
  ];

  return (
    <CategoryList>
      {categories.map((category) => (
        <div key={category.id}>
          <CategoryListItemButton sx={{ boxShadow: 2 }}>
            <ListItemAvatar>
              <StyledAvatar>
                <Icon>{category.icon}</Icon>
              </StyledAvatar>
            </ListItemAvatar>
            <ListItemText
              primary={category.category}
              primaryTypographyProps={{
                variant: "subtitle1",
              }}
            />
            <StyledArrowIcon>keyboard_arrow_right</StyledArrowIcon>
          </CategoryListItemButton>
          <StyledDivider />
        </div>
      ))}
    </CategoryList>
  );
};

export default Categories;
