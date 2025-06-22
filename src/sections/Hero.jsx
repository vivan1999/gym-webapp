import React from 'react'
import gym_hero from "../assets/gym_hero.jpg"
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'

const Hero = () => {
    return (
        <section className='relative w-full gap-2 h-[76vh] max-lg:h-[50vh]'>
            <img className='absolute h-[75vh] max-lg:h-[50vh] w-full object-cover' src={gym_hero}></img>
            <div className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-[30%] max-lg:w-[50%] box-border rounded-3xl flex justify-center items-center p-5 m-5 bg-gradient-to-r from-white to-gray-400'>
                <div className='justify-center items-center flex flex-col'>
                    <p>Use Code : saver</p>
                    <br />
                    <p>
                        Save on our 12 Month Membership
                    </p>
                    <br />
                    <Button variant='outlined'>Join Now</Button>
                </div>
            </div>
        </section >
    )
}

export default Hero
