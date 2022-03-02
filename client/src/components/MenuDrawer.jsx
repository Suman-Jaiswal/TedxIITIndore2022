import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered, faHome, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faInfoCircle, faMicrophone, faUsers } from '@fortawesome/free-solid-svg-icons'
import { faTeamspeak } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';

export default function MenuDrawer() {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const icons = [faHome, faInfoCircle, faTeamspeak, faMicrophone, faUsers, faPhone]

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 200, bgcolor: '#161616', height: '100%' }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {['', 'About', 'Speakers', 'Talks', 'Team'].map((text, index) => (
                    <ListItem button key={text} className='py-3'>
                        <ListItemIcon sx={{
                            minWidth: 30
                        }}>
                            <FontAwesomeIcon className='text-light' icon={icons[index]} />
                        </ListItemIcon>
                        <Link className='text-light w-100 text-decoration-none' to={'/' + text.toLowerCase()}>{text === '' ? 'HOME' : text.toUpperCase()}</Link>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div>
            {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}><FontAwesomeIcon className='fa-duotone' color='#fff' size='2x' icon={faBarsStaggered} /></Button>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}
