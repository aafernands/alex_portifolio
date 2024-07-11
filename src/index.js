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
      color: "black",
      textAlign: "center",
      fontFamily: 'Aldrich, Arial, sans-serif', // Ensure fallback fonts are provided
    },
    h5: {
      fontSize: "3rem",
      color: "white",
      textAlign: "center",
      fontFamily: 'Aldrich, Arial, sans-serif', // Ensure fallback fonts are provided
    },
    h6: {
      color: "#25291C",
      textAlign: "left",
      fontFamily: 'Questrial, Arial, sans-serif', // Ensure fallback fonts are provided
    },
    p: {
      color: "#25291C",
      textAlign: "left",
      fontFamily: 'Questrial, Arial, sans-serif', // Ensure fallback fonts are provided
    },
  
    body2: {
      fontFamily: "Questrial, Arial, sans-serif", // Ensure fallback fonts are provided
    },
    button: {
     color: "red" 
    }
  },
  palette: {
    primary: {
      main: '#1976d2', // Custom primary color
    },
    secondary: {
      main: '#dc004e', // Custom secondary color
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '1rem',
          textTransform: 'none',
          padding: '8px 16px',
          borderRadius: '8px',
          
          // Add any other custom styles here
        },
        containedPrimary: {
          backgroundColor: '#E6E49F', // Custom background color for primary contained buttons
          color: '#25291C',
          '&:hover': {
            backgroundColor: '#E3E7D3', // Custom hover color for primary contained buttons
          },
        },
        outlinedSecondary: {
          borderColor: '#dc004e', // Custom border color for secondary outlined buttons
          color: '#dc004e',
          '&:hover': {
            borderColor: '#ff3366', // Custom hover border color for secondary outlined buttons
            color: '#ff3366',
          },
        },
      },
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
