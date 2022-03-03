import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Card } from 'react-bootstrap';

export default function TeamCard({ item }) {
    function isLinkedInIdPresent(item){
        console.log(item.linkedIn);
    if(item.linkedIn===""){
       return false;
    }
    return true;
  }
    return (
        <>
            <Card
                data-aos={'fade-up'}
                data-aos-duration="1000"
                className='gradient-card'
                style={{
                    minWidth: 150,
                    height: 248,
                    boxShadow: '0 2px 2px 0px rgba(0,0,0,0.5)',
                    margin: '20px auto'
                }}  >
                <Card.Img className='image m-auto my-2' src={item.img} alt="item-img"
                    style={{
                        cursor: "pointer",
                        width: 145,
                        height: 145,
                        borderRadius: '50%'
                    }} />

                <div className='py-2 bg-dark' >
                    <div className="h6 text-light text-center mb-0">
                        {item.name}
                    </div>
                    <div className="p text-secondary text-center">
                        {item.title}
                    </div>
                    <div className='text-center text-secondary' >
                        <a target={'_blank'} rel='noreferrer' className="text-secondary  px-2" href={`mailto:${item.emailId}`}><FontAwesomeIcon size='sm' icon={faEnvelope} /></a>
                        {isLinkedInIdPresent(item) ?  <a target={'_blank'} rel='noreferrer' className="text-secondary  px-2" href={item.linkedIn}><FontAwesomeIcon icon={faLinkedin} size='sm' /></a>  : null }
                        {/* <a target={'_blank'} rel='noreferrer' className="text-secondary  px-2" href={item.linkedIn}><FontAwesomeIcon icon={faLinkedin} size='sm' /></a> */}
                    </div>
                </div>
            </Card>
        </>

    )
}
