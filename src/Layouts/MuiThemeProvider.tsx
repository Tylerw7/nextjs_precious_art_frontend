"use client";




import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";





export default function MuiThemeProvider({ children }: { children: React.ReactNode }) {
  
const darkMode = false;

const palleteType  = darkMode ? 'dark' : 'light'


const theme = createTheme({
  palette: {
    mode: palleteType,
    background: {
        default: (palleteType === 'light') ? '#eaeaea' : '#121212'
    }
  },
});



  return <ThemeProvider theme={theme}>
    <CssBaseline />
    <Box
        sx={{
            minHeight: '100vh',
            background: darkMode ? '#121212' : '#eaeaea'
        }}>
    {children}
    </Box>
    </ThemeProvider>;
}
