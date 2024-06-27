import { createStitches } from "@stitches/react";

export const {
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,
    config,
} = createStitches({
    theme: {
        colors: {
            principal: "#00875F",
            light: "#00B37E",
            grayBackground: "#121214",
            grayElements: "#202024",
            grayIcon: "#202024",
            grayOpacity: "#20202490",
            grayText: "#C4C4CC",
            grayTitle: "#E1E1E6",
            white: "#FFFFFF",
        }
    }
})