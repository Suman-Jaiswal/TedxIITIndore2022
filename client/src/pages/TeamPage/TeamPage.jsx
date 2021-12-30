import React, { useEffect, useState } from 'react'
import {teamdata} from '../../data/teamdata'
import { Grid } from "@mui/material";

import TeamCard from './../../components/TeamCard/TeamCard';
export default function TeamPage() {
  const [team, setTeam] = useState([])

  useEffect(() => {
      setTeam(teamdata)
  }, [])
  return (
      <div style={{backgroundColor:"black",padding:"20px"}}>
       
            <h1 style={{ textAlign: "center", color: "#e62b1e", margin: '40px 0' }}>OUR TEAM</h1>
            <br/>
            <br/>
            <h2 style={{ textAlign: "center", color: "#e62b1e", margin: '40px 0' }}>WEB TEAM</h2>
            <Grid container sx={{justifyContent: 'center'}} spacing={4} style={{marginBottom:"2cm"}}>
            
                   {team.filter((fperson) => fperson.title === "web")
                   .map((person) => 
                   <Grid key={person.sno} item xs={12} md={4}>
                    <TeamCard
                       person={person}
                     />
                </Grid>
                     
                   )}
                
            </Grid>
            <h2 style={{ textAlign: "center", color: "#e62b1e", margin: '40px 0' }}>OUTREACH TEAM</h2>
            <Grid container sx={{justifyContent: 'center'}} spacing={4} style={{marginBottom:"2cm"}}>
            
                   {team.filter((fperson) => fperson.title === "outreach")
                   .map((person) => 
                   <Grid key={person.sno} item xs={12} md={4}>
                    <TeamCard
                       person={person}
                     />
                </Grid>
                     
                   )}
                
            </Grid>
            
</div>
    );
}

