import * as React from 'react';
import Card from '@mui/material/Card';
import { Grid } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
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
    <div className = "cards" id = "centered">
        <ThemeProvider theme = {Theme}>
        <Card sx={{ maxHeight: 260, maxWidth: 630, display: 'flex'}}>
            <CardMedia
                component = "img"
                sx={{ width: 260 }}
                image= {projectphoto3}
                title="WordStat"
            />
            <Box sx = {{display: 'flex', flexDirection: 'column', maxWidth: 370, minWidth: 370}}>
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
                        Created program to read .TXT files, convert entire text into a hash map, and find patterns, including word frequencies and collocations.<br/>
                        Created and implemented my own HashMap class.<br/>
                        Used key-value pairs to determine properties of each text file.
                    </Typography>
                </CardContent>
                <Grid
                    container
                    alignItems="center"
                    justifyContent="center"
                >
                    <Tooltip title = "Open GitHub Repository">
                        <IconButton color = "secondary" onClick={()=> {window.open("https://github.com/calcai/WordStat", "_blank")}}>
                            <GitHubIcon/>
                        </IconButton>
                    </Tooltip>
                </Grid>
            </Box>
        </Card>
        </ThemeProvider>
    </div>
  );
}