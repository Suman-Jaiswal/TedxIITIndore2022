import React from 'react'
import { Button, Card } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';
import './Deck.css'

export default function Deck(props) {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <>
            {
                <Carousel
                    responsive={responsive}
                    autoPlaySpeed={3000}
                    autoPlay={true}
                    infinite={true}

                >
                    {props.items.map((item) =>
                        <Card className='gradient-card' style={{ width: '18rem', height: '360px', boxShadow: '0 2px 2px 0px rgba(0,0,0,0.5)', margin: '20px auto' }} key={item._id} >
                            <Card.Img className='image m-auto my-2' src={'/3.jpg'} alt="item-img" style={{ cursor: "pointer",width: '16rem', height: '16rem', borderRadius: '50%' }} />
                            <Card.Body>
                                <Card.Title className='text-center' >{item.name}</Card.Title>
                                <Card.Text className='text-center'>
                                 {item.title}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    )}
                </Carousel>
            }

        </>)
}
