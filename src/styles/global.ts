import { globalCss } from "../../stitches.config";

export const globalStyles = globalCss({
    '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
    },
    body: {
        fontFamily: 'Roboto',
        backgroundColor: '$grayBackground',
        width: '100%',
        minHeight: '100vh'
    }

})

