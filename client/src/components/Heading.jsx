import { Box, Typography } from '@mui/material'
import React from 'react'

export default function Heading({ heading, fs }) {
    return (
        <div className="container text-center mb-2 mt-4 pt-4 pb-3">
            <Typography color={'#e62b1e'} fontSize={fs ? fs : null} variant={'h4'}  >{heading}</Typography>
        </div>

    )
}
