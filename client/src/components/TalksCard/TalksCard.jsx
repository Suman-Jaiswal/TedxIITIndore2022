import React from 'react'
import { Card } from "@mui/material";
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import "./TalksCard.css";

const TalksCard = ({talk}) => {

    const {title, link, speaker, description, date, sno} = talk

    return (
        <Card className='gradient-card' elevation={3} style={{ padding: '1em', margin: '0.75em'}}>
            <CardActionArea>
                <div className='video-responsive' data-aos={sno % 3 === 0 ? 'flip-left' : 'flip-right'} data-aos-duration="1000">
                    <iframe width="853" height="480" src={link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" style={{ color: "Black", fontWeight: "bold" }}>
                        {title}
                    </Typography>
                    <Typography variant="body2" mt={1} fontWeight={'bold'}>
                      by {speaker} {' ('}{date.substr(6, 4)}{')'}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" mt={2}>
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
};

export default TalksCard;