import { ThemeProvider } from "styled-components";

const theme = {
    color: {
        primary: 'blue',
        secondary: 'red',
    },
};

export const Theme = ({children}) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme;