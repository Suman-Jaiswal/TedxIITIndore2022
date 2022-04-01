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
                    <div className="col-12 col-md-5 p-3 pipe" data-aos="fade-up">
                        <div className="h2 ps-2 mb-2">TED</div>
                        <p>
                            TED is a nonprofit devoted to spreading ideas, usually in the form of short, powerful talks (18 minutes or less). TED began in 1984 as a conference where Technology, Entertainment and Design converged and today covers almost all topics from Science to Business to Global Issues - in more than 100 languages.
                        </p>
                        <p>
                            TED is owned by a nonprofit, nonpartisan foundation. Their agenda is to make great ideas accesible and spark conversation.
                        </p>
                    </div>
                    <div className="col-12 col-md-7 p-3" data-aos="fade-up">
                        <div className="h2 ps-2 mb-2">TED<sup className='text-danger'>x</sup> </div>
                        <p className='text-danger fw-bold'> x = Independently organised event</p>
                        <p>
                            TEDx was created in 2009 in the spirit of TED's mission, "Ideas worth spreading". It supports independent organizers who want to create TED-like event in their own community.
                        </p>
                        <p>
                            In the spirit of ideas worth spreading, TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. At a TEDx event, TEDTalks video and live speakers combine to spark deep discussion and connection in a small group. These local, self-organized events are branded TEDx, where x = independently organized TED event. The TED Conference provides general guidance for the TEDx program, but individual TEDx events are self-organized (subject to certain rules and regulations).
                        </p>
                    </div>

                </div>
                <div className="row my-5">

                    <div className="col-12 p-3" data-aos="fade-up" data-aos-delay='300'>
                        <div className="h2 ps-2 mb-2">THEME: Phoenix in the making</div>
                        <p >
                            We all love phoenixes, don't we? And why shouldn't we? They are such magnificent and beautiful birds. But it isn't always so glorious. When a phoenix rises from its ashes, it's a tiny, ugly thing. It has to grow up again, survive till adulthood, to regain its lost former glory. That is the hidden story behind the glorious bird. At some point in life, everyone fails. But that doesn't mean we give up. We rise back up, more glorious, more magnificent, more successful than before. That is what life is about. And that is what this edition of our TEDx will be about.
                            The majestic bird dies in flames and is reborn as a baby which needs to grow. Just like how we are growing back into our former glory after the pandemic. Just like a <span className='text-danger'>'Phoenix in the making'</span>
                        </p>
                        <p  >There are many such stories behind the success of most great individuals. They hit rock bottom and, instead of wallowing in their despair, decided that they had nowhere to go but up. Come join us at TEDx IIT Indore and listen to some of these amazing stories. Who knows, you might awaken your inner phoenix too.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
