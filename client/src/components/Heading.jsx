import { Box, Typography } from '@mui/material'
import React from 'react'

export default function Heading({ heading }) {
    return (
        <div className="container text-center py-4">
            <Box paddingX={5} paddingY={1} border={1} sx={{ transform: 'skew(-20deg)', borderColor: '#fff' }} marginBottom={4}>
                <Box sx={{ transform: 'skew(20deg)' }}>
                    <Typography variant={'h4'}>{heading}</Typography>
                </Box>
            </Box>
        </div>

    )
}
