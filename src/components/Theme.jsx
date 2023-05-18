import { createTheme } from '@mui/material/styles'; 

const Theme = createTheme({
    palette: {
      primary: {
        main: '#181818',
        contrastText:'#4682B4'
      },
      secondary: {
        main: '#404040'
      },
    },
});

export default Theme;
