import React from 'react'
import { Modal } from "@mui/material";
import Typography from '@mui/material/Typography';
import "./TalksCard.css";
import { Box } from '@mui/system';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const TalksCard = ({ talk }) => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '60vw',
        minWidth: '320px',
        height: '90vh',
        bgcolor: '#fff',
        border: '2px solid #000',
        boxShadow: 24,
        p: 3,
        overflowY: 'scroll',
        borderRadius: '10px',
        zIndex: '3000'
    };

    const { title, link, speaker, description } = talk
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
        console.log('clicked')
    };
    const handleClose = () => {
        setOpen(false)
    };
    return (
        <div className='py-3' >
            <div role={'button'} className='p-2 scale-on-hover' style={{ background: 'transparent' }} onClick={handleOpen}>

                <div className='video-responsive'>
                    <iframe style={{ borderRadius: '15px', border: '4px solid rgba(255,255,255,0.7)' }} src={link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div className='py-3' >
                    <div className="h5 px-2">{title.split('|')[0]}</div>
                    <div className="p px-2">
                        {speaker}
                    </div>
                </div>

            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className="d-flex m-0 mb-2 flex-direction-flex-end" style={{ flexDirection: 'row-reverse', right: '10px' }}>
                        <FontAwesomeIcon icon={faTimes} cursor={'pointer'} onClick={handleClose} />
                    </div>
                    <Typography id="modal-modal-description" variant='body1' sx={{ mt: 2 }}>
                        {description}
                    </Typography>
                </Box>
            </Modal>
        </div>

    )
};

export default TalksCard;