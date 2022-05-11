import { DefaultTheme } from "styled-components";
import { colors } from "./colors";

export const Theme: DefaultTheme = {
    text: {
        primary: {
            fontColor: colors.black,
            fontFamily: "Inter",
            fontSize: "18px",
        },
        secondary: {
            fontColor: colors.white,
        },
    },
    palette: {
        primary: colors.blue,
        secondary: colors.orange,
        background: colors.black,
        cardBackground: colors.white,
        switchesBackground: colors.whiteBlue,
        sliderBackground: colors.lightBlue,
    },
    mobile: "680px",
};
