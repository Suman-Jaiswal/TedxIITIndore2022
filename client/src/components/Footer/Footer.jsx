import React from "react"
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { Link } from "react-router-dom"


function Footer() {
    return (
        <div>
            <footer className="site-footer">
                <div className="container">
                    <div className="row">


                        <div className="col-xs-6 col-md-3">
                            <h6>Useful Links</h6>
                            <ul className="footer-links">
                                <li><a target={'_blank'} href="https://tedx.com/">TEDx</a></li>
                                <li><a target={'_blank'} href="https://iiti.ac.in/">IIT Indore</a></li>
                                <li><a target={'_blank'} href="http://gymkhana.iiti.ac.in/">IIT Indore Students Gymkhana</a></li>

                            </ul>
                        </div>

                        <div className="col-xs-6 col-md-3">
                            <h6>Quick Links</h6>
                            <ul className="footer-links">
                                <Link to='/about' ><li>About</li></ Link>
                                <Link to='/speakers' ><li>Speakers</li></ Link>
                                <Link to='/talks' ><li>Talks</li></ Link>
                                <Link to='/gallery' ><li>Gallery</li></ Link>
                                <Link to='/team' ><li>Team</li></ Link>
                            </ul>
                        </div>

                        <div className="col-xs-6 col-md-3">
                            <h6>Organizer</h6>
                            {/* <ul className="footer-links">
                                <li><a target={'_blank'} href="https://en.wikipedia.org/wiki/Mahesh_Bhat">Mahesh Bhatt</a></li>
                                <li><a target={'_blank'} href="https://en.wikipedia.org/wiki/Mahesh_Bhat">Mahesh Bhatt</a></li>
                                <li><a target={'_blank'} href="https://en.wikipedia.org/wiki/Mahesh_Bhat">Mahesh Bhatt</a></li>
                                <li><a target={'_blank'} href="https://gaurangadas.com/">Gauranga Das</a></li>
                                <li><a target={'_blank'} href="https://gaurangadas.com/">Gauranga Das</a></li>
                            </ul> */}
                            <img
                                src="https://res.cloudinary.com/tedxiiti/image/upload/w_80,h_80,c_fill/v1641996495/images/team/Niraj-Saini.jpg"
                                alt="" 
                                style={{
                                    borderRadius: '50%',
                                    marginTop: "10px"
                                }}
                                />
                            <div className=" mt-2">
                              <span >Niraj Saini </span>
                              <span><a target={'_blank'} className="linkedin" href="https://www.linkedin.com/in/niraj-kumar-4b5596195"><i> <FontAwesomeIcon icon={faLinkedin} /></i></a></span>
                            </div>
                           
                        </div>

                        <div className="col-xs-6 col-md-3">
                            <img src="https://res.cloudinary.com/tedxiiti/image/upload/w_210,h_50,c_fill/v1642099561/images/logos/removed_black_bg.png" alt="" />
                        </div>

                    </div>
                    <hr />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-6 col-xs-12">
                            <p className="copyright-text">Copyright &copy; 2021 All Rights Reserved TEDx IIT Indore
                            </p>
                        </div>

                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <ul className="social-icons">
                                <li><a target={'_blank'} className="facebook" href="https://www.youtube.com/user/TEDxTalks/videos"><i><FontAwesomeIcon icon={faYoutube} /></i></a></li>
                                <li><a target={'_blank'} className="twitter" href="https://twitter.com/tedxiitindore"><i><FontAwesomeIcon icon={faTwitter} /></i></a></li>
                                <li><a target={'_blank'} className="instagram" href="https://www.instagram.com/tedxiiti/"><i><FontAwesomeIcon icon={faInstagram} /></i></a></li>
                                <li><a target={'_blank'} className="linkedin" href="https://www.linkedin.com/company/tedx-iitindore/"><i><FontAwesomeIcon icon={faLinkedin} /></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer