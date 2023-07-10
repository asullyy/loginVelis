import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  StyledEngineProvider,
} from "@mui/material";

import "./global.css";

const muiTheme = createTheme({
  palette: {
    secondary: {
      main: "rgba(127,70,182,1)",
      dark: "rgba(67,10,122,1)",
      light: "rgba(127,70,182,1)",
    },
    primary: {
      main: "rgba(41,182,246,1)",
      light: "rgba(66,237,255,1)",
      dark: "rgba(2,136,209,1)",
    },
    mode: "light",
    text: {
      primary: "rgba(52,52,52,1)",
      secondary: "rgba(52,52,52,0.7)",
      disabled: "rgba(67,67,79,0.5)",
    },
  },
  typography: { fontFamily: "Roboto" },
});

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </StyledEngineProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
