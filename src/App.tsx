import React from "react";
import Generator from "./components/Generator";
import {ThemeProvider} from "@mui/material/styles";
import theme from "./themes";
import {CssBaseline} from "@mui/material";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Generator />
        </ThemeProvider>
    );
}

export default App;
