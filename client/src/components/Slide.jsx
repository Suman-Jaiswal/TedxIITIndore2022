import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function SwipeableTextMobileStepper({ images }) {

    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <>
            <Box className='scale-on-hover' sx={{ width: '100%' }}>
                <Paper
                    square
                    elevation={0}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        height: 50,
                        pl: 2,
                        bgcolor: 'rgb(248,249,250)',
                        borderRadius: '5px',
                    }}
                >
                    <Typography fontWeight={'bold'} margin={'auto'} variant='body1' >{images[activeStep].name.toUpperCase()}</Typography>
                    <hr />
                </Paper>
                <AutoPlaySwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={activeStep}
                    onChangeIndex={handleStepChange}
                    enableMouseEvents
                >
                    {images.map((step, index) => (
                        <div style={{ borderRadius: '10px', minWidth: '300px', margin: 'auto' }} key={step.name}>
                            {Math.abs(activeStep - index) <= 2 ? (
                                <img
                                    style={{
                                        height: 300,
                                        display: 'block',
                                        width: '100%',
                                        margin: 'auto',
                                        objectFit: 'cover',
                                        objectPosition: 'center',
                                        borderRadius: '15px',
                                        overflow: 'hidden'
                                    }}
                                    src={step.imgPath}
                                    alt={step.name}
                                />
                            ) : null}
                        </div>
                    ))}
                </AutoPlaySwipeableViews>
                <Paper
                    square
                    elevation={0}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        height: 20,
                        pl: 2,
                        bgcolor: 'rgb(248,249,250)',
                    }}
                >
                    <Typography margin={'auto'} variant='subtitle2' marginTop={2}>{images[activeStep].post}</Typography>
                </Paper>
                <br />
                <br />
                <hr className='bg-danger' />
            </Box>
        </>

    );
}

export default SwipeableTextMobileStepper;
