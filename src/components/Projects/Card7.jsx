import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import projectphoto7 from "../../img/projectphoto7.jpg"
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';
import Theme from '../../Theme';
import { ThemeProvider } from '@emotion/react';
import Tooltip from '@mui/material/Tooltip';
import { DiPython } from 'react-icons/di';
import { Grid } from '@mui/material';

export default function Card7() {
  return (
    <div className = "cards" id = "centered">
        <ThemeProvider theme = {Theme}>
        <Card sx={{ maxHeight: 260, maxWidth: 630, display: 'flex'}}>
            <CardMedia
            component = "img"
            sx={{ width: 260 }}
            image= {projectphoto7}
            title="8 Puzzle Solver"
            />
            <Box sx = {{display: 'flex', flexDirection: 'column', maxWidth: 370, minWidth: 370}}>
            <CardContent>
            <ThemeProvider theme = {Theme}>
                <Typography  variant="h5" component="div" color = "white">
                    8 Puzzle Solver
                </Typography>
                <Typography gutterBottom color = "secondary">
                    <DiPython size = "25px"/>
                </Typography>
            </ThemeProvider>
                <Typography variant="body2" color="white">
                Implemented 8 puzzle game in Python with two separate search algorithms to solve efficiently. <br/>
                Applied the A* algorithm, with Manhattan Distance heuristic to find optimal moves between states. <br/>
                Utilized a Beam Search algorithm, allowing users to input beam width to manage space complexity.
                </Typography>
            </CardContent>
            <Grid
                container
                alignItems="center"
                justifyContent="center"
            >
                <Tooltip title = "Open GitHub Repository">
                    <IconButton color = "secondary" onClick={()=> {window.open("https://github.com/calcai/8PuzzleAlgorithm", "_blank")}}>
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