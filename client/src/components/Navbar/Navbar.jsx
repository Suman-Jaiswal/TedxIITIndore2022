import React from "react"
import { Link } from "react-router-dom"
import "./Navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle, faMicrophone, faPhone, faUsers ,faHandshake} from '@fortawesome/free-solid-svg-icons'
import { faTeamspeak } from '@fortawesome/free-brands-svg-icons'
import MenuDrawer from "../MenuDrawer"
import { useEffect } from "react"

function Navbar({ currentPage }) {

    useEffect(() => {

        var dot = '.'
        const allEl = document.querySelectorAll('.navlink')
        if (currentPage === '') {
            dot += 'home'
            document.querySelector('.header').style.position = 'fixed'
            document.querySelector('.header').classList.add('bg-transparent')
            document.querySelector('.header').classList.remove('bg-dark')
            document.querySelector('.logo').style.display = 'none'
            for (let index = 0; index < allEl.length; index++) {
                const element = allEl[index];
                element.classList.remove('bg-danger')
            }
        }

        else {
            dot += currentPage
            document.querySelector('.header').classList.remove('bg-transparent')
            document.querySelector('.header').classList.add('bg-dark')
            document.querySelector('.header').style.position = 'sticky'
            document.querySelector('.logo').style.display = 'flex'

            for (let index = 0; index < allEl.length; index++) {
                const element = allEl[index];
                element.classList.remove('bg-danger')
            }
            const el = document.querySelector(dot)
            if (el)
                el.classList.add('bg-danger')
        }
        window.addEventListener('scroll', () => {
            if (currentPage === '') {
                if (window.scrollY > 200) {
                    document.querySelector('.header').classList.remove('bg-transparent')
                    document.querySelector('.header').classList.add('bg-dark')
                    document.querySelector('.logo').style.display = 'flex'

                }
                else {
                    document.querySelector('.header').classList.add('bg-transparent')
                    document.querySelector('.header').classList.remove('bg-dark')
                    document.querySelector('.logo').style.display = 'none'
                }
            }
            else {
                document.querySelector('.header').classList.remove('bg-transparent')
                document.querySelector('.header').classList.add('bg-dark')
                document.querySelector('.logo').style.display = 'flex'
            }

        })


        // const el = document.querySelector(dot)
        // if (!el) return
        // document.querySelector('.header').classList.remove('bg-transparent')
        // document.querySelector('.header').classList.add('bg-dark')
        // document.querySelector('.header').style.position = 'sticky'
        // document.querySelector('.logo').style.display = 'flex'
        // for (let index = 0; index < allEl.length; index++) {
        //     const element = allEl[index];
        //     element.classList.remove('bg-danger')
        // }
        // el.classList.add('bg-danger')

    }, [currentPage])

    return (
        <header className="navbar header bg-transparent">
            <div className="nav-div">
                <div className="align-items-center">
                    <Link to='/'>
                        <img className="navbar-brand logo" alt="" src="/images/logos/removed-black-bg.webp"></img>
                    </Link>
                </div>

                <div className="menu-only" >
                    <Link to='/about' className="text-decoration-none"><div className="navlink rounded-pill text-light px-3 py-2 mx-2 about"><FontAwesomeIcon icon={faInfoCircle} /> ABOUT</div></Link>
                    <Link to='/speakers' className="text-decoration-none"><div className="navlink rounded-pill text-light px-3 py-2 mx-2 speakers"><FontAwesomeIcon icon={faTeamspeak} /> SPEAKERS</div></Link>
                    <Link to='/talks' className="text-decoration-none"><div className="navlink rounded-pill text-light px-3 py-2 mx-2 talks"><FontAwesomeIcon icon={faMicrophone} /> TALKS</div></Link>
                    {/* <Link to='/gallery' className="text-decoration-none"><div className="navlink rounded-pill text-light px-3 py-2 mx-2 gallery"><FontAwesomeIcon icon={faImages} /> Gallery</div></Link> */}
                    <Link to='/team' className="text-decoration-none"><div className="navlink rounded-pill text-light px-3 py-2 ms-2 team"><FontAwesomeIcon icon={faUsers} /> TEAM</div></Link>
                    <Link to='/contact' className="text-decoration-none" ><div className="navlink rounded-pill text-light px-3 py-2 ms-2 contact"><FontAwesomeIcon icon={faPhone} /> CONTACT US</div></Link>
                    <Link to='/sponsors' className="text-decoration-none" ><div className="navlink rounded-pill text-light px-3 py-2 ms-2 sponsors"><FontAwesomeIcon icon={faHandshake} /> SPONSORS</div></Link>
                </div>
                <div className="menu-drawer">
                    <MenuDrawer />
                </div>

            </div>
        </header>
    )


}

export default Navbar