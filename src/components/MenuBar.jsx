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
import logo from "../img/logo2.png"

export default function ButtonAppBar() {

  const navigate = useNavigate();

  return (
    <ThemeProvider theme = {Theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none'}}>
          <Toolbar>
            <Box style = {{flexGrow: 1}} sx={{ flexGrow: 1, maxHeight: 50 }} onClick = {() => (navigate("/"))}>
              <Button><img src = {logo} className = "logo"></img></Button>
            </Box>
            <Button color="inherit" id = "menu-button" onClick={() => navigate("/about")}>About</Button>
            <Button color="inherit" id= "menu-button" onClick = {() => navigate("/experience")}>Experience & Projects</Button>
            <Button color="inherit" id = "menu-button" onClick = {() => navigate("/contact")}>Contact</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}