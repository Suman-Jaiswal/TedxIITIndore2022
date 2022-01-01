import React from 'react'
import './Carousel.css'

function Carousel({ carousel }) {

    const { link, title, description } = carousel

    return (
        <div className="carousel-item">
            <img src={link} className="d-block c-img w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </div>

    )
}

export default Carousel