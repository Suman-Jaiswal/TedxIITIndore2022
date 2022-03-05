import React, { useEffect } from 'react'
import { Card } from 'react-bootstrap';
import "./ContactPage.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faHandshake } from '@fortawesome/free-solid-svg-icons'

export default function ContactPage() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <section className='contact bg-light py-5'>
            <div className="container text-dark">
                <div data-aos="fade-up" className="h1 text-center mb-3">Contact Us</div>
                <div className="row cards">
                    <div className="col-12 col-md-6 p-3 cardbox">
                        <Card style={{ width: '30rem' }} className="text-center">
                            <Card.Body>
                                <FontAwesomeIcon className='icon' icon={faPhone} size="3x" color='#e62b1e' />
                                <Card.Title>Talk To Us
                                </Card.Title>
                                <Card.Text>
                                    Interested in knowing more about the event? Just pickup your phone and talk to our team.
                                </Card.Text>
                                <Card.Text>
                                    SUJAL PATEL:  <span style={{ color: '#e62b1e' }}>+91 62614 82474</span>
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-12 col-md-6 p-3 cardbox">
                        <Card style={{ width: '30rem' }} className="text-center">
                            <Card.Body>
                                <FontAwesomeIcon className='icon' icon={faHandshake} size="3x" color='#e62b1e' />
                                <Card.Title>Contact Sponsorship Team
                                </Card.Title>
                                <Card.Text>
                                    Want to join hands with us ? Just ring us once on the given number.
                                </Card.Text>
                                <Card.Text>
                                    VASU AGARWAL:  <span style={{ color: '#e62b1e' }}>+91 98705 79574</span>
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-12 p-3 mt-5">
                        <div className="row my-3 text-center">
                            <div className="h3 col-12 col-md-6 text-center">
                                <div className="text-danger mb-2">Location</div>
                                <div className="lead">
                                    In the campus of IIT Indore, Khandwa road, Simrol
                                </div>
                            </div>
                            <div className="col-12 col-md-6 p-2">
                                <iframe title="map" className="w-75 m-0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44173.68003234819!2d75.89840349008908!3d22.530456862910512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962efcccbce7145%3A0x784e8cb69818596b!2sIndian%20Institute%20Of%20Technology%E2%80%93Indore%20(IIT%E2%80%93Indore)!5e0!3m2!1sen!2sin!4v1646406923144!5m2!1sen!2sin" height={300} allowFullScreen loading="lazy" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
