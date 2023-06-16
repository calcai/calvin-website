import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import projectphoto1 from "../../img/projectphoto1.jpg"
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import IconButton from '@mui/material/IconButton';
import Theme from '../Theme';
import { ThemeProvider } from '@emotion/react';
import Tooltip from '@mui/material/Tooltip';
import { DiReact, DiJavascript1, DiHtml5, DiCss3 } from 'react-icons/di';

export default function Card1() {
  return (
    <div className = "cards">
      <ThemeProvider theme = {Theme}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image= {projectphoto1}
            title="Wordle Clone"
          />
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
          <CardActions>
            <Tooltip title = "Open GitHub Repository">
              <IconButton color = "secondary" onClick={()=> {window.location.href = "https://github.com/calcai/wordle-clone"}}>
                <GitHubIcon/>
              </IconButton>
            </Tooltip>
            <Tooltip title = "Open Page">
              <IconButton color = "secondary" onClick={()=> {window.location.href = "https://calcai.github.io/wordle-clone/"}}>
                <OpenInNewIcon/>
              </IconButton>
            </Tooltip>
          </CardActions>
        </Card>
      </ThemeProvider>
    </div>
  );
}