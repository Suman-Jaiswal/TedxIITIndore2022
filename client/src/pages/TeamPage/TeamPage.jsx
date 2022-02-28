import React, { useEffect, useState } from 'react'
import Deck from '../../components/Deck/Deck';
import TeamCard from '../../components/TeamCard/TeamCard';
import { teams } from '../../data/teams'
import './TeamPage.css'

export default function TeamPage() {
    const [team, setTeam] = useState([])

    useEffect(() => {
        setTeam(teams)
    }, [])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <section className='team py-5' style={{
            backgroundColor: '#161616'
        }}>
            <div className="container">

                {/* for Desktop  */}
                <div className="h1 text-light mb-3 text-center">Team</div>
                <div className="d-none d-md-block">
                    <div className='deck-container'>
                        <Deck items={team.filter(x => x.head)} />
                    </div>
                    <div className='deck-container'>
                        <Deck items={team.filter(x => x.head === false)} />
                    </div>
                </div>


                {/* mobile view */}
                <div className="d-md-none container">
                    <div className="row">
                        {
                            <div className='col-12 col-md-6'>
                                <div className="row justify-content-evenly p-0">
                                    {
                                        team.map(item => <div className='col-6' key={item.sno}> <TeamCard item={item} /></div>)
                                    }
                                </div>
                                <br />
                            </div>
                        }
                    </div>
                </div>
            </div>

        </section>

    );
}

