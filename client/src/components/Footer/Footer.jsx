import React from "react"
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { Link } from "react-router-dom"


function Footer() {
    return (

        <footer className="site-footer bg-dark" data-aos="fade-up">
            <div className="container">
                <div className="row">


                    <div className="col-xs-6 col-md-3 text-center text-md-start">
                        <h6>Useful Links</h6>
                        <ul className="footer-links">
                            <li><a target={'_blank'} rel='noreferrer' href="https://tedx.com/">TEDx</a></li>
                            <li><a target={'_blank'} rel='noreferrer' href="https://iiti.ac.in/">IIT Indore</a></li>
                            <li><a target={'_blank'} rel='noreferrer' href="http://gymkhana.iiti.ac.in/">IIT Indore Students Gymkhana</a></li>

                        </ul>
                    </div>

                    <div className="col-xs-6 col-md-3 text-center text-md-start">
                        <h6>Quick Links</h6>
                        <ul className="footer-links">
                            <Link to='/about' ><li>About</li></ Link>
                            <Link to='/speakers' ><li>Speakers</li></ Link>
                            <Link to='/talks' ><li>Talks</li></ Link>
                            <Link to='/team' ><li>Team</li></ Link>
                            {/* <Link to='/contact' ><li>Contact Us</li></ Link> */}
                        </ul>
                    </div>

                    <div className="col-xs-6 col-md-3 text-center text-md-start">
                        <h6>Organizer</h6>
                        <img
                            src="/images/team/Niraj-Saini.webp"
                            alt=""
                            style={{
                                borderRadius: '50%',
                                marginTop: "10px",
                                width: 80,
                                height: 80
                            }}
                            height={300}
                            width={300}
                        />
                        <div className=" mt-2">
                            <span >Niraj Saini </span>
                            <span><a target={'_blank'} rel='noreferrer' className="linkedin" href="https://www.linkedin.com/in/niraj-kumar-4b5596195"><i> <FontAwesomeIcon icon={faLinkedin} /></i></a></span>
                        </div>

                    </div>

                    <div className="col-xs-6 col-md-3 text-center text-md-start">
                        <img width={200} src="/images/logos/removed-black-bg.webp" alt="" />
                    </div>

                </div>
                <hr />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <p className="copyright-text"> &copy; 2022 TEDxIITIndore
                        </p>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <p className="copyright-text">Site developed by - <span className="text-danger">Technical Team @TEDxIITIndore</span>
                        </p>
                    </div>

                    <div className="col-md-4 col-sm-6 col-xs-12 m-auto">
                        <ul className="social-icons">
                            <li><a target={'_blank'} rel='noreferrer' className="youtube" href="https://www.youtube.com/user/TEDxTalks/videos"><i><FontAwesomeIcon icon={faYoutube} /></i></a></li>
                            <li><a target={'_blank'} rel='noreferrer' className="twitter" href="https://twitter.com/tedxiitindore"><i><FontAwesomeIcon icon={faTwitter} /></i></a></li>
                            <li><a target={'_blank'} rel='noreferrer' className="instagram" href="https://www.instagram.com/tedxiiti/"><i><FontAwesomeIcon icon={faInstagram} /></i></a></li>
                            <li><a target={'_blank'} rel='noreferrer' className="linkedin" href="https://www.linkedin.com/company/tedx-iitindore/"><i><FontAwesomeIcon icon={faLinkedin} /></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer