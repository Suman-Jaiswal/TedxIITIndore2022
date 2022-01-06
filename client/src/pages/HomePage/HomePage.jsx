import React from "react"
import TextMobileStepper from "../../components/Carousel"
import Heading from "../../components/Heading"
import './HomePage.css'
import { speakers } from '../../data/speakers';
import { Typography } from "@mui/material";

function Home() {

    const S2022 = speakers.filter(s => s.date.includes('2022'))
    S2022.forEach(obj => { obj.label = obj.name; obj.imgPath = obj.img })

    const S2018 = speakers.filter(s => s.date.includes('2018'))
    S2018.forEach(obj => { obj.label = obj.name; obj.imgPath = obj.img })

    const S2017 = speakers.filter(s => s.date.includes('2017'))
    S2017.forEach(obj => { obj.label = obj.name; obj.imgPath = obj.img })
    console.log(S2022)

    return (
        <>
            <div className="hero bg-dark" >
                {/* <div className="video-container">
                <video muted disablePictureInPicture autoPlay loop controlsList={'noDownload'} src="bgvideo4.mp4" type='video/mp4' id='vid'> </video>
            </div> */}
                <div className="bg"></div>
                <div className="bg-img"></div>
                <div className="text-box"></div>
            </div>

            <div className="container py-4">
                <div className="my-4 gradient-border">
                    <Heading heading={'About the Event'} />
                    <div className="row justify-content-evenly">
                        <Typography variant="body1" className="text-secondary p-4 col-12 col-md-7">
                            In the spirit of ideas worth spreading, TED has created a program called TEDx. TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. Our event is called TEDxIITIndore, where x = independently organized TED event. At our TEDxIITIndore event, TEDTalks video and live speakers will combine to spark deep discussion and connection in a small group. The TED Conference provides general guidance for the TEDx program, but individual TEDx events, including ours, are self-organized.
                        </Typography>
                        <iframe className="p-4 col-12 col-md-4" width="520" height="280" src="https://www.youtube.com/embed/d0NHOpeczUU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
                <br />
                <div className="my-4 gradient-border">
                    <Heading heading={'What is TEDx?'} />
                    <div className="row justify-content-evenly">
                        <iframe className="p-4 col-12 col-md-4" width="520" height="280" src="https://www.youtube.com/embed/d0NHOpeczUU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        <Typography variant="body1" className=" p-4 col-12 col-md-7 text-secondary">
                            In the spirit of ideas worth spreading, TED has created a program called TEDx. TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. Our event is called TEDxIITIndore, where x = independently organized TED event. At our TEDxIITIndore event, TEDTalks video and live speakers will combine to spark deep discussion and connection in a small group. The TED Conference provides general guidance for the TEDx program, but individual TEDx events, including ours, are self-organized.
                        </Typography>
                    </div>
                </div>
                <br />
                <div className="container mb-4 gradient-border">
                    <Heading heading={'Speakers'} />
                    <hr />
                    <div className="container text-secondary  d-flex flex-wrap gap-3">
                        <div className="text-center">
                            <Typography paddingBottom={2} variant="body1">2022</Typography>
                            <TextMobileStepper images={S2018} />
                        </div>
                        <div className="text-center">
                            <Typography paddingBottom={2} variant="body1">2018</Typography>
                            <TextMobileStepper images={S2018} />
                        </div>
                        <div className="text-center">
                            <Typography paddingBottom={2} variant="body1">2017</Typography>
                            <TextMobileStepper images={S2018} />
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