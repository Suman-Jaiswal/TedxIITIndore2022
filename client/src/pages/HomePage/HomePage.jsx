import React, { useEffect, useState } from "react"
import TextMobileStepper from "../../components/Slide"
import './HomePage.css'
import { speakers } from '../../data/speakers';
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { talks } from '../../data/talks'
import TalksCard from "../../components/TalksCard/TalksCard";

function Home() {
    const [S2022, set2022] = useState([{
        name: '',
        imgPath: '',
        post: ''
    }])
    const [S2018, set2018] = useState([{
        name: '',
        imgPath: '',
        post: ''
    }])
    const [S2017, set2017] = useState([{
        name: '',
        imgPath: '',
        post: ''
    }])

    let tempTalks = []

    const rand = Math.abs(Math.floor(Math.random() * 16) - 4);

    for (let i = 0; i < 3; i++) {
        tempTalks.push(talks[rand + i])
    }

    useEffect(() => {
        window.scrollTo(0, 0)
        set2022(speakers.filter(s => s.date.includes('2022')))
        set2018(speakers.filter(s => s.date.includes('2018')))
        set2017(speakers.filter(s => s.date.includes('2017')))
    }, [])

    return (
        <>
            <section className="hero bg-light" >
                <div className="container h-100 d-flex align-items-center">
                    <div className="row">
                        <div className="col-12 col-md-7 text" >
                            <img data-aos="fade-up" src="/images/logos/removed-black-bg.png" width={500} alt="" />
                            <div data-aos="fade-up" data-aos-delay="200" style={{ width: 'fit-content' }} className="h2 text-light text-start ps-2 mx-auto my-3">PHOENI<sup className="text-danger fw-bold">X</sup> IN THE MAKING</div>
                            <div className="my-4">
                                <button data-aos="fade-up" data-aos-delay="400" className="buy-btn mt-4">Buy Tickets</button>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section className='about bg-light py-5' >
                <div className="container text-dark">
                    <div className="row gap-4">

                        <div className="col-12 p-3" data-aos="fade-up">
                            <div className="h2 ps-2 mb-2">THEME: Phoenix in the making </div>
                            <p data-aos-delay="500">
                                We all love phoenixes, don't we? And why shouldn't we? They are such magnificent and beautiful birds. But it isn't always so glorious. When a phoenix rises from its ashes, it's a tiny, ugly thing. It has to grow up again, survive till adulthood, to regain its lost former glory. That is what our theme is about. At some point in life, everyone fails. But that doesn't mean we give up. We rise back up, more glorious, more magnificent, more successful that before. That is what life is about. And that is what this edition of our TEDx will be about.
                            </p>
                        </div>

                    </div>
                </div>
            </section>
            <section className='tedx py-5' style={{
                backgroundColor: '#161616'
            }}>
                <div className="container text-light">
                    <div className="row justify-content-between" data-aos="fade-up">
                        <div className="col-12 col-md-8 p-3" >
                            <div className="h2 ps-2 mb-2">What is TED<sup className="text-danger">x</sup> </div>
                            <p className='text-danger fw-bold'> x = Independently organised event</p>
                            <p>
                                TEDx was created in 2009 in the spirit of TED's mission, "Ideas worth spreading". It supports independent organizers who want to create TED-like event in their own community.
                            </p>
                            <p>
                                In the spirit of ideas worth spreading, TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. At a TEDx event, TEDTalks video and live speakers combine to spark deep discussion and connection in a small group. These local, self-organized events are branded TEDx, where x = independently organized TED event. The TED Conference provides general guidance for the TEDx program, but individual TEDx events are self-organized (subject to certain rules and regulations).
                            </p>
                        </div>
                        <div className="col-12 col-md-4 p-3">
                            <iframe className="w-100" style={{ borderRadius: '10px', border: '5px solid rgba(255,255,255,0.7)' }} height={280} src="https://www.youtube.com/embed/d0NHOpeczUU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                            </iframe>
                        </div>
                    </div>
                </div>
            </section>
            <section className="speakers py-5 bg-light">
                <div className="container text-dark">
                    <div className="h2 ps-2 mb-2">Speakers </div>
                    <div className="text-secondary justify-content-center row">
                        <div data-aos="zoom-in" data-aos-duration="700" className="text-center col-12 col-md-6 col-lg-4 d-flex flex-column align-items-center" >
                            <Typography className="fw-bold" variant="body1">
                                <Link
                                    className="h4 fw-bold years text-danger"
                                    to='/speakers/2022'>
                                    2022
                                </Link>
                            </Typography>
                            <TextMobileStepper images={S2022} />
                        </div>
                        <div data-aos="zoom-in" data-aos-duration="700" className="text-center col-12 col-md-6 col-lg-4 d-flex flex-column align-items-center" >
                            <Typography className="fw-bold" variant="body1">
                                <Link
                                    className="h4 fw-bold years text-danger"
                                    to='/speakers/2018'>
                                    2018
                                </Link>
                            </Typography>
                            <TextMobileStepper images={S2018} />
                        </div>
                        <div data-aos="zoom-in" data-aos-duration="700" className="text-center col-12 col-md-6 col-lg-4 d-flex flex-column align-items-center" >
                            <Typography className="fw-bold" variant="body1">
                                <Link
                                    className="h4 fw-bold years text-danger"
                                    to='/speakers/2017'>
                                    2017
                                </Link>
                            </Typography>
                            <TextMobileStepper images={S2017} />
                        </div>
                    </div>
                </div>
            </section>
            <section className="highlights py-5" style={{
                backgroundColor: '#161616'
            }}>
                <div className="container text-light">
                    <div className="h2 ps-2 mb-2">Highlights </div>
                    <div className="row my-3" style={{
                        overflowX: 'hidden'
                    }}>
                        {tempTalks.map((talk, i) => <div key={i} className='col-12 col-md-4' data-aos='fade-left' data-aos-delay={i * 200 + 200} >
                            <TalksCard talk={talk} />
                        </div>)}
                    </div>
                </div>
            </section>
            <section className="sponsors py-5 bg-light" >
                <div className="container text-dark">
                    <div className="h2 ps-2 mb-2">Sponsors </div>
                    <div className="row my-3">
                        <div className="h1">Coming Soon...</div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default Home