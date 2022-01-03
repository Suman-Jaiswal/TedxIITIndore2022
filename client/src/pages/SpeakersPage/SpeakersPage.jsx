import React from 'react'
import SpeakersCard from '../../components/SpeakersCard/SpeakersCard';
import { useState, useEffect } from 'react';
import Data from '../../data/Data'
import Heading from '../../components/Heading';
export default function SpeakersPage() {

    const [speakers, setSpeakers] = useState([])
    console.log(Data().speakers)
    useEffect(() => {
        setSpeakers(Data().speakers)
    }, [])

    return (
        <div >
            <Heading heading={'SPEAKERS'} />
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
