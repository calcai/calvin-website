import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Theme from './Theme';
import { ThemeProvider } from '@emotion/react';
import '../index.css';

export default function ButtonAppBar() {
  return (
    <ThemeProvider theme = {Theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none'}}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Button color="inherit" id = "menu-button">About</Button>
            <Button color="inherit" id= "menu-button">Projects</Button>
            <Button color="inherit" id = "menu-button">Contact</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}