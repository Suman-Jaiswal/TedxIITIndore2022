import React from 'react'
import SpeakersCard from '../../components/SpeakersCard/SpeakersCard';
import { useState, useEffect } from 'react';
import Data from '../../data/Data'
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
        <section className='talks py-5' style={{
            backgroundColor: '#161616'
        }}>
            <div className="h1 text-light text-center mb-4">Speakers ({year})</div>
            {
                year === '2022' ? <h2 className='text-light text-center h-100' >Coming soon... <br /><br /><br /><br /></h2> :
                    <div className='container' >
                        <div className="row p-0">
                            {
                                speakers.map(speaker => <SpeakersCard speaker={speaker} key={speaker.sno} />)
                            }
                        </div>
                    </div>
            }
            <br />
        </section>
    );
}
