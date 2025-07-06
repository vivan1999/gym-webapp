import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box';
import sliderImage1 from '../assets/sliderImage1.png'
import sliderImage2 from '../assets/sliderImage2.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from 'react-router-dom'
import LoadingSpinner from '../components/Loader/LoadingSpinner';


const Hero = () => {
    const navigate = useNavigate()
    const [imageLoaded, setImageLoading] = useState(false)

    useEffect(() => {
        if (sliderImage1) {
            setImageLoading(true)
        }
    }, [sliderImage1])

    var settings = {
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const images = [
        { src: sliderImage1, alt: 'Fitness Goals', link: '/buy-membership' },
        { src: sliderImage2, alt: 'Train Hard', link: '/buy-membership' }
    ];

    return (
        <section className='relative w-full gap-2 lg:h-[76vh] md:h-[50vh] sm:h-[35vh] max-sm:h-[25vh] overflow-hidden'>
            <Slider {...settings}>
                {images.map((item, index) => {
                    return <div key={index} onClick={() => navigate(item.link)} className="cursor-pointer">
                        {!imageLoaded ? <div className=' items-center justify-items-center lg:h-[75vh] md:h-[50vh] sm:h-[35vh] max-sm:h-[25vh] w-full object-fill'><LoadingSpinner /></div> : <img
                            src={item.src}
                            alt={item.alt}
                            className=" lg:h-[75vh] md:h-[50vh] sm:h-[35vh] max-sm:h-[25vh] w-full object-fill"
                        />}
                    </div>

                })}
            </Slider>

            {/*<Box sx={{
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
                // comment => <div color='secondary' className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-[30%] max-lg:w-[50%] box-border rounded-3xl flex justify-center items-center p-5 m-5 bg-gradient-to-r from-white to-gray-400'>
                <div className='justify-center items-center flex flex-col'>
                    <Typography variant='body1'>Use Code : saver</Typography>
                    <br />
                    <Typography variant='body1'>
                        Save on our 12 Month Membership
                    </Typography>
                    <br />
                    <Button variant='contained' color="secondary">Join Now</Button>
                </div>
            </Box>*/}
        </section >
    )
}

export default Hero
