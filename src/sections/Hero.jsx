import React from 'react'
import gym_hero from "../assets/gym_hero.jpg"
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box';


const Hero = () => {
    return (
        <section className='relative w-full gap-2 h-[76vh] max-lg:h-[50vh]'>
            <img className='absolute h-[75vh] max-lg:h-[50vh] w-full object-cover' src={gym_hero}></img>
            <Box sx={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                background: theme => `linear-gradient(to right, white, ${theme.palette.secondary.main})`,
                width: { xs: '50%', lg: '30%' },
                boxSizing: 'border-box',
                borderRadius: '1.5rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '1.25rem',
                margin: '1.25rem',
            }}>
                {/*<div color='secondary' className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-[30%] max-lg:w-[50%] box-border rounded-3xl flex justify-center items-center p-5 m-5 bg-gradient-to-r from-white to-gray-400'>*/}
                <div className='justify-center items-center flex flex-col'>
                    <Typography variant='body1'>Use Code : saver</Typography>
                    <br />
                    <Typography variant='body1'>
                        Save on our 12 Month Membership
                    </Typography>
                    <br />
                    <Button variant='contained' color="secondary">Join Now</Button>
                </div>
            </Box>
        </section >
    )
}

export default Hero
