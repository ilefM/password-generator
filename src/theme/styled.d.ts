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
            };
        };
        palette: {
            primary: string;
            secondary: string;
            background: string;
            cardBackground: string;
            switchesBackground: string;
            sliderBackground: string;
        };
        mobile: string;
    }
}
