import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faImages, faInfoCircle, faMicrophone, faUsers } from '@fortawesome/free-solid-svg-icons'
import { faTeamspeak } from '@fortawesome/free-brands-svg-icons'
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export default function MenuDrawer() {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const icons = [faInfoCircle, faMicrophone, faImages, faUsers]

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 , bgcolor: '#161616', height: '100%'}}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {['About', 'Talks', 'Gallery', 'Team'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            <FontAwesomeIcon className='text-light' icon={icons[index]} />
                        </ListItemIcon>
                        <Link className='text-light w-100 text-decoration-none' to={'/' + text.toLowerCase()}>{text}</Link>
                    </ListItem>
                ))}
            </List>
            <Typography className='text-light' variant='h6' textAlign={'center'} >Speakers</Typography>
            <Divider className='text-secondary' />
            <List>
                {['2022', '2018', '2017'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            <FontAwesomeIcon className='text-light' icon={faTeamspeak} />
                        </ListItemIcon>
                        <Link className='text-light w-100 text-decoration-none' to={'/speakers/' + text}>{text}</Link>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div>
            {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}><FontAwesomeIcon color='#fff' size='2x' icon={faBars} /></Button>
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
