import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import projectphoto3 from "../../img/projectphoto3.jpg"
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';
import Theme from '../../Theme';
import { ThemeProvider } from '@emotion/react';
import Tooltip from '@mui/material/Tooltip';
import { DiJava } from 'react-icons/di';

export default function Card3() {
  return (
    <div className = "cards">
        <ThemeProvider theme = {Theme}>
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
            sx={{ height: 140 }}
            image= {projectphoto3}
            title="WordStat"
            />
            <CardContent>
            <ThemeProvider theme = {Theme}>
                <Typography  variant="h5" component="div" color = "white">
                    WordStat
                </Typography>
                <Typography gutterBottom color = "secondary">
                    <DiJava size = "25px"/>
                </Typography>
            </ThemeProvider>
                <Typography variant="body2" color="white">
                    Created program to read .TXT files, convert entire text into a hash map, and find patterns, including word frequencies and collocations.
                    Created and implemented my own HashMap class.
                    Used key-value pairs to determine properties of each text file.
                </Typography>
            </CardContent>
            <CardActions>
            <Tooltip title = "Open GitHub Repository">
                <IconButton color = "secondary" onClick={()=> {window.location.href = "https://github.com/calcai/WordStat"}}>
                    <GitHubIcon/>
                </IconButton>
            </Tooltip>
            </CardActions>
        </Card>
        </ThemeProvider>
    </div>
  );
}