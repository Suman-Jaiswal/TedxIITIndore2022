import { Typography } from '@mui/material'
import React from 'react'

export default function Heading({ heading, fs }) {
    return (
        <div data-aos="zoom-in" className="container text-center mt-3 pt-4 pb-2">
            <Typography color={'#e62b1e'} fontWeight={'bold'} fontSize={fs ? fs : null} variant={'h5'} >{heading}</Typography>
            <hr className='my-2 text-secondary' />
        </div>
    )
}
