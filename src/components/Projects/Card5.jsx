import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import projectphoto5 from "../../img/projectphoto5.jpg"
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';
import Theme from '../../Theme';
import { ThemeProvider } from '@emotion/react';
import Tooltip from '@mui/material/Tooltip';
import { DiPython } from 'react-icons/di';

export default function Card5() {
  return (
    <div className = "cards" id = "centered">
        <ThemeProvider theme = {Theme}>
        <Card sx={{ maxHeight: 260, maxWidth: 630, display: 'flex'}}>
            <CardMedia
            component = "img"
            sx={{ width: 260 }}
            image= {projectphoto5}
            title="Spotify Artist Information Retriever"
            />
            <Box sx = {{display: 'flex', flexDirection: 'column', maxWidth: 370, minWidth: 370}}>
            <CardContent>
            <ThemeProvider theme = {Theme}>
                <Typography  variant="h5" component="div" color = "white">
                    Artist Information Retriever
                </Typography>
                <Typography gutterBottom color = "secondary">
                    <DiPython size = "25px"/>
                </Typography>
            </ThemeProvider>
                <Typography variant="body2" color="white">
                Utilized the Spotify API to access information about individual artists. <br/>
                Retrieved Spotify popularity score, followers, genre, top 10 popular songs, discography, and similar artists according to user input.
                </Typography>
            </CardContent>
            <CardActions>
            <Tooltip title = "Open GitHub Repository">
                <IconButton color = "secondary" onClick={()=> {window.open("https://github.com/calcai/spotifyartistapp", "_blank")}}>
                    <GitHubIcon/>
                </IconButton>
            </Tooltip>
            </CardActions>
            </Box>
        </Card>
        </ThemeProvider>
    </div>
  );
}