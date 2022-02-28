import React, { useEffect } from 'react'
import './AboutPage.css'

export default function AboutPage() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <section className='about bg-light py-5'>
            <div className="container text-dark">
                <div className="h1 text-center mb-3">About Us</div>
                <div className="row">
                    <div className="col-12 col-md-5 p-3 pipe">
                        <div className="h2 ps-2 mb-2">TED</div>
                        <p>
                            TED is a nonprofit devoted to spreading ideas, usually in the form of short, powerful talks (18 minutes or less). TED began in 1984 as a conference where Technology, Entertainment and Design converged and today covers almost all topics from Science to Business to Global Issues - in more than 100 languages.
                        </p>
                        <p>
                            TED is owned by a nonprofit, nonpartisan foundation. Their agenda is to make great ideas accesible and spark conversation.
                        </p>
                    </div>
                    <div className="col-12 col-md-7 p-3">
                        <div className="h2 ps-2 mb-2">TED<sup className='text-danger'>x</sup> </div>
                        <p className='text-danger fw-bold'> x = Independently organised event</p>
                        <p>
                            TEDx was created in 2009 in the spirit of TED's mission, "Ideas worth spreading". It supports independent organizers who want to create TED-like event in their own community.
                        </p>
                        <p>
                            In the spirit of ideas worth spreading, TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. At a TEDx event, TEDTalks video and live speakers combine to spark deep discussion and connection in a small group. These local, self-organized events are branded TEDx, where x = independently organized TED event. The TED Conference provides general guidance for the TEDx program, but individual TEDx events are self-organized (subject to certain rules and regulations).
                        </p>
                    </div>
                    <div className="col-12 p-3">
                        <div className="h2 ps-2 mb-2">THEME</div>
                        <p>
                            The Phoenix, as we know, is the bird that rose from the ashes. The majestic bird dies in flames and is reborn as a baby which needs to grow. Just like how we are growing back into our former glory after the pandemic. Just like a 'Phoenix in the making'
                        </p>

                    </div>
                </div>
            </div>
        </section>
    )
}
