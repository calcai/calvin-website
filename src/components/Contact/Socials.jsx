import { IconButton, ThemeProvider } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import Theme from '../../Theme';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";


const Socials = () => {
    return (
        <div className="centered" id = "socials">
            <div className = "container-sm">
                <div className='row'>
                    <div className = "col-sm" id = "centered">
                        <ThemeProvider theme = {Theme}>
                            <IconButton size = "large" onClick = {() => {window.location.href = "https://www.linkedin.com/in/cai-calvin/"}}>
                                <LinkedInIcon fontSize="large" color = "secondary"/>
                            </IconButton>
                        </ThemeProvider>
                    </div>
                    <div className = "col-sm" id = "centered">
                        <ThemeProvider theme = {Theme}>
                            <IconButton size = "large" onClick = {() => {window.location.href = "https://github.com/calcai"}}>
                                <GitHubIcon fontSize="large" color = "secondary"/>
                            </IconButton>
                        </ThemeProvider>
                    </div>
                    <div className = "col-sm" id = "centered">
                        <ThemeProvider theme = {Theme}>
                            <IconButton size = "large" onClick = {() => {window.location.href = "https://twitter.com/_calcai"}}>
                                <TwitterIcon fontSize="large" color = "secondary"/>
                            </IconButton>
                        </ThemeProvider>
                    </div>
                    <div className = "col-sm" id = "centered">
                        <ThemeProvider theme = {Theme}>
                            <IconButton size = "large" onClick = {() => {window.location = "mailto:cyc44@case.edu"}}>
                                <EmailIcon fontSize="large" color = "secondary"/>
                            </IconButton>
                        </ThemeProvider>
                    </div>
                </div>
            </div>
        </div>
      )
}

export default Socials