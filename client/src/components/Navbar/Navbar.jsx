import React from "react"
import { Link } from "react-router-dom"
import "./Navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faImages, faInfoCircle, faMicrophone, faUsers } from '@fortawesome/free-solid-svg-icons'
import { faTeamspeak } from '@fortawesome/free-brands-svg-icons'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuDrawer from "../MenuDrawer"
import { useEffect } from "react"

function Navbar({ currentPage }) {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    useEffect(() => {
        if (currentPage === '/') {
            return
        }
        const dot = '.' + currentPage
        const el = document.querySelector(dot)
        const allEl = document.querySelectorAll('.btn')
        for (let index = 0; index < allEl.length; index++) {
            const element = allEl[index];
            console.log(element)
            element.classList.remove('btn-danger')
        }
        el.classList.add('btn-danger')
    }, [currentPage])

    return (
        <nav className="navbar navbar-light nav">
            <div className="nav-div">
                <div className="d-flex align-items-center">
                    <Link to='/'>
                        <img className="navbar-brand logo" alt="" src="/images/logos/removed-black-bg.png"></img>
                    </Link>
                    <a className="buy-btn" href="/#">Buy Tickets</a>
                </div>

                <div className="menu-only">
                    <Link to='/home' ><button className="btn button px-2 py-1 mx-1 home"><FontAwesomeIcon icon={faHome} /> HOME</button></Link>
                    <Link to='/about' ><button className="btn button px-2 py-1 mx-1 about"><FontAwesomeIcon icon={faInfoCircle} /> ABOUT</button></Link>

                    <div>
                        <button
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                            className="btn button px-2 py-1 mx-1 speakers"
                        >
                            <FontAwesomeIcon icon={faTeamspeak} /> SPEAKERS
                        </button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}

                        >
                            <MenuItem onClick={handleClose}><Link style={{ textDecoration: 'none' }} className="text-secondary px-3" to="/speakers/2022" >
                                2022
                            </Link></MenuItem>
                            <MenuItem onClick={handleClose}><Link style={{ textDecoration: 'none' }} className="text-secondary px-3" to="/speakers/2018" >
                                2018
                            </Link></MenuItem>
                            <MenuItem onClick={handleClose}><Link style={{ textDecoration: 'none' }} className="text-secondary px-3" to="/speakers/2017" >
                                2017
                            </Link></MenuItem>

                        </Menu>
                    </div>

                    <Link to='/talks' ><button className="btn button px-2 py-1 mx-1 talks"><FontAwesomeIcon icon={faMicrophone} /> TALKS</button></Link>
                    {/* <Link to='/gallery' ><button className="btn button px-2 py-1 mx-1 gallery"><FontAwesomeIcon icon={faImages} /> GALLERY</button></Link> */}
                    <Link to='/team' ><button className="btn button px-2 py-1 mx-1 team"><FontAwesomeIcon icon={faUsers} /> TEAM</button></Link>

                </div>
                <div className="menu-drawer">
                    <MenuDrawer />
                </div>

            </div>
        </nav>
    )


}

export default Navbar