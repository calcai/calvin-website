import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import projectphoto6 from "../../img/projectphoto6.jpg"
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import IconButton from '@mui/material/IconButton';
import Theme from '../../Theme';
import { ThemeProvider } from '@emotion/react';
import Tooltip from '@mui/material/Tooltip';
import { DiPython } from 'react-icons/di';
import { Grid } from '@mui/material';

export default function Card6() {
  return (
    <div className = "cards" id = "centered">
        <ThemeProvider theme = {Theme}>
        <Card sx={{ maxHeight: 260, maxWidth: 630, display: 'flex'}}>
            <CardMedia
            component = "img"
            sx={{ width: 260 }}
            image= {projectphoto6}
            title="NBA Scores on this Day"
            />
            <Box sx = {{display: 'flex', flexDirection: 'column', maxWidth: 370, minWidth: 370}}>
            <CardContent>
            <ThemeProvider theme = {Theme}>
                <Typography  variant="h5" component="div" color = "white">
                    NBA Scores on this Day
                </Typography>
                <Typography gutterBottom color = "secondary">
                    <DiPython size = "25px"/>
                </Typography>
            </ThemeProvider>
                <Typography variant="body2" color="white">
                Scraped basketball-reference.com using Beautiful Soup to provide basketball scores on any given day. <br/>
                Developed simple Flask application to offer a user-friendly UI for the application.
                </Typography>
            </CardContent>
            <Grid
                container
                alignItems="center"
                justifyContent="center"
            >
                <Tooltip title = "Open GitHub Repository">
                    <IconButton color = "secondary" onClick={()=> {window.open("https://github.com/calcai/BasketballScores", "_blank")}}>
                        <GitHubIcon/>
                    </IconButton>
                </Tooltip>
                <Tooltip title = "Open Page">
                    <IconButton color = "secondary" onClick={()=> {window.open("https://basketball-scores-chi.vercel.app/", "_blank")}}>
                        <OpenInNewIcon/>
                    </IconButton>
                </Tooltip>
            </Grid>
            </Box>
        </Card>
        </ThemeProvider>
    </div>
  );
}