import React, { useEffect, useState } from 'react'
import TalksCard from './../../components/TalksCard/TalksCard';
import Data from '../../data/Data'

export default function TalksPage() {

    const [talks, setTalks] = useState([])
    const [key, setKey] = useState(0);

    useEffect(() => {
        setTalks(Data().talks.filter(x => x.date.includes(key)))
    }, [key])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const Sonnet = () =>
        key === 2022 ? <div className='h3 text-center my-5'> <br /> Stay Tuned ! <br /><br /></div> :
            <div className="row p-0 text-dark">
                {
                    talks.map(talk =>
                        <div data-aos="fade-up" className='col-12 col-md-6 col-lg-4' key={talk.sno} >
                            <TalksCard talk={talk} />
                        </div>
                    )
                }
            </div>


    return (
        <section className='talks py-5 bg-light text-dark' style={{
            backgroundColor: '#161616'
        }}>
            <div data-aos="fade-up" className="h1 text-center">Talks ({key === 0 ? 'All' : key})</div>
            <div className='container' >
                <div className='d-flex mb-4' style={{
                    borderBottom: '1px solid rgba(0,0,0,0.3)'
                }}>
                    <div className="p-2" style={{
                        borderRight: '1px solid rgba(0,0,0,0.3)'
                    }}>
                        <div role={'button'} onClick={() => setKey(0)} className={`${key === 0 ? 'bg-danger text-light' : 'bg-transparent'} px-3 py-1 rounded-pill`}>All</div>
                    </div>
                    <div className="p-2" style={{
                        borderRight: '1px solid rgba(0,0,0,0.3)'
                    }}>
                        <div role={'button'} onClick={() => setKey(2022)} className={`${key === 2022 ? 'bg-danger text-light' : 'bg-transparent'} px-3 py-1 rounded-pill`}>2022</div>
                    </div>
                    <div className="p-2" style={{
                        borderRight: '1px solid rgba(0,0,0,0.3)'
                    }}>
                        <div role={'button'} onClick={() => setKey(2018)} className={`${key === 2018 ? 'bg-danger text-light' : 'bg-transparent'} px-3 py-1 rounded-pill`}>2018</div>
                    </div>
                    <div className="p-2">
                        <div role={'button'} onClick={() => setKey(2017)} className={`${key === 2017 ? 'bg-danger text-light' : 'bg-transparent'} px-3 py-1 rounded-pill`}>2017</div>
                    </div>
                </div>
                <Sonnet />
            </div>
        </section>

    )
}
