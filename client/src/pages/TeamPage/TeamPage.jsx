import React, { useEffect, useState } from 'react'
import { teamdata } from '../../data/teamdata'
import TeamCard from './../../components/TeamCard/TeamCard';

export default function TeamPage() {
    const [team, setTeam] = useState([])

    useEffect(() => {
        setTeam(teamdata)
    }, [])
    return (
        <div >
        <h1 style={{ textAlign: "center", color: "#e62b1e", margin: '40px 0' }}>TEAM</h1>
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

