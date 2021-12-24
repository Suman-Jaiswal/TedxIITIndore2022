import React from 'react'
import { Grid,Card} from "@mui/material";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Speaker1 from "./Speaker1";
import { NavLink, Link } from "react-router-dom";
import img1 from './speakerimages/1.jfif'
import img2 from './speakerimages/2.jpg'
import img3 from './speakerimages/3.jpg'
import img4 from './speakerimages/4.jfif'
export default function SpeakersPage() {
    return (
        <div style={{marginLeft:"40px"}}>
        <h1 style={{textAlign:"center",color:"red",margin:"2cm"}}>SPEAKERS</h1>
      <Grid container spacing={4} >
        <Grid item xs={12} md={4}  >
        <Card sx={{ maxWidth: 345 }} >
        <Link to={'/speaker1'} style={{textDecoration: 'none'}}>
      <CardActionArea style={{textDecoration: 'none'}}>
        <CardMedia
          component="img"
          height="250"
          image={img1}
          alt="err"
          style={{textDecoration: 'none'}}
        />
        <CardContent style={{backgroundColor:"red",textDecoration: 'none'}}>
          <Typography gutterBottom variant="h5" component="div" style={{color:"#282828",fontWeight:"bold"}}>
          Gauranga Das
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{color:"#282828"}}>
          Leader at Govardhan Eco Village and Preacher at ISKCON
          </Typography>
        </CardContent>
      </CardActionArea>
      </Link>
    </Card>
        </Grid>
        <Grid item xs={12} md={4}>
        <Card sx={{ maxWidth: 345 }} >
        <Link to={'/speaker2'} style={{textDecoration: 'none'}}>
      <CardActionArea style={{textDecoration: 'none'}}>
        <CardMedia
          component="img"
          height="250"
          image={img2}
          alt="green iguana"
          style={{textDecoration: 'none'}}
        />
        <CardContent style={{backgroundColor:"red",textDecoration: 'none'}}>
        <Typography gutterBottom variant="h5" component="div" style={{color:"#282828",fontWeight:"bold"}}>
        Karan Chitra Deshmukh
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{color:"#282828"}}>
          Leader at Govardhan Eco Village and Preacher at ISKCON
          </Typography>
        </CardContent>
      </CardActionArea>
      </Link>
    </Card>
        </Grid>
        <Grid item xs={12} md={4}>
        <Card sx={{ maxWidth: 345 }} >
        <Link to={'/speaker3'} style={{textDecoration: 'none'}}>
      <CardActionArea style={{textDecoration: 'none'}}>
        <CardMedia
          component="img"
          height="250"
          image={img3}
          alt="green iguana"
          style={{textDecoration: 'none'}}
        />
        <CardContent style={{backgroundColor:"red",textDecoration: 'none'}}>
        <Typography gutterBottom variant="h5" component="div" style={{color:"#282828",fontWeight:"bold"}}>
        Mahesh Bhat
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{color:"#282828"}}>
          Leader at Govardhan Eco Village and Preacher at ISKCON
          </Typography>
        </CardContent>
      </CardActionArea>
      </Link>
    </Card>
        </Grid>
        <Grid item xs={12} md={4}>
        <Card sx={{ maxWidth: 345 }} >
        <Link to={'/speaker4'} style={{textDecoration: 'none'}}>
      <CardActionArea style={{textDecoration: 'none'}}>
        <CardMedia
          component="img"
          height="250"
          image={img4}
          alt="green iguana"
          style={{textDecoration: 'none'}}
        />
        <CardContent style={{backgroundColor:"red",textDecoration: 'none'}}>
        <Typography gutterBottom variant="h5" component="div" style={{color:"#282828",fontWeight:"bold"}}>
        Manan Desai
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{color:"#282828"}}>
          Leader at Govardhan Eco Village and Preacher at ISKCON
          </Typography>
        </CardContent>
      </CardActionArea>
      </Link>
    </Card>
        </Grid>
        <Grid item xs={12} md={4}>
        <Card sx={{ maxWidth: 345 }} >
        <Link to={'/speaker1'} style={{textDecoration: 'none'}}>
      <CardActionArea style={{textDecoration: 'none'}}>
        <CardMedia
          component="img"
          height="250"
          image={img2}
          alt="green iguana"
          style={{textDecoration: 'none'}}
        />
        <CardContent style={{backgroundColor:"red",textDecoration: 'none'}}>
        <Typography gutterBottom variant="h5" component="div" style={{color:"#282828",fontWeight:"bold"}}>
          Gauranga Das
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{color:"#282828"}}>
          Leader at Govardhan Eco Village and Preacher at ISKCON
          </Typography>
        </CardContent>
      </CardActionArea>
      </Link>
    </Card>
        </Grid>
        <Grid item xs={12} md={4}>
        <Card sx={{ maxWidth: 345 }} >
        <Link to={'/speaker1'} style={{textDecoration: 'none'}}>
      <CardActionArea style={{textDecoration: 'none'}}>
        <CardMedia
          component="img"
          height="250"
          image={img4}
          alt="green iguana"
          style={{textDecoration: 'none'}}
        />
        <CardContent style={{backgroundColor:"red",textDecoration: 'none'}}>
        <Typography gutterBottom variant="h5" component="div" style={{color:"#282828",fontWeight:"bold"}}>
          Gauranga Das
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{color:"#282828"}}>
          Leader at Govardhan Eco Village and Preacher at ISKCON
          </Typography>
        </CardContent>
      </CardActionArea>
      </Link>
    </Card>
        </Grid>
        
      </Grid>
    </div>
    );
}
