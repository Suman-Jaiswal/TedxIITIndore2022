import React from 'react'
import { Card, Button } from 'react-bootstrap';
import "./ContactPage.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faHandshake } from '@fortawesome/free-solid-svg-icons'

export default function ContactPage() {
    return (
        <section className='contact bg-light py-5'>
            <div className="container text-dark">
                <div data-aos="fade-up" className="h1 text-center mb-3">Contact Us</div>
                <div className="row cards">
                    <div className="col-12 col-md-5 p-3 cardbox">  
                    <Card style={{ width: '30rem' }} className="text-center">
                    <Card.Body>
                      <FontAwesomeIcon className='icon' icon={faPhone} size="3x" color='#e62b1e'/>
                      <Card.Title>Talk To Us
                      </Card.Title>
                      <Card.Text>
                        Interested in knowing more about the event? Just pickup your phone and talk to our team.
                      </Card.Text>
                      <Card.Text style={{ color: '#e62b1e' }}>+91 XXXXXXXXXX</Card.Text>
                    </Card.Body>
                  </Card>
                    </div>
                    <div className="col-12 col-md-5 p-3 cardbox">
                    <Card style={{ width: '30rem' }} className="text-center">
                    <Card.Body>
                      <FontAwesomeIcon className='icon' icon={faHandshake} size="3x" color='#e62b1e'/>
                      <Card.Title>Contact Sponsorship Team
                      </Card.Title>
                      <Card.Text>
                        Want to join hands with us ? Just ring us once on the given number.
                      </Card.Text>
                      <Card.Text style={{ color: '#e62b1e' }}>+91 XXXXXXXXXX</Card.Text>
                    </Card.Body>
                  </Card>
                    </div>
                    <div className="col-12 p-3">

                    </div>
                </div>
            </div>
        </section>
    )
}
