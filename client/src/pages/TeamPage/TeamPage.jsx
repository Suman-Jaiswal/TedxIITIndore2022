import React, { useEffect, useState } from 'react'
import Deck from '../../components/Deck/Deck';
import Heading from '../../components/Heading';
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

    console.log(team.length > 0 ? team.img : null)

    return (<>
            <Heading heading={'TEAM'} />
        <div className='deck-container'>
            <Deck items={team.filter(x => x.head)} />
        </div>

        <div className="container justify-content-center small-card">

            <div className="row">
                {
                    <div className='col-12 col-md-6'>
                        <div className="row justify-content-evenly p-0">
                            {
                                team.map(person => <TeamCard person={person} key={person.sno} />)
                            }
                        </div>
                        <br />
                    </div>
                }
            </div>
        </div>
        <br />
    </>

    );
}

