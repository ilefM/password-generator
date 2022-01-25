import React from "react";
import {GlobalStyle} from "./GlobalStyle";
import Generator from "./components/Generator";
import {ThemeProvider} from "@mui/material/styles";
import {NordTheme} from "./themes/NordTheme";

function App() {
    return (
        <ThemeProvider theme={NordTheme}>
            <GlobalStyle />
            <Generator />
        </ThemeProvider>
    );
}

export default App;
