import { orange } from "@mui/material/colors"
import { createTheme, ThemeProvider } from "@mui/system"

const theme = createTheme({
    status: {
        danger: orange[500]
    }
})

export const AppThemeProvider = ({children}) => {

    return (
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
    )
}