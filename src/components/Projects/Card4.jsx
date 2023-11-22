import * as React from 'react';
import Card from '@mui/material/Card';
import { Grid } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import projectphoto4 from "../../img/projectphoto4.jpg"
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';
import Theme from '../../Theme';
import { ThemeProvider } from '@emotion/react';
import Tooltip from '@mui/material/Tooltip';
import { DiJava } from 'react-icons/di';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

export default function Card4() {
  return (
    <div className = "cards" id = "centered">
        <ThemeProvider theme = {Theme}>
        <Card sx={{ maxHeight: 260, maxWidth: 630, display: 'flex'}}>
            <CardMedia
            component = "img"
            sx={{ width: 260 }}
            image= {projectphoto4}
            title="Portfolio Website"
            />
            <Box sx = {{display: 'flex', flexDirection: 'column', maxWidth: 370, minWidth: 370}}>
                <CardContent>
                <ThemeProvider theme = {Theme}>
                    <Typography  variant="h5" component="div" color = "white">
                        Portfolio Website
                    </Typography>
                    <Typography gutterBottom color = "secondary">
                        <DiJava size = "25px"/>
                    </Typography>
                </ThemeProvider>
                    <Typography variant="body2" color="white">
                        Created the website that you're currently on using React.js, HTML, and CSS. <br/>
                        Utilized Material UI components to stylize, and Email.js to handle contact form.<br/> 
                        Layout created using bootstrap.
                    </Typography>
                </CardContent>
                <Grid
                container
                alignItems="center"
                justifyContent="center"
                >
                    <Tooltip title = "Open GitHub Repository">
                        <IconButton color = "secondary" onClick={()=> {window.open("https://github.com/calcai/calvin-website", "_blank")}}>
                            <GitHubIcon/>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title = "Open Page">
                        <IconButton color = "secondary" onClick={()=> {window.open("https://calvincai.me", "_blank")}}>
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