import React from 'react'
import { Card } from 'react-bootstrap';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60vw',
    minWidth: '320px',
    height: '90vh',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 3,
    overflowY: 'scroll',
    borderRadius: '10px'
};

export default function TeamCard({ person }) {

    const { name, title, description } = person
    const [open, setOpen] = React.useState(false);
    const [modalobj, setObj] = React.useState({});
    const handleOpen = (obj) => {
        setObj(obj);
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false)
        setObj({});
    };
    console.log(modalobj)

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
