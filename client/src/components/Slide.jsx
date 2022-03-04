import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function SwipeableTextMobileStepper({ images, yr }) {

    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <>
            <div style={{ width: '100%' }}>
                <br />
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
                </Paper>
                <div style={{ borderRadius: '10px', minWidth: '300px', margin: "0 10px" }} >
                    <AutoPlaySwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={activeStep}
                        onChangeIndex={handleStepChange}
                        enableMouseEvents
                    >
                        {images.map((step, index) => (
                            <div key={step.name}>
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
                    <div className="bg-danger text-light px-2" style={{
                        position: 'absolute', top: 73, left: 33, height: 30, borderBottomLeftRadius: '15px', borderBottomRightRadius: '15px'
                    }}>{yr}</div>

                    <div className="bg-danger text-light text-center p-2" style={{
                        position: 'absolute', bottom: 0, left: '10%', height: '60px', width: '80%', textShadow: '2px 2px 4px #000000', fontSize: 13, opacity: 0.9, borderTopLeftRadius: '15px', borderTopRightRadius: '15px'
                    }}> {images[activeStep].post}</div>

                </div>
            </div>
        </>

    );
}

export default SwipeableTextMobileStepper;
