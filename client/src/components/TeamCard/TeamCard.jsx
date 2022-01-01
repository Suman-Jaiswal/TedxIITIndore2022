import React from 'react'
import { Card } from 'react-bootstrap';

export default function TeamCard({ person }) {

    const { name, title } = person

    return (
        <>
            <Card style={{ width: '18rem', height: '360px', boxShadow: '0 2px 2px 0px rgba(0,0,0,0.5)', margin: '20px auto' }} >
                <Card.Img className='image m-auto my-2' src={'/3.jpg'} alt="item-img" style={{ cursor: "pointer", width: '16rem', height: '16rem', borderRadius: '50%' }} />
                <Card.Body>
                    <Card.Title className='text-center' >{name.toUpperCase()}</Card.Title>
                    <Card.Text className='text-center'>
                        {title}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}
