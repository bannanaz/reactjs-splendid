import React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";

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
        fontWeight: "700",
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
        fontWeight: "600",
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
