import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import { BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";


const theme = createTheme({
    palette: {
        primary: {
            main: "#708075",
        },
        secondary: {
            main: "#E6B437",
        },
        tertiary: {
            main: '#4F5F73',
        },
    },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ThemeProvider theme={theme}>

        <BrowserRouter>
            <App />
        </BrowserRouter>

    </ThemeProvider>
);