import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Theme from '../Theme';
import { ThemeProvider } from '@emotion/react';
import '../index.css';
import { useNavigate } from 'react-router-dom';

export default function ButtonAppBar() {

  const navigate = useNavigate();

  return (
    <ThemeProvider theme = {Theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none'}}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} onClick = {() => (navigate("/"))}>
              CC
            </Typography>
            <Button color="inherit" id = "menu-button" onClick={() => navigate("/about")}>About</Button>
            <Button color="inherit" id= "menu-button" onClick = {() => navigate("/projects")}>Projects</Button>
            <Button color="inherit" id = "menu-button" onClick = {() => navigate("/contact")}>Contact</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}