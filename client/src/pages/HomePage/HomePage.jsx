import React from "react"
import TextMobileStepper from "../../components/Carousel"
import './HomePage.css'

function Home() {

    return (
        <>
            <div className="hero bg-dark" >
                {/* <div className="video-container">
                <video muted disablePictureInPicture autoPlay loop controlsList={'noDownload'} src="bgvideo4.mp4" type='video/mp4' id='vid'> </video>
            </div> */}
                <div class="bg"></div>
                <div className="text-box"></div>
            </div>

            <div className="container py-4">
                <div className="header my-4 text-light">
                    <div className="h2 text-center" style={{ color: "#e62b1e" }}>About TEDx</div>
                    <div className="d-flex">
                        <iframe className="p-4" width="560" height="315" src="https://www.youtube.com/embed/d0NHOpeczUU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <div className="lead text-light p-4" >In the spirit of ideas worth spreading, TED has created a program called TEDx. TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. Our event is called TEDxIITBombay, where x = independently organized TED event. At our TEDxIITBombay event, TED Talks video and live speakers will combine to spark deep discussion and connection in a small group. The TED Conference provides general guidance for the TEDx program, but individual TEDx events, including ours, are self-organized.</div>
                    </div>
                </div>
                <div className="container mb-4">
                    <div className="header py-4 text-light">
                        <div className="h2 text-center" style={{ color: "#e62b1e" }}>Highlights</div>
                    </div>
                    <div className="container d-flex flex-wrap gap-3">
                        <TextMobileStepper />
                        <TextMobileStepper />
                        <TextMobileStepper />
                    </div>
                </div>
            </div>

            <br />
        </>

    )
}

export default Home