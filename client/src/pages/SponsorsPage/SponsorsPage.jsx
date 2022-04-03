import React, { useEffect } from 'react'
import { Card } from 'react-bootstrap';

export default function SponsorsPage() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <section className='contact bg-light py-5'>
            <div className="container text-dark">
                <div className="h1 text-center mb-3">Sponsors</div>
                <div className="row cards" >
                    <div className="col-12 col-md-6 p-3 cardbox" data-aos="fade-up">
                        <Card style={{ width: '24rem' }} className="text-center">
                            <Card.Body>
                                <Card.Title>Banking Partner</Card.Title>
                                <Card.Img style={{height:'8rem'}} variant="bottom" src="/images/sponsors/canara.png" />

                            </Card.Body>
                        </Card>
                    </div>

                    <div className="col-12 col-md-6 p-3 cardbox" data-aos="fade-up">
                        <Card style={{ width: '24rem' }} className="text-center">
                            <Card.Body>
                                <Card.Title>Software Partner</Card.Title>
                                <Card.Img style={{height:'8rem'}} variant="bottom" src="/images/sponsors/yash.png" />

                            </Card.Body>
                        </Card>
                    </div>

                    <div className="col-12 col-md-6 p-3 cardbox" data-aos="fade-up">
                        <Card style={{ width: '24rem' }} className="text-center">
                            <Card.Body>
                                <Card.Title>Augumented Reality Partner</Card.Title>
                                <Card.Img style={{height:'8rem'}} variant="bottom" src="/images/sponsors/edscope.webp" />

                            </Card.Body>
                        </Card>
                    </div>

                    <div className="col-12 col-md-6 p-3 cardbox" data-aos="fade-up">
                        <Card style={{ width: '24rem' }} className="text-center">
                            <Card.Body>
                                <Card.Title>Learning Resource Partner</Card.Title>
                                <Card.Img style={{height:'8rem'}} variant="bottom" src="/images/sponsors/ims.jpg" />

                            </Card.Body>
                        </Card>
                    </div>

                    <div className="col-12 col-md-6 p-3 cardbox" data-aos="fade-up">
                        <Card style={{ width: '24rem' }} className="text-center">
                            <Card.Body>
                                <Card.Title>Merchandise Partner</Card.Title>
                                <Card.Img style={{height:'12rem'}} variant="bottom" src="/images/sponsors/fablab.png" />

                            </Card.Body>
                        </Card>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}
