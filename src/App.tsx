import React from "react";
import {ThemeProvider} from "styled-components";
import Layout from "./containers/Layout";
import GlobalStyles from "./GlobalStyle";
import {Theme} from "./theme";

const App = () => {
    return (
        <ThemeProvider theme={Theme}>
            <GlobalStyles />
            <Layout />
        </ThemeProvider>
    );
};

export default App;
