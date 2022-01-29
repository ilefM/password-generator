import "styled-components";
declare module "styled-components" {
    export interface DefaultTheme {
        background: string;
        lightBackground: string;
        text: {
            fontColor: string;
            fontFamily: string;
            fontSize: string;
        };
        palette: {
            common: {
                black: string;
                white: string;
            };
            primary: string;
            secondary: string;
            button: string;
            cardBackground: string;
        };
        mobile: string;
    }
}
