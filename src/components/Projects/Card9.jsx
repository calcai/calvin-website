import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import projectphoto9 from "../../img/projectphoto9.png"
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';
import Theme from '../../Theme';
import { ThemeProvider } from '@emotion/react';
import Tooltip from '@mui/material/Tooltip';
import { DiJava } from 'react-icons/di';
import { Grid } from '@mui/material';

export default function Card9() {
  return (
    <div className = "cards" id = "centered">
        <ThemeProvider theme = {Theme}>
        <Card sx={{ maxHeight: 260, maxWidth: 630, display: 'flex'}}>
            <CardMedia
            component = "img"
            sx={{ width: 260 }}
            image= {projectphoto9}
            title="Iris K-Means Clustering and Neural Network"
            />
            <Box sx = {{display: 'flex', flexDirection: 'column', maxWidth: 370, minWidth: 370}}>
            <CardContent>
            <ThemeProvider theme = {Theme}>
                <Typography  variant="h5" component="div" color = "white">
                    Java Generics Matrix
                </Typography>
                <Typography gutterBottom color = "secondary">
                    <DiJava size = "25px"/>
                </Typography>
            </ThemeProvider>
                <Typography variant="body2" color="white">
                Leveraged functional and object oriented principles to represent Java generic matrices, which Java API’s matrix does not support <br/>
                Built functionality including merging, creating, modifying, and matrices, as well as a generic indexing system<br/>
                Utilized NavigableMap class and streams to manage code complexity
                </Typography>
            </CardContent>
            <Grid
                container
                alignItems="center"
                justifyContent="center"
            >
                <Tooltip title = "Open GitHub Repository">
                    <IconButton color = "secondary" onClick={()=> {window.open("https://github.com/calcai/IrisData", "_blank")}}>
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