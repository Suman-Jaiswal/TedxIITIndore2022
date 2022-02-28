import React, { useEffect, useState } from 'react'
import TalksCard from './../../components/TalksCard/TalksCard';
import Data from '../../data/Data'

export default function TalksPage() {

    const [talks, setTalks] = useState([])

    useEffect(() => {
        setTalks(Data().talks)
    }, [])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <section className='talks py-5'>
            <div className="h1 text-light text-center mb-3">Talks</div>
            <div className="container ">
                <div className="row justify-content-center d-flex">
                    {
                        talks.map(talk =>
                            <div className='col-12 col-md-4' key={talk.sno} >
                                <TalksCard talk={talk} />
                            </div>
                        )
                    }
                </div>

            </div>
            <br />
        </section>

    )
}
