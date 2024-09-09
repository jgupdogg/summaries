import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4A90E2', // Your primary light color
    },
    secondary: {
      main: '#2C5282', // Your primary dark color
    },
  },
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          color: '#7A7A7A', // Darker gray for inactive tabs in light mode
          '&.Mui-selected': {
            color: '#4A90E2', // Your primary light color for selected tab
          },
          // Styles for dark mode
          '@media (prefers-color-scheme: dark)': {
            color: '#7a7a7a', // Light gray for inactive tabs in dark mode
            color: '#7a7a7a', // Light gray for inactive tabs in dark mode
            '&.Mui-selected': {
              color: '#2C5282', // Your primary dark color for selected tab
            },
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: '#4A90E2', // Your primary light color for the indicator
          '@media (prefers-color-scheme: dark)': {
            backgroundColor: '#2C5282', // Your primary dark color for the indicator
          },
        },
      },
    },
  },
});

export default theme;