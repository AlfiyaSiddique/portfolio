import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
          main: "#fff"
        },
        secondary: {
              main: '#433878',
            light: '#f5f7ff'
        }
    },
    typography: {
        fontFamily: "'Crimson Text', serif, 'Noto Sans KR', sans-serif"
   },
});

export default theme
