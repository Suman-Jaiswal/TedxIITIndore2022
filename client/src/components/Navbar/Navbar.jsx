import React from "react"
import { Link } from "react-router-dom"
import "./Navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faInfoCircle, faMicrophone, faUsers } from '@fortawesome/free-solid-svg-icons'
import { faTeamspeak } from '@fortawesome/free-brands-svg-icons'
import MenuDrawer from "../MenuDrawer"
import { useEffect } from "react"

function Navbar({ currentPage }) {

    useEffect(() => {

        var dot = '.'
        if (currentPage === '') dot += 'home'
        else dot += currentPage

        const el = document.querySelector(dot)
        if (!el) return

        const allEl = document.querySelectorAll('.btn')
        for (let index = 0; index < allEl.length; index++) {
            const element = allEl[index];
            element.classList.remove('btn-danger')
        }
        el.classList.add('btn-danger')

    }, [currentPage])

    return (
        <nav className="navbar nav">
            <div className="nav-div">
                <div className="d-flex align-items-center">
                    <Link to='/'>
                        <img className="navbar-brand logo" alt="" src="/images/logos/removed-black-bg.png"></img>
                    </Link>
                </div>

                <div className="menu-only">
                    <Link to='/' ><button className="btn button px-2 py-1 mx-2 home"><FontAwesomeIcon icon={faHome} /></button></Link>
                    <Link to='/about' ><button className="btn button px-2 py-1 mx-2 about"><FontAwesomeIcon icon={faInfoCircle} /> ABOUT</button></Link>
                    <Link to='/speakers' ><button className="btn button px-2 py-1 mx-2 speakers"><FontAwesomeIcon icon={faTeamspeak} /> SPEAKERS</button></Link>
                    <Link to='/talks' ><button className="btn button px-2 py-1 mx-2 talks"><FontAwesomeIcon icon={faMicrophone} /> TALKS</button></Link>
                    <Link to='/team' ><button className="btn button px-2 py-1 ms-2 team"><FontAwesomeIcon icon={faUsers} /> TEAM</button></Link>
                    {/* <Link to='/contact' ><button className="btn button px-2 py-1 mx-2 team"><FontAwesomeIcon icon={faPhone} /> CONTACT US</button></Link> */}

                </div>
                <div className="menu-drawer">
                    <MenuDrawer />
                </div>

            </div>
        </nav>
    )


}

export default Navbar