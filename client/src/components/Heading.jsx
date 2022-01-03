import { Box, Typography } from '@mui/material'
import React from 'react'

export default function Heading({ heading, fs }) {
    return (
        <div className="container text-center pt-4 pb-1">
            <Box marginY={1} paddingX={5} paddingY={1} border={1} sx={{ transform: 'skew(-20deg)', borderColor: '#fff' }} marginBottom={4}>
                <Box  sx={{ transform: 'skew(20deg)' }}>
                    <Typography fontSize={fs? fs : null} variant={'h4'}>{heading}</Typography>
                </Box>
            </Box>
        </div>

    )
}
