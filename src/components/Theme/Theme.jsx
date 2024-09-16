import { createTheme, CssBaseline, responsiveFontSizes, ThemeProvider } from "@mui/material"
import { ComponentOverride } from "./ComponentOVerride"
import { Palette } from "./Palette"

export const ThemeSetup = ({children}) =>{
    let theme = createTheme({
        palette : Palette
    })
    theme = responsiveFontSizes(theme)
    theme.components = ComponentOverride(theme)
    
    return(
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            {children}
        </ThemeProvider>
    )
}