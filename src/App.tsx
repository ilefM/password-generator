import React from "react";
import {ThemeProvider} from "styled-components";
import Layout from "./containers/Layout";
import GlobalStyles from "./GlobalStyle";
import {NordTheme} from "./theme";

const App = () => {
    return (
        <ThemeProvider theme={NordTheme}>
            <GlobalStyles />
            <Layout />
        </ThemeProvider>
    );
};

export default App;
