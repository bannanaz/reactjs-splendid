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

export const IconBtn = ({ children, endIcon, type }) => {
  return (
    <Button
      variant="conatined"
      size="large"
      type={type}
      endIcon={endIcon}
      sx={{
        backgroundColor: "#0a8f7a",
        color: "#FFFFFF",
        fontFamily: "Poppins",
        fontWeight: 600,
        textTransform: "none",
        border: "none",
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

IconBtn.propTypes = {
  endIcon: PropTypes.string,
  type: PropTypes.string,
};

export const TextBtn = ({ children }) => {
  return (
    <Button
      variant="text"
      size="large"
      sx={{
        color: "#E37969",
        fontStyle: "italic",
        textDecoration: "underline",
        fontWeight: "800",
      }}
    >
      {children}
    </Button>
  );
};

export const TopnavBtn = ({ children, component, to, startIcon }) => {
  return (
    <Button
      component={component}
      to={to}
      startIcon={startIcon}
      variant="text"
      size="large"
      color="inherit"
      sx={{
        fontFamily: "Poppins",
        fontWeight: "700",
        textTransform: "lowercase",
      }}
    >
      {children}
    </Button>
  );
};

TopnavBtn.propTypes = {
  component: PropTypes.string,
  to: PropTypes.string,
  startIcon: PropTypes.string,
};

export const TopnavLogo = ({ children, sx }) => {
  return (
    <Typography component="div" variant="h1" noWrap sx={sx}>
      {children}
    </Typography>
  );
};

TopnavBtn.propTypes = {
  sx: PropTypes.string,
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
        noWrap: "true",
      }}
      subheaderTypographyProps={{
        variant: "h4",
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
