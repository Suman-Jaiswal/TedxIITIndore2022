import React from 'react'
import SpeakersCard from '../../components/SpeakersCard/SpeakersCard';
import { useState, useEffect } from 'react';
import Data from '../../data/Data'
export default function SpeakersPage() {

    const [speakers, setSpeakers] = useState([])
    const [key, setKey] = useState(2022);

    useEffect(() => {
        setSpeakers(Data().speakers.filter(x => x.date.includes(key)))
    }, [key])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const Sonnet = () =>
        key === 2022 ? <div className='h3 text-center my-5'> <br /> Stay Tuned ! <br /><br /></div> :
            <div className="row p-0">
                {
                    speakers.map(speaker => <div
                        data-aos={'fade-up'} data-aos-duration="1000"
                        className=' col-12 col-md-6 col-lg-3 m-0 my-5 p-0 d-flex justify-content-center'
                    > <SpeakersCard speaker={speaker} key={speaker.sno} />
                    </div>)
                }
            </div>


    return (
        <section className='talks py-4 text-dark bg-light' style={{
            backgroundColor: '#161616'
        }}>
            <div className="h1 text-center">Speakers ({key})</div>
            <div className='container' >
                <div className='d-flex mb-4' style={{
                    borderBottom: '1px solid rgba(0,0,0,0.3)'
                }}>
                    <div className="p-2" style={{
                        borderRight: '1px solid rgba(0,0,0,0.3)'
                    }}>
                        <div role={'button'} onClick={() => setKey(2022)} className={`${key === 2022 ? 'bg-danger text-light' : 'bg-transparent'} px-3 py-2 rounded-pill`}>2022</div>
                    </div>
                    <div className="p-2" style={{
                        borderRight: '1px solid rgba(0,0,0,0.3)'
                    }}>
                        <div role={'button'} onClick={() => setKey(2018)} className={`${key === 2018 ? 'bg-danger text-light' : 'bg-transparent'} px-3 py-2 rounded-pill`}>2018</div>
                    </div>
                    <div className="p-2">
                        <div role={'button'} onClick={() => setKey(2017)} className={`${key === 2017 ? 'bg-danger text-light' : 'bg-transparent'} px-3 py-2 rounded-pill`}>2017</div>
                    </div>
                </div>
                <Sonnet />
            </div>
        </section>
    );
}
