import React from "react";
import {GlobalStyle} from "./GlobalStyle";
import Generator from "./components/Generator";
import {ThemeProvider} from "@mui/material/styles";
import theme from "./themes";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Generator />
        </ThemeProvider>
    );
}

export default App;
