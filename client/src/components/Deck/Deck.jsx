import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Card } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './Deck.css'

export default function Deck(props) {
    const responsive = {
        largeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 3000, min: 1300 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 1300, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 572, min: 0 },
            items: 1
        }
    };
    return (
        <>
            <div className="container">

                {
                    <Carousel
                        responsive={responsive}
                        autoPlaySpeed={3000}
                        autoPlay={true}
                        infinite={true}

                    >
                        {props.items.map((item) =>
                            <Card data-aos={item.sno %2 ===0 ? 'flip-left': 'flip-right'} data-aos-duration="1000" key={item.sno} className='gradient-card' style={{ mixWidth: "18rem", maxWidth: '19rem', height: '380px', boxShadow: '0 2px 2px 0px rgba(0,0,0,0.5)', margin: '20px auto' }}  >
                                <Card.Img className='image m-auto my-2' src={item.img} alt="item-img" style={{ cursor: "pointer", width: '16rem', height: '16rem', borderRadius: '50%' }} />
                                <Card.Body className='py-1 bg-dark' >
                                    <Card.Title className='text-center text-light' >{item.name.toUpperCase()}</Card.Title>
                                    <Card.Text className='text-center text-secondary mb-0'>
                                        {item.title}
                                    </Card.Text>
                                    <div className='text-center text-secondary mt-2' >
                                        <a target={'_blank'} className="text-secondary  px-2" href={`mailto:${item.emailId}`}><FontAwesomeIcon size='lg' icon={faEnvelope} /></a>
                                        <a target={'_blank'} className="text-secondary  px-2" href={item.linkedIn}><FontAwesomeIcon icon={faLinkedin} size='lg' /></a>
                                    </div>
                                </Card.Body>
                            </Card>
                        )}
                    </Carousel>
                }
                <br />
            </div>

        </>)
}
