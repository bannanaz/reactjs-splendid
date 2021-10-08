import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#F2F9F6",
      main: "#0a8f7a",
      dark: "#09806d",
      contrastText: "#fff",
    },
    secondary: {
      main: "#F88472",
      dark: "#E37969",
      contrastText: "#fff",
    },

    info: {
      main: "#FFFFFF",
    },

    text: {
      primary: "#5F5F5F",
      secondary: "#0a8f7a",
    },
  },

  typography: {
    useNextVariants: true,
    fontFamily: ["Poppins", "sans-serif"].join(","),

    h1: {
      fontSize: 24,
      fontWeight: 600,
    },
    h2: {
      fontSize: 18,
      fontWeight: 600,
      color: "#09806d",
    },
    h3: {
      fontSize: 20,
      fontWeight: "500",
      color: "#5F5F5F",
      lineHeight: "1.8rem",
    },

    h4: {
      fontSize: 14,
      fontWeight: "500",
      color: "#5F5F5F",
    },
  },
});

/*--- Props overrides -----*/

theme.props = {
  MuiTextField: {
    variant: "filled",
    fullWidth: true,
    required: true,
    margin: "normal",
  },

  MuiSelect: {
    root: {
      required: true,
      autoWidth: true,
    },
  },
};

/*--- Style overrides -----*/

theme.overrides = {
  MuiButton: {
    root: {
      textTransform: "none",
      fontSize: "16px",
      fontWeight: "600",
      border: "none",
    },
    containedPrimary: {
      "&:hover": {
        backgroundColor: "#0B9882",
      },
    },

    textPrimary: {
      color: "#FFFFFF",
    },

    textSecondary: {
      fontStyle: "italic",
      textDecoration: "underline",
    },

    endIcon: {
      color: "#FFFFFF",
    },
    startIcon: {
      color: "#FFFFFF",
    },
  },

  MuiTextField: {
    root: {
      backgroundColor: "#FFFFFF",
      color: "#FFFFFF",
    },
  },

  MuiInputLabel: {
    root: {
      color: "#5F5F5F",
      fontSize: 14,
    },
    containedPrimary: {
      "&:hover": {
        backgroundColor: "#0B9882",
      },
    },
  },

  MuiSelect: {
    root: {
      color: "#5F5F5F",
      fontSize: 14,
      width: 200,
    },
    label: {
      padding: 18,
    },
  },

  MuiPaper: {
    root: {
      margin: 20,
    },
  },
};

export default theme;
