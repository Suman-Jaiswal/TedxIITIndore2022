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
        <section className='team py-5 bg-light text-dark'>
            <div className="h1 mb-3 text-center">Our Team</div>


            <div className="container">
                <div className="h2 ps-2 mb-2">Lead</div>
                <br />
            </div>

            <div className="d-none d-md-block">  {/* for Desktop   */}

                <div className='deck-container'>  {/* Lead */}
                    <Deck items={team.filter(x => x.head === true)} />
                </div>


                <div> {/* other members */}

                    <div className="container">
                        <br />
                        <div className="h2 ps-2 mb-2">Advisory Committee</div>
                        <br />
                    </div>
                    <div className="d-flex flex-wrap justify-content-evenly">
                        {
                            team.filter(x => x.head === false).map(x => <TeamCard size='lg' item={x} text='text-dark' />)
                        }
                    </div>


                </div>
            </div>



            <div className="d-md-none container">   {/* mobile view  */}

                <div className="row">  {/* Lead  */}
                    {
                        <div className='col-12 col-md-6'>
                            <div className="row justify-content-evenly p-0">
                                {
                                    team.filter(x => x.head === true).map(item => <div className='col-6' key={item.sno}> <TeamCard item={item} size='sm' /></div>)
                                }
                            </div>
                            <br />
                        </div>
                    }
                </div>


                <div> {/* other members */}

                    <div className="container">
                        <br />
                        <div className="h2 ps-2 mb-2">Advisory Committee</div>
                        <br />
                    </div>
                    <div className="d-flex flex-wrap justify-content-evenly">
                        {
                            team.filter(x => x.head === false).map(x => <TeamCard size='sm' item={x} text='text-dark' />)
                        }
                    </div>


                </div>

            </div>

        </section>

    );
}

