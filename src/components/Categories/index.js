import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ListItemText, Divider, Avatar, List } from "@material-ui/core";
import { ListItemAvatar, ListItemButton } from "@mui/material";
import Icon from "@material-ui/core/Icon";

const CategoryList = styled(List)`
  width: 100%;
  background-color: #f2f9f6;
  padding: 0px;
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
      category: "Sport & fritid",
      path: "Sport & fritid",
    },
    { id: "2", icon: "build", category: "Verktyg", path: "Verktyg" },
  ];

  return (
    <CategoryList>
      {categories.map((category) => (
        <div key={category.id}>
          <CategoryListItemButton
            sx={{ boxShadow: 2 }}
            component={Link}
            to={`/${category.path}`}
          >
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
