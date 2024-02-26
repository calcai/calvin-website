import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import projectphoto8 from "../../img/projectphoto8.png"
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';
import Theme from '../../Theme';
import { ThemeProvider } from '@emotion/react';
import Tooltip from '@mui/material/Tooltip';
import { DiPython } from 'react-icons/di';
import { SiPandas, SiNumpy } from "react-icons/si";
import { Grid } from '@mui/material';

export default function Card8() {
  return (
    <div className = "cards" id = "centered">
        <ThemeProvider theme = {Theme}>
        <Card sx={{ maxHeight: 260, maxWidth: 630, display: 'flex'}}>
            <CardMedia
            component = "img"
            sx={{ width: 260 }}
            image= {projectphoto8}
            title="Iris K-Means Clustering and Neural Network"
            />
            <Box sx = {{display: 'flex', flexDirection: 'column', maxWidth: 370, minWidth: 370}}>
            <CardContent>
            <ThemeProvider theme = {Theme}>
                <Typography  variant="h5" component="div" color = "white">
                    K-Means & Neural Network
                </Typography>
                <Typography gutterBottom color = "secondary">
                    <DiPython size = "25px"/>
                    <SiPandas size = "20px"/><> </>
                    <SiNumpy size = "20px"/>
                </Typography>
            </ThemeProvider>
                <Typography variant="body2" color="white">
                Plotted and classified three species of iris using tools including numPy, pandas, matplotlib.  <br/>
                Wrote a generalized k-means function that inputs a dataframe and cluster number to identifies groups. <br/>
                Also classified with a neural network and used gradient descent to find best fit weights.
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