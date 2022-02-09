import React from "react";
import {ThemeProvider} from "styled-components";
import Footer from "./components/Footer";
import Card from "./components/Card";
import GlobalStyles from "./GlobalStyle";
import {Theme} from "./theme";

const App = () => {
    return (
        <ThemeProvider theme={Theme}>
            <GlobalStyles />
            <Card />
            <Footer />
        </ThemeProvider>
    );
};

export default App;
