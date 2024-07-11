import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  typography: {
    // fontFamily: 'Questrial, Arial, sans-serif', // Ensure fallback fonts are provided
    // fontFamily: 'alatsi-regular, Arial, sans-serif', // Ensure fallback fonts are provided

    h1: {
      fontSize: "3rem",
      color: "blue",
      fontFamily: 'Aldrich, Arial, sans-serif', // Ensure fallback fonts are provided
    },
    body1: {
      fontFamily: "Questrial, Arial, sans-serif", // Ensure fallback fonts are provided
      color: "red",
    },
  },
  palette: {
    primary: {
      main: "#ffffff",
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
