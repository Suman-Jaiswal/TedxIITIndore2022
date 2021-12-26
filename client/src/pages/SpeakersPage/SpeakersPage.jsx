import React from 'react'
import { Grid, Card } from "@mui/material";
import SpeakersCard from '../../components/SpeakersCard/SpeakersCard';
export default function SpeakersPage() {

    let arr = [1,2,3,4,5,6,7,8,9,10,11,12]

    return (
        <div >
            <h1 style={{ textAlign: "center", color: "#e62b1e", margin: '40px 0' }}>SPEAKERS</h1>
            <Grid container spacing={3} justifyContent={'center'} >
               {
                  arr.map(x => <SpeakersCard key={x} />)
               }

            </Grid>
        </div>
    );
}
