import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './Deck.css'
import TeamCard from '../TeamCard/TeamCard';

export default function Deck(props) {

    const responsive = {
        largeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 3000, min: 1300 },
            items: 5
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
            <div className="">

                {
                    <Carousel
                        swipeable={false}
                        responsive={responsive}
                        autoPlaySpeed={3000}
                        autoPlay={true}
                        infinite={true}
                        customTransition="all 0.5s linear"
                        containerClass='carousel'
                    // removeArrowOnDeviceType={['largeDesktop', 'desktop', 'tablet']}

                    >
                        {props.items.map((item) =>
                            <TeamCard size='lg' item={item} text='text-light' />
                        )}
                    </Carousel>
                }
                <br />
            </div>

        </>)
}
