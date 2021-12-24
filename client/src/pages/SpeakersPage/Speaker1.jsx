import React from "react";
import { Grid,Card} from "@mui/material";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import img1 from './speakerimages/1.jfif'

function Speaker1(){
    return (
        <div style={{marginLeft:"40px" ,mariginTop:"200px",padding:"50px"}}>
              <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
        <img src={img1} width={250} height ={250}></img>
        <Typography gutterBottom variant="h5" component="div" style={{color:"#282828",fontWeight:"bold"}}>
        
          Gauranga Das
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{color:"#282828"}}>
          Leader at Govardhan Eco Village and Preacher at ISKCON
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="body2" color="text.secondary" style={{color:"#282828" , fontSize:"15px"}}>
          With an undergraduate degree in Metallurgical Engineering from the reputed IIT Mumbai, he is leading the Govardhan Eco Village Facilities, Nursery and the Green Buildings Construction(CSEB). He has bagged many awards for GEV by presenting the Symbiotic waste management systems followed in GEV in various reputed conferences like CII, SKOCH and FICCI. He is instrumental in bringing up the new Vedic culture and education center in GEV. He is also currently leading the much awaited Vrindavan Biodiversity project at GEV
          </Typography>
      
        </Grid>
        </Grid>

        
        </div>
);
}
export default Speaker1;