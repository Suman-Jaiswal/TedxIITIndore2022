import React from 'react'
import SpeakersCard from '../../components/SpeakersCard/SpeakersCard';
import { useState, useEffect } from 'react';
import Data from '../../data/Data'
import Heading from '../../components/Heading';
import { useParams } from 'react-router-dom';
export default function SpeakersPage() {

    const { year } = useParams()
    const [speakers, setSpeakers] = useState([])

    useEffect(() => {
        setSpeakers(Data().speakers.filter(x => x.date.includes(year)))
    }, [year])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div >
            <Heading heading={`SPEAKERS (${year})`} />
            {
                year === '2022' ? <h2 className='text-light text-center' >Coming soon...</h2> :
                    <div className='container' >
                        <div className="row p-0">
                            {
                                speakers.map(speaker => <SpeakersCard speaker={speaker} key={speaker.sno} />)
                            }
                        </div>
                    </div>
            }

            <br />
        </div>
    );
}
