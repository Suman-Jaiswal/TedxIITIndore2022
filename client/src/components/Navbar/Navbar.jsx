import React from "react"
import { Link } from "react-router-dom"
import "./Navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faImages, faInfoCircle, faMicrophone, faUsers } from '@fortawesome/free-solid-svg-icons'
import { faTeamspeak } from '@fortawesome/free-brands-svg-icons'
import MenuDrawer from "../MenuDrawer"
import { useEffect } from "react"

function Navbar({ currentPage }) {

    useEffect(() => {

        var dot = '.'
        const allEl = document.querySelectorAll('.navlink')
        if (currentPage === '') {
            dot += 'home'
            for (let index = 0; index < allEl.length; index++) {
                const element = allEl[index];
                element.classList.remove('bg-danger')
            }
        }

        else dot += currentPage

        const el = document.querySelector(dot)
        if (!el) return

        for (let index = 0; index < allEl.length; index++) {
            const element = allEl[index];
            element.classList.remove('bg-danger')
        }
        el.classList.add('bg-danger')

    }, [currentPage])

    return (
        <header className="navbar header">
            <div className="nav-div">
                <div className="d-flex align-items-center">
                    <Link to='/'>
                        <img className="navbar-brand logo" alt="" src="/images/logos/removed-black-bg.webp"></img>
                    </Link>
                </div>

                <div className="menu-only">
                    <Link to='/about' className="text-decoration-none"><div className="navlink rounded-pill text-light px-3 py-2 mx-2 about"><FontAwesomeIcon icon={faInfoCircle} /> ABOUT</div></Link>
                    <Link to='/speakers' className="text-decoration-none"><div className="navlink rounded-pill text-light px-3 py-2 mx-2 speakers"><FontAwesomeIcon icon={faTeamspeak} /> SPEAKERS</div></Link>
                    <Link to='/talks' className="text-decoration-none"><div className="navlink rounded-pill text-light px-3 py-2 mx-2 talks"><FontAwesomeIcon icon={faMicrophone} /> TALKS</div></Link>
                    {/* <Link to='/gallery' className="text-decoration-none"><div className="navlink rounded-pill text-light px-3 py-2 mx-2 gallery"><FontAwesomeIcon icon={faImages} /> Gallery</div></Link> */}
                    <Link to='/team' className="text-decoration-none"><div className="navlink rounded-pill text-light px-3 py-2 ms-2 team"><FontAwesomeIcon icon={faUsers} /> TEAM</div></Link>
                    {/* <Link to='/contact' ><div className="navlink div px-3 py-2 mx-2 team"><FontAwesomeIcon icon={faPhone} /> CONTACT US</div></Link> */}

                </div>
                <div className="menu-drawer">
                    <MenuDrawer />
                </div>

            </div>
        </header>
    )


}

export default Navbar