import experiences from "./Experiences.json"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography'
import Theme from '../../Theme';
import { ThemeProvider } from '@emotion/react';

const exp1 = experiences["experiences"][1];

export default function Experience1() {
  return (
    <div className = "cards" id = "centered">
        <ThemeProvider theme = {Theme}>
            <Card sx={{ minWidth: 630, maxWidth: 630, minHeight: 270 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="secondary" gutterBottom>
                        {exp1["date"]}
                    </Typography>
                    <Typography variant="h5" color = "white" component="div">
                        {exp1["jobtitle"]}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="secondary">
                        {exp1["company"]}
                    </Typography>
                    <Typography variant="body2" color="white">
                        <ul>{exp1["description1"]}</ul>
                        <ul>{exp1["description2"]}</ul>
                        <ul>{exp1["description3"]}</ul>
                    </Typography>
                </CardContent>
            </Card>
        </ThemeProvider>
    </div>
  );
}