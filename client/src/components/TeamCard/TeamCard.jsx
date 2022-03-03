import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Card } from 'react-bootstrap';

export default function TeamCard({ size, item, text }) {
    function isLinkedInIdPresent(item) {
        console.log(item.linkedIn);
        if (item.linkedIn === "") {
            return false;
        }
        return true;
    }
    return (
        <>
            {
                size === 'lg' ?
                    <Card className='border-0 bg-transparent' data-aos="fade-up" data-aos-duration="1000" key={item.sno} style={{ maxWidth: '18rem', height: '100%', }}  >
                        <Card.Img className='m-auto my-2' src={item.img} alt="item-img" style={{ cursor: "pointer", width: '16rem', height: '16rem', borderRadius: '50%' }} />
                        <Card.Body className='py-1' >
                            <Card.Title className={`text-center ${text}`} >{item.name.toUpperCase()}</Card.Title>
                            <Card.Text className={`text-center mb-0 ${text}`}>
                                {item.head ? item.title : null}
                            </Card.Text>
                            <div className='text-center text-secondary mt-2' >
                                <a target={'_blank'} rel='noreferrer' className={`text-center px-2 ${text}`} href={`mailto:${item.emailId}`}><FontAwesomeIcon size='lg' icon={faEnvelope} /></a>
                                {isLinkedInIdPresent(item) ? <a target={'_blank'} rel='noreferrer' className={`text-center px-2 ${text}`} href={item.linkedIn}><FontAwesomeIcon icon={faLinkedin} size='lg' /></a> : null}
                                {/*<a target={'_blank'} rel='noreferrer' className="text-secondary  px-2" href={item.linkedIn}><FontAwesomeIcon icon={faLinkedin} size='lg' /></a>  */}
                            </div>
                        </Card.Body>
                    </Card> :
                    <div
                        data-aos={'fade-up'}
                        data-aos-duration="1000"
                        style={{
                            minWidth: 150,
                            height: 248,
                            margin: '20px auto',
                            textAlign: 'center'
                        }}  >
                        <Card.Img className='image m-auto' src={item.img} alt="item-img"
                            style={{
                                cursor: "pointer",
                                width: 145,
                                height: 145,
                                borderRadius: '50%'
                            }} />

                        <div className='py-2' >
                            <div className="h6 text-dark text-center mb-0">
                                {item.name}
                            </div>
                            <div className="p text-secondary text-center">
                                {item.title}
                            </div>
                            <div className='text-center text-secondary' >
                                <a target={'_blank'} rel='noreferrer' className="text-dark  px-2" href={`mailto:${item.emailId}`}><FontAwesomeIcon size='sm' icon={faEnvelope} /></a>
                                {isLinkedInIdPresent(item) ? <a target={'_blank'} rel='noreferrer' className="text-dark  px-2" href={item.linkedIn}><FontAwesomeIcon icon={faLinkedin} size='sm' /></a> : null}
                                {/* <a target={'_blank'} rel='noreferrer' className="text-secondary  px-2" href={item.linkedIn}><FontAwesomeIcon icon={faLinkedin} size='sm' /></a> */}
                            </div>
                        </div>
                    </div>
            }

        </>

    )
}
