import {DefaultTheme} from "styled-components";
import {colors} from "./colors";

export const Theme: DefaultTheme = {
    text: {
        primary: {
            fontColor: colors.white,
            fontFamily: "Inter",
            fontSize: "18px",
        },
    },
    palette: {
        primary: colors.greenLight,
        secondary: colors.greenDark,
        background: colors.black,
        cardBackground: colors.blueBlack,
        light: colors.white,
        sliderBackground: colors.grey,
    },
    mobile: "680px",
};
