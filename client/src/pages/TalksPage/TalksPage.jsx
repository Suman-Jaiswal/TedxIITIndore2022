import React from 'react'
import { Grid } from "@mui/material";
import './TalksPage.css'
import TalksCard from './../../components/TalksCard/TalksCard';

export default function TalksPage() {
  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12} className='header'>
          <h1 style={{ textAlign: "center", color: "red", margin: "1.25em", fontFamily: "typeface" }}>TALKS</h1>
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item xs={0} md={1}>
        </Grid>
        <Grid item xs={12} md={5}>
          <TalksCard embedId="vIkRT1xF8NY" title="Ms.Neeti Lekha" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. At aperiam ratione explicabo officia quia quam, vel aut assumenda soluta iure laboriosam illum officiis, laudantium optio, repellendus fugit? Placeat, distinctio ipsam!Lorem ipsum dolor sit amet consectetur adipisicing elit. At aperiam ratione explicabo officia quia quam, vel aut assumenda soluta iure laboriosam illum officiis, laudantium optio, repellendus fugit? Placeat, distinctio ipsam!Lorem ipsum dolor sit amet consectetur adipisicing elit. At aperiam ratione explicabo officia quia quam, vel aut assumenda soluta iure laboriosam illum officiis, laudantium optio, repellendus fugit? Placeat, distinctio ipsam!Lorem ipsum dolor sit amet consectetur adipisicing elit. At aperiam ratione explicabo officia quia quam, vel aut assumenda soluta iure laboriosam illum officiis, laudantium optio, repellendus fugit? Placeat, distinctio ipsam!Lorem ipsum dolor sit amet consectetur adipisicing elit. At aperiam ratione explicabo officia quia quam, vel aut assumenda soluta iure laboriosam illum officiis, laudantium optio, repellendus fugit? Placeat, distinctio ipsam!" />
          <TalksCard embedId="wG1Q1ouemVA" title="Subscribe to TechnoBlade" content="Just do it" />
          
        </Grid>
        <Grid item xs={12} md={5}>
          <TalksCard embedId="sCMulrwmN5w" title="Dr.Divyanshu Verma" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. At aperiam ratione explicabo officia quia quam, vel aut assumenda soluta iure laboriosam illum officiis, laudantium optio, repellendus fugit? Placeat, distinctio ipsam!Lorem ipsum dolor sit amet consectetur adipisicing elit. At aperiam ratione explicabo officia quia quam, vel aut assumenda soluta iure laboriosam illum officiis, laudantium optio, repellendus fugit? Placeat, distinctio ipsam!" />
          <TalksCard embedId="lYdEY6Wit_I" title="Yup" content='Lorem ipsum dolor sit amet consectetur adipisicing elit. At aperiam ratione explicabo officia quia quam, vel aut assumenda soluta iure laboriosam illum officiis, laudantium optio, repellendus fugit? Placeat, distinctio ipsam!' />
        </Grid>
        <Grid item xs={0} md={1}>
        </Grid>
      </Grid>
    </>

  )
}
