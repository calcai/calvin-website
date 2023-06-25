import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import projectphoto2 from "../../img/projectphoto2.jpg"
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import IconButton from '@mui/material/IconButton';
import Theme from '../../Theme';
import { ThemeProvider } from '@emotion/react';
import Tooltip from '@mui/material/Tooltip';
import { DiReact, DiJavascript1, DiHtml5, DiCss3 } from 'react-icons/di';

export default function Card2() {
  return (
    <div className = "cards">
      <ThemeProvider theme = {Theme}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image= {projectphoto2}
            title="RateMyDorm"
          />
          <CardContent>
          <ThemeProvider theme = {Theme}>
            <Typography  variant="h5" component="div" color = "white">
              RateMyDorm
            </Typography>
            <Typography gutterBottom color = "secondary">
              <DiReact size = "25px"/><DiJavascript1 size = "25px"/><DiHtml5 size = "25px"/><DiCss3 size = "25px"/>
            </Typography>
          </ThemeProvider>
            <Typography variant="body2" color="white">
              Built dorm rating website using AWS Amplify and React to allow students to review, search, and post images.
              Collected user requirements to develop features in a Scrum team of six fellow students.
              Test using username: calvin.cai@case.edu, password: Test123!
            </Typography>
          </CardContent>
          <CardActions>
            <Tooltip title = "Open Page">
              <IconButton color = "secondary" onClick={()=> {window.open("https://staging.d2tkpyqoad8nwq.amplifyapp.com/", "_blank")}}>
                <OpenInNewIcon/>
              </IconButton>
            </Tooltip>
          </CardActions>
        </Card>
      </ThemeProvider>
    </div>
  );
}