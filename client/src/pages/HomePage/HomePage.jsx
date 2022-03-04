import React, { useEffect } from "react"
import TextMobileStepper from "../../components/Slide"
import './HomePage.css'
import { speakers } from '../../data/speakers';
import { Link } from "react-router-dom";
import { talks } from '../../data/talks'
import TalksCard from "../../components/TalksCard/TalksCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";

function Home() {

    const S2022 = speakers.filter(s => s.date.includes('2022'))
    const S2018 = speakers.filter(s => s.date.includes('2018'))
    const S2017 = speakers.filter(s => s.date.includes('2017'))

    const rand = Math.abs(Math.floor(Math.random() * 16) - 4);

    let tempTalks = [...talks].splice(rand, 3)

    useEffect(() => {
        // window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <section className="hero bg-light" >
                <div className="container h-100 d-flex align-items-center">
                    <div className="row mt-5">
                        <div className="col-12 col-lg-7 text" >
                            <br />
                            <img data-aos="fade-up" src="/images/logos/removed-black-bg.webp" width={500} alt="" />
                            <div data-aos="fade-up" data-aos-delay="200" style={{ width: 'fit-content' }} className="h2 text-light text-start ps-2 mx-auto my-3">PHOENI<sup className="text-danger fw-bold">X</sup> IN THE MAKING</div>
                            <div className="my-4">
                                <button data-aos="fade-up" data-aos-delay="400" className="buy-btn mt-2">Buy Tickets</button>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section className='about bg-light py-5' data-aos="fade-up">
                <br />
                <div className="container text-dark">
                    <div className="row gap-4">

                        <div className="col-12 p-3" >
                            <div className="h2 ps-2 mb-2" >THEME: Phoenix in the making </div>
                            <p >
                                We all love phoenixes, don't we? And why shouldn't we? They are such magnificent and beautiful birds. But it isn't always so glorious. When a phoenix rises from its ashes, it's a tiny, ugly thing. It has to grow up again, survive till adulthood, to regain its lost former glory. That is the hidden story behind the glorious bird. At some point in life, everyone fails. But that doesn't mean we give up. We rise back up, more glorious, more magnificent, more successful than before. That is what life is about. And that is what this edition of our TEDx will be about.
                                The majestic bird dies in flames and is reborn as a baby which needs to grow. Just like how we are growing back into our former glory after the pandemic. Just like a <span className='text-danger'>'Phoenix in the making'</span>
                            </p>
                            <p  >There are many such stories behind the success of most great individuals. They hit rock bottom and, instead of wallowing in their despair, decided that they had nowhere to go but up. Come join us at TEDx IIT Indore and listen to some of these amazing stories. Who knows, you might awaken your inner phoenix too.</p>
                        </div>

                    </div>
                </div>
            </section>
            <section className='tedx py-5 bg-dark' data-aos="fade-up">
                <div className="container text-light">
                    <div className="row justify-content-between" >
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
                    <br />
                    <div className="text-secondary justify-content-center row">
                        <div data-aos="zoom-in" data-aos-duration="700" className="text-center col-12 col-md-6 col-lg-4 d-flex flex-column align-items-center" >
                            <TextMobileStepper images={S2022} yr={2022} />

                        </div>
                        <div data-aos="zoom-in" data-aos-duration="700" className="text-center col-12 col-md-6 col-lg-4 d-flex flex-column align-items-center" >
                            <TextMobileStepper images={S2018} yr={2018} />

                        </div>
                        <div data-aos="zoom-in" data-aos-duration="700" className="text-center col-12 col-md-6 col-lg-4 d-flex flex-column align-items-center" >
                            <TextMobileStepper images={S2017} yr={2017} />

                        </div>
                    </div>
                    <br /><br />
                    <div className="h5"><Link to={'/speakers'} className='text-danger years' > See More <FontAwesomeIcon size="sm" icon={faArrowCircleRight} /></Link></div>
                </div>
            </section>
            <section className="highlights py-5 bg-dark">
                <div className="container text-light">
                    <div className="h2 ps-2 mb-2">Event Highlights </div>
                    <br />
                    <div className="row" style={{
                        overflowX: 'hidden'
                    }}>
                        {tempTalks.map((talk, i) => <div key={i} className='col-12 col-md-4' data-aos='fade-left' data-aos-delay={i * 200 + 200} >
                            <TalksCard talk={talk} />
                        </div>)}
                    </div>
                    <div className="h5"><Link to={'/talks'} className='text-danger years' > See More <FontAwesomeIcon size="sm" icon={faArrowCircleRight} /></Link></div>
                </div>
            </section>
            {/* <section className="sponsors py-5 bg-light" >
                <div className="container text-dark">
                    <div className="h2 ps-2 mb-2">Partnership </div>
                    <div className="row my-3">
                        <div className="h3 text-center">Coming Soon...</div>
                    </div>
                </div>
            </section> */}
            <section className="location py-5 bg-light" data-aos="fade-up" >
                <div className="container text-dark">
                    <div className="row my-3">
                        <div className="h3 col-7 text-center">
                            <div className="text-danger mb-2">VENUE</div>
                            <div className="lead">
                                In the campus of IIT Indore, Khandwa road, Simrol
                            </div>
                        </div>
                        <div className="col-5 bg-danger p-2">
                            <iframe title="map" className="w-100 m-0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44173.68003234819!2d75.89840349008908!3d22.530456862910512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962efcccbce7145%3A0x784e8cb69818596b!2sIndian%20Institute%20Of%20Technology%E2%80%93Indore%20(IIT%E2%80%93Indore)!5e0!3m2!1sen!2sin!4v1646406923144!5m2!1sen!2sin" height={300} allowFullScreen loading="lazy" />
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default Home