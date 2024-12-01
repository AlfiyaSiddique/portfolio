import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
          main: "#fff"
        },
        secondary: {
              main: '#433878',
            light: '#1c1f29'
        }
    },
    typography: {
        fontFamily: "'Crimson Text', serif, 'Noto Sans KR', sans-serif"
   },
});

export default theme
