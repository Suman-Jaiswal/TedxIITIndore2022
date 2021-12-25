import React from 'react'
import { Grid,Card} from "@mui/material";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { NavLink, Link } from "react-router-dom";
import "./TalksPage.css"
export default function TalksPage() {
    return (
        // <div>
        //     Talks Page
        //     <iframe width="956" height="538" src="https://www.youtube.com/embed/sCMulrwmN5w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        // </div>
    <Grid container spacing={4}>
    <Grid item xs={0} md={0.5}>
    </Grid>
    <Grid item xs={12} md={5.5}>
      
    <Card style={{padding:'1em',margin:'0.75em'}}>
      <CardActionArea>
    <div className='video-responsive'>
          <iframe width="853" height="480" src="https://www.youtube.com/embed/sCMulrwmN5w" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
    <Grid item xs={12} md={5.5}>
    <Card style={{padding:'2em',margin:'1em'}}>
      <CardActionArea>
        <iframe src="https://www.youtube.com/embed/sCMulrwmN5w" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
    <Grid item xs={0} md={0.5}>
    </Grid>
</Grid>
    )
}
