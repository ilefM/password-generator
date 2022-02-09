import "styled-components";
declare module "styled-components" {
    export interface DefaultTheme {
        text: {
            primary: {
                fontColor: string;
                fontFamily: string;
                fontSize: string;
            };
        };
        palette: {
            primary: string;
            secondary: string;
            background: string;
            cardBackground: string;
            light: string;
            sliderBackground: string;
        };
        mobile: string;
    }
}
