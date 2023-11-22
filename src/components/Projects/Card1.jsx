import * as React from 'react';
import Card from '@mui/material/Card';
import { Grid } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import projectphoto1 from "../../img/projectphoto1.jpg"
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import IconButton from '@mui/material/IconButton';
import Theme from '../../Theme';
import { ThemeProvider } from '@emotion/react';
import Tooltip from '@mui/material/Tooltip';
import { DiReact, DiJavascript1, DiHtml5, DiCss3 } from 'react-icons/di';

export default function Card1() {

  return (
    <div className = "cards" id = "centered">
      <ThemeProvider theme = {Theme}>
        <Card sx={{ maxHeight: 260, maxWidth: 630, display: 'flex'}}>
          <CardMedia
            component = "img"
            sx={{ width: 260 }}
            image= {projectphoto1}
            title="Wordle Clone"
          />
          <Box sx = {{display: 'flex', flexDirection: 'column', maxWidth: 370, minWidth: 370}}>
            <CardContent>
            <ThemeProvider theme = {Theme}>
              <Typography  variant="h5" component="div" color = "white">
                Wordle Clone
              </Typography>
              <Typography gutterBottom color = "secondary">
                <DiReact size = "25px"/><DiJavascript1 size = "25px"/><DiHtml5 size = "25px"/><DiCss3 size = "25px"/>
              </Typography>
            </ThemeProvider>
              <Typography variant="body2" color="white">
                Created a clone of the popular New York Times game, Wordle using React.js, HTML, and CSS.
              </Typography>
            </CardContent>
            <Grid
                container
                alignItems="center"
                justifyContent="center"
            >
              <Tooltip title = "Open GitHub Repository">
                <IconButton color = "secondary" onClick={() => window.open("https://github.com/calcai/wordle-clone", '_blank')}>
                  <GitHubIcon/>
                </IconButton>
              </Tooltip>
              <Tooltip title = "Open Page">
                <IconButton color = "secondary" onClick={()=> {window.open("https://calcai.github.io/wordle-clone/", "_blank")}}>
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