import React from 'react'
import { Card } from 'react-bootstrap';

export default function TeamCard({ person }) {

    const { name, title } = person
    const color=[
        '#4285f4',
        '#ea4335',
        '#fbbc05',
        '#34a853',
    ]


    return (
        <>
            <Card style={{ width: "10rem", backgroundColor: color[person.sno % 4], height: '220px', boxShadow: '0 2px 2px 0px rgba(0,0,0,0.5)', margin: '10px 5px' }}  >
                <Card.Img className='image m-auto my-2' src={'/3.jpg'} alt="item-img" style={{ cursor: "pointer", width: '8rem', height: '8rem', borderRadius: '50%' }} />
                <Card.Body className='my-0'>
                    <Card.Title  className='text-center fs-6 mb-0' >{name.toUpperCase()}</Card.Title>
                    <Card.Text className='text-center'>
                        {title}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}
