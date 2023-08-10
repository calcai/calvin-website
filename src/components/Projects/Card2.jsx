import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import projectphoto2 from "../../img/projectphoto2.jpg"
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import IconButton from '@mui/material/IconButton';
import Theme from '../../Theme';
import { ThemeProvider } from '@emotion/react';
import Tooltip from '@mui/material/Tooltip';
import { DiReact, DiJavascript1, DiHtml5, DiCss3 } from 'react-icons/di';

export default function Card2() {
  return (
    <div className = "cards" id = "centered">
      <ThemeProvider theme = {Theme}>
        <Card sx={{ maxHeight: 260, maxWidth: 630, display: 'flex'}}>
          <CardMedia
            component = "img"
            sx={{ width: 260 }}
            image= {projectphoto2}
            title="RateMyDorm"
          />
          <Box sx = {{display: 'flex', flexDirection: 'column', maxWidth: 370, minWidth: 370}}>
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
                Built dorm rating website using AWS Amplify, React to allow students to review, search, and post images.<br/>
                Collected user requirements to develop features in a Scrum team of six.<br/>
                Test using username: calvin.cai@case.edu, password: testacct
              </Typography>
            </CardContent>
            <CardActions>
              <Tooltip title = "Open Page">
                <IconButton color = "secondary" onClick={()=> {window.open("https://staging.d2tkpyqoad8nwq.amplifyapp.com/", "_blank")}}>
                  <OpenInNewIcon/>
                </IconButton>
              </Tooltip>
            </CardActions>
          </Box>
        </Card>
      </ThemeProvider>
    </div>
  );
}