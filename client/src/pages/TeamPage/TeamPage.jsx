import React, { useEffect, useState } from 'react'
import Deck from '../../components/Deck/Deck';
import Heading from '../../components/Heading';
import { teams } from '../../data/teams'
import TeamCard from './../../components/TeamCard/TeamCard';

export default function TeamPage() {
    const [team, setTeam] = useState([])

    const teamNames = ["web", "b", "c", "d", "e"]

    useEffect(() => {
        setTeam(teams)
    }, [])
    return (
        <div >
            <Heading heading={'TEAM'} />
            <Deck items={team.filter(x => x.head)} />
            {
                // <div className="container justify-content-center">

                //     <div className="row">
                //         {
                //             teamNames.map((x, i) =>
                //                 <div className='col-12 col-md-6' key={i}>
                //                     <Heading heading={x + "Team"} fs={"20px"} />
                //                     <div className="row justify-content-evenly p-0">
                //                         {
                //                             team.filter(p => p.title === x).map(person => <TeamCard person={person} key={person.sno} />)
                //                         }
                //                     </div>
                //                     <br />
                //                 </div>
                //             )
                //         }

                //     </div>
                // </div>

            }

            <br />
        </div>
    );
}

