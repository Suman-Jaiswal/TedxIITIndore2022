import React from 'react'
import SpeakersCard from '../../components/SpeakersCard/SpeakersCard';
import { useState, useEffect } from 'react';
import Data from '../../data/Data'
import Heading from '../../components/Heading';
import { useParams } from 'react-router-dom';
export default function SpeakersPage() {

    const { year } = useParams()
    console.log(year)
    const [speakers, setSpeakers] = useState([])
    console.log(Data().speakers)
    useEffect(() => {
        setSpeakers(Data().speakers.filter(x => x.date.includes(year)))
    }, [year])

    return (
        <div >
            <Heading heading={`SPEAKERS (${year})`} />
            <div className='container' >
                <div className="row p-0">
                    {
                        speakers.map(speaker => <SpeakersCard speaker={speaker} key={speaker.sno} />)
                    }
                </div>
            </div>
            <br />
        </div>
    );
}
