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
        <div className='deck-container'>
        <Heading heading={'TEAM'} />
            <Deck items={team.filter(x => x.head)} />
        </div>
        <br />
        <div className='deck-container'>
        <Heading heading={'ADVISORY COMMITTEE'} />
            <Deck items={team.filter(x => x.head === false)} />
        </div>

        <div className="container justify-content-center small-card">
        <Heading heading={'TEAM'} />
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
        {/* <div className="container justify-content-center small-card">
        <Heading heading={'ADVISORY COMMITTEE'} />
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
        </div> */}
    </>

    );
}

