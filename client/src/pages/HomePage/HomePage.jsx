import React from "react"
import TextMobileStepper from "../../components/Slide"
import Heading from "../../components/Heading"
import './HomePage.css'
import { speakers } from '../../data/speakers';
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Home() {

    const S2022 = speakers.filter(s => s.date.includes('2022'))
    S2022.forEach(obj => { obj.label = obj.name })

    const S2018 = speakers.filter(s => s.date.includes('2018'))
    S2018.forEach(obj => { obj.label = obj.name })

    const S2017 = speakers.filter(s => s.date.includes('2017'))
    S2017.forEach(obj => { obj.label = obj.name })
    console.log(S2022)

    return (
        <>
            <div
                className="hero" >
                <div className="video-container">
                <div className="wings">
                    <img src="wings.png" alt="" />
                </div>
                    <video muted playsInline disablePictureInPicture autoPlay controlsList={'noDownload'} src="https://res.cloudinary.com/tedxiiti/video/upload/du_11.8,q_100,so_0/v1642094821/videos/intro/intro-2022.mp4" type='video/mp4' id='vid'> </video>
                </div>
                <div className="bg-img">
                    <img src="bg.png" alt="" />
                </div>
            </div>

            <div className="container py-4">
                <div className="my-4 gradient-border sections">
                    <Heading heading={'About the Event'} />
                    <div className="row justify-content-evenly">
                        <Typography data-aos-duration="700" data-aos="fade-left" variant="body1" className="text-light px-4 py-2  col-12 col-md-7">
                        The Phoenix, as we know, is the bird that rose from the ashes. The majestic bird dies in flames and is reborn as a baby which needs to grow. Just like how we are growing back into our former glory after the pandemic. Just like a 'Phoenix in the making'
                        </Typography>
                        <iframe data-aos-duration="700" data-aos="fade-left" className="px-4 py-2 pb-4  col-12 col-md-4" width="520" height="250" src="https://www.youtube.com/embed/d0NHOpeczUU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
                <br />
                <div className="my-4 gradient-border sections">
                    <Heading heading={'What is TEDx?'} />
                    <div className="row justify-content-evenly">
                        <iframe data-aos-duration="700" data-aos="fade-right" className="px-4 py-2 pb-4 col-12 col-md-4" width="520" height="280" src="https://www.youtube.com/embed/d0NHOpeczUU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        <Typography data-aos-duration="700" data-aos="fade-right" variant="body1" className="px-4 py-2 col-12 col-md-7 text-light">
                            In the spirit of ideas worth spreading, TED has created a program called TEDx. TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. Our event is called TEDxIITIndore, where x = independently organized TED event. At our TEDxIITIndore event, TEDTalks video and live speakers will combine to spark deep discussion and connection in a small group. The TED Conference provides general guidance for the TEDx program, but individual TEDx events, including ours, are self-organized.
                        </Typography>
                    </div>
                </div>
                <br />
                <div className="container mb-4 gradient-border">
                    <Heading heading={'Speakers'} />
                    <hr />
                    <div className="text-secondary justify-content-center px-3 row">
                        <div data-aos="zoom-in" data-aos-duration="700" className="text-center col-12 col-md-4">
                        <Typography marginBottom={2} className="fw-bold" variant="body1">  <Link to='/speakers/2022'>2022</Link></Typography>
                            <TextMobileStepper images={S2022} />
                        </div>
                        <div data-aos="zoom-in" data-aos-duration="700" className="text-center col-12 col-md-4">
                        <Typography marginBottom={2} className="fw-bold" variant="body1">  <Link to='/speakers/2018'>2018</Link></Typography>
                            <TextMobileStepper images={S2018} />
                        </div>
                        <div data-aos="zoom-in" data-aos-duration="700" className="text-center col-12 col-md-4">
                      <Typography marginBottom={2} className="fw-bold" variant="body1">  <Link to='/speakers/2017'>2017</Link></Typography>
                            <TextMobileStepper images={S2017} />
                        </div>
                    </div>
                    <br />
                </div>
            </div>

            <br />
        </>

    )
}

export default Home