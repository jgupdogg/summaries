'use client'

import { setCookie } from "cookies-next";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import type { ThemeProviderProps } from "next-themes/dist/types";
import { useEffect } from "react";
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../ui/theme';

function AppThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider enableColorScheme {...props}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <AppThemeProviderHelper />
        {children}
      </MuiThemeProvider>
    </NextThemesProvider>
  );
}

function AppThemeProviderHelper() {
  const { theme: currentTheme } = useTheme();

  useEffect(() => {
    if (currentTheme) {
      setCookie("__theme__", currentTheme, {
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365),
        path: "/",
      });
    }
  }, [currentTheme]);

  return null;
}

export default AppThemeProvider;