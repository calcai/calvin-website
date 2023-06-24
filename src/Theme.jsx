import { createTheme } from '@mui/material/styles'; 

const Theme = createTheme({
    palette: {
      primary: {
        main: '#ADD8E6;',
        contrastText:'#ADD8E6;'
      },
      secondary: {
        main: '#ADD8E6;'
      },
      background:{
        paper: "#4682B4"
      },
    },
    spacing: 6
});

export default Theme;
