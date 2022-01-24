import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "hsl(180, 29%, 50%)",
      contrastText: "hsl(180, 52%, 96%)",
    },
    secondary: {
      main: "hsl(180, 14%, 20%)",
    },
    info: {
      main: "hsl(180, 31%, 95%)",
      contrastText: "hsl(180, 29%, 50%)",
    },
    background: {
      default: "hsl(180, 52%, 96%)",
      paper: "hsl(180, 52%, 96%)",
    },
  },
  typography: {
    fontFamily: "Spartan, sans-serif",
    h6: {
      fontWeight: 700,
      fontSize: "1rem",
    },
    body2: {
      fontWeight: 500,
      fontSize: "0.75rem",
    },
    button: {
      textTransform: "none",
      fontWeight: 700,
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
