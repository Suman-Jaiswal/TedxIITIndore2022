import { Box, Modal, Typography } from '@mui/material'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60vw',
    minWidth: '320px',
    height: '90vh',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 3,
    overflowY: 'scroll',
    borderRadius: '10px',
    zIndex: '3000'
};

export default function SpeakersCard({ speaker }) {

    const { name, post, description, imgPath } = speaker
    const [open, setOpen] = React.useState(false);
    const [modalobj, setObj] = React.useState({});
    const handleOpen = (obj) => {
        setObj(obj);
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false)
        setObj({});
    };

    return (
        <>
            <div elevation={3} className='text-dark' sx={{ width: '280px', height: 'auto', overflow: 'visible', bgcolor: '#e62b1e', borderRadius: '10px' }}  >
                <div className='text-center' >
                    <img
                        onClick={() => handleOpen({ name, post, description })}
                        role={'button'}
                        height="250"
                        width="250"
                        src={imgPath}
                        alt={name}
                        style={{ borderRadius: '100%', width: '250px', position: 'relative', objectFit: 'cover', border: '4px solid #e62b1e', padding: 2 }}

                    />
                    <div className='mt-2' style={{ padding: 10, borderRadius: '10px', width: '100%' }}>
                        <div className='h6 text-center'>
                            {name.toUpperCase()}
                        </div>
                        <div className='text-secondary'>
                            {post}
                        </div>
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
                    <img alt={name} src={imgPath} height={265}></img>
                    <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ mt: 2 }}>
                        {modalobj.name}
                    </Typography>
                    <Typography id="modal-modal-description" variant='p' component="h6" color={'#e62b1e'} sx={{ mb: 2 }} >
                        {modalobj.post}
                    </Typography>
                    <Typography id="modal-modal-description" variant='body1' sx={{ mt: 2 }}>
                        {modalobj.description}
                    </Typography>
                </Box>
            </Modal>
        </>
    )
}
