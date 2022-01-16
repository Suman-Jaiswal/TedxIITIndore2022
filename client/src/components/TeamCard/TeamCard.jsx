import React from 'react'
import { Card } from 'react-bootstrap';

export default function TeamCard({ person }) {

    const { name, title, img } = person
    const color = [
        '#4285f4',
        '#ea4335',
        '#fbbc05',
        '#34a853',
    ]


    return (<>
        <div className='gradient-card' data-aos={person.sno % 2 === 0 ? 'flip-left' : 'flip-right'} data-aos-duration="1000">
            <Card style={{ width: "12rem", backgroundColor: color[person.sno % 4], height: '220px', boxShadow: '0 2px 2px 0px rgba(0,0,0,0.5)', margin: '10px auto' }}  >
                <Card.Img className='image m-auto my-2' src={img} alt="item-img" style={{ cursor: "pointer", width: '8rem', height: '8rem', borderRadius: '50%' }} />
                <Card.Body className='my-0'>
                    <Card.Title className='text-center text-dark fs-6 mb-0' >{name.toUpperCase()}</Card.Title>
                    <Card.Text className='text-center text-dark'>
                        {title}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
        <br />
    </>

    )
}
