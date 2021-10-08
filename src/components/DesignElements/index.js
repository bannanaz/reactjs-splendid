import React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { Card, CardHeader, CardMedia, Typography } from "@material-ui/core";

export const BottomBtn = ({ children, target, rel, href }) => {
  return (
    <Button
      type="button"
      variant="conatined"
      size="large"
      target={target}
      rel={rel}
      href={href}
      sx={{
        backgroundColor: "#0a8f7a",
        color: "#FFFFFF",
        fontFamily: "Poppins",
        fontWeight: 600,
        fontSize: "16px",
        textTransform: "none",
        border: "none",
        width: 300,
        mb: 10,
        "&:hover": {
          backgroundColor: "#0B9882",
        },
      }}
    >
      {children}
    </Button>
  );
};

BottomBtn.propTypes = {
  target: PropTypes.string,
  rel: PropTypes.string,
  href: PropTypes.string,
};

export default BottomBtn;

export const TopnavLogo = ({ children }) => {
  return (
    <Typography component="div" variant="h1" noWrap>
      {children}
    </Typography>
  );
};

export const SmallCard = ({ children }) => {
  return (
    <Card
      elevation={2}
      sx={{
        textOverflow: "ellipsis",
      }}
    >
      {children}
    </Card>
  );
};

export const SmallCardHeader = ({ children, title, subheader }) => {
  return (
    <CardHeader
      title={title}
      subheader={subheader}
      titleTypographyProps={{
        variant: "h3",
      }}
      subheaderTypographyProps={{
        variant: "h4",
        color: "textPrimary",
      }}
      sx={{
        textOverflow: "ellipsis",
        color: "#5F5F5F",
      }}
    />
  );
};

SmallCardHeader.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
};

export const SmallCardMedia = ({ image, title, alt }) => {
  return (
    <CardMedia
      image={image}
      title={title}
      alt={alt}
      component="img"
      height="220"
    />
  );
};

SmallCardMedia.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  alt: PropTypes.string,
};
