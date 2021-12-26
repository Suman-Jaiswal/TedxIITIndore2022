import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function SpeakersCard() {
    return (
        <>
            <Grid item xs={12} sm={6} md={4} lg={3} justifyContent={'center'} container >
                <Card sx={{ maxWidth: 300 }} >
                    <Link to={'/speaker2'} style={{ textDecoration: 'none' }}>
                        <CardActionArea style={{ textDecoration: 'none' }}>
                            <CardMedia
                                component="img"
                                height="250"
                                image={'/3.jpg'}
                                alt="green iguana"
                                style={{ textDecoration: 'none' }}
                            />
                            <CardContent style={{ backgroundColor: "#e62b1e", textDecoration: 'none' }}>
                                <Typography gutterBottom variant="h5" component="div" style={{ color: "#fff", fontWeight: "bold" }}>
                                    Karan Chitra Deshmukh
                                </Typography>
                                <Typography variant="body2" color="text.secondary" style={{ color: "#fff" }}>
                                    Leader at Govardhan Eco Village and Preacher at ISKCON
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Link>
                </Card>
            </Grid>
        </>
    )
}
