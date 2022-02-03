import "styled-components";
declare module "styled-components" {
    export interface DefaultTheme {
        text: {
            primary: {
                fontColor: string;
                fontFamily: string;
                fontSize: string;
            };
            secondary: {
                fontColor: string;
                fontFamily: string;
                fontSize: string;
            };
        };
        palette: {
            primary: string;
            secondary: string;
            error: string;
            background: string;
            dark: string;
        };
        mobile: string;
    }
}
