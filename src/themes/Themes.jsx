import {
  createTheme,
  CssBaseline,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material";
import ComponentsOverride from "./ComponentsOverride";
import { Palette } from "./Palette";

export const ThemeSetUp = ({ children }) => {
  let theme = createTheme({
    palette: Palette,
  });
  theme = responsiveFontSizes(theme);
  theme.components = ComponentsOverride(theme);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
