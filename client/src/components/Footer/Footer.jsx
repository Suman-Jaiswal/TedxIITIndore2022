import React from "react"
import './Footer.css'
import { library } from '@fortawesome/fontawesome-svg-core' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons' 
import { Link } from "react-router-dom"


function Footer()
{
    return(
        <div>
        <footer className="site-footer">
      <div className="container">
        <div className="row">
       

          <div className="col-xs-6 col-md-3">
            <h6>Useful Links</h6>
            <ul className="footer-links">
              <li><a href="https://tedx.com/">TEDx</a></li>
              <li><a href="https://iiti.ac.in/">IIT Indore</a></li>
              <li><a href="http://gymkhana.iiti.ac.in/">IIT Indore Students Gymkhana</a></li>

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
            <h6>Speakers</h6>
            <ul className="footer-links">
              <li><a href="https://en.wikipedia.org/wiki/Mahesh_Bhat">Mahesh Bhatt</a></li>
              <li><a href="https://en.wikipedia.org/wiki/Mahesh_Bhat">Mahesh Bhatt</a></li>
              <li><a href="https://en.wikipedia.org/wiki/Mahesh_Bhat">Mahesh Bhatt</a></li>
              <li><a href="https://gaurangadas.com/">Gauranga Das</a></li>
              <li><a href="https://gaurangadas.com/">Gauranga Das</a></li>
            </ul>
          </div>

        </div>
        <hr/>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; 2021 All Rights Reserved TEDx IIT Indore
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li><a className="facebook" href="#"><i><FontAwesomeIcon icon={faFacebookF} /></i></a></li>
              <li><a className="twitter" href="#"><i><FontAwesomeIcon icon={faTwitter} /></i></a></li>
              <li><a className="instagram" href="#"><i><FontAwesomeIcon icon={faInstagram} /></i></a></li>
              <li><a className="linkedin" href="#"><i><FontAwesomeIcon icon={faLinkedin} /></i></a></li>   
            </ul>
          </div>
        </div>
      </div>
</footer>
</div>
    )
}

export default Footer