import React, { useEffect, useState } from 'react'
import Deck from '../../components/Deck/Deck';
import Heading from '../../components/Heading';
import { teamdata } from '../../data/teamdata'
import TeamCard from './../../components/TeamCard/TeamCard';

export default function TeamPage() {
    const [team, setTeam] = useState([])

    useEffect(() => {
        setTeam(teamdata)
    }, [])
    return (
        <div >
            <Heading heading={'TEAM'} />
            <Deck items={team} />
            <div className='container' >
                <div className="row p-0">
                    {
                        team.map(person => <TeamCard person={person} key={person.sno} />)
                    }
                </div>
            </div>
            <br />
        </div>
    );
}

