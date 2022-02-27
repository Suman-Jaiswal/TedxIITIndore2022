import React, { useEffect, useState } from 'react'
import { Grid } from "@mui/material";
// import './TalksPage.css'
import TalksCard from './../../components/TalksCard/TalksCard';
import Data from '../../data/Data'
import Heading from '../../components/Heading';

export default function TalksPage() {

    const [talks, setTalks] = useState([])

    useEffect(() => {
        setTalks(Data().talks)
    }, [])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <Heading heading={'TALKS'} />
            <Grid container sx={{ justifyContent: 'center' }} spacing={4}>
                {
                    talks.map(talk =>
                        <Grid key={talk.sno} item xs={12} md={5}>
                            <TalksCard talk={talk} />
                        </Grid>
                    )
                }
            </Grid>
            <br />
        </>

    )
}
