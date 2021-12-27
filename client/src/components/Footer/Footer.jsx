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
        <footer class="site-footer">
      <div class="container">
        <div class="row">
       

          <div class="col-xs-6 col-md-3">
            <h6>Useful Links</h6>
            <ul class="footer-links">
              <li><a href="https://www.ted.com/">TED</a></li>
              <li><a href="https://www.iiti.ac.in/">IIT Indore</a></li>
              <li><a href="http://gymkhana.iiti.ac.in/">IIT Indore Students Gymkhana</a></li>

            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul class="footer-links">
            <Link to='/about' ><li>About</li></ Link>
            <Link to='/speakers' ><li>Speakers</li></ Link>
            <Link to='/talks' ><li>Talks</li></ Link>
            <Link to='/gallery' ><li>Gallery</li></ Link>
            <Link to='/team' ><li>Team</li></ Link>
            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Speakers</h6>
            <ul class="footer-links">
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
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; 2021 All Rights Reserved TEDx IIT Indore
            </p>
          </div>

          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <li><a class="facebook" href="#"><i><FontAwesomeIcon icon={faFacebookF} /></i></a></li>
              <li><a class="twitter" href="#"><i><FontAwesomeIcon icon={faTwitter} /></i></a></li>
              <li><a class="instagram" href="#"><i><FontAwesomeIcon icon={faInstagram} /></i></a></li>
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