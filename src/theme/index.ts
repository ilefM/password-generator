import {DefaultTheme} from "styled-components";
import {colors} from "./colors";

export const NordTheme: DefaultTheme = {
    text: {
        primary: {
            fontColor: colors.darkBlue,
            fontFamily: "Inter",
            fontSize: "23px",
        },
        secondary: {
            fontColor: colors.white,
            fontFamily: "RobotoMono",
            fontSize: "17px",
        },
    },
    palette: {
        primary: colors.darkBlue,
        secondary: colors.okayBlue,
        error: colors.red,
        background: colors.white,
        dark: colors.darkBlue,
    },
    mobile: "768px",
};
